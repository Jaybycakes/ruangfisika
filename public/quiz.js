/* ============================================================
   quiz.js  –  MCQ Test Generator for Ruang Fisika
   Usage: call initQuiz('unit-id', containerId) after DOM ready
   ============================================================ */

const QUIZ_BANKS = {
  'pengukuran': [
    {q:'Alat ukur yang digunakan untuk mengukur diameter bola kecil dengan ketelitian 0,01 mm adalah …',opts:['Penggaris','Jangka sorong','Mikrometer sekrup','Termometer'],ans:2},
    {q:'Jangka sorong memiliki skala nonius yang terbagi menjadi 10 bagian. Nilai satu bagian skala nonius setara dengan …',opts:['0,01 mm','0,1 mm','1 mm','0,001 mm'],ans:1},
    {q:'Hasil pembacaan mikrometer: skala utama 7,5 mm dan skala putar pada garis ke-23. Tebal benda tersebut adalah …',opts:['7,523 mm','7,73 mm','7,023 mm','30,5 mm'],ans:0},
    {q:'Angka penting dari bilangan 0,00450 adalah …',opts:['5','4','3','2'],ans:2},
    {q:'Hasil penjumlahan 12,5 + 3,14 + 0,076 berdasarkan aturan angka penting adalah …',opts:['15,716','15,72','15,7','16'],ans:2},
    {q:'Satuan SI untuk massa adalah …',opts:['Gram','Kilogram','Pon','Ton'],ans:1},
    {q:'Ketidakpastian relatif pengukuran panjang 5,00 ± 0,05 cm adalah …',opts:['1%','0,5%','5%','10%'],ans:0},
    {q:'Dimensi besaran kecepatan adalah …',opts:['[M L T⁻¹]','[L T⁻¹]','[L T⁻²]','[M L T⁻²]'],ans:1},
    {q:'Angka penting dari 3,0 × 10³ adalah …',opts:['1','2','3','4'],ans:1},
    {q:'Besaran yang memiliki satuan meter per sekon kuadrat adalah …',opts:['Kecepatan','Percepatan','Gaya','Tekanan'],ans:1},
    {q:'Skala utama jangka sorong menunjukkan 3 cm dan skala nonius berhimpit pada garis ke-7. Panjang benda adalah …',opts:['3,7 cm','3,07 cm','3,007 cm','0,37 cm'],ans:1},
    {q:'Konversi 72 km/jam ke satuan m/s adalah …',opts:['72 m/s','20 m/s','7,2 m/s','200 m/s'],ans:1},
    {q:'Besaran turunan yang dimensinya [M L T⁻²] adalah …',opts:['Tekanan','Gaya','Energi','Daya'],ans:1},
    {q:'Pengukuran berulang memberikan nilai: 5,2; 5,3; 5,1; 5,2; 5,2. Nilai rata-rata terbaik adalah …',opts:['5,20','5,25','5,15','5,30'],ans:0},
    {q:'Faktor pengali pada satuan "kilo" adalah …',opts:['10³','10⁶','10⁻³','10²'],ans:0},
    {q:'Hasil perkalian 2,5 × 4,0 berdasarkan angka penting adalah …',opts:['10','10,0','10,00','10,000'],ans:0},
    {q:'Alat untuk mengukur waktu dengan ketelitian paling tinggi adalah …',opts:['Jam tangan','Stopwatch analog','Stopwatch digital','Jam dinding'],ans:2},
    {q:'Besaran pokok dalam sistem SI yang menyatakan jumlah zat adalah …',opts:['Mol','Gram','Liter','Partikel'],ans:0},
    {q:'Dimensi energi adalah …',opts:['[M L² T⁻²]','[M L T⁻²]','[M L² T⁻³]','[M L T⁻³]'],ans:0},
    {q:'Presisi alat ukur menggambarkan …',opts:['Kebenaran hasil ukur','Ketelitian pembacaan skala','Kemampuan mengulang hasil yang sama','Kalibrasi alat'],ans:2},
    {q:'Mikrometer sekrup memiliki ketelitian …',opts:['0,1 mm','0,01 mm','0,001 mm','0,0001 mm'],ans:1},
    {q:'Satuan pascal (Pa) ekuivalen dengan …',opts:['N·m','N/m²','N·m²','kg·m/s²'],ans:1},
    {q:'Hasil perhitungan 6,0 ÷ 2,00 berdasarkan aturan angka penting adalah …',opts:['3','3,0','3,00','3,000'],ans:1},
    {q:'Besaran skalar adalah besaran yang memiliki …',opts:['Besar dan arah','Hanya besar','Hanya arah','Besar, arah, dan titik tangkap'],ans:1},
    {q:'Diameter kawat diukur dengan mikrometer; skala utama 1,5 mm dan skala putar pada angka 47. Diameter kawat adalah …',opts:['1,547 mm','1,647 mm','1,047 mm','2,047 mm'],ans:0},
  ],

  'vektor': [
    {q:'Dua vektor masing-masing 3 N dan 4 N saling tegak lurus. Resultan kedua vektor tersebut adalah …',opts:['7 N','1 N','5 N','12 N'],ans:2},
    {q:'Jika vektor A = 6 satuan arah timur dan B = 8 satuan arah utara, besar resultan A + B adalah …',opts:['2 satuan','10 satuan','14 satuan','48 satuan'],ans:1},
    {q:'Komponen x dari vektor F = 20 N pada sudut 30° terhadap sumbu x adalah …',opts:['10 N','10√3 N','20√3 N','20 N'],ans:1},
    {q:'Perkalian titik (dot product) dua vektor A dan B didefinisikan sebagai …',opts:['AB sin θ','AB cos θ','A + B','A − B'],ans:1},
    {q:'Vektor satuan adalah vektor yang …',opts:['Besarnya 1','Tidak memiliki arah','Hanya berlaku di sumbu x','Sejajar sumbu koordinat'],ans:0},
    {q:'Dua vektor sama besar F membentuk sudut 60° satu sama lain. Resultannya adalah …',opts:['F','F√2','F√3','2F'],ans:2},
    {q:'Selisih vektor A − B sama artinya dengan …',opts:['A + B','A + (−B)','−A + B','−A − B'],ans:1},
    {q:'Vektor A = 3î + 4ĵ. Besar vektor A adalah …',opts:['7','1','5','12'],ans:2},
    {q:'Perkalian silang (cross product) dua vektor sejajar (θ = 0°) menghasilkan …',opts:['Vektor maksimum','Skalar nol','Vektor nol','Vektor satuan'],ans:2},
    {q:'Komponen y dari vektor kecepatan 50 m/s pada sudut 53° terhadap horizontal adalah …',opts:['30 m/s','40 m/s','50 m/s','25 m/s'],ans:1},
    {q:'Proyeksi vektor A pada vektor B adalah …',opts:['A cos θ','A sin θ','AB cos θ','AB sin θ'],ans:0},
    {q:'Jika A = 2î − 3ĵ dan B = î + 2ĵ, maka A + B = …',opts:['3î − ĵ','î − 5ĵ','3î + 5ĵ','î + ĵ'],ans:0},
    {q:'Dua vektor berlawanan arah, besar resultannya adalah …',opts:['Jumlah besar keduanya','Selisih besar keduanya','Perkalian besar keduanya','Nol selalu'],ans:1},
    {q:'Arah vektor resultan dua vektor ditentukan oleh …',opts:['Besar vektor saja','Sudut antara keduanya saja','Besar dan arah kedua vektor','Skala gambar'],ans:2},
    {q:'Metode polygon (poligon) pada penjumlahan vektor dilakukan dengan …',opts:['Menempatkan pangkal semua vektor di satu titik','Menghubungkan ujung ke pangkal vektor secara berturut-turut','Mengalikan komponen x dan y','Mengurangkan sudut setiap vektor'],ans:1},
    {q:'î × ĵ = …',opts:['k̂','−k̂','î','0'],ans:0},
    {q:'Vektor A = 5 satuan, B = 12 satuan, sudut antara keduanya 90°. Besar A − B adalah …',opts:['7 satuan','13 satuan','17 satuan','60 satuan'],ans:1},
    {q:'Resultan terbesar dua vektor terjadi ketika sudut antara keduanya adalah …',opts:['90°','180°','0°','45°'],ans:2},
    {q:'Resultan terkecil dua vektor A dan B terjadi ketika sudut antara keduanya adalah …',opts:['0°','90°','180°','45°'],ans:2},
    {q:'Perkalian skalar (dot product) î · ĵ = …',opts:['1','0','−1','î'],ans:1},
    {q:'Tiga vektor F₁=3 N, F₂=4 N, F₃=5 N membentuk segitiga siku-siku. Resultan F₁+F₂ = …',opts:['5 N','7 N','12 N','2 N'],ans:0},
    {q:'Besar vektor A = (−3)î + 4ĵ adalah …',opts:['1','5','7','−5'],ans:1},
    {q:'Sudut yang dibentuk vektor A = 3î + 3ĵ terhadap sumbu x adalah …',opts:['30°','45°','60°','90°'],ans:1},
    {q:'Resultan dua vektor sama besar F dengan sudut 120° di antara keduanya adalah …',opts:['F','2F','F/2','F√3'],ans:0},
    {q:'Komponen x vektor 100 N pada sudut 60° terhadap sumbu x adalah …',opts:['50 N','50√3 N','100√3 N','86,6 N'],ans:0},
  ],

  'gerak-lurus': [
    {q:'Benda bergerak dengan GLB artinya …',opts:['Kecepatan berubah setiap saat','Kecepatan konstan dan percepatan nol','Percepatan konstan','Jarak tempuh nol'],ans:1},
    {q:'Mobil bergerak dengan kecepatan awal 10 m/s dan percepatan 2 m/s². Kecepatan setelah 5 sekon adalah …',opts:['12 m/s','15 m/s','20 m/s','25 m/s'],ans:2},
    {q:'Rumus jarak pada GLBB (v₀=kecepatan awal, a=percepatan, t=waktu) adalah …',opts:['s = v₀t','s = v₀t + ½at²','s = ½at²','s = vt + at'],ans:1},
    {q:'Pada grafik v-t, percepatan benda ditunjukkan oleh …',opts:['Luas daerah di bawah grafik','Kemiringan grafik (gradien)','Titik potong dengan sumbu t','Titik potong dengan sumbu v'],ans:1},
    {q:'Pada grafik x-t, kecepatan benda ditunjukkan oleh …',opts:['Luas daerah di bawah grafik','Kemiringan grafik (gradien)','Nilai x pada suatu titik','Nilai t pada suatu titik'],ans:1},
    {q:'Bola jatuh bebas dari ketinggian 20 m (g=10 m/s²). Waktu yang diperlukan hingga menyentuh tanah adalah …',opts:['1 s','2 s','4 s','10 s'],ans:1},
    {q:'Sebuah benda memiliki kecepatan awal 0 dan percepatan 4 m/s². Jarak yang ditempuh dalam 3 sekon adalah …',opts:['12 m','18 m','36 m','6 m'],ans:1},
    {q:'Pada grafik v-t GLB, kurva yang terbentuk adalah …',opts:['Garis miring ke atas','Garis horizontal','Garis miring ke bawah','Parabola'],ans:1},
    {q:'Kecepatan rata-rata didefinisikan sebagai …',opts:['Perpindahan dibagi waktu','Jarak dibagi waktu','Kecepatan awal ditambah kecepatan akhir','Percepatan dikalikan waktu'],ans:0},
    {q:'Benda dilempar ke atas dengan kecepatan 20 m/s (g=10 m/s²). Ketinggian maksimum yang dicapai adalah …',opts:['10 m','20 m','40 m','200 m'],ans:1},
    {q:'Perbedaan antara jarak dan perpindahan adalah …',opts:['Jarak adalah besaran vektor, perpindahan skalar','Perpindahan adalah besaran vektor, jarak skalar','Keduanya sama','Hanya satuan berbeda'],ans:1},
    {q:'Kecepatan sesaat adalah kecepatan pada …',opts:['Seluruh perjalanan','Suatu saat tertentu','Setengah perjalanan','Saat awal'],ans:1},
    {q:'Benda jatuh bebas dari saat diam. Kecepatan setelah jatuh 5 s (g=10 m/s²) adalah …',opts:['5 m/s','10 m/s','50 m/s','100 m/s'],ans:2},
    {q:'Sebuah mobil bergerak dari posisi x₁=10 m ke x₂=−30 m. Perpindahannya adalah …',opts:['−40 m','40 m','−20 m','20 m'],ans:0},
    {q:'Rumus hubungan v, v₀, a, dan s (tanpa t) dalam GLBB adalah …',opts:['v = v₀ + at','v² = v₀² + 2as','s = v₀t + ½at²','v = s/t'],ans:1},
    {q:'Dua mobil berpapasan: A bergerak ke kanan 20 m/s dan B ke kiri 30 m/s. Kecepatan relatif A terhadap B adalah …',opts:['10 m/s','50 m/s','−50 m/s','−10 m/s'],ans:1},
    {q:'Benda bergerak GLBB dengan v₀=5 m/s dan a=−2 m/s². Benda berhenti setelah …',opts:['2,5 s','10 s','0,4 s','5 s'],ans:0},
    {q:'Luas area di bawah grafik v-t menyatakan …',opts:['Percepatan','Kecepatan','Perpindahan','Jarak'],ans:2},
    {q:'Sebuah benda jatuh bebas dari ketinggian h. Kecepatan saat menyentuh tanah (g=10 m/s², h=80 m) adalah …',opts:['20 m/s','40 m/s','80 m/s','4 m/s'],ans:1},
    {q:'Gerak seorang pejalan kaki yang kecepatannya 0 kemudian bertambah secara linear adalah contoh …',opts:['GLB','GLBB','Gerak melingkar','Gerak parabola'],ans:1},
    {q:'Percepatan rata-rata didefinisikan sebagai …',opts:['Perubahan posisi dibagi waktu','Perubahan kecepatan dibagi waktu','Kecepatan dibagi waktu','Gaya dibagi massa'],ans:1},
    {q:'Sebuah truk bergerak 100 m dalam 5 s, lalu 200 m dalam 10 s. Kecepatan rata-rata totalnya adalah …',opts:['20 m/s','25 m/s','30 m/s','22 m/s'],ans:0},
    {q:'Bola dilempar vertikal ke atas dengan v₀=30 m/s (g=10 m/s²). Waktu untuk kembali ke posisi awal adalah …',opts:['3 s','6 s','1,5 s','30 s'],ans:1},
    {q:'Pada GLBB, grafik x-t berbentuk …',opts:['Garis lurus','Parabola','Hiperbola','Lingkaran'],ans:1},
    {q:'Sebuah kereta bergerak dari kecepatan 20 m/s lalu diperlambat dengan a=−2 m/s². Jarak yang ditempuh hingga berhenti adalah …',opts:['100 m','50 m','200 m','10 m'],ans:0},
  ],

  'getaran-harmonis': [
    {q:'Periode getaran bandul sederhana bergantung pada …',opts:['Massa beban dan panjang tali','Panjang tali dan gravitasi','Massa beban dan amplitudo','Amplitudo dan gravitasi'],ans:1},
    {q:'Rumus periode pegas-massa adalah …',opts:['T = 2π√(k/m)','T = 2π√(m/k)','T = 2π√(g/L)','T = 2π√(L/g)'],ans:1},
    {q:'Frekuensi getaran bandul 0,5 Hz. Periodenya adalah …',opts:['0,5 s','1 s','2 s','5 s'],ans:2},
    {q:'Amplitudo getaran adalah …',opts:['Jarak dari posisi setimbang ke posisi ekstrem','Jarak dari satu ekstrem ke ekstrem lain','Waktu satu getaran penuh','Jumlah getaran per sekon'],ans:0},
    {q:'Hukum Hooke menyatakan bahwa gaya pegas …',opts:['Sebanding dengan kecepatan','Berbanding terbalik dengan regangan','Sebanding dengan regangan','Tidak bergantung pada regangan'],ans:2},
    {q:'Pada GTH, energi total sistem adalah …',opts:['Selalu nol','Selalu berubah','Konstan (kekal)','Hanya berupa energi kinetik'],ans:2},
    {q:'Kecepatan benda dalam GTH maksimum ketika benda berada di …',opts:['Posisi ekstrem','Posisi setimbang','Setengah amplitudo','Titik mana saja'],ans:1},
    {q:'Konstanta pegas k = 200 N/m, massa m = 0,5 kg. Frekuensi osilasi adalah …',opts:['10/π Hz','20 Hz','2/π Hz','5/π Hz'],ans:0},
    {q:'Pada GTH, percepatan maksimum terjadi ketika …',opts:['Benda di posisi setimbang','Benda di posisi ekstrem','Kecepatan maksimum','Energi kinetik maksimum'],ans:1},
    {q:'Persamaan simpangan GTH x = A sin(ωt + φ). Nilai ω menyatakan …',opts:['Amplitudo','Frekuensi angular','Fase awal','Periode'],ans:1},
    {q:'Bandul 1 m digantung di Bumi (g=10 m/s²). Periodenya kira-kira …',opts:['0,63 s','2π s','1 s','2 s'],ans:1},
    {q:'Jika konstanta pegas dua kali lebih besar, frekuensi osilasi pegas-massa …',opts:['Berkurang √2 kali','Bertambah √2 kali','Tidak berubah','Bertambah 2 kali'],ans:1},
    {q:'Energi potensial pegas pada simpangan x adalah …',opts:['½kx','kx','½kx²','kx²'],ans:2},
    {q:'Pada GTH, ketika simpangan = ½A, perbandingan energi kinetik dengan energi potensial adalah …',opts:['1:1','3:1','1:3','2:1'],ans:1},
    {q:'Frekuensi sudut GTH ω berhubungan dengan periode T melalui …',opts:['ω = T/2π','ω = 2π/T','ω = 2πT','ω = 1/T'],ans:1},
    {q:'Pegas dengan k=500 N/m diregangkan 4 cm. Gaya pemulihnya adalah …',opts:['2 N','20 N','200 N','125 N'],ans:1},
    {q:'Resonansi terjadi ketika frekuensi gaya luar …',opts:['Lebih kecil dari frekuensi natural','Sama dengan frekuensi natural','Lebih besar dari frekuensi natural','Bernilai nol'],ans:1},
    {q:'Dalam satu periode penuh getaran, benda bergerak antara kedua posisi ekstrem …',opts:['1 kali','2 kali','4 kali','Tak terhingga'],ans:1},
    {q:'Kecepatan maksimum GTH dinyatakan dengan …',opts:['v_max = Aω','v_max = A/ω','v_max = A²ω','v_max = ω/A'],ans:0},
    {q:'Sebuah massa 2 kg digantung pada pegas k=50 N/m. Periode osilasinya adalah …',opts:['π/5 s','2π/5 s','5π s','π s'],ans:1},
    {q:'Pada GTH, gaya pemulih selalu mengarah …',opts:['Menjauhi posisi setimbang','Menuju posisi setimbang','Ke atas','Ke bawah'],ans:1},
    {q:'Percepatan dalam GTH dinyatakan a = −ω²x. Tanda negatif menunjukkan …',opts:['Gaya selalu ke bawah','Percepatan berlawanan arah dengan simpangan','Sistem mengalami redaman','Amplitudo berkurang'],ans:1},
    {q:'Jika massa sistem pegas-massa dijadikan 4 kali, frekuensinya menjadi …',opts:['4 kali','2 kali','½ kali','¼ kali'],ans:2},
    {q:'Panjang bandul 40 cm di Bumi (g=10 m/s²). Frekuensinya adalah …',opts:['1/(2π)×5 Hz','5/π Hz','1/π Hz','1/(2π)×√25 Hz'],ans:3},
    {q:'Energi total sistem GTH dengan amplitudo A dan konstanta k adalah …',opts:['kA','½kA','kA²','½kA²'],ans:3},
  ],

  'listrik-statis': [
    {q:'Hukum Coulomb menyatakan bahwa gaya antara dua muatan titik …',opts:['Sebanding dengan kuadrat jarak dan muatan','Berbanding terbalik dengan kuadrat jarak dan sebanding dengan perkalian muatan','Sebanding dengan jarak','Tidak bergantung pada jarak'],ans:1},
    {q:'Satuan muatan listrik dalam SI adalah …',opts:['Ampere','Volt','Coulomb','Watt'],ans:2},
    {q:'Nilai konstanta Coulomb k dalam ruang hampa adalah …',opts:['9 × 10⁹ N·m²/C²','9 × 10⁶ N·m/C','6 × 10⁻¹⁹ C','8,85 × 10⁻¹² C²/N·m²'],ans:0},
    {q:'Dua muatan +2 μC dan −2 μC terpisah 3 cm. Jenis gaya yang bekerja adalah …',opts:['Tolak-menolak','Tarik-menarik','Tidak ada gaya','Bergantung suhu'],ans:1},
    {q:'Kuat medan listrik E pada jarak r dari muatan titik Q didefinisikan sebagai …',opts:['E = kQ/r','E = kQ/r²','E = kQr²','E = kQ²/r'],ans:1},
    {q:'Arah medan listrik di sekitar muatan positif adalah …',opts:['Menuju muatan','Menjauhi muatan','Melingkar','Tidak tentu'],ans:1},
    {q:'Potensial listrik V pada jarak r dari muatan Q adalah …',opts:['V = kQ/r','V = kQ/r²','V = kQr','V = kQ²r'],ans:0},
    {q:'Muatan elektron adalah …',opts:['+1,6 × 10⁻¹⁹ C','−1,6 × 10⁻¹⁹ C','1,6 × 10⁻²⁷ C','6 × 10²³ C'],ans:1},
    {q:'Dua muatan q₁=4 μC dan q₂=1 μC terpisah 30 cm. Gaya Coulomb antara keduanya (k=9×10⁹) adalah …',opts:['0,4 N','4 N','0,04 N','40 N'],ans:0},
    {q:'Energi potensial dua muatan titik Q₁ dan Q₂ yang terpisah jarak r adalah …',opts:['Ep = kQ₁Q₂/r²','Ep = kQ₁Q₂/r','Ep = kQ₁Q₂r','Ep = kQ₁²Q₂/r'],ans:1},
    {q:'Kondensator (kapasitor) berfungsi sebagai …',opts:['Penghasil muatan listrik','Penyimpan energi dalam medan listrik','Mengubah arus AC ke DC','Menghasilkan medan magnet'],ans:1},
    {q:'Kapasitansi kapasitor plat sejajar (C = ε₀A/d) bergantung pada …',opts:['Muatan yang disimpan saja','Luas pelat, jarak pelat, dan permitivitas','Tegangan saja','Arus yang mengalir'],ans:1},
    {q:'Pada bola konduktor bermuatan, muatan listrik tersebar di …',opts:['Dalam bola','Permukaan bola','Pusat bola','Tidak merata'],ans:1},
    {q:'Asas superposisi pada medan listrik menyatakan …',opts:['Hanya satu muatan yang berpengaruh','Medan total adalah jumlah vektor medan masing-masing muatan','Medan listrik saling menghilangkan','Medan bergantung pada massa'],ans:1},
    {q:'Satuan kuat medan listrik adalah …',opts:['Coulomb (C)','Newton per Coulomb (N/C)','Volt per meter (V/m) dan N/C keduanya benar','Ohm'],ans:2},
    {q:'Kerja yang dilakukan medan listrik untuk memindahkan muatan q melalui beda potensial ΔV adalah …',opts:['W = qΔV','W = q/ΔV','W = q²ΔV','W = ΔV/q'],ans:0},
    {q:'Materi yang dapat menghantarkan listrik dengan baik disebut …',opts:['Isolator','Semikonduktor','Konduktor','Superkonduktor'],ans:2},
    {q:'Di dalam konduktor yang berada dalam kesetimbangan elektrostatis, medan listriknya …',opts:['Sangat besar','Sama dengan nol','Bergantung ukuran konduktor','Selalu ke luar'],ans:1},
    {q:'Dua kapasitor kapasitansi C₁ dan C₂ disusun seri. Kapasitansi totalnya adalah …',opts:['C₁+C₂','(C₁×C₂)/(C₁+C₂)','C₁×C₂','1/C₁+1/C₂'],ans:1},
    {q:'Percobaan menggosok balon ke rambut menyebabkan …',opts:['Muatan baru tercipta','Muatan berpindah dari satu benda ke benda lain','Muatan hancur','Elektron bertambah pada kedua benda'],ans:1},
    {q:'Garis-garis medan listrik tidak pernah …',opts:['Meninggalkan muatan positif','Saling berpotongan','Menuju muatan negatif','Berada di dekat muatan'],ans:1},
    {q:'Potensial di permukaan bola konduktor bermuatan Q dan jari-jari R adalah …',opts:['kQ/R²','kQ/R','kQR','nol'],ans:1},
    {q:'Satuan energi potensial listrik adalah …',opts:['Volt','Joule','Coulomb','Newton'],ans:1},
    {q:'Dua muatan sejenis akan …',opts:['Tarik-menarik','Tolak-menolak','Tidak berpengaruh','Bergantung suhu'],ans:1},
    {q:'Permitivitas ruang hampa ε₀ bernilai kira-kira …',opts:['9×10⁹ N·m²/C²','8,85×10⁻¹² C²/(N·m²)','1,6×10⁻¹⁹ C','6,67×10⁻¹¹ N·m²/kg²'],ans:1},
  ],

  'gerak-parabola': [
    {q:'Pada gerak parabola, komponen kecepatan yang konstan (tetap) adalah …',opts:['Komponen vertikal vᵧ','Komponen horizontal vₓ','Kecepatan total','Tidak ada yang konstan'],ans:1},
    {q:'Rumus tinggi maksimum (h_maks) pada gerak parabola dengan v₀ dan θ adalah …',opts:['h = v₀² sin²θ / (2g)','h = v₀² sin²θ / g','h = v₀ sinθ / g','h = v₀² cos²θ / (2g)'],ans:0},
    {q:'Waktu untuk mencapai tinggi maksimum pada gerak parabola adalah …',opts:['t = v₀ sinθ / g','t = v₀ cosθ / g','t = 2v₀ sinθ / g','t = v₀ / g'],ans:0},
    {q:'Jangkauan horizontal (R) pada gerak parabola dinyatakan sebagai …',opts:['R = v₀² sin2θ / g','R = v₀² sin²θ / g','R = v₀ sinθ / g','R = v₀² / (2g sinθ)'],ans:0},
    {q:'Jangkauan horizontal maksimum terjadi ketika sudut elevasi adalah …',opts:['30°','45°','60°','90°'],ans:1},
    {q:'Di titik tertinggi gerak parabola, kecepatan benda …',opts:['Nol','Sama dengan v₀','Hanya memiliki komponen horizontal','Hanya memiliki komponen vertikal'],ans:2},
    {q:'Waktu total penerbangan (waktu tempuh) pada gerak parabola simetris adalah …',opts:['t = v₀ sinθ / g','t = 2v₀ sinθ / g','t = v₀ cosθ / g','t = v₀² / g'],ans:1},
    {q:'Komponen vertikal kecepatan pada gerak parabola mengalami …',opts:['Tidak berubah','Perubahan akibat gravitasi','Perubahan akibat hambatan udara','Peningkatan terus-menerus'],ans:1},
    {q:'Bola ditendang dengan v₀=20 m/s pada sudut 30°. Komponen horizontal kecepatan awal adalah …',opts:['10 m/s','10√3 m/s','20 m/s','20√3 m/s'],ans:1},
    {q:'Pada sudut elevasi 30° dan 60°, jangkauan horizontalnya …',opts:['Sama','Berbeda dua kali','Berbeda akar dua kali','Tidak bisa dibandingkan'],ans:0},
    {q:'Peluru ditembakkan horizontal dari ketinggian 45 m (g=10 m/s²). Waktu menyentuh tanah adalah …',opts:['2 s','3 s','4,5 s','√45 s'],ans:1},
    {q:'Pada gerak parabola, percepatan benda adalah …',opts:['Nol','g ke bawah selalu','g ke atas','Berubah-ubah'],ans:1},
    {q:'Bola dilempar dengan v₀=25 m/s pada θ=53° (g=10 m/s²). Tinggi maksimum yang dicapai (sin53°=0,8) adalah …',opts:['20 m','40 m','80 m','10 m'],ans:0},
    {q:'Komponen kecepatan vertikal saat mencapai tinggi maksimum adalah …',opts:['v₀ sinθ','0','g','−g'],ans:1},
    {q:'Gerak parabola adalah gabungan dari …',opts:['GLB vertikal dan GLBB horizontal','GLB horizontal dan GLBB vertikal','Dua GLB','Dua GLBB'],ans:1},
    {q:'Benda dilempar horizontal dengan kecepatan 15 m/s. Kecepatan vertikal setelah 2 s (g=10 m/s²) adalah …',opts:['10 m/s','15 m/s','20 m/s','25 m/s'],ans:2},
    {q:'Sudut yang memberikan jangkauan horizontal sama ketika sudut elevasi dijumlahkan menjadi 90° adalah …',opts:['Benar, sudut komplementer memberi jangkauan sama','Salah','Hanya untuk v₀ tertentu','Tidak ada hubungannya'],ans:0},
    {q:'Bola ditendang dari tanah dengan v₀=10 m/s pada θ=45° (g=10 m/s²). Jangkauan horizontalnya adalah …',opts:['10 m','5 m','20 m','15 m'],ans:0},
    {q:'Kecepatan total benda saat di ketinggian setengah dari h_maks pada gerak parabola …',opts:['Lebih besar dari di h_maks','Sama dengan di h_maks','Lebih kecil dari di h_maks','Tidak bisa ditentukan'],ans:0},
    {q:'Lintasan gerak parabola membentuk kurva …',opts:['Lingkaran','Elips','Parabola','Hiperbola'],ans:2},
    {q:'Komponen vertikal kecepatan saat mencapai tanah kembali (dibanding saat dilempar ke atas) adalah …',opts:['Sama besar, sama arah','Sama besar, berlawanan arah','Lebih besar','Lebih kecil'],ans:1},
    {q:'Gerak peluru yang ditembakkan horizontal dari tebing bukan gerak parabola simetris karena …',opts:['Tidak ada komponen vertikal awal','Peluru tidak kembali ke titik asal','Kecepatan berbeda','Tidak ada gravitasi'],ans:1},
    {q:'Rumus kecepatan total pada sembarang titik lintasan parabola adalah …',opts:['v = vₓ + vᵧ','v = √(vₓ² + vᵧ²)','v = vₓ − vᵧ','v = vₓ·vᵧ'],ans:1},
    {q:'Benda A dilempar dengan θ=30° dan benda B dengan θ=60° pada kecepatan awal sama. Jangkauan A dibanding B adalah …',opts:['Lebih kecil','Lebih besar','Sama','Bergantung v₀'],ans:2},
    {q:'Gaya yang bekerja pada benda dalam gerak parabola (abaikan hambatan udara) adalah …',opts:['Gaya dorong dan gravitasi','Hanya gravitasi','Hanya gaya dorong','Gaya normal'],ans:1},
  ],

  'hukum-newton': [
    {q:'Hukum I Newton menyatakan bahwa benda diam atau bergerak lurus beraturan jika …',opts:['Resultan gaya yang bekerja nol','Ada gaya yang bekerja','Hanya ada satu gaya','Massanya besar'],ans:0},
    {q:'Hukum II Newton menyatakan bahwa percepatan suatu benda …',opts:['Berbanding terbalik dengan gaya','Sebanding dengan gaya dan berbanding terbalik dengan massa','Tidak bergantung pada massa','Hanya bergantung pada massa'],ans:1},
    {q:'Hukum III Newton menyatakan bahwa …',opts:['F = ma','Setiap aksi ada reaksi yang sama besar dan berlawanan arah','Benda diam jika gaya nol','Gaya gesekan selalu ada'],ans:1},
    {q:'Benda bermassa 5 kg mendapat gaya 20 N. Percopatannya adalah …',opts:['100 m/s²','25 m/s²','4 m/s²','0,25 m/s²'],ans:2},
    {q:'Gaya normal pada benda diam di permukaan horizontal sama besar dengan …',opts:['Berat benda','Massa benda','Gaya gesek','Nol'],ans:0},
    {q:'Koefisien gesek statis selalu … koefisien gesek kinetis',opts:['Lebih kecil dari','Sama dengan','Lebih besar dari atau sama dengan','Tidak ada hubungan dengan'],ans:2},
    {q:'Gaya gesek kinetis dinyatakan dengan rumus …',opts:['f = μₛN','f = μₖN','f = μₛmg cosθ','f = N/μₖ'],ans:1},
    {q:'Tegangan tali (T) dalam sistem Atwood (m₁ > m₂) pada tali antara kedua massa adalah …',opts:['T = m₁g','T = m₂g','T diantara m₂g dan m₁g','T = (m₁+m₂)g'],ans:2},
    {q:'Gaya sentripetal pada gerak melingkar beraturan diarahkan …',opts:['Sesuai arah gerak (tangensial)','Menuju pusat lingkaran','Menjauhi pusat lingkaran','Ke atas'],ans:1},
    {q:'Benda 10 kg dalam lift yang bergerak ke atas dengan percepatan 2 m/s² (g=10 m/s²). Gaya normal pada benda adalah …',opts:['100 N','80 N','120 N','20 N'],ans:2},
    {q:'Pasangan aksi-reaksi yang benar pada buku di atas meja adalah …',opts:['Berat buku dan normal meja','Berat buku dan berat meja','Normal meja pada buku dan normal buku pada meja','Gaya dorong tangan dan normal meja'],ans:2},
    {q:'Dalam sistem satuan SI, satuan gaya adalah …',opts:['Kilogram','Meter per sekon kuadrat','Newton','Joule'],ans:2},
    {q:'Massa 3 kg diikat tali sepanjang 0,5 m berputar horizontal dengan kecepatan 2 m/s. Gaya sentripetal yang diperlukan adalah …',opts:['6 N','12 N','24 N','3 N'],ans:2},
    {q:'Inersia adalah kecenderungan benda untuk …',opts:['Bergerak lebih cepat','Mempertahankan keadaan geraknya','Mengikuti gaya yang diberikan','Berhenti'],ans:1},
    {q:'Benda A bermassa 4 kg dan benda B bermassa 6 kg dihubungkan tali di atas permukaan licin dan ditarik gaya 20 N. Percepatan sistem adalah …',opts:['1 m/s²','2 m/s²','3 m/s²','5 m/s²'],ans:1},
    {q:'Gaya gesek statis maksimum pada benda 8 kg di permukaan μₛ=0,5 (g=10 m/s²) adalah …',opts:['16 N','40 N','80 N','4 N'],ans:1},
    {q:'Benda meluncur di bidang miring sudut 30° tanpa gesekan. Percepatan benda adalah …',opts:['g','g sin30° = 5 m/s²','g cos30°','g tan30°'],ans:1},
    {q:'Resultan gaya pada benda yang bergerak dengan kecepatan konstan adalah …',opts:['F = ma','F = nol','F = mg','F bergantung kecepatan'],ans:1},
    {q:'Mengapa benda lebih sulit dihentikan ketika massanya besar? Karena …',opts:['Gaya gravitasi lebih besar','Inersianya lebih besar','Percepatan lebih kecil','Gesekan lebih besar'],ans:1},
    {q:'Hukum Newton berlaku dalam kerangka acuan …',opts:['Bergerak dengan percepatan','Inersial (tidak dipercepat)','Berputar','Semua kerangka'],ans:1},
    {q:'Benda m=2 kg, koefisien gesek kinetis μₖ=0,3, g=10 m/s². Gaya gesek kinetis adalah …',opts:['3 N','6 N','20 N','0,3 N'],ans:1},
    {q:'Apakah pasangan aksi-reaksi bekerja pada benda yang sama?',opts:['Ya, selalu','Tidak, bekerja pada dua benda berbeda','Kadang-kadang','Bergantung situasi'],ans:1},
    {q:'Sistem elevator: massa 500 kg, percepatan ke bawah 2 m/s² (g=10 m/s²). Tegangan tali adalah …',opts:['6000 N','4000 N','5000 N','1000 N'],ans:0},
    {q:'Gaya yang menyebabkan bumi mengorbit matahari adalah …',opts:['Gaya normal','Gaya gesek','Gaya gravitasi sebagai sentripetal','Gaya sentrifugal'],ans:2},
    {q:'Benda A mendorong benda B dengan gaya 10 N ke kanan. Gaya yang diberikan B pada A adalah …',opts:['10 N ke kanan','10 N ke kiri','5 N ke kiri','Tidak ada'],ans:1},
  ],

  'dinamika-rotasi': [
    {q:'Torsi (momen gaya) didefinisikan sebagai …',opts:['Gaya dikalikan jarak ke poros','Massa dikalikan percepatan angular','Gaya dibagi jarak ke poros','Momen inersia dikalikan kecepatan sudut'],ans:0},
    {q:'Momen inersia sebuah partikel bermassa m pada jarak r dari sumbu putar adalah …',opts:['mr','mr²','m/r²','m/r'],ans:1},
    {q:'Hubungan torsi (τ), momen inersia (I), dan percepatan angular (α) adalah …',opts:['τ = I/α','τ = Iα','τ = α/I','τ = I + α'],ans:1},
    {q:'Cakram pejal bermassa M dan jari-jari R berputar pada porosnya. Momen inersianya adalah …',opts:['MR²','½MR²','⅔MR²','⅖MR²'],ans:1},
    {q:'Bola pejal bermassa M dan jari-jari R berputar pada sumbu melalui pusatnya. Momen inersianya adalah …',opts:['½MR²','⅔MR²','⅖MR²','MR²'],ans:2},
    {q:'Gaya 50 N bekerja tegak lurus pada ujung tuas panjang 2 m. Torsinya adalah …',opts:['25 N·m','100 N·m','50 N·m','150 N·m'],ans:1},
    {q:'Satuan momen inersia dalam SI adalah …',opts:['kg·m','kg·m²','kg/m²','N·m'],ans:1},
    {q:'Hukum kekekalan momentum sudut menyatakan bahwa momentum sudut total suatu sistem …',opts:['Selalu bertambah','Konstan jika tidak ada torsi eksternal','Selalu berkurang','Bergantung momen inersia'],ans:1},
    {q:'Katrol berbentuk cakram pejal (I=½MR²) ditarik tali. Percepatan translasi tali (a) dan percepatan sudut katrol (α) dihubungkan oleh …',opts:['a = αR²','a = αR','a = α/R','a = α'],ans:1},
    {q:'Syarat kesetimbangan rotasi adalah …',opts:['Resultan gaya = 0','Resultan torsi = 0','Resultan gaya = 0 DAN resultan torsi = 0','Momen inersia = 0'],ans:2},
    {q:'Seorang penari balet menarik tangannya ke tubuh saat berputar. Kecepatan sudutnya …',opts:['Berkurang','Bertambah','Tetap','Tidak tentu'],ans:1},
    {q:'Batang seragam panjang L bermassa M berputar pada salah satu ujungnya. Momen inersianya adalah …',opts:['ML²/12','ML²/3','ML²/4','ML²/2'],ans:1},
    {q:'Jika momen inersia sistem berkurang, dengan momentum sudut konstan, kecepatan sudut …',opts:['Berkurang','Tetap','Bertambah','Menjadi nol'],ans:2},
    {q:'Gaya 30 N bekerja pada jarak 40 cm dari poros dengan sudut 60°. Torsinya adalah …',opts:['12 N·m','12√3 N·m','6√3 N·m','6 N·m'],ans:2},
    {q:'Energi kinetik rotasi benda dengan momen inersia I dan kecepatan sudut ω adalah …',opts:['Iω','½Iω','½Iω²','Iω²'],ans:2},
    {q:'Satuan torsi adalah …',opts:['N/m','N·m','kg·m²/s','J/rad'],ans:1},
    {q:'Lengan torsi adalah …',opts:['Jarak antara dua gaya','Jarak tegak lurus dari poros ke garis kerja gaya','Besar gaya','Panjang batang'],ans:1},
    {q:'Momentum sudut L berhubungan dengan momen inersia I dan ω melalui …',opts:['L = I/ω','L = Iω','L = I + ω','L = Iω²'],ans:1},
    {q:'Sebuah benda dalam kesetimbangan rotasi berarti …',opts:['Benda diam total','Jumlah torsi yang searah jarum jam = torsi berlawanan jarum jam','Percepatan linearnya nol','Kecepatannya konstan'],ans:1},
    {q:'Momen inersia cincin tipis (semua massa di tepi) dengan massa M dan jari-jari R adalah …',opts:['½MR²','⅔MR²','MR²','⅖MR²'],ans:2},
    {q:'Kapak memiliki kepala berat agar …',opts:['Lebih ringan','Momen inersia lebih besar sehingga energi kinetik lebih besar','Mudah dibawa','Tidak mudah aus'],ans:1},
    {q:'Torsi bernilai nol ketika gaya bekerja …',opts:['Pada sudut 90° terhadap lengan torsi','Pada arah yang melalui sumbu putar','Tegak lurus ke permukaan','Pada jarak maksimum dari poros'],ans:1},
    {q:'Satuan kecepatan sudut (ω) adalah …',opts:['m/s','rad/s','rad/s²','m/s²'],ans:1},
    {q:'Hubungan antara percepatan tangensial (aₜ) dan percepatan sudut (α) pada jarak r dari poros adalah …',opts:['aₜ = α/r','aₜ = αr','aₜ = α²r','aₜ = α/r²'],ans:1},
    {q:'Benda berputar dengan I=2 kg·m² dan ω=5 rad/s. Energi kinetik rotasinya adalah …',opts:['10 J','25 J','50 J','5 J'],ans:1},
  ],

  'usaha-energi': [
    {q:'Usaha yang dilakukan gaya F untuk perpindahan s dengan sudut θ di antara keduanya adalah …',opts:['W = Fs sinθ','W = Fs cosθ','W = F/s cosθ','W = Fs tanθ'],ans:1},
    {q:'Satuan usaha (kerja) dalam SI adalah …',opts:['Watt','Newton','Joule','Pascal'],ans:2},
    {q:'Energi kinetik benda bermassa m bergerak dengan kecepatan v adalah …',opts:['mv²','½mv²','mv','½mv'],ans:1},
    {q:'Energi potensial gravitasi benda bermassa m pada ketinggian h adalah …',opts:['mgh','½mgh','mh','mg/h'],ans:0},
    {q:'Hukum kekekalan energi mekanik berlaku ketika …',opts:['Ada gaya gesek','Tidak ada gaya non-konservatif (atau bisa diabaikan)','Benda bergerak lambat','Massa benda besar'],ans:1},
    {q:'Benda 2 kg bergerak dengan kecepatan 10 m/s. Energi kinetiknya adalah …',opts:['20 J','100 J','200 J','10 J'],ans:1},
    {q:'Usaha total gaya yang bekerja pada benda sama dengan …',opts:['Perubahan energi potensial','Perubahan energi kinetik','Energi total','Massa dikalikan percepatan'],ans:1},
    {q:'Gaya 30 N bekerja pada sudut 60° terhadap perpindahan 4 m. Usaha yang dilakukan adalah …',opts:['120 J','60 J','60√3 J','30 J'],ans:1},
    {q:'Daya didefinisikan sebagai …',opts:['Usaha dikalikan waktu','Usaha dibagi waktu','Gaya dikalikan jarak','Energi dikalikan waktu'],ans:1},
    {q:'Satuan daya dalam SI adalah …',opts:['Joule','Newton','Watt','Volt'],ans:2},
    {q:'Benda 1 kg jatuh dari ketinggian 5 m (g=10 m/s²). Kecepatan saat menyentuh tanah adalah …',opts:['5 m/s','10 m/s','50 m/s','100 m/s'],ans:1},
    {q:'Mesin menghasilkan daya 1000 W selama 10 s. Energi yang dihasilkan adalah …',opts:['100 J','10000 J','1000 J','10 J'],ans:1},
    {q:'Usaha yang dilakukan gaya tegak lurus terhadap perpindahan adalah …',opts:['Maksimum','Nol','Minimum','Negatif'],ans:1},
    {q:'Energi potensial pegas dengan konstanta k dan simpangan x adalah …',opts:['kx','½kx²','kx²','½kx'],ans:1},
    {q:'Sebuah bola bermassa 0,5 kg dilempar vertikal ke atas dengan v=20 m/s (g=10 m/s²). Ketinggian maksimum yang dicapai adalah …',opts:['10 m','20 m','40 m','200 m'],ans:1},
    {q:'Teorema kerja-energi (work-energy theorem) menyatakan …',opts:['W_total = ΔEk','W_total = ΔEp','W_total = Ek + Ep','W_total = m·a·s'],ans:0},
    {q:'Gaya konservatif adalah gaya yang …',opts:['Usahanya bergantung pada lintasan','Usahanya tidak bergantung pada lintasan','Selalu berlawanan gerak','Tidak melakukan usaha'],ans:1},
    {q:'Gaya gesek adalah contoh gaya …',opts:['Konservatif','Non-konservatif','Gravitasi','Sentripetal'],ans:1},
    {q:'Benda m=3 kg bermula dari diam, didorong dengan gaya 15 N selama 2 m (permukaan licin). Kecepatan akhirnya adalah …',opts:['√(10) m/s','√(20) m/s','10 m/s','5 m/s'],ans:1},
    {q:'Elevator bermassa 800 kg naik 10 m dalam 20 s (g=10 m/s²). Daya minimum motornya adalah …',opts:['400 W','4000 W','40000 W','800 W'],ans:1},
    {q:'Pada titik tertinggi lemparan vertikal ke atas, energi yang dimiliki benda adalah …',opts:['Hanya energi kinetik','Hanya energi potensial gravitasi','Sama: setengah-setengah','Energi mekanik nol'],ans:1},
    {q:'Pegas k=200 N/m dikompresi 5 cm. Energi potensial yang tersimpan adalah …',opts:['10 J','1 J','0,25 J','5 J'],ans:2},
    {q:'Usaha bernilai negatif terjadi ketika …',opts:['Gaya dan perpindahan searah','Gaya dan perpindahan berlawanan arah','Gaya tegak lurus perpindahan','Perpindahan nol'],ans:1},
    {q:'Jika kecepatan benda menjadi dua kali lipat, energi kinetiknya menjadi …',opts:['2 kali','4 kali','8 kali','½ kali'],ans:1},
    {q:'Gravitasi adalah contoh gaya konservatif karena …',opts:['Selalu ke bawah','Usaha gravitasi tidak bergantung lintasan','Besarnya konstan','Massanya besar'],ans:1},
  ],

  'momentum-impuls': [
    {q:'Momentum linear suatu benda didefinisikan sebagai …',opts:['Massa dibagi kecepatan','Massa dikalikan kecepatan','Gaya dikalikan waktu','Gaya dibagi waktu'],ans:1},
    {q:'Satuan momentum dalam SI adalah …',opts:['kg·m/s','N·m','J/m','kg·m/s²'],ans:0},
    {q:'Impuls didefinisikan sebagai …',opts:['Perubahan massa','Perubahan kecepatan','Gaya dikalikan selang waktu','Perubahan energi kinetik'],ans:2},
    {q:'Hubungan impuls dengan perubahan momentum adalah …',opts:['J = Δp','J = Δm','J = Δv','J = F/t'],ans:0},
    {q:'Hukum kekekalan momentum linear berlaku ketika …',opts:['Tidak ada gaya eksternal neto','Ada gaya gesek','Benda bergerak lambat','Massa benda sama'],ans:0},
    {q:'Bola 0,5 kg bergerak 10 m/s ke kanan lalu memantul 8 m/s ke kiri. Perubahan momentumnya adalah …',opts:['1 kg·m/s','9 kg·m/s','−9 kg·m/s','−1 kg·m/s'],ans:1},
    {q:'Tumbukan sempurna elastis adalah tumbukan di mana …',opts:['Energi kinetik tidak kekal','Energi kinetik dan momentum kekal','Benda menyatu setelah tumbukan','Gaya tumbukan sangat besar'],ans:1},
    {q:'Tumbukan tidak elastis sempurna adalah tumbukan di mana …',opts:['Energi kinetik kekal','Momentum tidak kekal','Kedua benda menyatu setelah tumbukan','Semua energi hilang'],ans:2},
    {q:'Senapan bermassa 3 kg menembakkan peluru 30 g dengan v=400 m/s. Kecepatan mundur senapan adalah …',opts:['4 m/s','40 m/s','0,4 m/s','400 m/s'],ans:0},
    {q:'Bola A (2 kg, 5 m/s ke kanan) menabrak bola B (3 kg, diam) dan menyatu. Kecepatan setelah tumbukan adalah …',opts:['2 m/s','3 m/s','5 m/s','10 m/s'],ans:0},
    {q:'Koefisien restitusi (e) untuk tumbukan elastis sempurna adalah …',opts:['e = 0','e = 0,5','e = 1','e > 1'],ans:2},
    {q:'Koefisien restitusi untuk tumbukan tidak elastis sempurna adalah …',opts:['e = 0','e = 0,5','e = 1','e > 1'],ans:0},
    {q:'Rumus koefisien restitusi e adalah …',opts:['e = (v₁ − v₂)/(u₂ − u₁)','e = (v₂ − v₁)/(u₁ − u₂)','e = v₁v₂/u₁u₂','e = (u₁ − u₂)/(v₂ − v₁)'],ans:1},
    {q:'Impuls gaya 100 N yang bekerja selama 0,05 s adalah …',opts:['0,5 N·s','5 N·s','2000 N·s','2 N·s'],ans:1},
    {q:'Benda 4 kg awalnya diam dipukul impuls 20 N·s. Kecepatan akhirnya adalah …',opts:['5 m/s','80 m/s','0,2 m/s','20 m/s'],ans:0},
    {q:'Mengapa mobil dilengkapi airbag? Karena airbag …',opts:['Memperbesar gaya impuls','Memperpanjang waktu tumbukan sehingga gaya rata-rata berkurang','Memperkecil perubahan momentum','Meningkatkan momentum'],ans:1},
    {q:'Roket bergerak berdasarkan prinsip …',opts:['Hukum I Newton','Hukum kekekalan energi','Hukum kekekalan momentum','Hukum III Newton saja'],ans:2},
    {q:'Bola 0,2 kg dengan v=15 m/s mengenai dinding dan memantul dengan v=10 m/s dalam waktu 0,01 s. Gaya rata-rata dinding pada bola adalah …',opts:['500 N','1000 N','250 N','2500 N'],ans:0},
    {q:'Pada tumbukan dua benda, yang kekal adalah …',opts:['Kecepatan masing-masing','Energi kinetik selalu','Momentum total sistem','Energi kinetik dan momentum total'],ans:2},
    {q:'Dimensi impuls sama dengan dimensi …',opts:['Gaya','Energi','Momentum','Daya'],ans:2},
    {q:'Dua bola sama massa bertukar kecepatan pada tumbukan elastis sempurna. Ini berarti …',opts:['Bola A berhenti, B melanjutkan kecepatan A','Keduanya berhenti','Keduanya mempercepat','Tidak ada perubahan'],ans:0},
    {q:'Luas area di bawah grafik F-t menyatakan …',opts:['Momentum','Impuls','Energi kinetik','Daya'],ans:1},
    {q:'Massa 5 kg bergerak 4 m/s. Momentum liniernya adalah …',opts:['1,25 kg·m/s','20 kg·m/s','9 kg·m/s','0,8 kg·m/s'],ans:1},
    {q:'Pada tumbukan yang hanya melibatkan gaya dalam (internal), momentum sistem …',opts:['Bertambah','Berkurang','Tetap (kekal)','Menjadi nol'],ans:2},
    {q:'Peluru 50 g ditembakkan ke kayu 5 kg yang diam. Peluru bersarang dalam kayu dan keduanya bergerak 2 m/s. Kecepatan awal peluru adalah …',opts:['200 m/s','202 m/s','100 m/s','2000 m/s'],ans:1},
  ],

  'gelombang': [
    {q:'Gelombang transversal adalah gelombang yang …',opts:['Arah getar sejajar arah rambat','Arah getar tegak lurus arah rambat','Tidak memerlukan medium','Bergerak dalam ruang hampa saja'],ans:1},
    {q:'Gelombang longitudinal adalah gelombang yang …',opts:['Arah getar tegak lurus arah rambat','Arah getar sejajar arah rambat','Tidak dapat merambat dalam zat padat','Hanya cahaya'],ans:1},
    {q:'Hubungan antara kecepatan (v), frekuensi (f), dan panjang gelombang (λ) adalah …',opts:['v = f/λ','v = fλ','v = λ/f','f = vλ'],ans:1},
    {q:'Satuan frekuensi dalam SI adalah …',opts:['Meter','Sekon','Hertz','Watt'],ans:2},
    {q:'Gelombang dengan frekuensi 200 Hz dan panjang gelombang 2 m memiliki kecepatan …',opts:['100 m/s','400 m/s','200 m/s','1 m/s'],ans:1},
    {q:'Amplitudo gelombang menyatakan …',opts:['Jumlah gelombang per meter','Simpangan maksimum dari posisi setimbang','Kecepatan perambatan','Frekuensi getaran'],ans:1},
    {q:'Interferensi konstruktif terjadi ketika dua gelombang …',opts:['Berlawanan fase','Sefase','Berbeda amplitudo','Berbeda frekuensi'],ans:1},
    {q:'Efek Doppler terjadi ketika sumber bunyi atau pengamat …',opts:['Diam','Bergerak relatif satu sama lain','Berada di ruang hampa','Memiliki massa berbeda'],ans:1},
    {q:'Resonansi terjadi ketika frekuensi gaya luar …',opts:['Lebih kecil dari frekuensi natural','Sama dengan frekuensi natural','Lebih besar dari frekuensi natural','Nol'],ans:1},
    {q:'Bunyi termasuk gelombang …',opts:['Elektromagnetik','Transversal','Longitudinal','Mekanik transversal'],ans:2},
    {q:'Panjang gelombang (λ) didefinisikan sebagai …',opts:['Jarak antara dua puncak berurutan','Tinggi puncak gelombang','Waktu satu getaran','Jumlah getaran per sekon'],ans:0},
    {q:'Gelombang elektromagnetik dapat merambat dalam …',opts:['Zat padat saja','Zat cair saja','Vakum (ruang hampa)','Zat padat dan cair saja'],ans:2},
    {q:'Pemantulan gelombang (refleksi) terjadi ketika gelombang …',opts:['Melewati medium berbeda','Mengenai permukaan dan kembali','Mengalami perubahan frekuensi','Menyatu dengan gelombang lain'],ans:1},
    {q:'Pada gelombang stasioner (berdiri), titik dengan amplitudo maksimum disebut …',opts:['Simpul','Perut (antinode)','Puncak','Lembah'],ans:1},
    {q:'Pada gelombang stasioner, titik dengan amplitudo nol disebut …',opts:['Simpul (node)','Perut','Puncak','Frekuensi'],ans:0},
    {q:'Intensitas bunyi berbanding terbalik dengan …',opts:['Frekuensi','Jarak','Kuadrat jarak dari sumber','Amplitudo'],ans:2},
    {q:'Cepat rambat bunyi di udara (pada suhu ruang) sekitar …',opts:['300 m/s','340 m/s','3×10⁸ m/s','1500 m/s'],ans:1},
    {q:'Nada dasar (harmonik pertama) pada senar panjang L yang kedua ujungnya terikat memiliki panjang gelombang …',opts:['L','2L','L/2','4L'],ans:1},
    {q:'Jika frekuensi sumber bunyi bertambah dan pengamat diam, panjang gelombang yang diterima …',opts:['Bertambah','Berkurang','Tetap','Tidak tentu'],ans:1},
    {q:'Difraksi gelombang paling nyata terjadi ketika …',opts:['Panjang gelombang jauh lebih kecil dari celah','Panjang gelombang sebanding dengan ukuran celah','Gelombang sangat cepat','Medium sangat padat'],ans:1},
    {q:'Polarisasi hanya dapat terjadi pada gelombang …',opts:['Longitudinal','Transversal','Semua gelombang','Gelombang bunyi'],ans:1},
    {q:'Gelombang radio memiliki kecepatan …',opts:['Sama dengan bunyi (~340 m/s)','Sama dengan cahaya (~3×10⁸ m/s)','Lebih lambat dari bunyi','Bergantung frekuensinya'],ans:1},
    {q:'Dispersi gelombang cahaya oleh prisma terjadi karena …',opts:['Pemantulan total','Indeks bias berbeda untuk panjang gelombang berbeda','Interferensi','Difraksi'],ans:1},
    {q:'Pipa organa terbuka panjang L memiliki frekuensi dasar …',opts:['f = v/(4L)','f = v/(2L)','f = 2v/L','f = v/L'],ans:1},
    {q:'Periode gelombang 0,02 s. Frekuensinya adalah …',opts:['50 Hz','0,02 Hz','5 Hz','200 Hz'],ans:0},
  ],

  'optik': [
    {q:'Hukum Snell tentang pembiasan cahaya menyatakan …',opts:['n₁ cosθ₁ = n₂ cosθ₂','n₁ sinθ₁ = n₂ sinθ₂','n₁ tanθ₁ = n₂ tanθ₂','θ₁ = θ₂'],ans:1},
    {q:'Hukum pemantulan cahaya menyatakan bahwa sudut datang … sudut pantul',opts:['Lebih besar dari','Sama dengan','Lebih kecil dari','Tidak berhubungan dengan'],ans:1},
    {q:'Indeks bias material menyatakan …',opts:['Sudut pantul','Perbandingan kecepatan cahaya di vakum terhadap di material','Sudut kritis','Panjang gelombang di material'],ans:1},
    {q:'Pemantulan total terjadi ketika …',opts:['Sudut datang lebih kecil dari sudut kritis','Cahaya datang dari medium renggang ke medium rapat','Sudut datang lebih besar dari sudut kritis pada medium optik lebih rapat','Cahaya menembus medium'],ans:2},
    {q:'Bayangan yang dibentuk cermin datar bersifat …',opts:['Nyata, terbalik, sama besar','Maya, tegak, sama besar','Nyata, tegak, diperkecil','Maya, terbalik, diperbesar'],ans:1},
    {q:'Titik fokus cermin cekung berada di …',opts:['Belakang cermin','Di depan cermin','Pada permukaan cermin','Tak terhingga'],ans:1},
    {q:'Rumus cermin (persamaan cermin) adalah …',opts:['1/f = 1/do + 1/di','f = do × di','1/f = do − di','f = do + di'],ans:0},
    {q:'Lensa cembung (konvergen) mengumpulkan sinar cahaya ke …',opts:['Titik fokus di sisi masuk cahaya','Titik fokus di sisi keluar cahaya','Pusat lensa','Tak terhingga'],ans:1},
    {q:'Perbesaran bayangan didefinisikan sebagai …',opts:['m = do/di','m = di/do','m = f/do','m = do × di'],ans:1},
    {q:'Kekuatan lensa dinyatakan dalam satuan …',opts:['Meter','Dioptri','Newton','Meter⁻¹ sama dengan dioptri'],ans:3},
    {q:'Lensa bikonkaf (cekung-cekung) bersifat …',opts:['Konvergen','Divergen','Netral','Bergantung sudut datang'],ans:1},
    {q:'Cermin cembung digunakan sebagai kaca spion karena …',opts:['Menghasilkan bayangan nyata','Memberikan pandangan sudut luas dengan bayangan maya tegak','Memperbesar objek','Memfokuskan cahaya'],ans:1},
    {q:'Pada lensa, bayangan nyata terbentuk ketika …',opts:['Benda di antara lensa dan fokus','Benda lebih jauh dari fokus','Benda di titik fokus','Benda di belakang lensa'],ans:1},
    {q:'Mata miopi (rabun jauh) dikoreksi dengan …',opts:['Lensa cembung (konvergen)','Lensa cekung (divergen)','Cermin cekung','Prisma'],ans:1},
    {q:'Mata hipermetropi (rabun dekat) dikoreksi dengan …',opts:['Lensa cembung (konvergen)','Lensa cekung (divergen)','Cermin cembung','Prisma'],ans:0},
    {q:'Pelangi terjadi karena cahaya matahari mengalami … dalam tetes air hujan',opts:['Pemantulan saja','Pembiasan saja','Pemantulan dan pembiasan (dispersi)','Difraksi'],ans:2},
    {q:'Sudut kritis pada pemantulan total adalah sudut datang yang menghasilkan sudut bias sebesar …',opts:['0°','45°','90°','180°'],ans:2},
    {q:'Pada cermin cekung, ketika benda berada di antara F dan C (pusat kelengkungan), bayangan yang terbentuk …',opts:['Maya, tegak, diperbesar','Nyata, terbalik, diperbesar','Nyata, terbalik, diperkecil','Maya, terbalik'],ans:1},
    {q:'Indeks bias udara kira-kira …',opts:['0','0,5','1','1,5'],ans:2},
    {q:'Sinar yang melewati pusat optik lensa …',opts:['Dibelokkan mendekati sumbu','Diteruskan tanpa pembelokan','Dipantulkan','Dibelokkan menjauhi sumbu'],ans:1},
    {q:'Fenomena fatamorgana disebabkan oleh …',opts:['Difraksi cahaya','Pemantulan total internal pada lapisan udara panas','Interferensi cahaya','Polarisasi cahaya'],ans:1},
    {q:'Kacamata pembesar (loupe) menggunakan …',opts:['Lensa cekung','Cermin cembung','Lensa cembung','Prisma'],ans:2},
    {q:'Persamaan lensa tipis: 1/f = 1/do + 1/di. Bayangan maya terbentuk ketika nilai di …',opts:['Positif','Negatif','Nol','Tak hingga'],ans:1},
    {q:'Dispersi cahaya oleh prisma terjadi karena cahaya dengan panjang gelombang berbeda memiliki …',opts:['Kecepatan sama dalam prisma','Indeks bias berbeda dalam prisma','Amplitudo berbeda','Energi sama'],ans:1},
    {q:'Serat optik memanfaatkan fenomena …',opts:['Pembiasan total','Pemantulan total internal','Difraksi','Interferensi'],ans:1},
  ],

  'energi-terbarukan': [
    {q:'Yang termasuk energi terbarukan adalah …',opts:['Batu bara','Minyak bumi','Energi surya','Gas alam'],ans:2},
    {q:'Panel surya mengubah energi …',opts:['Panas menjadi listrik','Cahaya menjadi listrik (efek fotolistrik)','Angin menjadi listrik','Mekanik menjadi listrik'],ans:1},
    {q:'PLTA (Pembangkit Listrik Tenaga Air) memanfaatkan energi …',opts:['Panas bumi','Potensi dan kinetik air','Surya','Angin'],ans:1},
    {q:'Efisiensi panel surya komersial saat ini umumnya berkisar …',opts:['1–5%','15–22%','50–60%','80–90%'],ans:1},
    {q:'PLTB (Pembangkit Listrik Tenaga Bayu) mengubah energi …',opts:['Surya menjadi listrik','Angin menjadi listrik','Air menjadi listrik','Panas bumi menjadi listrik'],ans:1},
    {q:'Panas bumi (geotermal) bersumber dari …',opts:['Matahari','Inti bumi yang panas','Proses pembusukan','Angin'],ans:1},
    {q:'Biomassa sebagai sumber energi terbarukan memanfaatkan …',opts:['Energi matahari yang tersimpan dalam bahan organik','Energi panas bumi','Energi pasang surut','Energi nuklir'],ans:0},
    {q:'Energi gelombang laut (wave energy) terutama berasal dari …',opts:['Energi panas matahari','Energi angin yang menggerakkan gelombang','Energi pasang surut bulan','Energi geotermal'],ans:1},
    {q:'Rumus efisiensi konversi energi adalah …',opts:['η = E_masukan / E_keluaran × 100%','η = E_keluaran / E_masukan × 100%','η = E_keluaran × E_masukan','η = E_masukan − E_keluaran'],ans:1},
    {q:'Indonesia memiliki potensi besar energi terbarukan, terutama …',opts:['Energi nuklir','Energi surya dan panas bumi','Energi pasang surut','Energi angin lepas pantai saja'],ans:1},
    {q:'Sel surya (fotovoltaik) terbuat dari …',opts:['Tembaga','Besi','Material semikonduktor seperti silikon','Plastik'],ans:2},
    {q:'Keunggulan energi terbarukan dibandingkan energi fosil adalah …',opts:['Lebih murah selalu','Tidak habis dan ramah lingkungan','Lebih mudah disimpan','Teknologinya sudah sempurna'],ans:1},
    {q:'Salah satu tantangan utama energi surya adalah …',opts:['Terlalu banyak energi dihasilkan','Intermittent (bergantung sinar matahari) dan butuh penyimpanan','Polusi yang dihasilkan','Teknologi yang terlalu rumit'],ans:1},
    {q:'PLTN (Pembangkit Listrik Tenaga Nuklir) menggunakan bahan bakar …',opts:['Uranium atau plutonium','Batu bara','Gas alam','Biomassa'],ans:0},
    {q:'Energi terbarukan disebut "terbarukan" karena …',opts:['Harganya murah','Sumbernya dapat diperbarui secara alami dalam waktu singkat','Tidak menghasilkan emisi sama sekali','Teknologinya baru'],ans:1},
    {q:'Perbandingan antara energi yang dihasilkan dan energi yang diinvestasikan dalam produksi disebut …',opts:['Efisiensi','EROI (Energy Return on Investment)','Kapasitas terpasang','Faktor beban'],ans:1},
    {q:'Turbin angin mengubah energi kinetik angin menjadi listrik melalui …',opts:['Efek fotolistrik','Konversi termal','Generator (prinsip induksi elektromagnetik)','Baterai'],ans:2},
    {q:'Hydropower (tenaga air) merupakan sumber listrik terbarukan terbesar di Indonesia karena …',opts:['Mudah digunakan','Banyak sungai dan air terjun','Tidak butuh teknologi canggih','Paling murah'],ans:1},
    {q:'Dampak lingkungan PLTA yang perlu diperhatikan adalah …',opts:['Emisi CO₂ yang tinggi','Penggunaan bahan bakar fosil','Perubahan ekosistem dan migrasi penduduk akibat bendungan','Radiasi nuklir'],ans:2},
    {q:'Intensitas radiasi surya (irradiance) di permukaan bumi sekitar …',opts:['100 W/m²','1000 W/m²','10000 W/m²','10 W/m²'],ans:1},
    {q:'Biogas dihasilkan dari …',opts:['Pembakaran kayu','Fermentasi anaerobik bahan organik','Panel surya','Turbin angin'],ans:1},
    {q:'Sel bahan bakar hidrogen (hydrogen fuel cell) menghasilkan listrik dari reaksi …',opts:['Pembakaran hidrogen','Elektrolisis air','Reaksi hidrogen dan oksigen menghasilkan air dan listrik','Fusi nuklir'],ans:2},
    {q:'Faktor kapasitas pembangkit listrik menyatakan …',opts:['Daya maksimum yang dapat dihasilkan','Rasio energi aktual dengan energi jika beroperasi penuh 100% waktu','Efisiensi konversi','Biaya per kWh'],ans:1},
    {q:'Energi pasang surut (tidal energy) memanfaatkan gaya tarik …',opts:['Matahari saja','Bulan dan matahari','Bumi','Gravitasi bumi'],ans:1},
    {q:'Mengapa pengembangan energi terbarukan penting bagi masa depan?',opts:['Hanya untuk mengurangi biaya','Untuk mengurangi ketergantungan bahan bakar fosil, menekan emisi gas rumah kaca, dan ketahanan energi','Karena pemerintah mewajibkan','Hanya untuk negara maju'],ans:1},
  ],
};

/* ─── Quiz Engine ─── */

function initQuiz(unitId, containerId) {
  const bank = QUIZ_BANKS[unitId];
  if (!bank) { console.warn('No quiz bank for', unitId); return; }
  const container = document.getElementById(containerId);
  if (!container) return;

  let questions = [], current = 0, score = 0, answered = false;

  function shuffle(arr) {
    const a = [...arr];
    for (let i = a.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  }

  function render(html) { container.innerHTML = html; }

  function showSetup() {
    render(`
      <div class="quiz-setup">
        <div class="quiz-icon">📝</div>
        <h3 class="quiz-title">Kuis Unit Ini</h3>
        <p class="quiz-desc">Uji pemahaman kamu dengan soal pilihan ganda acak. Pilih jumlah soal:</p>
        <div class="quiz-count-wrap">
          <input type="range" id="quiz-count" min="5" max="20" value="10" step="1" oninput="document.getElementById('quiz-count-val').textContent=this.value">
          <span class="quiz-count-badge"><span id="quiz-count-val">10</span> soal</span>
        </div>
        <button class="quiz-btn-start" onclick="window._quizStart_${unitId.replace(/-/g,'_')}()">Mulai Kuis ▶</button>
      </div>`);
  }

  window[`_quizStart_${unitId.replace(/-/g,'_')}`] = function() {
    const n = Math.min(20, Math.max(5, +document.getElementById('quiz-count').value));
    questions = shuffle(bank).slice(0, n).map(q => ({
      ...q,
      opts: q.opts.map((o, i) => ({ text: o, orig: i })),
    }));
    questions = questions.map(q => {
      const shuffledOpts = shuffle(q.opts);
      const newAns = shuffledOpts.findIndex(o => o.orig === q.ans);
      return { q: q.q, opts: shuffledOpts.map(o => o.text), ans: newAns };
    });
    current = 0; score = 0;
    showQuestion();
  };

  function showQuestion() {
    answered = false;
    const q = questions[current];
    const letters = ['A', 'B', 'C', 'D'];
    const optsHtml = q.opts.map((o, i) =>
      `<button class="quiz-opt" onclick="window._quizPick_${unitId.replace(/-/g,'_')}(${i})">`+
      `<span class="quiz-opt-letter">${letters[i]}</span><span class="quiz-opt-text">${o}</span></button>`
    ).join('');

    render(`
      <div class="quiz-q-wrap">
        <div class="quiz-progress">
          <div class="quiz-prog-bar"><div class="quiz-prog-fill" style="width:${(current/questions.length*100).toFixed(1)}%"></div></div>
          <span class="quiz-prog-label">Soal ${current+1} / ${questions.length}</span>
        </div>
        <div class="quiz-question">${q.q}</div>
        <div class="quiz-opts">${optsHtml}</div>
        <div id="quiz-feedback" class="quiz-feedback"></div>
      </div>`);
  }

  window[`_quizPick_${unitId.replace(/-/g,'_')}`] = function(idx) {
    if (answered) return;
    answered = true;
    const q = questions[current];
    const correct = idx === q.ans;
    if (correct) score++;
    const btns = container.querySelectorAll('.quiz-opt');
    btns.forEach((btn, i) => {
      btn.disabled = true;
      if (i === q.ans) btn.classList.add('quiz-opt-correct');
      else if (i === idx && !correct) btn.classList.add('quiz-opt-wrong');
    });
    const fb = document.getElementById('quiz-feedback');
    if (fb) fb.innerHTML = correct
      ? '<span class="quiz-fb-correct">✓ Benar!</span>'
      : `<span class="quiz-fb-wrong">✗ Salah. Jawaban yang benar: ${['A','B','C','D'][q.ans]}</span>`;

    setTimeout(() => {
      current++;
      if (current >= questions.length) showResult();
      else showQuestion();
    }, 1200);
  };

  function showResult() {
    const pct = Math.round(score / questions.length * 100);
    const grade = pct >= 90 ? '🌟 Luar Biasa!' : pct >= 75 ? '👍 Bagus!' : pct >= 60 ? '😊 Cukup Baik' : '📚 Perlu Belajar Lagi';
    const color = pct >= 75 ? 'var(--green,#4ab870)' : pct >= 60 ? 'var(--amber,#e0a830)' : 'var(--red,#e05050)';
    render(`
      <div class="quiz-result">
        <div class="quiz-result-icon">${grade}</div>
        <div class="quiz-result-score" style="color:${color}">${score} / ${questions.length}</div>
        <div class="quiz-result-pct" style="color:${color}">${pct}%</div>
        <div class="quiz-result-bar-wrap"><div class="quiz-result-bar" style="width:${pct}%;background:${color}"></div></div>
        <div class="quiz-result-msg">${pct>=75?'Kamu sudah memahami materi ini dengan baik.':'Coba pelajari kembali materi dan ulangi kuis ini.'}</div>
        <div class="quiz-result-actions">
          <button class="quiz-btn-start" onclick="window._quizStart_${unitId.replace(/-/g,'_')}()">Ulangi Kuis ↺</button>
          <button class="quiz-btn-outline" onclick="window._quizSetup_${unitId.replace(/-/g,'_')}()">Ubah Jumlah Soal</button>
        </div>
      </div>`);
  }

  window[`_quizSetup_${unitId.replace(/-/g,'_')}`] = showSetup;
  showSetup();
}

/* ─── Shared Quiz CSS ─── */
(function injectQuizCSS() {
  if (document.getElementById('quiz-style')) return;
  const s = document.createElement('style');
  s.id = 'quiz-style';
  s.textContent = `
.quiz-wrap{background:var(--bg2,#1a1d2e);border:1px solid var(--border,#2a2d3e);border-radius:12px;padding:24px;max-width:720px;margin:0 auto}
.quiz-setup{text-align:center;padding:20px 0}
.quiz-icon{font-size:42px;margin-bottom:10px}
.quiz-title{font-size:20px;font-weight:700;margin:0 0 8px;color:var(--text,#e0e4f0)}
.quiz-desc{font-size:13px;color:var(--text2,#8890b0);margin:0 0 24px}
.quiz-count-wrap{display:flex;align-items:center;justify-content:center;gap:14px;margin-bottom:24px}
.quiz-count-wrap input[type=range]{width:180px;accent-color:var(--accent,#5a88e0)}
.quiz-count-badge{font-size:15px;font-weight:700;color:var(--accent,#5a88e0);min-width:60px}
.quiz-btn-start{background:var(--accent,#5a88e0);color:#fff;border:none;padding:11px 28px;border-radius:8px;font-size:14px;font-weight:600;cursor:pointer;transition:.15s;font-family:inherit}
.quiz-btn-start:hover{opacity:.88}
.quiz-btn-outline{background:var(--bg,#11131f);color:var(--text,#e0e4f0);border:1px solid var(--border2,#3a3d50);padding:10px 20px;border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;margin-left:10px;font-family:inherit}
.quiz-btn-outline:hover{background:var(--bg3,#22253a)}
.quiz-q-wrap{display:flex;flex-direction:column;gap:14px}
.quiz-progress{display:flex;align-items:center;gap:12px}
.quiz-prog-bar{flex:1;height:6px;background:var(--bg3,#22253a);border-radius:3px;overflow:hidden}
.quiz-prog-fill{height:100%;background:var(--accent,#5a88e0);border-radius:3px;transition:width .3s}
.quiz-prog-label{font-size:12px;color:var(--text3,#6668a0);white-space:nowrap}
.quiz-question{font-size:15px;font-weight:500;color:var(--text,#e0e4f0);line-height:1.6;background:var(--bg3,#22253a);border-radius:8px;padding:16px}
.quiz-opts{display:flex;flex-direction:column;gap:8px}
.quiz-opt{display:flex;align-items:flex-start;gap:10px;padding:11px 14px;border-radius:8px;border:1px solid var(--border,#2a2d3e);background:var(--bg,#11131f);color:var(--text,#e0e4f0);cursor:pointer;text-align:left;font-size:13.5px;font-family:inherit;transition:.12s}
.quiz-opt:hover:not(:disabled){background:var(--bg3,#22253a);border-color:var(--accent,#5a88e0)}
.quiz-opt:disabled{cursor:default}
.quiz-opt-letter{background:var(--bg3,#22253a);color:var(--text2,#8890b0);border-radius:4px;padding:2px 7px;font-weight:700;font-size:12px;flex-shrink:0;margin-top:1px}
.quiz-opt-text{line-height:1.45}
.quiz-opt-correct{background:color-mix(in srgb,var(--green,#4ab870) 15%,transparent)!important;border-color:var(--green,#4ab870)!important}
.quiz-opt-correct .quiz-opt-letter{background:var(--green,#4ab870);color:#fff}
.quiz-opt-wrong{background:color-mix(in srgb,var(--red,#e05050) 15%,transparent)!important;border-color:var(--red,#e05050)!important}
.quiz-opt-wrong .quiz-opt-letter{background:var(--red,#e05050);color:#fff}
.quiz-feedback{min-height:20px;font-size:13px;font-weight:600}
.quiz-fb-correct{color:var(--green,#4ab870)}
.quiz-fb-wrong{color:var(--red,#e05050)}
.quiz-result{text-align:center;padding:16px 0}
.quiz-result-icon{font-size:38px;margin-bottom:8px}
.quiz-result-score{font-size:40px;font-weight:800;margin-bottom:2px}
.quiz-result-pct{font-size:20px;font-weight:600;margin-bottom:16px}
.quiz-result-bar-wrap{width:100%;max-width:300px;margin:0 auto 16px;height:10px;background:var(--bg3,#22253a);border-radius:5px;overflow:hidden}
.quiz-result-bar{height:100%;border-radius:5px;transition:width .5s}
.quiz-result-msg{font-size:13px;color:var(--text2,#8890b0);margin-bottom:20px}
.quiz-result-actions{display:flex;justify-content:center;flex-wrap:wrap;gap:8px}
`;
  document.head.appendChild(s);
})();
