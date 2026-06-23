import { O as Apple, _ as Lightbulb, a as Sun, b as Compass, c as Ruler, d as Rocket, i as Target, k as Activity, l as RotateCw, m as MoveRight, n as Waves, r as Telescope, t as Zap } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/curriculum-BAdiPpIN.js
var UNITS = [
	{
		id: "pengukuran",
		title: "Pengukuran & Besaran",
		topic: "Dasar",
		semester: 1,
		description: "Eksplorasi alat ukur, ketelitian, dan analisis dimensi.",
		icon: Ruler,
		accent: "blue"
	},
	{
		id: "vektor",
		title: "Vektor",
		topic: "Dasar",
		semester: 1,
		description: "Penjumlahan, penguraian, dan operasi vektor secara visual.",
		icon: Compass,
		accent: "teal"
	},
	{
		id: "gerak-lurus",
		title: "Gerak Lurus",
		topic: "Mekanika",
		semester: 1,
		description: "GLB dan GLBB dengan grafik posisi, kecepatan, percepatan.",
		icon: MoveRight,
		accent: "blue"
	},
	{
		id: "gerak-parabola",
		title: "Gerak Parabola",
		topic: "Mekanika",
		semester: 1,
		description: "Lintasan proyektil, sudut elevasi, dan jangkauan maksimum.",
		icon: Rocket,
		accent: "orange"
	},
	{
		id: "hukum-newton",
		title: "Hukum Newton",
		topic: "Mekanika",
		semester: 1,
		description: "Gaya, massa, dan percepatan dalam sistem dinamis.",
		icon: Apple,
		accent: "blue"
	},
	{
		id: "dinamika-rotasi",
		title: "Dinamika Rotasi",
		topic: "Mekanika",
		semester: 1,
		description: "Torsi, momen inersia, dan kesetimbangan benda tegar.",
		icon: RotateCw,
		accent: "teal"
	},
	{
		id: "usaha-energi",
		title: "Usaha & Energi",
		topic: "Energi",
		semester: 1,
		description: "Konservasi energi mekanik pada berbagai sistem.",
		icon: Zap,
		accent: "orange"
	},
	{
		id: "momentum-impuls",
		title: "Momentum & Impuls",
		topic: "Mekanika",
		semester: 2,
		description: "Tumbukan elastis dan tidak elastis secara interaktif.",
		icon: Target,
		accent: "blue"
	},
	{
		id: "getaran-harmonis",
		title: "Getaran Harmonis",
		topic: "Gelombang",
		semester: 2,
		description: "Pegas dan bandul dengan parameter yang dapat diubah.",
		icon: Activity,
		accent: "teal"
	},
	{
		id: "gelombang",
		title: "Gelombang Mekanik",
		topic: "Gelombang",
		semester: 2,
		description: "Superposisi, interferensi, dan gelombang berjalan.",
		icon: Waves,
		accent: "teal"
	},
	{
		id: "optik",
		title: "Optik Geometri",
		topic: "Optik",
		semester: 2,
		description: "Pembiasan, cermin, lensa, dan alat optik.",
		icon: Telescope,
		accent: "blue"
	},
	{
		id: "listrik-statis",
		title: "Listrik Statis",
		topic: "Listrik",
		semester: 2,
		description: "Medan listrik, hukum Coulomb, dan potensial listrik.",
		icon: Lightbulb,
		accent: "orange"
	},
	{
		id: "energi-terbarukan",
		title: "Energi Terbarukan",
		topic: "Energi",
		semester: 2,
		description: "Surya, angin, dan konversi energi berkelanjutan.",
		icon: Sun,
		accent: "orange"
	}
];
var getUnit = (id) => UNITS.find((u) => u.id === id);
//#endregion
export { getUnit as n, UNITS as t };
