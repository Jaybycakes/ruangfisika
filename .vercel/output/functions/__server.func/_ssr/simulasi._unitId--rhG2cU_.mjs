import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { C as ChevronRight, f as Play, g as Maximize2, k as Activity, o as Settings2, p as Pause, u as RotateCcw, w as BookOpen, y as Gauge } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as ThemeToggle } from "./ThemeToggle-XjRB7nZg.mjs";
import { t as Route } from "./simulasi._unitId-CkaHwUpc.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/simulasi._unitId--rhG2cU_.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Workspace() {
	const { unit } = Route.useLoaderData();
	const [playing, setPlaying] = (0, import_react.useState)(false);
	const [friction, setFriction] = (0, import_react.useState)(true);
	const [velocity, setVelocity] = (0, import_react.useState)(20);
	const [mass, setMass] = (0, import_react.useState)(2);
	const [angle, setAngle] = (0, import_react.useState)(45);
	const [preset, setPreset] = (0, import_react.useState)("default");
	const toggleFullscreen = () => {
		if (typeof document === "undefined") return;
		if (document.fullscreenElement) document.exitFullscreen();
		else document.documentElement.requestFullscreen?.();
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex min-h-screen flex-col bg-background",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: "border-b border-border bg-card",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex h-14 items-center gap-3 px-4 sm:px-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					"aria-label": "breadcrumb",
					className: "flex min-w-0 items-center gap-1.5 text-sm",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
							to: "/",
							className: "shrink-0 text-muted-foreground hover:text-foreground",
							children: "Dashboard"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "shrink-0 text-muted-foreground",
							children: ["Semester ", unit.semester]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronRight, { className: "h-3.5 w-3.5 shrink-0 text-muted-foreground" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate font-semibold text-foreground",
							children: unit.title
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "ml-auto flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/panduan/$unitId",
							params: { unitId: unit.id },
							className: "inline-flex items-center gap-1.5 rounded-md border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "hidden sm:inline",
								children: "Panduan Guru"
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: toggleFullscreen,
							className: "inline-flex h-9 w-9 items-center justify-center rounded-md border border-border bg-background text-foreground hover:bg-secondary",
							"aria-label": "Layar penuh",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Maximize2, { className: "h-4 w-4" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})
					]
				})]
			})
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-1 flex-col lg:flex-row",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-1 flex-col",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "relative flex-1 border-b border-border bg-secondary/30 p-4 sm:p-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "relative h-[420px] w-full overflow-hidden rounded-lg border border-border bg-background grid-bg lg:h-full lg:min-h-[420px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-md bg-card/80 px-2.5 py-1 text-[11px] font-medium text-muted-foreground backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `h-1.5 w-1.5 rounded-full ${playing ? "bg-orange" : "bg-muted-foreground"}` }), playing ? "Berjalan" : "Siap"]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "absolute inset-0 grid place-items-center",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "text-center",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
											className: "mx-auto grid h-14 w-14 place-items-center rounded-full bg-accent/15 text-accent",
											children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(unit.icon, { className: "h-7 w-7" })
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm font-medium text-foreground",
											children: "Kanvas Simulasi"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "mt-1 max-w-sm text-xs text-muted-foreground",
											children: [
												"Area interaktif untuk ",
												unit.title.toLowerCase(),
												" akan dimuat di sini."
											]
										})
									]
								})
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "absolute bottom-4 left-1/2 flex -translate-x-1/2 items-center gap-2 rounded-full border border-border bg-card/90 px-2 py-1.5 shadow-card backdrop-blur",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPlaying((p) => !p),
									className: "inline-flex items-center gap-1.5 rounded-full bg-orange px-4 py-1.5 text-xs font-semibold text-orange-foreground hover:opacity-90",
									children: [playing ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pause, { className: "h-3.5 w-3.5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 fill-current" }), playing ? "Pause" : "Play"]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									onClick: () => setPlaying(false),
									className: "inline-flex items-center gap-1.5 rounded-full border border-border bg-background px-3 py-1.5 text-xs font-medium text-foreground hover:bg-secondary",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "h-3.5 w-3.5" }), " Reset"]
								})]
							})
						]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "grid grid-cols-1 gap-4 p-4 sm:p-6 lg:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Grafik Real-time",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Activity, { className: "h-4 w-4" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FakeChart, {})
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Panel, {
						title: "Data Pengukuran",
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Gauge, { className: "h-4 w-4" }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
							className: "w-full text-left text-sm",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", {
								className: "text-xs uppercase tracking-wide text-muted-foreground",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Waktu (s)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Posisi (m)"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
										className: "pb-2 font-medium",
										children: "Kecepatan (m/s)"
									})
								] })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", {
								className: "divide-y divide-border text-foreground",
								children: [
									0,
									1,
									2,
									3,
									4
								].map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", { children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-1.5 tabular-nums",
										children: t.toFixed(1)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-1.5 tabular-nums",
										children: (velocity * t).toFixed(2)
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
										className: "py-1.5 tabular-nums",
										children: velocity.toFixed(2)
									})
								] }, t))
							})]
						})
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
				className: "w-full shrink-0 border-t border-border bg-sidebar text-sidebar-foreground lg:w-[340px] lg:border-l lg:border-t-0",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2 border-b border-sidebar-border px-5 py-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings2, { className: "h-4 w-4 text-sidebar-primary" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "text-sm font-semibold",
						children: "Parameter Kontrol"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-5 p-5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Kecepatan Awal",
							unit: "m/s",
							min: 0,
							max: 100,
							value: velocity,
							onChange: setVelocity
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Massa Benda",
							unit: "kg",
							min: .1,
							max: 20,
							step: .1,
							value: mass,
							onChange: setMass
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
							label: "Sudut Elevasi",
							unit: "°",
							min: 0,
							max: 90,
							value: angle,
							onChange: setAngle
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Preset Skenario",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
								value: preset,
								onChange: (e) => setPreset(e.target.value),
								className: "h-9 w-full rounded-md border border-sidebar-border bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "default",
										children: "Default"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "vakum",
										children: "Ruang Hampa"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "bumi",
										children: "Permukaan Bumi"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
										value: "bulan",
										children: "Permukaan Bulan"
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
							label: "Percepatan Gravitasi (m/s²)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
								type: "number",
								defaultValue: 9.8,
								step: .1,
								className: "h-9 w-full rounded-md border border-sidebar-border bg-background px-2.5 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring/40"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Gesekan",
							checked: friction,
							onChange: setFriction
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Tampilkan Vektor",
							defaultChecked: true
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Toggle, {
							label: "Lintasan",
							defaultChecked: true
						})
					]
				})]
			})]
		})]
	});
}
function Panel({ title, icon, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-lg border border-border bg-card p-4 shadow-soft",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-3 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "text-muted-foreground",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "text-sm font-semibold text-card-foreground",
				children: title
			})]
		}), children]
	});
}
function Field({ label, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
		className: "mb-1.5 block text-xs font-medium text-sidebar-foreground/80",
		children: label
	}), children] });
}
function Slider({ label, unit, min, max, step = 1, value, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1.5 flex items-baseline justify-between",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", {
			className: "text-xs font-medium text-sidebar-foreground/80",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
			className: "text-xs font-semibold tabular-nums text-foreground",
			children: [
				value,
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted-foreground",
					children: unit
				})
			]
		})]
	}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		type: "range",
		min,
		max,
		step,
		value,
		onChange: (e) => onChange(Number(e.target.value)),
		className: "h-1.5 w-full cursor-pointer appearance-none rounded-full bg-sidebar-accent accent-accent"
	})] });
}
function Toggle({ label, checked, defaultChecked, onChange }) {
	const [internal, setInternal] = (0, import_react.useState)(defaultChecked ?? false);
	const isOn = checked ?? internal;
	const handle = () => {
		const next = !isOn;
		if (onChange) onChange(next);
		else setInternal(next);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: handle,
		className: "flex w-full items-center justify-between rounded-md border border-sidebar-border bg-background px-3 py-2 text-left",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-sm text-foreground",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: `relative inline-block h-5 w-9 rounded-full transition-colors ${isOn ? "bg-accent" : "bg-muted"}`,
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: `absolute top-0.5 h-4 w-4 rounded-full bg-white shadow transition-transform ${isOn ? "translate-x-4" : "translate-x-0.5"}` })
		})]
	});
}
function FakeChart() {
	const pts = Array.from({ length: 24 }, (_, i) => {
		return `${i / 23 * 100},${50 - Math.sin(i / 3) * 20 - i * .6}`;
	}).join(" ");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative h-44 w-full",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 100 60",
			preserveAspectRatio: "none",
			className: "absolute inset-0 h-full w-full",
			children: [
				[
					10,
					20,
					30,
					40,
					50
				].map((y) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("line", {
					x1: "0",
					y1: y,
					x2: "100",
					y2: y,
					stroke: "currentColor",
					className: "text-border",
					strokeWidth: "0.2"
				}, y)),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
					fill: "none",
					stroke: "currentColor",
					className: "text-accent",
					strokeWidth: "1.2",
					points: pts
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("polyline", {
					fill: "none",
					stroke: "currentColor",
					className: "text-orange",
					strokeWidth: "1.2",
					strokeDasharray: "2 2",
					points: Array.from({ length: 24 }, (_, i) => `${i / 23 * 100},${30 + Math.cos(i / 4) * 10}`).join(" ")
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute bottom-1 left-1 flex gap-3 text-[10px] text-muted-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-3 rounded bg-accent" }), "Kecepatan"]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-1.5 w-3 rounded bg-orange" }), "Percepatan"]
			})]
		})]
	});
}
//#endregion
export { Workspace as component };
