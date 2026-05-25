import { X, Heart, Wind, Music, BookOpen, MessageCircle } from 'lucide-react';

interface SupportCardsSheetProps {
  onClose: () => void;
  supportType?: string;
  noLinks?: boolean;
}

export function SupportCardsSheet({ onClose, supportType = 'open', noLinks = false }: SupportCardsSheetProps) {
  const comfortCards = [
    { icon: Heart, text: "I'm here with you.", color: '#E74C3C' },
    { icon: Heart, text: "You don't have to carry this alone.", color: '#E74C3C' },
    { icon: Heart, text: "I'm listening.", color: '#E74C3C' },
  ];

  const calmResets = [
    { icon: Wind, text: '60-second breathing', color: '#3498DB' },
    { icon: Wind, text: '2-minute grounding', color: '#3498DB' },
    { icon: Wind, text: 'Quick body scan', color: '#3498DB' },
  ];

  const songs = [
    { icon: Music, text: 'A song that helps me', color: '#9B59B6' },
  ];

  const resources = [
    { icon: BookOpen, text: 'Telehealth options', color: '#F39C12', affiliate: true },
    { icon: BookOpen, text: 'Journaling tools', color: '#F39C12', affiliate: true },
    { icon: BookOpen, text: 'Books that help', color: '#F39C12', affiliate: true },
  ];

  const invite = [
    { icon: MessageCircle, text: 'Want to talk?', color: '#16A085' },
  ];

  return (
    <div className="absolute inset-0 bg-black/80 flex items-end z-50">
      <div className="w-full bg-[#0C192C] rounded-t-3xl p-6 max-h-[80vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#F5F2EA' }}>Send Support</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
          </button>
        </div>

        {/* Comfort */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Comfort</h3>
          <div className="space-y-2">
            {comfortCards.map((card, i) => {
              const Icon = card.icon;
              return (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all text-left"
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                  <span style={{ color: '#F5F2EA' }}>{card.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Calm Resets */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Calm Resets</h3>
          <div className="space-y-2">
            {calmResets.map((card, i) => {
              const Icon = card.icon;
              return (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all text-left"
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                  <span style={{ color: '#F5F2EA' }}>{card.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Songs */}
        {!noLinks && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Song (Curated)</h3>
            <div className="space-y-2">
              {songs.map((card, i) => {
                const Icon = card.icon;
                return (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all text-left"
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                    <span style={{ color: '#F5F2EA' }}>{card.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Resources */}
        {!noLinks && (
          <div className="mb-6">
            <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Resources (Curated)</h3>
            <p className="text-xs text-[#B8C0CC] mb-3">
              Some links are affiliate links. LYNQURA may earn a commission at no extra cost to you.
            </p>
            <div className="space-y-2">
              {resources.map((card, i) => {
                const Icon = card.icon;
                return (
                  <button
                    key={i}
                    className="w-full flex items-center gap-3 p-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all text-left"
                  >
                    <Icon className="w-5 h-5" style={{ color: card.color }} />
                    <span style={{ color: '#F5F2EA' }}>{card.text}</span>
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {/* Invite */}
        <div className="mb-4">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Invite</h3>
          <div className="space-y-2">
            {invite.map((card, i) => {
              const Icon = card.icon;
              return (
                <button
                  key={i}
                  className="w-full flex items-center gap-3 p-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all text-left"
                >
                  <Icon className="w-5 h-5" style={{ color: card.color }} />
                  <span style={{ color: '#F5F2EA' }}>{card.text}</span>
                </button>
              );
            })}
          </div>
        </div>

        {noLinks && (
          <p className="text-xs text-[#B8C0CC] text-center">
            Only curated resources can be shared here.
          </p>
        )}
      </div>
    </div>
  );
}
