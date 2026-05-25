export function ScreensV1() {
  const screens = [
    {
      name: 'Home Feed',
      description: 'Main feed with stories and posts',
      route: '/home',
      status: 'Complete',
    },
    {
      name: 'Profile',
      description: 'User profile with posts grid',
      route: '/profile',
      status: 'Complete',
    },
    {
      name: 'Search & Explore',
      description: 'Discovery and search interface',
      route: '/explore',
      status: 'In Progress',
    },
    {
      name: 'Create Post',
      description: 'Upload and edit new content',
      route: '/create',
      status: 'In Progress',
    },
    {
      name: 'Activity',
      description: 'Notifications and interactions',
      route: '/activity',
      status: 'Planned',
    },
    {
      name: 'Messages',
      description: 'Direct messaging interface',
      route: '/messages',
      status: 'Planned',
    },
    {
      name: 'Settings',
      description: 'Account and app settings',
      route: '/settings',
      status: 'Planned',
    },
    {
      name: 'Onboarding',
      description: 'Welcome flow for new users',
      route: '/onboarding',
      status: 'Complete',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'Complete':
        return 'bg-green-100 text-green-700';
      case 'In Progress':
        return 'bg-yellow-100 text-yellow-700';
      case 'Planned':
        return 'bg-gray-100 text-gray-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-2">Screens (V1)</h2>
      <p className="text-gray-600 mb-8">All screens included in the first version of LYNQURA</p>

      <div className="grid grid-cols-2 gap-6">
        {screens.map((screen) => (
          <div
            key={screen.name}
            className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-lg transition-shadow"
          >
            <div className="flex items-start justify-between mb-3">
              <h3 className="text-lg font-semibold text-gray-900">{screen.name}</h3>
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(
                  screen.status
                )}`}
              >
                {screen.status}
              </span>
            </div>
            <p className="text-gray-600 text-sm mb-4">{screen.description}</p>
            <div className="flex items-center justify-between">
              <code className="text-xs bg-gray-100 px-2 py-1 rounded text-gray-700">
                {screen.route}
              </code>
              <button className="text-indigo-600 text-sm font-medium hover:text-indigo-700">
                View →
              </button>
            </div>
          </div>
        ))}
      </div>

      <section className="mt-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Screen Specifications</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-6">
          <div className="grid grid-cols-2 gap-8">
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Mobile Specs</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Canvas Width:</dt>
                  <dd className="font-medium text-gray-900">375px</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Canvas Height:</dt>
                  <dd className="font-medium text-gray-900">812px</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Device:</dt>
                  <dd className="font-medium text-gray-900">iPhone 12/13 Pro</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Safe Area Top:</dt>
                  <dd className="font-medium text-gray-900">44px</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Safe Area Bottom:</dt>
                  <dd className="font-medium text-gray-900">34px</dd>
                </div>
              </dl>
            </div>
            
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Design Tokens</h4>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-gray-600">Corner Radius:</dt>
                  <dd className="font-medium text-gray-900">8px, 12px, 16px</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Shadow:</dt>
                  <dd className="font-medium text-gray-900">0px 4px 12px rgba(0,0,0,0.08)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Max Width:</dt>
                  <dd className="font-medium text-gray-900">448px (md)</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-gray-600">Grid Columns:</dt>
                  <dd className="font-medium text-gray-900">3 (Profile), 2 (Explore)</dd>
                </div>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
