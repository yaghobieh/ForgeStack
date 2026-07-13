import { FC } from 'react';
import { FocusSections } from '../components/FocusSections';
import { Footer } from '../components/Footer';
import { useHashScroll, usePageMeta } from '../hooks';
import { AI_TOOLING_PATH } from '@constants/menu.const';

const AI_TOOLING_TITLE = 'MCP, AI & Skills';
const AI_TOOLING_DESCRIPTION =
  'How ForgeStack embraces AI tooling: Forge MCP servers for agents, the Forge AI RAG toolkit, and Cursor skills that keep every library consistent.';

/** MCP / AI / Skills focus page — content moved off the launcher homepage. */
export const AiTooling: FC = () => {
  useHashScroll();
  usePageMeta({
    title: AI_TOOLING_TITLE,
    description: AI_TOOLING_DESCRIPTION,
    path: AI_TOOLING_PATH,
  });

  return (
    <div className="fade-in">
      <FocusSections />
      <Footer />
    </div>
  );
};
