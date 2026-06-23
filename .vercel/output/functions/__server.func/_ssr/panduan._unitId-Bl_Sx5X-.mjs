import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panduan._unitId-Bl_Sx5X-.js
var import_jsx_runtime = require_jsx_runtime();
var SplitNotFoundComponent = () => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
	className: "grid min-h-screen place-items-center bg-background p-6 text-center",
	children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
		className: "text-2xl font-semibold text-foreground",
		children: "Panduan tidak ditemukan"
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
		to: "/",
		className: "mt-4 inline-block text-accent hover:underline",
		children: "Kembali ke Beranda"
	})] })
});
//#endregion
export { SplitNotFoundComponent as notFoundComponent };
