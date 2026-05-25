import { Settings, Star, Shield, Bell, HelpCircle, LogOut, ChevronRight, Crown, Ban, User, Lock, Eye, UserCheck, Heart, Brain, LifeBuoy, FileText, Mail, ArrowLeft, Home as HomeIcon } from 'lucide-react';
import logoImage from "figma:asset/2adf89cd05eab827313c4a2ea4459c75b1ff962c.png";

interface ProfileProps {
  onPremiumClick: () => void;
  onBack?: () => void;
  onHome?: () => void;
  onNavigate?: (screen: string) => void;
}

export function Profile({ onPremiumClick, onBack, onHome, onNavigate }: ProfileProps) {
  const settingsSections = [
    {
      title: 'Account',
      items: [
        { icon: User, label: 'Personal Information', action: 'personal-info' },
        { icon: Mail, label: 'Email & Phone', action: 'contact' },
        { icon: Settings, label: 'Account Settings', action: 'account-settings' },
        { icon: Bell, label: 'Notifications', action: 'notifications' },
      ]
    },
    {
      title: 'Privacy & Safety',
      items: [
        { icon: Shield, label: 'Privacy Settings', action: 'privacy' },
        { icon: Eye, label: 'Visibility & Profile', action: 'visibility' },
        { icon: Ban, label: 'Blocked Users', action: 'blocked' },
        { icon: Lock, label: 'Data & Security', action: 'data-security' },
      ]
    },
    {
      title: 'Matching Preferences',
      items: [
        { icon: UserCheck, label: 'Topics & Interests', action: 'topics' },
        { icon: Heart, label: 'Connection Preferences', action: 'connection-prefs' },
      ]
    },
    {
      title: 'Mental Health Controls',
      items: [
        { icon: Brain, label: 'Pulse Settings', action: 'pulse-settings' },
        { icon: Heart, label: 'Trusted Supporters', action: 'trusted-supporters' },
        { icon: Bell, label: 'Crisis Alerts', action: 'crisis-alerts' },
      ]
    },
    {
      title: 'Support & Resources',
      items: [
        { icon: LifeBuoy, label: 'Crisis Resources', action: 'crisis-resources' },
        { icon: HelpCircle, label: 'Help Center', action: 'help' },
        { icon: Star, label: 'Rate LYNQURA', action: 'rate' },
      ]
    },
    {
      title: 'Legal',
      items: [
        { icon: FileText, label: 'Terms of Service', action: 'terms' },
        { icon: FileText, label: 'Privacy Policy', action: 'privacy-policy' },
        { icon: FileText, label: 'Community Guidelines', action: 'community-guidelines' },
        { icon: FileText, label: 'Crisis & Safety Policy', action: 'crisis-policy' },
      ]
    },
  ];

  const stats = [
    { label: 'Check-ins', value: '47' },
    { label: 'Paid Forward', value: '23', color: '#B3915A' },
    { label: 'Streak', value: '12 days' },
  ];

  return (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-6">
        <div className="flex items-center justify-between mb-8">
          {onBack && (
            <button onClick={onBack} className="p-2 -ml-2">
              <ArrowLeft className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
          <img src={logoImage} alt="LYNQURA" className="h-8" />
          {onHome && (
            <button onClick={onHome} className="p-2 -mr-2">
              <HomeIcon className="w-6 h-6" style={{ color: '#B3915A' }} />
            </button>
          )}
        </div>
        
        {/* Profile Card */}
        <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-6 text-center mb-6">
          <div className="w-24 h-24 bg-gradient-to-br from-[#B3915A] to-[#C8A569] rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-4xl">👤</span>
          </div>
          <h2 className="text-xl font-bold mb-1">Your Nickname</h2>
          <p className="text-sm text-[#B8C0CC] mb-4">Member since Dec 2024</p>
          <button className="text-sm" style={{ color: '#B3915A' }}>Edit Profile</button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-3">
          {stats.map((stat, i) => (
            <div key={i} className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4 text-center">
              <p
                className="text-2xl font-bold"
                style={{ color: stat.color || '#B3915A' }}
              >
                {stat.value}
              </p>
              <p className="text-xs text-[#B8C0CC] mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Settings Menu */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 pb-24 space-y-6">
        {/* Settings Sections */}
        {settingsSections.map((section, sectionIndex) => (
          <div key={sectionIndex}>
            <h3 className="text-sm font-semibold mb-3 px-2" style={{ color: '#B3915A' }}>
              {section.title}
            </h3>
            <div className="space-y-1">
              {section.items.map((item, itemIndex) => {
                const Icon = item.icon;
                const handleClick = () => {
                  if (onNavigate) {
                    // Map action to screen name
                    const screenMap: Record<string, string> = {
                      'blocked': 'blocked-users',
                      'privacy': 'safety-settings',
                      'help': 'help-center',
                      'crisis-resources': 'crisis-resources',
                    };
                    const screen = screenMap[item.action];
                    if (screen) {
                      onNavigate(screen);
                    }
                  }
                };

                return (
                  <button
                    key={itemIndex}
                    onClick={handleClick}
                    className="w-full bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4 flex items-center justify-between hover:border-[#B3915A] transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <Icon className="w-5 h-5 text-[#B8C0CC]" />
                      <span className="text-sm">{item.label}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-[#B8C0CC]" />
                  </button>
                );
              })}
            </div>
          </div>
        ))}

        {/* Logout */}
        <button className="w-full bg-[#0A0B16] border border-red-500/20 rounded-2xl p-4 flex items-center justify-center gap-3 text-red-400 hover:border-red-500 transition-all">
          <LogOut className="w-5 h-5" />
          <span>Log Out</span>
        </button>

        {/* Tagline */}
        <div className="pt-4 text-center">
          <p className="text-sm" style={{ color: '#B3915A' }}>Healing is Human</p>
          <p className="text-xs text-[#B8C0CC] mt-2">Version 1.0.0</p>
        </div>
      </div>
    </div>
  );
}
