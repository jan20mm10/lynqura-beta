interface Story {
  id: number;
  username: string;
  avatar: string;
  gradient: string;
}

const stories: Story[] = [
  { id: 1, username: 'Your Story', avatar: 'https://images.unsplash.com/photo-1544124094-8aea0374da93?w=100&h=100&fit=crop', gradient: 'from-purple-400 to-pink-500' },
  { id: 2, username: 'alex_photo', avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop', gradient: 'from-orange-400 to-pink-500' },
  { id: 3, username: 'travel_life', avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&h=100&fit=crop', gradient: 'from-yellow-400 to-orange-500' },
  { id: 4, username: 'foodie_daily', avatar: 'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=100&h=100&fit=crop', gradient: 'from-green-400 to-blue-500' },
  { id: 5, username: 'design_hub', avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=100&h=100&fit=crop', gradient: 'from-blue-400 to-purple-500' },
  { id: 6, username: 'urban_lens', avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop', gradient: 'from-pink-400 to-purple-500' },
];

export function StoryCarousel() {
  return (
    <div className="px-4 py-4 overflow-x-auto scrollbar-hide">
      <div className="flex gap-4">
        {stories.map((story) => (
          <button
            key={story.id}
            className="flex flex-col items-center gap-1 flex-shrink-0 group"
          >
            <div className={`p-0.5 rounded-full bg-gradient-to-tr ${story.gradient}`}>
              <div className="p-0.5 bg-white rounded-full">
                <img
                  src={story.avatar}
                  alt={story.username}
                  className="w-16 h-16 rounded-full object-cover"
                />
              </div>
            </div>
            <span className="text-xs text-gray-700 max-w-[64px] truncate">
              {story.username}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}
