import { createFileRoute } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { PageHeader } from "@/components/site/PageHeader";
import { PatientJourney } from "@/components/site/PatientJourney";
import { Reveal } from "@/components/site/Reveal";
import { practice } from "@/content/practice";

const title = "Patient Information | Preparing for Your Nephrology Consultation";
const description =
  "What to bring to your appointment, what happens during a nephrology consultation, and what to expect afterwards at Mashigo Medical Inc.";

export const Route = createFileRoute("/patient-information")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "article" },
      { property: "og:url", content: "/patient-information" },
    ],
    links: [{ rel: "canonical", href: "/patient-information" }],
  }),
  component: PatientInformation,
});

function Section({
  label,
  heading,
  intro,
  items,
  children,
}: {
  label: string;
  heading: string;
  intro?: string;
  items?: string[];
  children?: React.ReactNode;
}) {
  return (
    <Reveal as="section" className="grid gap-6 border-t border-border py-14 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-12">
      <div>
        <p className="eyebrow">{label}</p>
        <h2 className="display-md mt-4">{heading}</h2>
      </div>
      <div className="min-w-0 space-y-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {intro ? <p>{intro}</p> : null}
        {items ? (
          <ul className="space-y-3">
            {items.map((item) => (
              <li key={item} className="flex gap-4">
                <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
                <span className="min-w-0">{item}</span>
              </li>
            ))}
          </ul>
        ) : null}
        {children}
      </div>
    </Reveal>
  );
}

function PatientInformation() {
  return (
    <>
      <PageHeader
        label="Patient Information"
        title="Preparing for Your Visit"
        intro="A little preparation makes a consultation more useful. Here is what to bring, what happens on the day, and what usually follows."
      />

      <Container className="py-8 md:py-12">
        <Section
          label="Before your appointment"
          heading="What to bring"
          intro="Bringing the following, where you have them, helps the specialist build an accurate picture from the outset."
          items={[
            "Previous medical records and hospital discharge summaries",
            "A complete list of your medicines, including doses and anything bought over the counter",
            "Recent laboratory results, particularly kidney function and urine tests",
            "Imaging reports such as ultrasound or CT scans",
            "Referral documentation, where applicable",
            "Home blood pressure readings if you record them",
            "A written list of the questions you would like to discuss",
          ]}
        >
          <p className="border-l-2 border-accent-soft pl-4">
            Referrals: {practice.referralPolicy}
          </p>
        </Section>

        <Section
          label="During your consultation"
          heading="What happens on the day"
          intro="The consultation is a conversation as much as an examination. You are welcome to bring a family member or friend with you."
          items={[
            "A detailed discussion of your symptoms, medical history and family history",
            "A review of your current medicines and any side effects",
            "A clinical examination, including blood pressure measurement",
            "A review of your existing results and imaging",
            "An explanation of the findings, in plain language, with time for questions",
            "Where needed, arrangements for further blood tests, urine tests or imaging",
          ]}
        />

        <Section
          label="After your consultation"
          heading="Follow-up and ongoing care"
          intro="Kidney care is usually ongoing rather than a single visit."
          items={[
            "Results of any tests are reviewed and explained to you",
            "Your care plan may be adjusted once further information is available",
            "A letter is generally sent to your referring doctor to keep your care coordinated",
            "Follow-up intervals depend on your condition and how stable it is",
            "Contact the practice if your symptoms change between visits",
          ]}
        />

        <Section
          label="Accounts"
          heading="Fees and medical aid"
          intro="[TO BE CONFIRMED BY THE PRACTICE — consultation fees, medical aid arrangements, payment methods and cancellation policy.]"
        />

        <div className="border-t border-border py-14">
          <ActionLink to="/contact">Book a Consultation</ActionLink>
        </div>
      </Container>

      <PatientJourney />
      <EmergencyNotice />
    </>
  );
}
