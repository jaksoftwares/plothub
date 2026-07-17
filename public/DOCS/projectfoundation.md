4. Install Core Dependencies
npm install \
@supabase/supabase-js \
@supabase/ssr \
cloudinary \
next-cloudinary \
react-hook-form \
@hookform/resolvers \
zod \
zustand \
@tanstack/react-query \
@tanstack/react-query-devtools \
sonner \
lucide-react \
date-fns \
clsx \
tailwind-merge \
class-variance-authority \
react-dropzone \
react-day-picker \
embla-carousel-react \
cmdk \
recharts \
framer-motion \
nanoid \
slugify \
react-intersection-observer
5. Install Development Dependencies
npm install -D \
prettier \
prettier-plugin-tailwindcss \
eslint-config-prettier \
husky \
lint-staged \
typescript
6. Install shadcn/ui
npx shadcn@latest init

Recommended options:

Style:
New York

Base Color:
Slate

CSS Variables:
Yes

React Server Components:
Yes

components.json:
Yes

Tailwind Config:
Use default

Import Alias:
@
7. Install Common shadcn Components
npx shadcn@latest add \
button \
card \
input \
textarea \
label \
form \
select \
checkbox \
switch \
dialog \
drawer \
dropdown-menu \
popover \
sheet \
tabs \
table \
badge \
avatar \
calendar \
carousel \
command \
hover-card \
navigation-menu \
pagination \
progress \
radio-group \
scroll-area \
separator \
skeleton \
slider \
sonner \
tooltip \
breadcrumb \
alert \
alert-dialog \
accordion
8. Create Environment File
touch .env.local

Example:

NEXT_PUBLIC_SUPABASE_URL=

NEXT_PUBLIC_SUPABASE_ANON_KEY=

SUPABASE_SERVICE_ROLE_KEY=

NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME=

CLOUDINARY_API_KEY=

CLOUDINARY_API_SECRET=

GOOGLE_MAPS_API_KEY=

RESEND_API_KEY=
9. Install Supabase CLI
npm install -D supabase

or globally

npm install -g supabase

Initialize:

npx supabase init
10. Install Drizzle ORM (Recommended)

Even though you're using Supabase, I recommend Drizzle for schema management and type-safe queries.

npm install drizzle-orm postgres
npm install -D drizzle-kit
11. Install Cloudinary SDK

Already installed above, but if needed:

npm install cloudinary next-cloudinary
12. Install React Query Devtools
npm install @tanstack/react-query-devtools
13. Create Initial Folder Structure
mkdir -p src/components
mkdir -p src/lib
mkdir -p src/services
mkdir -p src/hooks
mkdir -p src/types
mkdir -p src/constants
mkdir -p src/config
mkdir -p src/providers
mkdir -p src/actions
mkdir -p src/utils
mkdir -p src/store
mkdir -p src/features
mkdir -p src/validators
14. Create Feature Modules
mkdir -p src/features/auth

mkdir -p src/features/properties

mkdir -p src/features/vendors

mkdir -p src/features/dashboard

mkdir -p src/features/cart

mkdir -p src/features/wishlist

mkdir -p src/features/enquiries

mkdir -p src/features/site-visits

mkdir -p src/features/payments

mkdir -p src/features/notifications

mkdir -p src/features/search

mkdir -p src/features/admin
15. Create Shared Component Folders
mkdir -p src/components/layout

mkdir -p src/components/ui

mkdir -p src/components/forms

mkdir -p src/components/maps

mkdir -p src/components/property

mkdir -p src/components/vendor

mkdir -p src/components/dashboard

mkdir -p src/components/admin
16. Create Utility Folders
mkdir -p src/lib/supabase

mkdir -p src/lib/cloudinary

mkdir -p src/lib/auth

mkdir -p src/lib/utils

mkdir -p src/lib/validations
17. Install Git Hooks
npx husky init
18. Format the Project
npm run lint
npm run build
19. Run Development Server
npm run dev
20. Initial Git Commit
git add .

git commit -m "Initial project setup"
Recommended Next Packages (Install When Needed)

For authentication:

npm install jose

For image optimization:

npm install sharp

For emails:

npm install resend react-email

For maps:

npm install @react-google-maps/api

For drag-and-drop:

npm install @dnd-kit/core @dnd-kit/sortable

For rich text editing:

npm install @tiptap/react @tiptap/starter-kit

For charts:

npm install recharts

For markdown content (blogs, help center, documentation):

npm install next-mdx-remote