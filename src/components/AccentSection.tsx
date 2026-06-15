import { useState } from "react";
import accent from "@/assets/hyundai-accent-final.jpg.asset.json";
import { Settings, Fuel, Palette, Gauge, Phone, X } from "lucide-react";

export default function AccentSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="makina" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Makina me Qera
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Hyundai Accent 2013
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Kliko foton për të parë detajet e plota.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-lg transition hover:shadow-xl"
        >
          <img
            src={accent.url}
            alt="Hyundai Accent 2013"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              Hyundai Accent VGT
            </h3>
            <p className="mt-1 text-sm text-white/80">Kliko për detaje →</p>
          </div>
        </button>

        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-4"
            onClick={() => setOpen(false)}
          >
            <div
              className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-2xl bg-card shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setOpen(false)}
                className="absolute right-3 top-3 z-10 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                aria-label="Mbyll"
              >
                <X className="h-4 w-4" />
              </button>
              <img
                src={accent.url}
                alt="Hyundai Accent 2013"
                className="h-56 w-full bg-black object-cover md:h-72"
              />
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Hyundai Accent VGT 2013
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Komode, ekonomike dhe e besueshme — perfekte për qytet dhe udhëtime të gjata.
                </p>

                <div className="mt-5 grid grid-cols-2 gap-3">
                  <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-background p-3">
                    <Settings className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Transmisioni</p>
                      <p className="text-sm font-semibold text-foreground">Automatik</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-background p-3">
                    <Gauge className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Motori</p>
                      <p className="text-sm font-semibold text-foreground">1.6</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-background p-3">
                    <Fuel className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Karburanti</p>
                      <p className="text-sm font-semibold text-foreground">Benzinë</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-background p-3">
                    <Palette className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Ngjyra</p>
                      <p className="text-sm font-semibold text-foreground">E bardhë</p>
                    </div>
                  </div>
                </div>

                <a
                  href="tel:+355692345678"
                  className="mt-5 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground shadow-md transition hover:opacity-90"
                >
                  <Phone className="h-4 w-4" />
                  Rezervo tani
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}