import { X, AlertTriangle, BookOpen, Phone } from 'lucide-react';

interface MessageWarningModalProps {
  onClose: () => void;
  onRevise: () => void;
  onSendAnyway: () => void;
  onViewResources: () => void;
  warningType: 'crisis' | 'harassment' | 'personal-info' | 'boundary-violation';
  messageText: string;
}

export function MessageWarningModal({
  onClose,
  onRevise,
  onSendAnyway,
  onViewResources,
  warningType,
}: MessageWarningModalProps) {
  const getWarningContent = () => {
    switch (warningType) {
      case 'crisis':
        return {
          title: "We're concerned about you",
          description: "Your message mentions thoughts of self-harm. You matter, and we want to make sure you get the right support.",
          icon: '🫂',
          color: '#E74C3C',
          options: [
            { label: '📝 Save as private journal entry', action: 'journal' },
            { label: '📞 View crisis resources (988, Crisis Text Line)', action: 'resources' },
            { label: '✏️ Revise message', action: 'revise' },
          ],
        };
      case 'harassment':
        return {
          title: 'This message may be hurtful',
          description: 'Your message contains language that might violate our Community Guidelines. LYNQURA is a supportive space for everyone.',
          icon: '⚠️',
          color: '#E67E22',
          options: [
            { label: '✏️ Revise message', action: 'revise' },
            { label: '📖 View Community Guidelines', action: 'guidelines' },
          ],
        };
      case 'personal-info':
        return {
          title: 'Protect your privacy',
          description: 'Your message appears to contain personal information (phone number, address, or full name). For your safety, we recommend keeping this private.',
          icon: '🔒',
          color: '#3498DB',
          options: [
            { label: '✏️ Revise message', action: 'revise' },
            { label: '📖 Learn about privacy on LYNQURA', action: 'privacy' },
          ],
        };
      case 'boundary-violation':
        return {
          title: 'This post has boundaries set',
          description: "The person who posted this set boundaries (like 'No advice' or 'No links'). Your message may not respect those boundaries.",
          icon: '🛡️',
          color: '#9B59B6',
          options: [
            { label: '✏️ Revise message', action: 'revise' },
            { label: '📖 Learn about respecting boundaries', action: 'boundaries' },
          ],
        };
    }
  };

  const content = getWarningContent();

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="w-full max-w-md bg-[#0C192C] rounded-3xl p-6 space-y-6">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-12 h-12 rounded-full flex items-center justify-center text-2xl"
              style={{ backgroundColor: `${content.color}20` }}
            >
              {content.icon}
            </div>
            <div>
              <h2 className="text-xl font-bold text-[#F5F2EA]">{content.title}</h2>
            </div>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
          </button>
        </div>

        {/* Description */}
        <p className="text-[#B8C0CC] leading-relaxed">{content.description}</p>

        {/* Options */}
        <div className="space-y-3">
          {content.options.map((option, i) => {
            const handleClick = () => {
              if (option.action === 'revise') onRevise();
              else if (option.action === 'resources') onViewResources();
              else if (option.action === 'journal') {
                // Handle save to journal
                console.log('Save to journal');
                onClose();
              } else {
                // Handle other info views
                console.log('View:', option.action);
                onClose();
              }
            };

            return (
              <button
                key={i}
                onClick={handleClick}
                className="w-full py-4 px-5 rounded-2xl font-medium bg-[#0A0B16] border border-[#B3915A]/20 text-left hover:border-[#B3915A] transition-all text-[#F5F2EA]"
              >
                {option.label}
              </button>
            );
          })}
        </div>

        {/* Send anyway - de-emphasized */}
        <button
          onClick={onSendAnyway}
          className="w-full py-3 text-sm text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
        >
          Send message anyway
        </button>

        {/* Crisis-specific resources */}
        {warningType === 'crisis' && (
          <div className="pt-4 border-t border-[#B3915A]/20 space-y-2">
            <p className="text-sm font-medium text-[#F5F2EA] mb-3">
              Need immediate help?
            </p>
            <a
              href="tel:988"
              className="w-full py-3 rounded-xl bg-[#0A0B16] border border-[#E74C3C]/30 flex items-center justify-center gap-2 text-[#E74C3C] hover:border-[#E74C3C] transition-all"
            >
              <Phone className="w-4 h-4" />
              <span className="text-sm font-medium">Call or text 988 (24/7)</span>
            </a>
            <p className="text-xs text-[#B8C0CC] text-center leading-relaxed">
              You're worth it, and help is available right now
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

// Detection function to check message content
export function detectMessageIssues(message: string, postBoundaries?: {
  noAdvice: boolean;
  noDMs: boolean;
  noLinks: boolean;
  keepGentle: boolean;
}): 'crisis' | 'harassment' | 'personal-info' | 'boundary-violation' | null {
  const lowerMessage = message.toLowerCase();

  // Crisis language detection
  const crisisKeywords = [
    'kill myself',
    'suicide',
    'end my life',
    'want to die',
    'better off dead',
    'hurt myself',
    'self harm',
    'cut myself',
    "don't want to live",
    'ending it all',
  ];
  if (crisisKeywords.some(keyword => lowerMessage.includes(keyword))) {
    return 'crisis';
  }

  // Harassment detection
  const harassmentKeywords = [
    'you\'re stupid',
    'you\'re dumb',
    'kill yourself',
    'kys',
    'worthless',
    'pathetic',
    'loser',
    'idiot',
    'shut up',
  ];
  if (harassmentKeywords.some(keyword => lowerMessage.includes(keyword))) {
    return 'harassment';
  }

  // Personal info detection (simplified - would be more sophisticated in production)
  const phonePattern = /\b\d{3}[-.]?\d{3}[-.]?\d{4}\b/;
  const emailPattern = /\b[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}\b/;
  const addressPattern = /\b\d+\s+[\w\s]+\b(street|st|avenue|ave|road|rd|drive|dr|lane|ln|boulevard|blvd)\b/i;

  if (phonePattern.test(message) || emailPattern.test(message) || addressPattern.test(message)) {
    return 'personal-info';
  }

  // Boundary violation detection
  if (postBoundaries) {
    if (postBoundaries.noAdvice && (
      lowerMessage.includes('you should') ||
      lowerMessage.includes('you need to') ||
      lowerMessage.includes('try this') ||
      lowerMessage.includes('my advice')
    )) {
      return 'boundary-violation';
    }

    if (postBoundaries.noLinks && (
      message.includes('http://') ||
      message.includes('https://') ||
      message.includes('www.')
    )) {
      return 'boundary-violation';
    }
  }

  return null;
}
