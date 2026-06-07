import { useState } from 'react';
import { ArrowRight, Check, Phone } from 'lucide-react';

type Question = {
  id: string;
  title: string;
  subtitle?: string;
  type: 'single' | 'multi';
  options: string[];
};

const QUESTIONS: Question[] = [
  {
    id: 'reason',
    title: 'What brings you to Lynqura today?',
    type: 'single',
    options: [
      'I\'m looking for support',
      'I\'m here to give support',
      'Both — I want to give and receive',
      'Just looking around for now',
    ],
  },
  {
    id: 'feeling',
    title: 'How are you feeling right now?',
    type: 'single',
    options: [
      'I\'m doing okay',
      'A little stressed or down',
      'Really struggling right now',
      'I\'d rather not say',
    ],
  },
  {
    id: 'mind',
    title: "What's been on your mind lately?",
    subtitle: 'Pick as many as you like.',
    type: 'multi',
    options: [
      'Stress or burnout',
      'Anxiety or worry',
      'Loneliness',
      'Relationships or family',
      'Grief or loss',
      'Self-worth',
      'I just need to vent',
      'Something else',
    ],
  },
  {
    id: 'connect',
    title: 'How do you like to connect?',
    type: 'single',
    options: [
      'I mostly want someone to listen',
      'I want to listen and support others',
      'A bit of both',
      'Not sure yet',
    ],
  },
  {
    id: 'experience',
    title: 'Is this kind of support new to you?',
    type: 'single',
    options: [
      "It's my first time reaching out",
      "I've done something like this before",
      "I'm comfortable with it",
    ],
  },
  {
    id: 'safe',
    title: 'What would help this feel like a safe space?',
    subtitle: 'Optional — pick any that fit.',
    type: 'multi',
    options: [
      'Being heard without judgment',
      'Privacy and anonymity',
      'No pressure, go at my own pace',
      "People who've been through similar things",
    ],
  },
];

const STRUGGLING = 'Really struggling right now';

export function Onboarding({ onComplete }: { onComplete: () => void }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});

  const q = QUESTIONS[step];
  const isLast = step === QUESTIONS.length - 1;
  const current = answers[q.id];

  const selectSingle = (option: string) => {
    setAnswers((prev) => ({ ...prev, [q.id]: option }));
  };

  const toggleMulti = (option: string) => {
    setAnswers((prev) => {
      const existing = Array.isArray(prev[q.id]) ? (prev[q.id] as string[]) : [];
      const nextVal = existing.includes(option)
        ? existing.filter((o) => o !== option)
        : [...existing, option];
      return { ...prev, [q.id]: nextVal };
    });
  };

  const isSelected = (option: string) => {
    if (q.type === 'multi') {
      return Array.isArray(current) && current.includes(option);
    }
    return current === option;
  };

  const next = () => {
    if (isLast) {
      onComplete();
    } else {
      setStep((s) => s + 1);
    }
  };

  const showCrisis = q.id === 'feeling' && current === STRUGGLING;

  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-6">
      <div className="flex items-center justify-between mb-8">
        <div className="flex gap-1.5">
          {QUESTIONS.map((_, i) => (
            <div
              key={i}
              className={`h-1.5 rounded-full transition-all ${
                i === step ? 'w-6 bg-[#B3915A]' : 'w-1.5 bg-[#F5F2EA]/25'
              }`}
            />
          ))}
        </div>
        <button
          onClick={onComplete}
          className="text-xs text-[#F5F2EA]/60 hover:text-[#F5F2EA]"
        >
          Skip the check-in
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-1">{q.title}</h2>
        <p className="text-sm text-[#F5F2EA]/60 mb-5">{q.subtitle ?? ''}</p>

        <div className="flex flex-col gap-3">
          {q.options.map((option) => {
            const selected = isSelected(option);
            return (
              <button
                key={option}
                onClick={() =>
                  q.type === 'multi' ? toggleMulti(option) : selectSingle(option)
                }
                className={`flex items-center justify-between text-left rounded-xl border px-4 py-3 transition-all ${
                  selected
                    ? 'border-[#B3915A] bg-[#B3915A]/15'
                    : 'border-[#F5F2EA]/15 bg-[#0A0B16]/40 hover:border-[#F5F2EA]/35'
                }`}
              >
                <span className="text-sm">{option}</span>
                {selected && <Check size={18} className="text-[#B3915A] shrink-0" />}
              </button>
            );
          })}
        </div>

        {showCrisis && (
          <div className="mt-5 rounded-xl border border-[#B3915A]/50 bg-[#0A0B16] p-4">
            <div className="flex items-start gap-3">
              <Phone size={18} className="text-[#B3915A] shrink-0 mt-0.5" />
              <p className="text-sm leading-relaxed">
                It sounds like things are heavy right now. Peers here are ready to listen — and if you need immediate help, you can call or text <a href="tel:988" className="font-semibold underline underline-offset-2">988</a> anytime. You're not alone anymore.
              </p>
            </div>
          </div>
        )}
      </div>

      <div className="pt-6 flex flex-col gap-3">
        <button
          onClick={next}
          className="flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-4 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity"
        >
          {isLast ? 'Enter Lynqura' : 'Continue'}
          <ArrowRight size={18} />
        </button>
        <button
          onClick={next}
          className="text-sm text-[#F5F2EA]/60 hover:text-[#F5F2EA]"
        >
          {isLast ? 'Skip and enter' : 'Skip for now'}
        </button>
      </div>
    </div>
  );
}
