# Professional Profile Management Platform

A modern, responsive web application for creating and managing professional profiles with comprehensive sections for experience, education, skills, and more.

## 🚀 Features

- **Profile Management:** Complete profile creation with avatar, contact info, and professional summary
- **Experience Tracking:** Work experience, education, certifications, and projects
- **Skills Showcase:** Technical skills, languages, interests, and achievements
- **Custom Sections:** Flexible custom sections with icons, dates, and descriptions
- **Account Management:** User preferences, security settings, and profile verification
- **Responsive Design:** Mobile-first design with dark/light theme support
- **Modern UI:** Built with shadcn/ui components and Tailwind CSS

## 🛠 Tech Stack

- **Frontend:** React 18, TypeScript, Vite
- **Styling:** Tailwind CSS with custom design system
- **UI Components:** shadcn/ui, Radix UI primitives
- **Forms:** React Hook Form with Zod validation
- **Routing:** React Router v6
- **State Management:** React hooks and context
- **Icons:** Lucide React
- **Notifications:** Sonner toast library

## 📋 Prerequisites

- **Node.js:** v18.0.0 or higher
- **Package Manager:** npm, yarn, pnpm, or bun
- **Browser:** Modern browsers with ES2020 support

## 🔧 Installation

1. **Clone the repository:**
```bash
git clone <YOUR_GIT_URL>
cd <YOUR_PROJECT_NAME>
```

2. **Install dependencies:**
```bash
npm install
# or
yarn install
# or
pnpm install
# or
bun install
```

3. **Start development server:**
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

4. **Open in browser:**
Navigate to `http://localhost:8080`

## 🏗 Project Structure

```
src/
├── components/           # React components
│   ├── ui/              # shadcn/ui components
│   ├── layout/          # Layout components (Navbar, Footer)
│   ├── landing/         # Landing page sections
│   ├── dashboard/       # Dashboard functionality
│   ├── account/         # Account management
│   ├── profile/         # Profile management
│   └── common/          # Shared components
├── pages/               # Page components
├── hooks/               # Custom React hooks
├── lib/                 # Utility functions
└── index.css           # Global styles and design tokens
```

## 🎨 Design System

The application uses a custom design system built on Tailwind CSS with semantic color tokens:

- **Primary Colors:** Tutellect brand gradient (#0FF0B3 to #036ED9)
- **Typography:** Inter (body), Montserrat (headings)
- **Theme Support:** Automatic dark/light mode detection
- **Responsive:** Mobile-first breakpoint system

## 📱 Available Routes

- `/` - Landing page
- `/profile` - Profile management
- `/account` - Account settings
- `/dashboard` - User dashboard
- `*` - 404 Not Found page

## 🧪 Development

### Code Style

- **ESLint:** Configured with React and TypeScript rules
- **Prettier:** Automatic code formatting
- **TypeScript:** Strict mode enabled
- **Conventions:** Functional components with hooks

### Git Workflow

- **Branch Format:** `[type]/[ticket-number]-[description]`
  - Examples: `feature/PRO-123-add-education-section`, `fix/BUG-456-mobile-nav`
- **Commit Messages:** Conventional commits format
- **Pull Requests:** Use provided template with testing checklist

### Component Guidelines

1. **File Organization:** Group related components in feature folders
2. **Type Safety:** Define interfaces for all props and data structures
3. **Reusability:** Create composable components with variant patterns
4. **Accessibility:** Include ARIA labels and keyboard navigation
5. **Performance:** Use React.memo for expensive components

## 🚀 Build & Deployment

### Development Build
```bash
npm run build
npm run preview
```

### Production Deployment
```bash
npm run build
# Deploy the 'dist' folder to your hosting provider
```

### Environment Variables

Create a `.env.local` file based on `.env.example`:

```env
# App Configuration
VITE_APP_TITLE="Professional Profile Platform"
VITE_APP_DESCRIPTION="Create and manage your professional profile"

# API Configuration (if applicable)
# VITE_API_BASE_URL=https://api.yourapp.com
# VITE_API_VERSION=v1

# Analytics (if applicable)
# VITE_ANALYTICS_ID=your-analytics-id
```

## 🔍 Testing

```bash
# Run tests
npm run test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use:**
```bash
# Change port in vite.config.ts or kill process on port 8080
lsof -ti:8080 | xargs kill -9
```

2. **Module resolution errors:**
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

3. **TypeScript errors:**
```bash
# Restart TypeScript server in VS Code
Cmd/Ctrl + Shift + P -> "TypeScript: Restart TS Server"
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch: `git checkout -b feature/amazing-feature`
3. Commit changes: `git commit -m 'Add amazing feature'`
4. Push to branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

### Pull Request Template

- [ ] **Code Quality:** Follows project conventions and passes linting
- [ ] **Testing:** Includes tests for new functionality
- [ ] **Documentation:** Updates relevant documentation
- [ ] **Screenshots:** Includes before/after screenshots for UI changes
- [ ] **Breaking Changes:** Documents any breaking changes

## 🚀 Lovable Development

This project is built with [Lovable](https://lovable.dev/projects/a144512f-d9cf-45ef-8b9f-c673e109d9ce), enabling rapid development through AI assistance.

### Editing Options

**Use Lovable (Recommended)**
- Visit the [Lovable Project](https://lovable.dev/projects/a144512f-d9cf-45ef-8b9f-c673e109d9ce)
- Changes made via Lovable are automatically committed

**Local Development**
- Clone this repo and push changes for automatic sync with Lovable
- All standard Git workflows are supported

**Deploy with Lovable**
- Open [Lovable](https://lovable.dev/projects/a144512f-d9cf-45ef-8b9f-c673e109d9ce)
- Click Share → Publish for instant deployment
- Connect custom domains via Project → Settings → Domains

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

## 🆘 Support

- **Documentation:** [Lovable Docs](https://docs.lovable.dev/)
- **Custom Domain:** [Setup Guide](https://docs.lovable.dev/tips-tricks/custom-domain#step-by-step-guide)
- **Community:** [Lovable Discord](https://discord.gg/lovable)
