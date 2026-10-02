import { FC } from 'react';
import { Link, NavLink, useParams } from 'react-router-dom';
import { useCatalog, useCatalogItem } from '@/catalog/CatalogContext';
import { LibGlyph } from '@/components/Shell/Mark';
import { libraryDocs } from './libraryDocs.registry';

export const LibrariesIndex: FC = () => {
  const { catalog } = useCatalog();
  return (
    <div className="fs-page">
      <h1>Libraries</h1>
      <p>Every ForgeStack library. Open one for the docs. The package name under each card is the npm link.</p>
      {catalog?.groups.map((group) => (
        <section key={group.id} style={{ marginTop: 36 }}>
          <h2>{group.title}</h2>
          <p>{group.summary}</p>
          <div className="fs-lib-grid">
            {catalog.libraries.filter((item) => item.group === group.id).map((item) => (
              <article key={item.id} className="fs-lib-tile">
                <LibGlyph id={item.id} color={item.color} />
                <div>
                  <Link to={`/libraries/${item.id}`}>
                    <b>{item.name}</b>
                  </Link>
                  <p>{item.description}</p>
                  {item.npm && (
                    <a className="fs-pkg" href={`https://www.npmjs.com/package/${item.npm}`} target="_blank" rel="noreferrer">
                      {item.npm}
                    </a>
                  )}
                </div>
              </article>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export const LibraryPage: FC = () => {
  const params = useParams();
  const id = params.id;
  const slug = (params['*'] ?? '').replace(/\/$/, '');
  const { catalog, error } = useCatalog();
  const item = useCatalogItem(id);
  const docs = libraryDocs(id);

  if (error) {
    return <div className="fs-page"><h1>Catalog unavailable</h1><p>{error}</p></div>;
  }
  if (!catalog) {
    return <div className="fs-page"><h1>Loading the library…</h1><p>Reading catalog.json.</p></div>;
  }
  if (!item) {
    return <div className="fs-page"><h1>Library not in the catalog</h1><p>Nothing in catalog.json uses this id.</p></div>;
  }

  const related = catalog.libraries.filter((entry) => entry.group === item.group && entry.id !== item.id).slice(0, 4);
  const activeSlug = slug || docs?.home || '';
  let lastGroup = '';

  return (
    <article className="fs-land" style={{ ['--lib' as string]: item.color }}>
      <header className="fs-land-hero">
        <LibGlyph id={item.id} color={item.color} />
        <p className="fs-kicker" style={{ marginTop: 16 }}>{item.title}</p>
        <h1>{item.name}</h1>
        <p className="dek">{item.description}</p>
        <div className="fs-links">
          {item.npm && (
            <a className="fs-btn" href={`https://www.npmjs.com/package/${item.npm}`} target="_blank" rel="noreferrer">
              npm <code>{item.npm}</code>
            </a>
          )}
          {item.github && (
            <a className="fs-btn ghost" href={item.github} target="_blank" rel="noreferrer">GitHub</a>
          )}
          {item.vsix && (
            <a className="fs-btn ghost" href={item.vsix} target="_blank" rel="noreferrer">Open VSX</a>
          )}
        </div>
      </header>

      <div className="fs-docs">
        <nav aria-label="On this page">
          {docs ? docs.sections.map((section) => {
            const showGroup = section.group && section.group !== lastGroup;
            if (section.group) lastGroup = section.group;
            const to = section.slug === docs.home ? `/libraries/${item.id}` : `/libraries/${item.id}/${section.slug}`;
            return (
              <span key={section.slug}>
                {showGroup && <p className="fs-secgroup">{section.group}</p>}
                <NavLink to={to} className={activeSlug === section.slug ? 'on' : undefined}>
                  {section.label}
                </NavLink>
              </span>
            );
          }) : (
            <>
              <a href="#install">Install</a>
              {item.docs.map((section) => (
                <a key={section.heading} href={`#${section.heading.toLowerCase().replace(/\s+/g, '-')}`}>{section.heading}</a>
              ))}
              <a href="#capabilities">Capabilities</a>
              {related.length > 0 && <a href="#alongside">Alongside</a>}
            </>
          )}
        </nav>
        <div>
          {docs ? <div className="fs-docbody">{docs.render(activeSlug)}</div> : null}
          {!docs && (<>
          <section id="install">
            <h2>Install</h2>
            <p>
              {item.npm
                ? `${item.name} is published as ${item.npm}. The link goes to the package on npm.`
                : `${item.name} ships as an editor extension. Use the Open VSX link above.`}
            </p>
            {item.install && <pre>{item.install}</pre>}
            {item.npm && (
              <p>
                <a className="fs-pkg" href={`https://www.npmjs.com/package/${item.npm}`} target="_blank" rel="noreferrer">
                  {item.npm} on npm
                </a>
              </p>
            )}
          </section>
          {item.docs.map((section) => (
            <section key={section.heading} id={section.heading.toLowerCase().replace(/\s+/g, '-')}>
              <h2>{section.heading}</h2>
              <p>{section.body}</p>
              {section.code && <pre>{section.code}</pre>}
            </section>
          ))}
          <section id="capabilities">
            <h2>Capabilities</h2>
            <ul className="fs-feature-grid">
              {item.features.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </section>
          {related.length > 0 && (
            <section id="alongside">
              <h2>Alongside</h2>
              <p>Other libraries in the same layer. Each one still installs on its own.</p>
              <div className="fs-lib-grid" style={{ maxHeight: 'none' }}>
                {related.map((entry) => (
                  <Link key={entry.id} className="fs-lib-card" to={`/libraries/${entry.id}`}>
                    <LibGlyph id={entry.id} color={entry.color} />
                    <span>
                      <b>{entry.name}</b>
                      <span>{entry.title}</span>
                    </span>
                  </Link>
                ))}
              </div>
            </section>
          )}
          </>)}
        </div>
      </div>
    </article>
  );
};
