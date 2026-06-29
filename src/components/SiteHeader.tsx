import { Link } from "@tanstack/react-router";
import { Atom, Search } from "lucide-react";
import { ThemeToggle } from "./ThemeToggle";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8">
        <Link to="/" className="flex min-w-0 items-center gap-2">
          <div className="grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground">
            <Atom className="h-5 w-5" />
          </div>
          <div className="min-w-0 leading-tight">
            <div className="truncate text-sm font-semibold text-foreground">Fisika Interaktif</div>
            <div className="truncate text-[11px] text-muted-foreground">SMA 10 · Kurikulum Merdeka</div>
          </div>
        </Link>

        <nav className="ml-6 hidden items-center gap-1 md:flex">
          <Link to="/" className="rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground">Beranda</Link>
          <a href="/#kurikulum" className="rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground">Kurikulum</a>
          <Link to="/panduan" className="rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground">Panduan</Link>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              placeholder="Cari Simulasi..."
              className="h-9 w-56 rounded-md border border-border bg-card pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
            />
          </div>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
