import { useState } from 'react';
import { ArrowLeft, Ban, Home } from 'lucide-react';
import { BlockConfirmation } from './BlockConfirmation';

interface BlockedUsersListProps {
  onBack: () => void;
  onHome?: () => void;
}

export function BlockedUsersList({ onBack, onHome }: BlockedUsersListProps) {
  const [blockedUsers, setBlockedUsers] = useState([
    { id: 1, name: 'Alex K.', blockedDate: 'May 8, 2026' },
    { id: 2, name: 'Jordan M.', blockedDate: 'May 5, 2026' },
    { id: 3, name: 'Sam T.', blockedDate: 'April 30, 2026' },
  ]);
  const [unblockTarget, setUnblockTarget] = useState<{ id: number; name: string } | null>(null);

  const handleUnblock = (id: number) => {
    setBlockedUsers(blockedUsers.filter(user => user.id !== id));
    setUnblockTarget(null);
  };

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
        <h1 className="text-3xl font-bold">Blocked Users</h1>
        <p className="text-sm text-[#B8C0CC] mt-2">
          {blockedUsers.length} {blockedUsers.length === 1 ? 'user' : 'users'} blocked
        </p>
      </div>

      {/* Content */}
      <div className="flex-1 overflow-y-auto scrollbar-hide px-6 py-6">
        {blockedUsers.length === 0 ? (
          // Empty state
          <div className="flex flex-col items-center justify-center h-full text-center px-6 pb-20">
            <div
              className="w-24 h-24 rounded-full flex items-center justify-center mb-6"
              style={{ backgroundColor: 'rgba(179, 145, 90, 0.2)' }}
            >
              <Ban className="w-12 h-12" style={{ color: '#B3915A' }} />
            </div>
            <h2 className="text-xl font-bold mb-2">No blocked users</h2>
            <p className="text-sm text-[#B8C0CC] max-w-xs leading-relaxed">
              When you block someone, they'll appear here. You can unblock them anytime.
            </p>
          </div>
        ) : (
          // Blocked users list
          <div className="space-y-3">
            {blockedUsers.map((user) => (
              <div
                key={user.id}
                className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-2xl p-4 flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-[#B3915A]/20 rounded-full flex items-center justify-center">
                    <Ban className="w-6 h-6" style={{ color: '#B8C0CC' }} />
                  </div>
                  <div>
                    <p className="font-semibold text-[#F5F2EA]">{user.name}</p>
                    <p className="text-xs text-[#B8C0CC]">Blocked {user.blockedDate}</p>
                  </div>
                </div>
                <button
                  onClick={() => setUnblockTarget({ id: user.id, name: user.name })}
                  className="px-4 py-2 rounded-lg text-sm font-medium transition-all"
                  style={{
                    backgroundColor: 'rgba(46, 204, 113, 0.2)',
                    color: '#2ECC71',
                    border: '1px solid rgba(46, 204, 113, 0.3)',
                  }}
                >
                  Unblock
                </button>
              </div>
            ))}
          </div>
        )}

        {blockedUsers.length > 0 && (
          <div className="mt-6 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4">
            <p className="text-sm text-[#B8C0CC] leading-relaxed">
              <strong className="text-[#F5F2EA]">About blocking:</strong> When you block someone, they can't message you or see your posts. Unblocking will restore their access immediately.
            </p>
          </div>
        )}
      </div>

      {/* Unblock confirmation modal */}
      {unblockTarget && (
        <BlockConfirmation
          onClose={() => setUnblockTarget(null)}
          onConfirm={() => handleUnblock(unblockTarget.id)}
          userName={unblockTarget.name}
          isUnblock={true}
        />
      )}
    </div>
  );
}
