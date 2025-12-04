# Batch Mix-up Prevention Presentation - Next.js

A modern, responsive React-based presentation built with Next.js, TypeScript, and Tailwind CSS, showcasing the Automatic Cartridge Testing JIG (ACTJ) for pharmaceutical batch validation.

## 🚀 Features

- **Fully Responsive**: Auto-adapts to all screen sizes using `vmin` units
- **Fullscreen Support**: Press F11 or click fullscreen button
- **Keyboard Navigation**: Arrow keys for slide navigation
- **Smooth Animations**: Tailwind CSS animations
- **TypeScript**: Type-safe codebase
- **Vercel Ready**: Configured for static export and Vercel deployment

## 📋 Prerequisites

- Node.js 18+ (Download from https://nodejs.org/)
- npm (comes with Node.js)

## 🛠️ Installation

1. Open terminal in the `batch-mix-presentation` folder
2. Install dependencies:
```bash
npm install
```

## 🏃 Running the Project

### Development Mode
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production Build
```bash
npm run build
npm start
```

### Export Static Site
```bash
npm run build
```
Output will be in the `out/` directory.

## 📁 Project Structure

```
batch-mix-presentation/
├── src/
│   ├── app/
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx             # Home page
│   │   └── globals.css          # Global styles
│   └── components/
│       ├── Presentation.tsx     # Main presentation logic
│       ├── SlideContainer.tsx   # Slide wrapper
│       ├── Navigation.tsx       # Navigation controls
│       ├── StartupDialog.tsx    # Welcome dialog
│       └── slides/
│           ├── slideData.tsx    # Slide configuration
│           ├── TitleSlide.tsx   # Slide 1
│           ├── ChallengeSlide.tsx # Slide 2
│           └── ...              # Other slides
├── public/                      # Static assets
├── next.config.mjs              # Next.js config
├── tailwind.config.js           # Tailwind CSS config
├── tsconfig.json                # TypeScript config
└── package.json                 # Dependencies

```

## 🎨 Customization

### Adding/Editing Slides

1. Create new slide component in `src/components/slides/`
2. Import and add to `slideData.tsx`
3. Use responsive Tailwind classes with `vmin` units

### Styling

- Global styles: `src/app/globals.css`
- Tailwind config: `tailwind.config.js`
- Component styles: Use Tailwind utility classes

## 🌐 Deployment to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Vercel will auto-detect Next.js and deploy

## 📝 TODO: Complete Remaining Slides

The following slide components need to be created in `src/components/slides/`:

- `ChallengeSlide.tsx` - Slide 2: The Challenge & Solution
- `ConsequencesSlide.tsx` - Slide 3: Consequences
- `ContextSlide.tsx` - Slide 4: Current Situation
- `LogicSlide.tsx` - Slide 5: Core Logic
- `ValidationSlide.tsx` - Slide 6: 4-Level Validation
- `ConfigSlide.tsx` - Slide 7: Batch Configuration
- `TestResultsSlide.tsx` - Slide 8: Test Results
- `ComparisonSlide.tsx` - Slide 9: Before vs After
- `TechnicalSlide.tsx` - Slide 10: Technical Specs
- `BenefitsSlide.tsx` - Slide 11: Benefits
- `TimelineSlide.tsx` - Slide 12: Project Timeline
- `TeamSlide.tsx` - Slide 13: Team & Acknowledgments
- `NextStepsSlide.tsx` - Slide 14: Next Steps
- `FinalSlide.tsx` - Slide 15: Thank You

## 🎯 Responsive Design Tips

Use these Tailwind classes for responsive text:
- `text-[clamp(0.75em,1.15vmin,0.95em)]` - Body text
- `text-[clamp(1.4em,2.8vmin,2.2em)]` - Main headings
- `text-[clamp(1.1em,2vmin,1.6em)]` - Subheadings
- `p-[clamp(15px,2vmin,30px)]` - Padding
- `gap-[clamp(8px,1.2vmin,15px)]` - Grid gaps

## 📱 Keyboard Shortcuts

- `←` / `→` - Navigate slides
- `F11` - Toggle fullscreen

## 🐛 Troubleshooting

### Port already in use
```bash
npx kill-port 3000
npm run dev
```

### Build errors
```bash
rm -rf .next node_modules
npm install
npm run build
```

## 📄 License

Internal project for pharmaceutical quality assurance.

---

**Built with ❤️ using Next.js, React, TypeScript, and Tailwind CSS**
