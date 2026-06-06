import { useState } from 'react';
import { Bell, Heart, MessageCircle, Users, BookOpen, User, Home as HomeIcon, AlertCircle } from 'lucide-react';
import { PulseModal } from './PulseModal';
import { Connect } from './Connect';
import { Chat } from './Chat';
import { Journal } from './Journal';
import { Profile } from './Profile';
import { SupportFeed } from './SupportFeed';
import { ShareCheckIn } from './ShareCheckIn';
import { SupportCardsSheet } from './SupportCardsSheet';
import { CrisisResources } from './CrisisResources';
import { SafetySettings } from './SafetySettings';
import { BlockedUsersList } from './BlockedUsersList';
import { HelpCenter } from './HelpCenter';
import { Hubs } from './Hubs';
import { PanicExit, SafeScreen } from './PanicExit';
import logoImage from "../../imports/ChatGPT_Image_Apr_22,_2026,_12_46_44_AM.png";

type Screen = 'home' | 'connect' | 'chat' | 'journal' | 'profile' | 'crisis-resources' | 'safety-settings' | 'blocked-users' | 'help-center' | 'hubs';
export function Home() {
  const [activeTab, setActiveTab] = useState<'home' | 'connect' | 'journal' | 'profile'>('home');
  const [currentScreen, setCurrentScreen] = useState<Screen>('home');
  const [showPulse, setShowPulse] = useState(false);
  const [pulseScore, setPulseScore] = useState<number | null>(null);
  const [checkInText, setCheckInText] = useState('');
  const [showShareSheet, setShowShareSheet] = useState(false);
  const [showSupportCards, setShowSupportCards] = useState(false);
  const [showSafeScreen, setShowSafeScreen] = useState(false);

  const handlePanicExit = () => {
    setShowSafeScreen(true);
  };

  const chips = ['Vent', 'Need advice', 'Need distraction', 'Celebrate', "I'm overwhelmed"];

  // Handle tab changes
  const handleTabChange = (tab: 'home' | 'connect' | 'journal' | 'profile' | 'hubs') => {
    setActiveTab(tab);
    setCurrentScreen(tab);
  };

  const handlePost = () => {
    if (checkInText.trim()) {
      setShowShareSheet(true);
    }
  };

  const handleSharePost = (data: any) => {
    // In real app, this would post to backend
    console.log('Posting:', data);
    setShowShareSheet(false);
    setCheckInText('');
    // Scroll to feed would happen here
  };

  // Render the appropriate screen
  const renderScreen = () => {
    const goHome = () => {
      setCurrentScreen('home');
      setActiveTab('home');
    };

    const goBack = () => {
      setCurrentScreen('profile');
      setActiveTab('profile');
    };

    switch (currentScreen) {
      case 'connect':
        return <Connect
          onMatchClick={() => setCurrentScreen('chat')}
          onHome={goHome}
        />;
      case 'chat':
        return <Chat
          onBack={() => setCurrentScreen('connect')}
          onHome={goHome}
          onViewCrisisResources={() => setCurrentScreen('crisis-resources')}
        />;
      case 'journal':
        return <Journal
          onHome={goHome}
        />;
      case 'profile':
        return <Profile
          onPremiumClick={() => {}} // Premium removed for beta
          onHome={goHome}
          onNavigate={(screen: string) => setCurrentScreen(screen as Screen)}
        />;
      case 'crisis-resources':
        return <CrisisResources
          onBack={goBack}
          onHome={goHome}
        />;
      case 'safety-settings':
        return <SafetySettings
          onBack={goBack}
          onHome={goHome}
        />;
      case 'blocked-users':
        return <BlockedUsersList
          onBack={goBack}
          onHome={goHome}
        />;
      case 'help-center':
        return <HelpCenter
          onBack={goBack}
          onHome={goHome}
        />;
        case 'hubs':
        return <Hubs
          onHubClick={(hub) => setCurrentScreen('connect')}
          onBack={goBack}
          onHome={goHome}
        />;
      default:
        return renderHomeScreen();
    }
  };

  const renderHomeScreen = () => (
    <div className="h-full bg-[#0C192C] text-[#F5F2EA] flex flex-col">
      {/* Header */}
      <div className="px-6 pt-12 pb-4 flex items-center justify-between">
        <img
          src={logoImage}
          alt="LYNQURA"
          className="h-8"
        />
        <button className="p-2 relative">
          <Bell className="w-6 h-6" style={{ color: '#B3915A' }} />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-[#C8A569] rounded-full"></span>
        </button>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 space-y-6 pb-24">
        {/* Community Connection Banner */}
        <div className="relative rounded-2xl overflow-hidden">
          <img
            src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=800&q=80"
            alt="Community support"
            className="w-full h-32 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0C192C]/80 via-[#0C192C]/40 to-transparent"></div>
          <div className="absolute bottom-4 left-4 right-4">
            <p className="text-sm font-semibold text-[#F5F2EA]">You're not alone</p>
            <p className="text-xs text-[#B8C0CC]">Real people, real support, real connections</p>
          </div>
        </div>

        {/* Prompt */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">How are you, really?</h2>
          <textarea
            placeholder="Type it out—no judgment."
            rows={4}
            value={checkInText}
            onChange={(e) => setCheckInText(e.target.value)}
            className="w-full px-4 py-4 bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A] resize-none"
          />
          <div className="flex flex-wrap gap-2">
            {chips.map((chip) => (
              <button
                key={chip}
                onClick={() => setCheckInText(checkInText + (checkInText ? ' ' : '') + chip.toLowerCase())}
                className="px-4 py-2 bg-[#0A0B16] border border-[#B3915A]/20 rounded-full text-sm hover:border-[#B3915A] transition-all"
              >
                {chip}
              </button>
            ))}
          </div>
          <button
            onClick={handlePost}
            disabled={!checkInText.trim()}
            className="w-full py-3 rounded-xl font-semibold transition-all disabled:opacity-50"
            style={{
              backgroundColor: checkInText.trim() ? '#B3915A' : '#0A0B16',
              color: checkInText.trim() ? '#0C192C' : '#B8C0CC',
            }}
          >
            Post
          </button>
        </div>

        {/* Pulse Card */}
        <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-6 space-y-4">
          <div className="flex items-center justify-between">
            <div>
              <h3 className="font-semibold text-lg">Pulse check-in</h3>
              <p className="text-sm text-[#B8C0CC]">Next Pulse in 15 min</p>
            </div>
            <button 
              onClick={() => setShowPulse(true)}
              className="px-6 py-3 rounded-xl font-semibold"
              style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
            >
              Check in
            </button>
          </div>
          {pulseScore && (
            <div className="flex items-center gap-2 pt-2 border-t border-[#B3915A]/10">
              <div className="flex gap-1">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-8 h-8 rounded"
                    style={{ 
                      backgroundColor: i <= pulseScore ? '#B3915A' : '#0A0B16',
                      opacity: i <= pulseScore ? 1 : 0.3
                    }}
                  ></div>
                ))}
              </div>
              <span className="text-sm text-[#B8C0CC]">Recent trend</span>
            </div>
          )}
        </div>

        {/* Support Feed */}
        <SupportFeed 
          onPostClick={(id) => console.log('View post', id)}
          onSendSupport={() => setShowSupportCards(true)}
        />

        {/* Quick Actions */}
        <div className="grid grid-cols-3 gap-3">
          <button className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 text-center space-y-2 hover:border-[#B3915A] transition-all">
            <Heart className="w-6 h-6 mx-auto" style={{ color: '#B3915A' }} />
            <span className="text-sm block">Reset</span>
          </button>
          <button
            onClick={() => setCurrentScreen('connect')}
            className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 text-center space-y-2 hover:border-[#B3915A] transition-all"
          >
            <Users className="w-6 h-6 mx-auto" style={{ color: '#B3915A' }} />
            <span className="text-sm block">Connect now</span>
          </button>
          <button
            onClick={() => setCurrentScreen('journal')}
            className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 text-center space-y-2 hover:border-[#B3915A] transition-all"
          >
            <BookOpen className="w-6 h-6 mx-auto" style={{ color: '#B3915A' }} />
            <span className="text-sm block">Journal</span>
          </button>
        </div>

        {/* Today's Reset */}
        <div className="bg-gradient-to-br from-[#B3915A]/20 to-[#C8A569]/10 border border-[#B3915A]/30 rounded-2xl p-6 space-y-3">
          <h3 className="font-semibold">Today's reset</h3>
          <p className="text-sm text-[#B8C0CC]">3-minute breathing exercise</p>
          <button className="px-6 py-3 bg-[#B3915A] text-[#0C192C] rounded-xl font-semibold">
            Start
          </button>
        </div>

        {/* SOS */}
        <button className="w-full bg-[#0A0B16] border-2 border-red-500/30 rounded-2xl p-4 flex items-center justify-center gap-2 text-red-400 hover:border-red-500 transition-all">
          <AlertCircle className="w-5 h-5" />
          <span className="font-semibold">Get help now</span>
        </button>
      </div>

      {/* Share Check-In Sheet */}
      {showShareSheet && (
        <ShareCheckIn
          text={checkInText}
          onClose={() => setShowShareSheet(false)}
          onPost={handleSharePost}
        />
      )}

      {/* Support Cards Sheet */}
      {showSupportCards && (
        <SupportCardsSheet
          onClose={() => setShowSupportCards(false)}
        />
      )}
    </div>
  );

  return (
    <div className="h-full relative">
      {renderScreen()}

      {/* Bottom Navigation - only show on main screens */}
     {['home', 'connect', 'journal', 'profile', 'hubs'].includes(currentScreen) && (
        <nav className="absolute bottom-0 left-0 right-0 bg-[#0A0B16] border-t border-[#B3915A]/20 px-6 pb-8 pt-4">
          <div className="flex items-center justify-around">
            {[
              {[
              { id: 'home', icon: HomeIcon, label: 'Home' },
              { id: 'connect', icon: Users, label: 'Connect' },
              { id: 'hubs', icon: Heart, label: 'Hubs' },
              { id: 'journal', icon: BookOpen, label: 'Journal' },
              { id: 'profile', icon: User, label: 'Profile' },
            ].map((tab) => {
              const Icon = tab.icon;
              const isActive = activeTab === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => handleTabChange(tab.id as any)}
                  className="flex flex-col items-center gap-1"
                >
                  <Icon
                    className="w-6 h-6"
                    style={{ color: isActive ? '#B3915A' : '#B8C0CC' }}
                  />
                  <span
                    className="text-xs"
                    style={{ color: isActive ? '#B3915A' : '#B8C0CC' }}
                  >
                    {tab.label}
                  </span>
                </button>
              );
            })}
          </div>
        </nav>
      )}

      {/* Pulse Modal */}
      {showPulse && (
        <PulseModal
          onClose={() => setShowPulse(false)}
          onSubmit={(score) => {
            setPulseScore(score);
            setShowPulse(false);
          }}
          onViewCrisisResources={() => {
            setShowPulse(false);
            setCurrentScreen('crisis-resources');
          }}
        />
      )}

      {/* Panic Exit Feature */}
      {!showSafeScreen && <PanicExit onPanicExit={handlePanicExit} />}

      {/* Safe Screen (shown after panic exit) */}
      {showSafeScreen && (
        <div className="absolute inset-0 z-[200]">
          <SafeScreen onContinue={() => setShowSafeScreen(false)} />
        </div>
      )}
    </div>
  );
}
