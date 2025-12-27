# RehearsalsAI

**From Backstage to Spotlight Ready**

AI-powered voice coaching platforms for perfecting high-stakes performances across multiple domains.

## Overview

RehearsalsAI is a portfolio of AI-powered rehearsal platforms that help professionals practice and perfect their performances before the moments that matter. Each platform uses voice AI coaches that play your toughest audience, providing real-time feedback and scoring.

### Platforms

| Platform | Audience | Status |
|----------|----------|--------|
| **RaiseReady** | Founders & Fundraising | ✅ Live |
| **SalesReady** | Sales Executives | 🔜 Coming Soon |
| **PartReady** | Actors & Performers | 🔜 Coming Soon |
| **CaseReady** | Lawyers & Advocates | 🔜 Coming Soon |
| **SetReady** | Comedians & Speakers | 🔜 Coming Soon |
| **ThesisReady** | Researchers & Academics | 🔜 Coming Soon |
| **HireReady** | Job Candidates | 🔜 Coming Soon |
| **BoardReady** | Executives & Leaders | 🔜 Coming Soon |
| **CareReady** | Healthcare Professionals | 🔜 Coming Soon |

## Live Demo

See RaiseReady in action: [raiseready-template.vercel.app](https://raiseready-template.vercel.app)

## Tech Stack

- **Frontend**: Next.js 15 with TypeScript
- **Styling**: Tailwind CSS
- **Database**: Supabase (PostgreSQL)
- **Deployment**: Vercel
- **Fonts**: Playfair Display, Source Sans 3, JetBrains Mono

## Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn
- Supabase account
- Vercel account (for deployment)

### Local Development

1. Clone the repository
2. Install dependencies: `npm install`
3. Copy `.env.example` to `.env.local` and fill in Supabase credentials
4. Run migration in Supabase SQL editor
5. Start dev server: `npm run dev`

## Database Schema

### Waitlist Table

| Column | Type | Description |
|--------|------|-------------|
| id | UUID | Primary key |
| name | TEXT | User's name |
| email | TEXT | User's email (unique) |
| vertical | TEXT | Platform of interest |
| created_at | TIMESTAMPTZ | Signup timestamp |
| updated_at | TIMESTAMPTZ | Last update timestamp |
| contacted | BOOLEAN | Contact status |
| converted | BOOLEAN | Conversion status |

## Environment Variables

```
NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-anon-key
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

## License

© 2024 RehearsalsAI. Powered by Corporate AI Solutions.
