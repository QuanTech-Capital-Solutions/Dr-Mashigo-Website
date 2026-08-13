import { useState, type FormEvent } from "react";
import { z } from "zod";
import { toast } from "sonner";
import { ActionButton } from "./Action";

const schema = z.object({
  name: z.string().trim().min(2, "Please enter your full name").max(100),
  email: z.string().trim().email("Please enter a valid email address").max(255),
  phone: z.string().trim().min(6, "Please enter a contact number").max(30),
  preferredContact: z.enum(["Telephone", "Email", "WhatsApp"]),
  reason: z.string().trim().min(1, "Please choose a reason").max(120),
  preferredDate: z.string().trim().max(40).optional().or(z.literal("")),
  message: z.string().trim().max(1000).optional().or(z.literal("")),
});

const reasons = [
  "New consultation",
  "Follow-up appointment",
  "Referral from another doctor",
  "General enquiry",
  "Accounts or billing",
];

const fieldClass =
  "mt-2 w-full rounded-sm border border-input bg-surface px-4 py-3 text-[0.9375rem] text-foreground transition-colors placeholder:text-muted-foreground/70 focus:border-accent focus:outline-none";

export function ContactForm() {
  const [errors, setErrors] = useState<Record<string, string>>({});

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    const parsed = schema.safeParse(data);

    if (!parsed.success) {
      const next: Record<string, string> = {};
      parsed.error.issues.forEach((issue) => {
        const key = String(issue.path[0]);
        if (!next[key]) next[key] = issue.message;
      });
      setErrors(next);
      toast.error("Please check the highlighted fields.");
      return;
    }

    setErrors({});
    toast.success("Thank you — your enquiry has been prepared.", {
      description:
        "Enquiry delivery is not yet connected. Please contact the practice directly in the meantime.",
    });
    form.reset();
  };

  const Error = ({ name }: { name: string }) =>
    errors[name] ? (
      <p id={`${name}-error`} className="mt-2 text-sm text-destructive">
        {errors[name]}
      </p>
    ) : null;

  return (
    <form onSubmit={onSubmit} noValidate className="max-w-2xl">
      <div className="grid gap-6 sm:grid-cols-2">
        <div className="sm:col-span-2">
          <label htmlFor="name" className="eyebrow">
            Full name
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            className={fieldClass}
            aria-invalid={Boolean(errors["name"])}
            aria-describedby={errors["name"] ? "name-error" : undefined}
          />
          <Error name="name" />
        </div>

        <div>
          <label htmlFor="email" className="eyebrow">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            required
            className={fieldClass}
            aria-invalid={Boolean(errors["email"])}
            aria-describedby={errors["email"] ? "email-error" : undefined}
          />
          <Error name="email" />
        </div>

        <div>
          <label htmlFor="phone" className="eyebrow">
            Phone number
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            required
            className={fieldClass}
            aria-invalid={Boolean(errors["phone"])}
            aria-describedby={errors["phone"] ? "phone-error" : undefined}
          />
          <Error name="phone" />
        </div>

        <div>
          <label htmlFor="preferredContact" className="eyebrow">
            Preferred contact method
          </label>
          <select id="preferredContact" name="preferredContact" defaultValue="Telephone" className={fieldClass}>
            <option>Telephone</option>
            <option>Email</option>
            <option>WhatsApp</option>
          </select>
        </div>

        <div>
          <label htmlFor="reason" className="eyebrow">
            Reason for enquiry
          </label>
          <select id="reason" name="reason" defaultValue={reasons[0]} className={fieldClass}>
            {reasons.map((r) => (
              <option key={r}>{r}</option>
            ))}
          </select>
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="preferredDate" className="eyebrow">
            Preferred date <span className="normal-case tracking-normal">(optional)</span>
          </label>
          <input id="preferredDate" name="preferredDate" type="date" className={fieldClass} />
        </div>

        <div className="sm:col-span-2">
          <label htmlFor="message" className="eyebrow">
            Message
          </label>
          <textarea id="message" name="message" rows={5} maxLength={1000} className={fieldClass} />
          <Error name="message" />
        </div>
      </div>

      <p className="mt-6 border-l-2 border-accent-soft pl-4 text-sm text-muted-foreground">
        Please do not include confidential medical information in this form.
      </p>

      <ActionButton type="submit" className="mt-8">
        Submit Enquiry
      </ActionButton>
    </form>
  );
}
