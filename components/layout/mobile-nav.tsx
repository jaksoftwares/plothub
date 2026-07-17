"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { 
  Menu, 
  Map as MapIcon, 
  Building2, 
  Store, 
  Tag, 
  BookOpen, 
  LifeBuoy, 
  User, 
  UserPlus, 
  Briefcase,
  ChevronRight
} from "lucide-react";
import { Logo } from "@/components/ui/logo";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

const platformLinks = [
  { name: "Browse Properties", href: "/marketplace", icon: Building2 },
  { name: "Interactive Map", href: "/map", icon: MapIcon },
  { name: "Vendors Directory", href: "/vendors", icon: Store },
];

const resourceLinks = [
  { name: "Pricing", href: "/pricing", icon: Tag },
  { name: "Resources", href: "/docs", icon: BookOpen },
  { name: "Support", href: "/support", icon: LifeBuoy },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger render={<Button variant="ghost" size="icon" className="md:hidden" />}>
        <Menu className="h-6 w-6" />
        <span className="sr-only">Toggle Menu</span>
      </SheetTrigger>
      
      <SheetContent side="left" className="w-[320px] sm:w-[400px] border-r border-border/50 bg-background/80 backdrop-blur-xl p-0 flex flex-col h-full">
        <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        
        {/* Header Region */}
        <div className="flex items-center justify-between px-6 py-6 border-b border-border/20">
          <Link href="/" onClick={() => setOpen(false)} className="transition-opacity hover:opacity-80">
            <Logo variant="horizontal" theme="primary" size={24} />
          </Link>
        </div>

        {/* Scrollable Links Region */}
        <div className="flex-1 overflow-y-auto py-6 px-4 flex flex-col gap-8">
          
          {/* Platform Group */}
          <div className="flex flex-col gap-2">
            <span className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-2">
              Platform
            </span>
            {platformLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground hover:bg-muted/50 hover:text-primary hover:translate-x-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-5 w-5 transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                    <span className="text-base">{link.name}</span>
                  </div>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    isActive && "opacity-100 translate-x-0 text-primary"
                  )} />
                </Link>
              );
            })}
          </div>

          {/* Resources Group */}
          <div className="flex flex-col gap-2">
            <span className="px-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground/80 mb-2">
              Resources
            </span>
            {resourceLinks.map((link) => {
              const isActive = pathname === link.href;
              const Icon = link.icon;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-300 group",
                    isActive 
                      ? "bg-primary/10 text-primary font-medium" 
                      : "text-foreground hover:bg-muted/50 hover:text-primary hover:translate-x-1"
                  )}
                >
                  <div className="flex items-center gap-3">
                    <Icon className={cn("h-5 w-5 transition-colors duration-300", isActive ? "text-primary" : "text-muted-foreground group-hover:text-primary")} />
                    <span className="text-base">{link.name}</span>
                  </div>
                  <ChevronRight className={cn(
                    "h-4 w-4 transition-all duration-300 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0",
                    isActive && "opacity-100 translate-x-0 text-primary"
                  )} />
                </Link>
              );
            })}
          </div>

        </div>

        {/* Footer/CTA Region */}
        <div className="border-t border-border/20 p-6 flex flex-col gap-4 bg-background/50">
          <div className="grid grid-cols-2 gap-3">
            <Button variant="outline" className="w-full justify-center gap-2 rounded-xl border-border/50 bg-background/50 backdrop-blur-sm" render={<Link href="/login" onClick={() => setOpen(false)} />}>
              <User className="h-4 w-4" />
              Log In
            </Button>
            <Button className="w-full justify-center gap-2 rounded-xl bg-primary text-primary-foreground hover:bg-primary/90" render={<Link href="/register" onClick={() => setOpen(false)} />}>
              <UserPlus className="h-4 w-4" />
              Register
            </Button>
          </div>
          <Button variant="secondary" className="w-full justify-center gap-2 rounded-xl bg-secondary/50 hover:bg-secondary/80 backdrop-blur-sm border border-secondary/20" render={<Link href="/vendor/add-property" onClick={() => setOpen(false)} />}>
            <Briefcase className="h-4 w-4" />
            Become a Vendor
          </Button>
        </div>
        
      </SheetContent>
    </Sheet>
  );
}
