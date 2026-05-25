import { ArrowRight, Circle } from 'lucide-react';

export function PrototypeFlow() {
  const flows = [
    {
      name: 'User Onboarding',
      steps: [
        'Splash Screen',
        'Welcome',
        'Sign Up / Login',
        'Profile Setup',
        'Follow Suggestions',
        'Home Feed',
      ],
    },
    {
      name: 'Create Post',
      steps: [
        'Home Feed',
        'Tap Create Button',
        'Select Media',
        'Edit & Filters',
        'Add Caption',
        'Share',
        'Back to Feed',
      ],
    },
    {
      name: 'Explore Content',
      steps: [
        'Home Feed',
        'Tap Search',
        'Browse Categories',
        'View Post',
        'Like/Comment/Share',
        'View Profile',
      ],
    },
    {
      name: 'Direct Messaging',
      steps: [
        'Home Feed',
        'Tap Messages',
        'Select Conversation',
        'Send Message',
        'View Media',
        'Back to Messages',
      ],
    },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Prototype Flow</h2>
      <p className="text-gray-600 mb-8">
        User journey flows and interaction patterns for LYNQURA v1
      </p>

      <div className="space-y-8">
        {flows.map((flow) => (
          <div key={flow.name} className="bg-white rounded-xl border border-gray-200 p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-6">{flow.name}</h3>
            
            <div className="flex flex-wrap items-center gap-3">
              {flow.steps.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  <div className="flex items-center gap-3 px-4 py-3 bg-indigo-50 border border-indigo-200 rounded-lg">
                    <Circle className="w-4 h-4 text-indigo-600 fill-indigo-600" />
                    <span className="text-sm font-medium text-gray-900">{step}</span>
                  </div>
                  {index < flow.steps.length - 1 && (
                    <ArrowRight className="w-5 h-5 text-gray-400" />
                  )}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Interaction Patterns</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Gestures</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Tap:</span>
                <span className="text-gray-600">Select, open, like, follow</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Double Tap:</span>
                <span className="text-gray-600">Like post</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Swipe Left/Right:</span>
                <span className="text-gray-600">Navigate stories</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Swipe Up:</span>
                <span className="text-gray-600">View more content</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Long Press:</span>
                <span className="text-gray-600">Quick reactions, context menu</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-indigo-600 font-medium">Pull to Refresh:</span>
                <span className="text-gray-600">Reload feed content</span>
              </li>
            </ul>
          </div>

          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <h4 className="font-semibold text-gray-900 mb-4">Animations</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Modal:</span>
                <span className="text-gray-600">Slide up from bottom (300ms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Page Transition:</span>
                <span className="text-gray-600">Fade + slide (250ms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Like Button:</span>
                <span className="text-gray-600">Scale + bounce (200ms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Loading:</span>
                <span className="text-gray-600">Skeleton screens, spinners</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Notification:</span>
                <span className="text-gray-600">Slide down from top (250ms)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-pink-600 font-medium">Haptic:</span>
                <span className="text-gray-600">Light feedback on tap actions</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Navigation Structure</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-gray-900 text-sm">Bottom Nav:</div>
              <div className="flex-1 text-sm text-gray-600">
                Home → Search → Create → Activity → Profile
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-gray-900 text-sm">Top Nav:</div>
              <div className="flex-1 text-sm text-gray-600">
                Back button (left), Page title (center), Actions (right)
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-gray-900 text-sm">Modals:</div>
              <div className="flex-1 text-sm text-gray-600">
                Comments, Share options, Settings, Filters
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="w-32 font-semibold text-gray-900 text-sm">Full Screen:</div>
              <div className="flex-1 text-sm text-gray-600">
                Story viewer, Post detail, Camera/Upload
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
