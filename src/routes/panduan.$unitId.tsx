import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft, BookOpen, Target, MessageCircleQuestion, Lightbulb,
  ClipboardCheck, AlertTriangle, Clock, Sparkles, GraduationCap, Play,
} from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";
import { getUnit } from "@/lib/curriculum";

export const Route = createFileRoute("/panduan/$unitId")({
  head: ({ params }) => {
    const unit = getUnit(params.unitId);
    const title = unit ? `Panduan Guru · ${unit.title}` : "Panduan Guru";
    return {
      meta: [
        { title: `${title} — Fisika Interaktif` },
        {
          name: "description",
          content: unit
            ? `Panduan mengajar lengkap untuk unit ${unit.title}: tujuan pembelajaran, alur sesi 45 menit, pertanyaan diskusi, miskonsepsi umum, dan asesmen.`
            : "Panduan mengajar untuk simulasi fisika SMA 10.",
        },
      ],
    };
  },
  loader: ({ params }) => {
    const unit = getUnit(params.unitId);
    if (!unit) throw notFound();
    return { unit };
  },
  component: PanduanPage,
  notFoundComponent: () => (
    <div className="grid min-h-screen place-items-center bg-background p-6 text-center">
      <div>
        <h1 className="text-2xl font-semibold text-foreground">Panduan tidak ditemukan</h1>
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

function PanduanPage() {
  const { unit } = Route.useLoaderData();
  const Icon = unit.icon;

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="border-b border-border bg-card">
        <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:px-6">
          <Link
            to="/simulasi/$unitId"
            params={{ unitId: unit.id }}
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            <span>Kembali ke Simulasi</span>
          </Link>
          <div className="ml-auto flex items-center gap-2">
            <Link
              to="/simulasi/$unitId"
              params={{ unitId: unit.id }}
              className="inline-flex items-center gap-1.5 rounded-md bg-orange px-3 py-1.5 text-xs font-semibold text-orange-foreground hover:opacity-90"
            >
              <Play className="h-3.5 w-3.5 fill-current" /> Mulai Simulasi
            </Link>
            <ThemeToggle />
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="border-b border-border bg-gradient-to-b from-secondary/40 to-background">
        <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14">
          <div className="flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent">
            <BookOpen className="h-3.5 w-3.5" /> Panduan Guru · Semester {unit.semester}
          </div>
          <div className="mt-3 flex items-start gap-4">
            <div className="grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
              <Icon className="h-7 w-7" />
            </div>
            <div className="min-w-0">
              <h1 className="text-3xl font-semibold text-foreground sm:text-4xl">{unit.title}</h1>
              <p className="mt-2 text-base text-muted-foreground">{unit.description}</p>
              <div className="mt-3 flex flex-wrap gap-2 text-xs">
                <Badge>{unit.topic}</Badge>
                <Badge><Clock className="mr-1 h-3 w-3" /> Durasi 2 × 45 menit</Badge>
                <Badge><GraduationCap className="mr-1 h-3 w-3" /> Kelas X</Badge>
                <Badge>Kurikulum Merdeka</Badge>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <main className="mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-3">
        <div className="space-y-6 lg:col-span-2">
          <Section icon={<Target className="h-4 w-4" />} title="Capaian & Tujuan Pembelajaran">
            <p className="text-sm text-muted-foreground">
              Pada akhir sesi, peserta didik diharapkan mampu:
            </p>
            <ul className="mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/90">
              <li>Menjelaskan konsep dasar <strong>{unit.title.toLowerCase()}</strong> dengan bahasa sendiri.</li>
              <li>Mengidentifikasi besaran fisis yang terlibat beserta satuannya.</li>
              <li>Menganalisis pengaruh perubahan parameter terhadap hasil simulasi.</li>
              <li>Menarik kesimpulan berbasis data eksperimen dari grafik real-time.</li>
              <li>Menghubungkan fenomena simulasi dengan peristiwa di kehidupan sehari-hari.</li>
            </ul>
          </Section>

          <Section icon={<Clock className="h-4 w-4" />} title="Alur Pembelajaran (90 menit)">
            <ol className="space-y-4">
              <Step time="0 – 10 menit" title="Apersepsi & Pemantik">
                Tampilkan video singkat atau gambar fenomena nyata terkait {unit.title.toLowerCase()}.
                Ajukan pertanyaan pemantik: "Apa yang kalian amati? Mengapa hal itu terjadi?"
              </Step>
              <Step time="10 – 25 menit" title="Konsep Inti">
                Jelaskan definisi, rumus utama, dan besaran kunci dengan papan tulis. Hubungkan
                istilah dengan pengalaman siswa sebelum membuka simulasi.
              </Step>
              <Step time="25 – 55 menit" title="Eksplorasi Simulasi">
                Buka simulasi di proyektor. Ubah parameter satu per satu (kecepatan, massa, sudut)
                dan minta siswa memprediksi hasil sebelum simulasi dijalankan.
              </Step>
              <Step time="55 – 75 menit" title="Diskusi & Analisis Grafik">
                Pause simulasi pada momen kunci. Analisis bentuk grafik dan data pengukuran bersama
                siswa. Gunakan pertanyaan diskusi di bawah sebagai pemandu.
              </Step>
              <Step time="75 – 90 menit" title="Refleksi & Kesimpulan">
                Minta 2–3 siswa merangkum temuan. Berikan kuis singkat atau lembar refleksi sebagai
                asesmen formatif.
              </Step>
            </ol>
          </Section>

          <Section icon={<MessageCircleQuestion className="h-4 w-4" />} title="Pertanyaan Diskusi">
            <ol className="list-decimal space-y-2 pl-5 text-sm text-foreground/90">
              <li>Apa yang terjadi pada hasil simulasi ketika parameter X dinaikkan dua kali lipat?</li>
              <li>Bagaimana bentuk grafik berubah seiring waktu, dan apa artinya secara fisis?</li>
              <li>Apakah hasil simulasi sesuai dengan prediksi awal kalian? Mengapa?</li>
              <li>Bagaimana kondisi ideal (tanpa gesekan) berbeda dengan kondisi nyata?</li>
              <li>Sebutkan satu contoh penerapan {unit.title.toLowerCase()} di kehidupan sehari-hari.</li>
              <li>Jika eksperimen ini dilakukan di Bulan, apa yang akan berubah?</li>
            </ol>
          </Section>

          <Section icon={<AlertTriangle className="h-4 w-4" />} title="Miskonsepsi Umum">
            <ul className="space-y-3 text-sm">
              <li className="rounded-md border border-border bg-secondary/40 p-3">
                <p className="font-semibold text-foreground">Miskonsepsi:</p>
                <p className="text-muted-foreground">Benda yang lebih berat selalu jatuh lebih cepat.</p>
                <p className="mt-1.5 font-semibold text-foreground">Klarifikasi:</p>
                <p className="text-muted-foreground">Dalam ruang hampa, semua benda jatuh dengan percepatan yang sama. Gunakan preset "Ruang Hampa" untuk membuktikannya.</p>
              </li>
              <li className="rounded-md border border-border bg-secondary/40 p-3">
                <p className="font-semibold text-foreground">Miskonsepsi:</p>
                <p className="text-muted-foreground">Gaya selalu searah dengan gerak benda.</p>
                <p className="mt-1.5 font-semibold text-foreground">Klarifikasi:</p>
                <p className="text-muted-foreground">Aktifkan opsi "Tampilkan Vektor" agar siswa melihat arah gaya dan kecepatan secara terpisah.</p>
              </li>
            </ul>
          </Section>

          <Section icon={<ClipboardCheck className="h-4 w-4" />} title="Asesmen">
            <div className="grid gap-3 sm:grid-cols-2">
              <AssessmentCard type="Formatif" title="Lembar Prediksi">
                Siswa menuliskan prediksi sebelum tiap perubahan parameter, lalu membandingkan dengan hasil.
              </AssessmentCard>
              <AssessmentCard type="Formatif" title="Kuis Cepat (5 soal)">
                Pilihan ganda berbasis grafik yang muncul di simulasi.
              </AssessmentCard>
              <AssessmentCard type="Sumatif" title="Laporan Eksperimen">
                Siswa mendokumentasikan 3 percobaan dengan variasi parameter berbeda.
              </AssessmentCard>
              <AssessmentCard type="Proyek" title="Proyek Mini">
                Siswa merancang skenario simulasi mereka sendiri dan mempresentasikannya.
              </AssessmentCard>
            </div>
          </Section>
        </div>

        {/* Sidebar */}
        <aside className="space-y-6">
          <Section icon={<Lightbulb className="h-4 w-4" />} title="Tips Mengajar">
            <ul className="space-y-2.5 text-sm text-foreground/90">
              <li>Aktifkan <strong>Mode Gelap</strong> dan layar penuh untuk visibilitas proyektor.</li>
              <li>Ubah hanya satu parameter pada satu waktu agar pola mudah dikenali.</li>
              <li>Minta siswa memprediksi sebelum Play ditekan — ini meningkatkan keterlibatan.</li>
              <li>Manfaatkan tombol Pause untuk analisis frame-by-frame.</li>
              <li>Gunakan tabel data pengukuran sebagai bahan latihan menghitung.</li>
            </ul>
          </Section>

          <Section icon={<Sparkles className="h-4 w-4" />} title="Diferensiasi">
            <div className="space-y-3 text-sm">
              <div>
                <p className="font-semibold text-foreground">Untuk siswa cepat:</p>
                <p className="text-muted-foreground">Tantang dengan skenario non-ideal (gesekan tinggi, sudut ekstrem).</p>
              </div>
              <div>
                <p className="font-semibold text-foreground">Untuk siswa yang butuh dukungan:</p>
                <p className="text-muted-foreground">Mulai dari preset Default dan dampingi pembacaan grafik secara langkah demi langkah.</p>
              </div>
            </div>
          </Section>

          <Section icon={<BookOpen className="h-4 w-4" />} title="Materi Pendukung">
            <ul className="space-y-1.5 text-sm text-accent">
              <li>• Buku Paket Fisika SMA Kelas X (Kemendikbud)</li>
              <li>• Modul Ajar Kurikulum Merdeka — Fase E</li>
              <li>• Video referensi: Hyperphysics, Khan Academy</li>
            </ul>
          </Section>
        </aside>
      </main>
    </div>
  );
}

function Section({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) {
  return (
    <section className="rounded-lg border border-border bg-card p-5 shadow-soft sm:p-6">
      <div className="mb-4 flex items-center gap-2">
        <span className="grid h-7 w-7 place-items-center rounded-md bg-accent/15 text-accent">{icon}</span>
        <h2 className="text-base font-semibold text-card-foreground">{title}</h2>
      </div>
      {children}
    </section>
  );
}

function Step({ time, title, children }: { time: string; title: string; children: React.ReactNode }) {
  return (
    <li className="relative border-l-2 border-accent/30 pl-4">
      <div className="text-[11px] font-semibold uppercase tracking-wide text-accent">{time}</div>
      <div className="mt-0.5 text-sm font-semibold text-foreground">{title}</div>
      <p className="mt-1 text-sm text-muted-foreground">{children}</p>
    </li>
  );
}

function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground">
      {children}
    </span>
  );
}

function AssessmentCard({ type, title, children }: { type: string; title: string; children: React.ReactNode }) {
  return (
    <div className="rounded-md border border-border bg-secondary/40 p-3">
      <div className="text-[10px] font-semibold uppercase tracking-wide text-accent">{type}</div>
      <div className="mt-1 text-sm font-semibold text-foreground">{title}</div>
      <p className="mt-1 text-xs text-muted-foreground">{children}</p>
    </div>
  );
}
