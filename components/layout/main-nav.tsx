"use client";

import React from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

export function MainNav() {
  return (
    <NavigationMenu className="hidden md:flex">
      <NavigationMenuList>
        {/* Browse Mega-Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 font-medium">
            Browse
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[800px] grid-cols-4 gap-4 p-6 bg-background">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Explore</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/marketplace" className="hover:text-primary transition-colors">All Properties</Link>
                  <Link href="/marketplace?featured=true" className="hover:text-primary transition-colors">Featured Properties</Link>
                  <Link href="/marketplace?sort=new" className="hover:text-primary transition-colors">New Listings</Link>
                  <Link href="/marketplace?sort=recent" className="hover:text-primary transition-colors">Recently Added</Link>
                  <Link href="/marketplace?status=open" className="hover:text-primary transition-colors">Open Opportunities</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Categories</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/marketplace?category=residential" className="hover:text-primary transition-colors">Residential</Link>
                  <Link href="/marketplace?category=commercial" className="hover:text-primary transition-colors">Commercial</Link>
                  <Link href="/marketplace?category=agricultural" className="hover:text-primary transition-colors">Agricultural</Link>
                  <Link href="/marketplace?category=industrial" className="hover:text-primary transition-colors">Industrial</Link>
                  <Link href="/marketplace?category=mixed-use" className="hover:text-primary transition-colors">Mixed Use</Link>
                  <Link href="/marketplace?category=investment" className="hover:text-primary transition-colors">Investment Land</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">By Size</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/marketplace?size=under-eighth" className="hover:text-primary transition-colors">Under 1/8 Acre</Link>
                  <Link href="/marketplace?size=eighth" className="hover:text-primary transition-colors">1/8 Acre</Link>
                  <Link href="/marketplace?size=quarter" className="hover:text-primary transition-colors">Quarter Acre</Link>
                  <Link href="/marketplace?size=half" className="hover:text-primary transition-colors">Half Acre</Link>
                  <Link href="/marketplace?size=one" className="hover:text-primary transition-colors">One Acre</Link>
                  <Link href="/marketplace?size=large" className="hover:text-primary transition-colors">Large Parcels</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">By Budget</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/marketplace?budget=under-5k" className="hover:text-primary transition-colors">Under $5,000</Link>
                  <Link href="/marketplace?budget=5k-20k" className="hover:text-primary transition-colors">$5k–20k</Link>
                  <Link href="/marketplace?budget=20k-100k" className="hover:text-primary transition-colors">$20k–100k</Link>
                  <Link href="/marketplace?budget=premium" className="hover:text-primary transition-colors">Premium</Link>
                  <Link href="/marketplace?budget=luxury" className="hover:text-primary transition-colors">Luxury</Link>
                </div>
              </div>
            </div>
            <div className="border-t border-border bg-muted/20 p-4">
              <div className="flex gap-6 text-sm font-medium text-foreground">
                <span className="text-muted-foreground ml-2">Quick Actions:</span>
                <Link href="/properties/compare" className="hover:text-primary transition-colors">Compare Properties</Link>
                <Link href="/dashboard/wishlist" className="hover:text-primary transition-colors">Wishlist</Link>
                <Link href="/dashboard/searches" className="hover:text-primary transition-colors">Saved Searches</Link>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        {/* Standard Links */}
        <NavigationMenuItem>
          <Link href="/map" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-muted/50 font-medium")}>
              Map
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>
        
        <NavigationMenuItem>
          <Link href="/vendors" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-muted/50 font-medium")}>
              Vendors
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

        {/* Resources Mega-Menu */}
        <NavigationMenuItem>
          <NavigationMenuTrigger className="bg-transparent hover:bg-muted/50 font-medium">
            Resources
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <div className="grid w-[600px] grid-cols-3 gap-4 p-6 bg-background">
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Learn</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/docs/buying" className="hover:text-primary transition-colors">Buying Guide</Link>
                  <Link href="/docs/selling" className="hover:text-primary transition-colors">Selling Guide</Link>
                  <Link href="/docs/investment" className="hover:text-primary transition-colors">Investment Guide</Link>
                  <Link href="/docs/legal" className="hover:text-primary transition-colors">Legal Guide</Link>
                  <Link href="/faq" className="hover:text-primary transition-colors">FAQs</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Company</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/about" className="hover:text-primary transition-colors">About</Link>
                  <Link href="/blog" className="hover:text-primary transition-colors">Blog</Link>
                  <Link href="/news" className="hover:text-primary transition-colors">News</Link>
                  <Link href="/careers" className="hover:text-primary transition-colors">Careers</Link>
                  <Link href="/press" className="hover:text-primary transition-colors">Press</Link>
                </div>
              </div>
              <div className="space-y-4">
                <h4 className="font-semibold text-primary">Support</h4>
                <div className="flex flex-col space-y-2.5 text-sm text-muted-foreground">
                  <Link href="/support" className="hover:text-primary transition-colors">Help Center</Link>
                  <Link href="/contact" className="hover:text-primary transition-colors">Contact</Link>
                  <Link href="/support/tickets" className="hover:text-primary transition-colors">Support</Link>
                  <Link href="/docs" className="hover:text-primary transition-colors">Documentation</Link>
                </div>
              </div>
            </div>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <Link href="/pricing" legacyBehavior passHref>
            <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent hover:bg-muted/50 font-medium")}>
              Pricing
            </NavigationMenuLink>
          </Link>
        </NavigationMenuItem>

      </NavigationMenuList>
    </NavigationMenu>
  );
}
