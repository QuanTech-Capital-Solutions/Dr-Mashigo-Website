import { createFileRoute } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";

const title = "Privacy Policy | Dr. B. Mashigo";
const description =
  "How Dr. B Mashigo collects, uses and protects personal information submitted through this website.";

export const Route = createFileRoute("/privacy-policy")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/privacy-policy" },
    ],
    links: [{ rel: "canonical", href: "/privacy-policy" }],
  }),
  component: Page,
});

const sections = [
  {
    heading: "Information we collect",
    body: "When you complete the enquiry form we collect the details you provide: your name, email address, telephone number, preferred contact method, reason for enquiry and any message you write. Please do not include confidential medical information in the form.",
  },
  {
    heading: "How the information is used",
    body: "Information submitted through this website is used only to respond to your enquiry and to arrange an appointment where requested.",
  },
  {
    heading: "Storage and retention",
    body: "Personal information is stored securely and retained only for as long as necessary to provide medical services, comply with applicable legal and regulatory requirements, resolve disputes, and fulfil legitimate administrative purposes. Once information is no longer required, it will be securely deleted or anonymised in accordance with applicable data-protection and healthcare-retention requirements.",
  },
  {
    heading: "Sharing",
    body: "Enquiry information is not sold, and it is not shared with third parties except where necessary to provide care or where required by law.",
  },
  {
    heading: "Your rights",
    body: "You may request access to the personal information the practice holds about you, ask for it to be corrected, or ask for it to be deleted where the practice is not legally required to retain it.",
  },
  {
    heading: "Patient records",
    body: "Clinical records created during a consultation are handled separately from this website and are governed by the professional and legal obligations that apply to medical records.",
  },
];

function Page() {
  return (
    <>
      <PageHeader
        label="Legal"
        title="Privacy Policy"
        intro="This policy describes how information submitted through this website is handled. It is a draft for review and approval by the practice."
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
