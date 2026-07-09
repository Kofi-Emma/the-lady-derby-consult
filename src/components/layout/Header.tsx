import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { Button } from "@/components/ui/Button";
import { mainNavigation } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/18 bg-brand-ivory/94 shadow-[0_8px_30px_rgba(54,54,55,.045)] backdrop-blur-xl">
      <Container className="flex min-h-20 items-center justify-between gap-6 2xl:!w-[80vw] 2xl:!max-w-none 2xl:!px-0">
        <a
          aria-label="The Lady Derby — back to home"
          className="relative block h-13 w-38 shrink-0 sm:w-44"
          href="#home"
        >
          <Image
            alt="The Lady Derby"
            className="object-contain object-left"
            fill
            priority
            sizes="176px"
            src="/images/logo.png"
          />
        </a>
        <div className="hidden items-center gap-5 xl:flex">
          <nav
            aria-label="Primary navigation"
            className="flex items-center gap-5"
          >
            {mainNavigation.map((item) => (
              <a
                className="relative py-3 text-[.71rem] font-bold tracking-[.08em] text-brand-charcoal uppercase transition after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform hover:text-brand-red hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
                href={item.href}
                key={item.href}
              >
                {item.label}
              </a>
            ))}
          </nav>
        
        </div>
        <MobileNav navigation={mainNavigation} />
      </Container>
    </header>
  );
}
