import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { FaqAccordion } from "@/components/site/FaqAccordion";
import { PageHeader } from "@/components/site/PageHeader";
import { allFaqs, faqGroups } from "@/content/faqs";

const title = "Nephrology FAQs | Kidney Care Questions Answered";
const description =
  "Answers to common questions about seeing a nephrologist, kidney function tests, chronic kidney disease, blood pressure, dialysis and transplantation.";

export const Route = createFileRoute("/faqs")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/faqs" },
    ],
    links: [{ rel: "canonical", href: "/faqs" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: allFaqs.map((f) => ({
            "@type": "Question",
            name: f.question,
            acceptedAnswer: { "@type": "Answer", text: f.answer },
          })),
        }),
      },
    ],
  }),
  component: Faqs,
});

function Faqs() {
  return (
    <>
      <PageHeader
        label="Frequently Asked Questions"
        title="Questions & Answers"
        intro="General information about nephrology consultations, kidney tests and treatment. Anything specific to your own health should be discussed at a consultation."
      />
      <Container className="py-20 md:py-28">
        {faqGroups.map((group) => (
          <section key={group.title} className="mb-16 last:mb-0">
            <h2 className="eyebrow mb-6">{group.title}</h2>
            <FaqAccordion faqs={group.faqs} idPrefix={group.title} />
          </section>
        ))}
        <ActionLink to="/contact" className="mt-6">
          Book a Consultation
        </ActionLink>
      </Container>
      <EmergencyNotice />
    </>
  );
}
