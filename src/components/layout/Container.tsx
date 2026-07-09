import type { HTMLAttributes } from "react";

import { cn } from "@/lib/utils";

export function Container({
  className,
  ...props
}: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1240px] px-5 sm:px-8 lg:px-10 2xl:w-[80vw] 2xl:max-w-none 2xl:px-0",
        className,
      )}
      {...props}
    />
  );
}
