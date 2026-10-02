import { FC, useEffect, useMemo, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCatalog } from '@/catalog/CatalogContext';

interface Hit {
  id: string;
  title: string;
  blurb: string;
  href: string;
}

const PAGES: Hit[] = [
  { id: 'community', title: 'Community', blurb: 'Discord, GitHub, and the people building it', href: '/community' },
  { id: 'connect', title: 'Connect us', blurb: 'How to reach the ForgeStack team', href: '/support/connect' },
  { id: 'agenda', title: 'Agenda', blurb: 'What the stack is building next', href: '/support/agenda' },
  { id: 'career', title: 'Career', blurb: 'Roles and how to write to John Yaghobieh', href: '/support/career' },
  { id: 'builder', title: 'Stack Builder', blurb: 'Describe an app and the stack will pick the libraries', href: '/#stack-builder' },
];

export const SiteSearch: FC<{ onClose: () => void }> = ({ onClose }) => {
  const { items } = useCatalog();
  const [query, setQuery] = useState('');
  const [active, setActive] = useState(0);
  const input = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const hits = useMemo(() => {
    const pool: Hit[] = [
      ...items.map((item) => ({
        id: item.id,
        title: item.name,
        blurb: item.npm ? `${item.npm} · ${item.description}` : item.description,
        href: `/libraries/${item.id}`,
      })),
      ...PAGES,
    ];
    const needle = query.trim().toLowerCase();
    if (!needle) return pool.slice(0, 8);
    return pool.filter((hit) => `${hit.title} ${hit.blurb}`.toLowerCase().includes(needle)).slice(0, 12);
  }, [items, query]);

  useEffect(() => {
    input.current?.focus();
    setActive(0);
  }, [query]);

  const go = (hit: Hit | undefined) => {
    if (!hit) return;
    onClose();
    if (hit.href.startsWith('/#')) {
      navigate('/');
      window.setTimeout(() => document.querySelector(hit.href.slice(1))?.scrollIntoView(), 50);
      return;
    }
    navigate(hit.href);
  };

  return (
    <div className="fs-search" role="presentation" onMouseDown={onClose}>
      <div
        className="fs-search-card"
        role="dialog"
        aria-label="Search ForgeStack"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <input
          ref={input}
          value={query}
          placeholder="Search libraries, tools, docs"
          aria-label="Search"
          onChange={(event) => setQuery(event.target.value)}
          onKeyDown={(event) => {
            if (event.key === 'ArrowDown') {
              event.preventDefault();
              setActive((index) => Math.min(index + 1, hits.length - 1));
            } else if (event.key === 'ArrowUp') {
              event.preventDefault();
              setActive((index) => Math.max(index - 1, 0));
            } else if (event.key === 'Enter') {
              event.preventDefault();
              go(hits[active]);
            }
          }}
        />
        <div className="fs-search-list">
          {hits.length === 0 && <div className="empty">No matches for “{query}”.</div>}
          {hits.map((hit, index) => (
            <a
              key={hit.id}
              href={hit.href}
              className={index === active ? 'active' : undefined}
              onMouseEnter={() => setActive(index)}
              onClick={(event) => {
                event.preventDefault();
                go(hit);
              }}
            >
              {hit.title}
              <small>{hit.blurb}</small>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
