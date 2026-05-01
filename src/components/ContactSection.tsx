import { Phone, Mail, MessageCircle } from "lucide-react";

export default function ContactSection() {
  return (
    <section id="kontakt" className="bg-secondary py-16 md:py-24">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <span className="text-xs font-semibold uppercase tracking-[0.25em] text-gold">
            Kontakt
          </span>
          <h2 className="mt-2 font-display text-3xl font-bold text-foreground md:text-4xl">
            Na shkruani ose telefononi
          </h2>
          <p className="mt-3 text-muted-foreground">
            Jemi në dispozicionin tuaj 24/7, çdo ditë të javës.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 rounded-full border border-gold/40 bg-gold-soft px-5 py-2 text-sm font-semibold text-gold">
            ✈️ Ju sjellim makinën falas deri në aeroport
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-4 md:grid-cols-3">
          <a
            href="tel:+355692276009"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
              <Phone className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Telefon</div>
              <div className="mt-1 font-semibold text-foreground">+355 69 227 6009</div>
            </div>
          </a>

          <a
            href="mailto:laprakarental@gmail.com"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
              <Mail className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">Email</div>
              <div className="mt-1 font-semibold text-foreground">laprakarental@gmail.com</div>
            </div>
          </a>

          <a
            href="https://wa.me/355692276009"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center shadow-[var(--shadow-card)] transition-all hover:-translate-y-1 hover:border-gold"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold">
              <MessageCircle className="h-5 w-5" />
            </div>
            <div>
              <div className="text-xs uppercase tracking-wider text-muted-foreground">WhatsApp</div>
              <div className="mt-1 font-semibold text-foreground">Bisedo me ne</div>
            </div>
          </a>
        </div>

        <div className="mt-8 text-center">
          <a
            href="tel:+355692276009"
            className="inline-flex rounded-full bg-gold px-8 py-3 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105"
          >
            Na telefono tani
          </a>
        </div>
      </div>
    </section>
  );
}