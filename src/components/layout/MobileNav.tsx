"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/types";

export function MobileNav({ navigation }: { navigation: NavigationItem[] }) {
  const [open, setOpen] = useState(false);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="inline-flex size-11 items-center justify-center rounded-full border border-brand-gold/30 bg-white text-brand-red transition hover:bg-brand-champagne focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-gold"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        {open ? (
          <X aria-hidden="true" className="size-5" />
        ) : (
          <Menu aria-hidden="true" className="size-5" />
        )}
      </button>
      <div
        className={`absolute inset-x-0 top-full origin-top border-t border-brand-gold/15 bg-brand-ivory/98 px-5 shadow-[0_20px_50px_rgba(54,54,55,.12)] backdrop-blur-xl transition duration-300 ${
          open
            ? "visible translate-y-0 scale-y-100 opacity-100"
            : "invisible -translate-y-2 scale-y-95 opacity-0"
        }`}
        id="mobile-navigation"
      >
        <nav
          aria-label="Mobile navigation"
          className="mx-auto flex max-w-[1240px] flex-col py-5"
        >
          {navigation.map((item) => (
            <a
              className="border-b border-brand-gold/12 px-2 py-3 text-sm font-semibold text-brand-charcoal transition hover:pl-4 hover:text-brand-red"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </a>
          ))}
          <Button
            className="mt-5 w-full"
            href="#contact"
            onClick={closeMenu}
          >
            Book me to speak
          </Button>
        </nav>
      </div>
    </div>
  );
}
