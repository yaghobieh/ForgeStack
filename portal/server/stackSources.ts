import { execFile } from 'node:child_process';
import { readFileSync } from 'node:fs';
import { resolve } from 'node:path';

export interface AskSource {
  label: string;
  href: string;
  kind: 'docs' | 'forge' | 'npm' | 'google' | 'web';
}

export interface Research {
  notes: string;
  sources: AskSource[];
}

interface CatalogDoc {
  heading?: string;
  body?: string;
  code?: string;
}

interface CatalogEntry {
  id?: string;
  name?: string;
  npm?: string;
  description?: string;
  docsPath?: string;
  install?: string;
  docs?: CatalogDoc[];
}

const FORGE_SITE = 'https://forgedevstack.com';

const SITES: Record<string, string> = {
  bear: 'https://bearui.com',
  rail: 'https://railjs.com',
  table: 'https://grid-table.com',
  aerocraft: 'https://aerocraftjs.com',
  harbor: 'https://harborjs.com',
  calendar: 'https://forgecalendar.com',
  ink: 'https://inkforgejs.com',
  torch: 'https://torchjs.com',
  synapse: 'https://forgestack.dev/synapse',
};

const DIRS: Record<string, string> = {
  bear: 'bear',
  rail: 'rail',
  table: 'grid-table',
  aerocraft: 'aerocraft',
  harbor: 'Harbor',
  calendar: 'calendar',
  ink: 'ink',
  torch: 'torch',
  synapse: 'synapse',
  compass: 'compass',
  kiln: 'kiln',
  lingo: 'lingo',
  anvil: 'anvil',
  form: 'forge-form',
  query: 'forge-query',
};

const ALIASES: Record<string, string[]> = {
  table: ['grid table', 'grid-table', 'gridtable', 'data grid'],
  form: ['forge form'],
  query: ['forge query'],
  aerocraft: ['aero craft', 'aerocraftjs'],
};

const STOP = new Set(['how', 'can', 'the', 'what', 'does', 'did', 'for', 'and', 'with', 'you', 'change', 'from', 'this', 'that', 'are', 'use', 'using', 'into', 'your']);

const loadCatalog = (portalRoot: string): CatalogEntry[] => {
  const raw = JSON.parse(readFileSync(resolve(portalRoot, 'public/catalog.json'), 'utf8')) as {
    libraries?: CatalogEntry[];
    tools?: CatalogEntry[];
    extensions?: CatalogEntry[];
  };
  return [...(raw.libraries ?? []), ...(raw.tools ?? []), ...(raw.extensions ?? [])];
};

const forgeRoot = (portalRoot: string) => resolve(portalRoot, '../..');

const hostOf = (url: string) => {
  try {
    return new URL(url).host;
  } catch {
    return url;
  }
};

const matchLibraries = (question: string, entries: CatalogEntry[]): CatalogEntry[] => {
  const text = question.toLowerCase();
  const picked = entries.filter((entry) => {
    const id = entry.id ?? '';
    const names = [entry.name ?? '', id, ...(ALIASES[id] ?? [])].map((name) => name.toLowerCase()).filter(Boolean);
    return names.some((name) => name.length > 2 && text.includes(name));
  });
  if (/\bgrid\b/.test(text) && /\b(table|col|column|cell|color|colour)\b/.test(text)) {
    const table = entries.find((entry) => entry.id === 'table');
    if (table && !picked.includes(table)) picked.unshift(table);
  }
  return picked.slice(0, 2);
};

const searchTerms = (question: string): string => {
  const words = question.toLowerCase().match(/[a-z0-9]{3,}/g) ?? [];
  const terms = [...new Set(words.filter((word) => !STOP.has(word)))].slice(0, 6);
  return terms.join('|');
};

const runRg = (cwd: string, pattern: string, dir: string): Promise<string> =>
  new Promise((done) => {
    execFile(
      'rg',
      ['-n', '-i', '-C', '2', '-m', '12', '--glob', '!**/node_modules/**', '--glob', '!**/dist/**', pattern, dir],
      { cwd, timeout: 5000, maxBuffer: 180_000 },
      (_error, stdout) => done((stdout ?? '').slice(0, 5000)),
    );
  });

const readAnchor = (root: string, relative: string, max = 2200): string => {
  try {
    return readFileSync(resolve(root, relative), 'utf8').slice(0, max);
  } catch {
    return '';
  }
};

const fetchText = async (url: string): Promise<string> => {
  const response = await fetch(url, {
    signal: AbortSignal.timeout(7000),
    headers: {
      Accept: 'text/html,application/json',
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
    },
  });
  if (!response.ok) return '';
  return response.text();
};

const npmFacts = async (npmName: string): Promise<string> => {
  const encoded = npmName.replace('/', '%2F');
  try {
    const body = await fetchText(`https://registry.npmjs.org/${encoded}`);
    const data = JSON.parse(body) as {
      description?: string;
      'dist-tags'?: { latest?: string };
      homepage?: string;
      readme?: string;
    };
    const version = data['dist-tags']?.latest ?? '';
    const readme = (data.readme ?? '').replace(/\s+/g, ' ').slice(0, 900);
    return [`npm ${npmName}@${version}`, data.description ?? '', data.homepage ? `homepage ${data.homepage}` : '', readme]
      .filter(Boolean)
      .join('\n');
  } catch {
    return '';
  }
};

const googleLinks = async (query: string): Promise<AskSource[]> => {
  const searchUrl = `https://www.google.com/search?q=${encodeURIComponent(query)}`;
  const found: AskSource[] = [{ kind: 'google', label: 'Google', href: searchUrl }];
  try {
    const html = await fetchText(`https://html.duckduckgo.com/html/?q=${encodeURIComponent(query)}`);
    const links = [...html.matchAll(/uddg=([^&"]+)/g)]
      .map((match) => decodeURIComponent(match[1]))
      .filter((href) => href.startsWith('http') && !href.includes('duckduckgo.com'))
      .slice(0, 4);
    for (const href of links) {
      found.push({ kind: 'web', label: hostOf(href), href });
    }
  } catch {
    return found;
  }
  return found;
};

const dedupe = (sources: AskSource[]): AskSource[] => {
  const seen = new Set<string>();
  return sources.filter((source) => {
    if (seen.has(source.href)) return false;
    seen.add(source.href);
    return true;
  });
};

const tableColorNote = `Grid Table column color, from the library source:
- On a column, cellStyle and headerStyle are CSSProperties. cellStyle paints the body cells. headerStyle paints the header cell.
- GridTableThemeTokens paints the whole table: header, columns (every body cell), and col. col keys are 1-based visible column numbers. Each part accepts background, text, border, and hover.
- Pass theme to GridTable, or wrap the table in GridTableTheme. Table theme wins over the provider.
- Import { GridTable, GridTableTheme } from '@forgedevstack/grid-table'.`;

export const libraryIndex = (portalRoot: string): string => {
  try {
    return loadCatalog(portalRoot)
      .map((entry) => {
        const site = entry.id ? SITES[entry.id] : undefined;
        const forge = entry.docsPath ? `${FORGE_SITE}${entry.docsPath}` : '';
        return `${entry.name}${entry.npm ? ` (${entry.npm})` : ''}: ${entry.description ?? ''}${site ? ` Docs: ${site}` : ''}${forge ? ` Forge: ${forge}` : ''}`;
      })
      .join('\n');
  } catch {
    return 'Bear https://bearui.com, Grid Table https://grid-table.com, Rail https://railjs.com, AeroCraft https://aerocraftjs.com, Harbor https://harborjs.com, Torch https://torchjs.com, Ink https://inkforgejs.com, Calendar https://forgecalendar.com.';
  }
};

export const gatherResearch = async (portalRoot: string, question: string): Promise<Research> => {
  const entries = loadCatalog(portalRoot);
  const matched = matchLibraries(question, entries);
  const root = forgeRoot(portalRoot);
  const sources: AskSource[] = [];
  const notes: string[] = [];
  const wantsTableColor = matched.some((entry) => entry.id === 'table') && /\b(col|column|cell|color|colour|style|theme|header)\b/i.test(question);

  if (wantsTableColor) notes.push(tableColorNote);

  await Promise.all(
    matched.map(async (entry) => {
      const id = entry.id ?? '';
      const site = SITES[id];
      const forgeDocs = entry.docsPath ? `${FORGE_SITE}${entry.docsPath}` : '';
      if (site) sources.push({ kind: 'docs', label: hostOf(site), href: site });
      if (forgeDocs) sources.push({ kind: 'forge', label: `Forge ${entry.name}`, href: forgeDocs });
      if (entry.npm) sources.push({ kind: 'npm', label: entry.npm, href: `https://www.npmjs.com/package/${entry.npm}` });

      const siteHost = site ? hostOf(site) : 'forgedevstack.com';
      const found = await googleLinks(`${question} site:${siteHost}`);
      sources.push(...found);

      const blocks = [
        `${entry.name} ${entry.npm ?? ''}`.trim(),
        entry.description ?? '',
        entry.install ? `Install: ${entry.install}` : '',
        site ? `Docs site: ${site}` : '',
        forgeDocs ? `Forge docs: ${forgeDocs}` : '',
      ];
      const sample = entry.docs?.find((doc) => doc.code)?.code;
      if (sample) blocks.push(`Catalog sample:\n${sample}`);
      if (entry.npm) {
        const facts = await npmFacts(entry.npm);
        if (facts) blocks.push(facts);
      }
      const dir = DIRS[id];
      const pattern = searchTerms(question);
      if (dir && pattern) {
        const hits = await runRg(root, wantsTableColor ? `${pattern}|cellStyle|headerStyle|GridTableTheme` : pattern, dir);
        if (hits) blocks.push(`Source search in ${dir}:\n${hits}`);
      }
      notes.push(blocks.filter(Boolean).join('\n'));
    }),
  );

  if (wantsTableColor) {
    const theme = readAnchor(root, 'grid-table/src/types/theme.types.ts');
    const columns = readAnchor(root, 'grid-table/src/types/column.types.ts', 1800);
    if (theme) notes.push(`theme.types.ts:\n${theme}`);
    if (columns) notes.push(`column.types.ts:\n${columns}`);
  }

  if (sources.length === 0) {
    sources.push({
      kind: 'google',
      label: 'Google',
      href: `https://www.google.com/search?q=${encodeURIComponent(`${question} forgedevstack`)}`,
    });
  }

  return { notes: notes.filter(Boolean).join('\n\n'), sources: dedupe(sources).slice(0, 8) };
};
