import { createFileRoute, Link } from "@tanstack/react-router";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { Reveal } from "@/components/site/Reveal";
import { articles } from "@/content/education";
import { generalDisclaimer } from "@/content/practice";

const title = "Kidney Health Education | Kidney Care Guides";
const description =
  "Short, clear articles on kidney function, chronic kidney disease, blood pressure, dialysis, transplantation, electrolytes and everyday kidney health.";

export const Route = createFileRoute("/kidney-health/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/kidney-health" },
    ],
    links: [{ rel: "canonical", href: "/kidney-health" }],
  }),
  component: KidneyHealthIndex,
});

function KidneyHealthIndex() {
  return (
    <>
      <PageHeader
        label="Kidney Health"
        title="Kidney Health Education"
        intro="Plain-language explanations written for patients. These articles are educational and are not a substitute for advice about your own situation."
      />
      <Container className="py-20 md:py-28">
        <ul className="grid gap-px border border-border bg-border md:grid-cols-2">
          {articles.map((article, i) => (
            <li key={article.slug} className="bg-surface">
              <Reveal delay={(i % 2) * 50} className="h-full">
                <Link
                  to="/kidney-health/$slug"
                  params={{ slug: article.slug }}
                  className="flex h-full flex-col p-8 transition-colors hover:bg-background md:p-10"
                >
                  <span className="eyebrow">{article.category}</span>
                  <h2 className="mt-4 text-2xl" style={{ fontFamily: "var(--font-serif)" }}>
                    {article.title}
                  </h2>
                  <p className="mt-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                    {article.summary}
                  </p>
                  <span className="mt-6 text-xs text-muted-foreground">{article.readingTime}</span>
                </Link>
              </Reveal>
            </li>
          ))}
        </ul>
        <p className="mt-12 max-w-3xl text-sm text-muted-foreground">{generalDisclaimer}</p>
      </Container>
    </>
  );
}
