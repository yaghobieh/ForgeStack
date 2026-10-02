import { FC, Fragment } from 'react';
import { Link } from 'react-router-dom';
import { useCatalog } from '@/catalog/CatalogContext';
import { useShellUI } from '@/catalog/shell';
import { LibGlyph } from '../components/Shell/Mark';

const BOXES = [
  { id: 'bear', line: 'Components for the screen. Theme, inputs, overlays.' },
  { id: 'synapse', line: 'State the components read. No reducers.' },
  { id: 'harbor', line: 'The Node server those screens call.' },
  { id: 'compass', line: 'Client routes, guards, and transitions.' },
];

const LAYERS = [
  { id: 'components', name: 'Interface' },
  { id: 'logic', name: 'State and data' },
  { id: 'backend', name: 'Server' },
  { id: 'tooling', name: 'Tooling' },
  { id: 'editor', name: 'Editor' },
];

const FRAMEWORKS = ['React', 'Vue', 'Angular', 'Svelte'];
const PATH = [
  { id: 'bear', name: 'Bear' },
  { id: 'form', name: 'Form' },
  { id: 'query', name: 'Query' },
  { id: 'harbor', name: 'Harbor' },
];

const Arrow: FC = () => (
  <svg className="fs-arrow" width="28" height="14" viewBox="0 0 28 14" aria-hidden="true">
    <path d="M0 7h22M16 1l8 6-8 6" fill="none" stroke="currentColor" strokeWidth="1.7" />
  </svg>
);

export const ForgeHome: FC = () => {
  const { open } = useShellUI();
  const { catalog, items } = useCatalog();

  const strips = LAYERS.map((layer) => {
    const libs = !catalog
      ? []
      : layer.id === 'editor'
        ? [...catalog.tools, ...catalog.extensions]
        : catalog.libraries.filter((entry) => entry.group === layer.id);
    const shown = libs.slice(0, 3).map((entry) => entry.name);
    const extra = libs.length - shown.length;
    return {
      ...layer,
      count: libs.length,
      hint: extra > 0 ? `${shown.join(', ')} +${extra}` : shown.join(', '),
    };
  });

  return (
    <>
      <section className="fs-hero">
        <div>
          <h1>Libraries forged to fit together.</h1>
          <p className="lede">
            {catalog ? `${items.length} open-source libraries` : 'Open-source libraries'} for TypeScript apps. Use one, or the whole family.
          </p>
          <button className="fs-btn green" type="button" onClick={() => open('libraries')}>
            Browse the Forge
          </button>
        </div>
        <ol className="fs-slabs" aria-label="ForgeStack layers">
          {strips.map((strip) => (
            <li key={strip.id}>
              <button type="button" className="fs-slab" onClick={() => open('libraries')}>
                <span>
                  <b>{strip.name}</b>
                  <small>{strip.hint}</small>
                </span>
                <span className="n">{strip.count}</span>
              </button>
            </li>
          ))}
        </ol>
      </section>

      <section className="fs-builder" id="stack-builder">
        <div className="fs-builder-inner">
          <label htmlFor="stack-builder-input">Tell Stack Builder to do it for you</label>
          <div className="fs-soon-field">
            <textarea id="stack-builder-input" disabled placeholder="" />
            <span>Coming soon</span>
          </div>
        </div>
      </section>

      <section className="fs-section">
        <div className="fs-section-inner">
          <div className="fs-what-head">
            <h2>What is ForgeStack?</h2>
            <p>
              ForgeStack is an open-source family of TypeScript libraries for the whole app.
              Bear draws the interface. Synapse holds state. Forge Form and Forge Query move data.
              Compass routes the screen. Harbor serves it. GitForge and the CLI sit in the editor.
              Install one library, or follow the arrows and use them together. The license is MIT.
            </p>
          </div>

          <div className="fs-what-row">
            <div>
              <div className="fs-kicker">EVERY FRAMEWORK</div>
              <h3>React, Vue, Angular, and Svelte</h3>
              <p>
                The same family reaches each of these. Start in React, Vue, Angular, or Svelte.
                The libraries stay typed TypeScript underneath, so a screen in one framework can call the same Harbor route as a screen in another.
              </p>
            </div>
            <div className="fs-flow" aria-label="React, Vue, Angular, and Svelte">
              {FRAMEWORKS.map((name, index) => (
                <Fragment key={name}>
                  {index > 0 && <Arrow />}
                  <span>{name}</span>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="fs-what-row">
            <div>
              <div className="fs-kicker">ONE PATH</div>
              <h3>From the screen to the server</h3>
              <p>
                A click starts in Bear. Forge Form checks the field. Forge Query loads or saves.
                Harbor answers. Each arrow is a handoff you can skip: any one of these libraries runs alone.
              </p>
            </div>
            <div className="fs-flow" aria-label="Bear to Harbor">
              {PATH.map((step, index) => (
                <Fragment key={step.id}>
                  {index > 0 && <Arrow />}
                  <Link to={`/libraries/${step.id}`}>{step.name}</Link>
                </Fragment>
              ))}
            </div>
          </div>

          <div className="fs-what-row">
            <div>
              <div className="fs-kicker">TYPESCRIPT</div>
              <h3>Typed from the route to the screen</h3>
              <p>
                A Harbor route, a Forge Query result, and a form field stay typed. Autocomplete follows the value
                from the server into the component that renders it. You do not add a codegen step to keep them in line.
              </p>
            </div>
            <div className="fs-types">
              <div><code>req.params.id</code><em>string</em></div>
              <div><code>query.data</code><em>User[]</em></div>
              <div><code>form.email</code><em>Field&lt;string&gt;</em></div>
            </div>
          </div>

          <div className="fs-what-row">
            <div>
              <div className="fs-kicker">THE EDITOR</div>
              <h3>CLI, GitForge, and LintForge</h3>
              <p>
                Forge CLI scaffolds a project. GitForge is the Git extension for VS Code and Cursor.
                LintForge keeps types in type files and constants in const files. They are part of the family, not a separate product site.
              </p>
            </div>
            <div className="fs-flow">
              <Link to="/libraries/cli">Forge CLI</Link>
              <Arrow />
              <Link to="/libraries/gitforge">GitForge</Link>
              <Arrow />
              <Link to="/libraries/lintforge">LintForge</Link>
            </div>
          </div>

          <div className="fs-boxes">
            {BOXES.map((box) => {
              const item = items.find((entry) => entry.id === box.id);
              return (
                <Link key={box.id} className="fs-box" to={`/libraries/${box.id}`}>
                  <LibGlyph id={box.id} color={item?.color ?? '#3ddc84'} />
                  <b>{item?.name ?? box.id}</b>
                  <span>{box.line}</span>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};
