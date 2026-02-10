import { useState, useCallback } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { MobileNav } from './components/MobileNav';
import { Home } from './pages/Home';
import { HarborDocsLayout, DocContent } from './pages/HarborDocs';
import { TableDocsLayout, TableDocContent } from './pages/TableDocs';
import { SynapseDocsLayout, SynapseDocContent } from './pages/SynapseDocs';
import { AnvilDocsLayout } from './pages/AnvilDocs';
import { AnvilDocContent } from './components/AnvilDocContent';
import { BearDocsLayout } from './pages/BearDocs';
import { BearDocContent } from './components/BearDocContent';
import { KilnDocsLayout } from './pages/KilnDocs';
import { KilnDocContent } from './components/KilnDocContent';
import { Showcase } from './pages/Showcase';
import { Extensions } from './pages/Extensions';
import { ForgeQueryDocsLayout, ForgeQueryDocContent } from './pages/ForgeQueryDocs';
import { CompassDocsLayout, CompassDocContent } from './pages/CompassDocs';
import { FormDocsLayout, FormDocContent } from './pages/FormDocs';
import { CliDocs } from './pages/CliDocs';
import { Studio } from './pages/Studio';
import { Privacy } from './pages/Privacy';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  const [isMobileNavOpen, setMobileNavOpen] = useState(false);

  const handleMobileNavToggle = useCallback(() => {
    setMobileNavOpen((prev) => !prev);
  }, []);

  const handleMobileNavClose = useCallback(() => {
    setMobileNavOpen(false);
  }, []);

  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-theme-primary text-theme-primary transition-colors duration-200 overflow-x-hidden">
          <Navbar onMobileMenuToggle={handleMobileNavToggle} />
          <MobileNav isOpen={isMobileNavOpen} onClose={handleMobileNavClose} />
          <div className="flex">
            <Sidebar className="fixed left-0 top-16 bottom-0 z-40 hidden lg:flex" />
            <main className="flex-1 lg:ml-56 min-w-0">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/harbor" element={<Navigate to="/harbor/docs/quick-start" replace />} />
                <Route path="/harbor/docs/quick-start" element={<HarborDocsLayout><DocContent page="quick-start" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/installation" element={<HarborDocsLayout><DocContent page="installation" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/templates" element={<HarborDocsLayout><DocContent page="templates" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/server" element={<HarborDocsLayout><DocContent page="server" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/routes" element={<HarborDocsLayout><DocContent page="routes" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/config" element={<HarborDocsLayout><DocContent page="config" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/database" element={<HarborDocsLayout><DocContent page="database" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/validation" element={<HarborDocsLayout><DocContent page="validation" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/websocket" element={<HarborDocsLayout><DocContent page="websocket" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/scheduler" element={<HarborDocsLayout><DocContent page="scheduler" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/rate-limit" element={<HarborDocsLayout><DocContent page="rate-limit" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/health" element={<HarborDocsLayout><DocContent page="health" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/metrics" element={<HarborDocsLayout><DocContent page="metrics" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/upload" element={<HarborDocsLayout><DocContent page="upload" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/cache" element={<HarborDocsLayout><DocContent page="cache" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/auth" element={<HarborDocsLayout><DocContent page="auth" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/logger" element={<HarborDocsLayout><DocContent page="logger" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/docker" element={<HarborDocsLayout><DocContent page="docker" /></HarborDocsLayout>} />
                <Route path="/harbor/docs/i18n" element={<HarborDocsLayout><DocContent page="i18n" /></HarborDocsLayout>} />
                <Route path="/harbor/*" element={<Navigate to="/harbor/docs/quick-start" replace />} />
                <Route path="/table" element={<TableDocsLayout><TableDocContent page="overview" /></TableDocsLayout>} />
                <Route path="/table/installation" element={<TableDocsLayout><TableDocContent page="installation" /></TableDocsLayout>} />
                <Route path="/table/quick-start" element={<TableDocsLayout><TableDocContent page="quick-start" /></TableDocsLayout>} />
                <Route path="/table/columns" element={<TableDocsLayout><TableDocContent page="columns" /></TableDocsLayout>} />
                <Route path="/table/sorting" element={<TableDocsLayout><TableDocContent page="sorting" /></TableDocsLayout>} />
                <Route path="/table/filtering" element={<TableDocsLayout><TableDocContent page="filtering" /></TableDocsLayout>} />
                <Route path="/table/pagination" element={<TableDocsLayout><TableDocContent page="pagination" /></TableDocsLayout>} />
                <Route path="/table/selection" element={<TableDocsLayout><TableDocContent page="selection" /></TableDocsLayout>} />
                <Route path="/table/sticky" element={<TableDocsLayout><TableDocContent page="sticky" /></TableDocsLayout>} />
                <Route path="/table/cell-click" element={<TableDocsLayout><TableDocContent page="cell-click" /></TableDocsLayout>} />
                <Route path="/table/custom-render" element={<TableDocsLayout><TableDocContent page="custom-render" /></TableDocsLayout>} />
                <Route path="/table/theming" element={<TableDocsLayout><TableDocContent page="theming" /></TableDocsLayout>} />
                <Route path="/table/mobile" element={<TableDocsLayout><TableDocContent page="mobile" /></TableDocsLayout>} />
                <Route path="/table/api" element={<TableDocsLayout><TableDocContent page="api" /></TableDocsLayout>} />
                <Route path="/table/*" element={<Navigate to="/table" replace />} />
                <Route path="/synapse" element={<SynapseDocsLayout><SynapseDocContent page="overview" /></SynapseDocsLayout>} />
                <Route path="/synapse/installation" element={<SynapseDocsLayout><SynapseDocContent page="installation" /></SynapseDocsLayout>} />
                <Route path="/synapse/quick-start" element={<SynapseDocsLayout><SynapseDocContent page="quick-start" /></SynapseDocsLayout>} />
                <Route path="/synapse/nucleus" element={<SynapseDocsLayout><SynapseDocContent page="nucleus" /></SynapseDocsLayout>} />
                <Route path="/synapse/signals" element={<SynapseDocsLayout><SynapseDocContent page="signals" /></SynapseDocsLayout>} />
                <Route path="/synapse/hooks" element={<SynapseDocsLayout><SynapseDocContent page="hooks" /></SynapseDocsLayout>} />
                <Route path="/synapse/middleware" element={<SynapseDocsLayout><SynapseDocContent page="middleware" /></SynapseDocsLayout>} />
                <Route path="/synapse/api-hooks" element={<SynapseDocsLayout><SynapseDocContent page="api-hooks" /></SynapseDocsLayout>} />
                <Route path="/synapse/devtools" element={<SynapseDocsLayout><SynapseDocContent page="devtools" /></SynapseDocsLayout>} />
                <Route path="/synapse/typescript" element={<SynapseDocsLayout><SynapseDocContent page="typescript" /></SynapseDocsLayout>} />
                <Route path="/synapse/api" element={<SynapseDocsLayout><SynapseDocContent page="api" /></SynapseDocsLayout>} />
                <Route path="/synapse/*" element={<Navigate to="/synapse" replace />} />
                <Route path="/anvil" element={<AnvilDocsLayout><AnvilDocContent page="overview" /></AnvilDocsLayout>} />
                <Route path="/anvil/installation" element={<AnvilDocsLayout><AnvilDocContent page="installation" /></AnvilDocsLayout>} />
                <Route path="/anvil/style-forge" element={<AnvilDocsLayout><AnvilDocContent page="style-forge" /></AnvilDocsLayout>} />
                <Route path="/anvil/type-guards" element={<AnvilDocsLayout><AnvilDocContent page="type-guards" /></AnvilDocsLayout>} />
                <Route path="/anvil/array" element={<AnvilDocsLayout><AnvilDocContent page="array" /></AnvilDocsLayout>} />
                <Route path="/anvil/object" element={<AnvilDocsLayout><AnvilDocContent page="object" /></AnvilDocsLayout>} />
                <Route path="/anvil/string" element={<AnvilDocsLayout><AnvilDocContent page="string" /></AnvilDocsLayout>} />
                <Route path="/anvil/function" element={<AnvilDocsLayout><AnvilDocContent page="function" /></AnvilDocsLayout>} />
                <Route path="/anvil/clone" element={<AnvilDocsLayout><AnvilDocContent page="clone" /></AnvilDocsLayout>} />
                <Route path="/anvil/react-hooks" element={<AnvilDocsLayout><AnvilDocContent page="react-hooks" /></AnvilDocsLayout>} />
                <Route path="/anvil/vue-composables" element={<AnvilDocsLayout><AnvilDocContent page="vue-composables" /></AnvilDocsLayout>} />
                <Route path="/anvil/types" element={<AnvilDocsLayout><AnvilDocContent page="types" /></AnvilDocsLayout>} />
                <Route path="/anvil/api" element={<AnvilDocsLayout><AnvilDocContent page="api" /></AnvilDocsLayout>} />
                <Route path="/anvil/cn" element={<Navigate to="/anvil/style-forge" replace />} />
                <Route path="/anvil/*" element={<Navigate to="/anvil" replace />} />
                <Route path="/bear" element={<BearDocsLayout><BearDocContent page="overview" /></BearDocsLayout>} />
                <Route path="/bear/installation" element={<BearDocsLayout><BearDocContent page="installation" /></BearDocsLayout>} />
                <Route path="/bear/theme-provider" element={<BearDocsLayout><BearDocContent page="theme-provider" /></BearDocsLayout>} />
                <Route path="/bear/button" element={<BearDocsLayout><BearDocContent page="button" /></BearDocsLayout>} />
                <Route path="/bear/card" element={<BearDocsLayout><BearDocContent page="card" /></BearDocsLayout>} />
                <Route path="/bear/modal" element={<BearDocsLayout><BearDocContent page="modal" /></BearDocsLayout>} />
                <Route path="/bear/drawer" element={<BearDocsLayout><BearDocContent page="drawer" /></BearDocsLayout>} />
                <Route path="/bear/tooltip" element={<BearDocsLayout><BearDocContent page="tooltip" /></BearDocsLayout>} />
                <Route path="/bear/input" element={<BearDocsLayout><BearDocContent page="input" /></BearDocsLayout>} />
                <Route path="/bear/select" element={<BearDocsLayout><BearDocContent page="select" /></BearDocsLayout>} />
                <Route path="/bear/switch" element={<BearDocsLayout><BearDocContent page="switch" /></BearDocsLayout>} />
                <Route path="/bear/grid" element={<BearDocsLayout><BearDocContent page="grid" /></BearDocsLayout>} />
                <Route path="/bear/flex" element={<BearDocsLayout><BearDocContent page="flex" /></BearDocsLayout>} />
                <Route path="/bear/container" element={<BearDocsLayout><BearDocContent page="container" /></BearDocsLayout>} />
                <Route path="/bear/badge" element={<BearDocsLayout><BearDocContent page="badge" /></BearDocsLayout>} />
                <Route path="/bear/spinner" element={<BearDocsLayout><BearDocContent page="spinner" /></BearDocsLayout>} />
                <Route path="/bear/icons" element={<BearDocsLayout><BearDocContent page="icons" /></BearDocsLayout>} />
                <Route path="/bear/hooks" element={<BearDocsLayout><BearDocContent page="hooks" /></BearDocsLayout>} />
                <Route path="/bear/multiselect" element={<BearDocsLayout><BearDocContent page="multiselect" /></BearDocsLayout>} />
                <Route path="/bear/autocomplete" element={<BearDocsLayout><BearDocContent page="autocomplete" /></BearDocsLayout>} />
                <Route path="/bear/datatable" element={<BearDocsLayout><BearDocContent page="datatable" /></BearDocsLayout>} />
                <Route path="/bear/carousel" element={<BearDocsLayout><BearDocContent page="carousel" /></BearDocsLayout>} />
                <Route path="/bear/accordion" element={<BearDocsLayout><BearDocContent page="accordion" /></BearDocsLayout>} />
                <Route path="/bear/tabs" element={<BearDocsLayout><BearDocContent page="tabs" /></BearDocsLayout>} />
                <Route path="/bear/avatar" element={<BearDocsLayout><BearDocContent page="avatar" /></BearDocsLayout>} />
                <Route path="/bear/progress" element={<BearDocsLayout><BearDocContent page="progress" /></BearDocsLayout>} />
                <Route path="/bear/rating" element={<BearDocsLayout><BearDocContent page="rating" /></BearDocsLayout>} />
                <Route path="/bear/radio" element={<BearDocsLayout><BearDocContent page="radio" /></BearDocsLayout>} />
                <Route path="/bear/checkbox" element={<BearDocsLayout><BearDocContent page="checkbox" /></BearDocsLayout>} />
                <Route path="/bear/button-group" element={<BearDocsLayout><BearDocContent page="button-group" /></BearDocsLayout>} />
                <Route path="/bear/fab" element={<BearDocsLayout><BearDocContent page="fab" /></BearDocsLayout>} />
                <Route path="/bear/transfer-list" element={<BearDocsLayout><BearDocContent page="transfer-list" /></BearDocsLayout>} />
                <Route path="/bear/divider" element={<BearDocsLayout><BearDocContent page="divider" /></BearDocsLayout>} />
                <Route path="/bear/typography" element={<BearDocsLayout><BearDocContent page="typography" /></BearDocsLayout>} />
                <Route path="/bear/list" element={<BearDocsLayout><BearDocContent page="list" /></BearDocsLayout>} />
                <Route path="/bear/alert" element={<BearDocsLayout><BearDocContent page="alert" /></BearDocsLayout>} />
                <Route path="/bear/toast" element={<BearDocsLayout><BearDocContent page="toast" /></BearDocsLayout>} />
                <Route path="/bear/skeleton" element={<BearDocsLayout><BearDocContent page="skeleton" /></BearDocsLayout>} />
                <Route path="/bear/pagination" element={<BearDocsLayout><BearDocContent page="pagination" /></BearDocsLayout>} />
                <Route path="/bear/slider" element={<BearDocsLayout><BearDocContent page="slider" /></BearDocsLayout>} />
                <Route path="/bear/bear-loader" element={<BearDocsLayout><BearDocContent page="bear-loader" /></BearDocsLayout>} />
                <Route path="/bear/date-picker" element={<BearDocsLayout><BearDocContent page="date-picker" /></BearDocsLayout>} />
                <Route path="/bear/time-picker" element={<BearDocsLayout><BearDocContent page="time-picker" /></BearDocsLayout>} />
                <Route path="/bear/breadcrumbs" element={<BearDocsLayout><BearDocContent page="breadcrumbs" /></BearDocsLayout>} />
                <Route path="/bear/stepper" element={<BearDocsLayout><BearDocContent page="stepper" /></BearDocsLayout>} />
                <Route path="/bear/popover" element={<BearDocsLayout><BearDocContent page="popover" /></BearDocsLayout>} />
                <Route path="/bear/chip" element={<BearDocsLayout><BearDocContent page="chip" /></BearDocsLayout>} />
                <Route path="/bear/tree-view" element={<BearDocsLayout><BearDocContent page="tree-view" /></BearDocsLayout>} />
                <Route path="/bear/timeline" element={<BearDocsLayout><BearDocContent page="timeline" /></BearDocsLayout>} />
                <Route path="/bear/file-upload" element={<BearDocsLayout><BearDocContent page="file-upload" /></BearDocsLayout>} />
                <Route path="/bear/number-input" element={<BearDocsLayout><BearDocContent page="number-input" /></BearDocsLayout>} />
                <Route path="/bear/otp-input" element={<BearDocsLayout><BearDocContent page="otp-input" /></BearDocsLayout>} />
                <Route path="/bear/color-picker" element={<BearDocsLayout><BearDocContent page="color-picker" /></BearDocsLayout>} />
                <Route path="/bear/statistic" element={<BearDocsLayout><BearDocContent page="statistic" /></BearDocsLayout>} />
                <Route path="/bear/empty-state" element={<BearDocsLayout><BearDocContent page="empty-state" /></BearDocsLayout>} />
                <Route path="/bear/image" element={<BearDocsLayout><BearDocContent page="image" /></BearDocsLayout>} />
                <Route path="/bear/app-bar" element={<BearDocsLayout><BearDocContent page="app-bar" /></BearDocsLayout>} />
                <Route path="/bear/bottom-navigation" element={<BearDocsLayout><BearDocContent page="bottom-navigation" /></BearDocsLayout>} />
                <Route path="/bear/scroll-area" element={<BearDocsLayout><BearDocContent page="scroll-area" /></BearDocsLayout>} />
                <Route path="/bear/collapsible" element={<BearDocsLayout><BearDocContent page="collapsible" /></BearDocsLayout>} />
                <Route path="/bear/kbd" element={<BearDocsLayout><BearDocContent page="kbd" /></BearDocsLayout>} />
                <Route path="/bear/copy-button" element={<BearDocsLayout><BearDocContent page="copy-button" /></BearDocsLayout>} />
                <Route path="/bear/paper" element={<BearDocsLayout><BearDocContent page="paper" /></BearDocsLayout>} />
                <Route path="/bear/calendar" element={<BearDocsLayout><BearDocContent page="calendar" /></BearDocsLayout>} />
                <Route path="/bear/date-time-picker" element={<BearDocsLayout><BearDocContent page="date-time-picker" /></BearDocsLayout>} />
                <Route path="/bear/sidebar" element={<BearDocsLayout><BearDocContent page="sidebar" /></BearDocsLayout>} />
                <Route path="/bear/columns" element={<BearDocsLayout><BearDocContent page="columns" /></BearDocsLayout>} />
                <Route path="/bear/link" element={<BearDocsLayout><BearDocContent page="link" /></BearDocsLayout>} />
                <Route path="/bear/menu" element={<BearDocsLayout><BearDocContent page="menu" /></BearDocsLayout>} />
                <Route path="/bear/dropdown" element={<BearDocsLayout><BearDocContent page="dropdown" /></BearDocsLayout>} />
                <Route path="/bear/speed-dial" element={<BearDocsLayout><BearDocContent page="speed-dial" /></BearDocsLayout>} />
                <Route path="/bear/api" element={<BearDocsLayout><BearDocContent page="api" /></BearDocsLayout>} />
                <Route path="/bear/*" element={<Navigate to="/bear" replace />} />
                <Route path="/ember/*" element={<Navigate to="/bear" replace />} />
                <Route path="/kiln" element={<KilnDocsLayout><KilnDocContent page="overview" /></KilnDocsLayout>} />
                <Route path="/kiln/installation" element={<KilnDocsLayout><KilnDocContent page="installation" /></KilnDocsLayout>} />
                <Route path="/kiln/quick-start" element={<KilnDocsLayout><KilnDocContent page="quick-start" /></KilnDocsLayout>} />
                <Route path="/kiln/config" element={<KilnDocsLayout><KilnDocContent page="config" /></KilnDocsLayout>} />
                <Route path="/kiln/stories" element={<KilnDocsLayout><KilnDocContent page="stories" /></KilnDocsLayout>} />
                <Route path="/kiln/canvas" element={<KilnDocsLayout><KilnDocContent page="canvas" /></KilnDocsLayout>} />
                <Route path="/kiln/theming" element={<KilnDocsLayout><KilnDocContent page="theming" /></KilnDocsLayout>} />
                <Route path="/kiln/cli" element={<KilnDocsLayout><KilnDocContent page="cli" /></KilnDocsLayout>} />
                <Route path="/kiln/api" element={<KilnDocsLayout><KilnDocContent page="api" /></KilnDocsLayout>} />
                <Route path="/kiln/*" element={<Navigate to="/kiln" replace />} />
                <Route path="/spark/*" element={<Navigate to="/kiln" replace />} />
                <Route path="/query" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="overview" /></ForgeQueryDocsLayout>} />
                <Route path="/query/installation" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="installation" /></ForgeQueryDocsLayout>} />
                <Route path="/query/quick-start" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="quick-start" /></ForgeQueryDocsLayout>} />
                <Route path="/query/queries" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="queries" /></ForgeQueryDocsLayout>} />
                <Route path="/query/mutations" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="mutations" /></ForgeQueryDocsLayout>} />
                <Route path="/query/caching" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="caching" /></ForgeQueryDocsLayout>} />
                <Route path="/query/devtools" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="devtools" /></ForgeQueryDocsLayout>} />
                <Route path="/query/typescript" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="typescript" /></ForgeQueryDocsLayout>} />
                <Route path="/query/api" element={<ForgeQueryDocsLayout><ForgeQueryDocContent page="api" /></ForgeQueryDocsLayout>} />
                <Route path="/query/*" element={<Navigate to="/query" replace />} />
                <Route path="/compass" element={<CompassDocsLayout><CompassDocContent page="overview" /></CompassDocsLayout>} />
                <Route path="/compass/installation" element={<CompassDocsLayout><CompassDocContent page="installation" /></CompassDocsLayout>} />
                <Route path="/compass/quick-start" element={<CompassDocsLayout><CompassDocContent page="quick-start" /></CompassDocsLayout>} />
                <Route path="/compass/routes" element={<CompassDocsLayout><CompassDocContent page="routes" /></CompassDocsLayout>} />
                <Route path="/compass/guards" element={<CompassDocsLayout><CompassDocContent page="guards" /></CompassDocsLayout>} />
                <Route path="/compass/navigation" element={<CompassDocsLayout><CompassDocContent page="navigation" /></CompassDocsLayout>} />
                <Route path="/compass/hooks" element={<CompassDocsLayout><CompassDocContent page="hooks" /></CompassDocsLayout>} />
                <Route path="/compass/advanced" element={<CompassDocsLayout><CompassDocContent page="advanced" /></CompassDocsLayout>} />
                <Route path="/compass/devtools" element={<CompassDocsLayout><CompassDocContent page="devtools" /></CompassDocsLayout>} />
                <Route path="/compass/api" element={<CompassDocsLayout><CompassDocContent page="api" /></CompassDocsLayout>} />
                <Route path="/compass/*" element={<Navigate to="/compass" replace />} />
                <Route path="/form" element={<FormDocsLayout><FormDocContent page="overview" /></FormDocsLayout>} />
                <Route path="/form/installation" element={<FormDocsLayout><FormDocContent page="installation" /></FormDocsLayout>} />
                <Route path="/form/quick-start" element={<FormDocsLayout><FormDocContent page="quick-start" /></FormDocsLayout>} />
                <Route path="/form/fields" element={<FormDocsLayout><FormDocContent page="fields" /></FormDocsLayout>} />
                <Route path="/form/validation" element={<FormDocsLayout><FormDocContent page="validation" /></FormDocsLayout>} />
                <Route path="/form/submission" element={<FormDocsLayout><FormDocContent page="submission" /></FormDocsLayout>} />
                <Route path="/form/caching" element={<FormDocsLayout><FormDocContent page="caching" /></FormDocsLayout>} />
                <Route path="/form/devtools" element={<FormDocsLayout><FormDocContent page="devtools" /></FormDocsLayout>} />
                <Route path="/form/api" element={<FormDocsLayout><FormDocContent page="api" /></FormDocsLayout>} />
                <Route path="/form/*" element={<Navigate to="/form" replace />} />
                <Route path="/cli" element={<CliDocs />} />
                <Route path="/cli/docs/quick-start" element={<CliDocs />} />
                <Route path="/cli/*" element={<Navigate to="/cli" replace />} />
                <Route path="/studio" element={<Studio />} />
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/extensions" element={<Extensions />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/privacy/forge-query-devtools" element={<Privacy />} />
                <Route path="/privacy/synapse-devtools" element={<Privacy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </main>
          </div>
        </div>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
