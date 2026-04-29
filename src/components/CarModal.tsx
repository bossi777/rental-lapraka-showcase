import { X, Calendar, Fuel, Settings, Users, Palette } from "lucide-react";
import type { Car } from "@/data/cars";
import { useEffect } from "react";

type Props = {
  car: Car | null;
  onClose: () => void;
};

export default function CarModal({ car, onClose }: Props) {
  useEffect(() => {
    if (!car) return;
    const handler = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", handler);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handler);
      document.body.style.overflow = "";
    };
  }, [car, onClose]);

  if (!car) return null;

  const specs = [
    { icon: Settings, label: "Transmisioni", value: car.transmission },
    { icon: Fuel, label: "Karburanti", value: car.fuel },
    { icon: Users, label: "Vende", value: `${car.seats}` },
    { icon: Calendar, label: "Viti", value: `${car.year}` },
    { icon: Palette, label: "Ngjyra", value: car.color },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-black/60 p-0 backdrop-blur-sm animate-in fade-in md:items-center md:p-4"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl bg-card shadow-2xl animate-in slide-in-from-bottom md:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Mbyll"
          className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-background/90 text-foreground shadow-md transition-colors hover:bg-gold hover:text-gold-foreground"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="aspect-[16/10] w-full overflow-hidden bg-secondary">
          <img
            src={car.image}
            alt={car.name}
            className="h-full w-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <h2 className="font-display text-2xl font-bold text-foreground md:text-3xl">
                {car.name}
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">{car.year}</p>
            </div>
            <div className="rounded-2xl bg-gold-soft px-5 py-3 text-right">
              <div className="font-display text-3xl font-bold text-gold">
                €{car.price}
              </div>
              <div className="text-xs font-medium text-foreground/70">
                për ditë
              </div>
            </div>
          </div>

          <p className="mt-5 leading-relaxed text-foreground/80">
            {car.description}
          </p>

          <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {specs.map(({ icon: Icon, label, value }) => (
              <div
                key={label}
                className="rounded-xl border border-border bg-secondary/50 p-4"
              >
                <Icon className="h-5 w-5 text-gold" />
                <div className="mt-2 text-[11px] uppercase tracking-wider text-muted-foreground">
                  {label}
                </div>
                <div className="text-sm font-semibold text-foreground">
                  {value}
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex flex-col gap-2 sm:flex-row">
            <a
              href="tel:+355691234567"
              className="flex-1 rounded-full bg-gold py-3 text-center text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-[1.02]"
            >
              Rezervo tani
            </a>
            <a
              href={`https://wa.me/355691234567?text=Përshëndetje, jam i interesuar për ${encodeURIComponent(car.name)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 rounded-full border border-border bg-background py-3 text-center text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}