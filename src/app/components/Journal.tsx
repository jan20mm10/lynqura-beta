import { Plus, Calendar, Lock, ArrowLeft, Home } from 'lucide-react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { WarmthPass } from './WarmthOverlay';

interface JournalProps {
  onBack?: () => void;
  onHome?: () => void;
}

export function Journal({ onBack, onHome }: JournalProps = {}) {
  const prompts = [
    "What's the hardest part right now?",
    "What do you need more of this week?",
    "One small thing I can do in 5 minutes is...",
    "What would feel supportive right now?",
    "What am I grateful for today?",
  ];

  const entries = [
    { date: 'Today, 3:24 PM', preview: 'Feeling overwhelmed but took a walk and it helped...' },
    { date: 'Yesterday, 8:15 PM', preview: "Had a hard conversation but I'm proud I did it..." },
    { date: 'Dec 3, 2024', preview: 'Small wins today - I got out of bed and made breakfast...' },
  ];

  return (
    <WarmthPass>
      <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          {onBack && (
            <button onClick={onBack} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
          <img src={logoImage} alt="LYNQURA" className="h-8" />
          {onHome && (
            <button onClick={onHome} className="p-2 -mr-2">
              <Home className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
        </div>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold">Journal</h1>
            <p className="text-[#B8C0CC]">Private & safe</p>
          </div>
          <Lock className="w-5 h-5 text-[#B8C0CC]" />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-24 space-y-6">
        {/* New Entry */}
        <button className="w-full bg-gradient-to-br from-[#B3915A] to-[#C8A569] rounded-2xl p-6 flex items-center justify-center gap-3">
          <Plus className="w-6 h-6 text-[#0C192C]" />
          <span className="font-semibold text-lg text-[#0C192C]">New Entry</span>
        </button>

        {/* Today's Prompts */}
        <div>
          <h2 className="text-lg font-semibold mb-4">Today's prompts</h2>
          <div className="space-y-3">
            {prompts.slice(0, 3).map((prompt, i) => (
              <button
                key={i}
                className="w-full bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 text-left hover:border-[#B3915A] transition-all"
              >
                <p className="text-sm text-[#F5F2EA]">{prompt}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Recent Entries */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold">Recent entries</h2>
            <button className="flex items-center gap-2 text-sm" style={{ color: '#B3915A' }}>
              <Calendar className="w-4 h-4" />
              <span>View all</span>
            </button>
          </div>
          <div className="space-y-3">
            {entries.map((entry, i) => (
              <div
                key={i}
                className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs text-[#B8C0CC]">{entry.date}</span>
                  <Lock className="w-3 h-3 text-[#B8C0CC]" />
                </div>
                <p className="text-sm text-[#F5F2EA] line-clamp-2">{entry.preview}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
    </WarmthPass>
  );
}