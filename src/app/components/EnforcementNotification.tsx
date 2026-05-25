import { useState } from 'react';
import { X, AlertTriangle, Clock, Ban, FileText } from 'lucide-react';

interface EnforcementNotificationProps {
  onClose: () => void;
  type: 'warning' | 'restriction' | 'suspension';
  reason: string;
  duration?: string; // e.g., "24 hours", "7 days"
  violationDetails?: string;
}

export function EnforcementNotification({
  onClose,
  type,
  reason,
  duration,
  violationDetails,
}: EnforcementNotificationProps) {
  const [showAppeal, setShowAppeal] = useState(false);
  const [appealText, setAppealText] = useState('');
  const [appealSubmitted, setAppealSubmitted] = useState(false);

  const getContent = () => {
    switch (type) {
      case 'warning':
        return {
          title: 'Heads up',
          icon: AlertTriangle,
          iconColor: '#F39C12',
          description: `We removed your ${violationDetails || 'content'} because it ${reason}.`,
          message: "This is a reminder, not a penalty. We're all here to support each other, and that means keeping the space safe.",
          actions: ['View Community Guidelines', 'Got it'],
        };
      case 'restriction':
        return {
          title: 'Your account is temporarily restricted',
          icon: Clock,
          iconColor: '#E67E22',
          description: `We've noticed multiple Community Guideline violations. Your account is paused for ${duration || 'a period of time'}.`,
          message: null,
          restrictions: [
            "You can't post, comment, or message",
            'You can still access crisis resources and your journal',
            'You can appeal this decision',
          ],
          actions: ['Appeal', 'View Your Violations', 'OK'],
        };
      case 'suspension':
        return {
          title: 'Your account has been suspended',
          icon: Ban,
          iconColor: '#E74C3C',
          description: 'After review, we've determined your account violated our Terms of Service in a way that put others at risk.',
          message: 'You can appeal this decision within 14 days.',
          actions: ['Submit Appeal', 'Contact Support'],
        };
    }
  };

  const content = getContent();
  const Icon = content.icon;

  if (appealSubmitted) {
    return (
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
        <div className="w-full max-w-md bg-[#0C192C] rounded-3xl p-6 space-y-6">
          <div className="flex justify-center">
            <div
              className="w-20 h-20 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(46, 204, 113, 0.2)' }}
            >
              <FileText className="w-10 h-10" style={{ color: '#2ECC71' }} />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h2 className="text-2xl font-bold text-[#F5F2EA]">Appeal submitted</h2>
            <p className="text-[#B8C0CC]">
              Our safety team will review your appeal within 5 business days. You'll be notified at your registered email address.
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-full py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
          >
            OK
          </button>
        </div>
      </div>
    );
  }

  if (showAppeal) {
    return (
      <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
        <div className="w-full max-w-md bg-[#0C192C] rounded-3xl p-6 space-y-6">
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-bold text-[#F5F2EA]">Appeal your {type}</h2>
            <button onClick={() => setShowAppeal(false)} className="p-2">
              <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
            </button>
          </div>

          <p className="text-[#B8C0CC]">
            Tell us why you believe this decision should be reversed.
          </p>

          <textarea
            value={appealText}
            onChange={(e) => setAppealText(e.target.value)}
            placeholder="Explain your appeal..."
            rows={6}
            maxLength={1000}
            className="w-full px-4 py-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A] resize-none"
          />
          <p className="text-xs text-[#B8C0CC] text-right">
            {appealText.length}/1000
          </p>

          <div className="space-y-3">
            <button
              onClick={() => setAppealSubmitted(true)}
              disabled={appealText.length < 20}
              className="w-full py-4 rounded-2xl font-semibold transition-all disabled:opacity-50"
              style={{
                backgroundColor: appealText.length >= 20 ? '#B3915A' : '#0A0B16',
                color: appealText.length >= 20 ? '#0C192C' : '#B8C0CC',
              }}
            >
              Submit Appeal
            </button>
            <button
              onClick={() => setShowAppeal(false)}
              className="w-full py-3 text-sm text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="absolute inset-0 bg-black/90 flex items-center justify-center z-50 p-6">
      <div className="w-full max-w-md bg-[#0C192C] rounded-3xl p-6 space-y-6">
        {/* Icon and title */}
        <div className="flex flex-col items-center text-center space-y-4">
          <div
            className="w-20 h-20 rounded-full flex items-center justify-center"
            style={{ backgroundColor: `${content.iconColor}20` }}
          >
            <Icon className="w-10 h-10" style={{ color: content.iconColor }} />
          </div>
          <h2 className="text-2xl font-bold text-[#F5F2EA]">{content.title}</h2>
        </div>

        {/* Description */}
        <div className="space-y-3">
          <p className="text-[#B8C0CC] text-center leading-relaxed">
            {content.description}
          </p>
          {content.message && (
            <p className="text-[#F5F2EA] text-center leading-relaxed">
              {content.message}
            </p>
          )}
        </div>

        {/* Restrictions list for restriction type */}
        {type === 'restriction' && content.restrictions && (
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-5 space-y-3">
            <p className="text-sm font-medium text-[#F5F2EA]">
              What this means:
            </p>
            <ul className="space-y-2">
              {content.restrictions.map((restriction, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-[#B8C0CC]">
                  <span className="text-[#E67E22] mt-0.5">•</span>
                  <span>{restriction}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Actions */}
        <div className="space-y-3 pt-2">
          {content.actions.map((action, i) => {
            const isAppealAction = action === 'Appeal' || action === 'Submit Appeal';
            const isViewAction = action.startsWith('View');
            const isPrimary = action === 'Got it' || action === 'OK';

            return (
              <button
                key={i}
                onClick={() => {
                  if (isAppealAction) {
                    setShowAppeal(true);
                  } else if (action === 'Contact Support') {
                    console.log('Contact support');
                    onClose();
                  } else if (isViewAction) {
                    console.log('View:', action);
                    onClose();
                  } else {
                    onClose();
                  }
                }}
                className={`w-full py-4 rounded-2xl font-semibold transition-all ${
                  isPrimary
                    ? ''
                    : 'bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A]'
                }`}
                style={
                  isPrimary
                    ? { backgroundColor: '#B3915A', color: '#0C192C' }
                    : { color: '#F5F2EA' }
                }
              >
                {action}
              </button>
            );
          })}
        </div>

        {/* Additional help for warnings */}
        {type === 'warning' && (
          <p className="text-xs text-[#B8C0CC] text-center pt-2">
            If you have questions, contact our safety team at{' '}
            <a href="mailto:safety@lynqura.com" className="text-[#B3915A] hover:underline">
              safety@lynqura.com
            </a>
          </p>
        )}
      </div>
    </div>
  );
}
