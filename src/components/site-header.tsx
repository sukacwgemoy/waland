"use client";
import React, { useState } from "react";
import Link from "next/link";
import { AlignLeft, X } from "lucide-react";
import { siteConfig } from "@/config/site";
import HeaderNav from "@/components/header-nav";
import { Button } from "@/components/ui/button";
import MobileNav from "@/components/mobile-nav";
import { Icons } from "./icons";

export default function SiteHeader() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b bg-background px-2">
      <div className="container flex h-16 max-w-screen-2xl items-center justify-between">
        <div className="flex items-center space-x-3">
          <Link href="/" className="flex items-center gap-2">
            <span className="font-bold text-2xl text-foreground">CS</span>
            <span className="font-bold text-2xl text-foreground">AI</span>
            <div className="relative ml-1">
              <div className="absolute h-6 w-6 rounded-full bg-[#0ae448] opacity-20"></div>
              <svg className="relative h-6 w-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 4 L18 12 L12 20 L6 12 Z" fill="#0ae448"/>
              </svg>
            </div>
          </Link>
        </div>
        <div className="flex items-center space-x-5 md:space-x-6">
          <HeaderNav />
          <Button
            variant="ghost"
            className="p-0 text-primary hover:bg-transparent hover:text-primary md:hidden"
            onClick={() => setIsMobileOpen(!isMobileOpen)}
          >
            <>
              {isMobileOpen ? (
                <X className="size-6" />
              ) : (
                <AlignLeft className="size-6" />
              )}
              <span className="sr-only">Menu</span>
            </>
          </Button>
        </div>
      </div>
      {isMobileOpen && (
        <MobileNav onOpenChange={() => setIsMobileOpen(false)} />
      )}
    </header>
  );
}
