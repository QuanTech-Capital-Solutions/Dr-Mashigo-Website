import { createFileRoute, Link } from "@tanstack/react-router";
import heroImage from "@/assets/hero-consulting-room.jpg";
import educationImage from "@/assets/education-lab.jpg";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { LocationSection } from "@/components/site/LocationSection";
import { PatientJourney } from "@/components/site/PatientJourney";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { conditions } from "@/content/conditions";
import { articles } from "@/content/education";
import { allFaqs } from "@/content/faqs";
import { generalDisclaimer, practice, principles, trustPoints } from "@/content/practice";

const title = "Specialist Nephrologist | Expert Kidney Care — Dr. B. Mashigo";
const description =
  "Compassionate, evidence-based nephrology for patients living with kidney disease, hypertension, dialysis and kidney transplantation.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Home,
});

function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <WhoWeAre />
      <Expertise />
      <WhyChooseUs />
      <PatientJourney />
      <Education />
      <FaqPreview />
      <LocationSection />
      <BookingCta />
      <Disclaimer />
      <EmergencyNotice />
    </>
  );
}

function Hero() {
  return (
    <section className="border-b border-border">
      <Container className="grid items-center gap-14 py-20 md:py-28 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.9fr)] lg:gap-20">
        <div className="min-w-0">
          <p className="eyebrow">Nephrologist &amp; Specialist Physician</p>
          <h1 className="display-xl mt-6">Expert Kidney Care</h1>
          <p className="lede mt-7 max-w-xl">
            Compassionate, evidence-based nephrology for patients living with kidney disease,
            hypertension, dialysis and kidney transplantation.
          </p>
          <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
            <ActionLink to="/contact">Book a Consultation</ActionLink>
            <ActionLink to="/conditions" variant="outline">
              Explore Kidney Care
            </ActionLink>
          </div>
        </div>

        <div className="min-w-0">
          <img
            src={heroImage}
            alt="Quiet, light-filled consulting room with a stethoscope resting on a folded linen cloth"
            width={1280}
            height={1600}
            className="aspect-[4/5] w-full border border-border object-cover"
          />
        </div>
      </Container>
    </section>
  );
}

function TrustStrip() {
  return (
    <section aria-label="Practice credentials" className="border-b border-border bg-surface">
      <Container>
        <ul className="grid divide-y divide-border sm:grid-cols-3 sm:divide-x sm:divide-y-0">
          {trustPoints.map((point) => (
            <li
              key={point}
              className="py-6 text-center text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-muted-foreground sm:py-7"
            >
              {point}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}

function WhoWeAre() {
  return (
    <section aria-labelledby="who-heading" className="border-b border-border">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="About the Practice"
          title={<span id="who-heading">Specialist Care, Grounded in Expertise</span>}
          intro="Dr. B Mashigo is a specialist nephrology practice caring for adults with kidney disease and related conditions, working closely with referring doctors and with each patient's wider care team."
        />
        <div className="mt-16">
          <DoctorProfile />
        </div>
      </Container>
    </section>
  );
}

function Expertise() {
  return (
    <section aria-labelledby="expertise-heading" className="border-b border-border bg-surface">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="Areas of Expertise"
          title={<span id="expertise-heading">Conditions We Care For</span>}
          intro="Nephrology covers a wide range of conditions, some sudden and some lifelong. Each summary below explains what the condition means and when a specialist opinion may be helpful."
        />

        <ul className="mt-16 grid gap-px border border-border bg-border md:grid-cols-2">
          {conditions.map((condition, i) => (
            <li key={condition.slug} className="bg-surface">
              <Reveal delay={(i % 2) * 60} className="h-full">
                <Link
                  to="/conditions/$slug"
                  params={{ slug: condition.slug }}
                  className="group flex h-full flex-col p-8 transition-colors hover:bg-background md:p-10"
                >
                  <h3 className="text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
                    {condition.title}
                  </h3>
                  <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {condition.summary}
                  </p>
                  <span className="mt-6 text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent underline-offset-[6px] group-hover:underline">
                    Read more
                  </span>
                </Link>
              </Reveal>
            </li>
          ))}
          <li className="hidden bg-surface md:block" aria-hidden />
        </ul>
      </Container>
    </section>
  );
}

function WhyChooseUs() {
  return (
    <section aria-labelledby="why-heading" className="border-b border-border">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="Why Choose Us"
          title={<span id="why-heading">Specialist Care With a Personal Approach</span>}
        />
        <div className="mt-16 grid gap-x-16 gap-y-12 md:grid-cols-2">
          {principles.map((item, i) => (
            <Reveal key={item.title} delay={(i % 2) * 60} className="min-w-0 border-t border-border pt-8">
              <h3 className="text-xl">{item.title}</h3>
              <p className="mt-4 max-w-md text-[0.9375rem] leading-relaxed text-muted-foreground">
                {item.body}
              </p>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}

function Education() {
  const featured = articles.slice(0, 4);
  return (
    <section aria-labelledby="education-heading" className="border-b border-border">
      <Container className="py-24 md:py-32">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] lg:gap-20">
          <Reveal className="min-w-0">
            <img
              src={educationImage}
              alt="Sample vials and a notebook on a pale stone laboratory counter"
              width={1408}
              height={1008}
              loading="lazy"
              className="aspect-[4/3] w-full border border-border object-cover"
            />
          </Reveal>
          <div className="min-w-0">
            <SectionHeading
              label="Kidney Health"
              title={<span id="education-heading">Understanding Your Kidneys</span>}
              intro="Short, plain-language explanations of how the kidneys work and what common test results mean, written for patients rather than for doctors."
            />
            <ul className="mt-10 divide-y divide-border border-y border-border">
              {featured.map((article) => (
                <li key={article.slug}>
                  <Link
                    to="/kidney-health/$slug"
                    params={{ slug: article.slug }}
                    className="group grid gap-1 py-5 transition-colors hover:text-accent"
                  >
                    <span className="text-lg" style={{ fontFamily: "var(--font-serif)" }}>
                      {article.title}
                    </span>
                    <span className="text-sm text-muted-foreground">{article.summary}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <ActionLink to="/kidney-health" variant="quiet" className="mt-8">
              All kidney health articles
            </ActionLink>
          </div>
        </div>
      </Container>
    </section>
  );
}

function FaqPreview() {
  return (
    <section aria-labelledby="faq-heading" className="border-b border-border bg-surface">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="Frequently Asked Questions"
          title={<span id="faq-heading">Questions Patients Often Ask</span>}
        />
        <div className="mt-14">
          <FaqAccordion faqs={allFaqs.slice(0, 6)} idPrefix="home-faq" />
        </div>
        <ActionLink to="/faqs" variant="quiet" className="mt-10">
          Read all frequently asked questions
        </ActionLink>
      </Container>
    </section>
  );
}

function BookingCta() {
  return (
    <section aria-labelledby="booking-heading" className="border-t border-border bg-primary text-primary-foreground">
      <Container className="py-20 md:py-28">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-end">
          <div className="min-w-0">
            <p className="text-[0.6875rem] font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
              Book a Consultation
            </p>
            <h2 className="display-lg mt-6 text-primary-foreground">
              Speak with a specialist about your kidney health
            </h2>
            <p className="mt-6 max-w-xl text-[0.9375rem] leading-relaxed text-primary-foreground/75">
              Appointments can be arranged by telephone, email or through the online enquiry form.
              The practice will confirm your appointment and let you know what to bring.
            </p>
            <p className="mt-6 text-sm text-primary-foreground/70">
              {practice.contact.phone} · {practice.contact.email}
            </p>
          </div>
          <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center rounded-sm bg-primary-foreground px-6 py-3 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary transition-opacity hover:opacity-90"
            >
              Contact the Practice
            </Link>
            <Link
              to="/patient-information"
              className="inline-flex items-center justify-center rounded-sm border border-primary-foreground/30 px-6 py-3 text-[0.8125rem] font-medium uppercase tracking-[0.12em] text-primary-foreground transition-colors hover:border-primary-foreground"
            >
              Patient Information
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Disclaimer() {
  return (
    <section aria-label="Medical disclaimer">
      <Container className="py-14">
        <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
          {generalDisclaimer}{" "}
          <Link to="/medical-disclaimer" className="underline underline-offset-4 hover:text-foreground">
            Read the full medical disclaimer
          </Link>
          .
        </p>
      </Container>
    </section>
  );
}
