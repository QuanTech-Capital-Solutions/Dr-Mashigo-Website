import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { EmergencyNotice } from "@/components/site/EmergencyNotice";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { conditions, getCondition, type Condition } from "@/content/conditions";
import { generalDisclaimer } from "@/content/practice";

export const Route = createFileRoute("/conditions/$slug")({
  loader: ({ params }): { condition: Condition } => {
    const condition = getCondition(params.slug);
    if (!condition) throw notFound();
    return { condition };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.condition.title} | Nephrology Care Explained`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.condition.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.condition.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/conditions/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/conditions/${params.slug}` }],
    };
  },
  component: ConditionPage,
});

function Block({ heading, children }: { heading: string; children: React.ReactNode }) {
  return (
    <Reveal as="section" className="grid gap-5 border-t border-border py-12 md:grid-cols-[minmax(0,16rem)_minmax(0,1fr)] md:gap-12">
      <h2 className="text-xl md:sticky md:top-28 md:self-start">{heading}</h2>
      <div className="min-w-0 space-y-4 text-[0.9375rem] leading-relaxed text-muted-foreground">
        {children}
      </div>
    </Reveal>
  );
}

function List({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li key={item} className="flex gap-4">
          <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
          <span className="min-w-0">{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ConditionPage() {
  const { condition } = Route.useLoaderData() as { condition: Condition };
  const others = conditions.filter((c) => c.slug !== condition.slug).slice(0, 3);

  return (
    <>
      <PageHeader label="Areas of Expertise" title={condition.title} intro={condition.intro} />

      <Container className="py-16 md:py-24">
        <div className="max-w-4xl">
          <Block heading={`What is ${condition.title.toLowerCase()}?`}>
            {condition.what.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Block>

          <Block heading="What can cause it?">
            <List items={condition.causes} />
          </Block>

          <Block heading="Symptoms">
            {condition.symptoms.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </Block>

          <Block heading="How is it diagnosed?">
            <List items={condition.diagnosis} />
          </Block>

          <Block heading="How is it managed?">
            <p>
              Treatment depends on the underlying cause, the stage and your other medical
              conditions. The categories below are general, and a plan is always agreed
              individually.
            </p>
            <dl className="mt-4 divide-y divide-border border-y border-border">
              {condition.management.map((item) => (
                <div key={item.heading} className="py-5">
                  <dt className="text-foreground">{item.heading}</dt>
                  <dd className="mt-2">{item.body}</dd>
                </div>
              ))}
            </dl>
          </Block>

          <Block heading="When should you seek specialist care?">
            <p>A specialist opinion may be helpful if any of the following apply:</p>
            <List items={condition.seekCare} />
          </Block>

          <Block heading="Questions to ask your doctor">
            <List items={condition.questions} />
          </Block>
        </div>

        <div className="mt-14 border-t border-border pt-10">
          <ActionLink to="/contact">Book a Consultation</ActionLink>
          <p className="mt-8 max-w-3xl text-sm text-muted-foreground">{generalDisclaimer}</p>
        </div>
      </Container>

      <section aria-labelledby="related-heading" className="border-t border-border bg-surface">
        <Container className="py-16 md:py-20">
          <h2 id="related-heading" className="eyebrow">
            Other areas of expertise
          </h2>
          <ul className="mt-8 grid gap-px border border-border bg-border md:grid-cols-3">
            {others.map((other) => (
              <li key={other.slug} className="bg-surface">
                <Link
                  to="/conditions/$slug"
                  params={{ slug: other.slug }}
                  className="flex h-full flex-col p-8 transition-colors hover:bg-background"
                >
                  <span className="text-xl" style={{ fontFamily: "var(--font-serif)" }}>
                    {other.title}
                  </span>
                  <span className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {other.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <EmergencyNotice />
    </>
  );
}
