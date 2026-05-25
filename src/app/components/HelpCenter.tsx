import { useState } from 'react';
import { ArrowLeft, Home, Search, ChevronDown, ChevronUp, Shield, Heart, MessageCircle, AlertCircle, Ban, Eye } from 'lucide-react';

interface HelpCenterProps {
  onBack: () => void;
  onHome?: () => void;
}

export function HelpCenter({ onBack, onHome }: HelpCenterProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqCategories = [
    {
      title: 'Safety & Reporting',
      icon: Shield,
      color: '#E74C3C',
      questions: [
        {
          id: 1,
          question: 'How do I report someone?',
          answer: "Tap the [...] menu on any message, post, or profile, then select 'Report'. You'll be asked to choose a reason and can provide optional details. Your report is anonymous and will be reviewed by our safety team within 24 hours.",
        },
        {
          id: 2,
          question: 'What happens when I block someone?',
          answer: "When you block someone, they can't message you or see your posts. They won't be notified of the block. You can unblock them anytime from Settings → Blocked Users.",
        },
        {
          id: 3,
          question: 'Can I report a message without blocking the person?',
          answer: "Yes! Reporting and blocking are separate actions. You can report concerning content without blocking, or you can do both. Use the report feature if you see something that violates our guidelines, even if you don't want to block the person.",
        },
        {
          id: 4,
          question: 'What if I\'m being harassed?',
          answer: "Block the person immediately, then report them. If you feel unsafe, you can also contact our safety team at safety@lynqura.com. For immediate physical danger, call 911.",
        },
      ],
    },
    {
      title: 'Pulse & Check-ins',
      icon: Heart,
      color: '#E67E22',
      questions: [
        {
          id: 5,
          question: 'Can I turn off Pulse check-ins?',
          answer: "You can adjust the frequency of Pulse check-ins in Settings → Pulse Settings, but they help us keep you safe so we recommend keeping them on. You can always skip a check-in if you're busy.",
        },
        {
          id: 6,
          question: 'What happens if my Pulse is 1-3?',
          answer: "If you rate your Pulse as 1-3, you'll see a supportive screen offering options like alerting your Trusted Supporters, viewing crisis resources, starting a breathing exercise, or writing in your journal. You're always in control of what happens next.",
        },
        {
          id: 7,
          question: 'Who sees my Pulse scores?',
          answer: "Your exact Pulse scores are private. Only you can see them. If you choose to alert your Trusted Supporters when your Pulse is low, they'll receive a notification that you need support, but they won't see your specific score.",
        },
      ],
    },
    {
      title: 'Messaging & Boundaries',
      icon: MessageCircle,
      color: '#3498DB',
      questions: [
        {
          id: 8,
          question: 'What are boundaries on posts?',
          answer: "Boundaries let you set expectations for support, like 'No advice' or 'No links'. When someone tries to respond in a way that violates your boundaries, they'll see a gentle reminder before sending.",
        },
        {
          id: 9,
          question: 'Can I control who messages me?',
          answer: "Yes! Go to Settings → Safety Settings → Who can message me. You can choose to receive messages from anyone, only Trusted Supporters and Friends, only Trusted Supporters, or pause all DMs.",
        },
        {
          id: 10,
          question: 'How do I mute someone without blocking them?',
          answer: "Currently, blocking is the main way to stop seeing someone's content. We're working on adding a mute feature that will let you hide someone's posts without blocking them completely.",
        },
      ],
    },
    {
      title: 'Crisis Resources',
      icon: AlertCircle,
      color: '#9B59B6',
      questions: [
        {
          id: 11,
          question: 'Is LYNQURA a crisis hotline?',
          answer: "No. LYNQURA is peer support, not emergency services. If you're in crisis or immediate danger, call 911 or text 988 (Suicide & Crisis Lifeline). You can view all crisis resources in the app at Profile → Crisis Resources.",
        },
        {
          id: 12,
          question: 'What if I see someone in crisis?',
          answer: "If someone posts about self-harm or suicide, report the post immediately so our safety team can review it. You can also share crisis resources with them (988, Crisis Text Line). Remember: you're not responsible for someone else's safety, but reporting helps us connect them with professional support.",
        },
        {
          id: 13,
          question: 'What happens after I report crisis content?',
          answer: "Our safety team reviews the report as quickly as possible (usually within hours for urgent reports). We may reach out to the person with crisis resources, alert emergency services if necessary, or take other appropriate action depending on the severity.",
        },
      ],
    },
    {
      title: 'Privacy & Visibility',
      icon: Eye,
      color: '#16A085',
      questions: [
        {
          id: 14,
          question: 'Who can see my posts?',
          answer: "You choose! For each post, you can set visibility to: Trusted Supporters only, Friends, Hub members, or Private (just you). Your default can be set in Settings → Safety Settings.",
        },
        {
          id: 15,
          question: 'Is my profile anonymous?',
          answer: "Your public profile (nickname, avatar, bio) can be anonymous. Your private information (legal name, address, ID) is never shown to other users and is only used for age verification and safety purposes.",
        },
        {
          id: 16,
          question: 'Can I delete my posts and messages?',
          answer: "Yes. You can delete your own posts and messages anytime. Note that reported content may be retained for safety review even after deletion.",
        },
      ],
    },
  ];

  const filteredCategories = faqCategories.map(category => ({
    ...category,
    questions: category.questions.filter(q =>
      searchQuery === '' ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.answer.toLowerCase().includes(searchQuery.toLowerCase())
    ),
  })).filter(category => category.questions.length > 0);

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
        <h1 className="text-3xl font-bold">Help Center</h1>
        <p className="text-sm text-[#B8C0CC] mt-2">
          Find answers about safety, features, and support
        </p>
      </div>

      {/* Search */}
      <div className="px-6 py-4 border-b border-[#B3915A]/20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-[#B8C0CC]" />
          <input
            type="text"
            placeholder="Search for help..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A]"
          />
        </div>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6 space-y-6">
        {filteredCategories.map((category) => {
          const Icon = category.icon;
          return (
            <div key={category.title}>
              <div className="flex items-center gap-3 mb-4">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: `${category.color}20` }}
                >
                  <Icon className="w-5 h-5" style={{ color: category.color }} />
                </div>
                <h2 className="text-lg font-semibold">{category.title}</h2>
              </div>
              <div className="space-y-2">
                {category.questions.map((q) => (
                  <div
                    key={q.id}
                    className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl overflow-hidden"
                  >
                    <button
                      onClick={() => setExpandedId(expandedId === q.id ? null : q.id)}
                      className="w-full p-4 flex items-center justify-between text-left hover:bg-[#B3915A]/5 transition-all"
                    >
                      <span className="font-medium text-[#F5F2EA] pr-4">{q.question}</span>
                      {expandedId === q.id ? (
                        <ChevronUp className="w-5 h-5 text-[#B3915A] flex-shrink-0" />
                      ) : (
                        <ChevronDown className="w-5 h-5 text-[#B8C0CC] flex-shrink-0" />
                      )}
                    </button>
                    {expandedId === q.id && (
                      <div className="px-4 pb-4 pt-2 border-t border-[#B3915A]/10">
                        <p className="text-sm text-[#B8C0CC] leading-relaxed">{q.answer}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          );
        })}

        {filteredCategories.length === 0 && (
          <div className="flex flex-col items-center justify-center py-12 text-center">
            <Search className="w-16 h-16 text-[#B8C0CC] mb-4" />
            <p className="text-lg font-semibold text-[#F5F2EA] mb-2">No results found</p>
            <p className="text-sm text-[#B8C0CC]">
              Try a different search term or browse all categories
            </p>
          </div>
        )}

        {/* Contact Support */}
        <div className="mt-8 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-6">
          <h3 className="text-lg font-semibold mb-2">Still need help?</h3>
          <p className="text-sm text-[#B8C0CC] mb-4">
            Our support team is here for you
          </p>
          <div className="space-y-2">
            <a
              href="mailto:support@lynqura.com"
              className="block w-full py-3 px-4 rounded-xl bg-[#0C192C] border border-[#B3915A]/30 text-center font-medium hover:border-[#B3915A] transition-all"
              style={{ color: '#B3915A' }}
            >
              Email support@lynqura.com
            </a>
            <a
              href="mailto:safety@lynqura.com"
              className="block w-full py-3 px-4 rounded-xl bg-[#0C192C] border border-[#E74C3C]/30 text-center font-medium hover:border-[#E74C3C] transition-all"
              style={{ color: '#E74C3C' }}
            >
              Report safety concern
            </a>
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
