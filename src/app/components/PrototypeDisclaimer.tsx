import { AlertCircle, Phone, X } from 'lucide-react';

export function PrototypeDisclaimer({ onDismiss }: { onDismiss: () => void }) {
  return (
    <div className="absolute top-0 left-0 right-0 z-50 bg-[#0A0B16] text-[#F5F2EA] px-4 py-2.5 text-sm border-b border-[#B3915A]/40">
      <div className="max-w-5xl mx-auto flex items-center justify-center gap-2 text-center relative pr-8">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-2">
          <span className="flex items-center gap-2">
            <AlertCircle size={16} className="text-[#B3915A] shrink-0" />
            This is not a real app — it's a prototype for demonstration only.
          </span>
          <span className="flex items-center gap-2">
            <Phone size={16} className="text-[#B3915A] shrink-0" />
            <span>
              If you need real help, call or text <a href="tel:988" className="font-semibold underline underline-offset-2 hover:text-[#B3915A]">988</a> (Suicide and Crisis Lifeline).
            </span>
          </span>
        </div>
        <button
          onClick={onDismiss}
          aria-label="Dismiss"
          className="absolute right-0 top-1/2 -translate-y-1/2 text-[#F5F2EA]/60 hover:text-[#F5F2EA]"
        >
          <X size={18} />
        </button>
      </div>
    </div>
  );
}
