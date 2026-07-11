"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/types";

export function MobileNav({ navigation }: { navigation: NavigationItem[] }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [open]);

  function closeMenu() {
    setOpen(false);
  }

  return (
    <div className="xl:hidden">
      <button
        aria-controls="mobile-navigation"
        aria-expanded={open}
        aria-label={open ? "Close navigation menu" : "Open navigation menu"}
        className="group inline-flex min-h-10 items-center gap-2 rounded-full border border-brand-gold/28 bg-white/76 px-3.5 text-brand-red shadow-[0_10px_28px_rgba(72,42,30,.06)] backdrop-blur-xl transition duration-300 hover:border-brand-gold/55 hover:bg-white focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-gold sm:min-h-11 sm:px-4"
        onClick={() => setOpen((current) => !current)}
        type="button"
      >
        <span className="text-[.78rem] font-bold tracking-[.16em] uppercase sm:text-[.82rem]">
          {open ? "Close" : "Menu"}
        </span>
        {open ? (
          <X aria-hidden="true" className="size-4.5" />
        ) : (
          <Menu aria-hidden="true" className="size-4.5" />
        )}
      </button>
      <div
        className={`fixed inset-0 z-[70] flex h-dvh flex-col bg-brand-ivory p-4 transition duration-500 ease-[cubic-bezier(.16,1,.3,1)] sm:p-6 ${
          open
            ? "visible translate-y-0 opacity-100"
            : "invisible pointer-events-none translate-y-full opacity-0"
        }`}
        id="mobile-navigation"
      >
        <div className="flex items-center justify-between">
          <a
            aria-label="The Lady Derby - back to home"
            className="relative block h-12 w-36 shrink-0 sm:h-14 sm:w-44"
            href="#home"
            onClick={closeMenu}
          >
            <Image
              alt="The Lady Derby"
              className="object-contain object-left"
              fill
              sizes="176px"
              src="/images/logo.png"
            />
          </a>
          <button
            aria-label="Close navigation menu"
            className="inline-flex min-h-10 items-center gap-2 rounded-[9px] bg-brand-red px-3 text-[.72rem] font-bold tracking-[.14em] text-white uppercase shadow-[0_14px_35px_rgba(118,15,21,.18)] transition hover:bg-brand-red-dark focus-visible:outline-3 focus-visible:outline-offset-3 focus-visible:outline-brand-gold"
            onClick={closeMenu}
            type="button"
          >
            Close
            <X aria-hidden="true" className="size-4" />
          </button>
        </div>
        <nav
          aria-label="Mobile navigation"
          className="flex min-h-0 flex-1 flex-col pt-10 sm:mx-auto sm:w-full sm:max-w-3xl sm:pt-14"
        >
          <div
            aria-hidden="true"
            className="mb-6 h-px w-full bg-brand-gold/18"
          />
          <div className="grid flex-1 content-center gap-2 overflow-y-auto md:grid-cols-2">
            {navigation.map((item) => (
              <a
                className="group flex min-h-14 items-center justify-center rounded-lg bg-brand-charcoal/5 px-4 py-3 text-center text-lg font-semibold text-brand-charcoal uppercase transition duration-300 hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:min-h-16 sm:text-xl"
                href={item.href}
                key={item.href}
                onClick={closeMenu}
              >
                <span>{item.label}</span>
              </a>
            ))}
          </div>
          <Button
            className="mt-6 min-h-13 w-full !bg-brand-red px-5 !text-white shadow-[0_16px_38px_rgba(118,15,21,.18)] hover:!bg-brand-red-dark sm:mx-auto sm:max-w-sm"
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
