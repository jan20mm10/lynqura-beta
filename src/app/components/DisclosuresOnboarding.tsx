import { useState } from 'react';
import { ChevronDown, ChevronUp, CheckSquare, Square } from 'lucide-react';
import logoImage from '../../imports/ChatGPT_Image_Apr_22,_2026,_12_46_44_AM.png';

interface DisclosuresProps {
  onComplete: () => void;
}

const DISCLOSURES = [
  {
    id: 'peer-support',
    title: 'LYNQURA is peer support, not therapy.',
    body: 'LYNQURA connects you with real people who want to listen and support you. Our members are not licensed therapists or medical professionals. Nothing shared on this app should be treated as medical advice. If you are in crisis, please contact the 988 Suicide and Crisis Lifeline by calling or texting 988, or text HOME to 741741 for the Crisis Text Line.',
  },
  {
    id: 'anonymity',
    title: 'Your anonymity is protected.',
    body: 'Your real name, email address, and phone number are never visible to other members. You participate under an anonymous nickname only. LYNQURA verifies identity privately to keep the community safe, but your identity is never shared without your explicit consent.',
  },
  {
    id: 'safety-data',
    title: 'You are in control of your safety data.',
    body: 'The Pulse check-in system monitors how you are feeling and can alert your Trusted Supporters if your score is low. You choose who your Trusted Supporters are, what information is shared, and when alerts are sent. You can pause or turn off Pulse at any time in your settings. No data is shared without your knowledge.',
  },
  {
    id: 'guidelines',
    title: 'Community guidelines are strictly enforced.',
    body: 'Harassment, hate speech, medical advice-giving, sharing of crisis content without consent warnings, and any attempt to exploit vulnerable members will result in immediate removal. LYNQURA uses both AI moderation and human review to keep this space safe. By joining you agree to uphold these standards.',
  },
];

export function Disclosures({ onComplete }: DisclosuresProps) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const [checked, setChecked] = useState<Record<string, boolean>>({});
  const [hasOpened, setHasOpened] = useState<Record<string, boolean>>({});

  const allChecked = DISCLOSURES.every((d) => checked[d.id]);

  const toggleExpand = (id: string) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
    setHasOpened((prev) => ({ ...prev, [id]: true }));
  };

  const toggleCheck = (id: string) => {
    if (!hasOpened[id]) return;
    setChecked((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pt-12 pb-6 space-y-6">
        {/* Logo */}
        <div className="flex justify-center mb-2">
          <img src={logoImage} alt="LYNQURA" className="h-8" />
        </div>

        {/* Heading */}
        <div className="space-y-2">
          <h1 className="text-3xl font-bold text-[#F5F2EA]">A few important things</h1>
          <p className="text-sm text-[#B8C0CC]">
            LYNQURA is built on trust. Here's what you need to know before joining the community.
          </p>
        </div>

        {/* Disclosure Cards */}
        <div className="space-y-3">
          {DISCLOSURES.map((item) => {
            const isExpanded = expanded[item.id];
            const isChecked = checked[item.id];
            const canCheck = hasOpened[item.id];

            return (
              <div
                key={item.id}
                className="bg-[#0A0B16] rounded-2xl border overflow-hidden transition-all"
                style={{ borderColor: isChecked ? '#B3915A' : 'rgba(179,145,90,0.2)' }}
              >
                {/* Card Header Row */}
                <div className="flex items-start gap-3 p-4">
                  {/* Checkbox */}
                  <button
                    onClick={() => toggleCheck(item.id)}
                    className="mt-0.5 shrink-0 transition-opacity"
                    style={{ opacity: canCheck ? 1 : 0.3, cursor: canCheck ? 'pointer' : 'not-allowed' }}
                    aria-label={isChecked ? 'Uncheck' : 'Check'}
                  >
                    {isChecked
                      ? <CheckSquare className="w-5 h-5" style={{ color: '#B3915A' }} />
                      : <Square className="w-5 h-5 text-[#B8C0CC]" />
                    }
                  </button>

                  {/* Title + Toggle */}
                  <button
                    onClick={() => toggleExpand(item.id)}
                    className="flex-1 flex items-start justify-between gap-2 text-left"
                  >
                    <span className="text-sm font-semibold leading-snug text-[#F5F2EA]">{item.title}</span>
                    {isExpanded
                      ? <ChevronUp className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#B3915A' }} />
                      : <ChevronDown className="w-4 h-4 shrink-0 mt-0.5" style={{ color: '#B3915A' }} />
                    }
                  </button>
                </div>

                {/* Expanded Body */}
                {isExpanded && (
                  <div className="px-4 pb-4">
                    <div className="border-t border-[#B3915A]/10 pt-3">
                      <p className="text-xs text-[#B8C0CC] leading-relaxed">{item.body}</p>
                    </div>
                  </div>
                )}

                {/* Hint when not yet opened */}
                {!canCheck && !isExpanded && (
                  <p className="px-4 pb-3 text-xs" style={{ color: 'rgba(179,145,90,0.6)' }}>
                    Tap the title to read before agreeing
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Progress hint */}
        <p className="text-xs text-center text-[#B8C0CC]">
          {DISCLOSURES.filter((d) => checked[d.id]).length} of {DISCLOSURES.length} agreements confirmed
        </p>
      </div>

      {/* Continue Button */}
      <div className="px-6 pb-10 pt-4 border-t border-[#B3915A]/10">
        <button
          onClick={onComplete}
          disabled={!allChecked}
          className="w-full py-4 rounded-2xl font-semibold transition-all"
          style={{
            backgroundColor: allChecked ? '#B3915A' : '#0A0B16',
            color: allChecked ? '#0C192C' : '#B8C0CC',
            opacity: allChecked ? 1 : 0.5,
            cursor: allChecked ? 'pointer' : 'not-allowed',
          }}
        >
          I agree — take me in
        </button>
      </div>
    </div>
  );
}
