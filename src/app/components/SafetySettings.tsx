import { useState } from 'react';
import { ArrowLeft, Home, Shield, Eye, Bell, Filter } from 'lucide-react';

interface SafetySettingsProps {
  onBack: () => void;
  onHome?: () => void;
}

export function SafetySettings({ onBack, onHome }: SafetySettingsProps) {
  const [whoCanMessage, setWhoCanMessage] = useState<'anyone' | 'supporters-friends' | 'supporters-only' | 'no-one'>('anyone');
  const [contentFilter, setContentFilter] = useState<'high' | 'medium' | 'low' | 'off'>('medium');
  const [notifications, setNotifications] = useState({
    supporterLowPulse: true,
    reportedContent: true,
    weeklyDigest: false,
    crisisReminders: true,
  });

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
        <h1 className="text-3xl font-bold">Safety Settings</h1>
        <p className="text-sm text-[#B8C0CC] mt-2">
          Control who can contact you and what you see
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6 space-y-8">
        {/* Who Can Message Me */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(179, 145, 90, 0.2)' }}
            >
              <Shield className="w-5 h-5" style={{ color: '#B3915A' }} />
            </div>
            <h2 className="text-lg font-semibold">Who can message me?</h2>
          </div>
          <div className="space-y-2">
            {[
              { id: 'anyone', label: 'Anyone on LYNQURA', description: 'Open to all members' },
              { id: 'supporters-friends', label: 'Trusted Supporters and Friends', description: 'People you\'ve connected with' },
              { id: 'supporters-only', label: 'Only my Trusted Supporters', description: 'Up to 5 designated supporters' },
              { id: 'no-one', label: 'No one (pause all DMs)', description: 'Take a break from messages' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setWhoCanMessage(option.id as any)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  whoCanMessage === option.id
                    ? 'bg-[#B3915A]/20 border-2 border-[#B3915A]'
                    : 'bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A]/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: whoCanMessage === option.id ? '#B3915A' : '#B8C0CC',
                      backgroundColor: whoCanMessage === option.id ? '#B3915A' : 'transparent',
                    }}
                  >
                    {whoCanMessage === option.id && (
                      <div className="w-2 h-2 rounded-full bg-[#0C192C]"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#F5F2EA]">{option.label}</p>
                    <p className="text-xs text-[#B8C0CC] mt-0.5">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4">
            <p className="text-xs text-[#B8C0CC] leading-relaxed">
              <strong className="text-[#F5F2EA]">Note:</strong> You can always message Trusted Supporters and moderators, even if your Pulse is low.
            </p>
          </div>
        </div>

        {/* Content Filter */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(52, 152, 219, 0.2)' }}
            >
              <Filter className="w-5 h-5" style={{ color: '#3498DB' }} />
            </div>
            <h2 className="text-lg font-semibold">Content Filter</h2>
          </div>
          <div className="space-y-2">
            {[
              { id: 'high', label: 'High', description: 'Hide most potentially upsetting content' },
              { id: 'medium', label: 'Medium (recommended)', description: 'Blur sensitive content with warnings' },
              { id: 'low', label: 'Low', description: 'Show most content with light warnings' },
              { id: 'off', label: 'Off', description: 'Show all content without filtering' },
            ].map((option) => (
              <button
                key={option.id}
                onClick={() => setContentFilter(option.id as any)}
                className={`w-full p-4 rounded-xl text-left transition-all ${
                  contentFilter === option.id
                    ? 'bg-[#3498DB]/20 border-2 border-[#3498DB]'
                    : 'bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A]/50'
                }`}
              >
                <div className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full border-2 mt-0.5 flex items-center justify-center flex-shrink-0"
                    style={{
                      borderColor: contentFilter === option.id ? '#3498DB' : '#B8C0CC',
                      backgroundColor: contentFilter === option.id ? '#3498DB' : 'transparent',
                    }}
                  >
                    {contentFilter === option.id && (
                      <div className="w-2 h-2 rounded-full bg-[#0C192C]"></div>
                    )}
                  </div>
                  <div className="flex-1">
                    <p className="font-medium text-[#F5F2EA]">{option.label}</p>
                    <p className="text-xs text-[#B8C0CC] mt-0.5">{option.description}</p>
                  </div>
                </div>
              </button>
            ))}
          </div>
          <div className="mt-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4">
            <p className="text-xs text-[#B8C0CC] leading-relaxed">
              Filtering includes: mentions of self-harm, graphic descriptions, explicit content, and harassment
            </p>
          </div>
        </div>

        {/* Safety Notifications */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(155, 89, 182, 0.2)' }}
            >
              <Bell className="w-5 h-5" style={{ color: '#9B59B6' }} />
            </div>
            <h2 className="text-lg font-semibold">Safety Notifications</h2>
          </div>
          <div className="space-y-3">
            {[
              { key: 'supporterLowPulse', label: 'Trusted Supporter has low Pulse', description: 'Get notified when someone you support needs help' },
              { key: 'reportedContent', label: 'My content is reported', description: 'Know when your posts are flagged' },
              { key: 'weeklyDigest', label: 'Weekly safety digest', description: 'Summary of community safety updates' },
              { key: 'crisisReminders', label: 'Crisis resource reminders', description: 'Helpful tips and hotline info' },
            ].map((option) => (
              <div
                key={option.key}
                className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4 flex items-start justify-between"
              >
                <div className="flex-1">
                  <p className="font-medium text-[#F5F2EA]">{option.label}</p>
                  <p className="text-xs text-[#B8C0CC] mt-0.5">{option.description}</p>
                </div>
                <button
                  onClick={() => setNotifications({
                    ...notifications,
                    [option.key]: !notifications[option.key as keyof typeof notifications],
                  })}
                  className="ml-3 w-12 h-7 rounded-full transition-all relative flex-shrink-0"
                  style={{
                    backgroundColor: notifications[option.key as keyof typeof notifications] ? '#B3915A' : '#1A1A2E',
                  }}
                >
                  <div
                    className="absolute top-1 w-5 h-5 rounded-full bg-white transition-all"
                    style={{
                      left: notifications[option.key as keyof typeof notifications] ? '24px' : '4px',
                    }}
                  ></div>
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Visibility Settings */}
        <div>
          <div className="flex items-center gap-3 mb-4">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(46, 204, 113, 0.2)' }}
            >
              <Eye className="w-5 h-5" style={{ color: '#2ECC71' }} />
            </div>
            <h2 className="text-lg font-semibold">Default Post Visibility</h2>
          </div>
          <p className="text-sm text-[#B8C0CC] mb-4">
            Choose who sees your posts by default (you can change this for each post)
          </p>
          <div className="space-y-2">
            {[
              { id: 'trusted', label: 'Trusted Supporters only' },
              { id: 'friends', label: 'Friends' },
              { id: 'hub', label: 'Hub members' },
              { id: 'private', label: 'Private (just me)' },
            ].map((option) => (
              <button
                key={option.id}
                className="w-full p-4 rounded-xl text-left bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A]/50 transition-all"
              >
                <p className="font-medium text-[#F5F2EA]">{option.label}</p>
              </button>
            ))}
          </div>
        </div>

        {/* Bottom spacing */}
        <div className="h-8"></div>
      </div>
    </div>
  );
}
