import { FC, useEffect, useRef, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AUTHOR } from '@/constants/author.const';
import { useCatalog } from '@/catalog/CatalogContext';
import { useShellUI } from '@/catalog/shell';
import { ThemeControl } from '@/catalog/theme';
import { CatalogItem } from '@/catalog/types';
import { LibGlyph, Mark } from './Mark';
import { SiteSearch } from './SiteSearch';

const iconProps = {
  width: 18,
  height: 18,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.8,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
  'aria-hidden': true,
};

export const SiteHeader: FC = () => {
  const { catalog } = useCatalog();
  const { panel, open, close } = useShellUI();
  const [group, setGroup] = useState('all');
  const [mobileNav, setMobileNav] = useState(false);
  const [mobile, setMobile] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();
  const closeTimer = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 980px)');
    const onMq = () => setMobile(mq.matches);
    onMq();
    mq.addEventListener('change', onMq);
    const onKey = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        close();
        setSearchOpen(false);
        setMobileNav(false);
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => {
      mq.removeEventListener('change', onMq);
      window.removeEventListener('keydown', onKey);
    };
  }, [close]);

  useEffect(() => {
    if (!panel) return;
    const onDown = (event: MouseEvent) => {
      const top = document.querySelector('.fs-top');
      if (top && event.target instanceof Node && !top.contains(event.target)) close();
    };
    document.addEventListener('mousedown', onDown);
    return () => document.removeEventListener('mousedown', onDown);
  }, [panel, close]);

  const cancelClose = () => {
    if (closeTimer.current) window.clearTimeout(closeTimer.current);
  };
  const scheduleClose = () => {
    if (mobile) return;
    cancelClose();
    closeTimer.current = window.setTimeout(() => close(), 140);
  };
  const hover = (next: 'libraries' | 'tools' | 'support') => {
    if (mobile) return;
    cancelClose();
    open(next);
  };
  const tap = (next: 'libraries' | 'tools' | 'support') => {
    if (!mobile) return;
    setMobileNav(false);
    open(panel === next ? null : next);
  };

  const libraries = catalog?.libraries ?? [];
  const visible = group === 'all' ? libraries : libraries.filter((item) => item.group === group);

  const go = (item: CatalogItem) => {
    close();
    setMobileNav(false);
    navigate(`/libraries/${item.id}`);
  };

  return (
    <header className="fs-top" onMouseEnter={cancelClose} onMouseLeave={scheduleClose}>
      <div className="fs-top-row">
        <Link to="/" className="fs-brand" onClick={() => { close(); setMobileNav(false); }}>
          <Mark />
          <span>ForgeStack</span>
        </Link>

        <div className="fs-center">
          <nav className={`fs-nav${mobileNav ? ' mobile-open' : ''}`} aria-label="Main">
            <button type="button" aria-expanded={panel === 'libraries'} onMouseEnter={() => hover('libraries')} onFocus={() => hover('libraries')} onClick={() => tap('libraries')}>
              Libraries
            </button>
            <span className="fs-disabled" title="Blog is paused" aria-disabled="true">Blog</span>
            <Link to="/community" onClick={() => { close(); setMobileNav(false); }}>Community</Link>
            <button type="button" aria-expanded={panel === 'tools'} onMouseEnter={() => hover('tools')} onClick={() => tap('tools')}>
              Tools
            </button>
            <button type="button" aria-expanded={panel === 'support'} onMouseEnter={() => hover('support')} onClick={() => tap('support')}>
              Support
            </button>
          </nav>
          <button
            className="fs-icon-btn"
            type="button"
            aria-label="Search the site"
            onClick={() => { setSearchOpen(true); close(); }}
          >
            <svg {...iconProps}><circle cx="11" cy="11" r="7" /><path d="M20 20l-3.5-3.5" /></svg>
          </button>
        </div>

        <div className="fs-icons">
          <ThemeControl />
          <span className="fs-social" style={{ display: 'contents' }}>
            <a className="fs-social" href="/#stack-builder" title="Stack Builder" aria-label="Stack Builder">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2.2l1.8 5.4 5.6.2-4.4 3.5 1.5 5.5L12 13.8 7.5 16.8l1.5-5.5L4.6 7.8l5.6-.2L12 2.2z" /></svg>
            </a>
            <a className="fs-social" href="https://github.com/yaghobieh" target="_blank" rel="noreferrer" aria-label="GitHub">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.2-3.4-1.2-.5-1.1-1.1-1.4-1.1-1.4-.9-.6.1-.6.1-.6 1 .1 1.5 1 1.5 1 .9 1.5 2.4 1.1 3 .8.1-.6.4-1.1.6-1.3-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.6.7 1 1.6 1 2.7 0 3.9-2.3 4.7-4.6 5 .4.3.7 1 .7 1.9V21c0 .3.2.6.7.5A10 10 0 0 0 12 2z" /></svg>
            </a>
            <a className="fs-social" href="https://www.npmjs.com/org/forgedevstack" target="_blank" rel="noreferrer" aria-label="npm">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 4h16v16h-5V9h-3v11H4V4z" /></svg>
            </a>
            <a className="fs-social" href="https://discord.gg/forgestack" target="_blank" rel="noreferrer" aria-label="Discord">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19.3 5.2A17 17 0 0 0 15 4l-.4.8a15.2 15.2 0 0 1 3.7 1.4 16 16 0 0 0-12.6 0A14 14 0 0 1 9.4 4.8L9 4a17 17 0 0 0-4.3 1.2C2.1 8.9 1.4 12.5 1.6 16.1A17.2 17.2 0 0 0 7 18.6l.8-1.2a11.2 11.2 0 0 1-1.8-.9l.4-.3c3.6 1.7 7.5 1.7 11.1 0l.4.3c-.6.4-1.2.7-1.8.9l.8 1.2a17.2 17.2 0 0 0 5.4-2.5c.5-4.2-.6-7.8-2-10.9zM8.8 14.3c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1zm6.4 0c-1 0-1.9-.9-1.9-2.1s.8-2.1 1.9-2.1 1.9 1 1.9 2.1-.8 2.1-1.9 2.1z" /></svg>
            </a>
            <a className="fs-social" href="https://www.youtube.com/results?search_query=forgestack" target="_blank" rel="noreferrer" aria-label="YouTube">
              <svg width="20" height="20" viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M23 12.2s0-3.2-.4-4.6c-.2-.9-.9-1.6-1.8-1.8C19.2 5.4 12 5.4 12 5.4s-7.2 0-8.8.4c-.9.2-1.6.9-1.8 1.8C1 9 1 12.2 1 12.2s0 3.2.4 4.6c.2.9.9 1.6 1.8 1.8 1.6.4 8.8.4 8.8.4s7.2 0 8.8-.4c.9-.2 1.6-.9 1.8-1.8.4-1.4.4-4.6.4-4.6zM9.8 15.5v-6.6l6.2 3.3-6.2 3.3z" /></svg>
            </a>
          </span>
        </div>
        <button className="fs-burger" type="button" aria-label="Open menu" onClick={() => setMobileNav((value) => !value)}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h16M4 17h16" /></svg>
        </button>
      </div>

      {panel === 'libraries' && (
        <div className="fs-panel-wrap">
          <div className="fs-panel" role="dialog" aria-label="Libraries">
            <div className="fs-filters" role="group" aria-label="Filter libraries">
              <button type="button" aria-pressed={group === 'all'} onClick={() => setGroup('all')}>All</button>
              {catalog?.groups.map((entry) => (
                <button key={entry.id} type="button" aria-pressed={group === entry.id} onClick={() => setGroup(entry.id)}>
                  {entry.title}
                </button>
              ))}
            </div>
            <div className="fs-lib-grid">
              {visible.map((item) => (
                <button key={item.id} type="button" className="fs-lib-card" onClick={() => go(item)}>
                  <LibGlyph id={item.id} color={item.color} />
                  <span>
                    <b>
                      {item.name}
                      {item.status === 'soon' && <i className="fs-soon">Soon</i>}
                    </b>
                    <span>{item.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {panel === 'tools' && (
        <div className="fs-panel-wrap">
          <div className="fs-panel" role="dialog" aria-label="Tools" style={{ maxWidth: 720 }}>
            <p className="fs-kicker">TOOLS</p>
            <div className="fs-lib-grid" style={{ gridTemplateColumns: '1fr 1fr', maxHeight: 'none' }}>
              {[...(catalog?.tools ?? []), ...(catalog?.extensions ?? [])].map((item) => (
                <button key={item.id} type="button" className="fs-lib-card" onClick={() => go(item)}>
                  <LibGlyph id={item.id} color={item.color} />
                  <span>
                    <b>{item.name}</b>
                    <span>{item.title}</span>
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {panel === 'support' && (
        <div className="fs-panel-wrap">
          <div className="fs-panel fs-support" role="dialog" aria-label="Support">
            <div className="fs-support-col">
              <p className="fs-kicker">SUPPORT</p>
              <Link className="row" to="/support/connect" onClick={close}>
                <LibGlyph id="relay" color="#3ddc84" />
                <span><b>Connect us</b><span>Discord, GitHub, and a note to the team.</span></span>
              </Link>
              <Link className="row" to="/support/agenda" onClick={close}>
                <LibGlyph id="calendar" color="#ff8a4c" />
                <span><b>Agenda</b><span>What the stack is building next.</span></span>
              </Link>
              <Link className="row" to="/support/career" onClick={close}>
                <LibGlyph id="anvil" color="#9aa59f" />
                <span><b>Career</b><span>Roles at ForgeStack, when we open them.</span></span>
              </Link>
            </div>
            <aside className="fs-side-card">
              <p className="fs-kicker">STUDIO</p>
              <div className="who">John Yaghobieh</div>
              <p>Creator of ForgeStack. The libraries, the CLI, and the editor extensions.</p>
              <a className="fs-btn" href={AUTHOR.linkedin} target="_blank" rel="noreferrer">LinkedIn profile</a>
            </aside>
          </div>
        </div>
      )}

      {searchOpen && <SiteSearch onClose={() => setSearchOpen(false)} />}
    </header>
  );
};
