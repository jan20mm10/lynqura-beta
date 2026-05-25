import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { WarmthPass } from './WarmthOverlay';

export function Splash() {
  return (
    <WarmthPass>
      <div className="h-full flex flex-col items-center justify-center bg-[#0C192C] px-8">
        <div className="text-center space-y-12 animate-fade-in">
          {/* Logo - Larger and More Prominent */}
          <div className="space-y-8">
            <div className="relative">
              {/* Soft glow behind logo */}
              <div className="absolute inset-0 blur-3xl opacity-30" style={{ background: 'radial-gradient(circle, #B3915A 0%, transparent 70%)' }}></div>
              <img
                src={logoImage}
                alt="LYNQURA Logo"
                className="w-80 mx-auto relative z-10"
              />
            </div>
          </div>

          {/* Tagline */}
          <div className="space-y-4">
            <p className="text-3xl font-light" style={{ color: '#F5F2EA', letterSpacing: '0.02em' }}>
              Healing is Human
            </p>
            <p className="text-base text-[#B8C0CC] max-w-md mx-auto leading-relaxed">
              A space where you're seen, heard, and never alone.
            </p>
          </div>

          {/* Subtle breathing indicator */}
          <div className="flex items-center justify-center gap-2 pt-8">
            <div className="w-2 h-2 rounded-full bg-[#B3915A] animate-pulse"></div>
            <div className="w-2 h-2 rounded-full bg-[#B3915A] animate-pulse" style={{ animationDelay: '0.3s' }}></div>
            <div className="w-2 h-2 rounded-full bg-[#B3915A] animate-pulse" style={{ animationDelay: '0.6s' }}></div>
          </div>
        </div>
      </div>
    </WarmthPass>
  );
}