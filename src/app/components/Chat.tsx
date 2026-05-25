import { ArrowLeft, MoreVertical, Send, Heart, Music, Link, Phone, Ban, Flag, Home } from 'lucide-react';
import { useState } from 'react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";
import { BlockConfirmation } from './BlockConfirmation';
import { ReportFlow } from './ReportFlow';
import { MessageWarningModal, detectMessageIssues } from './MessageWarningModal';

interface ChatProps {
  onBack: () => void;
  onHome?: () => void;
  onViewCrisisResources?: () => void;
}

export function Chat({ onBack, onHome, onViewCrisisResources }: ChatProps) {
  const [message, setMessage] = useState('');
  const [showSupportCards, setShowSupportCards] = useState(false);
  const [showMenu, setShowMenu] = useState(false);
  const [isBlocked, setIsBlocked] = useState(false);
  const [showBlockConfirm, setShowBlockConfirm] = useState(false);
  const [showReportFlow, setShowReportFlow] = useState(false);
  const [messageWarning, setMessageWarning] = useState<'crisis' | 'harassment' | 'personal-info' | 'boundary-violation' | null>(null);

  const messages = [
    { id: 1, from: 'them', text: "Hey, thanks for connecting. I'm having a rough day.", time: '2:34 PM' },
    { id: 2, from: 'me', text: "I'm here for you. What's going on?", time: '2:35 PM' },
    { id: 3, from: 'them', text: "Just feeling overwhelmed with everything lately", time: '2:37 PM' },
    { id: 4, from: 'me', text: "I totally get that. Do you want to talk about it or need a distraction?", time: '2:38 PM' },
    { id: 5, from: 'them', text: "Maybe both? Just knowing someone's there helps", time: '2:40 PM' },
  ];

  const supportCards = [
    { icon: Heart, label: "I'm here with you", color: '#E74C3C' },
    { icon: Music, label: 'Send a song', color: '#9B59B6' },
    { icon: Link, label: 'Share resource', color: '#3498DB' },
    { icon: Phone, label: 'Crisis resources', color: '#E67E22' },
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    // Detect message issues
    const issue = detectMessageIssues(message);

    if (issue) {
      setMessageWarning(issue);
    } else {
      // Send message
      console.log('Sending message:', message);
      setMessage('');
    }
  };

  const handleSendAnyway = () => {
    console.log('Sending message anyway:', message);
    setMessage('');
    setMessageWarning(null);
  };

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 border-b border-[#B3915A]/20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <button onClick={onBack} className="p-2 -ml-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div className="w-10 h-10 bg-[#B3915A]/20 rounded-full"></div>
          <div>
            <p className="font-semibold">Alex K.</p>
            <p className="text-xs text-[#B8C0CC]">Active now</p>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {onHome && (
            <button onClick={onHome} className="p-2">
              <Home className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
          <div className="relative">
            <button onClick={() => setShowMenu(!showMenu)} className="p-2">
              <MoreVertical className="w-6 h-6" />
            </button>

            {showMenu && (
            <div className="absolute right-0 top-12 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl shadow-lg overflow-hidden z-50 min-w-[200px]">
              <button
                onClick={() => {
                  setShowBlockConfirm(true);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#B3915A]/10 transition-all text-left"
              >
                <Ban className="w-5 h-5" style={{ color: isBlocked ? '#C8A569' : '#E74C3C' }} />
                <span className="text-sm">{isBlocked ? 'Unblock User' : 'Block User'}</span>
              </button>
              <button
                onClick={() => {
                  setShowReportFlow(true);
                  setShowMenu(false);
                }}
                className="w-full px-4 py-3 flex items-center gap-3 hover:bg-[#B3915A]/10 transition-all text-left border-t border-[#B3915A]/10"
              >
                <Flag className="w-5 h-5" style={{ color: '#E74C3C' }} />
                <span className="text-sm">Report User</span>
              </button>
            </div>
          )}
          </div>
        </div>
      </div>

      {/* Safety reminder */}
      <div className="px-6 py-3 bg-[#B3915A]/10 border-b border-[#B3915A]/20">
        <p className="text-xs text-[#B8C0CC] text-center">
          Peer support only. No medical advice. Report anything unsafe.
        </p>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.from === 'me' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[75%] space-y-1 ${msg.from === 'me' ? 'items-end' : 'items-start'} flex flex-col`}>
              <div
                className={`px-4 py-3 rounded-2xl ${
                  msg.from === 'me'
                    ? 'bg-[#B3915A] text-[#0C192C] rounded-br-md'
                    : 'bg-[#0A0B16] border border-[#B3915A]/20 rounded-bl-md'
                }`}
              >
                <p className="text-sm">{msg.text}</p>
              </div>
              <span className="text-xs text-[#B8C0CC] px-2">{msg.time}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Support Cards */}
      {showSupportCards && (
        <div className="px-6 pb-3">
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4">
            <p className="text-sm font-medium mb-3">Send Support</p>
            <div className="grid grid-cols-2 gap-2">
              {supportCards.map((card, i) => {
                const Icon = card.icon;
                return (
                  <button
                    key={i}
                    className="flex items-center gap-2 p-3 bg-[#0C192C] border border-[#B3915A]/20 rounded-xl hover:border-[#B3915A] transition-all"
                  >
                    <Icon className="w-4 h-4" style={{ color: card.color }} />
                    <span className="text-xs">{card.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      )}

      {/* Input */}
      <div className="px-6 pb-8 pt-4 border-t border-[#B3915A]/20">
        {isBlocked ? (
          <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4 text-center">
            <Ban className="w-8 h-8 mx-auto mb-2" style={{ color: '#B8C0CC' }} />
            <p className="text-sm text-[#B8C0CC]">You have blocked this user</p>
            <p className="text-xs text-[#B8C0CC]/60 mt-1">Unblock to send messages</p>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <button
              onClick={() => setShowSupportCards(!showSupportCards)}
              className="p-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl"
            >
              <Heart className="w-5 h-5" style={{ color: '#B3915A' }} />
            </button>
            <input
              type="text"
              placeholder="Type your message..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="flex-1 px-4 py-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
            />
            <button
              disabled={!message}
              onClick={handleSendMessage}
              className="p-3 rounded-xl transition-all disabled:opacity-50"
              style={{ backgroundColor: message ? '#B3915A' : '#0A0B16' }}
            >
              <Send className="w-5 h-5" style={{ color: message ? '#0C192C' : '#B8C0CC' }} />
            </button>
          </div>
        )}
      </div>

      {/* Block Confirmation Modal */}
      {showBlockConfirm && (
        <BlockConfirmation
          onClose={() => setShowBlockConfirm(false)}
          onConfirm={() => {
            setIsBlocked(!isBlocked);
            setShowBlockConfirm(false);
          }}
          userName="Alex K."
          isUnblock={isBlocked}
        />
      )}

      {/* Report Flow */}
      {showReportFlow && (
        <ReportFlow
          onClose={() => setShowReportFlow(false)}
          reportType="user"
          targetName="Alex K."
        />
      )}

      {/* Message Warning Modal */}
      {messageWarning && (
        <MessageWarningModal
          onClose={() => setMessageWarning(null)}
          onRevise={() => {
            setMessageWarning(null);
            // Keep the message in the input for editing
          }}
          onSendAnyway={handleSendAnyway}
          onViewResources={() => {
            if (onViewCrisisResources) {
              onViewCrisisResources();
            }
            setMessageWarning(null);
          }}
          warningType={messageWarning}
          messageText={message}
        />
      )}
    </div>
  );
}
