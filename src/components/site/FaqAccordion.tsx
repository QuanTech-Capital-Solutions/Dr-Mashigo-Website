import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import type { Faq } from "@/content/faqs";

export function FaqAccordion({ faqs, idPrefix = "faq" }: { faqs: Faq[]; idPrefix?: string }) {
  return (
    <Accordion type="single" collapsible className="w-full border-t border-border">
      {faqs.map((faq, i) => (
        <AccordionItem key={faq.question} value={`${idPrefix}-${i}`} className="border-b border-border">
          <AccordionTrigger className="py-6 text-left font-serif text-xl leading-snug hover:no-underline [&[data-state=open]]:text-accent">
            {faq.question}
          </AccordionTrigger>
          <AccordionContent className="pb-8">
            <p className="max-w-3xl text-[0.9375rem] leading-relaxed text-muted-foreground">
              {faq.answer}
            </p>
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
