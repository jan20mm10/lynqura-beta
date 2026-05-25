import { Heart, MessageCircle, Send, Bookmark, MoreHorizontal } from 'lucide-react';
import { useState } from 'react';

interface FeedCardProps {
  id: number;
  username: string;
  avatar: string;
  image: string;
  likes: number;
  caption: string;
  timeAgo: string;
}

export function FeedCard({ username, avatar, image, likes, caption, timeAgo }: FeedCardProps) {
  const [isLiked, setIsLiked] = useState(false);
  const [isSaved, setIsSaved] = useState(false);

  return (
    <div className="bg-white mb-6">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3">
        <div className="flex items-center gap-3">
          <img
            src={avatar}
            alt={username}
            className="w-10 h-10 rounded-full object-cover"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-sm">{username}</span>
            <span className="text-xs text-gray-500">{timeAgo}</span>
          </div>
        </div>
        <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-700" />
        </button>
      </div>

      {/* Image */}
      <div className="relative aspect-square">
        <img
          src={image}
          alt={`Post by ${username}`}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Actions */}
      <div className="flex items-center justify-between px-4 pt-3">
        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsLiked(!isLiked)}
            className="transition-transform active:scale-125"
            aria-label="Like"
          >
            <Heart
              className={`w-6 h-6 ${isLiked ? 'fill-red-500 text-red-500' : 'text-gray-700'}`}
            />
          </button>
          <button className="transition-transform active:scale-110" aria-label="Comment">
            <MessageCircle className="w-6 h-6 text-gray-700" />
          </button>
          <button className="transition-transform active:scale-110" aria-label="Share">
            <Send className="w-6 h-6 text-gray-700" />
          </button>
        </div>
        <button
          onClick={() => setIsSaved(!isSaved)}
          className="transition-transform active:scale-110"
          aria-label="Save"
        >
          <Bookmark
            className={`w-6 h-6 ${isSaved ? 'fill-gray-700 text-gray-700' : 'text-gray-700'}`}
          />
        </button>
      </div>

      {/* Likes & Caption */}
      <div className="px-4 pt-2 pb-3">
        <p className="font-semibold text-sm mb-1">
          {isLiked ? likes + 1 : likes} likes
        </p>
        <p className="text-sm">
          <span className="font-semibold mr-2">{username}</span>
          <span className="text-gray-700">{caption}</span>
        </p>
      </div>
    </div>
  );
}
