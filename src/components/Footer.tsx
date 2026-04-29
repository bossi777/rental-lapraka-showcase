export default function Footer() {
  return (
    <footer className="border-t border-border bg-primary py-8 text-primary-foreground">
      <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-gold text-gold-foreground">
            <span className="font-display text-sm font-bold tracking-wider">RL</span>
          </div>
          <span className="font-display text-sm font-semibold">Rental Lapraka</span>
        </div>
        <p className="text-xs text-primary-foreground/60">
          © {new Date().getFullYear()} Rental Lapraka. Të gjitha të drejtat e rezervuara.
        </p>
      </div>
    </footer>
  );
}