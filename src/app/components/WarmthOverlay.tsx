// LYNQURA Warmth Pass Components
// Adds premium gradient overlays and soft glows to screens

export function GradientOverlay() {
  return (
    <div
      className="absolute inset-0 pointer-events-none"
      style={{
        background: 'linear-gradient(135deg, rgba(15, 76, 129, 0.18) 0%, rgba(24, 59, 120, 0.18) 55%, rgba(212, 175, 55, 0.18) 100%)',
        mixBlendMode: 'normal',
        zIndex: 1,
      }}
    />
  );
}

export function SoftGlow() {
  return (
    <div
      className="absolute pointer-events-none"
      style={{
        width: '70%',
        height: '38%',
        left: '15%',
        top: '8%',
        background: 'radial-gradient(circle, rgba(212, 175, 55, 0.16) 0%, transparent 70%)',
        filter: 'blur(80px)',
        zIndex: 0,
      }}
    />
  );
}

interface WarmthPassProps {
  children: React.ReactNode;
  withGlow?: boolean;
}

export function WarmthPass({ children, withGlow = true }: WarmthPassProps) {
  return (
    <div className="relative w-full h-full">
      {withGlow && <SoftGlow />}
      <GradientOverlay />
      <div className="relative z-10 w-full h-full">
        {children}
      </div>
    </div>
  );
}
