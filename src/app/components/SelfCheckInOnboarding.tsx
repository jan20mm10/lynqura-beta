import { useState } from 'react';
import { ArrowLeft } from 'lucide-react';

interface SelfCheckInOnboardingProps {
  onComplete: () => void;
}

const STEPS = [
  {
    id: 'intro',
    question: 'Before we set up your Pulse, let\'s check in.',
    subtext: 'This takes about 60 seconds and helps us personalise your experience.',
    type: 'intro',
  },
  {
    id: 'feeling',
    question: 'How are you feeling right now?',
    subtext: 'Be honest — there\'s no wrong answer here.',
    type: 'slider',
  },
  {
    id: 'brought-here',
    question: 'What brought you to LYNQURA today?',
    subtext: 'Pick everything that feels true.',
    type: 'chips',
    options: [
      'I need to vent',
      'I want to support others',
      'I\'m going through something hard',
      'I\'m curious',
      'I want real connection',
      'I feel lonely',
    ],
  },
  {
    id: 'topics',
    question: 'What topics feel most relevant to you?',
    subtext: 'We\'ll use this to match you with the right people.',
    type: 'chips',
    options: [
      'Anxiety',
      'Depression',
      'Grief',
      'Relationships',
      'Work stress',
      'Identity',
      'Loneliness',
      'Burnout',
      'Trauma',
      'General wellness',
    ],
  },
];

const EMOJIS: Record<number, string> = {
  1: '😔', 2: '😔', 3: '😟', 4: '😕', 5: '😐',
  6: '🙂', 7: '🙂', 8: '😊', 9: '😊', 10: '😄',
};

export function SelfCheckInOnboarding({ onComplete }: SelfCheckInOnboardingProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const [sliderValue, setSliderValue] = useState(5);
  const [selectedChips, setSelectedChips] = useState<Record<string, string[]>>({});

  const step = STEPS[stepIndex];
  const isFirst = stepIndex === 0;
  const isLast = stepIndex === STEPS.length - 1;
  const progress = ((stepIndex + 1) / STEPS.length) * 100;

  const toggleChip = (stepId: string, option: string) => {
    setSelectedChips((prev) => {
      const current = prev[stepId] || [];
      return {
        ...prev,
        [stepId]: current.includes(option)
          ? current.filter((c) => c !== option)
          : [...current, option],
      };
    });
  };

  const canAdvance = () => {
    if (step.type === 'intro' || step.type === 'slider') return true;
    return (selectedChips[step.id] || []).length > 0;
  };

  const handleNext = () => {
    if (isLast) {
      onComplete();
    } else {
      setStepIndex((i) => i + 1);
    }
  };

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      <div className="px-6 pt-12 pb-4">
        <div className="flex items-center justify-between mb-6">
          {!isFirst ? (
            <button onClick={() => setStepIndex((i) => i - 1)} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          ) : (
            <div className="w-10" />
          )}
          <span className="text-lg font-bold tracking-wide" style={{ color: '#B3915A' }}>LYNQURA</span>
          <div className="w-10" />
        </div>

        <div className="w-full h-1 bg-[#0A0B16] rounded-full overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-500"
            style={{ width: `${progress}%`, backgroundColor: '#B3915A' }}
          />
        </div>
        <p className="text-xs text-[#B8C0CC] mt-2 text-right">
          {stepIndex + 1} of {STEPS.length}
        </p>
      </div>

      <div className="flex-1 overflow-y-auto px-6 py-4 space-y-6">
        <div className="space-y-2">
          <h2 className="text-2xl font-bold text-[#F5F2EA]">{step.question}</h2>
          <p className="text-sm text-[#B8C0CC]">{step.subtext}</p>
        </div>

        {step.type === 'intro' && (
          <div className="bg-gradient-to-br from-[#B3915A]/20 to-[#C8A569]/10 border border-[#B3915A]/30 rounded-2xl p-6 space-y-4">
            <div className="text-4xl text-center">💛</div>
            <p className="text-sm text-[#B8C0CC] text-center leading-relaxed">
              You're in a safe space. Everything you share here is private and never sold.
              LYNQURA exists because healing is human.
            </p>
          </div>
        )}

        {step.type === 'slider' && (
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-6 space-y-6">
            <div className="text-center">
              <span className="text-6xl">{EMOJIS[sliderValue]}</span>
              <p className="text-3xl font-bold mt-3" style={{ color: '#B3915A' }}>
                {sliderValue} / 10
              </p>
            </div>
            <input
              type="range"
              min={1}
              max={10}
              value={sliderValue}
              onChange={(e) => setSliderValue(Number(e.target.value))}
              className="w-full accent-[#B3915A]"
            />
            <div className="flex justify-between text-xs text-[#B8C0CC]">
              <span>Not great</span>
              <span>Amazing</span>
            </div>
          </div>
        )}

        {step.type === 'chips' && step.options && (
          <div className="flex flex-wrap gap-2">
            {step.options.map((option) => {
              const isSelected = (selectedChips[step.id] || []).includes(option);
              return (
                <button
                  key={option}
                  onClick={() => toggleChip(step.id, option)}
                  className="px-4 py-2 rounded-full text-sm border transition-all"
                  style={{
                    backgroundColor: isSelected ? 'rgba(179,145,90,0.2)' : '#0A0B16',
                    borderColor: isSelected ? '#B3915A' : 'rgba(179,145,90,0.2)',
                    color: isSelected ? '#B3915A' : '#F5F2EA',
                  }}
                >
                  {option}
                </button>
              );
            })}
          </div>
        )}
      </div>

      <div className="px-6 pb-10 pt-4 border-t border-[#B3915A]/10">
        <button
          onClick={handleNext}
          disabled={!canAdvance()}
          className="w-full py-4 rounded-2xl font-semibold transition-all"
          style={{
            backgroundColor: canAdvance() ? '#B3915A' : '#0A0B16',
            color: canAdvance() ? '#0C192C' : '#B8C0CC',
            opacity: canAdvance() ? 1 : 0.5,
            cursor: canAdvance() ? 'pointer' : 'not-allowed',
          }}
        >
          {isLast ? 'Take me in' : 'Continue'}
        </button>
      </div>
    </div>
  );
}
