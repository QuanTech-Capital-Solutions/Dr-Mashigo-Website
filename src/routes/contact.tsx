import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { ContactForm } from "@/components/site/ContactForm";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { LocationSection } from "@/components/site/LocationSection";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { practice } from "@/content/practice";

const title = "Contact & Bookings | Mashigo Medical Inc. Nephrology";
const description =
  "Book a consultation with a specialist nephrologist. Contact the practice by telephone, email, WhatsApp or the online enquiry form.";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/contact" },
    ],
    links: [{ rel: "canonical", href: "/contact" }],
  }),
  component: Contact,
});

function Contact() {
  const { contact, hours } = practice;
  return (
    <>
      <PageHeader
        label="Contact"
        title="Book a Consultation"
        intro="Appointments can be arranged by telephone, email or through the enquiry form below. The practice will confirm your appointment and let you know what to bring."
      />

      <Container className="py-20 md:py-28">
        <div className="grid gap-16 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.2fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <h2 className="eyebrow">Contact options</h2>
            <dl className="mt-6 divide-y divide-border border-y border-border">
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">Telephone</dt>
                <dd className="mt-1 text-[0.9375rem]">{contact.phone}</dd>
              </div>
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">WhatsApp</dt>
                <dd className="mt-1 text-[0.9375rem]">{contact.whatsapp}</dd>
              </div>
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">Email</dt>
                <dd className="mt-1 break-words text-[0.9375rem]">{contact.email}</dd>
              </div>
              <div className="py-5">
                <dt className="text-sm text-muted-foreground">Online booking</dt>
                <dd className="mt-1 break-words text-[0.9375rem]">{contact.bookingUrl}</dd>
              </div>
            </dl>

            <h2 className="eyebrow mt-12">Consultation hours</h2>
            <ul className="mt-6 space-y-2 text-[0.9375rem]">
              {hours.map((h) => (
                <li key={h.day}>
                  <span className="text-muted-foreground">{h.day}</span> — {h.time}
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal className="min-w-0">
            <h2 className="eyebrow">Enquiry form</h2>
            <p className="mt-4 max-w-2xl text-[0.9375rem] leading-relaxed text-muted-foreground">
              Complete the form and the practice will respond during consultation hours.
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </Container>

      <LocationSection />
      <EmergencyNotice />
    </>
  );
}
