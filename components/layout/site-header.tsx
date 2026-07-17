"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Search, Heart } from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import { MainNav } from "@/components/layout/main-nav";
import { MobileNav } from "@/components/layout/mobile-nav";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

export function SiteHeader() {
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6">
        
        {/* Left Section */}
        <div className="flex items-center gap-6">
          <MobileNav />
          <Link href="/" className="hidden md:block">
            <Logo variant="horizontal" theme="primary" size={24} />
          </Link>
          <MainNav />
        </div>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">
          
          {/* Search Modal */}
          <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
            <DialogTrigger render={<Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary" />}>
              <Search className="h-5 w-5" />
              <span className="sr-only">Search</span>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden bg-background">
              <DialogTitle className="sr-only">Search Command Palette</DialogTitle>
              <div className="flex items-center border-b px-4">
                <Search className="mr-2 h-5 w-5 shrink-0 opacity-50" />
                <Input 
                  placeholder="Search properties, vendors, or locations..." 
                  className="flex h-14 w-full rounded-md bg-transparent py-3 text-base outline-none border-none focus-visible:ring-0 placeholder:text-muted-foreground shadow-none"
                />
              </div>
              <div className="p-4 py-8 text-center text-sm text-muted-foreground">
                No recent searches. Start typing to explore the platform.
              </div>
            </DialogContent>
          </Dialog>

          {/* Wishlist */}
          <Link href="/dashboard/wishlist" className="hidden sm:block">
            <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-primary">
              <Heart className="h-5 w-5" />
              <span className="sr-only">Wishlist</span>
            </Button>
          </Link>

          {/* Login */}
          <Link href="/login" className="hidden sm:block text-sm font-medium text-foreground hover:text-primary transition-colors px-4">
            Login
          </Link>

          {/* Get Started Dropdown */}
          <DropdownMenu>
            <DropdownMenuTrigger render={<Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6 font-semibold" />}>
              Get Started
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-[200px]">
              <DropdownMenuItem render={<Link href="/register" className="cursor-pointer" />}>
                I am a Buyer
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/vendor/add-property" className="cursor-pointer" />}>
                I am a Vendor
              </DropdownMenuItem>
              <DropdownMenuItem render={<Link href="/contact" className="cursor-pointer" />}>
                Enterprise Solutions
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

        </div>
      </div>
    </header>
  );
}
