export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-primary text-primary-foreground"
    >
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, hsl(var(--gold) / 0.6), transparent 40%), radial-gradient(circle at 80% 60%, hsl(var(--gold) / 0.3), transparent 50%)",
        }}
      />
      <div className="container relative py-20 md:py-28">
        <div className="max-w-2xl">
          <span className="inline-block rounded-full border border-gold/40 bg-gold/10 px-4 py-1 text-xs font-medium uppercase tracking-[0.25em] text-gold">
            Qira makinash në Tiranë
          </span>
          <h1 className="mt-6 font-display text-4xl font-bold leading-tight md:text-6xl">
            Lëviz me <span className="text-gold">stil</span>,
            <br />
            udhëto me siguri.
          </h1>
          <p className="mt-5 max-w-xl text-base text-primary-foreground/70 md:text-lg">
            Zgjidh nga flota jonë e makinave premium — nga kompaktet ekonomike
            te SUV-të luksoze. Çmime transparente, pa surpriza.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#katalogu"
              className="rounded-full bg-gold px-7 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
            >
              Shiko makinat
            </a>
            <a
              href="#kontakt"
              className="rounded-full border border-primary-foreground/30 px-7 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary-foreground/10"
            >
              Na kontakto
            </a>
          </div>

          <div className="mt-8 inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/10 px-5 py-3 text-sm font-medium text-gold">
            <span className="flex h-2 w-2 rounded-full bg-gold" />
            Transport falas i makinës deri në Aeroportin “Nënë Tereza”
          </div>
        </div>
      </div>
    </section>
  );
}