import { Home, Search, PlusSquare, Heart, User } from 'lucide-react';
import { useState } from 'react';

export function BottomNav() {
  const [activeTab, setActiveTab] = useState('home');

  const tabs = [
    { id: 'home', icon: Home, label: 'Home' },
    { id: 'search', icon: Search, label: 'Search' },
    { id: 'create', icon: PlusSquare, label: 'Create' },
    { id: 'activity', icon: Heart, label: 'Activity' },
    { id: 'profile', icon: User, label: 'Profile' },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 pb-safe z-50">
      <div className="flex items-center justify-around h-14">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className="flex items-center justify-center flex-1 h-full transition-colors"
              aria-label={tab.label}
            >
              <Icon
                className={`w-6 h-6 transition-colors ${
                  isActive ? 'text-gray-900' : 'text-gray-400'
                }`}
                fill={isActive && tab.id !== 'create' ? 'currentColor' : 'none'}
              />
            </button>
          );
        })}
      </div>
    </nav>
  );
}
