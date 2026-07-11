"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

import { Button } from "@/components/ui/Button";
import type { NavigationItem } from "@/types";

const mobileMenuTransitionMs = 760;

export function MobileNav({ navigation }: { navigation: NavigationItem[] }) {
  const [open, setOpen] = useState(false);
  const [menuMounted, setMenuMounted] = useState(false);

  useEffect(() => {
    if (!menuMounted) {
      return;
    }

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [menuMounted]);

  useEffect(() => {
    if (open || !menuMounted) {
      return;
    }

    const timeout = window.setTimeout(
      () => setMenuMounted(false),
      mobileMenuTransitionMs,
    );

    return () => window.clearTimeout(timeout);
  }, [menuMounted, open]);

  function openMenu() {
    setMenuMounted(true);
    setOpen(true);
  }

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
        onClick={open ? closeMenu : openMenu}
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
        aria-hidden={!open}
        className={`fixed inset-0 z-[70] flex h-dvh transform-gpu flex-col overflow-hidden bg-brand-ivory p-4 transition-[clip-path,opacity,transform] duration-[760ms] ease-[cubic-bezier(.77,0,.175,1)] sm:p-6 ${
          open
            ? "pointer-events-auto translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-3 opacity-0"
        } ${menuMounted ? "visible" : "invisible"}`}
        id="mobile-navigation"
        style={{
          clipPath: open ? "inset(0 0 0 0)" : "inset(0 0 100% 0)",
        }}
      >
        <div
          className={`flex h-full min-h-0 flex-col transition-[opacity,transform] duration-[520ms] ease-[cubic-bezier(.22,1,.36,1)] ${
            open ? "translate-y-0 opacity-100 delay-150" : "-translate-y-6 opacity-0"
          }`}
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
              {navigation.map((item, index) => (
                <a
                  className={`group flex min-h-14 items-center justify-center rounded-lg bg-brand-charcoal/5 px-4 py-3 text-center text-lg font-semibold text-brand-charcoal uppercase transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:bg-brand-red hover:text-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-gold sm:min-h-16 sm:text-xl ${
                    open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
                  }`}
                  href={item.href}
                  key={item.href}
                  onClick={closeMenu}
                  style={{
                    transitionDelay: open ? `${180 + index * 34}ms` : "0ms",
                  }}
                >
                  <span>{item.label}</span>
                </a>
              ))}
            </div>
            <Button
              className={`mt-6 min-h-13 w-full !bg-brand-red px-5 !text-white shadow-[0_16px_38px_rgba(118,15,21,.18)] transition duration-500 ease-[cubic-bezier(.22,1,.36,1)] hover:!bg-brand-red-dark sm:mx-auto sm:max-w-sm ${
                open ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
              }`}
              href="#contact"
              onClick={closeMenu}
              style={{
                transitionDelay: open
                  ? `${210 + navigation.length * 34}ms`
                  : "0ms",
              }}
            >
              Book me to speak
            </Button>
          </nav>
        </div>
      </div>
    </div>
  );
}
