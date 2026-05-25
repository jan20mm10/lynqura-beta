import { X } from 'lucide-react';
import { useState } from 'react';

interface ShareCheckInProps {
  onClose: () => void;
  onPost: (data: ShareData) => void;
  text: string;
}

interface ShareData {
  text: string;
  visibility: {
    trustedSupporters: boolean;
    friends: boolean;
    hub: string | null;
    private: boolean;
  };
  supportType: 'comfort' | 'advice' | 'distraction' | 'listening' | 'open';
  boundaries: {
    noAdvice: boolean;
    noDMs: boolean;
    noLinks: boolean;
    keepGentle: boolean;
  };
  allowComments: boolean;
}

export function ShareCheckIn({ onClose, onPost, text }: ShareCheckInProps) {
  const [visibility, setVisibility] = useState({
    trustedSupporters: true,
    friends: false,
    hub: null as string | null,
    private: false,
  });

  const [supportType, setSupportType] = useState<'comfort' | 'advice' | 'distraction' | 'listening' | 'open'>('open');

  const [boundaries, setBoundaries] = useState({
    noAdvice: false,
    noDMs: false,
    noLinks: true,
    keepGentle: true,
  });

  const [allowComments, setAllowComments] = useState(true);

  const handlePost = () => {
    onPost({
      text,
      visibility,
      supportType,
      boundaries,
      allowComments,
    });
  };

  const supportTypes = [
    { id: 'comfort', label: 'Comfort', color: '#E74C3C' },
    { id: 'advice', label: 'Advice', color: '#3498DB' },
    { id: 'distraction', label: 'Distraction', color: '#F39C12' },
    { id: 'listening', label: 'Just listening', color: '#9B59B6' },
    { id: 'open', label: 'Open support', color: '#B8C0CC' },
  ];

  return (
    <div className="absolute inset-0 bg-black/80 flex items-end z-50">
      <div className="w-full bg-[#0C192C] rounded-t-3xl p-6 max-h-[90vh] overflow-y-auto scrollbar-hide">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-bold" style={{ color: '#F5F2EA' }}>Share this check-in?</h2>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
          </button>
        </div>

        {/* Visibility */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Who can see this?</h3>
          <div className="space-y-2">
            {[
              { key: 'trustedSupporters', label: 'Trusted Supporters' },
              { key: 'friends', label: 'Friends' },
              { key: 'private', label: 'Keep private' },
            ].map((option) => (
              <label key={option.key} className="flex items-center gap-3 cursor-pointer p-3 bg-[#0A0B16] rounded-xl">
                <input
                  type="checkbox"
                  checked={visibility[option.key as keyof typeof visibility] as boolean}
                  onChange={(e) => setVisibility({ ...visibility, [option.key]: e.target.checked })}
                  className="w-5 h-5 rounded border-[#B3915A]/20 bg-[#0A0B16] text-[#B3915A] focus:ring-[#B3915A]"
                />
                <span style={{ color: '#F5F2EA' }}>{option.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Support Request Type */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>What would help most?</h3>
          <div className="flex flex-wrap gap-2">
            {supportTypes.map((type) => (
              <button
                key={type.id}
                onClick={() => setSupportType(type.id as any)}
                className="px-4 py-2 rounded-full text-sm font-medium transition-all"
                style={{
                  backgroundColor: supportType === type.id ? type.color : '#0A0B16',
                  color: supportType === type.id ? '#0C192C' : '#B8C0CC',
                  borderWidth: '1px',
                  borderColor: supportType === type.id ? type.color : 'rgba(179, 145, 90, 0.2)',
                }}
              >
                {type.label}
              </button>
            ))}
          </div>
        </div>

        {/* Boundaries */}
        <div className="mb-6">
          <h3 className="text-sm font-semibold mb-3" style={{ color: '#F5F2EA' }}>Boundaries (optional)</h3>
          <div className="space-y-2">
            {[
              { key: 'noAdvice', label: 'No advice' },
              { key: 'noDMs', label: 'No DMs' },
              { key: 'noLinks', label: 'No links' },
              { key: 'keepGentle', label: 'Keep it gentle' },
            ].map((boundary) => (
              <label key={boundary.key} className="flex items-center gap-3 cursor-pointer p-3 bg-[#0A0B16] rounded-xl">
                <input
                  type="checkbox"
                  checked={boundaries[boundary.key as keyof typeof boundaries]}
                  onChange={(e) => setBoundaries({ ...boundaries, [boundary.key]: e.target.checked })}
                  className="w-5 h-5 rounded border-[#B3915A]/20 bg-[#0A0B16] text-[#B3915A] focus:ring-[#B3915A]"
                />
                <span style={{ color: '#F5F2EA' }}>{boundary.label}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Comments */}
        <div className="mb-6">
          <label className="flex items-center gap-3 cursor-pointer p-3 bg-[#0A0B16] rounded-xl">
            <input
              type="checkbox"
              checked={allowComments}
              onChange={(e) => setAllowComments(e.target.checked)}
              className="w-5 h-5 rounded border-[#B3915A]/20 bg-[#0A0B16] text-[#B3915A] focus:ring-[#B3915A]"
            />
            <span style={{ color: '#F5F2EA' }}>Allow comments</span>
          </label>
        </div>

        {/* Buttons */}
        <div className="flex gap-3">
          <button
            onClick={onClose}
            className="flex-1 py-4 rounded-2xl font-semibold bg-[#0A0B16] border border-[#B3915A]/20"
            style={{ color: '#F5F2EA' }}
          >
            Cancel
          </button>
          <button
            onClick={handlePost}
            className="flex-1 py-4 rounded-2xl font-semibold"
            style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
          >
            Post
          </button>
        </div>
      </div>
    </div>
  );
}
