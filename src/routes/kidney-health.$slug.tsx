import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { ActionLink } from "@/components/site/Action";
import { Container } from "@/components/site/Container";
import { PageHeader } from "@/components/site/PageHeader";
import { getArticle, type Article } from "@/content/education";
import { generalDisclaimer } from "@/content/practice";

export const Route = createFileRoute("/kidney-health/$slug")({
  loader: ({ params }): { article: Article } => {
    const article = getArticle(params.slug);
    if (!article) throw notFound();
    return { article };
  },
  head: ({ params, loaderData }) => {
    if (!loaderData) {
      return { meta: [{ title: "Unavailable" }, { name: "robots", content: "noindex" }] };
    }
    const t = `${loaderData.article.title} | Kidney Health`;
    return {
      meta: [
        { title: t },
        { name: "description", content: loaderData.article.summary },
        { property: "og:title", content: t },
        { property: "og:description", content: loaderData.article.summary },
        { property: "og:type", content: "article" },
        { property: "og:url", content: `/kidney-health/${params.slug}` },
      ],
      links: [{ rel: "canonical", href: `/kidney-health/${params.slug}` }],
    };
  },
  component: ArticlePage,
});

function ArticlePage() {
  const { article } = Route.useLoaderData() as { article: Article };
  return (
    <>
      <PageHeader label={article.category} title={article.title} intro={article.summary} />
      <Container className="py-16 md:py-24">
        <article className="max-w-2xl">
          <p className="eyebrow">{article.readingTime}</p>
          {article.sections.map((section) => (
            <section key={section.heading} className="mt-12 border-t border-border pt-8">
              <h2 className="text-2xl">{section.heading}</h2>
              {section.paragraphs?.map((p) => (
                <p key={p.slice(0, 24)} className="mt-5 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {p}
                </p>
              ))}
              {section.bullets ? (
                <ul className="mt-5 space-y-3 text-[0.9375rem] leading-relaxed text-muted-foreground">
                  {section.bullets.map((b) => (
                    <li key={b} className="flex gap-4">
                      <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
                      <span className="min-w-0">{b}</span>
                    </li>
                  ))}
                </ul>
              ) : null}
            </section>
          ))}
          <p className="mt-14 border-t border-border pt-8 text-sm text-muted-foreground">
            {generalDisclaimer}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-6">
            <ActionLink to="/contact">Book a Consultation</ActionLink>
            <Link to="/kidney-health" className="text-sm text-muted-foreground underline underline-offset-4 hover:text-foreground">
              All kidney health articles
            </Link>
          </div>
        </article>
      </Container>
    </>
  );
}
