import { useState, useEffect } from 'react';
import { X, Phone, MessageSquare, BookOpen } from 'lucide-react';

interface PulseModalProps {
  onClose: () => void;
  onSubmit: (score: number) => void;
  onViewCrisisResources?: () => void;
}

export function PulseModal({ onClose, onSubmit, onViewCrisisResources }: PulseModalProps) {
  const [score, setScore] = useState<number | null>(null);
  const [showLowAlert, setShowLowAlert] = useState(false);
  const [breathingPhase, setBreathingPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [breathingCount, setBreathingCount] = useState(4);

  // Breathing animation cycle
  useEffect(() => {
    if (!showLowAlert) return;

    const interval = setInterval(() => {
      setBreathingPhase(prev => {
        if (prev === 'inhale') {
          setBreathingCount(4);
          return 'hold';
        } else if (prev === 'hold') {
          setBreathingCount(6);
          return 'exhale';
        } else {
          setBreathingCount(4);
          return 'inhale';
        }
      });
    }, breathingPhase === 'inhale' ? 4000 : breathingPhase === 'hold' ? 4000 : 6000);

    return () => clearInterval(interval);
  }, [showLowAlert, breathingPhase]);

  const handleSubmit = () => {
    if (score === null) return;

    if (score <= 3) {
      setShowLowAlert(true);
    } else {
      onSubmit(score);
    }
  };

  if (showLowAlert) {
    return (
      <div className="absolute inset-0 flex items-end z-50" style={{ background: 'linear-gradient(180deg, rgba(12, 25, 44, 0.95) 0%, rgba(12, 25, 44, 0.98) 100%)' }}>
        <div className="w-full rounded-t-3xl p-6 pb-8 space-y-6 relative overflow-hidden" style={{ maxHeight: '85vh', backgroundColor: '#0C192C' }}>
          {/* Soft warm glow background */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-96 pointer-events-none" style={{
            background: 'radial-gradient(circle, rgba(179, 145, 90, 0.15) 0%, transparent 70%)',
            filter: 'blur(60px)',
          }}></div>

          <div className="relative z-10">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-light" style={{ color: '#F5F2EA', letterSpacing: '0.02em' }}>I'm here with you</h2>
              <button onClick={onClose} className="p-2">
                <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
              </button>
            </div>

            {/* Breathing circle animation */}
            <div className="flex flex-col items-center justify-center py-8">
              <div className="relative flex items-center justify-center mb-6">
                <div
                  className="rounded-full transition-all duration-[4000ms] ease-in-out"
                  style={{
                    width: breathingPhase === 'exhale' ? '80px' : '140px',
                    height: breathingPhase === 'exhale' ? '80px' : '140px',
                    background: 'radial-gradient(circle, rgba(179, 145, 90, 0.3) 0%, rgba(200, 165, 105, 0.1) 70%)',
                    boxShadow: '0 0 40px rgba(179, 145, 90, 0.3)',
                  }}
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-lg font-light" style={{ color: '#B3915A' }}>
                    {breathingPhase === 'inhale' ? 'Breathe in' : breathingPhase === 'hold' ? 'Hold' : 'Breathe out'}
                  </p>
                </div>
              </div>
              <p className="text-sm text-[#B8C0CC] text-center max-w-xs">
                You rated your Pulse as {score}. That takes courage to share.
              </p>
            </div>

            <p className="text-base text-[#F5F2EA] mb-6 text-center font-light">
              What would feel most supportive right now?
            </p>

            <div className="space-y-3">
              {/* Primary action - Breathing */}
              <button
                className="w-full py-5 rounded-2xl font-medium text-lg transition-all"
                style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
                onClick={() => {
                  // Start breathing exercise
                  console.log('Start breathing exercise');
                }}
              >
                🫁 Breathe with me (2 minutes)
              </button>

              {/* Secondary actions */}
              <button
                className="w-full py-4 rounded-2xl font-medium bg-[#0A0B16] border border-[#B3915A]/20"
                style={{ color: '#F5F2EA' }}
                onClick={() => {
                  onSubmit(score!);
                }}
              >
                💬 Alert my Trusted Supporters
              </button>

              <button
                className="w-full py-4 rounded-2xl font-medium bg-[#0A0B16] border border-[#B3915A]/20 flex items-center justify-center gap-2"
                style={{ color: '#F5F2EA' }}
                onClick={() => {
                  if (onViewCrisisResources) {
                    onViewCrisisResources();
                  }
                }}
              >
                <Phone className="w-5 h-5" />
                <span>View crisis hotlines</span>
              </button>

              <button
                className="w-full py-4 rounded-2xl font-medium bg-[#0A0B16] border border-[#B3915A]/20 flex items-center justify-center gap-2"
                style={{ color: '#F5F2EA' }}
              >
                <BookOpen className="w-5 h-5" />
                <span>Write in my private journal</span>
              </button>
            </div>

            {/* Not in crisis option */}
            <button
              className="w-full py-3 mt-4 text-sm text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
              onClick={() => onSubmit(score!)}
            >
              Not in crisis, just having a hard day
            </button>

            {/* Emergency resources */}
            <div className="mt-6 pt-6 border-t border-[#B3915A]/20">
              <p className="text-sm text-[#F5F2EA] mb-3 text-center font-medium">
                If you're in danger right now:
              </p>
              <div className="space-y-2">
                <a
                  href="tel:988"
                  className="w-full py-3 rounded-xl bg-[#0A0B16] border border-[#B3915A]/30 flex items-center justify-center gap-2 text-[#B3915A] hover:border-[#B3915A] transition-all"
                >
                  <Phone className="w-4 h-4" />
                  <span className="text-sm font-medium">Call or text 988 (Suicide & Crisis Lifeline)</span>
                </a>
                <a
                  href="sms:741741&body=HOME"
                  className="w-full py-3 rounded-xl bg-[#0A0B16] border border-[#B3915A]/30 flex items-center justify-center gap-2 text-[#B3915A] hover:border-[#B3915A] transition-all"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span className="text-sm font-medium">Text HOME to 741741 (Crisis Text Line)</span>
                </a>
              </div>
              <p className="text-xs text-[#B8C0CC] text-center mt-3 leading-relaxed">
                You're worth it, and help is available 24/7
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black/80 flex items-end z-50">
      <div className="w-full bg-[#0C192C] rounded-t-3xl p-6 space-y-6">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-bold" style={{ color: '#F5F2EA' }}>Quick check-in</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
          </button>
        </div>

        <div>
          <p className="text-[#B8C0CC] mb-4">How do you feel right now?</p>
          <div className="flex justify-between gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((num) => (
              <button
                key={num}
                onClick={() => setScore(num)}
                className="flex-1 aspect-square rounded-xl font-semibold text-lg transition-all"
                style={{
                  backgroundColor: score === num ? '#B3915A' : '#0A0B16',
                  color: score === num ? '#0C192C' : '#B8C0CC',
                  borderWidth: '1px',
                  borderColor: score === num ? '#B3915A' : 'rgba(179, 145, 90, 0.2)',
                }}
              >
                {num}
              </button>
            ))}
          </div>
          <div className="flex justify-between text-xs text-[#B8C0CC] mt-2">
            <span>Low</span>
            <span>High</span>
          </div>
        </div>

        <button
          onClick={handleSubmit}
          disabled={score === null}
          className="w-full py-4 rounded-2xl font-semibold transition-all disabled:opacity-50"
          style={{
            backgroundColor: score !== null ? '#B3915A' : '#0A0B16',
            color: score !== null ? '#0C192C' : '#B8C0CC',
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
}
