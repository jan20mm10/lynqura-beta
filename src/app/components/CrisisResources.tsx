import { ArrowLeft, Phone, MessageSquare, Globe, Heart, Home } from 'lucide-react';

interface CrisisResourcesProps {
  onBack: () => void;
  onHome?: () => void;
}

export function CrisisResources({ onBack, onHome }: CrisisResourcesProps) {
  const usResources = [
    {
      name: '988 Suicide & Crisis Lifeline',
      description: '24/7 support for people in crisis',
      phone: '988',
      sms: '988',
      icon: Phone,
      color: '#E74C3C',
    },
    {
      name: 'Crisis Text Line',
      description: 'Text-based crisis support',
      sms: '741741',
      smsBody: 'HOME',
      icon: MessageSquare,
      color: '#3498DB',
    },
    {
      name: 'SAMHSA National Helpline',
      description: 'Substance abuse & mental health',
      phone: '1-800-662-4357',
      icon: Phone,
      color: '#9B59B6',
    },
    {
      name: 'Trevor Project',
      description: 'LGBTQ+ youth crisis support',
      phone: '1-866-488-7386',
      sms: '678678',
      smsBody: 'START',
      icon: Heart,
      color: '#E67E22',
    },
    {
      name: 'Veterans Crisis Line',
      description: 'Support for veterans and their families',
      phone: '988',
      note: 'Press 1 after dialing',
      icon: Phone,
      color: '#16A085',
    },
  ];

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-[#B3915A]/20">
        <div className="flex items-center justify-between mb-4">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
          </button>
          {onHome && (
            <button onClick={onHome} className="p-2 -mr-2">
              <Home className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
        </div>
        <h1 className="text-3xl font-bold">Crisis Resources</h1>
        <p className="text-sm text-[#B8C0CC] mt-2">
          You're not alone. Help is available 24/7.
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6 space-y-6">
        {/* Immediate Danger Alert */}
        <div className="bg-gradient-to-br from-[#E74C3C]/10 to-[#C0392B]/10 border border-[#E74C3C]/30 rounded-2xl p-6">
          <h2 className="text-xl font-bold mb-2" style={{ color: '#E74C3C' }}>
            In Immediate Danger?
          </h2>
          <p className="text-sm text-[#F5F2EA] mb-4">
            If you or someone else is in immediate danger, call emergency services right now.
          </p>
          <a
            href="tel:911"
            className="w-full py-4 rounded-xl font-semibold flex items-center justify-center gap-2 transition-all"
            style={{ backgroundColor: '#E74C3C', color: '#FFFFFF' }}
          >
            <Phone className="w-5 h-5" />
            <span>Call 911 (Emergency)</span>
          </a>
        </div>

        {/* 24/7 Support Lines */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#B3915A' }}>
            24/7 Crisis Support (U.S. & Canada)
          </h3>
          <div className="space-y-3">
            {usResources.map((resource, i) => {
              const Icon = resource.icon;
              return (
                <div
                  key={i}
                  className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                      style={{ backgroundColor: `${resource.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: resource.color }} />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-[#F5F2EA] mb-1">
                        {resource.name}
                      </h4>
                      <p className="text-sm text-[#B8C0CC] mb-3">
                        {resource.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {resource.phone && (
                          <a
                            href={`tel:${resource.phone}`}
                            className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
                            style={{
                              backgroundColor: `${resource.color}20`,
                              color: resource.color,
                              border: `1px solid ${resource.color}40`,
                            }}
                          >
                            <Phone className="w-4 h-4" />
                            <span>Call {resource.phone}</span>
                          </a>
                        )}
                        {resource.sms && (
                          <a
                            href={`sms:${resource.sms}${resource.smsBody ? `&body=${resource.smsBody}` : ''}`}
                            className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
                            style={{
                              backgroundColor: `${resource.color}20`,
                              color: resource.color,
                              border: `1px solid ${resource.color}40`,
                            }}
                          >
                            <MessageSquare className="w-4 h-4" />
                            <span>Text {resource.smsBody || resource.sms}</span>
                          </a>
                        )}
                      </div>
                      {resource.note && (
                        <p className="text-xs text-[#B8C0CC] mt-2">
                          Note: {resource.note}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* International Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#B3915A' }}>
            International Resources
          </h3>
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4">
            <div className="flex items-start gap-4">
              <div
                className="w-12 h-12 rounded-full flex items-center justify-center flex-shrink-0"
                style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
              >
                <Globe className="w-6 h-6" style={{ color: '#3498DB' }} />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-[#F5F2EA] mb-1">
                  Find Helplines by Country
                </h4>
                <p className="text-sm text-[#B8C0CC] mb-3">
                  Crisis support lines available worldwide
                </p>
                <a
                  href="https://findahelpline.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 inline-flex transition-all"
                  style={{
                    backgroundColor: 'rgba(52, 152, 219, 0.2)',
                    color: '#3498DB',
                    border: '1px solid rgba(52, 152, 219, 0.4)',
                  }}
                >
                  <Globe className="w-4 h-4" />
                  <span>Visit findahelpline.com</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Resources */}
        <div>
          <h3 className="text-lg font-semibold mb-4" style={{ color: '#B3915A' }}>
            What to Expect
          </h3>
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-5 space-y-3">
            <p className="text-sm text-[#F5F2EA]">
              <strong>When you call or text:</strong>
            </p>
            <ul className="space-y-2 text-sm text-[#B8C0CC]">
              <li className="flex items-start gap-2">
                <span className="text-[#B3915A] mt-0.5">•</span>
                <span>You'll be connected with a trained crisis counselor</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B3915A] mt-0.5">•</span>
                <span>Everything you share is confidential</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B3915A] mt-0.5">•</span>
                <span>They'll listen without judgment and help you find support</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#B3915A] mt-0.5">•</span>
                <span>You don't have to be in crisis to reach out</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
