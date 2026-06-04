import { useState } from 'react';
import logoImage from "../../imports/ChatGPT_Image_Apr_22,_2026,_12_46_44_AM.png";
import { ChevronRight, ChevronLeft, ChevronDown, ChevronUp } from 'lucide-react';
import { WarmthPass } from './WarmthOverlay';

interface OnboardingProps {
  onComplete: () => void;
}

export function Onboarding({ onComplete }: OnboardingProps) {
  const [step, setStep] = useState(1);
  const [expandedPolicy, setExpandedPolicy] = useState<string | null>(null);
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    dob: '',
    address: '',
    nickname: '',
    topics: [] as string[],
    agreedToTerms: false,
    agreedToGuidelines: false,
    agreedToCrisis: false,
    agreedToPrivacy: false,
  });

  const topics = ['Stress & Burnout', 'Anxiety', 'Alcohol & Recovery', 'LGBTQ+', 'Grief', 'Relationships', 'Work/School', 'Sleep'];

  const toggleTopic = (topic: string) => {
    setFormData(prev => ({
      ...prev,
      topics: prev.topics.includes(topic)
        ? prev.topics.filter(t => t !== topic)
        : [...prev.topics, topic]
    }));
  };

  const canProceed = () => {
    if (step === 1) return formData.email.includes('@');
    if (step === 2) return formData.name && formData.dob && formData.address;
    if (step === 3) return true; // ID verification (simulated)
    if (step === 4) return formData.nickname;
    if (step === 5) return formData.topics.length > 0;
    if (step === 6) return formData.agreedToTerms && formData.agreedToGuidelines && formData.agreedToCrisis && formData.agreedToPrivacy;
    if (step === 7) return true; // Approved screen
    return false;
  };

  const handleNext = () => {
    if (step === 7) {
      onComplete();
    } else {
      setStep(step + 1);
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  return (
    <WarmthPass>
      <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header with Back Button */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        {step > 1 ? (
          <button onClick={handleBack} className="p-2 -ml-2">
            <ChevronLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
          </button>
        ) : (
          <div className="w-10"></div>
        )}
        <img 
          src={logoImage} 
          alt="LYNQURA" 
          className="h-8"
        />
        <div className="w-10"></div>
      </div>

      {/* Progress */}
      <div className="px-6 pb-6">
        <div className="flex gap-2">
          {[1, 2, 3, 4, 5, 6, 7].map((s) => (
            <div
              key={s}
              className={`h-1 flex-1 rounded-full transition-colors ${
                s <= step ? 'bg-[#B3915A]' : 'bg-[#0A0B16]'
              }`}
            ></div>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 px-6 overflow-y-auto scrollbar-hide">
        {step === 1 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Create your account</h2>
              <p className="text-[#B8C0CC]">We keep your identity private. Your profile can stay anonymous.</p>
            </div>
            <input
              type="email"
              placeholder="Email or phone"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
            />
          </div>
        )}

        {step === 2 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Welcome! Let's verify you're 18+</h2>
              <p className="text-[#B8C0CC] leading-relaxed">To keep this space safe for everyone, we verify that all members are 18 or older. This information stays private—only you'll see it.</p>
            </div>
            <div className="space-y-4">
              <input
                type="text"
                placeholder="Full legal name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
              />
              <input
                type="date"
                placeholder="Date of birth"
                value={formData.dob}
                onChange={(e) => setFormData({ ...formData, dob: e.target.value })}
                className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
              />
              <input
                type="text"
                placeholder="Address"
                value={formData.address}
                onChange={(e) => setFormData({ ...formData, address: e.target.value })}
                className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
              />
            </div>
          </div>
        )}

        {step === 3 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Confirm your identity</h2>
              <p className="text-[#B8C0CC]">Your profile can be anonymous, but we verify identity to protect the community.</p>
            </div>
            <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-8 text-center space-y-4">
              <div className="w-20 h-20 mx-auto bg-[#B3915A]/10 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#B3915A]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <p className="text-[#B8C0CC]">ID verification ready</p>
              <p className="text-sm text-[#B8C0CC]">Tap Continue to proceed</p>
            </div>
          </div>
        )}

        {step === 4 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">Choose how you show up</h2>
              <p className="text-[#B8C0CC]">Avoid sharing personal info (full name, address, workplace).</p>
            </div>
            <div className="space-y-4">
              <div className="flex justify-center">
                <div className="w-24 h-24 bg-[#B3915A]/10 rounded-full flex items-center justify-center">
                  <span className="text-4xl">👤</span>
                </div>
              </div>
              <input
                type="text"
                placeholder="Display name (nickname)"
                value={formData.nickname}
                onChange={(e) => setFormData({ ...formData, nickname: e.target.value })}
                className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
              />
              <textarea
                placeholder="Optional bio"
                rows={3}
                className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A] resize-none"
              />
            </div>
          </div>
        )}

        {step === 5 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">What support are you open to?</h2>
              <p className="text-[#B8C0CC]">Pick as many as you want. You can change this anytime.</p>
            </div>
            <div className="flex flex-wrap gap-3">
              {topics.map((topic) => (
                <button
                  key={topic}
                  onClick={() => toggleTopic(topic)}
                  className={`px-4 py-3 rounded-full text-sm font-medium transition-all ${
                    formData.topics.includes(topic)
                      ? 'bg-[#B3915A] text-[#0C192C]'
                      : 'bg-[#0A0B16] text-[#B8C0CC] border border-[#B3915A]/20'
                  }`}
                >
                  {topic}
                </button>
              ))}
            </div>
          </div>
        )}

        {step === 6 && (
          <div className="space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">A few important things</h2>
              <p className="text-[#B8C0CC] leading-relaxed">
                LYNQURA is built on trust. Here's what you need to know before joining our community.
              </p>
            </div>
            <div className="space-y-3">
              {[
                {
                  key: 'agreedToTerms',
                  label: 'I understand LYNQURA is peer support',
                  summary: [
                    "LYNQURA connects you with real people, not licensed therapists",
                    "We're not a substitute for professional care or emergency services",
                    "If you're in crisis, call 911 or text 988 for immediate help",
                  ],
                },
                {
                  key: 'agreedToGuidelines',
                  label: 'I agree to the Community Guidelines',
                  summary: [
                    "Be kind and respectful to everyone",
                    "Share from your experience, not as an expert",
                    "No harassment, hate speech, or harmful content",
                    "Respect boundaries when people set them",
                  ],
                },
                {
                  key: 'agreedToCrisis',
                  label: 'I agree to the Crisis & Safety Policy',
                  summary: [
                    "LYNQURA can't respond to emergencies in real time",
                    "If you're in danger, contact emergency services immediately",
                    "We may share information with authorities if there's imminent risk of serious harm",
                    "Crisis resources are available 24/7 (988, Crisis Text Line)",
                  ],
                },
                {
                  key: 'agreedToPrivacy',
                  label: 'I agree to the Privacy Policy & Terms',
                  summary: [
                    "Your public profile can be anonymous",
                    "We verify identity to keep the community safe, but your private info stays private",
                    "We don't sell your data, ever",
                    "You can delete your account and data anytime",
                  ],
                },
              ].map((item) => (
                <div key={item.key} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl overflow-hidden">
                  <label className="flex items-start gap-3 p-4 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={formData[item.key as keyof typeof formData] as boolean}
                      onChange={(e) => setFormData({ ...formData, [item.key]: e.target.checked })}
                      className="mt-1 w-5 h-5 rounded border-[#B3915A]/20 bg-[#0C192C] text-[#B3915A] focus:ring-[#B3915A] focus:ring-offset-0"
                    />
                    <div className="flex-1">
                      <span className="text-sm font-medium text-[#F5F2EA]">{item.label}</span>
                    </div>
                    <button
                      type="button"
                      onClick={(e) => {
                        e.preventDefault();
                        setExpandedPolicy(expandedPolicy === item.key ? null : item.key);
                      }}
                      className="p-1"
                    >
                      {expandedPolicy === item.key ? (
                        <ChevronUp className="w-5 h-5 text-[#B3915A]" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#B8C0CC]" />
                      )}
                    </button>
                  </label>
                  {expandedPolicy === item.key && (
                    <div className="px-4 pb-4 pt-2 border-t border-[#B3915A]/10">
                      <ul className="space-y-2">
                        {item.summary.map((point, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs text-[#B8C0CC]">
                            <span className="text-[#B3915A] mt-0.5">•</span>
                            <span>{point}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <p className="text-xs text-[#B8C0CC] text-center pt-2">
              By continuing, you agree to these policies. You can review them anytime in Settings.
            </p>
          </div>
        )}

        {step === 7 && (
          <div className="flex flex-col items-center justify-center h-full space-y-6 text-center px-6">
            {/* Human Connection Image */}
            <div className="relative w-full max-w-sm mb-4">
              <div className="rounded-3xl overflow-hidden shadow-2xl relative">
                <img
                  src="https://images.unsplash.com/photo-1772724316571-741dc8100717?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwyfHxkaXZlcnNlJTIwZnJpZW5kcyUyMGxhdWdoaW5nJTIwbHVuY2glMjBvdXRkb29yJTIwY29ubmVjdGlvbnxlbnwxfHx8fDE3NzY4NDAzOTZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Diverse friends enjoying a picnic together"
                  className="w-full h-56 object-cover"
                />
                {/* Subtle overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0C192C]/40 to-transparent"></div>
                {/* Gold accent bar */}
                <div className="absolute bottom-4 left-4 w-20 h-1.5 bg-[#B3915A] rounded-full"></div>
              </div>
            </div>

            <div className="w-24 h-24 bg-gradient-to-br from-[#B3915A] to-[#C8A569] rounded-full flex items-center justify-center">
              <svg className="w-12 h-12 text-[#0C192C]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <div className="space-y-2">
              <h2 className="text-3xl font-bold">You're in.</h2>
              <p className="text-[#B8C0CC]">You're not alone here.</p>
            </div>
            <div className="pt-4">
              <p className="text-sm" style={{ color: '#B3915A' }}>Healing is Human</p>
            </div>
          </div>
        )}
      </div>

      {/* Button */}
      <div className="p-6">
        <button
          onClick={handleNext}
          disabled={!canProceed()}
          className="w-full py-4 rounded-2xl font-semibold transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          style={{
            backgroundColor: canProceed() ? '#B3915A' : '#0A0B16',
            color: canProceed() ? '#0C192C' : '#B8C0CC',
          }}
        >
          {step === 6 ? 'I agree & join LYNQURA' : step === 7 ? 'Go to Home' : 'Continue'}
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
    </WarmthPass>
  );
}

