import { useEffect, useState } from 'react';

interface PanicExitProps {
  onPanicExit: () => void;
}

export function PanicExit({ onPanicExit }: PanicExitProps) {
  const [tapCount, setTapCount] = useState(0);
  const [tapTimer, setTapTimer] = useState<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTap = () => {
      setTapCount((prev) => {
        const newCount = prev + 1;

        // Clear existing timer
        if (tapTimer) {
          clearTimeout(tapTimer);
        }

        // If triple tap detected, trigger panic exit
        if (newCount >= 3) {
          onPanicExit();
          return 0;
        }

        // Set new timer to reset count after 500ms
        const timer = setTimeout(() => {
          setTapCount(0);
        }, 500);

        setTapTimer(timer);

        return newCount;
      });
    };

    // Listen for taps/clicks anywhere on the screen
    window.addEventListener('click', handleTap);

    return () => {
      window.removeEventListener('click', handleTap);
      if (tapTimer) {
        clearTimeout(tapTimer);
      }
    };
  }, [tapTimer, onPanicExit]);

  // Visual indicator when taps are detected (optional - could be removed for stealth)
  if (tapCount > 0 && tapCount < 3) {
    return (
      <div className="fixed bottom-4 right-4 z-[100] pointer-events-none">
        <div className="bg-[#0A0B16] border border-[#B3915A]/40 rounded-full px-4 py-2 flex items-center gap-2">
          {[...Array(3)].map((_, i) => (
            <div
              key={i}
              className="w-2 h-2 rounded-full"
              style={{
                backgroundColor: i < tapCount ? '#B3915A' : '#B8C0CC',
                opacity: i < tapCount ? 1 : 0.3,
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  return null;
}

// Safe screen component that shows after panic exit
export function SafeScreen({ onContinue }: { onContinue: () => void }) {
  return (
    <div className="h-full w-full bg-white flex items-center justify-center p-8">
      <div className="max-w-md text-center space-y-6">
        <h1 className="text-4xl font-bold text-gray-900">Weather</h1>
        <div className="space-y-4">
          <div className="text-6xl">☀️</div>
          <div className="space-y-2">
            <p className="text-2xl font-semibold text-gray-800">72°F</p>
            <p className="text-lg text-gray-600">Partly Cloudy</p>
          </div>
          <div className="grid grid-cols-2 gap-4 mt-6 text-sm text-gray-700">
            <div>
              <p className="font-semibold">High</p>
              <p>78°F</p>
            </div>
            <div>
              <p className="font-semibold">Low</p>
              <p>65°F</p>
            </div>
          </div>
        </div>
        <button
          onClick={onContinue}
          className="mt-8 px-6 py-3 bg-blue-500 text-white rounded-lg font-medium hover:bg-blue-600 transition-colors"
        >
          Continue
        </button>
      </div>
    </div>
  );
}
