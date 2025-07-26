# File Structure Documentation

## Project Overview
This is a React-based web application for professional profile management with account settings, dashboard functionality, and comprehensive profile sections.

## File Tree Structure

```
├── README.md
├── eslint.config.js
├── index.html
├── vite.config.ts 🟢
├── tailwind.config.ts 🟡
└── src/
    ├── main.tsx 🟢 - Application entry point with React DOM rendering
    ├── App.tsx 🟡 - Root component with routing and providers setup
    ├── index.css - Global styles and design system tokens
    ├── vite-env.d.ts - Vite environment type definitions
    ├── lib/
    │   └── utils.ts 🟢 - Utility functions (cn for className merging)
    ├── hooks/
    │   ├── use-mobile.tsx 🟢 - Mobile device detection hook
    │   └── use-toast.ts 🟢 - Toast notification hook
    ├── pages/
    │   ├── Index.tsx 🟢 - Landing page component
    │   ├── Profile.tsx 🟢 - Profile page wrapper
    │   ├── Account.tsx 🟢 - Account management page wrapper
    │   ├── Dashboard.tsx 🟢 - Dashboard page wrapper
    │   └── NotFound.tsx 🟢 - 404 error page
    ├── components/
    │   ├── ui/ (shadcn/ui components - 29 files) 🟢-🟡
    │   │   ├── accordion.tsx - Collapsible content component
    │   │   ├── alert-dialog.tsx - Modal confirmation dialogs
    │   │   ├── alert.tsx - Alert notification component
    │   │   ├── avatar.tsx - User avatar display component
    │   │   ├── badge.tsx - Status and tag badges
    │   │   ├── button.tsx - Primary button component
    │   │   ├── card.tsx - Content container component
    │   │   ├── dialog.tsx - Modal dialog component
    │   │   ├── form.tsx - Form wrapper and validation
    │   │   ├── input.tsx - Text input component
    │   │   ├── label.tsx - Form label component
    │   │   ├── select.tsx - Dropdown selection component
    │   │   ├── tabs.tsx - Tabbed interface component
    │   │   ├── textarea.tsx - Multi-line text input
    │   │   ├── toast.tsx - Toast notification system
    │   │   └── [25 more UI components...]
    │   ├── common/
    │   │   ├── ProfileSectionModal.tsx 🟡 - Reusable modal for profile editing
    │   │   └── ThemeToggle.tsx 🟢 - Dark/light theme switcher
    │   ├── layout/
    │   │   ├── Navbar.tsx 🟡 - Main navigation component
    │   │   └── Footer.tsx 🟢 - Site footer component
    │   ├── landing/
    │   │   ├── HeroSection.tsx 🟢 - Landing page hero
    │   │   ├── Features.tsx 🟢 - Features showcase section
    │   │   ├── Testimonials.tsx 🟢 - Customer testimonials
    │   │   └── CallToAction.tsx 🟢 - CTA section
    │   ├── dashboard/
    │   │   └── Dashboard.tsx 🟢 - Main dashboard component
    │   ├── account/
    │   │   ├── AccountPage.tsx 🟡 - Account settings main page
    │   │   ├── PreferencesSection.tsx 🟢 - User preferences
    │   │   ├── SecuritySection.tsx 🟢 - Security settings
    │   │   ├── displays/ (4 files) 🟢 - Data display components
    │   │   └── forms/ (4 files) 🟡 - Data editing forms
    │   └── profile/
    │       ├── ProfilePage.tsx 🔴 - Main profile page with state management
    │       ├── ProfilePageLayout.tsx 🟢 - Profile page layout wrapper
    │       ├── ProfilePageHeader.tsx 🟢 - Profile page header
    │       ├── ProfileHeader.tsx 🟡 - User profile header with editing
    │       ├── ProfileSectionGrid.tsx 🟢 - Grid layout for profile sections
    │       ├── SectionCard.tsx 🟡 - Reusable section container
    │       ├── Summary.tsx 🟢 - Profile summary section
    │       ├── ContactSection.tsx 🟡 - Contact information section
    │       ├── ContactInfo.tsx 🟢 - Contact info display
    │       ├── PersonalInfo.tsx 🟢 - Personal information section
    │       ├── LinksSection.tsx 🟡 - Social/professional links
    │       ├── Education.tsx 🟢 - Education history section
    │       ├── Experience.tsx 🟢 - Work experience section
    │       ├── Skills.tsx 🟢 - Skills and competencies
    │       ├── Projects.tsx 🟢 - Project portfolio section
    │       ├── Languages.tsx 🟢 - Language proficiency section
    │       ├── Certifications.tsx 🟢 - Professional certifications
    │       ├── Interests.tsx 🟢 - Personal interests section
    │       ├── Awards.tsx 🟢 - Awards and recognition
    │       ├── Achievements.tsx 🟢 - Notable achievements
    │       ├── Custom.tsx 🟢 - Custom profile sections
    │       ├── achievements/ (4 files) 🟢-🟡 - Achievement management
    │       ├── awards/ (4 files) 🟢-🟡 - Awards management
    │       ├── certifications/ (3 files) 🟢-🟡 - Certification management
    │       ├── custom/ (11 files) 🟢-🟡 - Custom section management
    │       ├── education/ (9 files) 🟢-🟡 - Education management
    │       ├── experience/ (4 files) 🟢-🟡 - Experience management
    │       ├── languages/ (4 files) 🟢-🟡 - Language management
    │       ├── projects/ (4 files) 🟢-🟡 - Project management
    │       └── workflow/ (4 files) 🟢-🟡 - Workflow visualization
    └── public/
        └── robots.txt - Search engine crawling rules
```

## Import Complexity Legend
- 🟢 **Low Complexity (0-3 imports):** Simple components with minimal dependencies
- 🟡 **Medium Complexity (4-7 imports):** Standard components with moderate dependencies
- 🔴 **High Complexity (8+ imports):** Complex components requiring refactoring consideration

## Statistics
- **Total Files:** ~140 files
- **Low Complexity:** ~70% of files
- **Medium Complexity:** ~25% of files  
- **High Complexity:** ~5% of files (mainly ProfilePage.tsx)

## Key Architecture Patterns
- **Feature-based organization:** Profile sections grouped by functionality
- **Atomic design:** UI components separated into reusable atoms
- **Separation of concerns:** Forms, displays, and logic separated
- **Type safety:** TypeScript interfaces for all data structures
- **Modern React:** Hooks-based components with functional paradigm