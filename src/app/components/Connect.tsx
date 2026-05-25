import { Users, UserPlus, Shield, Zap, ArrowLeft, Home } from 'lucide-react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { WarmthPass } from './WarmthOverlay';

interface ConnectProps {
  onMatchClick: () => void;
  onBack?: () => void;
  onHome?: () => void;
}

export function Connect({ onMatchClick, onBack, onHome }: ConnectProps) {
  const friends = [
    { name: 'Alex K.', status: 'Online', lastMsg: 'Thanks for checking in 💙' },
    { name: 'Jordan P.', status: '5m ago', lastMsg: 'That breathing exercise helped!' },
    { name: 'Sarah M.', status: '1h ago', lastMsg: 'See you in the anxiety hub?' },
  ];

  const trustedSupporters = [
    { name: 'Mike T.', added: '2 weeks ago' },
    { name: 'Taylor R.', added: '1 month ago' },
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
        <h1 className="text-3xl font-bold">Connect</h1>
      </div>

      {/* Human Connection Visual */}
      <div className="px-6 pb-4">
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=800&q=80"
            alt="People connecting and supporting each other"
            className="w-full h-40 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C192C]/70 to-transparent"></div>
          <div className="absolute bottom-3 left-4 right-4">
            <p className="text-sm font-semibold text-[#F5F2EA]">Real connections that matter</p>
            <p className="text-xs text-[#B8C0CC]">Peer-to-peer support, human-to-human</p>
          </div>
        </div>
      </div>

      {/* Match Now Card */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-br from-[#B3915A] to-[#C8A569] rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-3">
            <Zap className="w-8 h-8 text-[#0C192C]" />
            <h2 className="text-2xl font-bold text-[#0C192C]">Match Now</h2>
          </div>
          <p className="text-[#0C192C]/80 mb-4">Connect with someone who understands</p>
          <button 
            onClick={onMatchClick}
            className="w-full py-3 bg-[#0C192C] text-[#B3915A] rounded-xl font-semibold"
          >
            Find Support
          </button>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-24 space-y-6">
        {/* Trusted Supporters */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" style={{ color: '#B3915A' }} />
              <h2 className="text-lg font-semibold">Trusted Supporters ({trustedSupporters.length}/5)</h2>
            </div>
            <button className="text-sm" style={{ color: '#B3915A' }}>
              Add
            </button>
          </div>
          <div className="space-y-3">
            {trustedSupporters.map((supporter, i) => (
              <div key={i} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#B3915A]/20 rounded-full"></div>
                  <div>
                    <p className="font-medium">{supporter.name}</p>
                    <p className="text-sm text-[#B8C0CC]">Added {supporter.added}</p>
                  </div>
                </div>
                <button className="px-4 py-2 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl text-sm">
                  Manage
                </button>
              </div>
            ))}
            <div className="bg-[#0A0B16] border-2 border-dashed border-[#B3915A]/20 rounded-2xl p-6 text-center">
              <Shield className="w-8 h-8 mx-auto mb-2 text-[#B8C0CC]" />
              <p className="text-sm text-[#B8C0CC]">Add up to 3 more supporters</p>
            </div>
          </div>
        </div>

        {/* Friends */}
        <div>
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" style={{ color: '#B3915A' }} />
              <h2 className="text-lg font-semibold">Friends</h2>
            </div>
            <button className="text-sm" style={{ color: '#B3915A' }}>
              <UserPlus className="w-5 h-5" />
            </button>
          </div>
          <div className="space-y-3">
            {friends.map((friend, i) => (
              <div key={i} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 flex items-center gap-3">
                <div className="relative">
                  <div className="w-12 h-12 bg-[#B3915A]/20 rounded-full"></div>
                  {friend.status === 'Online' && (
                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0C192C]"></div>
                  )}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <p className="font-medium">{friend.name}</p>
                    <span className="text-xs text-[#B8C0CC]">{friend.status}</span>
                  </div>
                  <p className="text-sm text-[#B8C0CC]">{friend.lastMsg}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Premium upsell for unlimited DMs */}
        <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-5 text-center">
          <p className="text-sm text-[#B8C0CC] mb-3">Free users can reply to messages</p>
          <button className="px-6 py-3 bg-[#B3915A] text-[#0C192C] rounded-xl font-semibold">
            Upgrade for Unlimited Messaging
          </button>
        </div>
      </div>
    </div>
    </WarmthPass>
  );
}
