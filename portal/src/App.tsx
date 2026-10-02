import { FC } from 'react';
import { BrowserRouter, Routes, Route, Navigate, useLocation } from 'react-router-dom';
import { AppFrame } from './components/AppFrame';
import { Home } from './pages/Home';
import { Ecosystem } from './pages/Ecosystem';
import { AiTooling } from './pages/AiTooling';
import { Blog } from './pages/Blog';
import { BlogPost } from './pages/BlogPost';
import { Showcase } from './pages/Showcase';
import { Extensions } from './pages/Extensions';
import { Privacy } from './pages/Privacy';
import { BrandGuide } from './pages/BrandGuide';
import { Templates } from './pages/Templates';
import { AboutUs } from './pages/AboutUs';
import { Careers } from './pages/Careers';
import { LibrariesIndex, LibraryPage } from './pages/LibraryPage';
import { AgendaPage, CareerPage, CommunityPage, ConnectPage, TermsPage } from './pages/SupportPages';
import { BearProvider } from '@forgedevstack/bear';
import { ThemeProvider } from './context/ThemeContext';
import { BEAR_THEME_PRIMARY, BEAR_THEME_MODE } from './constants/theme.const';

const LEGACY_LIBS = [
  'harbor', 'table', 'synapse', 'anvil', 'bear', 'ember', 'kiln', 'spark',
  'query', 'compass', 'form', 'cli', 'auth', 'relay', 'rail', 'lingo', 'aerocraft', 'torch',
];

const LEGACY_ID: Record<string, string> = { ember: 'bear', spark: 'kiln' };

const LegacyDocsRedirect: FC = () => {
  const { pathname } = useLocation();
  const parts = pathname.split('/').filter(Boolean);
  const id = LEGACY_ID[parts[0]] ?? parts[0];
  let rest = parts.slice(1);
  if (rest[0] === 'docs') rest = rest.slice(1);
  if (id === 'anvil' && rest[0] === 'cn') rest = ['style-forge'];
  const slug = rest.join('/');
  return <Navigate to={`/libraries/${id}${slug ? `/${slug}` : ''}`} replace />;
};

function App() {
  return (
    <BrowserRouter>
      <BearProvider mode={BEAR_THEME_MODE} theme={{ colors: { primary: BEAR_THEME_PRIMARY } }}>
      <ThemeProvider>
        <AppFrame>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/libraries" element={<LibrariesIndex />} />
                <Route path="/libraries/:id/*" element={<LibraryPage />} />
                <Route path="/community" element={<CommunityPage />} />
                <Route path="/support/connect" element={<ConnectPage />} />
                <Route path="/support/agenda" element={<AgendaPage />} />
                <Route path="/support/career" element={<CareerPage />} />
                <Route path="/terms" element={<TermsPage />} />
                <Route path="/ecosystem" element={<Ecosystem />} />
                <Route path="/ai" element={<AiTooling />} />
                <Route path="/blog" element={<Blog />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
                {LEGACY_LIBS.map((id) => (
                  <Route key={id} path={`/${id}/*`} element={<LegacyDocsRedirect />} />
                ))}
                {LEGACY_LIBS.map((id) => (
                  <Route key={`${id}-root`} path={`/${id}`} element={<LegacyDocsRedirect />} />
                ))}
                <Route path="/showcase" element={<Showcase />} />
                <Route path="/extensions" element={<Extensions />} />
                <Route path="/templates" element={<Templates />} />
                <Route path="/brand" element={<BrandGuide />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/privacy/forge-query-devtools" element={<Privacy />} />
                <Route path="/privacy/synapse-devtools" element={<Privacy />} />
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
        </AppFrame>
      </ThemeProvider>
      </BearProvider>
    </BrowserRouter>
  );
}

export default App;
