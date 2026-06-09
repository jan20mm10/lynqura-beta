import { useState } from 'react';
import { Splash } from './components/Splash';
import { SignIn } from './components/SignIn';
import { Onboarding } from './components/Onboarding';
import { SelfCheckInOnboarding } from './components/SelfCheckInOnboarding';
import { Disclosures } from './components/Disclosures';
import { Home } from './components/Home';
import { MobileFrame } from './components/MobileFrame';
import { PrototypeDisclaimer } from './components/PrototypeDisclaimer';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'signin' | 'onboarding' | 'self-check-in' | 'disclosures' | 'home'>('splash');
  const [showDisclaimer, setShowDisclaimer] = useState(true);

  useState(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('signin'), 2000);
      return () => clearTimeout(timer);
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center p-4">
      {showDisclaimer && (
        <PrototypeDisclaimer onDismiss={() => setShowDisclaimer(false)} />
      )}
      <MobileFrame>
        {screen === 'splash' && <Splash />}
        {screen === 'signin' && <SignIn onComplete={() => setScreen('onboarding')} />}
        {screen === 'onboarding' && <Onboarding onComplete={() => setScreen('self-check-in')} />}
        {screen === 'self-check-in' && <SelfCheckInOnboarding onComplete={() => setScreen('disclosures')} />}
        {screen === 'disclosures' && <Disclosures onComplete={() => setScreen('home')} />}
        {screen === 'home' && <Home />}
      </MobileFrame>
    </div>
  );
}
