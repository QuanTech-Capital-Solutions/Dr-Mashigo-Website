import { createFileRoute, Link } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { conditions } from "@/content/conditions";

const title = "Conditions & Expertise | Specialist Nephrology Care";
const description =
  "Chronic kidney disease, resistant hypertension, glomerular disease, dialysis, kidney transplant medicine, acute kidney injury and electrolyte disorders explained.";

export const Route = createFileRoute("/conditions/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/conditions" },
    ],
    links: [{ rel: "canonical", href: "/conditions" }],
  }),
  component: ConditionsIndex,
});

function ConditionsIndex() {
  return (
    <>
      <PageHeader
        label="Areas of Expertise"
        title="Conditions & Expertise"
        intro="Each condition below is explained in patient-friendly language: what it means, how it is assessed, how it is usually managed, and when a specialist opinion may be helpful."
      />

      <section className="border-b border-border">
        <Container className="py-20 md:py-28">
          <ul className="divide-y divide-border border-y border-border">
            {conditions.map((condition, i) => (
              <li key={condition.slug}>
                <Reveal delay={Math.min(i, 4) * 50}>
                  <Link
                    to="/conditions/$slug"
                    params={{ slug: condition.slug }}
                    className="group grid gap-4 py-10 transition-colors md:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] md:gap-12"
                  >
                    <h2 className="display-md group-hover:text-accent">{condition.title}</h2>
                    <div className="min-w-0">
                      <p className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                        {condition.summary}
                      </p>
                      <span className="mt-5 inline-block text-[0.6875rem] font-medium uppercase tracking-[0.16em] text-accent underline-offset-[6px] group-hover:underline">
                        Learn more
                      </span>
                    </div>
                  </Link>
                </Reveal>
              </li>
            ))}
          </ul>
          <ActionLink to="/contact" className="mt-14">
            Book a Consultation
          </ActionLink>
        </Container>
      </section>
    </>
  );
}
