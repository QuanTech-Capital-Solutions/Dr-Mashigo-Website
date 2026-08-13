import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Website Terms | Dr. B. Mashigo";
const description = "The terms on which this website is made available to visitors.";

export const Route = createFileRoute("/website-terms")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/website-terms" },
    ],
    links: [{ rel: "canonical", href: "/website-terms" }],
  }),
  component: Page,
});

const sections = [
  {
    heading: "Use of this website",
    body: "This website provides general information about Mashigo Medical Inc. and about kidney health. By using it you agree to these terms.",
  },
  {
    heading: "No doctor-patient relationship",
    body: "Using this website, or sending an enquiry through it, does not create a doctor-patient relationship. That relationship begins at a consultation.",
  },
  {
    heading: "Accuracy of information",
    body: "Content is reviewed periodically, but medical understanding changes. Information may not reflect the most recent developments and may not apply to your situation.",
  },
  {
    heading: "External links",
    body: "Where this website links to other websites, the practice is not responsible for their content or for how they handle your information.",
  },
  {
    heading: "Intellectual property",
    body: "The content, layout and branding of this website belong to Dr. BE Mashigo unless otherwise indicated, and may not be reproduced without permission.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Website Terms"
        intro="These terms are a draft for review and approval by the practice."
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
    </>
  );
}
