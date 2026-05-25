import { Heart, MessageCircle, Send } from 'lucide-react';

export function ComponentsLibrary() {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Components Library</h2>

      {/* Buttons */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Buttons</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex flex-wrap items-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors">
              Primary Button
            </button>
            <button className="px-6 py-3 bg-white text-indigo-600 border-2 border-indigo-600 rounded-lg font-medium hover:bg-indigo-50 transition-colors">
              Secondary Button
            </button>
            <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-medium hover:bg-gray-200 transition-colors">
              Tertiary Button
            </button>
            <button className="px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
              Accent Button
            </button>
          </div>
          
          <div className="mt-6 flex flex-wrap items-center gap-4">
            <button className="px-4 py-2 bg-indigo-600 text-white rounded-lg text-sm font-medium">
              Small
            </button>
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium">
              Medium
            </button>
            <button className="px-8 py-4 bg-indigo-600 text-white rounded-lg text-lg font-medium">
              Large
            </button>
          </div>
        </div>
      </section>

      {/* Input Fields */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Input Fields</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-8 space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Default Input
            </label>
            <input
              type="text"
              placeholder="Enter text..."
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              With Icon
            </label>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none"
              />
              <svg className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Textarea
            </label>
            <textarea
              placeholder="Enter your message..."
              rows={4}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-transparent outline-none resize-none"
            />
          </div>
        </div>
      </section>

      {/* Cards */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Cards</h3>
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
                alt="User"
                className="w-12 h-12 rounded-full object-cover"
              />
              <div>
                <p className="font-semibold text-gray-900">Content Card</p>
                <p className="text-sm text-gray-500">Subtitle text</p>
              </div>
            </div>
            <p className="text-gray-700 mb-4">
              This is a standard content card component used throughout the app.
            </p>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <Heart className="w-5 h-5" />
                <span className="text-sm">Like</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">Comment</span>
              </button>
              <button className="flex items-center gap-2 text-gray-700 hover:text-indigo-600 transition-colors">
                <Send className="w-5 h-5" />
                <span className="text-sm">Share</span>
              </button>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-500 to-pink-500 rounded-xl p-6 shadow-lg text-white">
            <h4 className="text-xl font-bold mb-2">Feature Card</h4>
            <p className="text-indigo-100 mb-6">
              Highlighted card component for special features or CTAs.
            </p>
            <button className="px-6 py-3 bg-white text-indigo-600 rounded-lg font-medium hover:bg-gray-50 transition-colors">
              Learn More
            </button>
          </div>
        </div>
      </section>

      {/* Badges & Pills */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Badges & Pills</h3>
        <div className="bg-white rounded-lg border border-gray-200 p-8">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium">
              Primary
            </span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">
              Accent
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-700 rounded-full text-sm font-medium">
              Success
            </span>
            <span className="px-3 py-1 bg-yellow-100 text-yellow-700 rounded-full text-sm font-medium">
              Warning
            </span>
            <span className="px-3 py-1 bg-red-100 text-red-700 rounded-full text-sm font-medium">
              Error
            </span>
            <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
              Neutral
            </span>
          </div>
        </div>
      </section>
    </div>
  );
}
