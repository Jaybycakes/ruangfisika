import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { A as TriangleAlert, D as ArrowLeft, M as MessageCircleQuestionMark, S as ClipboardCheck, _ as Lightbulb, f as Play, i as Target, j as Sparkles, v as GraduationCap, w as BookOpen, x as Clock } from "../_libs/lucide-react.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./panduan._unitId-C2Enugqf.mjs";
import { t as ThemeToggle } from "./ThemeToggle-XjRB7nZg.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/panduan._unitId-BWwa69yr.js
var import_jsx_runtime = require_jsx_runtime();
function PanduanPage() {
	const { unit } = Route.useLoaderData();
	const Icon = unit.icon;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen bg-background",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "border-b border-border bg-card",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex h-14 max-w-5xl items-center gap-3 px-4 sm:px-6",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/simulasi/$unitId",
						params: { unitId: unit.id },
						className: "inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "h-4 w-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "Kembali ke Simulasi" })]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "ml-auto flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
							to: "/simulasi/$unitId",
							params: { unitId: unit.id },
							className: "inline-flex items-center gap-1.5 rounded-md bg-orange px-3 py-1.5 text-xs font-semibold text-orange-foreground hover:opacity-90",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Play, { className: "h-3.5 w-3.5 fill-current" }), " Mulai Simulasi"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ThemeToggle, {})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "border-b border-border bg-gradient-to-b from-secondary/40 to-background",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-5xl px-4 py-10 sm:px-6 sm:py-14",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2 text-xs font-medium uppercase tracking-wide text-accent",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-3.5 w-3.5" }),
							" Panduan Guru · Semester ",
							unit.semester
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex items-start gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "grid h-14 w-14 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "h-7 w-7" })
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
									className: "text-3xl font-semibold text-foreground sm:text-4xl",
									children: unit.title
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-2 text-base text-muted-foreground",
									children: unit.description
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
									className: "mt-3 flex flex-wrap gap-2 text-xs",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: unit.topic }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "mr-1 h-3 w-3" }), " Durasi 2 × 45 menit"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Badge, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GraduationCap, { className: "mr-1 h-3 w-3" }), " Kelas X"] }),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Badge, { children: "Kurikulum Merdeka" })
									]
								})
							]
						})]
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto grid max-w-5xl gap-6 px-4 py-8 sm:px-6 sm:py-12 lg:grid-cols-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "space-y-6 lg:col-span-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Target, { className: "h-4 w-4" }),
							title: "Capaian & Tujuan Pembelajaran",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "text-sm text-muted-foreground",
								children: "Pada akhir sesi, peserta didik diharapkan mampu:"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "mt-3 list-disc space-y-2 pl-5 text-sm text-foreground/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Menjelaskan konsep dasar ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: unit.title.toLowerCase() }),
										" dengan bahasa sendiri."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Mengidentifikasi besaran fisis yang terlibat beserta satuannya." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Menganalisis pengaruh perubahan parameter terhadap hasil simulasi." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Menarik kesimpulan berbasis data eksperimen dari grafik real-time." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Menghubungkan fenomena simulasi dengan peristiwa di kehidupan sehari-hari." })
								]
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "h-4 w-4" }),
							title: "Alur Pembelajaran (90 menit)",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "space-y-4",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Step, {
										time: "0 – 10 menit",
										title: "Apersepsi & Pemantik",
										children: [
											"Tampilkan video singkat atau gambar fenomena nyata terkait ",
											unit.title.toLowerCase(),
											". Ajukan pertanyaan pemantik: \"Apa yang kalian amati? Mengapa hal itu terjadi?\""
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										time: "10 – 25 menit",
										title: "Konsep Inti",
										children: "Jelaskan definisi, rumus utama, dan besaran kunci dengan papan tulis. Hubungkan istilah dengan pengalaman siswa sebelum membuka simulasi."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										time: "25 – 55 menit",
										title: "Eksplorasi Simulasi",
										children: "Buka simulasi di proyektor. Ubah parameter satu per satu (kecepatan, massa, sudut) dan minta siswa memprediksi hasil sebelum simulasi dijalankan."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										time: "55 – 75 menit",
										title: "Diskusi & Analisis Grafik",
										children: "Pause simulasi pada momen kunci. Analisis bentuk grafik dan data pengukuran bersama siswa. Gunakan pertanyaan diskusi di bawah sebagai pemandu."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Step, {
										time: "75 – 90 menit",
										title: "Refleksi & Kesimpulan",
										children: "Minta 2–3 siswa merangkum temuan. Berikan kuis singkat atau lembar refleksi sebagai asesmen formatif."
									})
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(MessageCircleQuestionMark, { className: "h-4 w-4" }),
							title: "Pertanyaan Diskusi",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ol", {
								className: "list-decimal space-y-2 pl-5 text-sm text-foreground/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Apa yang terjadi pada hasil simulasi ketika parameter X dinaikkan dua kali lipat?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bagaimana bentuk grafik berubah seiring waktu, dan apa artinya secara fisis?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Apakah hasil simulasi sesuai dengan prediksi awal kalian? Mengapa?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Bagaimana kondisi ideal (tanpa gesekan) berbeda dengan kondisi nyata?" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Sebutkan satu contoh penerapan ",
										unit.title.toLowerCase(),
										" di kehidupan sehari-hari."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Jika eksperimen ini dilakukan di Bulan, apa yang akan berubah?" })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "h-4 w-4" }),
							title: "Miskonsepsi Umum",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-border bg-secondary/40 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground",
											children: "Miskonsepsi:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Benda yang lebih berat selalu jatuh lebih cepat."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 font-semibold text-foreground",
											children: "Klarifikasi:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Dalam ruang hampa, semua benda jatuh dengan percepatan yang sama. Gunakan preset \"Ruang Hampa\" untuk membuktikannya."
										})
									]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
									className: "rounded-md border border-border bg-secondary/40 p-3",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-semibold text-foreground",
											children: "Miskonsepsi:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Gaya selalu searah dengan gerak benda."
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-1.5 font-semibold text-foreground",
											children: "Klarifikasi:"
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-muted-foreground",
											children: "Aktifkan opsi \"Tampilkan Vektor\" agar siswa melihat arah gaya dan kecepatan secara terpisah."
										})
									]
								})]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardCheck, { className: "h-4 w-4" }),
							title: "Asesmen",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "grid gap-3 sm:grid-cols-2",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCard, {
										type: "Formatif",
										title: "Lembar Prediksi",
										children: "Siswa menuliskan prediksi sebelum tiap perubahan parameter, lalu membandingkan dengan hasil."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCard, {
										type: "Formatif",
										title: "Kuis Cepat (5 soal)",
										children: "Pilihan ganda berbasis grafik yang muncul di simulasi."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCard, {
										type: "Sumatif",
										title: "Laporan Eksperimen",
										children: "Siswa mendokumentasikan 3 percobaan dengan variasi parameter berbeda."
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AssessmentCard, {
										type: "Proyek",
										title: "Proyek Mini",
										children: "Siswa merancang skenario simulasi mereka sendiri dan mempresentasikannya."
									})
								]
							})
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
					className: "space-y-6",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lightbulb, { className: "h-4 w-4" }),
							title: "Tips Mengajar",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-2.5 text-sm text-foreground/90",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
										"Aktifkan ",
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", { children: "Mode Gelap" }),
										" dan layar penuh untuk visibilitas proyektor."
									] }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Ubah hanya satu parameter pada satu waktu agar pola mudah dikenali." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Minta siswa memprediksi sebelum Play ditekan — ini meningkatkan keterlibatan." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Manfaatkan tombol Pause untuk analisis frame-by-frame." }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "Gunakan tabel data pengukuran sebagai bahan latihan menghitung." })
								]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "h-4 w-4" }),
							title: "Diferensiasi",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "space-y-3 text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground",
									children: "Untuk siswa cepat:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Tantang dengan skenario non-ideal (gesekan tinggi, sudut ekstrem)."
								})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "font-semibold text-foreground",
									children: "Untuk siswa yang butuh dukungan:"
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted-foreground",
									children: "Mulai dari preset Default dan dampingi pembacaan grafik secara langkah demi langkah."
								})] })]
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Section, {
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "h-4 w-4" }),
							title: "Materi Pendukung",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-1.5 text-sm text-accent",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Buku Paket Fisika SMA Kelas X (Kemendikbud)" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Modul Ajar Kurikulum Merdeka — Fase E" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: "• Video referensi: Hyperphysics, Khan Academy" })
								]
							})
						})
					]
				})]
			})
		]
	});
}
function Section({ icon, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
		className: "rounded-lg border border-border bg-card p-5 shadow-soft sm:p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-4 flex items-center gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid h-7 w-7 place-items-center rounded-md bg-accent/15 text-accent",
				children: icon
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
				className: "text-base font-semibold text-card-foreground",
				children: title
			})]
		}), children]
	});
}
function Step({ time, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
		className: "relative border-l-2 border-accent/30 pl-4",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[11px] font-semibold uppercase tracking-wide text-accent",
				children: time
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-0.5 text-sm font-semibold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children
			})
		]
	});
}
function Badge({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: "inline-flex items-center rounded-full border border-border bg-card px-2.5 py-1 text-xs font-medium text-foreground",
		children
	});
}
function AssessmentCard({ type, title, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-md border border-border bg-secondary/40 p-3",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[10px] font-semibold uppercase tracking-wide text-accent",
				children: type
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-1 text-sm font-semibold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-xs text-muted-foreground",
				children
			})
		]
	});
}
//#endregion
export { PanduanPage as component };
