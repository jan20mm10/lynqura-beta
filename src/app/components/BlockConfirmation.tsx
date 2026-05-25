import { X, Ban, Shield } from 'lucide-react';

interface BlockConfirmationProps {
  onClose: () => void;
  onConfirm: () => void;
  userName: string;
  isUnblock?: boolean;
}

export function BlockConfirmation({ onClose, onConfirm, userName, isUnblock }: BlockConfirmationProps) {
  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="w-full max-w-sm bg-[#0C192C] rounded-3xl p-6 space-y-6">
        {/* Icon */}
        <div className="flex justify-center">
          <div
            className="w-16 h-16 rounded-full flex items-center justify-center"
            style={{ backgroundColor: isUnblock ? 'rgba(46, 204, 113, 0.2)' : 'rgba(231, 76, 60, 0.2)' }}
          >
            {isUnblock ? (
              <Shield className="w-8 h-8" style={{ color: '#2ECC71' }} />
            ) : (
              <Ban className="w-8 h-8" style={{ color: '#E74C3C' }} />
            )}
          </div>
        </div>

        {/* Content */}
        <div className="text-center space-y-3">
          <h2 className="text-xl font-bold text-[#F5F2EA]">
            {isUnblock ? `Unblock ${userName}?` : `Block ${userName}?`}
          </h2>
          <div className="space-y-2">
            {isUnblock ? (
              <>
                <p className="text-sm text-[#B8C0CC]">
                  This will allow {userName} to:
                </p>
                <ul className="space-y-1 text-sm text-[#B8C0CC]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-0.5">•</span>
                    <span>Message you again</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-0.5">•</span>
                    <span>See your posts and comments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#2ECC71] mt-0.5">•</span>
                    <span>Interact with your content</span>
                  </li>
                </ul>
              </>
            ) : (
              <>
                <p className="text-sm text-[#B8C0CC]">
                  When you block someone:
                </p>
                <ul className="space-y-1 text-sm text-[#B8C0CC]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#E74C3C] mt-0.5">•</span>
                    <span>They won't be able to message you</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E74C3C] mt-0.5">•</span>
                    <span>You won't see their posts or comments</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#E74C3C] mt-0.5">•</span>
                    <span>They won't be notified</span>
                  </li>
                </ul>
              </>
            )}
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <button
            onClick={onConfirm}
            className="w-full py-4 rounded-2xl font-semibold transition-all"
            style={{
              backgroundColor: isUnblock ? '#B3915A' : '#E74C3C',
              color: '#FFFFFF',
            }}
          >
            {isUnblock ? 'Unblock' : 'Block'}
          </button>
          <button
            onClick={onClose}
            className="w-full py-4 rounded-2xl font-semibold bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A] transition-all"
            style={{ color: '#F5F2EA' }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}
