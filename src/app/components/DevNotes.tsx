import { AlertCircle, CheckCircle, Code, Database, Smartphone, Zap } from 'lucide-react';

export function DevNotes() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Notes for Devs</h2>
      <p className="text-gray-600 mb-8">
        Technical specifications and implementation guidelines for LYNQURA v1
      </p>

      {/* Tech Stack */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Tech Stack</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-6 h-6 text-indigo-600" />
              <h4 className="font-semibold text-gray-900">Frontend</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                React 18.3.1 with TypeScript
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Tailwind CSS 4.1 for styling
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Motion (Framer Motion) for animations
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Lucide React for icons
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                React Hook Form for forms
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center gap-3 mb-4">
              <Database className="w-6 h-6 text-indigo-600" />
              <h4 className="font-semibold text-gray-900">Backend (Recommended)</h4>
            </div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Supabase for database & auth
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Real-time subscriptions
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Storage for media uploads
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Row Level Security (RLS)
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-green-600" />
                Edge Functions for serverless
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Key Features to Implement</h3>
        <div className="space-y-4">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Smartphone className="w-6 h-6 text-indigo-600 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Mobile-First Responsive Design</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Ensure all screens work seamlessly on mobile devices first, then scale up for tablet and desktop.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 block">
                  max-width: 448px for mobile container, responsive breakpoints at md (768px) and lg (1024px)
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Zap className="w-6 h-6 text-yellow-600 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Optimistic UI Updates</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Update UI immediately on user actions (like, follow, etc.) before server confirmation.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 block">
                  Use local state updates first, then sync with backend. Rollback on error.
                </code>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-start gap-4">
              <Database className="w-6 h-6 text-green-600 mt-1" />
              <div className="flex-1">
                <h4 className="font-semibold text-gray-900 mb-2">Image Optimization</h4>
                <p className="text-sm text-gray-600 mb-3">
                  Lazy load images, use WebP format, implement blur placeholders during load.
                </p>
                <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700 block">
                  Use ImageWithFallback component, implement intersection observer for lazy loading
                </code>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Important Notes */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Important Implementation Notes</h3>
        <div className="space-y-3">
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-900 mb-1">Safe Area Insets</p>
              <p className="text-amber-800">
                Account for notch and home indicator on iOS devices. Use env(safe-area-inset-*) CSS variables.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-900 mb-1">Infinite Scroll</p>
              <p className="text-amber-800">
                Implement pagination for feed. Load 10-20 posts at a time, trigger next batch when user scrolls to 80% of content.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-900 mb-1">Touch Interactions</p>
              <p className="text-amber-800">
                Minimum touch target: 44x44px. Add active states with scale transforms (scale-95) for tactile feedback.
              </p>
            </div>
          </div>

          <div className="bg-amber-50 border border-amber-200 rounded-lg p-4 flex items-start gap-3">
            <AlertCircle className="w-5 h-5 text-amber-600 mt-0.5" />
            <div className="text-sm">
              <p className="font-semibold text-amber-900 mb-1">Performance Targets</p>
              <p className="text-amber-800">
                First Contentful Paint {'<'} 1.5s, Time to Interactive {'<'} 3s, keep bundle size {'<'} 200KB gzipped.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">API Endpoints Reference</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <table className="w-full text-sm">
            <thead className="bg-gray-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Endpoint</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Method</th>
                <th className="px-6 py-3 text-left font-semibold text-gray-900">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/posts</td>
                <td className="px-6 py-3 text-gray-600">GET</td>
                <td className="px-6 py-3 text-gray-600">Fetch feed posts</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/posts/:id</td>
                <td className="px-6 py-3 text-gray-600">GET</td>
                <td className="px-6 py-3 text-gray-600">Get single post</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/posts</td>
                <td className="px-6 py-3 text-gray-600">POST</td>
                <td className="px-6 py-3 text-gray-600">Create new post</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/posts/:id/like</td>
                <td className="px-6 py-3 text-gray-600">POST</td>
                <td className="px-6 py-3 text-gray-600">Like/unlike post</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/users/:id</td>
                <td className="px-6 py-3 text-gray-600">GET</td>
                <td className="px-6 py-3 text-gray-600">Get user profile</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/users/:id/follow</td>
                <td className="px-6 py-3 text-gray-600">POST</td>
                <td className="px-6 py-3 text-gray-600">Follow/unfollow user</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/stories</td>
                <td className="px-6 py-3 text-gray-600">GET</td>
                <td className="px-6 py-3 text-gray-600">Fetch active stories</td>
              </tr>
              <tr>
                <td className="px-6 py-3 font-mono text-gray-700">/api/search</td>
                <td className="px-6 py-3 text-gray-600">GET</td>
                <td className="px-6 py-3 text-gray-600">Search users/posts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
