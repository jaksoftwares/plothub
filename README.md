<div align="center">
  <img src="public/logos/primary-symbol.png" alt="PlotHub Logo" width="200" />

  # PlotHub
  
  **The Premium Land & Property Marketplace**

  PlotHub connects verified buyers, sellers, and real estate professionals in a secure, transparent, and beautifully designed digital ecosystem. From discovery to ownership, PlotHub simplifies land investment and property management.

  <p>
    <a href="#features">Features</a> •
    <a href="#tech-stack">Tech Stack</a> •
    <a href="#getting-started">Getting Started</a> •
    <a href="#project-structure">Project Structure</a>
  </p>
</div>

---

##  Overview

PlotHub is not just a classifieds platform—it is a modern digital real estate ecosystem built on trust. It supports multiple user types, ranging from individual first-time land buyers to enterprise property developers and government agencies. 

The platform offers a state-of-the-art **Public Marketplace** for discovery, and comprehensive **Vendor & Buyer Workspaces** for identity management, team collaboration, and transaction tracking.

##  Features

### For Buyers
- **Smart Discovery**: Advanced filters (location, price, zoning, amenities) with a highly interactive Map Explorer.
- **Trust & Transparency**: Verified property listings and vendor profiles with integrated reviews.
- **Wishlists & Comparisons**: Save listings, compare properties side-by-side, and track price changes.
- **Seamless Enquiries**: Direct, secure communication with verified vendors to schedule site visits and begin purchases.

### For Vendors
- **Enterprise Workspaces**: Create business profiles, invite team members, and manage roles (e.g., Sales Manager, Agent).
- **Property Management**: Rich listing creation with high-res galleries, virtual tours, and legal document uploads.
- **Verification Tiers**: Progress through verification levels (Email, Identity, Business, Property) to unlock premium badges.
- **Analytics Dashboard**: Track views, enquiries, and agent performance.

## 🛠 Tech Stack

PlotHub is built with a modern, high-performance web architecture:

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/) & [Base UI](https://base-ui.com/)
- **Database & ORM**: PostgreSQL, [Drizzle ORM](https://orm.drizzle.team/)
- **Authentication & Backend**: [Supabase](https://supabase.com/)
- **State Management**: [Zustand](https://zustand-demo.pmnd.rs/) & React Query
- **Forms & Validation**: React Hook Form, Zod
- **Icons & Animations**: Lucide React, Framer Motion

##  Getting Started

### Prerequisites

Ensure you have the following installed on your local machine:
- **Node.js** (v18 or higher)
- **npm** or **pnpm**
- A **Supabase** project (or local Supabase instance) for the database.

### Installation

1. **Clone the repository:**
   ```bash
   git clone git@github-jaksoftwares:jaksoftwares/plothub.git
   cd plothub
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Environment Variables:**
   Create a `.env.local` file in the root directory and add your necessary environment variables (e.g., database URLs, Supabase keys, Next Auth secrets).
   ```env
   NEXT_PUBLIC_SUPABASE_URL=your-supabase-url
   NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key
   DATABASE_URL=your-database-connection-string
   ```

4. **Run Database Migrations (Drizzle):**
   ```bash
   npm run db:push # or drizzle-kit generate/migrate
   ```

5. **Start the Development Server:**
   ```bash
   npm run dev
   ```
   Navigate to [http://localhost:3000](http://localhost:3000) to view the application.

##  Project Structure

```plaintext
plothub/
├── app/                  # Next.js App Router (Pages, Layouts, API Routes)
├── components/           # Reusable React components
│   ├── layout/           # Global layout pieces (Navbars, Footers)
│   └── ui/               # Base UI primitives & standardized elements
├── lib/                  # Utility functions and configurations
├── public/               # Static assets (Images, Logos, Markdown Docs)
│   └── DOCS/             # Project documentation and specifications
└── package.json          # Project dependencies and scripts
```

##  Documentation

Detailed project specifications, including brand guidelines, identity management rules, and marketplace flows, can be found in the `/public/DOCS/` directory.

---
<div align="center">
  <sub>Built for modern real estate.</sub>
</div>