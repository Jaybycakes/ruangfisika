import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { E as ArrowRight, v as GraduationCap, w as BookOpen, x as Clock } from "../_libs/lucide-react.mjs";
import { t as UNITS } from "./curriculum-BAdiPpIN.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as SiteHeader } from "./SiteHeader-8h401xm8.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panduan.index-9b_1r2xh.js
var import_jsx_runtime = require_jsx_runtime();
function PanduanIndex() {
	const sem1 = UNITS.filter((u) => u.semester === 1);
	const sem2 = UNITS.filter((u) => u.semester === 2);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteHeader, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-gradient-to-b from-secondary/40 to-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-accent",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5" }), " Panduan Guru"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
							className: "mt-4 text-3xl font-semibold text-foreground sm:text-4xl",
							children: "Panduan Mengajar Fisika SMA 10"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-3 max-w-2xl text-base text-muted-foreground",
							children: "Setiap unit dilengkapi panduan mengajar lengkap: capaian pembelajaran, alur sesi 90 menit, pertanyaan diskusi, miskonsepsi umum, rubrik asesmen, dan tips diferensiasi — siap pakai di kelas."
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-5 flex flex-wrap gap-2 text-xs",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mr-1 h-3 w-3" }), " Kelas X · Fase E"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Pill, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }), " 2 × 45 menit per unit"] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pill, { children: "Kurikulum Merdeka" })
							]
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-14",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemesterBlock, {
					label: "Semester 1",
					units: sem1
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-12",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemesterBlock, {
						label: "Semester 2",
						units: sem2
					})
				})]
			})
		]
	});
}
function SemesterBlock({ label, units }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-5 flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
			className: "text-lg font-semibold text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs text-muted-foreground",
			children: [units.length, " unit"]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid gap-4 sm:grid-cols-2 lg:grid-cols-3",
		children: units.map((u) => {
			const Icon = u.icon;
			return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
				to: "/panduan/$unitId",
				params: { unitId: u.id },
				className: "group flex flex-col rounded-lg border border-border bg-card p-5 shadow-soft transition-all hover:-translate-y-0.5 hover:border-accent/40 hover:shadow-card",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-10 w-10 shrink-0 place-items-center rounded-md bg-accent/15 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-5 w-5" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "text-[10px] font-semibold uppercase tracking-wide text-muted-foreground",
								children: u.topic
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
								className: "mt-0.5 truncate text-sm font-semibold text-card-foreground",
								children: u.title
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 line-clamp-2 text-xs text-muted-foreground",
						children: u.description
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex items-center justify-between border-t border-border pt-3 text-xs",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "text-muted-foreground",
							children: "Lihat panduan"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "h-3.5 w-3.5 text-accent transition-transform group-hover:translate-x-0.5" })]
					})
				]
			}, u.id);
		})
	})] });
}
function Pill({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground",
		children
	});
}
//#endregion
export { PanduanIndex as component };
