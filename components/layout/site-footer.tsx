import React from "react";
import Link from "next/link";
import { Logo } from "@/components/ui/logo";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function SiteFooter() {
  return (
    <footer className="bg-[#173A2E] pt-16 pb-8 mt-auto">
      <div className="mx-auto max-w-[1440px] px-6">
        
        {/* Top CTA & Newsletter Strip */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center border-b border-white/10 pb-12 mb-12 gap-8">
          <div className="max-w-xl space-y-4">
            <h3 className="text-2xl font-bold text-white">Ready to find your next investment?</h3>
            <p className="text-[#DCEEE7] text-lg">Explore verified land listings from trusted vendors or join our network to scale your real estate business.</p>
            <div className="flex gap-4 pt-2">
              <Link href="/marketplace">
                <Button className="bg-white text-[#173A2E] hover:bg-white/90">Browse Properties</Button>
              </Link>
              <Link href="/vendor/add-property">
                <Button variant="outline" className="border-white/20 text-white hover:bg-white/10 hover:text-white bg-transparent">Become a Vendor</Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-auto max-w-md bg-[#1F4D3D] p-6 rounded-xl border border-white/5">
            <h4 className="font-semibold text-white mb-2">Stay Updated</h4>
            <p className="text-[#DCEEE7] text-sm mb-4">Receive new listings, market insights and product updates.</p>
            <form className="flex gap-2">
              <Input 
                type="email" 
                placeholder="Email address" 
                className="bg-black/20 border-white/10 text-white placeholder:text-[#DCEEE7]/50"
              />
              <Button type="button" className="bg-[#C48A2C] text-white hover:bg-[#C48A2C]/90">Subscribe</Button>
            </form>
          </div>
        </div>

        {/* 6-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 text-sm">
          {/* Column 1: Brand */}
          <div className="lg:col-span-2 space-y-6">
            <Link href="/">
              <Logo variant="horizontal" theme="white" size={32} />
            </Link>
            <p className="text-[#DCEEE7] max-w-xs leading-relaxed">
              PlotHub is a trusted digital platform connecting buyers and vendors through transparent land discovery and modern property commerce.
            </p>
          </div>

          {/* Column 2: Marketplace */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Marketplace</h4>
            <div className="flex flex-col gap-3 text-[#DCEEE7]/80">
              <Link href="/marketplace" className="hover:text-white transition-colors">Browse Properties</Link>
              <Link href="/map" className="hover:text-white transition-colors">Interactive Map</Link>
              <Link href="/marketplace?featured=true" className="hover:text-white transition-colors">Featured Listings</Link>
              <Link href="/vendors" className="hover:text-white transition-colors">Verified Vendors</Link>
              <Link href="/marketplace?category=investment" className="hover:text-white transition-colors">Investment Opportunities</Link>
              <Link href="/properties/compare" className="hover:text-white transition-colors">Compare Properties</Link>
            </div>
          </div>

          {/* Column 3: Company */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Company</h4>
            <div className="flex flex-col gap-3 text-[#DCEEE7]/80">
              <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              <Link href="/careers" className="hover:text-white transition-colors">Careers</Link>
              <Link href="/blog" className="hover:text-white transition-colors">Blog</Link>
              <Link href="/news" className="hover:text-white transition-colors">News</Link>
              <Link href="/press" className="hover:text-white transition-colors">Press</Link>
              <Link href="/brand" className="hover:text-white transition-colors">Brand Assets</Link>
            </div>
          </div>

          {/* Column 4: Resources */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Resources</h4>
            <div className="flex flex-col gap-3 text-[#DCEEE7]/80">
              <Link href="/docs/buying" className="hover:text-white transition-colors">Buying Guide</Link>
              <Link href="/docs/selling" className="hover:text-white transition-colors">Selling Guide</Link>
              <Link href="/docs/legal" className="hover:text-white transition-colors">Legal Guide</Link>
              <Link href="/faq" className="hover:text-white transition-colors">FAQs</Link>
              <Link href="/docs" className="hover:text-white transition-colors">Documentation</Link>
            </div>
          </div>

          {/* Column 5: Support */}
          <div className="space-y-4">
            <h4 className="font-semibold text-white">Support</h4>
            <div className="flex flex-col gap-3 text-[#DCEEE7]/80">
              <Link href="/support" className="hover:text-white transition-colors">Help Center</Link>
              <Link href="/contact" className="hover:text-white transition-colors">Contact Support</Link>
              <Link href="/support/tickets" className="hover:text-white transition-colors">Submit Ticket</Link>
              <Link href="/support/trust" className="hover:text-white transition-colors">Trust & Safety</Link>
            </div>
          </div>
        </div>

        {/* Bottom Strip */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#DCEEE7]/60">
          <p>© {new Date().getFullYear()} PlotHub. Built for trusted land commerce.</p>
          <div className="flex gap-6 flex-wrap">
            <Link href="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/cookies" className="hover:text-white transition-colors">Cookie Policy</Link>
            <Link href="/status" className="hover:text-white transition-colors">Platform Status</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
