import { useState } from 'react';
import { ArrowRight, Heart } from 'lucide-react';

const MOODS = [
  { label: 'Good', value: 'good' },
  { label: 'Okay', value: 'okay' },
  { label: 'A little down', value: 'low' },
  { label: 'Really struggling', value: 'struggling' },
];

export function SelfCheckInOnboarding({ onComplete }: { onComplete: () => void }) {
  const [mood, setMood] = useState<string | null>(null);

  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-8">
      <div className="flex items-center gap-3 mb-2">
        <div className="w-11 h-11 rounded-full bg-[#B3915A]/15 border border-[#B3915A]/40 flex items-center justify-center shrink-0">
          <Heart size={22} className="text-[#B3915A]" />
        </div>
        <h1 className="text-xl font-semibold">A quick check-in</h1>
      </div>
      <p className="text-sm text-[#F5F2EA]/70 mb-6">How are you feeling right now? Only if you'd like to share.</p>

      <div className="flex flex-col gap-3 flex-1">
        {MOODS.map((m) => {
          const selected = mood === m.value;
          return (
            <button
              key={m.value}
              onClick={() => setMood(m.value)}
              className={`text-left rounded-xl border px-4 py-3 text-sm transition-all ${
                selected
                  ? 'border-[#B3915A] bg-[#B3915A]/15'
                  : 'border-[#F5F2EA]/15 bg-[#0A0B16]/40 hover:border-[#F5F2EA]/35'
              }`}
            >
              {m.label}
            </button>
          );
        })}

        {mood === 'struggling' && (
          <div className="mt-2 rounded-xl border border-[#B3915A]/50 bg-[#0A0B16] p-4 text-sm leading-relaxed">
            It sounds like things are heavy right now. Peers here are ready to listen — and if you need immediate help, you can call or text <a href="tel:988" className="font-semibold underline underline-offset-2">988</a> anytime. You're not alone anymore.
          </div>
        )}
      </div>

      <div className="pt-6 flex flex-col gap-3">
        <button
          onClick={onComplete}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-4 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity"
        >
          Continue
          <ArrowRight size={18} />
        </button>
        <button onClick={onComplete} className="text-sm text-[#F5F2EA]/60 hover:text-[#F5F2EA]">
          Skip for now
        </button>
      </div>
    </div>
  );
}
