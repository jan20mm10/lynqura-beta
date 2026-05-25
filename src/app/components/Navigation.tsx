import { Palette, Boxes, Smartphone, GitBranch, FileCode } from 'lucide-react';

interface NavigationProps {
  activeSection: string;
  onSectionChange: (section: string) => void;
}

const sections = [
  { id: 'brand-kit', label: '00 – Brand Kit', icon: Palette },
  { id: 'components', label: '01 – Components', icon: Boxes },
  { id: 'screens', label: '02 – Screens (V1)', icon: Smartphone },
  { id: 'prototype', label: '03 – Prototype Flow', icon: GitBranch },
  { id: 'dev-notes', label: '04 – Notes for Devs', icon: FileCode },
];

export function Navigation({ activeSection, onSectionChange }: NavigationProps) {
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="px-6 py-4">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">LYNQURA v1 Prototype</h1>
        
        <div className="flex flex-col gap-1">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            
            return (
              <button
                key={section.id}
                onClick={() => onSectionChange(section.id)}
                className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors text-left ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700'
                    : 'text-gray-700 hover:bg-gray-50'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{section.label}</span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
