import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { STUDIO_NEWS_SEEN_KEY, STUDIO_NEWS_VERSION } from '@/constants/studio.const';
import { StudioNewsPopup } from '@/components/StudioNewsPopup';

export const Studio: FC = () => {
  const [showNews, setShowNews] = useState(false);

  useEffect(() => {
    const key = `${STUDIO_NEWS_SEEN_KEY}-v${STUDIO_NEWS_VERSION}`;
    const seen = localStorage.getItem(key);
    if (!seen) {
      setShowNews(true);
    }
  }, []);

  const handleCloseNews = () => {
    const key = `${STUDIO_NEWS_SEEN_KEY}-v${STUDIO_NEWS_VERSION}`;
    localStorage.setItem(key, 'true');
    setShowNews(false);
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 fade-in">
      {showNews && <StudioNewsPopup onClose={handleCloseNews} />}

      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-forge-500/10 text-forge-500 text-sm font-medium mb-4">
          Coming soon
        </div>
        <h1 className="text-4xl font-bold text-theme-primary mb-4">
          About Forge Studio
        </h1>
        <p className="text-lg text-theme-muted max-w-2xl mx-auto">
          A visual builder for the Forge ecosystem—like base44, but built on Bear, Harbor, and the full Forge stack.
        </p>
      </div>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-theme-primary mb-4">What is Forge Studio?</h2>
        <p className="text-theme-muted mb-4">
          Forge Studio is a low-code / no-code style builder that lives inside the Forge world. You get:
        </p>
        <ul className="list-disc list-inside space-y-2 text-theme-muted mb-6">
          <li><strong className="text-theme-primary">Drag-and-drop of all Bear components</strong>—buttons, cards, forms, modals, grids, and the rest of the Bear library.</li>
          <li><strong className="text-theme-primary">Live site or app</strong>—preview and publish real Forge-based projects, not just mockups.</li>
          <li><strong className="text-theme-primary">VForge agent</strong>—AI assistance that knows the Forge stack and can suggest components, routes, and patterns.</li>
          <li><strong className="text-theme-primary">Full ecosystem</strong>—Harbor backends, Synapse state, Compass routes, and CLI-generated projects all fit in.</li>
        </ul>
        <p className="text-theme-muted">
          Think of it as your visual playground for the same packages you use in code: Bear UI, Harbor, Synapse, Compass, Form, Query, and the CLI—all in one place.
        </p>
      </section>

      <section className="mb-12 p-6 rounded-xl bg-theme-secondary border border-theme-border">
        <h2 className="text-2xl font-bold text-theme-primary mb-4">Meet Wodi</h2>
        <p className="text-theme-muted mb-4">
          Wodi is the friendly face of the Forge Studio and the VForge agent—a small character that guides you through the builder and helps you build. Think of Wodi like a helpful sidekick from a Toy Story–style world: approachable, a bit playful, and always ready to point you to the right Bear component or the next step in your app.
        </p>
        <div className="flex flex-wrap items-center gap-4">
          <div
            className="w-24 h-24 rounded-2xl flex items-center justify-center text-4xl bg-forge-500/20 border border-forge-500/40"
            aria-hidden
          >
            🐻
          </div>
          <p className="text-sm text-theme-muted max-w-md">
            Wodi will show up in Studio to explain features, suggest components, and make building with Forge feel a little more fun. A proper Wodi character and video are in the works.
          </p>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-bold text-theme-primary mb-4">Watch: What is Forge Studio?</h2>
        <p className="text-theme-muted mb-4">
          We’re putting together a short explainer (with Wodi) so you can see Studio in action. For now, here’s the script we’re using for the video—you can use it to generate your own AI explainer or wait for our official one.
        </p>
        <div className="p-4 rounded-lg bg-theme-tertiary border border-theme-border font-mono text-sm text-theme-muted overflow-x-auto">
          <p className="mb-2">[Scene: Forge Studio canvas with Bear components]</p>
          <p className="mb-2">“Forge Studio is your visual builder for the Forge ecosystem. Drag and drop any Bear component—buttons, cards, forms, modals—onto the canvas. What you build here is a real app: same Bear, Harbor, and Forge stack you use in code.”</p>
          <p className="mb-2">[Wodi appears] “Hi, I’m Wodi. I’m here to help. Need a form? I’ll suggest Bear Form and Forge Form. Need a backend? Point to Harbor. You can build live sites and apps without writing every line by hand—and when you’re ready, your VForge agent and I are here to help.”</p>
          <p>[End: CTA to join waitlist or try Studio when it’s ready.]</p>
        </div>
        <p className="mt-4 text-sm text-theme-muted">
          When the video is ready, we’ll embed it here. Until then, this script is the blueprint for “What is Forge Studio?” and the Wodi character.
        </p>
      </section>

      <section className="flex flex-wrap gap-4">
        <Link
          to="/bear"
          className="px-4 py-2.5 rounded-lg bg-forge-600 hover:bg-forge-500 text-white font-medium transition-colors"
        >
          Explore Bear UI
        </Link>
        <Link
          to="/"
          className="px-4 py-2.5 rounded-lg border border-theme-border hover:bg-theme-tertiary text-theme-primary font-medium transition-colors"
        >
          Back to Home
        </Link>
      </section>
    </div>
  );
};
