import logo from "@/assets/logo.png";

const navItems = [
  { label: "Kryefaqja", href: "#home" },
  { label: "Kontakt", href: "#kontakt" },
  { label: "Lokacioni", href: "#lokacioni" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="#home" className="flex items-center gap-3">
          <img
            src={logo}
            alt="Rental Lapraka logo"
            className="h-12 w-12 rounded-lg object-cover"
          />
          <div className="flex flex-col leading-tight">
            <span className="font-display text-base font-semibold text-foreground">
              Rental Lapraka
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-gold">
              Premium Cars
            </span>
          </div>
        </a>

        <nav className="hidden md:block">
          <ul className="flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <a
                  href={item.href}
                  className="relative text-sm font-medium text-foreground/80 transition-colors hover:text-gold"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <a
          href="#kontakt"
          className="hidden rounded-full bg-gold px-5 py-2 text-sm font-semibold text-gold-foreground shadow-[var(--shadow-gold)] transition-transform hover:scale-105 md:inline-flex"
        >
          Rezervo
        </a>
      </div>

      <nav className="border-t border-border md:hidden">
        <ul className="container flex items-center justify-around py-2">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-xs font-medium text-foreground/80 transition-colors hover:text-gold"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}