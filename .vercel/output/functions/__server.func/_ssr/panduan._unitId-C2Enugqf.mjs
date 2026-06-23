import { n as getUnit } from "./curriculum-BAdiPpIN.mjs";
import { f as lazyRouteComponent, k as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panduan._unitId-C2Enugqf.js
var $$splitErrorComponentImporter = () => import("./panduan._unitId-Boa1Tfem.mjs");
var $$splitNotFoundComponentImporter = () => import("./panduan._unitId-Bl_Sx5X-.mjs");
var $$splitComponentImporter = () => import("./panduan._unitId-BWwa69yr.mjs");
var Route = createFileRoute("/panduan/$unitId")({
	head: ({ params }) => {
		const unit = getUnit(params.unitId);
		return { meta: [{ title: `${unit ? `Panduan Guru · ${unit.title}` : "Panduan Guru"} — Fisika Interaktif` }, {
			name: "description",
			content: unit ? `Panduan mengajar lengkap untuk unit ${unit.title}: tujuan pembelajaran, alur sesi 45 menit, pertanyaan diskusi, miskonsepsi umum, dan asesmen.` : "Panduan mengajar untuk simulasi fisika SMA 10."
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
