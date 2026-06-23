import { n as getUnit } from "./curriculum-BAdiPpIN.mjs";
import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/simulasi._unitId-CkaHwUpc.js
var $$splitErrorComponentImporter = () => import("./simulasi._unitId-Dhabkajz.mjs");
var $$splitNotFoundComponentImporter = () => import("./simulasi._unitId-CtDN50d2.mjs");
var $$splitComponentImporter = () => import("./simulasi._unitId--rhG2cU_.mjs");
var Route = createFileRoute("/simulasi/$unitId")({
	head: ({ params }) => {
		const unit = getUnit(params.unitId);
		return { meta: [{ title: `${unit ? `${unit.title} · Simulasi` : "Simulasi"} — Fisika Interaktif` }, {
			name: "description",
			content: unit?.description ?? "Ruang kerja simulasi fisika interaktif."
		}] };
	},
	loader: ({ params }) => {
		const unit = getUnit(params.unitId);
		if (!unit) throw notFound();
		return { unit };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component"),
	notFoundComponent: lazyRouteComponent($$splitNotFoundComponentImporter, "notFoundComponent"),
	errorComponent: lazyRouteComponent($$splitErrorComponentImporter, "errorComponent")
});
//#endregion
export { Route as t };
