import { ArrowLeft, Plus, MoreVertical, Home } from 'lucide-react';
import { useState } from 'react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";

interface HubDetailProps {
  onBack: () => void;
  onHome?: () => void;
}

export function HubDetail({ onBack, onHome }: HubDetailProps) {
  const [activeTab, setActiveTab] = useState<'threads' | 'resources' | 'challenges'>('threads');

  const threads = [
    { id: 1, author: 'Sarah M.', time: '2h ago', title: 'Anyone else feel constant pressure?', replies: 23, likes: 45 },
    { id: 2, author: 'Mike T.', time: '5h ago', title: 'Small wins today - I went outside', replies: 18, likes: 67 },
    { id: 3, author: 'Alex K.', time: '8h ago', title: 'How do you handle Sunday anxiety?', replies: 34, likes: 52 },
    { id: 4, author: 'Jordan P.', time: '12h ago', title: 'Breathing exercises that actually work', replies: 29, likes: 81 },
  ];

  const resources = [
    { title: '5-Minute Breathing Reset', type: 'Exercise', affiliate: false },
    { title: 'Understanding Anxiety (Book)', type: 'Affiliate Link', affiliate: true },
    { title: 'Meditation for Beginners', type: 'Video', affiliate: false },
    { title: 'Crisis Hotlines', type: 'Resource', affiliate: false },
  ];

  const challenges = [
    { title: '7-Day Calm Challenge', participants: '2.4K', days: 7 },
    { title: 'Morning Mindfulness', participants: '1.8K', days: 14 },
    { title: 'Anxiety Reset Week', participants: '3.1K', days: 7 },
  ];

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-[#B3915A]/20">
        <div className="flex items-center justify-between mb-6">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
          </button>
          <img src={logoImage} alt="LYNQURA" className="h-6" />
          {onHome ? (
            <button onClick={onHome} className="p-2 -mr-2">
              <Home className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          ) : (
            <button className="p-2">
              <MoreVertical className="w-6 h-6" />
            </button>
          )}
        </div>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-16 h-16 rounded-full bg-[#3498DB]/20 flex items-center justify-center">
            <span className="text-2xl">💙</span>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Anxiety</h1>
            <p className="text-[#B8C0CC]">18.2K members</p>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-[#B3915A]/20">
        {[
          { id: 'threads', label: 'Threads' },
          { id: 'resources', label: 'Resources' },
          { id: 'challenges', label: 'Challenges' },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id as any)}
            className={`flex-1 px-6 py-4 font-medium transition-colors ${
              activeTab === tab.id
                ? 'text-[#B3915A] border-b-2 border-[#B3915A]'
                : 'text-[#B8C0CC]'
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide pb-24">
        {activeTab === 'threads' && (
          <div className="p-6 space-y-4">
            {threads.map((thread) => (
              <div key={thread.id} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-[#B3915A]/20 rounded-full"></div>
                    <div>
                      <p className="font-medium text-sm">{thread.author}</p>
                      <p className="text-xs text-[#B8C0CC]">{thread.time}</p>
                    </div>
                  </div>
                  <button className="p-1">
                    <MoreVertical className="w-4 h-4 text-[#B8C0CC]" />
                  </button>
                </div>
                <h3 className="font-medium mb-3">{thread.title}</h3>
                <div className="flex items-center gap-4 text-sm text-[#B8C0CC]">
                  <span>{thread.replies} replies</span>
                  <span>·</span>
                  <span>{thread.likes} likes</span>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'resources' && (
          <div className="p-6 space-y-3">
            <p className="text-xs text-[#B8C0CC] mb-4">
              Some links are affiliate links. LYNQURA may earn a commission at no extra cost to you.
            </p>
            {resources.map((resource, i) => (
              <div key={i} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <h3 className="font-medium">{resource.title}</h3>
                  <p className="text-sm text-[#B8C0CC]">{resource.type}</p>
                </div>
                <button className="px-4 py-2 bg-[#B3915A] text-[#0C192C] rounded-xl text-sm font-medium">
                  View
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'challenges' && (
          <div className="p-6 space-y-4">
            {challenges.map((challenge, i) => (
              <div key={i} className="bg-gradient-to-br from-[#B3915A]/20 to-[#C8A569]/10 border border-[#B3915A]/30 rounded-2xl p-5">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="font-semibold text-lg mb-1">{challenge.title}</h3>
                    <p className="text-sm text-[#B8C0CC]">{challenge.participants} participating</p>
                  </div>
                  <span className="px-3 py-1 bg-[#0A0B16] rounded-full text-sm">{challenge.days} days</span>
                </div>
                <button className="w-full py-3 bg-[#B3915A] text-[#0C192C] rounded-xl font-semibold">
                  Join Challenge
                </button>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Floating Action Button */}
      <button className="absolute bottom-28 right-6 w-14 h-14 bg-[#B3915A] rounded-full flex items-center justify-center shadow-lg">
        <Plus className="w-6 h-6 text-[#0C192C]" />
      </button>
    </div>
  );
}
