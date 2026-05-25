import { ReactNode } from 'react';

interface MobileFrameProps {
  children: ReactNode;
}

export function MobileFrame({ children }: MobileFrameProps) {
  return (
    <div className="relative w-full max-w-md">
      {/* Phone frame */}
      <div className="bg-black rounded-[3rem] p-3 shadow-2xl">
        {/* Screen */}
        <div className="bg-[#0C192C] rounded-[2.5rem] overflow-hidden relative" style={{ height: '844px' }}>
          {/* Notch */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-7 bg-black rounded-b-3xl z-50"></div>
          
          {/* Screen content */}
          <div className="h-full overflow-y-auto scrollbar-hide">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}
