import type { ReactNode } from "react";
import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  label,
  title,
  intro,
  align = "left",
  as = "h2",
  className,
}: {
  label?: string;
  title: ReactNode;
  intro?: ReactNode;
  align?: "left" | "center";
  as?: "h1" | "h2";
  className?: string;
}) {
  const Tag = as;
  return (
    <Reveal
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
        className,
      )}
    >
      {label ? <p className="eyebrow mb-5">{label}</p> : null}
      <Tag className={as === "h1" ? "display-lg" : "display-md"}>{title}</Tag>
      {intro ? <p className="lede mt-5">{intro}</p> : null}
    </Reveal>
  );
}
