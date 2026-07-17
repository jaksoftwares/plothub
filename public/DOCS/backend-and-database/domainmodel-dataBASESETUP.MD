Start by designing the Domain Model.

One mistake I see in many startups is they begin with tables like:

users
properties
vendors
orders

Six months later they're rewriting everything because the business has evolved.

Instead, design the Business Domain first, then derive the database.

Enterprise Domain Model

PlotHub is not one application.

It is multiple business systems.

Authentication Domain

Identity Domain

Organization Domain

Workspace Domain

Vendor Domain

Property Domain

Commerce Domain

Customer Domain

Communication Domain

CRM Domain

Reservations Domain

Site Visits Domain

Media Domain

Documents Domain

Payments Domain

Analytics Domain

Reviews Domain

Notifications Domain

Support Domain

Administration Domain

CMS Domain

Settings Domain

Audit Domain

That is already over 20 business domains.

Each domain owns its own data.

Multi-Tenant First

The biggest architectural decision is this:

Every company gets its own workspace.

Not just a user account.

PlotHub
    │
    ├── Workspace A
    │      ├── Staff
    │      ├── Properties
    │      ├── Customers
    │      ├── Documents
    │      └── Analytics
    │
    ├── Workspace B
    │
    ├── Workspace C

Everything belongs to a Workspace.

Not a User.

This is how Shopify, Linear, Slack, GitHub, and Notion are designed.

Domain Breakdown
Identity

Contains only identity.

users

profiles

sessions

auth providers

verification

devices

user preferences
Organization
workspaces

workspace members

workspace invitations

roles

permissions

teams
Vendor
vendor profiles

business information

branding

business licenses

verification

social links

contact information

office locations
Marketplace
properties

property types

property status

pricing

amenities

features

categories

locations

coordinates

availability

visibility
Inventory

One property.

Many assets.

property

↓

images

videos

documents

payment plans

utilities

nearby places

pricing history

status history

ownership history
CRM
customers

customer notes

customer tags

lead status

lead source

activities

follow ups

tasks
Communication
conversations

participants

messages

attachments

read receipts

typing

notifications
Commerce
cart

wishlist

reservations

quotes

checkout

payments

refunds
Visits
site visits

availability

agents

feedback

visit reports

check-ins
Support
tickets

categories

responses

attachments

status

priority
Entity Relationships

Instead of thinking in tables.

Think relationships.

Workspace

↓

Members

↓

Vendor Profile

↓

Properties

↓

Media

↓

Documents

↓

Enquiries

↓

Customers

↓

Reservations

↓

Visits

↓

Sales
SQL Modules

I would separate migrations into business modules.

001_identity.sql

002_workspaces.sql

003_roles.sql

004_permissions.sql

005_vendor.sql

006_locations.sql

007_properties.sql

008_media.sql

009_documents.sql

010_customers.sql

011_crm.sql

012_messages.sql

013_notifications.sql

014_reviews.sql

015_wishlist.sql

016_cart.sql

017_reservations.sql

018_site_visits.sql

019_payments.sql

020_support.sql

021_cms.sql

022_settings.sql

023_audit.sql

This makes the project maintainable.

Database Philosophy

Every table should answer ONE business question.

Never mix concerns.

Bad

properties

owner_name

owner_phone

vendor_logo

payment_status

wishlist_count

Good

properties

vendors

vendor_profiles

payments

wishlists


Normalize.

UUID Everywhere

Never use integers.

id UUID PRIMARY KEY

Every entity.

Timestamps

Every table.

created_at

updated_at

deleted_at

Soft delete.

Status Tables

Never use booleans.

Instead of

published true

Use

status

draft

review

published

reserved

sold

archived

Future proof.

Enumerations

Use PostgreSQL ENUMs only for values that almost never change, such as account type, workspace role, property status, enquiry status, reservation status, payment status, and notification channel. Business categories that may evolve—like property categories or amenities—should live in lookup tables instead.

Media

Never store media directly on the property record.

Model it as its own entity.

Property

↓

Property Media

↓

Cloudinary

One property.

Unlimited media.

Documents

Same.

Property

↓

Property Documents

Unlimited.

Pricing

Never store one price.

current_price

price history

payment plans

discounts
Property Address

Don't flatten it.

Country

↓

Region

↓

County

↓

Sub County

↓

Ward

↓

Area

↓

Estate

↓

Coordinates

Future global support.

GIS Ready

Store

latitude

longitude

point

polygon

boundary

From day one.

Property Features

Don't make

has_water

has_power

has_school


Instead

property

↓

property_features

↓

feature

Unlimited features.

Property Lifecycle

Every property changes.

Track history.

draft

↓

review

↓

published

↓

reserved

↓

sold

↓

archived

History preserved.

Audit Logging

Every important action.

User

↓

Action

↓

Old Value

↓

New Value

↓

Timestamp

↓

IP

↓

Device

Enterprise requirement.

Notifications

One table.

Multiple channels.

Email

SMS

Push

In App

WhatsApp
Reviews

Separate.

Vendor Reviews

Property Reviews

Visit Reviews
Search

Search should not query directly from the main transactional tables once you scale. Keep the relational database as the source of truth and synchronize searchable documents into a dedicated search index (for the MVP, PostgreSQL full-text search may be sufficient; later you can introduce OpenSearch or Elasticsearch).

Analytics

Never compute expensive metrics on every request.

Instead, maintain dedicated analytics tables or materialized views for aggregates such as property views, enquiries, wishlist additions, reservations, conversions, and vendor performance.

My Recommendation Before Writing Any SQL

Given the scope we've outlined, I would not jump straight into a 2,000-line SQL schema.

A professional database design process should be:

Business Domain Architecture (what we've started here).
Entity Relationship Diagram (ERD) with approximately 60–100 entities and their relationships.
Logical Data Model (attributes, keys, cardinality, constraints).
Physical SQL Schema (PostgreSQL/Supabase DDL, indexes, row-level security, triggers, and policies).

That sequence dramatically reduces redesign later.

For a platform of this ambition, I would expect the initial enterprise schema to include roughly:

70–90 core tables covering the business domains.
15–20 PostgreSQL enums for stable state values.
100+ foreign-key relationships with carefully designed cascade rules.
Comprehensive indexes, unique constraints, and composite keys.
Supabase Row Level Security (RLS) policies built around workspace_id for tenant isolation.
Audit triggers on critical business entities.
Views and materialized views for reporting and dashboards.