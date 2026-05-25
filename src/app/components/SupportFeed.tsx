import { MessageCircle, Send, Heart, MoreVertical } from 'lucide-react';
import { useState } from 'react';

interface Post {
  id: number;
  author: string;
  avatar: string;
  time: string;
  text: string;
  supportType: 'comfort' | 'advice' | 'distraction' | 'listening' | 'open';
  boundaries: {
    noAdvice: boolean;
    noDMs: boolean;
    noLinks: boolean;
    keepGentle: boolean;
  };
  allowComments: boolean;
  visibility: string;
  comments: number;
  supports: number;
}

interface SupportFeedProps {
  onPostClick: (postId: number) => void;
  onSendSupport: (postId: number) => void;
}

export function SupportFeed({ onPostClick, onSendSupport }: SupportFeedProps) {
  const [filter, setFilter] = useState<'all' | 'trusted' | 'friends' | 'hubs'>('all');

  const posts: Post[] = [
    {
      id: 1,
      author: 'You',
      avatar: '',
      time: '2m ago',
      text: 'Feeling overwhelmed with work deadlines today. Just need to know someone hears me.',
      supportType: 'comfort',
      boundaries: {
        noAdvice: true,
        noDMs: false,
        noLinks: true,
        keepGentle: true,
      },
      allowComments: true,
      visibility: 'Trusted Supporters',
      comments: 3,
      supports: 5,
    },
    {
      id: 2,
      author: 'Alex K.',
      avatar: '',
      time: '15m ago',
      text: 'Had a tough conversation but I feel lighter now. Small wins.',
      supportType: 'open',
      boundaries: {
        noAdvice: false,
        noDMs: false,
        noLinks: true,
        keepGentle: true,
      },
      allowComments: true,
      visibility: 'Friends',
      comments: 7,
      supports: 12,
    },
  ];

  const getSupportTypeColor = (type: string) => {
    switch (type) {
      case 'comfort': return '#E74C3C';
      case 'advice': return '#3498DB';
      case 'distraction': return '#F39C12';
      case 'listening': return '#9B59B6';
      default: return '#B8C0CC';
    }
  };

  const getSupportTypeLabel = (type: string) => {
    switch (type) {
      case 'comfort': return 'Comfort';
      case 'advice': return 'Advice';
      case 'distraction': return 'Distraction';
      case 'listening': return 'Just listening';
      default: return 'Open support';
    }
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">My Support Feed</h3>
      </div>

      {/* Filters */}
      <div className="flex gap-2 overflow-x-auto scrollbar-hide">
        {[
          { id: 'all', label: 'All' },
          { id: 'trusted', label: 'Trusted Supporters' },
          { id: 'friends', label: 'Friends' },
          { id: 'hubs', label: 'Hubs' },
        ].map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id as any)}
            className={`px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
              filter === f.id
                ? 'bg-[#B3915A] text-[#0C192C]'
                : 'bg-[#0A0B16] text-[#B8C0CC] border border-[#B3915A]/20'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Posts */}
      <div className="space-y-4">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4"
          >
            {/* Header */}
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#B3915A]/20 rounded-full"></div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-medium">{post.author}</span>
                    <span className="text-xs text-[#B8C0CC]">•</span>
                    <span className="text-xs text-[#B8C0CC]">{post.time}</span>
                  </div>
                  <span className="text-xs text-[#B8C0CC]">{post.visibility}</span>
                </div>
              </div>
              <button className="p-1">
                <MoreVertical className="w-5 h-5 text-[#B8C0CC]" />
              </button>
            </div>

            {/* Post Text */}
            <p className="text-[#F5F2EA] mb-3">{post.text}</p>

            {/* Support Type & Boundaries */}
            <div className="flex flex-wrap gap-2 mb-3">
              <span
                className="px-3 py-1 rounded-full text-xs font-medium"
                style={{
                  backgroundColor: `${getSupportTypeColor(post.supportType)}20`,
                  color: getSupportTypeColor(post.supportType),
                }}
              >
                Needs: {getSupportTypeLabel(post.supportType)}
              </span>
              {post.boundaries.noAdvice && (
                <span className="px-3 py-1 bg-[#0C192C] border border-[#B3915A]/20 rounded-full text-xs text-[#B8C0CC]">
                  No advice
                </span>
              )}
              {post.boundaries.noDMs && (
                <span className="px-3 py-1 bg-[#0C192C] border border-[#B3915A]/20 rounded-full text-xs text-[#B8C0CC]">
                  No DMs
                </span>
              )}
              {post.boundaries.noLinks && (
                <span className="px-3 py-1 bg-[#0C192C] border border-[#B3915A]/20 rounded-full text-xs text-[#B8C0CC]">
                  No links
                </span>
              )}
              {post.boundaries.keepGentle && (
                <span className="px-3 py-1 bg-[#0C192C] border border-[#B3915A]/20 rounded-full text-xs text-[#B8C0CC]">
                  Gentle
                </span>
              )}
            </div>

            {/* Actions */}
            <div className="flex items-center gap-4 pt-3 border-t border-[#B3915A]/10">
              <button
                onClick={() => onPostClick(post.id)}
                className="flex items-center gap-2 text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
                <span className="text-sm">{post.comments}</span>
              </button>
              <button
                onClick={() => onSendSupport(post.id)}
                className="flex items-center gap-2 text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
              >
                <Send className="w-5 h-5" />
                <span className="text-sm">Send Support</span>
              </button>
              <button className="flex items-center gap-2 text-[#B8C0CC] hover:text-[#B3915A] transition-colors ml-auto">
                <Heart className="w-5 h-5" />
                <span className="text-sm">{post.supports}</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
