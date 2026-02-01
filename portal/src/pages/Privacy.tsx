import { FC, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Footer } from '../components/Footer';

export const Privacy: FC = () => {
  const location = useLocation();
  
  useEffect(() => {
    if (location.pathname.includes('forge-query-devtools')) {
      const element = document.getElementById('forge-query-devtools');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (location.pathname.includes('synapse-devtools')) {
      const element = document.getElementById('synapse-devtools');
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  }, [location]);
  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <div className="max-w-3xl mx-auto px-6 py-24">
        <Link to="/" className="inline-flex items-center gap-2 text-pink-500 hover:text-pink-400 mb-8">
          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
          Back to Home
        </Link>

        <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
        
        <div className="prose prose-invert prose-pink max-w-none">
          <p className="text-gray-400 mb-8">
            Last updated: February 1, 2026
          </p>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Introduction</h2>
            <p className="text-gray-300">
              ForgeStack ("we", "our", or "us") is committed to protecting your privacy. 
              This Privacy Policy explains how we collect, use, and safeguard your information
              when you use our libraries, extensions, and documentation website.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Information We Collect</h2>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">NPM Packages</h3>
            <p className="text-gray-300">
              Our npm packages (<code>@forgedevstack/bear</code>, <code>@forgedevstack/forge-query</code>, etc.)
              do not collect, transmit, or store any personal information. They run entirely in your application.
            </p>

            <h3 className="text-lg font-semibold mt-4 mb-2">Browser Extensions</h3>
            <p className="text-gray-300">
              Our DevTools extensions (Forge Query DevTools, Synapse DevTools) only access data from
              your running application to display in the DevTools panel. This data never leaves your browser.
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Query states and cache data (for debugging purposes only)</li>
              <li>User preferences (theme, panel position) stored in local storage</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Website</h3>
            <p className="text-gray-300">
              Our documentation website may collect:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Anonymous usage analytics (page views, navigation patterns)</li>
              <li>Theme preference stored in local storage</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">How We Use Information</h2>
            <p className="text-gray-300">
              We use the information we collect to:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Improve our documentation and developer experience</li>
              <li>Understand which features are most used</li>
              <li>Fix bugs and improve performance</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Third-Party Services</h2>
            <p className="text-gray-300">
              We may use third-party services for:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li><strong>Hosting:</strong> Vercel (for documentation website)</li>
              <li><strong>Analytics:</strong> Simple anonymous page view tracking</li>
              <li><strong>Package Registry:</strong> npm (for package distribution)</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Data Security</h2>
            <p className="text-gray-300">
              We do not store personal data on our servers. All user preferences are stored
              locally in your browser. Our packages run entirely client-side and do not
              communicate with external servers.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Your Rights</h2>
            <p className="text-gray-300">
              Since we don't collect personal data, there's nothing to delete or export.
              You can clear your local storage at any time to remove saved preferences.
            </p>
          </section>

          <section id="forge-query-devtools" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4">Forge Query DevTools Extension</h2>
            <p className="text-gray-300 mb-4">
              The Forge Query DevTools Chrome Extension is designed to help developers inspect and debug
              queries in React applications using the Forge Query library.
            </p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Data We Access</h3>
            <p className="text-gray-300">
              The extension accesses the following data <strong>only within the inspected tab</strong>:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Query keys and their associated data</li>
              <li>Cache statistics (hit/miss counts)</li>
              <li>Query status information (loading, error, success states)</li>
              <li>Timestamps of query executions</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Data Storage</h3>
            <p className="text-gray-300">
              All data accessed by the extension is:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Stored temporarily in your browser's memory</li>
              <li><strong>Never transmitted</strong> to any external servers</li>
              <li>Cleared when you close the DevTools panel or the browser tab</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Permissions Explained</h3>
            <div className="bg-gray-900 rounded-lg p-4 mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Permission</th>
                    <th className="text-left py-2 text-gray-400">Why It's Needed</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-2"><code>devtools</code></td>
                    <td className="py-2">To create the DevTools panel</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2"><code>activeTab</code></td>
                    <td className="py-2">To inspect the currently open tab</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>scripting</code></td>
                    <td className="py-2">To inject the content script that communicates with Forge Query</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p className="text-green-400 font-medium">
                TL;DR: This extension is a local development tool. We don't collect, store, or transmit any of your data. Everything stays on your machine.
              </p>
            </div>
          </section>

          <section id="synapse-devtools" className="mb-8 scroll-mt-24">
            <h2 className="text-2xl font-semibold mb-4">Synapse DevTools Extension</h2>
            <p className="text-gray-300 mb-4">
              The Synapse DevTools Chrome Extension helps developers inspect, debug, and time-travel through
              state in React applications using the Synapse state management library.
            </p>
            
            <h3 className="text-lg font-semibold mt-4 mb-2">Data We Access</h3>
            <p className="text-gray-300">
              The extension accesses the following data <strong>only within the inspected tab</strong>:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Nucleus (store) state and computed values</li>
              <li>Action history for time-travel debugging</li>
              <li>State diffs between actions</li>
              <li>Performance metrics (update timing)</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Data Storage</h3>
            <p className="text-gray-300">
              All data accessed by the extension is:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>Stored in your browser's local storage only when you save a snapshot (optional)</li>
              <li><strong>Never transmitted</strong> to any external servers</li>
              <li>Used solely for display in the DevTools panel</li>
            </ul>

            <h3 className="text-lg font-semibold mt-4 mb-2">Permissions Explained</h3>
            <div className="bg-gray-900 rounded-lg p-4 mt-2">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="text-left py-2 text-gray-400">Permission</th>
                    <th className="text-left py-2 text-gray-400">Why It's Needed</th>
                  </tr>
                </thead>
                <tbody className="text-gray-300">
                  <tr className="border-b border-gray-800">
                    <td className="py-2"><code>storage</code></td>
                    <td className="py-2">To save snapshots and panel preferences locally</td>
                  </tr>
                  <tr className="border-b border-gray-800">
                    <td className="py-2"><code>activeTab</code></td>
                    <td className="py-2">To inspect the currently open tab when DevTools is open</td>
                  </tr>
                  <tr>
                    <td className="py-2"><code>Host access (localhost)</code></td>
                    <td className="py-2">Content script runs only on localhost to communicate with Synapse state in your app</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <div className="mt-4 p-4 bg-green-900/20 border border-green-800 rounded-lg">
              <p className="text-green-400 font-medium">
                TL;DR: Synapse DevTools is a local development tool. No data is collected, transmitted, or stored off your device. Snapshots and preferences stay in your browser.
              </p>
            </div>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Open Source</h2>
            <p className="text-gray-300">
              All ForgeStack packages are open source. You can audit our code at any time:
            </p>
            <ul className="text-gray-300 list-disc pl-6 mt-2">
              <li>
                <a href="https://github.com/yaghobieh/ForgeStack" className="text-pink-400 hover:underline">
                  github.com/yaghobieh/ForgeStack
                </a>
              </li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Contact</h2>
            <p className="text-gray-300">
              If you have questions about this Privacy Policy, contact us at:
            </p>
            <p className="text-pink-400 mt-2">
              <a href="mailto:privacy@forgestack.dev">privacy@forgestack.dev</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4">Changes to This Policy</h2>
            <p className="text-gray-300">
              We may update this Privacy Policy from time to time. We will notify you of any
              changes by posting the new Privacy Policy on this page and updating the "Last updated" date.
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Privacy;

