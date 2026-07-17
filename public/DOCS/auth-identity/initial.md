PlotHub Authentication & Identity Management
Enterprise Authentication, Identity & Onboarding Specification

Version: 1.0
Module: Authentication, Identity & User Onboarding

1. Overview

Authentication within PlotHub is not simply about creating an account.

It is the beginning of establishing digital trust.

Every user who joins the platform should become part of a verified ecosystem where their identity, role, organization, permissions, and activities are managed securely.

Unlike traditional marketplaces, PlotHub must support multiple types of users, organizations, and professional entities, each with different onboarding journeys and permissions.

The authentication system should therefore be designed around Identity → Workspace → Role → Permissions, rather than simply User → Account.

2. Authentication Principles

The authentication experience should be:

Simple
Fast
Secure
Professional
Mobile Friendly
Enterprise Ready

Every user should understand exactly:

Who they are
Why they are joining
What they can do
What happens next
3. Identity Model

Every person has one identity.

An identity may belong to one or multiple organizations.

Example:

John Doe

↓

Buyer

↓

Land Investor

↓

Workspace Member

↓

ABC Properties Ltd

↓

Sales Manager

↓

Administrator

A user should never create multiple accounts simply because they belong to multiple organizations.

Instead:

Identity

↓

Workspace Membership

↓

Role

↓

Permissions
4. User Categories

PlotHub serves several classes of users.

Buyers

These users primarily consume marketplace services.

Categories include:

Individual Buyer

A person looking to purchase land.

Examples:

First-time buyers
Families
Home builders
Farmers
Investors
Diaspora Buyer

Lives abroad.

Usually cannot visit immediately.

Needs:

Virtual Tours
Document Verification
Trusted Communication
Remote Reservations
Corporate Buyer

Companies purchasing land.

Examples:

Developers
NGOs
Schools
Churches
Manufacturers
Investment Groups

Investment clubs.

SACCOs.

Chamas.

Joint ventures.

Government Buyer

Government agencies.

County Governments.

National agencies.

Vendors

The people selling land.

Individual Seller

Private land owner.

Usually selling one or several properties.

Land Company

Large organizations.

Hundreds of properties.

Sales teams.

Branches.

Marketing departments.

Real Estate Agency

Lists properties for clients.

May not own inventory.

Property Developer

Selling estates.

Projects.

Communities.

Master plans.

Broker / Agent

Independent.

Represents owners.

Bank

Selling repossessed land.

Investment Company

Land investment firms.

Government Agency

Public land.

Government projects.

Professional Service Providers (Future)

These users support transactions rather than buying or selling.

Examples:

Surveyors

Lawyers

Valuers

Architects

Engineers

Financial Advisors

Mortgage Officers

Conveyancing Specialists

Site Inspectors

Internal Users

PlotHub Staff.

Support

Finance

Operations

Moderation

Verification

Marketing

Engineering

Super Administration

5. Authentication Methods

Supported authentication providers:

Email + Password

Primary method.

Google

Recommended.

Apple

Future.

Microsoft

Enterprise organizations.

Phone Number (OTP)

Useful in mobile-first markets.

Magic Link

Optional.

Multi-Factor Authentication (Future)

For vendors.

Enterprise organizations.

Admins.

6. Registration Flow

Instead of asking for many details immediately,

registration should be progressive.

Step 1

Choose account type.

I want to:

○ Buy Land

○ Sell Land

○ Both Buy and Sell
Step 2

Choose identity category.

Buyer sees:

Individual

Diaspora

Company

Investment Group

Government

Vendor sees:

Individual Seller

Land Company

Developer

Real Estate Agency

Broker

Investment Firm

Government
Step 3

Authentication

Email

Password

Confirm Password

Accept Terms

Accept Privacy Policy

Step 4

Verify Email

OTP.

Step 5

Complete Basic Profile

Name

Photo

Phone

Country

Preferred Language

Time Zone

Account is created.

7. Workspace Creation

Only vendors create workspaces during onboarding.

Examples:

ABC Properties Ltd

↓

Workspace Created

↓

Owner Assigned

↓

Branding

↓

Business Information

↓

Ready

Individuals can also have workspaces.

8. Vendor Onboarding

Vendor onboarding is significantly more detailed than buyer onboarding.

Company Information

Business Name

Registration Number

Tax Number

Industry

Description

Website

Social Media

Business Email

Business Phone

Branding

Logo

Cover Image

Brand Colors

Office Photos

Office Information

Country

County

City

Address

Coordinates

Business Hours

Verification Documents

Certificate of Incorporation

Business License

Tax Certificate

Director Identification

Agency License

Any regulatory certifications

Sales Information

Number of Agents

Branches

Expected Listings

Monthly Sales Volume

Preferred Currency

Workspace Setup

Invite team members.

Assign roles.

Vendor onboarding complete.

Verification begins.

9. Buyer Onboarding

Much shorter.

Profile.

Phone.

Preferences.

Budget.

Interested Locations.

Preferred Property Types.

Investment Goals.

Wishlist starts empty.

10. Verification Journey

Trust is central to the platform.

Verification levels should be visible throughout the application.

Level 1 – Email Verified

Basic account security.

Level 2 – Phone Verified

Confirms reachable contact.

Level 3 – Identity Verified

Government-issued identification checked.

Level 4 – Business Verified

Legal business documents reviewed.

Level 5 – Property Verified

Listings linked to verified documentation.

Each level unlocks additional capabilities and increases buyer confidence.

11. Role-Based Access Control

Every workspace supports multiple users.

Examples:

Workspace Owner

Full control.

Administrator

Operational management.

Sales Manager

Leads and sales oversight.

Sales Agent

Property listings and enquiries.

Marketing

Campaigns and branding.

Customer Support

Support tickets and messaging.

Finance

Payments and subscriptions.

Permissions should be granular enough to enable least-privilege access.

12. Buyer Dashboard

Immediately after onboarding, buyers should land on a personalized dashboard containing:

Welcome checklist
Saved searches
Wishlist
Recent property views
Enquiries
Site visits
Notifications
Recommended properties
Profile completion progress
13. Vendor Dashboard

Immediately after onboarding, vendors should see:

Workspace setup checklist
Verification progress
Team invitations
Create first property
Upload branding
Add office information
Complete business profile
Publish first listing
Analytics overview (initially empty)

A clear onboarding progress indicator helps vendors understand the next steps.

14. Onboarding Progress

Track onboarding as milestones rather than a single form.

Buyer
Create account
Verify email
Verify phone
Complete profile
Save first property
Submit first enquiry
Vendor
Create account
Verify email
Verify phone
Create workspace
Complete company profile
Upload verification documents
Add team members (optional)
Create first property
Publish first listing
Receive verification approval
15. Security Considerations

The authentication system should include:

Secure password hashing
Email verification
Phone verification
Refresh token rotation
Session management
Device tracking
Login history
Rate limiting
Suspicious login detection
Optional MFA for privileged users
Account recovery workflows
16. Future Identity Features

As the platform grows, the identity system can expand to support:

Multiple workspace memberships
Organization switching
Single Sign-On (SSO) for enterprise customers
SCIM user provisioning
External collaborator accounts
Digital signatures
Verified professional badges
Government identity integrations
KYC/KYB services
Risk scoring for fraud prevention
17. Authentication Architecture

The long-term identity model should be centered on a single user identity that can participate in multiple organizations with different roles.

User Identity
        │
        ▼
 Authentication
        │
        ▼
   User Profile
        │
        ▼
 Workspace Membership(s)
        │
        ▼
 Assigned Role(s)
        │
        ▼
 Permissions
        │
        ▼
 Platform Features

This architecture avoids duplicate accounts, supports enterprise organizations, and provides a clean foundation for scaling from individual buyers and sellers to large property companies, government agencies, financial institutions, and global partners while maintaining a consistent and secure authentication experience.