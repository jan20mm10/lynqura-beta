import { useState, useEffect } from 'react';
import { PrototypeBanner } from './components/PrototypeBanner';
import { Splash } from './components/Splash';
import { Onboarding } from './components/Onboarding';
import { Home } from './components/Home';
import { MobileFrame } from './components/MobileFrame';

export default function App() {
  const [screen, setScreen] = useState<'splash' | 'onboarding' | 'home'>('splash');

  // Auto-advance from splash after 2 seconds
  useEffect(() => {
    if (screen === 'splash') {
      const timer = setTimeout(() => setScreen('onboarding'), 2000);
      return () => clearTimeout(timer);
    }
  }, [screen]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex flex-col">
      <PrototypeBanner />
      <div className="flex-1 flex items-center justify-center p-4">
        <MobileFrame>
          {screen === 'splash' && <Splash />}
          {screen === 'onboarding' && <Onboarding onComplete={() => setScreen('home')} />}
          {screen === 'home' && <Home />}
        </MobileFrame>
      </div>
    </div>
  );
}
