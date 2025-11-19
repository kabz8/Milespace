# Milespace Agency Website - Design Guidelines

## Design Approach
**Reference-Based**: Drawing inspiration from modern development agencies like Vercel, Linear, and Stripe - emphasizing clean aesthetics, bold typography, and sophisticated project showcases. The design will balance professional credibility with creative flair to attract premium clients.

## Typography System
- **Primary Font**: Inter (Google Fonts) - clean, modern, excellent for UI
- **Display Font**: Space Grotesk (Google Fonts) - for hero headlines and section titles
- **Hierarchy**:
  - Hero Headlines: text-6xl to text-7xl, font-bold (Space Grotesk)
  - Section Headers: text-4xl to text-5xl, font-semibold (Space Grotesk)
  - Subsections: text-2xl to text-3xl, font-medium (Inter)
  - Body Text: text-base to text-lg, font-normal (Inter)
  - Captions/Meta: text-sm, font-medium (Inter)

## Layout & Spacing
**Spacing Primitives**: Use Tailwind units of 4, 6, 8, 12, 16, 20, 24 (as in p-4, gap-8, mb-12, py-20)
- Section Padding: py-20 to py-32 on desktop, py-12 to py-16 on mobile
- Container: max-w-7xl for full sections, max-w-4xl for content-focused areas
- Grid Gaps: gap-6 to gap-8 for card layouts
- Component Spacing: space-y-4 to space-y-6 for vertical stacks

## Page-Specific Layouts

### Homepage
- **Hero Section**: Full-width with large hero image (80vh) - showcase a stunning project screenshot or creative tech visual representing quality software development
  - Headline with agency value proposition
  - Subheading describing services
  - Primary CTA "View Our Work" + Secondary CTA "Free Consultation"
  - Buttons with blurred backgrounds (backdrop-blur-md, bg-white/10 for dark images)
- **Featured Projects**: Masonry-style grid (3 columns desktop, 2 tablet, 1 mobile) - first 6 best projects
- **Services Overview**: 3-column grid with icons (from Heroicons) - Website Development, Software Development, Consulting
- **Trust Indicators**: Client logos strip or testimonial carousel
- **CTA Section**: Bold call-to-action with pricing link mention

### Portfolio/Work Page
- **Project Grid**: Staggered card layout with hover effects revealing project details
- **Each Card**: Large project image, client name, project type tag, brief description, "View Case Study" link
- **Filter Bar**: Categories (Web, Software, Mobile, etc.) with pill-style buttons
- **Case Study Modal/Page**: Full project breakdown with multiple images, challenge/solution/results structure

### About Page
- **Hero**: Team/office image or Kenya landscape (50vh)
- **Story Section**: Two-column layout (image + narrative text)
- **Mission/Values**: Icon cards in 3-column grid
- **Location Highlight**: Map integration or Kenya-focused imagery, office details
- **Team Section** (if applicable): Photo grid with names/roles

### Contact Page
- **Two-Column Layout**: 
  - Left: Contact form (Name, Email, Phone, Service Interest dropdown, Message)
  - Right: Contact information card with phone (0720176247), email (hello@milespace.co.ke), location (Kenya), office hours
- **Map Integration**: Embedded map or location visual
- **Response Time**: "We typically respond within 24 hours" trust message

### Pricing Page
- **Hero**: "Transparent Pricing" headline with supporting text
- **Package Cards**: 4-column grid (mobile stacks)
  1. Free Consultation - "Let's Talk" - 30min strategy session
  2. Website Development - pricing tiers (Basic/Pro/Enterprise)
  3. Software Development - custom quote with feature list
  4. Additional Services - maintenance, hosting, etc.
- **Each Card**: Title, price/quote indicator, feature checklist (with checkmark icons), primary CTA button, shareable link icon
- **Comparison Table**: Detailed feature comparison below cards
- **FAQ Section**: Common pricing questions accordion

## Component Library

### Navigation
- Fixed header with logo (Milespace blue variant), nav links (Work, About, Pricing, Contact), "Free Consultation" CTA button
- Mobile: Hamburger menu with slide-in panel

### Buttons
- Primary: Solid with rounded corners (rounded-lg), generous padding (px-6 py-3)
- Secondary: Outline style with border
- On images: backdrop-blur-md with semi-transparent backgrounds

### Cards
- Project Cards: Overflow-hidden, rounded-xl, shadow-lg, hover scale effect (hover:scale-105)
- Service Cards: Bordered, rounded-lg, padding p-8, icon at top
- Pricing Cards: Highlighted "Popular" option with distinct border/shadow

### Forms
- Input fields: Rounded borders (rounded-lg), focus states with ring effect
- Labels: text-sm font-medium, mb-2
- Submit buttons: Full-width on mobile, auto-width on desktop

### Icons
- Use Heroicons via CDN throughout
- Service icons: 48px size (h-12 w-12)
- Feature checkmarks: 20px (h-5 w-5)

## Images Section

### Hero Images
- **Homepage Hero**: Large (1920x1080) - stunning software/code visualization, modern office setup, or creative tech abstract. Should convey innovation and professionalism
- **About Page Hero**: Kenya landscape or team workspace (1920x800)
- **Section Backgrounds**: Subtle gradient overlays for text readability

### Project Showcase Images
- Minimum 8-10 project screenshots (1200x800 recommended)
- Clean mockups showing websites/apps in browser/device frames
- Before/after comparisons where applicable
- Real client work screenshots

### Supporting Imagery
- Service illustrations or icons for each offering
- Team photos for About page (if available)
- Office/workspace photography showing Kenya location
- Client logos (if permission obtained)

**Image Treatment**: All images should have subtle rounded corners (rounded-lg to rounded-xl), proper aspect ratios maintained, and optimized loading

## Accessibility & Polish
- Consistent focus states across all interactive elements
- High contrast text on all backgrounds
- Form validation with clear error states
- Loading states for form submissions
- Shareable pricing links generate with unique URLs and meta tags for social sharing
- Smooth scroll behavior between sections
- Mobile-first responsive breakpoints (sm, md, lg, xl)