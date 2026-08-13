import { emergencyNotice } from "@/content/practice";
import { Container } from "./Container";

export function EmergencyNotice() {
  return (
    <aside aria-labelledby="emergency-heading" className="border-y border-border bg-stone">
      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-[minmax(0,14rem)_minmax(0,1fr)] md:gap-10">
          <h2
            id="emergency-heading"
            className="text-[0.8125rem] font-medium uppercase tracking-[0.16em] text-foreground"
            style={{ fontFamily: "var(--font-sans)" }}
          >
            {emergencyNotice.title}
          </h2>
          <div className="min-w-0">
            <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
              {emergencyNotice.body}
            </p>
            {/*<p className="mt-2 text-xs text-muted-foreground/80">{emergencyNotice.note}</p> */}
          </div>
        </div>
      </Container>
    </aside>
  );
}
