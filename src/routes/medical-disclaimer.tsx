import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { PageHeader } from "@/components/site/PageHeader";
import { generalDisclaimer } from "@/content/practice";

const title = "Medical Disclaimer | Dr. B. Mashigo";
const description =
  "Information on this website is educational and does not replace an individual consultation with a doctor who knows your medical history.";

export const Route = createFileRoute("/medical-disclaimer")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/medical-disclaimer" },
    ],
    links: [{ rel: "canonical", href: "/medical-disclaimer" }],
  }),
  component: Page,
});

const sections = [
  { heading: "Educational purpose", body: generalDisclaimer },
  {
    heading: "No diagnosis through this website",
    body: "No diagnosis is made, and no treatment is prescribed, through this website or through the enquiry form. Symptoms described in general terms may have many different causes.",
  },
  {
    heading: "Individual circumstances differ",
    body: "Descriptions of investigations and treatment are general. What is appropriate for one person may not be appropriate for another, and decisions are made individually at a consultation.",
  },
  {
    heading: "Do not delay seeking care",
    body: "Never delay seeking medical advice, or disregard advice you have been given, because of something you have read on this website.",
  },
  {
    heading: "Medicines",
    body: "Do not start, stop or change the dose of any medicine based on information on this website. Speak to your doctor first.",
  },
  {
    heading: "Review of content",
    body: "Clinical content on this website is intended for review and approval by the specialist before publication.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Medical Disclaimer"
        intro="Please read this alongside any information on this website about kidney conditions and their treatment."
      />
      <Container className="py-20 md:py-28">
        <div className="max-w-2xl">
          {sections.map((s) => (
            <section key={s.heading} className="border-t border-border py-8">
              <h2 className="text-xl">{s.heading}</h2>
              <p className="mt-4 text-[0.9375rem] leading-relaxed text-muted-foreground">{s.body}</p>
            </section>
          ))}
        </div>
      </Container>
      <EmergencyNotice />
    </>
  );
}
