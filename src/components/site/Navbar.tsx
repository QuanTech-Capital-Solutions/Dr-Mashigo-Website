import { Link, useRouterState } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/mashigo-logo.png.asset.json";
import { navLinks, practice } from "@/content/practice";
import { cn } from "@/lib/utils";
import { Container } from "./Container";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b transition-[height,background-color,border-color] duration-300",
        scrolled ? "border-border bg-surface" : "border-transparent bg-background",
      )}
    >
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-3 focus:z-50 focus:rounded-sm focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:text-primary-foreground"
      >
        Skip to content
      </a>
      <Container>
        <div
          className={cn(
            "grid grid-cols-[minmax(0,1fr)_auto] items-center transition-[height] duration-300",
            scrolled ? "h-16 md:h-[4.5rem]" : "h-20 md:h-24",
          )}
        >
          <Link to="/" className="flex min-w-0 items-center gap-3" aria-label={`${practice.name} home`}>
            <img
              src={logo.url}
              alt=""
              width={60}
              height={60}
              className="h-15 w-15 shrink-0 object-contain md:h-15 md:w-15"
            />
            <span className="min-w-0">
              <span className="block truncate font-serif text-lg leading-tight tracking-tight md:text-xl">
                Dr. B. MASHIGO INC.
              </span>
              <span className="hidden text-[0.625rem] uppercase tracking-[0.2em] text-muted-foreground sm:block">
                Nephrologist
              </span>
            </span>
          </Link>

          <nav aria-label="Primary" className="hidden items-center gap-7 lg:flex">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                activeOptions={{ exact: link.to === "/" }}
                className="text-sm text-muted-foreground transition-colors hover:text-foreground data-[status=active]:text-foreground"
              >
                {link.label}
              </Link>
            ))}
            <Link
              to="/contact"
              className="rounded-sm bg-primary px-5 py-2.5 text-[0.75rem] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:bg-accent"
            >
              Book a Consultation
            </Link>
          </nav>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-nav"
            className="inline-flex h-11 w-11 items-center justify-center justify-self-end rounded-sm border border-border text-foreground lg:hidden"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-5 w-5" strokeWidth={1.4} /> : <Menu className="h-5 w-5" strokeWidth={1.4} />}
          </button>
        </div>
      </Container>

      {open ? (
        <div id="mobile-nav" className="fixed inset-x-0 bottom-0 top-16 z-40 overflow-y-auto border-t border-border bg-surface lg:hidden">
          <Container className="py-10">
            <nav aria-label="Mobile" className="flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  activeOptions={{ exact: link.to === "/" }}
                  className="border-b border-border py-4 font-serif text-2xl data-[status=active]:text-accent"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
            <Link
              to="/contact"
              className="mt-8 flex items-center justify-center rounded-sm bg-primary px-6 py-4 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary-foreground"
            >
              Book a Consultation
            </Link>
            <p className="mt-6 text-sm text-muted-foreground">
              {practice.contact.phone} · {practice.contact.email}
            </p>
          </Container>
        </div>
      ) : null}
    </header>
  );
}
