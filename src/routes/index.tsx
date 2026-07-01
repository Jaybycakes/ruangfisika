import { createFileRoute, Link } from "@tanstack/react-router";
import { useMemo, useState } from "react";
import { ArrowRight, BarChart3, Play, Sparkles } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { UNITS, type Unit } from "@/lib/curriculum";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Fisika Interaktif · SMA 10 — Kurikulum Merdeka" },
      { name: "description", content: "Dashboard simulasi fisika interaktif untuk guru SMA kelas 10 sesuai Kurikulum Merdeka." },
      { property: "og:title", content: "Fisika Interaktif · SMA 10" },
      { property: "og:description", content: "Simulasi fisika interaktif untuk ruang kelas modern." },
    ],
  }),
  component: Dashboard,
});

const accentClass: Record<Unit["accent"], string> = {
  blue: "bg-accent/10 text-accent ring-1 ring-accent/20",
  teal: "bg-teal/15 text-teal ring-1 ring-teal/25",
  orange: "bg-orange/15 text-orange ring-1 ring-orange/25",
};

function Dashboard() {
  const [semester, setSemester] = useState<1 | 2>(1);
  const filtered = useMemo(() => UNITS.filter((u) => u.semester === semester), [semester]);
  const sem1 = UNITS.filter((u) => u.semester === 1).length;
  const sem2 = UNITS.filter((u) => u.semester === 2).length;

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden border-b border-border bg-gradient-to-br from-primary via-primary to-[color-mix(in_oklab,var(--color-primary)_70%,var(--color-accent))] text-primary-foreground">
        <div className="absolute inset-0 grid-bg opacity-[0.12]" aria-hidden />
        <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur">
            <Sparkles className="h-3.5 w-3.5" />
            Untuk Guru Fisika · Kurikulum Merdeka
          </div>
          <h1 className="mt-5 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">
            Simulasi Fisika SMA Kelas 10 <span className="text-white/80">(Kurikulum Merdeka)</span>
          </h1>
          <p className="mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
            Tingkatkan keterlibatan di kelas dengan simulasi interaktif siap-proyektor. Pilih unit, atur parameter, dan ajak siswa bereksperimen secara langsung.
          </p>
          <div className="mt-7 flex flex-wrap items-center gap-3">
            <a
              href="#kurikulum"
              className="inline-flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-orange-foreground shadow-soft transition-transform hover:scale-[1.02]"
            >
              <Play className="h-4 w-4 fill-current" />
              Mulai Mengajar
            </a>
            <a
              href="#panduan"
              className="inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10"
            >
              Lihat Panduan Guru
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          <dl className="mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:gap-8">
            <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
              <dt className="text-xs text-white/70">Unit Kurikulum</dt>
              <dd className="mt-1 text-xl font-bold sm:text-2xl">13</dd>
            </div>
            <div className="rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur">
              <dt className="flex items-center gap-1.5 text-xs text-white/70">
                <BarChart3 className="h-3.5 w-3.5" />
                Grafik & Analisis Real-Time
              </dt>
              <dd className="mt-1 text-xl font-bold sm:text-2xl">Langsung di Kelas</dd>
              <dd className="mt-0.5 text-[11px] text-white/60">Visualisasi data interaktif untuk setiap simulasi</dd>
            </div>
          </dl>
        </div>
      </section>

      {/* Custom Quiz Banner */}
      <section className="border-b border-border bg-card">
        <div className="mx-auto max-w-7xl px-4 py-5 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-semibold text-foreground">🎯 Kuis Kustom</p>
              <p className="text-xs text-muted-foreground mt-0.5">Pilih unit mana saja dan buat soal latihan gabungan untuk siswa.</p>
            </div>
            <a
              href="/kuis-kustom.html"
              className="inline-flex shrink-0 items-center gap-2 rounded-md bg-accent px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-accent/90"
            >
              Buat Kuis
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      </section>

      {/* Curriculum */}
      <section id="kurikulum" className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:items-end sm:justify-between">
          <div className="min-w-0">
            <h2 className="text-2xl font-bold tracking-tight text-foreground sm:text-3xl">Kurikulum Fisika</h2>
            <p className="mt-1 text-sm text-muted-foreground">Pilih unit untuk membuka ruang kerja simulasi.</p>
          </div>
          <SemesterToggle value={semester} onChange={setSemester} />
        </div>

        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filtered.map((u) => {
            const Icon = u.icon;
            return (
              <article
                key={u.id}
                className="group flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card"
              >
                <div className="flex items-start justify-between">
                  <div className={`grid h-11 w-11 place-items-center rounded-lg ${accentClass[u.accent]}`}>
                    <Icon className="h-5 w-5" />
                  </div>
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground">
                    {u.topic}
                  </span>
                </div>
                <h3 className="mt-4 text-base font-semibold text-card-foreground">{u.title}</h3>
                <p className="mt-1.5 line-clamp-2 text-sm text-muted-foreground">{u.description}</p>
                <div className="mt-5 flex items-center justify-between border-t border-border pt-4">
                  <span className="text-xs text-muted-foreground">Semester {u.semester}</span>
                  <Link
                    to="/simulasi/$unitId"
                    params={{ unitId: u.id }}
                    className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                  >
                    Buka Simulasi
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                  </Link>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <section id="panduan" className="border-t border-border bg-secondary/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              { t: "Siap Proyektor", d: "Tipografi besar dan kontras tinggi untuk kelas yang terang." },
              { t: "Parameter Interaktif", d: "Atur variabel secara langsung dan amati perubahan grafiknya." },
              { t: "Panduan Guru", d: "Tujuan pembelajaran dan pertanyaan diskusi tersedia di setiap unit." },
            ].map((c) => (
              <div key={c.t} className="rounded-lg border border-border bg-card p-5 shadow-soft">
                <h3 className="text-sm font-semibold text-card-foreground">{c.t}</h3>
                <p className="mt-1.5 text-sm text-muted-foreground">{c.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="border-t border-border py-8">
        <div className="mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6">
          © {new Date().getFullYear()} Fisika Interaktif · Dibuat untuk guru Indonesia.
        </div>
      </footer>
    </div>
  );
}

function SemesterToggle({ value, onChange }: { value: 1 | 2; onChange: (v: 1 | 2) => void }) {
  return (
    <div className="inline-flex shrink-0 rounded-md border border-border bg-card p-1 shadow-soft">
      {([1, 2] as const).map((s) => (
        <button
          key={s}
          onClick={() => onChange(s)}
          className={`rounded-[5px] px-4 py-1.5 text-sm font-medium transition-colors ${
            value === s
              ? "bg-primary text-primary-foreground shadow-sm"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          Semester {s}
        </button>
      ))}
    </div>
  );
}
