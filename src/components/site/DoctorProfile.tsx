import { practice } from "@/content/practice";
import { ActionLink } from "./Action";
import { Reveal } from "./Reveal";

/**
 * Doctor introduction block. The portrait frame intentionally holds a
 * placeholder until the practice supplies professional photography.
 */
export function DoctorProfile({
  variant = "home",
}: {
  variant?: "home" | "about";
}) {
  const { doctor } = practice;
  return (
    <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] lg:gap-16">
      <Reveal className="min-w-0">
        <div className="flex aspect-[4/5] w-full items-center justify-center border border-border bg-stone p-8 text-center">
          <p className="max-w-[16rem] text-sm leading-relaxed text-muted-foreground">
            {doctor.portraitNote}
            <span className="mt-2 block text-xs">
              Doctor's portrait
            </span>
          </p>
        </div>
      </Reveal>

      <Reveal className="min-w-0 self-center" delay={80}>
        <h3 className="display-md">{doctor.name}</h3>
        <p className="eyebrow mt-3">{doctor.title}</p>

        {variant === "home" ? (
          <p className="lede mt-7">{doctor.shortBio}</p>
        ) : (
          <div className="mt-7 space-y-5">
            {doctor.longBio.map((para) => (
              <p key={para.slice(0, 24)} className="text-[0.9375rem] leading-relaxed text-muted-foreground">
                {para}
              </p>
            ))}
          </div>
        )}

        <div className="mt-10 border-t border-border pt-8">
          <h4 className="eyebrow">Qualifications</h4>
          <ul className="mt-5 space-y-3">
            {doctor.qualifications.map((q) => (
              <li key={q} className="flex gap-4 text-[0.9375rem] leading-relaxed">
                <span aria-hidden className="mt-[0.7em] h-px w-5 shrink-0 bg-border-strong" />
                <span className="min-w-0">{q}</span>
              </li>
            ))}
          </ul>
        </div>

        {variant === "home" ? (
          <ActionLink to="/about" variant="outline" className="mt-10">
            Meet the Specialist
          </ActionLink>
        ) : null}
      </Reveal>
    </div>
  );
}
