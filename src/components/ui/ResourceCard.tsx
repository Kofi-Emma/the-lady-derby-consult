import Image from "next/image";
import { ArrowDownToLine, Clock3 } from "lucide-react";

import { Badge } from "@/components/ui/Badge";
import type { Product } from "@/types";

export function ResourceCard({ product }: { product: Product }) {
  return (
    <article
      className="group flex h-full flex-col overflow-hidden rounded-[1.75rem] border border-brand-gold/20 bg-white shadow-[0_18px_55px_rgba(72,42,30,.08)] transition duration-300 hover:-translate-y-1 hover:border-brand-gold/55"
      data-motion-card=""
    >
      <div className="relative aspect-[4/4.65] overflow-hidden bg-[linear-gradient(145deg,#f4e5ca,#fffaf0)]">
        {product.image ? (
          <Image
            alt={`${product.title} ebook cover`}
            className="object-contain p-5 transition duration-500 group-hover:scale-[1.025]"
            fill
            sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 25vw"
            src={product.image}
          />
        ) : (
          <div className="absolute inset-5 flex flex-col items-center justify-center rounded-2xl bg-empowerment-gradient p-7 text-center text-white">
            <span className="font-heading text-3xl leading-none font-semibold">
              {product.title}
            </span>
            <span className="mt-5 text-sm font-bold text-brand-gold-soft">
              New resource coming soon
            </span>
          </div>
        )}
        {product.label ? (
          <Badge className="absolute top-4 left-4 bg-white/92 shadow-sm">
            {product.label}
          </Badge>
        ) : null}
      </div>
      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-heading text-2xl leading-tight font-semibold text-brand-red">
          {product.title}
        </h3>
        <p className="mt-3 flex-1 text-sm leading-6 text-brand-muted">
          {product.description}
        </p>
        {product.available ? (
          <a
            className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[.12em] text-brand-red uppercase transition hover:text-brand-red-dark"
            href="#lead-magnet"
          >
            <ArrowDownToLine aria-hidden="true" className="size-4" />
            {product.cta}
          </a>
        ) : (
          <span className="mt-6 inline-flex items-center gap-2 text-xs font-bold tracking-[.12em] text-brand-muted uppercase">
            <Clock3 aria-hidden="true" className="size-4" />
            {product.cta}
          </span>
        )}
      </div>
    </article>
  );
}
