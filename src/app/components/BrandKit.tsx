export function BrandKit() {
  const colors = {
    primary: [
      { name: 'Primary 600', hex: '#4F46E5', rgb: 'rgb(79, 70, 229)' },
      { name: 'Primary 500', hex: '#6366F1', rgb: 'rgb(99, 102, 241)' },
      { name: 'Primary 400', hex: '#818CF8', rgb: 'rgb(129, 140, 248)' },
    ],
    secondary: [
      { name: 'Secondary 600', hex: '#DB2777', rgb: 'rgb(219, 39, 119)' },
      { name: 'Secondary 500', hex: '#EC4899', rgb: 'rgb(236, 72, 153)' },
      { name: 'Secondary 400', hex: '#F472B6', rgb: 'rgb(244, 114, 182)' },
    ],
    neutral: [
      { name: 'Gray 900', hex: '#111827', rgb: 'rgb(17, 24, 39)' },
      { name: 'Gray 700', hex: '#374151', rgb: 'rgb(55, 65, 81)' },
      { name: 'Gray 500', hex: '#6B7280', rgb: 'rgb(107, 114, 128)' },
      { name: 'Gray 300', hex: '#D1D5DB', rgb: 'rgb(209, 213, 219)' },
      { name: 'Gray 100', hex: '#F3F4F6', rgb: 'rgb(243, 244, 246)' },
    ],
  };

  const typography = [
    { name: 'Display', size: '48px', weight: '700', usage: 'Hero sections, main headlines' },
    { name: 'H1', size: '36px', weight: '700', usage: 'Page titles' },
    { name: 'H2', size: '24px', weight: '600', usage: 'Section headers' },
    { name: 'H3', size: '20px', weight: '600', usage: 'Card titles, subsections' },
    { name: 'Body Large', size: '16px', weight: '400', usage: 'Main content' },
    { name: 'Body', size: '14px', weight: '400', usage: 'Standard text' },
    { name: 'Caption', size: '12px', weight: '400', usage: 'Helper text, labels' },
  ];

  const spacing = [
    { name: 'XS', value: '4px', usage: 'Tight spacing' },
    { name: 'SM', value: '8px', usage: 'Small gaps' },
    { name: 'MD', value: '16px', usage: 'Default spacing' },
    { name: 'LG', value: '24px', usage: 'Section spacing' },
    { name: 'XL', value: '32px', usage: 'Large sections' },
    { name: '2XL', value: '48px', usage: 'Page sections' },
  ];

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Brand Kit</h2>

      {/* Color Palette */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Color Palette</h3>
        
        <div className="space-y-6">
          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Primary Colors</h4>
            <div className="grid grid-cols-3 gap-4">
              {colors.primary.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div
                    className="h-24 rounded-lg shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{color.name}</p>
                    <p className="text-gray-600">{color.hex}</p>
                    <p className="text-gray-500 text-xs">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Secondary Colors</h4>
            <div className="grid grid-cols-3 gap-4">
              {colors.secondary.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div
                    className="h-24 rounded-lg shadow-sm"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="text-sm">
                    <p className="font-medium text-gray-900">{color.name}</p>
                    <p className="text-gray-600">{color.hex}</p>
                    <p className="text-gray-500 text-xs">{color.rgb}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-sm font-medium text-gray-700 mb-3">Neutral Colors</h4>
            <div className="grid grid-cols-5 gap-4">
              {colors.neutral.map((color) => (
                <div key={color.name} className="space-y-2">
                  <div
                    className="h-20 rounded-lg shadow-sm border border-gray-200"
                    style={{ backgroundColor: color.hex }}
                  ></div>
                  <div className="text-xs">
                    <p className="font-medium text-gray-900">{color.name}</p>
                    <p className="text-gray-600">{color.hex}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Typography */}
      <section className="mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Typography</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {typography.map((type) => (
              <div key={type.name} className="p-4 flex items-center justify-between">
                <div className="flex-1">
                  <p
                    className="text-gray-900"
                    style={{ fontSize: type.size, fontWeight: type.weight }}
                  >
                    {type.name}
                  </p>
                </div>
                <div className="flex gap-8 text-sm text-gray-600">
                  <span>{type.size}</span>
                  <span>Weight {type.weight}</span>
                  <span className="text-gray-500">{type.usage}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Spacing */}
      <section>
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Spacing Scale</h3>
        <div className="bg-white rounded-lg border border-gray-200 overflow-hidden">
          <div className="divide-y divide-gray-200">
            {spacing.map((space) => (
              <div key={space.name} className="p-4 flex items-center gap-6">
                <div className="w-20 text-sm font-medium text-gray-900">{space.name}</div>
                <div className="flex items-center gap-4">
                  <div
                    className="bg-indigo-500 h-8 rounded"
                    style={{ width: space.value }}
                  ></div>
                  <span className="text-sm text-gray-600">{space.value}</span>
                </div>
                <span className="text-sm text-gray-500">{space.usage}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
