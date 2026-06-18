import { useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import img1 from "@/assets/bmw-x2-1.jpeg.asset.json";
import img2 from "@/assets/bmw-x2-2.jpeg.asset.json";
import img3 from "@/assets/bmw-x2-3.jpeg.asset.json";
import img4 from "@/assets/bmw-x2-4.jpeg.asset.json";
import img5 from "@/assets/bmw-x2-5.jpeg.asset.json";
import img6 from "@/assets/bmw-x2-6.jpeg.asset.json";
import { Settings, Fuel, Palette, Gauge, Phone, X, ChevronLeft, ChevronRight } from "lucide-react";

const images = [img1.url, img2.url, img3.url, img4.url, img5.url, img6.url];

export default function BmwSection() {
  const [open, setOpen] = useState(false);
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  return (
    <section id="bmw" className="bg-background py-16 md:py-24">
      <div className="container">
        <div className="mb-8 text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Makina me Qera
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            BMW X2 2017
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-muted-foreground">
            Kliko foton për të parë detajet dhe galerinë.
          </p>
        </div>

        <button
          onClick={() => setOpen(true)}
          className="group relative mx-auto block w-full max-w-2xl overflow-hidden rounded-2xl bg-black shadow-lg transition hover:shadow-xl"
        >
          <img
            src={images[0]}
            alt="BMW X2 2017"
            className="h-72 w-full object-cover transition duration-500 group-hover:scale-105 md:h-96"
            loading="lazy"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-left">
            <h3 className="font-display text-2xl font-bold text-white md:text-3xl">
              BMW X2 2017
            </h3>
            <p className="mt-1 text-sm text-white/80">Kliko për galerinë →</p>
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

              <div className="relative">
                <div className="overflow-hidden" ref={emblaRef}>
                  <div className="flex">
                    {images.map((src, i) => (
                      <div key={i} className="min-w-0 flex-[0_0_100%]">
                        <img
                          src={src}
                          alt={`BMW X2 foto ${i + 1}`}
                          className="h-64 w-full bg-black object-cover md:h-80"
                        />
                      </div>
                    ))}
                  </div>
                </div>
                <button
                  onClick={() => emblaApi?.scrollPrev()}
                  className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Mbrapa"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={() => emblaApi?.scrollNext()}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white hover:bg-black/70"
                  aria-label="Para"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6">
                <h3 className="font-display text-2xl font-bold text-foreground">
                  BMW X2 2017
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Elegante, e fuqishme dhe komode — me panoramik dhe interier premium.
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
                      <p className="text-sm font-semibold text-foreground">2.0</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3 rounded-xl border border-gold/30 bg-background p-3">
                    <Fuel className="h-5 w-5 text-gold" />
                    <div>
                      <p className="text-xs text-muted-foreground">Karburanti</p>
                      <p className="text-sm font-semibold text-foreground">Naftë</p>
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