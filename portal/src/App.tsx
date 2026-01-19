import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Sidebar } from './components/Sidebar';
import { Home } from './pages/Home';
import { HarborDocsLayout, DocContent } from './pages/HarborDocs';
import { TableDocsLayout, TableDocContent } from './pages/TableDocs';
import { SynapseDocsLayout, SynapseDocContent } from './pages/SynapseDocs';
import { AnvilDocsLayout } from './pages/AnvilDocs';
import { AnvilDocContent } from './components/AnvilDocContent';
import { Showcase } from './pages/Showcase';
import { Extensions } from './pages/Extensions';
import { ThemeProvider } from './context/ThemeContext';

function App() {
  return (
    <BrowserRouter>
      <ThemeProvider>
        <div className="min-h-screen bg-theme-primary text-theme-primary transition-colors duration-200">
          <Navbar />
          <div className="flex">
            <Sidebar className="fixed left-0 top-16 bottom-0 z-40 hidden lg:flex" />
            <main className="flex-1 lg:ml-56">
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
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/extensions" element={<Extensions />} />
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
