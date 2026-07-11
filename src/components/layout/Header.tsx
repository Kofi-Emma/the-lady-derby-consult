import Image from "next/image";

import { Container } from "@/components/layout/Container";
import { MobileNav } from "@/components/layout/MobileNav";
import { mainNavigation } from "@/content/site";

export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-brand-gold/14 bg-brand-ivory/92 shadow-[0_8px_30px_rgba(54,54,55,.04)] backdrop-blur-xl">
      <Container className="flex min-h-18 items-center justify-between gap-4 sm:min-h-20 xl:min-h-24 xl:gap-6 2xl:!w-[80vw] 2xl:!max-w-none 2xl:!px-0">
        <a
          aria-label="The Lady Derby — back to home"
          className="relative block h-12 w-40 shrink-0 sm:h-14 sm:w-48 xl:h-16 xl:w-56"
          href="#home"
        >
          <Image
            alt="The Lady Derby"
            className="object-contain object-left"
            fill
            priority
            sizes="224px"
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
                className="relative py-3 text-[.82rem] font-bold tracking-[.08em] text-brand-charcoal uppercase transition after:absolute after:right-0 after:bottom-1 after:left-0 after:h-px after:origin-left after:scale-x-0 after:bg-brand-gold after:transition-transform hover:text-brand-red hover:after:scale-x-100 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-gold"
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
