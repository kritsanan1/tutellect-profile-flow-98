# Scripts Documentation

This document provides detailed information about all available npm scripts in the project.

## Available Scripts

| Script | Description | Parameters | Example | Troubleshooting |
|--------|-------------|------------|---------|-----------------|
| `dev` | Start development server with hot reload | None | `npm run dev` | Port 8080 already in use: Kill process with `lsof -ti:8080 \| xargs kill -9` |
| `build` | Build production bundle | None | `npm run build` | TypeScript errors: Check `tsconfig.json` and fix type issues |
| `preview` | Preview production build locally | None | `npm run preview` | Build files missing: Run `npm run build` first |
| `lint` | Run ESLint on all TypeScript/React files | None | `npm run lint` | Linting errors: Use `npm run lint -- --fix` for auto-fixable issues |

## Script Details

### Development Server (`dev`)
**Purpose:** Starts the Vite development server with hot module replacement (HMR)

**Configuration:**
- **Port:** 8080 (configured in `vite.config.ts`)
- **Host:** `::` (accepts connections from any IP)
- **Features:** Hot reload, instant preview, TypeScript compilation

**Example Output:**
```bash
$ npm run dev

  VITE v5.0.0  ready in 423 ms

  ➜  Local:   http://localhost:8080/
  ➜  Network: http://192.168.1.100:8080/
  ➜  press h to show help
```

**Common Issues:**
- **Port in use:** Change port in `vite.config.ts` or kill existing process
- **Network access:** Use `--host 0.0.0.0` flag for external access
- **Slow startup:** Clear `node_modules` and reinstall dependencies

### Production Build (`build`)
**Purpose:** Creates optimized production bundle in `dist/` directory

**Features:**
- TypeScript compilation with strict mode
- Code minification and tree-shaking
- Asset optimization and fingerprinting
- Source map generation (configurable)

**Example Output:**
```bash
$ npm run build

vite v5.0.0 building for production...
✓ 127 modules transformed.
dist/index.html                  0.46 kB │ gzip:  0.30 kB
dist/assets/index-BKw1pqJr.css   4.73 kB │ gzip:  1.57 kB
dist/assets/index-C2q7HrpR.js  145.23 kB │ gzip: 46.85 kB
✓ built in 1.83s
```

**Common Issues:**
- **Build failures:** Check TypeScript errors and fix before building
- **Large bundle size:** Analyze with `npm run build -- --analyze`
- **Missing assets:** Ensure all imports use correct paths

### Preview Build (`preview`)
**Purpose:** Serves the production build locally for testing

**Usage:** Run after `npm run build` to test production bundle locally

**Example Output:**
```bash
$ npm run preview

  ➜  Local:   http://localhost:4173/
  ➜  Network: use --host to expose
```

**Common Issues:**
- **404 errors:** Ensure build was successful and `dist/` directory exists
- **Routing issues:** Configure server for SPA routing if needed

### Linting (`lint`)
**Purpose:** Runs ESLint to check code quality and style

**Configuration:** Defined in `eslint.config.js`
- React and TypeScript rules enabled
- Automatic import sorting
- Accessibility checks included

**Example Usage:**
```bash
# Check for issues
npm run lint

# Auto-fix issues
npm run lint -- --fix

# Lint specific files
npm run lint -- src/components/ui/
```

**Common Issues:**
- **Rule conflicts:** Check ESLint config and adjust rules as needed
- **TypeScript errors:** Ensure proper type definitions and imports
- **Performance:** Use `--cache` flag for faster subsequent runs

## Package Scripts Reference

### Core Commands
```json
{
  "scripts": {
    "dev": "vite --host :: --port 8080",
    "build": "tsc && vite build",
    "preview": "vite preview",
    "lint": "eslint . --ext ts,tsx --report-unused-disable-directives --max-warnings 0"
  }
}
```

### Development Workflow
1. **Start development:** `npm run dev`
2. **Code quality check:** `npm run lint`
3. **Build for production:** `npm run build`
4. **Test production build:** `npm run preview`

### CI/CD Integration
These scripts are designed for continuous integration:
- **`lint`:** Code quality checks in pull requests
- **`build`:** Production deployment pipeline
- **`preview`:** Staging environment testing

### Performance Optimization
- **Development:** Fast HMR and instant preview
- **Production:** Optimized bundle with code splitting
- **Linting:** Cached results for faster subsequent runs

### Troubleshooting Tips
1. **Clear cache:** Delete `node_modules/.vite/` for fresh start
2. **Dependency issues:** Run `npm ci` for clean install
3. **TypeScript problems:** Use `npx tsc --noEmit` to check types only
4. **Build analysis:** Add `--analyze` flag to identify bundle issues