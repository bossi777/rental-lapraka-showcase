import type { Car } from "@/data/cars";

type Props = {
  car: Car;
  onClick: () => void;
};

export default function CarCard({ car, onClick }: Props) {
  return (
    <button
      onClick={onClick}
      className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card text-left shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold/50 hover:shadow-[var(--shadow-gold)]"
    >
      <div className="aspect-[16/10] overflow-hidden bg-secondary">
        <img
          src={car.image}
          alt={car.name}
          loading="lazy"
          width={1024}
          height={640}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-3 p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="font-display text-lg font-semibold text-foreground">
              {car.name}
            </h3>
            <p className="text-xs text-muted-foreground">
              {car.year} • {car.transmission} • {car.fuel}
            </p>
          </div>
        </div>
        <div className="mt-auto flex items-center justify-between border-t border-border pt-4">
          <div>
            <span className="font-display text-2xl font-bold text-gold">
              €{car.price}
            </span>
            <span className="text-sm text-muted-foreground"> / ditë</span>
          </div>
          <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-foreground/70 transition-colors group-hover:bg-gold group-hover:text-gold-foreground">
            Detaje →
          </span>
        </div>
      </div>
    </button>
  );
}