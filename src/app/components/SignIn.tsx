import { useState } from 'react';
import { ArrowRight } from 'lucide-react';

export function SignIn({ onComplete }: { onComplete: () => void }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="flex flex-col h-full w-full bg-[#0C192C] text-[#F5F2EA] px-6 py-10 justify-center">
      <div className="mb-8 text-center">
        <h1 className="text-3xl font-semibold tracking-wide mb-2">Lynqura</h1>
        <p className="text-sm text-[#F5F2EA]/70">You're not alone anymore.</p>
      </div>
      <div className="flex flex-col gap-4">
        <div>
          <label className="block text-xs text-[#F5F2EA]/60 mb-1">Email</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-xl bg-[#0A0B16] border border-[#F5F2EA]/15 px-4 py-3 text-sm outline-none focus:border-[#B3915A]"
          />
        </div>
        <div>
          <label className="block text-xs text-[#F5F2EA]/60 mb-1">Password</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="••••••••"
            className="w-full rounded-xl bg-[#0A0B16] border border-[#F5F2EA]/15 px-4 py-3 text-sm outline-none focus:border-[#B3915A]"
          />
        </div>
        <button
          onClick={onComplete}
          className="mt-2 flex items-center justify-center gap-2 rounded-xl bg-[#B3915A] px-4 py-3 font-semibold text-[#0A0B16] hover:opacity-90 transition-opacity"
        >
          Sign In
          <ArrowRight size={18} />
        </button>
        <button onClick={onComplete} className="text-sm text-[#F5F2EA]/70 hover:text-[#F5F2EA]">
          Create an account
        </button>
      </div>
    </div>
  );
}
