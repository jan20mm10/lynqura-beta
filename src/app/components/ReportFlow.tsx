import { useState } from 'react';
import { X, Flag, CheckCircle, Shield } from 'lucide-react';

interface ReportFlowProps {
  onClose: () => void;
  reportType: 'user' | 'post' | 'message';
  targetName: string;
}

export function ReportFlow({ onClose, reportType, targetName }: ReportFlowProps) {
  const [step, setStep] = useState<'reason' | 'details' | 'confirmation'>('reason');
  const [selectedReason, setSelectedReason] = useState<string>('');
  const [details, setDetails] = useState('');
  const [reportId, setReportId] = useState('');

  const reasons = [
    { id: 'harassment', label: 'Harassment or bullying', icon: '😔' },
    { id: 'self-harm', label: 'Threatening self-harm or suicide', icon: '🆘' },
    { id: 'encouraging-harm', label: 'Encouraging self-harm or dangerous behavior', icon: '⚠️' },
    { id: 'sexual', label: 'Sexual content or advances', icon: '🚫' },
    { id: 'spam', label: 'Spam or scam', icon: '📧' },
    { id: 'personal-info', label: 'Sharing personal information', icon: '🔒' },
    { id: 'impersonation', label: 'Impersonation or fake profile', icon: '🎭' },
    { id: 'hate-speech', label: 'Hate speech or discrimination', icon: '✋' },
    { id: 'other', label: 'Other', icon: '💬' },
  ];

  const handleSubmitReport = () => {
    // Generate mock report ID
    const id = `#${Math.floor(1000 + Math.random() * 9000)}`;
    setReportId(id);
    setStep('confirmation');
  };

  return (
    <div className="absolute inset-0 bg-black/80 flex items-center justify-center z-50 p-6">
      <div className="w-full max-w-md bg-[#0C192C] rounded-3xl max-h-[90vh] overflow-hidden flex flex-col">
        {/* Header */}
        <div className="px-6 pt-6 pb-4 border-b border-[#B3915A]/20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div
              className="w-10 h-10 rounded-full flex items-center justify-center"
              style={{ backgroundColor: 'rgba(231, 76, 60, 0.2)' }}
            >
              <Flag className="w-5 h-5" style={{ color: '#E74C3C' }} />
            </div>
            <h2 className="text-xl font-bold text-[#F5F2EA]">
              {step === 'reason' && `Report ${reportType}`}
              {step === 'details' && 'Additional details'}
              {step === 'confirmation' && 'Report submitted'}
            </h2>
          </div>
          <button onClick={onClose} className="p-2">
            <X className="w-6 h-6" style={{ color: '#B8C0CC' }} />
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-y-auto scrollbar-hide">
          {step === 'reason' && (
            <div className="p-6 space-y-4">
              <p className="text-[#B8C0CC] mb-4">
                Why are you reporting {reportType === 'user' ? targetName : `this ${reportType}`}?
              </p>
              <div className="space-y-2">
                {reasons.map((reason) => (
                  <button
                    key={reason.id}
                    onClick={() => setSelectedReason(reason.id)}
                    className={`w-full p-4 rounded-xl text-left flex items-center gap-3 transition-all ${
                      selectedReason === reason.id
                        ? 'bg-[#B3915A]/20 border-2 border-[#B3915A]'
                        : 'bg-[#0A0B16] border border-[#B3915A]/20 hover:border-[#B3915A]/50'
                    }`}
                  >
                    <span className="text-2xl">{reason.icon}</span>
                    <span className="text-sm font-medium text-[#F5F2EA]">{reason.label}</span>
                    {selectedReason === reason.id && (
                      <CheckCircle className="w-5 h-5 ml-auto" style={{ color: '#B3915A' }} />
                    )}
                  </button>
                ))}
              </div>
            </div>
          )}

          {step === 'details' && (
            <div className="p-6 space-y-4">
              <p className="text-[#B8C0CC]">
                Help us understand what happened (optional)
              </p>
              <textarea
                value={details}
                onChange={(e) => setDetails(e.target.value)}
                placeholder="Describe what happened and why it concerns you..."
                rows={6}
                maxLength={500}
                className="w-full px-4 py-3 bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl text-[#F5F2EA] placeholder:text-[#B8C0CC] focus:outline-none focus:border-[#B3915A] resize-none"
              />
              <p className="text-xs text-[#B8C0CC] text-right">
                {details.length}/500
              </p>
              <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-4 mt-4">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#B3915A] flex-shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-[#F5F2EA] mb-1">
                      Your report is anonymous
                    </p>
                    <p className="text-xs text-[#B8C0CC] leading-relaxed">
                      The person you're reporting won't know who submitted this report.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {step === 'confirmation' && (
            <div className="p-6 space-y-6">
              {/* Success icon */}
              <div className="flex justify-center">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center"
                  style={{ backgroundColor: 'rgba(46, 204, 113, 0.2)' }}
                >
                  <CheckCircle className="w-10 h-10" style={{ color: '#2ECC71' }} />
                </div>
              </div>

              <div className="text-center space-y-2">
                <h3 className="text-xl font-bold text-[#F5F2EA]">Report submitted</h3>
                <p className="text-[#B8C0CC]">
                  Report {reportId}
                </p>
              </div>

              <div className="bg-[#0A0B16] border border-[#B3915A]/20 rounded-xl p-5 space-y-4">
                <p className="text-sm text-[#F5F2EA]">
                  <strong>What happens next:</strong>
                </p>
                <ul className="space-y-2 text-sm text-[#B8C0CC]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#B3915A] mt-0.5">•</span>
                    <span>Our safety team will review this within 24 hours</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B3915A] mt-0.5">•</span>
                    <span>You won't be notified of the outcome, but we take every report seriously</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B3915A] mt-0.5">•</span>
                    <span>If it violates our guidelines, we'll take appropriate action</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#B3915A] mt-0.5">•</span>
                    <span>You can block this user to stop all contact immediately</span>
                  </li>
                </ul>
              </div>

              {reportType !== 'message' && (
                <button
                  className="w-full py-4 rounded-2xl font-semibold bg-[#0A0B16] border border-[#E74C3C]/30 hover:border-[#E74C3C] transition-all"
                  style={{ color: '#E74C3C' }}
                  onClick={() => {
                    // Handle block user
                    console.log('Block user');
                    onClose();
                  }}
                >
                  Block {targetName}
                </button>
              )}
            </div>
          )}
        </div>

        {/* Footer buttons */}
        {step !== 'confirmation' && (
          <div className="px-6 pb-6 pt-4 border-t border-[#B3915A]/20 space-y-3">
            {step === 'reason' && (
              <button
                onClick={() => setStep('details')}
                disabled={!selectedReason}
                className="w-full py-4 rounded-2xl font-semibold transition-all disabled:opacity-50"
                style={{
                  backgroundColor: selectedReason ? '#B3915A' : '#0A0B16',
                  color: selectedReason ? '#0C192C' : '#B8C0CC',
                }}
              >
                Continue
              </button>
            )}
            {step === 'details' && (
              <>
                <button
                  onClick={handleSubmitReport}
                  className="w-full py-4 rounded-2xl font-semibold"
                  style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
                >
                  Submit Report
                </button>
                <button
                  onClick={() => setStep('reason')}
                  className="w-full py-3 text-sm text-[#B8C0CC] hover:text-[#B3915A] transition-colors"
                >
                  Back
                </button>
              </>
            )}
          </div>
        )}

        {step === 'confirmation' && (
          <div className="px-6 pb-6 pt-4 border-t border-[#B3915A]/20">
            <button
              onClick={onClose}
              className="w-full py-4 rounded-2xl font-semibold"
              style={{ backgroundColor: '#B3915A', color: '#0C192C' }}
            >
              Done
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
