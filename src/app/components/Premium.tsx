import { Check, X, Crown, Home } from 'lucide-react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { WarmthPass } from './WarmthOverlay';

interface PremiumProps {
  onClose: () => void;
  onHome?: () => void;
}

export function Premium({ onClose, onHome }: PremiumProps) {
  const features = [
    { name: 'No ads', free: false, premium: true },
    { name: 'Unlimited DMs', free: false, premium: true },
    { name: 'Priority matching', free: false, premium: true },
    { name: 'Free yoga & breathwork classes', free: false, premium: true },
    { name: 'Premium circles', free: false, premium: true },
    { name: 'Expanded journaling packs', free: false, premium: true },
    { name: 'Pulse check-ins', free: true, premium: true },
    { name: 'All hubs access', free: true, premium: true },
    { name: 'Crisis support', free: true, premium: true },
  ];

  return (
    <WarmthPass>
      <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col overflow-y-auto scrollbar-hide">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          {onHome ? (
            <button onClick={onHome} className="p-2 -ml-2">
              <Home className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          ) : (
            <div className="w-10"></div>
          )}
          <img src={logoImage} alt="LYNQURA" className="h-8" />
          <button onClick={onClose} className="p-2 -mr-2">
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="text-center mb-8">
          <div className="w-20 h-20 bg-gradient-to-br from-[#B3915A] to-[#C8A569] rounded-full flex items-center justify-center mx-auto mb-4">
            <Crown className="w-10 h-10 text-[#0C192C]" />
          </div>
          <h1 className="text-3xl font-bold mb-2">LYNQURA Premium</h1>
          <p className="text-[#B8C0CC]">Unlimited support, zero ads</p>
        </div>

        {/* Pricing */}
        <div className="bg-gradient-to-br from-[#B3915A]/20 to-[#C8A569]/10 border border-[#B3915A]/30 rounded-2xl p-6 text-center mb-8">
          <div className="flex items-baseline justify-center gap-2 mb-2">
            <span className="text-5xl font-bold" style={{ color: '#B3915A' }}>$5.99</span>
            <span className="text-[#B8C0CC]">/month</span>
          </div>
          <p className="text-sm text-[#B8C0CC]">Cancel anytime</p>
        </div>
      </div>

      {/* Features Comparison */}
      <div className="px-6 pb-6">
        <h2 className="text-lg font-semibold mb-4">What's included</h2>
        <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl overflow-hidden">
          <div className="grid grid-cols-3 gap-4 p-4 border-b border-[#B3915A]/20">
            <div></div>
            <div className="text-center text-sm text-[#B8C0CC]">Free</div>
            <div className="text-center text-sm font-semibold" style={{ color: '#B3915A' }}>Premium</div>
          </div>
          {features.map((feature, i) => (
            <div key={i} className={`grid grid-cols-3 gap-4 p-4 items-center ${i < features.length - 1 ? 'border-b border-[#B3915A]/10' : ''}`}>
              <div className="text-sm">{feature.name}</div>
              <div className="flex justify-center">
                {feature.free ? (
                  <Check className="w-5 h-5 text-green-500" />
                ) : (
                  <X className="w-5 h-5 text-[#B8C0CC]/30" />
                )}
              </div>
              <div className="flex justify-center">
                {feature.premium ? (
                  <Check className="w-5 h-5" style={{ color: '#B3915A' }} />
                ) : (
                  <X className="w-5 h-5 text-[#B8C0CC]/30" />
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Important Note */}
      <div className="px-6 pb-6">
        <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4">
          <p className="text-sm text-[#B8C0CC]">
            <span className="font-semibold" style={{ color: '#B3915A' }}>Safety exception:</span> If you're in a low Pulse moment (1–3), you can always reach your Trusted Supporters and safety resources—Premium or not.
          </p>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-6 pb-8">
        <button className="w-full py-4 bg-[#B3915A] text-[#0C192C] rounded-2xl font-bold text-lg mb-3">
          Start Premium
        </button>
        <p className="text-center text-xs text-[#B8C0CC]">
          Billed monthly. Cancel anytime.
        </p>
      </div>
    </div>
    </WarmthPass>
  );
}
