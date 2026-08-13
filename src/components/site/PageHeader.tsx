import { Container } from "./Container";
import { Reveal } from "./Reveal";

export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string;
  title: string;
  intro?: string;
}) {
  return (
    <header className="border-b border-border bg-surface">
      <Container className="py-20 md:py-28">
        <Reveal className="max-w-3xl">
          <p className="eyebrow mb-6">{label}</p>
          <h1 className="display-xl">{title}</h1>
          {intro ? <p className="lede mt-7 max-w-2xl">{intro}</p> : null}
        </Reveal>
      </Container>
    </header>
  );
}
