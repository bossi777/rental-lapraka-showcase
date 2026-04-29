import { MapPin, Clock } from "lucide-react";

export default function LocationSection() {
  return (
    <section id="lokacioni" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Lokacioni
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Na gjeni në Laprakë
          </h2>
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-6 md:grid-cols-5">
          <div className="md:col-span-2 flex flex-col gap-4">
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Adresa</div>
                  <div className="mt-1 font-semibold text-foreground">
                    Rruga Gjergj Legisi, Laprakë
                  </div>
                  <div className="text-sm text-muted-foreground">Tiranë, Shqipëri</div>
                </div>
              </div>
            </div>
            <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gold-soft text-gold">
                  <Clock className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-xs uppercase tracking-wider text-muted-foreground">Orari</div>
                  <div className="mt-1 font-semibold text-foreground">Hapur 24/7</div>
                  <div className="text-sm text-muted-foreground">Çdo ditë, në çdo orar</div>
                </div>
              </div>
            </div>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Rruga+Gjergj+Legisi+Laprak%C3%AB+Tiran%C3%AB"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary py-3 text-center text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              Hape në Google Maps
            </a>
          </div>

          <div className="md:col-span-3 overflow-hidden rounded-2xl border border-border shadow-[var(--shadow-card)]">
            <iframe
              title="Lokacioni Rental Lapraka"
              src="https://www.google.com/maps?q=Rruga+Gjergj+Legisi,+Laprak%C3%AB,+Tiran%C3%AB&output=embed"
              loading="lazy"
              className="h-80 w-full md:h-full"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </section>
  );
}