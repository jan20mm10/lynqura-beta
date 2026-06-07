import { AlertCircle, Phone } from 'lucide-react';

export function PrototypeBanner() {
  return (
    <div
      role="alert"
      className="w-full bg-[#0A0B16] text-[#F5F2EA] px-4 py-2.5 text-sm border-b border-[#B3915A]/40"
    >
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-center gap-2 text-center">
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
    </div>
  );
}
