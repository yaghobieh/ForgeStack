import { FC, ReactNode } from 'react';
import { BearDocContent } from '@/components/BearDocContent';
import { DocContent } from '@/components/DocContent';
import { AnvilDocContent } from '@/components/AnvilDocContent';
import { KilnDocContent } from '@/components/KilnDocContent';
import { TableDocContent } from '@/components/TableDocContent';
import { SynapseDocContent } from '@/components/SynapseDocContent';
import { BEAR_NAV } from '@/constants/bear-docs.const';
import { ANVIL_NAV } from '@/constants/anvil-docs.const';
import { KILN_DOCS, KILN_NAV } from '@/constants/kiln-docs.const';
import { TABLE_NAV_ITEMS } from '@/constants/table-docs.const';
import { SYNAPSE_NAV_ITEMS } from '@/constants/synapse-docs.const';
import { HARBOR_NAV } from '@/pages/HarborDocs';
import { FORM_NAV_ITEMS, FormDocContent } from '@/pages/FormDocs';
import { FORGE_QUERY_NAV_ITEMS, ForgeQueryDocContent } from '@/pages/ForgeQueryDocs';
import { COMPASS_NAV_ITEMS, CompassDocContent } from '@/pages/CompassDocs';
import { CliDocs } from '@/pages/CliDocs';
import { AuthDocs } from '@/pages/AuthDocs';
import RelayDocs from '@/pages/RelayDocs';
import RailDocs from '@/pages/RailDocs';
import LingoDocs from '@/pages/LingoDocs';
import AeroCraftDocs from '@/pages/AeroCraftDocs';
import TorchDocs from '@/pages/TorchDocs';

export interface DocSectionLink {
  slug: string;
  label: string;
  group?: string;
}

export interface LibraryDocs {
  home: string;
  sections: DocSectionLink[];
  render: (slug: string) => ReactNode;
}

function flat(
  items: { path: string; label: string }[],
  home = 'overview',
): DocSectionLink[] {
  return items.map((item) => ({ slug: item.path || home, label: item.label }));
}

function page(slug: string, home: string): string {
  return slug || home;
}

const kilnPages = Object.keys(KILN_DOCS);

const REGISTRY: Record<string, LibraryDocs> = {
  bear: {
    home: 'overview',
    sections: flat(BEAR_NAV),
    render: (slug) => <BearDocContent page={page(slug, 'overview')} />,
  },
  harbor: {
    home: 'quick-start',
    sections: HARBOR_NAV.flatMap((group) =>
      group.sections.map((section) => ({ slug: section.path, label: section.title, group: group.title })),
    ),
    render: (slug) => <DocContent page={page(slug, 'quick-start')} />,
  },
  table: {
    home: 'overview',
    sections: flat(TABLE_NAV_ITEMS),
    render: (slug) => <TableDocContent page={page(slug, 'overview')} />,
  },
  synapse: {
    home: 'overview',
    sections: flat(SYNAPSE_NAV_ITEMS),
    render: (slug) => <SynapseDocContent page={page(slug, 'overview')} />,
  },
  anvil: {
    home: 'overview',
    sections: flat(ANVIL_NAV),
    render: (slug) => <AnvilDocContent page={page(slug, 'overview')} />,
  },
  kiln: {
    home: 'overview',
    sections: flat(KILN_NAV),
    render: (slug) => {
      const key = page(slug, 'overview');
      const safe = (kilnPages.includes(key) ? key : 'overview') as keyof typeof KILN_DOCS;
      return <KilnDocContent page={safe} />;
    },
  },
  query: {
    home: 'overview',
    sections: flat(FORGE_QUERY_NAV_ITEMS),
    render: (slug) => <ForgeQueryDocContent page={page(slug, 'overview')} />,
  },
  compass: {
    home: 'overview',
    sections: flat(COMPASS_NAV_ITEMS),
    render: (slug) => <CompassDocContent page={page(slug, 'overview')} />,
  },
  form: {
    home: 'overview',
    sections: flat(FORM_NAV_ITEMS),
    render: (slug) => <FormDocContent page={page(slug, 'overview')} />,
  },
  cli: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <CliDocs /> },
  auth: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <AuthDocs /> },
  relay: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <RelayDocs /> },
  rail: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <RailDocs /> },
  lingo: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <LingoDocs /> },
  aerocraft: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <AeroCraftDocs /> },
  torch: { home: 'overview', sections: [{ slug: 'overview', label: 'Overview' }], render: () => <TorchDocs /> },
};

export function libraryDocs(id: string | undefined): LibraryDocs | undefined {
  if (!id) return undefined;
  return REGISTRY[id];
}

export const DocBody: FC<{ id: string; slug: string }> = ({ id, slug }) => {
  const docs = libraryDocs(id);
  if (!docs) return null;
  return <>{docs.render(slug)}</>;
};
