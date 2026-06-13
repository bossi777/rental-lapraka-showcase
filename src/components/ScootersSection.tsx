import scooter1 from "@/assets/scooters-1.jpeg.asset.json";
import scooter2 from "@/assets/scooters-2.jpeg.asset.json";
import { Clock, Sun, Phone } from "lucide-react";

export default function ScootersSection() {
  return (
    <section id="motorra" className="bg-secondary/30 py-16 md:py-24">
      <div className="container">
        <div className="mb-10 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            E Re
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Motorra me Qera
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Lëviz i lirë nëpër qytet me skuterët tanë — të shpejtë, ekonomikë dhe perfektë për të shijuar çdo cep të Tiranës pa stresin e trafikut.
          </p>
        </div>

        <div className="mb-10 grid grid-cols-1 gap-4 md:grid-cols-2">
          <img
            src={scooter1.url}
            alt="Motorra me qera në Rental Lapraka"
            className="h-72 w-full rounded-2xl object-cover shadow-lg md:h-96"
            loading="lazy"
          />
          <img
            src={scooter2.url}
            alt="Skuterë të disponueshëm për qera"
            className="h-72 w-full rounded-2xl object-cover shadow-lg md:h-96"
            loading="lazy"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <div className="rounded-2xl border border-gold/30 bg-card p-6 text-center shadow-sm transition hover:shadow-md">
            <Clock className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Me Orë
            </h3>
            <p className="mt-2 text-3xl font-bold text-gold">400 L<span className="text-base font-medium text-muted-foreground">/orë</span></p>
            <p className="mt-2 text-sm text-muted-foreground">
              Ideale për një shëtitje të shpejtë ose punë të ditës.
            </p>
          </div>

          <div className="rounded-2xl border border-gold/30 bg-card p-6 text-center shadow-sm transition hover:shadow-md">
            <Sun className="mx-auto h-8 w-8 text-gold" />
            <h3 className="mt-3 font-display text-xl font-semibold text-foreground">
              Gjithë Ditën
            </h3>
            <p className="mt-2 text-3xl font-bold text-gold">1500 L<span className="text-base font-medium text-muted-foreground">/ditë</span></p>
            <p className="mt-2 text-sm text-muted-foreground">
              Liri pa kufi nga mëngjesi deri në mbrëmje — çmimi më i mirë në qytet.
            </p>
          </div>
        </div>

        <div className="mt-10 text-center">
          <a
            href="tel:+355692345678"
            className="inline-flex items-center gap-2 rounded-full bg-gold px-6 py-3 font-semibold text-gold-foreground shadow-md transition hover:opacity-90"
          >
            <Phone className="h-4 w-4" />
            Rezervo motorin tënd
          </a>
        </div>
      </div>
    </section>
  );
}