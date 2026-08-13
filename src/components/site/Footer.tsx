import { Link } from "@tanstack/react-router";
import logo from "@/assets/mashigo-logo.png.asset.json";
import { generalDisclaimer, navLinks, practice } from "@/content/practice";
import { Container } from "./Container";

const legal = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Website Terms", to: "/website-terms" },
  { label: "Medical Disclaimer", to: "/medical-disclaimer" },
] as const;

export function Footer() {
  const { location, contact } = practice;
  return (
    <footer className="border-t border-border bg-surface">
      <Container className="py-16 md:py-20">
        <div className="grid gap-12 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <div className="flex items-center gap-3">
              <img src={logo.url} alt="" width={40} height={40} className="h-10 w-10 object-contain" loading="lazy" />
              <span className="font-serif text-xl">Dr. B Mashigo</span>
            </div>
            <p className="eyebrow mt-4">Nephrologist &amp; Specialist Physician</p>
            <p className="mt-6 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {generalDisclaimer}
            </p>
          </div>

          <nav aria-label="Footer">
            <h2 className="eyebrow">Explore</h2>
            <ul className="mt-5 space-y-3">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    activeOptions={{ exact: link.to === "/" }}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="min-w-0">
            <h2 className="eyebrow">Contact</h2>
            <ul className="mt-5 space-y-3 text-sm text-muted-foreground">
              <li>{contact.phone}</li>
              <li className="break-words">{contact.email}</li>
              <li className="leading-relaxed">
                {location.building}
                <br />
                {location.street}, {location.suburb}
                <br />
                {location.city}, {location.province} {location.postalCode}
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-border pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Dr. B Mashigo. All rights reserved.
          </p>
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {legal.map((item) => (
              <li key={item.to}>
                <Link to={item.to} className="text-xs text-muted-foreground transition-colors hover:text-foreground">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </footer>
  );
}
