import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { E as ArrowRight, N as ChartColumn, f as Play, j as Sparkles } from "../_libs/lucide-react.mjs";
import { t as UNITS } from "./curriculum-BAdiPpIN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./SiteHeader-8h401xm8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-CgfxUtxn.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var accentClass = {
	blue: "bg-accent/10 text-accent ring-1 ring-accent/20",
	teal: "bg-teal/15 text-teal ring-1 ring-teal/25",
	orange: "bg-orange/15 text-orange ring-1 ring-orange/25"
};
function Dashboard() {
	const [semester, setSemester] = (0, import_react.useState)(1);
	const filtered = (0, import_react.useMemo)(() => UNITS.filter((u) => u.semester === semester), [semester]);
	UNITS.filter((u) => u.semester === 1).length;
	UNITS.filter((u) => u.semester === 2).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "relative overflow-hidden border-b border-border bg-gradient-to-br from-primary via-primary to-[color-mix(in_oklab,var(--color-primary)_70%,var(--color-accent))] text-primary-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "absolute inset-0 grid-bg opacity-[0.12]",
					"aria-hidden": true
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mx-auto max-w-7xl px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-3 py-1 text-xs font-medium backdrop-blur",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-3.5 w-3.5" }), "Untuk Guru Fisika · Kurikulum Merdeka"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-5 max-w-3xl text-balance text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl",
							children: ["Simulasi Fisika SMA Kelas 10 ", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-white/80",
								children: "(Kurikulum Merdeka)"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-4 max-w-2xl text-base text-white/80 sm:text-lg",
							children: "Tingkatkan keterlibatan di kelas dengan simulasi interaktif siap-proyektor. Pilih unit, atur parameter, dan ajak siswa bereksperimen secara langsung."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-7 flex flex-wrap items-center gap-3",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#kurikulum",
								className: "inline-flex items-center gap-2 rounded-md bg-orange px-5 py-2.5 text-sm font-semibold text-orange-foreground shadow-soft transition-transform hover:scale-[1.02]",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-4 w-4 fill-current" }), "Mulai Mengajar"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "#panduan",
								className: "inline-flex items-center gap-2 rounded-md border border-white/20 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white hover:bg-white/10",
								children: ["Lihat Panduan Guru", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-4 w-4" })]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dl", {
							className: "mt-10 grid max-w-2xl grid-cols-2 gap-4 sm:gap-8",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-white/70",
									children: "Unit Kurikulum"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: "mt-1 text-xl font-bold sm:text-2xl",
									children: "13"
								})]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rounded-lg border border-white/15 bg-white/5 px-4 py-3 backdrop-blur",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("dt", {
										className: "flex items-center gap-1.5 text-xs text-white/70",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChartColumn, { className: "h-3.5 w-3.5" }), "Grafik & Analisis Real-Time"]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-1 text-xl font-bold sm:text-2xl",
										children: "Langsung di Kelas"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
										className: "mt-0.5 text-[11px] text-white/60",
										children: "Visualisasi data interaktif untuk setiap simulasi"
									})
								]
							})]
						})
					]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				id: "kurikulum",
				className: "mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8 lg:py-16",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-[minmax(0,1fr)_auto] items-end gap-4 sm:flex sm:items-end sm:justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-2xl font-bold tracking-tight text-foreground sm:text-3xl",
							children: "Kurikulum Fisika"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: "Pilih unit untuk membuka ruang kerja simulasi."
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemesterToggle, {
						value: semester,
						onChange: setSemester
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
					children: filtered.map((u) => {
						const Icon = u.icon;
						return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
							className: "group flex flex-col rounded-xl border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "flex items-start justify-between",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
										className: `grid h-11 w-11 place-items-center rounded-lg ${accentClass[u.accent]}`,
										children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-secondary-foreground",
										children: u.topic
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
									className: "mt-4 text-base font-semibold text-card-foreground",
									children: u.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-1.5 line-clamp-2 text-sm text-muted-foreground",
									children: u.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-5 flex items-center justify-between border-t border-border pt-4",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "text-xs text-muted-foreground",
										children: ["Semester ", u.semester]
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
										to: "/simulasi/$unitId",
										params: { unitId: u.id },
										className: "inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 text-xs font-semibold text-primary-foreground transition-colors hover:bg-primary/90",
										children: ["Buka Simulasi", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" })]
									})]
								})
							]
						}, u.id);
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				id: "panduan",
				className: "border-t border-border bg-secondary/40",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid gap-6 md:grid-cols-3",
						children: [
							{
								t: "Siap Proyektor",
								d: "Tipografi besar dan kontras tinggi untuk kelas yang terang."
							},
							{
								t: "Parameter Interaktif",
								d: "Atur variabel secara langsung dan amati perubahan grafiknya."
							},
							{
								t: "Panduan Guru",
								d: "Tujuan pembelajaran dan pertanyaan diskusi tersedia di setiap unit."
							}
						].map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "rounded-lg border border-border bg-card p-5 shadow-soft",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "text-sm font-semibold text-card-foreground",
								children: c.t
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-1.5 text-sm text-muted-foreground",
								children: c.d
							})]
						}, c.t))
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-border py-8",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-7xl px-4 text-center text-xs text-muted-foreground sm:px-6",
					children: [
						"© ",
						(/* @__PURE__ */ new Date()).getFullYear(),
						" Fisika Interaktif · Dibuat untuk guru Indonesia."
					]
				})
			})
		]
	});
}
function SemesterToggle({ value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "inline-flex shrink-0 rounded-md border border-border bg-card p-1 shadow-soft",
		children: [1, 2].map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			onClick: () => onChange(s),
			className: `rounded-[5px] px-4 py-1.5 text-sm font-medium transition-colors ${value === s ? "bg-primary text-primary-foreground shadow-sm" : "text-muted-foreground hover:text-foreground"}`,
			children: ["Semester ", s]
		}, s))
	});
}
//#endregion
export { Dashboard as component };
