import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import { useState } from "react";
import {
  ChevronRight, Maximize2, Pause, Play, RotateCcw, BookOpen, X,
  Gauge, Activity, Settings2,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getUnit } from "@/lib/curriculum";

export const Route = createFileRoute("/simulasi/$unitId")({
  head: ({ params }) => {
    const unit = getUnit(params.unitId);
    const title = unit ? `${unit.title} · Simulasi` : "Simulasi";
    return {
      meta: [
        { title: `${title} — Fisika Interaktif` },
        { name: "description", content: unit?.description ?? "Ruang kerja simulasi fisika interaktif." },
      ],
    };
  },
  loader: ({ params }) => {
    const unit = getUnit(params.unitId);
    if (!unit) throw notFound();
    return { unit };
  },
  component: Workspace,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background p-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Unit tidak ditemukan</h1>
        <Link to="/" className="mt-4 inline-block text-accent hover:underline">Kembali ke Beranda</Link>
      </div>
    </div>
  ),
  errorComponent: ({ error }) => (
    <div className="grid min-h-screen place-items-center bg-background p-6 text-center text-sm text-muted-foreground">
      {error.message}
    </div>
  ),
});

function Workspace() {
  const { unit } = Route.useLoaderData();
  const [playing, setPlaying] = useState(false);
  const [notesOpen, setNotesOpen] = useState(false);
  const [friction, setFriction] = useState(true);
  const [velocity, setVelocity] = useState(20);
  const [mass, setMass] = useState(2);
  const [angle, setAngle] = useState(45);
  const [preset, setPreset] = useState("default");

  const toggleFullscreen = () => {
    if (typeof document === "undefined") return;
    if (document.fullscreenElement) document.exitFullscreen();
    else document.documentElement.requestFullscreen?.();
  };

  return (
    <div className="flex min-h-screen flex-col bg-background">
      {/* Top bar */}
      <header className="border-b border-border bg-card">
        <div className="flex h-14 items-center gap-3 px-4 sm:px-6">
          <nav aria-label="breadcrumb" className="flex min-w-0 items-center gap-1.5 text-sm">
            <Link to="/" className="shrink-0 text-muted-foreground hover:text-foreground">Dashboard</Link>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="shrink-0 text-muted-foreground">Semester {unit.semester}</span>
            <ChevronRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
            <span className="truncate font-semibold text-foreground">{unit.title}</span>
          </nav>

          <div className="ml-auto flex items-center gap-2">
            <button
              onClick={() => setNotesOpen(true)}
              className="inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary"
            >
              <BookOpen className="h-3.5 w-3.5" />
              <span className="hidden sm:inline">Panduan Guru</span>
            </button>
            <button
              onClick={toggleFullscreen}
              className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary"
              aria-label="Layar penuh"
            >
              <Maximize2 className="h-4 w-4" />
            </button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Body */}
      <div className="flex flex-1 flex-col lg:flex-row">
        {/* Main area */}
        <div className="flex flex-1 flex-col">
          {/* Canvas */}
          <div className="relative flex-1 border-b border-border bg-secondary/30 p-4 sm:p-6">
            <div className="relative h-[420px] w-full overflow-hidden rounded-lg border border-border bg-background grid-bg lg:h-full lg:min-h-[420px]">
              <div className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-card/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur">
                <span className={`h-1.5 w-1.5 rounded-full ${playing ? "bg-orange" : "bg-muted-foreground"}`} />
                {playing ? "Berjalan" : "Siap"}
              </div>
              <div className="absolute inset-0 grid place-items-center">
                <div className="text-center">
                  <div className="mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent">
                    <unit.icon className="h-7 w-7" />
                  </div>
                  <p className="mt-3 text-sm font-medium text-foreground">Kanvas Simulasi</p>
                  <p className="mt-1 max-w-sm text-xs text-muted-foreground">
                    Area interaktif untuk {unit.title.toLowerCase()} akan dimuat di sini.
                  </p>
                </div>
              </div>

              {/* Floating playback */}
              <div className="absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/90 px-2 py-1.5 shadow-card backdrop-blur">
                <button
                  onClick={() => setPlaying((p) => !p)}
                  className="inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-1.5 text-xs font-semibold text-orange-foreground hover:opacity-90"
                >
                  {playing ? <Pause className="h-3.5 w-3.5" /> : <Play className="h-3.5 w-3.5 fill-current" />}
                  {playing ? "Pause" : "Play"}
                </button>
                <button
                  onClick={() => setPlaying(false)}
                  className="inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary"
                >
                  <RotateCcw className="h-3.5 w-3.5" /> Reset
                </button>
              </div>
            </div>
          </div>

          {/* Data & Graphs */}
          <div className="grid grid-cols-1 gap-4 p-4 sm:p-6 lg:grid-cols-2">
            <Panel title="Grafik Real-time" icon={<Activity className="h-4 w-4" />}>
              <FakeChart />
            </Panel>
            <Panel title="Data Pengukuran" icon={<Gauge className="h-4 w-4" />}>
              <table className="w-full text-left text-sm">
                <thead className="text-xs uppercase tracking-wide text-muted-foreground">
                  <tr>
                    <th className="pb-2 font-medium">Waktu (s)</th>
                    <th className="pb-2 font-medium">Posisi (m)</th>
                    <th className="pb-2 font-medium">Kecepatan (m/s)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-border text-foreground">
                  {[0, 1, 2, 3, 4].map((t) => (
                    <tr key={t}>
                      <td className="py-1.5 tabular-nums">{t.toFixed(1)}</td>
                      <td className="py-1.5 tabular-nums">{(velocity * t).toFixed(2)}</td>
                      <td className="py-1.5 tabular-nums">{velocity.toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Panel>
          </div>
        </div>

        {/* Right control panel */}
        <aside className="w-full shrink-0 border-t border-border bg-sidebar text-sidebar-foreground lg:w-[340px] lg:border-l lg:border-t-0">
          <div className="flex items-center gap-2 border-b border-sidebar-border px-5 py-4">
            <Settings2 className="h-4 w-4 text-sidebar-primary" />
            <h2 className="text-sm font-semibold">Parameter Kontrol</h2>
          </div>
          <div className="space-y-5 p-5">
            <Slider label="Kecepatan Awal" unit="m/s" min={0} max={100} value={velocity} onChange={setVelocity} />
            <Slider label="Massa Benda" unit="kg" min={0.1} max={20} step={0.1} value={mass} onChange={setMass} />
            <Slider label="Sudut Elevasi" unit="°" min={0} max={90} value={angle} onChange={setAngle} />

            <Field label="Preset Skenario">
              <select
                value={preset}
                onChange={(e) => setPreset(e.target.value)}
                className="h-9 w-full rounded-md border border-sidebar-border bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              >
                <option value="default">Default</option>
                <option value="vakum">Ruang Hampa</option>
                <option value="bumi">Permukaan Bumi</option>
                <option value="bulan">Permukaan Bulan</option>
              </select>
            </Field>

            <Field label="Percepatan Gravitasi (m/s²)">
              <input
                type="number"
                defaultValue={9.8}
                step={0.1}
                className="h-9 w-full rounded-md border border-sidebar-border bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
              />
            </Field>

            <Toggle label="Gesekan" checked={friction} onChange={setFriction} />
            <Toggle label="Tampilkan Vektor" defaultChecked />
            <Toggle label="Lintasan" defaultChecked />
          </div>
        </aside>
      </div>

      {/* Teacher notes */}
      {notesOpen && (
        <div className="fixed inset-0 z-50 flex">
          <div className="flex-1 bg-foreground/30 backdrop-blur-sm" onClick={() => setNotesOpen(false)} />
          <div className="flex w-full max-w-md flex-col border-l border-border bg-card shadow-card">
            <div className="flex items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-2">
                <BookOpen className="h-4 w-4 text-accent" />
                <h3 className="text-sm font-semibold text-card-foreground">Panduan Guru</h3>
              </div>
              <button onClick={() => setNotesOpen(false)} aria-label="Tutup" className="rounded-md p-1 hover:bg-secondary">
                <X className="h-4 w-4" />
              </button>
            </div>
            <div className="flex-1 space-y-6 overflow-y-auto p-5 text-sm text-foreground">
              <section>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Tujuan Pembelajaran</h4>
                <ul className="mt-2 list-disc space-y-1.5 pl-5 text-foreground/90">
                  <li>Siswa dapat menjelaskan konsep utama {unit.title.toLowerCase()}.</li>
                  <li>Siswa dapat menganalisis pengaruh parameter terhadap hasil simulasi.</li>
                  <li>Siswa dapat menarik kesimpulan dari data eksperimen.</li>
                </ul>
              </section>
              <section>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Pertanyaan Diskusi</h4>
                <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-foreground/90">
                  <li>Apa yang terjadi ketika parameter diubah?</li>
                  <li>Bagaimana grafik berubah seiring waktu?</li>
                  <li>Apakah hasil sesuai dengan prediksi teoritis?</li>
                </ol>
              </section>
              <section>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Catatan Mengajar</h4>
                <p className="mt-2 text-foreground/80">
                  Gunakan mode layar penuh saat menyajikan di proyektor agar visualisasi terlihat jelas dari belakang kelas.
                </p>
              </section>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function Panel({ title, icon, children }: { title: string; icon: React.ReactNode; children: React.ReactNode }) {
  return (
    <div className="rounded-lg border border-border bg-card p-4 shadow-soft">
      <div className="mb-3 flex items-center gap-2">
        <span className="text-muted-foreground">{icon}</span>
        <h3 className="text-sm font-semibold text-card-foreground">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="mb-1.5 block text-xs font-medium text-sidebar-foreground/80">{label}</label>
      {children}
    </div>
  );
}

function Slider({
  label, unit, min, max, step = 1, value, onChange,
}: { label: string; unit: string; min: number; max: number; step?: number; value: number; onChange: (v: number) => void }) {
  return (
    <div>
      <div className="mb-1.5 flex items-baseline justify-between">
        <label className="text-xs font-medium text-sidebar-foreground/80">{label}</label>
        <span className="text-xs font-semibold tabular-nums text-foreground">{value} <span className="text-muted-foreground">{unit}</span></span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sidebar-accent accent-accent"
      />
    </div>
  );
}

function Toggle({
  label, checked, defaultChecked, onChange,
}: { label: string; checked?: boolean; defaultChecked?: boolean; onChange?: (v: boolean) => void }) {
  const [internal, setInternal] = useState(defaultChecked ?? false);
  const isOn = checked ?? internal;
  const handle = () => {
    const next = !isOn;
    if (onChange) onChange(next);
    else setInternal(next);
  };
  return (
    <button onClick={handle} className="flex w-full items-center justify-between rounded-md border border-sidebar-border bg-background px-3 py-2 text-left">
      <span className="text-sm text-foreground">{label}</span>
      <span className={`relative inline-block h-5 w-9 rounded-full transition-colors ${isOn ? "bg-accent" : "bg-muted"}`}>
        <span className={`absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${isOn ? "translate-x-4" : "translate-x-0.5"}`} />
      </span>
    </button>
  );
}

function FakeChart() {
  // Decorative SVG: line graph mockup
  const pts = Array.from({ length: 24 }, (_, i) => {
    const x = (i / 23) * 100;
    const y = 50 - Math.sin(i / 3) * 20 - i * 0.6;
    return `${x},${y}`;
  }).join(" ");
  return (
    <div className="relative h-44 w-full">
      <svg viewBox="0 0 100 60" preserveAspectRatio="none" className="absolute inset-0 h-full w-full">
        {[10, 20, 30, 40, 50].map((y) => (
          <line key={y} x1="0" y1={y} x2="100" y2={y} stroke="currentColor" className="text-border" strokeWidth="0.2" />
        ))}
        <polyline fill="none" stroke="currentColor" className="text-accent" strokeWidth="1.2" points={pts} />
        <polyline
          fill="none"
          stroke="currentColor"
          className="text-orange"
          strokeWidth="1.2"
          strokeDasharray="2 2"
          points={Array.from({ length: 24 }, (_, i) => `${(i / 23) * 100},${30 + Math.cos(i / 4) * 10}`).join(" ")}
        />
      </svg>
      <div className="absolute bottom-1 left-1 flex gap-3 text-[10px] text-muted-foreground">
        <span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded bg-accent" />Kecepatan</span>
        <span className="flex items-center gap-1"><span className="h-1.5 w-3 rounded bg-orange" />Percepatan</span>
      </div>
    </div>
  );
}
