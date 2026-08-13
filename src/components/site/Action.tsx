import { Link } from "@tanstack/react-router";
import type { ComponentProps, ReactNode } from "react";
import { cn } from "@/lib/utils";

type Variant = "solid" | "outline" | "quiet";

const base =
  "inline-flex items-center justify-center gap-2 rounded-sm px-6 py-3 text-[0.8125rem] font-medium uppercase tracking-[0.12em] transition-colors duration-200";

const variants: Record<Variant, string> = {
  solid: "bg-primary text-primary-foreground hover:bg-accent",
  outline: "border border-border-strong text-foreground hover:border-foreground hover:bg-stone",
  quiet: "text-foreground underline underline-offset-[6px] decoration-border-strong hover:decoration-foreground px-0 py-1",
};

export function ActionLink({
  variant = "solid",
  className,
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<typeof Link>) {
  return (
    <Link className={cn(base, variants[variant], className)} {...props}>
      {children}
    </Link>
  );
}

export function ActionAnchor({
  variant = "solid",
  className,
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"a">) {
  return (
    <a className={cn(base, variants[variant], className)} {...props}>
      {children}
    </a>
  );
}

export function ActionButton({
  variant = "solid",
  className,
  children,
  ...props
}: { variant?: Variant; children: ReactNode } & ComponentProps<"button">) {
  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}
