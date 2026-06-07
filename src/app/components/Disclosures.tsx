import { useState } from 'react';
import { ShieldCheck, ArrowRight } from 'lucide-react';

export function Disclosures({ onComplete }: { onComplete: () => void }) {
  const [agreed, setAgreed] = useState(false);

  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-8">
      <div className="flex items-center gap-3 mb-5">
        <div className="w-11 h-11 rounded-full bg-[#B3915A]/15 border border-[#B3915A]/40 flex items-center justify-center shrink-0">
          <ShieldCheck size={22} className="text-[#B3915A]" />
        </div>
        <h1 className="text-xl font-semibold">Before we begin</h1>
      </div>
      <div className="flex-1 overflow-y-auto text-sm leading-relaxed text-[#F5F2EA]/85 flex flex-col gap-4">
        <p>
          Lynqura is a peer support community — a place to be heard and to support others. It is not a substitute for professional mental health care, diagnosis, or treatment.
        </p>
        <div className="rounded-xl border border-[#B3915A]/40 bg-[#0A0B16] p-4">
          <p className="font-medium text-[#F5F2EA] mb-1">If you're in crisis</p>
          <p>Call or text <a href="tel:988" className="font-semibold underline underline-offset-2">988</a> (Suicide and Crisis Lifeline), or text HOME to <a href="sms:741741" className="font-semibold underline underline-offset-2">741741</a> (Crisis Text Line), anytime.</p>
        </div>
        <div>
          <p className="font-medium text-[#F5F2EA] mb-2">Community guidelines</p>
          <ul className="list-disc pl-5 flex flex-col gap-1">
            <li>Be kind. No harassment, hate, or harm.</li>
            <li>No medical or clinical advice.</li>
            <li>Your privacy and anonymity are protected.</li>
            <li>Zero tolerance for content that endangers anyone.</li>
          </ul>
        </div>
      </div>
      <label className="flex items-start gap-3 mt-5 cursor-pointer">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="mt-1 w-4 h-4 accent-[#B3915A]"
        />
        <span className="text-sm text-[#F5F2EA]/85">I understand and agree to the community guidelines.</span>
      </label>
      <button
        onClick={onComplete}
        disabled={!agreed}
        className="mt-5 flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-4 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity disabled:opacity-30 disabled:cursor-not-allowed"
      >
        I Agree, Continue
        <ArrowRight size={18} />
      </button>
    </div>
  );
}
