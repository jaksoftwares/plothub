MVP Goal

PlotHub

The easiest and most trusted way to discover, showcase and enquire about land and plots.

The MVP should look like a production-ready SaaS product, even if some enterprise features are simplified internally.

Technology Stack
Framework
─────────
Next.js 15 (App Router)

Language
────────
TypeScript

Styling
────────
Tailwind CSS v4

UI
──
shadcn/ui

Database
────────
Supabase PostgreSQL

Authentication
──────────────
Supabase Auth

Storage
───────
Cloudinary

ORM
───
Drizzle ORM

Validation
──────────
Zod

Forms
─────
React Hook Form

Maps
────
Google Maps

Email
─────
Resend

Notifications
─────────────
Sonner

State
─────
TanStack Query

Icons
─────
Lucide React

Charts
──────
Recharts

Deployment
──────────
Vercel
Production Folder Structure
plothub/

│
├── app/
│
├── (marketing)/
│   ├── page.tsx
│   ├── about/
│   ├── pricing/
│   ├── contact/
│   ├── vendors/
│   ├── faq/
│   ├── blog/
│   ├── careers/
│   ├── privacy/
│   ├── terms/
│   ├── cookies/
│   └── support/
│
├── (auth)/
│   ├── login/
│   ├── register/
│   ├── forgot-password/
│   ├── reset-password/
│   ├── verify-email/
│   ├── onboarding/
│   └── complete-profile/
│
├── marketplace/
│
├── properties/
│   ├── page.tsx
│   ├── [slug]/
│   ├── compare/
│   ├── wishlist/
│   ├── cart/
│   ├── checkout/
│   ├── reservations/
│   └── site-visits/
│
├── vendor/
│
├── dashboard/
│
├── admin/
│
├── api/
│
└── sitemap.xml
Vendor Workspace

Think Shopify Dashboard.

vendor/

dashboard

properties

add-property

drafts

published

sold

enquiries

customers

site-visits

calendar

analytics

marketing

documents

payments

notifications

team

settings

billing

profile
Customer Dashboard
dashboard/

overview

wishlist

cart

reservations

site-visits

messages

saved-searches

notifications

profile

settings
Admin
admin/

dashboard

vendors

buyers

properties

reviews

approvals

site-visits

support

tickets

payments

analytics

cms

blogs

categories

reports

settings
Shared Components
components/

layout/

navigation/

cards/

buttons/

forms/

dialogs/

tables/

charts/

maps/

property/

vendor/

dashboard/

admin/

search/

filters/

marketing/

ui/
Libraries
lib/

auth/

db/

supabase/

cloudinary/

email/

maps/

validation/

permissions/

helpers/

constants/

utils/
Services
services/

property/

vendor/

wishlist/

cart/

enquiry/

siteVisit/

notification/

payment/

search/

analytics/
Types
types/

property.ts

vendor.ts

user.ts

wishlist.ts

cart.ts

payment.ts

notification.ts

siteVisit.ts
Hooks
hooks/

useProperties()

useVendor()

useWishlist()

useCart()

useSiteVisits()

useSearch()

useNotifications()
Public Website
Home

Sections

Hero

Search

Featured Properties

Verified Vendors

Recently Added

Popular Locations

How It Works

Why PlotHub

Testimonials

Statistics

CTA

Footer

Browse Properties

Sections

Search Bar

Map

Filters

Grid/List Toggle

Property Cards

Pagination

Property Details

This page is the most important.

Sections

Gallery

Videos

Map

Overview

Price

Property Details

Vendor

Amenities

Nearby Places

Payment Plans

Documents

FAQs

Reviews

Related Properties

CTA

Vendors

Directory.

Every vendor has

Logo

Description

Properties

Contact

Ratings

Verification Badge

About

Mission

Vision

Our Story

Trust

Security

Why PlotHub

Pricing

Vendor Plans

Starter

Professional

Enterprise

Comparison

FAQs

Contact

Support

Sales

General enquiries

Contact form

Office

Map

Authentication

Register

Login

Forgot Password

Reset Password

Verify Email

Complete Profile

Choose Account Type

Vendor Dashboard
Overview

Statistics

Revenue

Properties

Leads

Recent Enquiries

Site Visits

Tasks

Notifications

Properties

Draft

Published

Reserved

Sold

Archived

Add Property

Large wizard.

Step 1

Basic Details

Step 2

Location

Step 3

Pricing

Step 4

Features

Step 5

Media

Step 6

Documents

Step 7

SEO

Step 8

Publish

Property Details

Images

Gallery

Videos

Analytics

Views

Wishlist Count

Enquiries

Visits

Status

History

Enquiries

Lead table

Status

Notes

Assign

Reply

Site Visits

Calendar

Upcoming

Completed

Cancelled

Customers

CRM Lite

Customer Profile

History

Notes

Interested Properties

Analytics

Views

Searches

Clicks

Conversions

Popular Listings

Heatmaps (future)

Marketing

Featured Listings

Campaigns

Promotions

Coupons

Billing

Subscription

Invoices

Payments

Upgrade

Settings

Company

Logo

Contacts

Branding

Business Hours

Notification Preferences

Buyer Dashboard

Overview

Wishlist

Saved Searches

Reservations

Site Visits

Messages

Notifications

Settings

Profile

Admin

Dashboard

Vendor Verification

Property Moderation

Analytics

CMS

Support

Reports

Users

Roles

Audit

Initial Database Modules
Users

Profiles

Vendors

Properties

PropertyMedia

PropertyDocuments

PropertyFeatures

Wishlists

Cart

Reservations

Enquiries

SiteVisits

Notifications

Reviews

Categories

Locations
Navigation
Public
Home

Browse

Vendors

Pricing

About

Contact

Support
Vendor
Dashboard

Properties

Customers

Site Visits

Marketing

Analytics

Billing

Settings
Buyer
Dashboard

Wishlist

Reservations

Messages

Visits

Settings
MVP Scope (What to Build First)

To maximize learning while keeping development focused, I would prioritize these capabilities:

Marketing website with clear value proposition and vendor call-to-action.
Authentication and account creation (buyer and vendor).
Vendor workspace with property management (create, edit, publish, archive).
Public marketplace with search, filters, and property detail pages.
Buyer wishlist and enquiry flow.
Site visit request workflow.
Vendor dashboard for enquiries and visit management.
Admin panel for user, vendor, and listing moderation.

This provides a complete, demonstrable end-to-end journey:

Vendor registers → Creates a workspace → Publishes a property → Buyer discovers it → Adds it to a wishlist → Sends an enquiry → Requests a site visit → Vendor manages the lead.

One Architectural Suggestion

Although the repository is named plothub, I recommend avoiding a top-level vendor/ folder in the App Router. Instead, organize the application around roles and route groups, for example:

app/
│
├── (public)/
├── (auth)/
├── (buyer)/
├── (workspace)/
├── (admin)/
└── api/