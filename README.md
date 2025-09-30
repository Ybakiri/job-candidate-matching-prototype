# Job Candidate Matching Application

A React TypeScript application for reviewing and inviting pre-matched job candidates with a checkout flow, success confirmation, candidate browsing, and invitation management system.

## Features

- **Checkout Summary Page**: Order details and payment confirmation
- **Success Confirmation**: Job posting success with invitation preview
- **Candidate Browsing**: View matched candidates with filtering
- **Detailed Candidate View**: Drawer with complete candidate information
- **Invitation System**: Send invitations with pricing confirmation
- **AI Insights**: Generated candidate analysis with advantages/disadvantages
- **State Management**: Persistent invitation tracking with localStorage
- **Responsive Design**: Mobile-first approach with proper breakpoints

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS with custom design tokens
- **Icons**: Lucide React (Material Design equivalents)
- **State Management**: React Context API + useReducer
- **Routing**: React Router v6
- **Build Tool**: Vite
- **Font**: Open Sans (Google Fonts)

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run typecheck` - Run TypeScript type checking
- `npm run lint` - Run ESLint

## Application Flow

1. **Checkout Summary** (`/checkout`) - Order confirmation and payment
2. **Success Page** (`/success`) - Success banner and candidate preview
3. **Candidate List** - Browse and filter matched candidates
4. **Candidate Details** - Detailed view in a sliding drawer
5. **Invitation Flow** - Pricing confirmation and invitation sending
6. **Final Confirmation** - Complete the hiring process

## Key Features

### Candidate Matching
- 43 pre-generated diverse candidate profiles
- Match scores (Great, Good, Average) with percentages
- Skills matching with visual indicators
- Swiss regional data (Zurich, Bern, Geneva, etc.)

### Invitation System
- CHF 10 per invitation base pricing
- Bulk pricing options (2 for CHF 20, 5 for CHF 50)
- "No answer, no charge" policy
- Invitation state persistence

### UI/UX Features
- Smooth drawer animations
- Toast notifications for user feedback
- Sticky footer with invitation counter
- Privacy-first design with blurred contact info
- Loading states and error handling

## Project Structure

```
src/
├── components/          # Reusable UI components
├── context/            # React Context for state management
├── data/               # Mock data and constants
├── pages/              # Main page components
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
└── index.css           # Global styles and Tailwind imports
```

## Design System

Based on the Figma designs with:
- **Colors**: Neutral brand palette (N-50 to N-900), Blue-60 primary
- **Typography**: Open Sans with weights 400, 600, 700
- **Components**: Cards, buttons, modals following design tokens
- **Spacing**: 24px base spacing unit
- **Shadows**: Subtle card shadows for depth

## Mock Data

The application includes realistic mock data for:
- Swiss candidate profiles with regional diversity
- Varied skill sets for Data Science roles
- Professional experience across multiple industries
- Education credentials from various institutions
- AI-generated insights with pros/cons analysis

## State Management

Uses React Context with useReducer for:
- Candidate invitation tracking
- UI state (modals, filters, notifications)
- localStorage persistence
- Computed values (filtered candidates, costs)

## Browser Support

- Modern browsers with ES2020 support
- Mobile responsive (breakpoints: sm, md, lg, xl)
- Accessibility features (ARIA labels, keyboard navigation)

## Development

The application is built with developer experience in mind:
- Hot module replacement with Vite
- TypeScript strict mode
- ESLint configuration
- Component isolation and reusability
- Clean separation of concerns

## Deployment to Netlify

### Quick Deploy (Recommended)

1. **Push to GitHub/GitLab**:
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Netlify**:
   - Go to [netlify.com](https://netlify.com) and sign in
   - Click "New site from Git"
   - Choose your repository
   - Netlify will auto-detect build settings:
     - Build command: `npm run build`
     - Publish directory: `dist`
   - Click "Deploy site"

### Manual Deploy

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Deploy to Netlify**:
   - Go to [netlify.com](https://netlify.com)
   - Drag and drop the `dist` folder to deploy

### Configuration Files

The project includes:
- `netlify.toml` - Build settings and redirects for SPA routing
- `_redirects` - Backup redirect rules
- Security headers and caching optimization

### Environment Variables (if needed)

If you add environment variables later:
```bash
# In Netlify dashboard > Site settings > Environment variables
VITE_API_URL=your_api_url
```

---

Built with ❤️ using React, TypeScript, and Tailwind CSS