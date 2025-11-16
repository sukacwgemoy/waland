"use client";
import React, { PropsWithChildren } from "react";
import { HeroHeader } from "@/components/smoothui/shared/hero-header";
import WhatsAppButton from "@/components/whatsapp-button";
import { usePathname } from "next/navigation";

export default function App({ children }: PropsWithChildren) {
  const pathname = usePathname();
  return (
    <div className="flex min-h-dvh flex-col">
      {pathname !== "/" && <HeroHeader />}
      <main className={pathname !== "/" ? "container flex-1 pt-20" : "flex-1"}>
        {children}
      </main>
      <footer className="container border-t border-t-secondary/60 py-3 text-center">
        <p className="text-xs text-muted-foreground">
          &copy; 2025 CS AI By ZeroDev
        </p>
      </footer>
      <WhatsAppButton />
    </div>
  );
}
