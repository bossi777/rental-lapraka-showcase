import { useState } from "react";
import scooter1 from "@/assets/scooters-1.jpeg.asset.json";
import scooter2 from "@/assets/scooters-2.jpeg.asset.json";
import { Clock, Sun, Phone, X } from "lucide-react";

export default function ScootersSection() {
  const [open, setOpen] = useState(false);

  return (
    <section id="motorra" className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            E Re
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Motorra me Qera
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Kliko foton për të parë çmimet dhe detajet.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-2xl shadow-lg transition hover:shadow-xl"
        >
          <img
            src={scooter1.url}
            alt="Motorra me qera në Rental Lapraka"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 p-6 text-left">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              Motorra me Qera
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
              <div className="grid grid-cols-2 gap-1 bg-black">
                <img
                  src={scooter1.url}
                  alt="Skuter 1"
                  className="h-40 w-full object-cover md:h-56"
                />
                <img
                  src={scooter2.url}
                  alt="Skuter 2"
                  className="h-40 w-full object-cover md:h-56"
                />
              </div>
              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  Motorra me Qera
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Lëviz i lirë nëpër qytet me skuterët tanë — të shpejtë, ekonomikë dhe perfektë për të shijuar Tiranën pa stresin e trafikut.
                </p>

                <div className="mt-5 space-y-3">
                  <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-background p-4">
                    <div className="flex items-center gap-3">
                      <Clock className="h-6 w-6 text-gold" />
                      <span className="font-medium text-foreground">Me Orë</span>
                    </div>
                    <span className="text-lg font-bold text-gold">400 L</span>
                  </div>
                  <div className="flex items-center justify-between rounded-xl border border-gold/30 bg-background p-4">
                    <div className="flex items-center gap-3">
                      <Sun className="h-6 w-6 text-gold" />
                      <span className="font-medium text-foreground">Gjithë Ditën</span>
                    </div>
                    <span className="text-lg font-bold text-gold">1500 L</span>
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