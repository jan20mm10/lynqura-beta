// LYNQURA Warmth Pass for Figma
// Paste into a Figma plugin project's code.ts and run on selected frames.
//
// What it does:
// 1) Adds a premium blue-to-gold gradient overlay
// 2) Adds a subtle radial glow behind the main content
// 3) Adds a rounded "human connection" image card to onboarding screens
// 4) Adds a smaller subtle image card to empty-state screens
//
// Recommended:
// - Select only the app screens you want to update before running
// - Rename frames with words like: onboarding, welcome, intro, empty, no messages, no matches

const CONFIG = {
  // Your brand colors
  blue: "#0F4C81",
  blue2: "#183B78",
  gold: "#D4AF37",
  cream: "#F7F4EE",

  // Replace these with licensed image URLs you want to use
  onboardingImages: [
    "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1511988617509-a57c8a288659?auto=format&fit=crop&w=1200&q=80"
  ],

  emptyStateImages: [
    "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
  ],

  onboardingKeywords: ["onboarding", "welcome", "intro", "start", "begin"],
  emptyKeywords: ["empty", "no messages", "no chats", "no matches", "no support"],

  overlayOpacity: 0.18,
  glowOpacity: 0.16,
  imageCardCornerRadius: 28,
  imageCardShadowBlur: 32,
};

function hexToRgb(hex: string) {
  const clean = hex.replace("#", "");
  const bigint = parseInt(clean, 16);
  return {
    r: ((bigint >> 16) & 255) / 255,
    g: ((bigint >> 8) & 255) / 255,
    b: (bigint & 255) / 255,
  };
}

function frameNameMatches(frame: FrameNode, keywords: string[]) {
  const name = frame.name.toLowerCase();
  return keywords.some((k) => name.includes(k));
}

function ensureFramePositioning(frame: FrameNode) {
  if (!frame.fills || frame.fills === figma.mixed || frame.fills.length === 0) {
    frame.fills = [
      {
        type: "SOLID",
        color: hexToRgb(CONFIG.blue2),
      },
    ];
  }
}

function createGradientOverlay(width: number, height: number): RectangleNode {
  const rect = figma.createRectangle();
  rect.resize(width, height);
  rect.name = "LYNQURA / Gradient Overlay";
  rect.cornerRadius = 0;
  rect.fills = [
    {
      type: "GRADIENT_LINEAR",
      opacity: CONFIG.overlayOpacity,
      gradientTransform: [
        [0.9, 0.3, -0.1],
        [-0.3, 0.9, 0.1],
      ],
      gradientStops: [
        {
          position: 0,
          color: { ...hexToRgb(CONFIG.blue), a: 1 },
        },
        {
          position: 0.55,
          color: { ...hexToRgb(CONFIG.blue2), a: 1 },
        },
        {
          position: 1,
          color: { ...hexToRgb(CONFIG.gold), a: 1 },
        },
      ],
    } as GradientPaint,
  ];
  rect.strokes = [];
  rect.isMask = false;
  rect.locked = false;
  return rect;
}

function createSoftGlow(width: number, height: number): EllipseNode {
  const glow = figma.createEllipse();
  glow.name = "LYNQURA / Soft Glow";
  glow.resize(width * 0.7, height * 0.38);
  glow.x = width * 0.15;
  glow.y = height * 0.08;

  glow.fills = [
    {
      type: "SOLID",
      color: hexToRgb(CONFIG.gold),
      opacity: CONFIG.glowOpacity,
    },
  ];

  glow.effects = [
    {
      type: "LAYER_BLUR",
      radius: 80,
      visible: true,
      blendMode: "NORMAL",
    },
  ];

  glow.strokes = [];
  return glow;
}

async function createImageCard(
  url: string,
  width: number,
  height: number,
  x: number,
  y: number,
  name: string
): Promise<FrameNode> {
  const image = await figma.createImageAsync(url);

  const card = figma.createFrame();
  card.name = name;
  card.resize(width, height);
  card.x = x;
  card.y = y;
  card.cornerRadius = CONFIG.imageCardCornerRadius;
  card.clipsContent = true;
  card.fills = [
    {
      type: "SOLID",
      color: hexToRgb(CONFIG.cream),
    },
  ];
  card.strokes = [];
  card.effects = [
    {
      type: "DROP_SHADOW",
      color: { r: 0, g: 0, b: 0, a: 0.15 },
      offset: { x: 0, y: 14 },
      radius: CONFIG.imageCardShadowBlur,
      spread: 0,
      visible: true,
      blendMode: "NORMAL",
    },
  ];

  const imageRect = figma.createRectangle();
  imageRect.name = "Image Fill";
  imageRect.resize(width, height);
  imageRect.fills = [
    {
      type: "IMAGE",
      imageHash: image.hash,
      scaleMode: "FILL",
    },
  ];
  imageRect.strokes = [];

  // Soft dark overlay for premium look
  const tint = figma.createRectangle();
  tint.name = "Photo Tint";
  tint.resize(width, height);
  tint.fills = [
    {
      type: "GRADIENT_LINEAR",
      opacity: 0.28,
      gradientTransform: [
        [1, 0, 0],
        [0, 1, 0],
      ],
      gradientStops: [
        {
          position: 0,
          color: { r: 0, g: 0, b: 0, a: 0.05 },
        },
        {
          position: 1,
          color: { ...hexToRgb(CONFIG.blue), a: 0.55 },
        },
      ],
    } as GradientPaint,
  ];
  tint.strokes = [];

  // Small gold highlight bar
  const accent = figma.createRectangle();
  accent.name = "Accent";
  accent.resize(width * 0.28, 6);
  accent.x = 18;
  accent.y = height - 22;
  accent.cornerRadius = 999;
  accent.fills = [
    {
      type: "SOLID",
      color: hexToRgb(CONFIG.gold),
    },
  ];
  accent.strokes = [];

  card.appendChild(imageRect);
  card.appendChild(tint);
  card.appendChild(accent);

  return card;
}

async function styleFrame(frame: FrameNode, onboardingImageIndex: number, emptyImageIndex: number) {
  ensureFramePositioning(frame);

  const width = frame.width;
  const height = frame.height;

  const gradient = createGradientOverlay(width, height);
  const glow = createSoftGlow(width, height);

  // Put overlays at the back
  frame.insertChild(0, gradient);
  frame.insertChild(1, glow);

  const isOnboarding = frameNameMatches(frame, CONFIG.onboardingKeywords);
  const isEmptyState = frameNameMatches(frame, CONFIG.emptyKeywords);

  if (isOnboarding) {
    const url = CONFIG.onboardingImages[onboardingImageIndex % CONFIG.onboardingImages.length];
    const card = await createImageCard(
      url,
      Math.min(width * 0.42, 250),
      Math.min(height * 0.26, 220),
      width - Math.min(width * 0.42, 250) - 28,
      height - Math.min(height * 0.26, 220) - 34,
      "LYNQURA / Onboarding Human Image"
    );
    frame.appendChild(card);
  } else if (isEmptyState) {
    const url = CONFIG.emptyStateImages[emptyImageIndex % CONFIG.emptyStateImages.length];
    const card = await createImageCard(
      url,
      Math.min(width * 0.28, 170),
      Math.min(height * 0.18, 140),
      width - Math.min(width * 0.28, 170) - 24,
      24,
      "LYNQURA / Empty State Human Image"
    );
    card.opacity = 0.92;
    frame.appendChild(card);
  }
}

async function run() {
  const selection = figma.currentPage.selection;

  if (!selection.length) {
    figma.notify("Select one or more app screens first.");
    figma.closePlugin();
    return;
  }

  const frames = selection.filter(
    (node): node is FrameNode => node.type === "FRAME"
  );

  if (!frames.length) {
    figma.notify("Please select frame layers/screens, not groups or individual shapes.");
    figma.closePlugin();
    return;
  }

  let onboardingIndex = 0;
  let emptyIndex = 0;

  for (const frame of frames) {
    await styleFrame(frame, onboardingIndex, emptyIndex);

    if (frameNameMatches(frame, CONFIG.onboardingKeywords)) onboardingIndex++;
    if (frameNameMatches(frame, CONFIG.emptyKeywords)) emptyIndex++;
  }

  figma.notify("LYNQURA warmth pass applied.");
  figma.closePlugin();
}

run().catch((err) => {
  console.error(err);
  figma.notify("Something went wrong. Check the console.");
  figma.closePlugin();
});