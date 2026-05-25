import { useState } from 'react';
import { AlertTriangle, Eye, Flag, Ban } from 'lucide-react';

interface FlaggedMessageProps {
  messageText: string;
  warningLevel: 'mild' | 'moderate' | 'severe';
  onReport: () => void;
  onBlock: () => void;
}

export function FlaggedMessage({ messageText, warningLevel, onReport, onBlock }: FlaggedMessageProps) {
  const [isRevealed, setIsRevealed] = useState(false);

  const getWarningContent = () => {
    switch (warningLevel) {
      case 'severe':
        return {
          title: 'Message hidden for your safety',
          description: 'This message contains content that may be harmful or distressing.',
          color: '#E74C3C',
          canReveal: false,
        };
      case 'moderate':
        return {
          title: 'Sensitive content warning',
          description: 'This message may contain upsetting or triggering content.',
          color: '#E67E22',
          canReveal: true,
        };
      case 'mild':
        return {
          title: 'Content warning',
          description: 'This message may contain sensitive content.',
          color: '#F39C12',
          canReveal: true,
        };
    }
  };

  const content = getWarningContent();

  if (warningLevel === 'severe' && !isRevealed) {
    // Completely hide severe content
    return (
      <div className="bg-[#0A0B16] border border-[#E74C3C]/30 rounded-2xl p-5">
        <div className="flex items-start gap-3">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0"
            style={{ backgroundColor: `${content.color}20` }}
          >
            <AlertTriangle className="w-5 h-5" style={{ color: content.color }} />
          </div>
          <div className="flex-1">
            <h4 className="font-semibold text-[#F5F2EA] mb-1">{content.title}</h4>
            <p className="text-sm text-[#B8C0CC] mb-4">{content.description}</p>
            <div className="flex gap-2">
              <button
                onClick={onReport}
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
                style={{
                  backgroundColor: `${content.color}20`,
                  color: content.color,
                  border: `1px solid ${content.color}40`,
                }}
              >
                <Flag className="w-4 h-4" />
                <span>Report</span>
              </button>
              <button
                onClick={onBlock}
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 transition-all"
                style={{
                  backgroundColor: 'rgba(231, 76, 60, 0.2)',
                  color: '#E74C3C',
                  border: '1px solid rgba(231, 76, 60, 0.4)',
                }}
              >
                <Ban className="w-4 h-4" />
                <span>Block User</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!isRevealed) {
    // Blur content with reveal option
    return (
      <div className="relative">
        {/* Blurred message */}
        <div className="blur-md select-none pointer-events-none bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl rounded-bl-md p-4">
          <p className="text-sm text-[#F5F2EA]">{messageText}</p>
        </div>

        {/* Warning overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#0C192C]/50 to-[#0C192C]/90 rounded-2xl flex items-center justify-center p-4">
          <div className="text-center space-y-4">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center mx-auto"
              style={{ backgroundColor: `${content.color}20` }}
            >
              <AlertTriangle className="w-6 h-6" style={{ color: content.color }} />
            </div>
            <div>
              <p className="font-semibold text-[#F5F2EA] mb-1">{content.title}</p>
              <p className="text-xs text-[#B8C0CC]">{content.description}</p>
            </div>
            <div className="flex flex-col gap-2">
              <button
                onClick={() => setIsRevealed(true)}
                className="px-4 py-2 rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-all"
                style={{
                  backgroundColor: '#B3915A',
                  color: '#0C192C',
                }}
              >
                <Eye className="w-4 h-4" />
                <span>Tap to view</span>
              </button>
              <div className="flex gap-2">
                <button
                  onClick={onReport}
                  className="flex-1 px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all bg-[#0A0B16] border border-[#B3915A]/20 text-[#B8C0CC]"
                >
                  <Flag className="w-3 h-3" />
                  <span>Report</span>
                </button>
                <button
                  onClick={onBlock}
                  className="flex-1 px-3 py-2 rounded-lg text-xs font-medium flex items-center justify-center gap-1 transition-all bg-[#0A0B16] border border-[#B3915A]/20 text-[#B8C0CC]"
                >
                  <Ban className="w-3 h-3" />
                  <span>Block</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // Revealed message
  return (
    <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl rounded-bl-md p-4">
      <p className="text-sm text-[#F5F2EA]">{messageText}</p>
    </div>
  );
}
