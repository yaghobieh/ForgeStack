import { FC } from 'react';
import { Drawer } from '@forgedevstack/bear';
import { LibraryCodeExamples } from '../LibraryCodeExamples';
import { CODE_EXAMPLES_TITLE } from '@constants/codeExamples.const';

interface CodeExamplesDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

/** Code examples overlay — opened from the "Code" button in the top bar. */
export const CodeExamplesDrawer: FC<CodeExamplesDrawerProps> = ({ isOpen, onClose }) => (
  <Drawer
    isOpen={isOpen}
    onClose={onClose}
    side="right"
    size="xl"
    title={CODE_EXAMPLES_TITLE}
    className="fs-code-drawer"
  >
    <LibraryCodeExamples />
  </Drawer>
);
