import { createFileRoute } from "@tanstack/react-router";
import practiceImage from "@/assets/practice-interior.jpg";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { DoctorProfile } from "@/components/site/DoctorProfile";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { SectionHeading } from "@/components/site/SectionHeading";
import { practice } from "@/content/practice";

const title = "About the Specialist | Dr. B. Mashigo Medical Inc. Nephrology";
const description =
  "Meet the specialist nephrologist at Dr. B. Mashigo: training, professional experience, clinical philosophy and approach to long-term kidney care.";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "profile" },
      { property: "og:url", content: "/about" },
    ],
    links: [{ rel: "canonical", href: "/about" }],
  }),
  component: About,
});

const philosophy = [
  {
    title: "Listening first",
    body: "A consultation begins with your account of what has been happening. Understanding the person, not only the test result, shapes everything that follows.",
  },
  {
    title: "Clear communication",
    body: "Findings, options and uncertainties are explained in plain language, with time for questions and a written summary where it helps.",
  },
  {
    title: "Evidence-based decisions",
    body: "Recommendations are grounded in current medical evidence and accepted clinical practice, and adapted to your circumstances.",
  },
  {
    title: "Long-term kidney health",
    body: "Kidney care is usually a long relationship. The aim is to protect function over years, and to prevent avoidable harm where possible.",
  },
];

function About() {
  const { doctor } = practice;
  return (
    <>
      <PageHeader
        label="About the Practice"
        title="Meet the Specialist"
        intro="Dr. B. Mashigo is a specialist nephrologist caring for adults with kidney disease, blood pressure disorders and related conditions."
      />

      <section aria-labelledby="bio-heading" className="border-b border-border">
        <Container className="py-24 md:py-32">
          <h2 id="bio-heading" className="sr-only">
            Biography
          </h2>
          <DoctorProfile variant="about" />
        </Container>
      </section>

      <section aria-labelledby="training-heading" className="border-b border-border bg-surface">
        <Container className="py-24 md:py-32">
          <SectionHeading
            label="Qualifications &amp; Training"
            title={<span id="training-heading">Qualifications &amp; Training</span>}
            intro="Training and qualifications are listed below and will be confirmed by the practice before publication."
          />
          <ol className="mt-14 border-t border-border">
            {doctor.training.map((item) => (
              <li key={item.detail} className="border-b border-border">
                <Reveal className="grid gap-2 py-7 sm:grid-cols-[minmax(0,12rem)_minmax(0,1fr)] sm:gap-8">
                  <span className="eyebrow">{item.period}</span>
                  <span className="min-w-0 text-[0.9375rem] leading-relaxed">{item.detail}</span>
                </Reveal>
              </li>
            ))}
          </ol>
        </Container>
      </section>

      <section aria-labelledby="experience-heading" className="border-b border-border">
        <Container className="py-24 md:py-32">
          <div className="grid gap-14 lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] lg:gap-20">
            <div className="min-w-0">
              <SectionHeading
                label="Professional Experience"
                title={<span id="experience-heading">Professional Experience</span>}
              />
              <ul className="mt-10 space-y-4">
                {doctor.experience.map((item) => (
                  <li key={item} className="flex gap-4 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>

              <h3 className="eyebrow mt-14">Professional Affiliations</h3>
              <ul className="mt-6 space-y-4">
                {doctor.memberships.map((item) => (
                  <li key={item} className="flex gap-4 text-[0.9375rem] leading-relaxed">
                    <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
                    <span className="min-w-0">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-xs text-muted-foreground">
                Only affiliations confirmed by the practice will be published.
              </p>
            </div>

            <Reveal className="min-w-0">
              <img
                src={practiceImage}
                alt="Calm waiting area with a linen bench, side table and a single eucalyptus sprig"
                width={1408}
                height={1008}
                loading="lazy"
                className="aspect-[4/3] w-full border border-border object-cover"
              />
            </Reveal>
          </div>
        </Container>
      </section>

      <section aria-labelledby="philosophy-heading" className="border-b border-border bg-surface">
        <Container className="py-24 md:py-32">
          <SectionHeading
            label="Clinical Philosophy"
            title={<span id="philosophy-heading">How We Approach Care</span>}
          />
          <div className="mt-14 grid gap-x-16 gap-y-12 md:grid-cols-2">
            {philosophy.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 60} className="border-t border-border pt-8">
                <h3 className="text-xl">{item.title}</h3>
                <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </div>
          <ActionLink to="/contact" className="mt-14">
            Book a Consultation
          </ActionLink>
        </Container>
      </section>
    </>
  );
}
