import { FC } from 'react';

const BEAR_UI_URL = 'https://bearui.com';
const FORGESTACK_GITHUB_URL = 'https://github.com/yaghobieh/ForgeStack';
const CLI_NPM_URL = 'https://www.npmjs.com/package/@forgedevstack/cli';

export const BrandGuide: FC = () => (
  <div className="max-w-4xl mx-auto px-6 py-12">
    <h1 className="text-4xl font-bold text-theme-primary mb-4">Brand Guide</h1>
    <p className="text-lg text-theme-muted mb-10">
      ForgeStack visual identity, logo usage, and color palette for consistent branding across products, docs, and community content.
    </p>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Logo</h2>
      <p className="text-theme-muted mb-4">
        Use the ForgeStack logo for official documentation, SDKs, blog posts, and community content. Do not modify proportions, aspect ratio, or brand colors.
      </p>
      <ul className="list-disc list-inside text-theme-muted space-y-2 mb-4">
        <li>Use the provided SVG or high-resolution PNG from the <a href={FORGESTACK_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">repository</a> or this portal.</li>
        <li>Maintain clear space around the logo (at least the height of the “F” on all sides).</li>
        <li>Do not stretch, skew, or add effects (shadows, outlines) unless specified in a variant.</li>
        <li>On dark backgrounds use the light logo; on light backgrounds use the dark or full-color version.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Colors</h2>
      <p className="text-theme-muted mb-4">
        ForgeStack uses a pink/rose accent as the primary brand color. Use it for CTAs, links, highlights, and key UI elements. All products support light and dark themes.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
        <div className="p-4 rounded-lg border border-theme-border bg-theme-secondary">
          <div className="h-12 rounded mb-2 bg-[#ec4899]" />
          <p className="font-medium text-theme-primary">Primary (Pink)</p>
          <p className="text-sm text-theme-muted">#ec4899 — CTAs, links, Bear UI accent</p>
        </div>
        <div className="p-4 rounded-lg border border-theme-border bg-theme-secondary">
          <div className="h-12 rounded mb-2 bg-[#f43f5e]" />
          <p className="font-medium text-theme-primary">Rose</p>
          <p className="text-sm text-theme-muted">#f43f5e — Hover states, secondary accent</p>
        </div>
        <div className="p-4 rounded-lg border border-theme-border bg-theme-secondary">
          <div className="h-12 rounded mb-2 bg-[#0f172a]" />
          <p className="font-medium text-theme-primary">Dark background</p>
          <p className="text-sm text-theme-muted">#0f172a — Dark theme surfaces</p>
        </div>
        <div className="p-4 rounded-lg border border-theme-border bg-theme-secondary">
          <div className="h-12 rounded mb-2 bg-[#f8fafc]" />
          <p className="font-medium text-theme-primary">Light background</p>
          <p className="text-sm text-theme-muted">#f8fafc — Light theme surfaces</p>
        </div>
      </div>
      <p className="text-theme-muted text-sm">
        In Tailwind (Bear UI): <code className="bg-theme-secondary px-1 rounded">bear-500</code>, <code className="bg-theme-secondary px-1 rounded">forge-500</code>. In CSS variables, use the palette defined in your theme.
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Typography</h2>
      <p className="text-theme-muted mb-4">
        ForgeStack portal uses <strong className="text-theme-primary">Plus Jakarta Sans</strong> for UI and body text (friendly, readable), and <strong className="text-theme-primary">JetBrains Mono</strong> for code. Keep hierarchy clear: one primary heading per page, consistent heading levels, and readable body size (14–16px base).
      </p>
      <ul className="list-disc list-inside text-theme-muted space-y-1">
        <li>Headings: bold, clear contrast with body.</li>
        <li>Code: JetBrains Mono for inline code and code blocks.</li>
        <li>Avoid decorative or script fonts for UI and docs.</li>
      </ul>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Spacing & layout</h2>
      <p className="text-theme-muted mb-4">
        Use consistent spacing scale (e.g. 4, 8, 12, 16, 24, 32, 48, 64px). Max-width for long-form content: 720–960px. Card and section padding should feel consistent across ForgeStack products (Bear portal, this site, CLI output).
      </p>
    </section>

    <section className="mb-12">
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Usage in products</h2>
      <ul className="text-theme-muted space-y-2">
        <li>
          <strong className="text-theme-primary">Bear UI</strong> — Primary pink <code className="bg-theme-secondary px-1 rounded">#ec4899</code> for buttons, links, and focus states. <a href={BEAR_UI_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">bearui.com</a>
        </li>
        <li>
          <strong className="text-theme-primary">ForgeStack CLI</strong> — Use “ForgeStack” and “Bear” in prompts and readme. <a href={CLI_NPM_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">npm @forgedevstack/cli</a>
        </li>
        <li>
          <strong className="text-theme-primary">This portal</strong> — Same palette and typography; primary for nav and CTAs.
        </li>
      </ul>
    </section>

    <section>
      <h2 className="text-2xl font-semibold text-theme-primary mb-4">Resources</h2>
      <p className="text-theme-muted mb-4">
        Logo and brand assets are available in the main ForgeStack repo and in this portal’s public folder. For questions or permission for derivative use, open an issue or contact the team via the <a href="/about" className="text-forge-400 hover:text-forge-300 underline">About</a> page.
      </p>
      <p className="text-theme-muted text-sm">
        <a href={FORGESTACK_GITHUB_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">GitHub – ForgeStack</a>
        {' · '}
        <a href={BEAR_UI_URL} target="_blank" rel="noopener noreferrer" className="text-forge-400 hover:text-forge-300 underline">Bear UI Portal</a>
      </p>
    </section>
  </div>
);
