import { useState } from 'react';
import { ShieldCheck, ChevronDown, Phone } from 'lucide-react';

interface DisclosuresProps {
  onComplete: () => void;
}

const ITEMS = [
  {
    id: 'peer',
    title: 'A peer support community — not professional care',
    body: 'Lynqura connects you with peers for support and connection. It is not therapy, counseling, or medical treatment, and the people here are not licensed professionals. For diagnosis or treatment, please reach out to a qualified provider.',
  },
  {
    id: 'privacy',
    title: 'Your privacy is protected',
    body: 'What you share stays within the community. We never sell your data. You choose what to share, and you can stay anonymous.',
  },
  {
    id: 'guidelines',
    title: 'Community guidelines',
    body: 'Be kind. No harassment, hate, or harm. No medical or clinical advice. There is zero tolerance for any content that endangers another person.',
  },
  {
    id: 'limits',
    title: 'The limits of peer support',
    body: 'Peers offer lived experience and empathy — not professional advice. In an emergency, call 911 or use the crisis lines above. Lynqura cannot provide emergency intervention.',
  },
  {
    id: 'prototype',
    title: 'This is an early prototype',
    body: 'Lynqura is currently a demo for testing and feedback. Some features may be incomplete, and it is not yet a live, staffed support service.',
  },
];

export function Disclosures({ onComplete }: DisclosuresProps) {
  const [openId, setOpenId] = useState<string | null>(null);
  const [agreed, setAgreed] = useState(false);

  const toggle = (id: string) => setOpenId((prev) => (prev === id ? null : id));

  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-8">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-11 h-11 rounded-full bg-[#B3915A]/15 border border-[#B3915A]/40 flex items-center justify-center shrink-0">
          <ShieldCheck size={22} className="text-[#B3915A]" />
        </div>
        <h1 className="text-xl font-semibold">Before you enter</h1>
      </div>
      <p className="text-sm text-[#F5F2EA]/70 mb-5">Please review these. Tap each one to read more.</p>

      <div className="flex-1 overflow-y-auto flex flex-col gap-3">
        <div className="rounded-xl border border-[#B3915A]/50 bg-[#0A0B16] p-4">
          <div className="flex items-center gap-2 mb-1">
            <Phone size={16} className="text-[#B3915A] shrink-0" />
            <p className="font-medium text-[#F5F2EA]">If you're in crisis</p>
          </div>
          <p className="text-sm text-[#F5F2EA]/85 leading-relaxed">
            Call or text <a href="tel:988" className="font-semibold underline underline-offset-2">988</a> (Suicide and Crisis Lifeline), or text HOME to <a href="sms:741741" className="font-semibold underline underline-offset-2">741741</a> (Crisis Text Line), anytime. In an emergency, call 911.
          </p>
        </div>

        {ITEMS.map((item) => {
          const open = openId === item.id;
          return (
            <div key={item.id} className="rounded-xl border border-[#F5F2EA]/15 bg-[#0A0B16]/40 overflow-hidden">
              <button
                onClick={() => toggle(item.id)}
                className="w-full flex items-center justify-between gap-3 text-left px-4 py-3"
              >
                <span className="text-sm font-medium">{item.title}</span>
                <ChevronDown
                  size={18}
                  className={`text-[#B3915A] shrink-0 transition-transform ${open ? 'rotate-180' : ''}`}
                />
              </button>
              {open && (
                <p className="px-4 pb-4 text-sm text-[#F5F2EA]/80 leading-relaxed">{item.body}</p>
              )}
            </div>
          );
        })}
      </div>

      <label className="flex items-start gap-3 mt-5 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#B3915A]"
        />
        <span className="text-sm text-[#F5F2EA]/85">I've read and understand the above.</span>
      </label>

      <button
        onClick={onComplete}
        disabled={!agreed}
        className="mt-4 flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-4 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        I Agree, Continue
      </button>
    </div>
  );
}
