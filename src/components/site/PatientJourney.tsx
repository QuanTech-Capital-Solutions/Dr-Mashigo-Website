import { journey } from "@/content/practice";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function PatientJourney() {
  return (
    <section aria-labelledby="journey-heading" className="border-t border-border bg-surface">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="Patient Journey"
          title={<span id="journey-heading">What to Expect</span>}
          intro="Knowing how a consultation unfolds makes a first visit easier. Each step is explained as you go, and there is always time for questions."
        />
        <ol className="mt-16 grid gap-px border border-border bg-border sm:grid-cols-2 lg:grid-cols-5">
          {journey.map((item, i) => (
            <li key={item.step} className="bg-surface">
              <Reveal className="h-full p-8" delay={i * 60}>
                <span className="font-serif text-3xl text-accent">{item.step}</span>
                <h3 className="mt-5 text-lg">{item.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.body}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
