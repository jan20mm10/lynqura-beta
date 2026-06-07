import { Heart, ArrowRight } from 'lucide-react';

export function Welcome({ onComplete }: { onComplete: () => void }) {
  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-10 items-center justify-center text-center">
      <div className="w-16 h-16 rounded-full bg-[#B3915A]/15 border border-[#B3915A]/40 flex items-center justify-center mb-6">
        <Heart size={28} className="text-[#B3915A]" />
      </div>
      <h1 className="text-2xl font-semibold mb-3">Thank you for being here.</h1>
      <p className="text-base leading-relaxed text-[#F5F2EA]/80 mb-2">
        Whatever brought you here today, you've taken a real step — and that matters.
      </p>
      <p className="text-lg font-medium text-[#B3915A] mb-8">You're not alone anymore.</p>
      <button
        onClick={onComplete}
        className="flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-6 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity"
      >
        Enter Lynqura
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
