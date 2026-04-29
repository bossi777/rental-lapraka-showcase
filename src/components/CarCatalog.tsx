import { useState } from "react";
import { cars, type Car } from "@/data/cars";
import CarCard from "./CarCard";
import CarModal from "./CarModal";

export default function CarCatalog() {
  const [selected, setSelected] = useState<Car | null>(null);

  return (
    <section id="katalogu" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-10 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
              Katalogu
            </span>
            <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
              Makinat tona
            </h2>
            <p className="mt-2 max-w-lg text-muted-foreground">
              Klikoni një makinë për të parë detajet, karakteristikat dhe për të rezervuar.
            </p>
          </div>
          <span className="rounded-full bg-secondary px-4 py-2 text-sm text-foreground/70">
            {cars.length} makina të disponueshme
          </span>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {cars.map((car) => (
            <CarCard
              key={car.id}
              car={car}
              onClick={() => setSelected(car)}
            />
          ))}
        </div>
      </div>

      <CarModal car={selected} onClose={() => setSelected(null)} />
    </section>
  );
}