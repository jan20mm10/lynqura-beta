import { useState, useEffect } from 'react';
import { PrototypeBanner } from './components/PrototypeBanner';
import { Splash } from './components/Splash';
import { SignIn } from './components/SignIn';            // ← must match your real file name
import { Disclosures } from './components/Disclosures';  // ← must match your real file name
import { Onboarding } from './components/Onboarding';    // your check-in
import { Welcome } from './components/Welcome';
import { Home } from './components/Home';
import { MobileFrame } from './components/MobileFrame';

type Screen = 'splash' | 'signin' | 'disclosures' | 'checkin' | 'welcome' | 'home';

export default function App() {
  const [screen, setScreen] = useState<Screen>('splash');

  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('signin'), 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      <PrototypeBanner />
      <div className="flex-1 flex items-center justify-center p-4">
        <MobileFrame>
          {screen === 'splash' && <Splash />}
          {screen === 'signin' && <SignIn onComplete={() => setScreen('disclosures')} />}
          {screen === 'disclosures' && <Disclosures onComplete={() => setScreen('checkin')} />}
          {screen === 'checkin' && <Onboarding onComplete={() => setScreen('welcome')} />}
          {screen === 'welcome' && <Welcome onComplete={() => setScreen('home')} />}
          {screen === 'home' && <Home />}
        </MobileFrame>
      </div>
    </div>
  );
}
