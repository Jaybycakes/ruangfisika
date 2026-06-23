import { createFileRoute, Link } from "@tanstack/react-router";
import { BookOpen, Clock, GraduationCap, ArrowRight } from "lucide-react";
import { SiteHeader } from "@/components/SiteHeader";
import { UNITS } from "@/lib/curriculum";

export const Route = createFileRoute("/panduan/")({
  head: () => ({
    meta: [
      { title: "Panduan Guru — Fisika Interaktif" },
      {
        name: "description",
        content:
          "Kumpulan panduan mengajar untuk setiap unit simulasi fisika SMA 10 Kurikulum Merdeka: tujuan pembelajaran, alur sesi, pertanyaan diskusi, dan asesmen.",
      },
    ],
  }),
  component: PanduanIndex,
});

function PanduanIndex() {
  const sem1 = UNITS.filter((u) => u.semester === 1);
  const sem2 = UNITS.filter((u) => u.semester === 2);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <section className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent">
            <BookOpen className="h-3.5 w-3.5" /> Panduan Guru
          </div>
          <h1 className="mt-4 text-3xl font-semibold text-foreground sm:text-4xl">
            Panduan Mengajar Fisika SMA 10
          </h1>
          <p className="mt-3 max-w-2xl text-base text-muted-foreground">
            Setiap unit dilengkapi panduan mengajar lengkap: capaian pembelajaran, alur sesi
            90 menit, pertanyaan diskusi, miskonsepsi umum, rubrik asesmen, dan tips
            diferensiasi — siap pakai di kelas.
          </p>
          <div className="mt-5 flex flex-wrap gap-2 text-xs">
            <Pill><GraduationCap className="mr-1 h-3 w-3" /> Kelas X · Fase E</Pill>
            <Pill><Clock className="mr-1 h-3 w-3" /> 2 × 45 menit per unit</Pill>
            <Pill>Kurikulum Merdeka</Pill>
          </div>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14">
        <SemesterBlock label="Semester 1" units={sem1} />
        <div className="mt-12">
          <SemesterBlock label="Semester 2" units={sem2} />
        </div>
      </main>
    </div>
  );
}

function SemesterBlock({ label, units }: { label: string; units: typeof UNITS }) {
  return (
    <section>
      <div className="mb-5 flex items-baseline justify-between">
        <h2 className="text-lg font-semibold text-foreground">{label}</h2>
        <span className="text-xs text-muted-foreground">{units.length} unit</span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((u) => {
          const Icon = u.icon;
          return (
            <Link
              key={u.id}
              to="/panduan/$unitId"
              params={{ unitId: u.id }}
              className="group flex flex-col rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card"
            >
              <div className="flex items-start gap-3">
                <div className="grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <div className="text-[10px] font-semibold uppercase tracking-wide text-muted-foreground">
                    {u.topic}
                  </div>
                  <h3 className="mt-0.5 truncate text-sm font-semibold text-card-foreground">
                    {u.title}
                  </h3>
                </div>
              </div>
              <p className="mt-3 line-clamp-2 text-xs text-muted-foreground">{u.description}</p>
              <div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs">
                <span className="text-muted-foreground">Lihat panduan</span>
                <ArrowRight className="h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" />
              </div>
            </Link>
          );
        })}
      </div>
    </section>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
      {children}
    </span>
  );
}
