import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { T as Atom, s as Search } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ThemeToggle } from "./ThemeToggle-XjRB7nZg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/SiteHeader-8h401xm8.js
var import_jsx_runtime = require_jsx_runtime();
function SiteHeader() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
		className: "sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mx-auto flex h-16 max-w-7xl items-center gap-4 px-4 sm:px-6 lg:px-8",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
					to: "/",
					className: "flex min-w-0 items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "grid h-9 w-9 shrink-0 place-items-center rounded-md bg-primary text-primary-foreground",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Atom, { className: "h-5 w-5" })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "min-w-0 leading-tight",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-sm font-semibold text-foreground",
							children: "Fisika Interaktif"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "truncate text-[11px] text-muted-foreground",
							children: "SMA 10 · Kurikulum Merdeka"
						})]
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "ml-6 hidden items-center gap-1 md:flex",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground",
							children: "Beranda"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#kurikulum",
							className: "rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground",
							children: "Kurikulum"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/panduan",
							className: "rounded-md px-3 py-1.5 text-sm text-foreground/80 hover:bg-secondary hover:text-foreground",
							children: "Panduan"
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative hidden sm:block",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Search, { className: "pointer-events-none absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							placeholder: "Cari Simulasi...",
							className: "h-9 w-56 rounded-md border border-border bg-card pl-8 pr-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
				})
			]
		})
	});
}
//#endregion
export { SiteHeader as t };
