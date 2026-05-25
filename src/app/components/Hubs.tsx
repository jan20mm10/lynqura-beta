import { MessageCircle, BookOpen, Target, Heart, Users, Briefcase, Moon, ArrowRight, ArrowLeft, Home } from 'lucide-react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { WarmthPass } from './WarmthOverlay';

interface HubsProps {
  onHubClick: (hub: string) => void;
  onBack?: () => void;
  onHome?: () => void;
}

export function Hubs({ onHubClick, onBack, onHome }: HubsProps) {
  const hubs = [
    { id: 'stress', name: 'Stress & Burnout', icon: Heart, color: '#E74C3C', members: '12.4K' },
    { id: 'anxiety', name: 'Anxiety', icon: MessageCircle, color: '#3498DB', members: '18.2K' },
    { id: 'alcohol', name: 'Alcohol & Recovery', icon: Target, color: '#9B59B6', members: '8.7K' },
    { id: 'lgbtq', name: 'LGBTQ+', icon: Heart, color: '#E91E63', members: '15.1K' },
    { id: 'grief', name: 'Grief & Loss', icon: Heart, color: '#607D8B', members: '6.3K' },
    { id: 'relationships', name: 'Relationships', icon: Users, color: '#F39C12', members: '14.8K' },
    { id: 'work', name: 'Work/School', icon: Briefcase, color: '#16A085', members: '11.5K' },
    { id: 'sleep', name: 'Sleep', icon: Moon, color: '#34495E', members: '9.2K' },
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
        <div>
          <h1 className="text-3xl font-bold mb-2">Hubs</h1>
          <p className="text-[#B8C0CC]">Find people who get it</p>
        </div>
      </div>

      {/* Search */}
      <div className="px-6 pb-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search hubs..."
            className="w-full px-4 py-3 pl-12 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
          />
          <svg className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8C0CC]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
          </svg>
        </div>
      </div>

      {/* Hubs Grid */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-24">
        <div className="grid grid-cols-2 gap-4">
          {hubs.map((hub) => {
            const Icon = hub.icon;
            return (
              <button
                key={hub.id}
                onClick={() => onHubClick(hub.id)}
                className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-5 text-left hover:border-[#B3915A] transition-all"
              >
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center" style={{ backgroundColor: `${hub.color}20` }}>
                    <Icon className="w-6 h-6" style={{ color: hub.color }} />
                  </div>
                  <ArrowRight className="w-5 h-5 text-[#B8C0CC]" />
                </div>
                <h3 className="font-semibold mb-1">{hub.name}</h3>
                <p className="text-sm text-[#B8C0CC]">{hub.members} members</p>
              </button>
            );
          })}
        </div>
      </div>
    </div>
    </WarmthPass>
  );
}
