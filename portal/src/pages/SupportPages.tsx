import { FC } from 'react';
import { AUTHOR } from '@/constants/author.const';

export const CommunityPage: FC = () => (
  <div className="fs-page">
    <h1>Community</h1>
    <p>Questions, bugs, and things you shipped with the libraries.</p>
    <a className="fs-chan" href="https://discord.gg/forgestack" target="_blank" rel="noreferrer">
      <b>Discord</b>
      <span>Ask in the open. Share what you are building.</span>
    </a>
    <a className="fs-chan" href="https://github.com/yaghobieh" target="_blank" rel="noreferrer">
      <b>GitHub</b>
      <span>Source, issues, and pull requests.</span>
    </a>
    <a className="fs-chan" href={AUTHOR.linkedin} target="_blank" rel="noreferrer">
      <b>{AUTHOR.name}</b>
      <span>LinkedIn profile.</span>
    </a>
  </div>
);

export const ConnectPage: FC = () => (
  <div className="fs-page">
    <h1>Connect us</h1>
    <p>The people building ForgeStack. Pick the channel that fits.</p>
    <a className="fs-chan" href="https://discord.gg/forgestack" target="_blank" rel="noreferrer">
      <b>Discord</b>
      <span>Fast questions.</span>
    </a>
    <a className="fs-chan" href="https://github.com/yaghobieh/ForgeStack" target="_blank" rel="noreferrer">
      <b>GitHub</b>
      <span>Bugs and pull requests on the site repo.</span>
    </a>
    <a className="fs-chan" href="mailto:hello@forgedevstack.com">
      <b>Email</b>
      <span>hello@forgedevstack.com</span>
    </a>
    <a className="fs-chan" href={AUTHOR.linkedin} target="_blank" rel="noreferrer">
      <b>{AUTHOR.name}</b>
      <span>LinkedIn.</span>
    </a>
  </div>
);

export const AgendaPage: FC = () => (
  <div className="fs-page">
    <h1>Agenda</h1>
    <p>What is in motion. Dates move. The order is the commitment.</p>
    <a className="fs-chan" href="/#stack-builder">
      <b>Stack Builder</b>
      <span>The prompt on the home page is ready. Gemini is the next wire.</span>
    </a>
    <a className="fs-chan" href="/libraries/calendar">
      <b>Calendar</b>
      <span>Month, week, day, agenda. Drag between slots is the follow-up.</span>
    </a>
    <a className="fs-chan" href="/libraries/harbor">
      <b>Harbor core split</b>
      <span>Route types, constants, and helpers move into their own files. The public API stays.</span>
    </a>
    <a className="fs-chan" href="/blog">
      <b>Blog</b>
      <span>Paused in the navigation until there is a post worth the click.</span>
    </a>
  </div>
);

export const CareerPage: FC = () => (
  <div className="fs-page">
    <h1>Career</h1>
    <p>
      ForgeStack is not hiring a team this week. If you care about developer tools and open source,
      write to {AUTHOR.name}.
    </p>
    <a className="fs-btn" href={AUTHOR.linkedin} target="_blank" rel="noreferrer">
      {AUTHOR.name} on LinkedIn
    </a>
  </div>
);

export const TermsPage: FC = () => (
  <div className="fs-page">
    <h1>Terms</h1>
    <p>
      The libraries are MIT licensed. This site is the catalog and the docs. Do not copy the mark onto a product
      that is not ForgeStack. Packages published under @forgedevstack follow the license in each repository.
    </p>
  </div>
);
