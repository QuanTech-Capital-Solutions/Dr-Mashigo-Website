import { practice } from "@/content/practice";
import { ActionAnchor } from "./Action";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function LocationSection() {
  const { location, hours, contact } = practice;
  const hasMap = Boolean(location.mapsEmbedUrl);

  return (
    <section aria-labelledby="location-heading" className="border-t border-border">
      <Container className="py-24 md:py-32">
        <SectionHeading
          label="Where to Find Us"
          title={<span id="location-heading">Where to Find Us</span>}
          intro="The practice is easy to reach and there is time set aside for each consultation. Please arrive a few minutes early for your first visit."
        />

        <div className="mt-16 grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal className="min-w-0">
            <dl className="divide-y divide-border border-y border-border">
              <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
                <dt className="eyebrow">Practice</dt>
                <dd className="text-[0.9375rem] leading-relaxed">{location.practiceName}</dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
                <dt className="eyebrow">Address</dt>
                <dd className="text-[0.9375rem] leading-relaxed">
                  {location.building}
                  <br />
                  {location.street}
                  <br />
                  {location.suburb}, {location.city}
                  <br />
                  {location.province}, {location.postalCode}
                </dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
                <dt className="eyebrow">Consultation hours</dt>
                <dd className="space-y-1 text-[0.9375rem]">
                  {hours.map((h) => (
                    <p key={h.day}>
                      <span className="text-muted-foreground">{h.day}</span> — {h.time}
                    </p>
                  ))}
                </dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
                <dt className="eyebrow">Telephone</dt>
                <dd className="text-[0.9375rem]">{contact.phone}</dd>
              </div>
              <div className="grid gap-2 py-6 sm:grid-cols-[minmax(0,10rem)_minmax(0,1fr)] sm:gap-6">
                <dt className="eyebrow">Email</dt>
                <dd className="break-words text-[0.9375rem]">{contact.email}</dd>
              </div>
            </dl>

            {location.directionsUrl ? (
              <ActionAnchor
                href={location.directionsUrl}
                target="_blank"
                rel="noreferrer"
                variant="outline"
                className="mt-8"
              >
                Get Directions
              </ActionAnchor>
            ) : (
              <p className="mt-8 text-sm text-muted-foreground">
                [GOOGLE MAPS LOCATION — add the practice map link to enable directions]
              </p>
            )}
          </Reveal>

          <Reveal className="min-w-0">
            <div className="h-full min-h-[22rem] border border-border bg-stone">
              {hasMap ? (
                <iframe
                  title={`Map showing the location of ${location.practiceName}`}
                  src={location.mapsEmbedUrl}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[22rem] w-full"
                />
              ) : (
                <div className="flex h-full min-h-[22rem] items-center justify-center p-10 text-center">
                  <p className="max-w-xs text-sm text-muted-foreground">
                    [GOOGLE MAPS LOCATION] — the practice map will appear here once the exact
                    address has been confirmed.
                  </p>
                </div>
              )}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
