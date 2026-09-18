// Data Structure extracted from "INSTRUMEN KAMPUS BERDAMPAK.docx"
const surveyData = [
    // DIMENSI 1
    {
        dimension: 1, title: "Kualifikasi dan Relevansi Mitra",
        questions: [
            { id: 1, indicator: "Reputasi Global Mitra", options: ["Tidak ada mitra global.", "Ada penjajakan/komunikasi.", "Ada MoU aktif dengan institusi/perusahaan multinasional.", "Ada IA dan implementasi riil dengan mitra global (Top QS/Multinasional)."] },
            { id: 2, indicator: "Reputasi Nasional Mitra", options: ["Tidak ada mitra nasional.", "Penjajakan/MoU pasif.", "Ada kegiatan insidental.", "Implementasi riil berkelanjutan dengan BUMN/Kementerian/Perusahaan Tbk."] },
            { id: 3, indicator: "Reputasi Lokal/Regional Mitra", options: ["Tidak ada.", "MoU pasif.", "Ada MoA untuk kegiatan spesifik.", "Program rutin terstruktur dengan Pemda/BUMD/UMKM Unggulan."] },
            { id: 4, indicator: "Kesesuaian Bidang (Link & Match)", options: ["< 25% profil mitra sesuai kompetensi lulusan.", "25-50% sesuai.", "51-75% sesuai.", "> 75% mitra sangat sesuai dengan profil lulusan Prodi."] },
            { id: 5, indicator: "Legalitas Badan Hukum Mitra", options: ["Mitra tidak memiliki badan hukum jelas.", "Sebagian kecil berbadan hukum resmi.", "Mayoritas berbadan hukum.", "100% mitra tercatat berbadan hukum resmi & kredibel."] },
            { id: 6, indicator: "Rekam Jejak Kemitraan Mitra", options: ["Tidak diketahui.", "Mitra baru pertama kali bekerja sama dengan Kampus.", "Mitra memiliki portofolio kerja sama pendidikan.", "Mitra memiliki program dedikatif khusus untuk pendidikan (Misal: CSR Kampus)."] },
            { id: 7, indicator: "Keberagaman Klaster Mitra", options: ["Hanya 1 klaster (Misal: Industri saja).", "2 klaster.", "3 klaster berbeda.", "Lengkap mewakili unsur Pentahelix (Industri, Pemerintah, NGO/Masyarakat, Media)."] }
        ]
    },
    // DIMENSI 2
    {
        dimension: 2, title: "Pembelajaran, Kurikulum & MBKM",
        questions: [
            { id: 8, indicator: "Keterlibatan perumusan Profil Lulusan", options: ["Tidak dilibatkan.", "Dilibatkan sebatas tracer study.", "Dilibatkan dalam FGD kurikulum insidental.", "Mitra menjadi dewan penasihat kurikulum tetap (Advisory Board)."] },
            { id: 9, indicator: "Perancangan CPL", options: ["Tidak ada.", "Mitra memberi masukan lisan.", "Mitra mengisi instrumen tertulis usulan CPL.", "Mitra dan dosen bersama-sama merumuskan CPL secara intensif."] },
            { id: 10, indicator: "Penyusunan RPS", options: ["RPS dibuat 100% oleh dosen.", "Mitra mereviu RPS di 1-2 Mata Kuliah (MK).", "Mitra mereviu di 3-5 MK.", "RPS pada >5 MK disusun dan disahkan bersama praktisi mitra."] },
            { id: 11, indicator: "Penyediaan Studi Kasus (PBL)", options: ["Menggunakan kasus fiktif/buku teks.", "Membahas kasus dari internet.", "Mitra memberikan data/studi kasus riil untuk 1-2 MK.", "Studi kasus riil dari mitra terintegrasi penuh pada banyak MK vokasional/inti."] },
            { id: 12, indicator: "Praktisi Mengajar di Kelas", options: ["Tidak ada praktisi mengajar.", "Hanya kuliah umum (1x pertemuan).", "Praktisi mengisi beberapa sesi kuliah (2-4 pertemuan).", "Praktisi mengajar penuh berbasis SK sebagai co-teaching resmi."] },
            { id: 13, indicator: "Durasi Mengajar (Min. 15 jam/smt)", options: ["0 praktisi memenuhi standar waktu.", "1-2 praktisi memenuhi.", "3-4 praktisi memenuhi.", "> 4 praktisi mengajar dengan durasi 15 jam atau lebih per semester."] },
            { id: 14, indicator: "Magang MBKM Terstruktur (20 SKS)", options: ["Tidak ada / magang konvensional 2 SKS.", "Magang > 2 bulan tapi konversi SKS < 20.", "Ada magang 20 SKS tapi kuota < 5% mahasiswa.", "Program MBKM 20 SKS berjalan rutin dengan kuota > 10% mahasiswa aktif."] },
            { id: 15, indicator: "Pembimbing Lapangan Mitra", options: ["Hanya didampingi dosen internal.", "Ada mentor mitra tanpa SK.", "Ada mentor mitra ber-SK dari Fakultas/Prodi.", "Mentor mendapat SK dan diberikan insentif/pelatihan dari Perguruan Tinggi."] },
            { id: 16, indicator: "Asesmen Kinerja Mahasiswa Magang", options: ["Nilai 100% dari dosen.", "Mitra memberi nilai huruf/angka gelondongan.", "Mitra menilai menggunakan rubrik yang disiapkan Prodi.", "Rubrik asesmen kinerja magang dirancang dan digunakan bersama mitra."] },
            { id: 17, indicator: "Sertifikasi Kompetensi Bersama", options: ["Tidak ada.", "Sekadar sosialisasi program sertifikasi industri.", "Mahasiswa ikut sertifikasi berbayar mandiri.", "Program sertifikasi difasilitasi, disubsidi, atau diuji langsung oleh pihak mitra."] },
            { id: 18, indicator: "Kunjungan Industri (Field Trip)", options: ["Tidak ada.", "Insidental (< 1 kali setahun).", "Rutin 1x setahun sebagai program himpunan/prodi.", "Kunjungan industri terintegrasi dengan capaian pembelajaran di mata kuliah wajib."] },
            { id: 19, indicator: "Mitra sebagai Penguji Tugas Akhir", options: ["Penguji 100% dosen internal.", "Pernah melibatkan praktisi insidental (non-formal).", "Praktisi menguji 1-5 mahasiswa secara formal.", "Praktisi rutin menguji mahasiswa (> 5) sebagai penguji resmi ber-SK."] }
        ]
    },
    // DIMENSI 3
    {
        dimension: 3, title: "Riset, Inovasi & Pengabdian Masyarakat",
        questions: [
            { id: 20, indicator: "Agenda Riset Bersama (Joint Research)", options: ["Tidak ada.", "Baru pada tahap proposal.", "Riset berjalan (dana mandiri dosen).", "Riset berjalan dan didanai/difasilitasi penuh oleh mitra (hibah industri)."] },
            { id: 21, indicator: "Akses Fasilitas & Data Mitra", options: ["Tertutup. Boleh observasi luar ruang saja.", "Akses terbatas untuk pengumpulan data riset/skripsi.", "Akses penuh ke lab/fasilitas produksi mitra untuk riset tingkat lanjut.", "Akses penuh dan bebas ke sistem mitra untuk riset berkelanjutan."] },
            { id: 22, indicator: "Posisi Mitra dalam Tim Riset", options: ["Tidak terlibat.", "Sebagai objek penelitian saja.", "Sebagai konsultan/narasumber pakar.", "Terdaftar resmi sebagai Anggota Peneliti (Co-researcher) di dokumen/SK riset."] },
            { id: 23, indicator: "PkM Berbasis Solusi Kebutuhan Mitra", options: ["PkM tidak menyasar ke mitra.", "PkM di lokasi mitra namun ide murni dari dosen.", "PkM menyesuaikan sedikit masalah mitra.", "PkM (Co-creation) lahir murni sebagai solusi atas permintaan resmi (pain points) mitra."] },
            { id: 24, indicator: "Pelibatan Mhs dalam Riset Kolaboratif", options: ["Tidak dilibatkan.", "Sebatas tenaga bantuan logistik lapangan.", "Terlibat pengolahan data.", "Terlibat penuh dan diakui sebagai payung Tugas Akhir (Skripsi) mahasiswa."] },
            { id: 25, indicator: "Pelibatan Mhs dalam PkM Mitra", options: ["Tidak terlibat.", "Mahasiswa sebagai peserta pasif sosialisasi.", "Mahasiswa sebagai panitia acara PkM.", "Mahasiswa bertindak sebagai fasilitator utama pemberdayaan masyarakat dan dikonversi ke SKS (KKN Tematik)."] },
            { id: 26, indicator: "Publikasi Ilmiah Bersama (Co-author)", options: ["Tidak ada publikasi dengan mitra.", "Status masih Draft / Submitted.", "Terbit di jurnal nasional / prosiding bersama praktisi.", "Terbit di jurnal internasional bereputasi / Sinta 1-2 bersama mitra."] },
            { id: 27, indicator: "Produk HKI / Paten Bersama", options: ["Tidak ada.", "Sedang dalam proses pengajuan.", "Menghasilkan Hak Cipta atas nama institusi dan mitra.", "Menghasilkan Paten / Paten Sederhana yang dipegang bersama."] },
            { id: 28, indicator: "Pembuatan Purwarupa (Prototype)", options: ["Hanya sebatas luaran artikel (tanpa produk fisik).", "Menghasilkan konsep/desain (blueprint).", "Menghasilkan purwarupa skala laboratorium.", "Menghasilkan purwarupa skala industri (siap uji operasional)."] },
            { id: 29, indicator: "Implementasi Hasil Riset/Inovasi", options: ["Berhenti sebagai dokumen laporan akademik.", "Disosialisasikan kepada mitra manajemen.", "Diuji coba dalam sistem internal mitra.", "Digunakan/diterapkan sepenuhnya untuk mengubah sistem bisnis/operasional mitra."] }
        ]
    },
    // DIMENSI 4
    {
        dimension: 4, title: "Dampak (Impact) Kemitraan",
        questions: [
            { id: 30, indicator: "Rekrutmen Lulusan oleh Mitra (< 6 bulan)", options: ["0% lulusan diserap langsung.", "< 5% lulusan direkrut langsung oleh mitra.", "5 - 10% direkrut mitra.", "> 10% total lulusan direkrut langsung oleh perusahaan/institusi mitra kerja sama."] },
            { id: 31, indicator: "Dampak Kemitraan pada Gaji Pertama", options: ["< 25% lulusan bergaji 1.2x UMR.", "25-50% lulusan bergaji 1.2x UMR.", "51-75% lulusan bergaji 1.2x UMR.", "> 75% lulusan (yang bekerja pada ekosistem mitra) bergaji minimal 1.2x UMR."] },
            { id: 32, indicator: "Rekrutmen Sebelum Wisuda (Pre-hired)", options: ["Tidak ada mahasiswa pre-hired.", "1-2 orang per angkatan langsung ditarik kerja.", "3-5 orang.", "> 5 mahasiswa diikat kontrak kerja oleh mitra bahkan sebelum resmi diwisuda."] },
            { id: 33, indicator: "Kepuasan Mitra terhadap Alumni", options: ["Tidak ada mekanisme survei kepuasan.", "Ada survei dengan hasil Cukup.", "Hasil survei Baik.", "Hasil survei menunjukkan Sangat Baik terukur secara sistematis dengan instrumen valid."] },
            { id: 34, indicator: "Kebermanfaatan Inovasi di Masyarakat", options: ["Tidak dirasakan masyarakat luar.", "Dirasakan terbatas di tingkat lokal (Desa/RT).", "Berdampak pada tingkat Kabupaten/Kota.", "Inovasi berdampak memecahkan masalah berskala Provinsi/Nasional."] },
            { id: 35, indicator: "Peningkatan Efisiensi Mitra", options: ["Tidak ada bukti/dampak terukur.", "Dampak sekadar persepsi/pengakuan lisan.", "Menghemat waktu/biaya operasional ringan (terukur).", "Signifikan menaikkan profit/produktivitas atau penghematan besar bagi kinerja mitra."] },
            { id: 36, indicator: "Testimoni & Pengakuan Publik", options: ["Tidak ada publikasi/pengakuan.", "Ada plakat/sertifikat apresiasi biasa.", "Keberhasilan kerja sama diliput media massa regional.", "Prodi mendapatkan Award bergengsi / diliput luas media berita nasional."] },
            { id: 37, indicator: "Inkubasi Bisnis Baru (Startup/Spin-off)", options: ["Tidak ada rencana bisnis.", "Baru sebatas proposal ide wirausaha.", "Menjalankan usaha (inkubasi) tapi belum berbadan hukum.", "Berhasil mendirikan startup/spin-off berbadan hukum bersama dukungan/investor mitra."] }
        ]
    },
    // DIMENSI 5
    {
        dimension: 5, title: "Tata Kelola, Pendanaan & Keberlanjutan",
        questions: [
            { id: 38, indicator: "Status MoU (Tingkat Univ/Fak)", options: ["Tidak ada.", "Ada tapi sudah kedaluwarsa.", "Sebagian MoU dengan mitra utama aktif.", "100% mitra strategis Prodi bernaung pada payung MoU yang masih aktif."] },
            { id: 39, indicator: "Status MoA/PKS (Tingkat Fak/Prodi)", options: ["Tidak ada MoA.", "Baru berupa draft belum tertandatangani.", "Ada MoA untuk program tertentu.", "MoA yang ada sangat komprehensif memuat hak/kewajiban rinci terkait Tridarma."] },
            { id: 40, indicator: "Dokumen Implementasi Riil (IA/SPK)", options: ["Tidak ada bukti kegiatan.", "Bukti berupa SPK/Surat Tugas insidental.", "Ada Implementation Arrangement (IA) per semester.", "IA terekam rapi tiap tahun, terlaporkan di LaporKerma Dikti/Sistem kampus."] },
            { id: 41, indicator: "PIC/Pengelola Kemitraan Prodi", options: ["Tidak ada pengelola.", "Diurus insidental oleh Kaprodi tanpa SK staf khusus.", "Ada dosen PIC Kemitraan ber-SK Fakultas/Prodi.", "Ada unit atau PIC dedikatif khusus dengan perhitungan Beban Kerja Dosen (BKD) yang diakui."] },
            { id: 42, indicator: "Pendanaan Tunai (Matching Fund/In-Cash)", options: ["0 (Nihil/Rp0).", "Kontribusi tunai dari mitra < Rp 25 Juta/tahun.", "Rp 25 - 50 Juta/tahun.", "Kontribusi tunai untuk riset/pendidikan Prodi > Rp 50 Juta per tahun."] },
            { id: 43, indicator: "Kontribusi Non-Tunai (In-Kind)", options: ["Tidak ada sama sekali.", "Pemberian suvenir/konsumsi acara.", "Peminjaman/lisensi software dan peminjaman alat berat selama program.", "Hibah/Donasi aset fisik berharga (Lab, Server, Mesin) yang dicatat resmi dalam inventaris kampus."] },
            { id: 44, indicator: "Pelaksanaan Monev Kemitraan", options: ["Tidak pernah dievaluasi.", "Monev sepihak (internal Prodi tanpa mitra).", "Ada Monev tahunan secara lisan/rapat santai dengan mitra.", "Monev rutin per semester secara formal menggunakan kuesioner dan indikator performa (KPI)."] },
            { id: 45, indicator: "Rencana Tindak Lanjut (Action Plan)", options: ["Tidak ada tindak lanjut.", "Dicatat sekadar pada notulensi rapat evaluasi.", "Ada dokumen Rencana Tindak Lanjut formal.", "Rencana dieksekusi menjadi perbaikan kurikulum/perluasan program kolaborasi riil di semester berikutnya."] }
        ]
    }
];

let currentStep = 0;
let answers = JSON.parse(sessionStorage.getItem('kampusBerdampakAnswers') || '{}');
let userIdentity = JSON.parse(sessionStorage.getItem('kampusBerdampakIdentity') || '{}');
const totalDimensions = surveyData.length;
let radarChart = null;
let welcomeMarkup = '';

function init() {
    welcomeMarkup = document.getElementById('app-content').innerHTML;
    bindWelcomeButton();
    restoreIdentityFields();
    document.getElementById('btn-prev').addEventListener('click', prevStep);
    document.getElementById('btn-next').addEventListener('click', nextStep);
    document.getElementById('btn-submit').addEventListener('click', submitSurvey);
}

init();

function bindWelcomeButton() {
    document.getElementById('btn-start')?.addEventListener('click', startSurvey);
}

function restoreIdentityFields() {
    document.getElementById('user-name').value = userIdentity.name || '';
    document.getElementById('user-study-program').value = userIdentity.studyProgram || '';
    document.getElementById('user-institution').value = userIdentity.institution || '';
}

function startSurvey() {
    const identity = {
        name: document.getElementById('user-name').value.trim(),
        studyProgram: document.getElementById('user-study-program').value.trim(),
        institution: document.getElementById('user-institution').value.trim()
    };

    if (!identity.name || !identity.studyProgram || !identity.institution) {
        document.getElementById('identity-error').classList.remove('hidden');
        return;
    }

    userIdentity = identity;
    sessionStorage.setItem('kampusBerdampakIdentity', JSON.stringify(userIdentity));
    document.getElementById('identity-error').classList.add('hidden');
    document.getElementById('progress-container').classList.remove('hidden');
    document.getElementById('bottom-nav').classList.remove('hidden');
    currentStep = 1;
    renderStep();
}

function showIdentityPage() {
    currentStep = 0;
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('bottom-nav').classList.add('hidden');
    document.getElementById('header-progress-text').innerText = 'Persiapan';
    document.getElementById('app-content').innerHTML = welcomeMarkup;
    restoreIdentityFields();
    bindWelcomeButton();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderStep() {
    const contentDiv = document.getElementById('app-content');
    contentDiv.innerHTML = '';
    contentDiv.classList.remove('fade-in');
    void contentDiv.offsetWidth;
    contentDiv.classList.add('fade-in');

    const dimData = surveyData[currentStep - 1];
    let html = `
        <div class="mb-8 border-b border-gray-100 pb-4">
            <span class="text-sm font-bold tracking-wider text-indigo-600 uppercase">Dimensi ${dimData.dimension}</span>
            <h2 class="text-2xl font-bold text-gray-800 mt-1">${dimData.title}</h2>
            <p class="text-sm text-gray-500 mt-2">Pilih salah satu kondisi (Skor 1-4) untuk setiap indikator di bawah ini.</p>
        </div>
        <div class="space-y-10">
    `;

    dimData.questions.forEach(q => {
        html += `
            <div class="bg-white border ${answers[q.id] ? 'border-indigo-100 bg-indigo-50/30' : 'border-gray-200'} rounded-xl p-5 shadow-sm" id="q-container-${q.id}">
                <div class="flex gap-3 mb-4">
                    <div class="bg-indigo-100 text-indigo-800 font-bold rounded-full w-8 h-8 flex items-center justify-center shrink-0">
                        ${q.id}
                    </div>
                    <h3 class="text-lg font-semibold text-gray-800 leading-tight pt-1">${q.indicator}</h3>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
        `;

        q.options.forEach((optText, optIndex) => {
            const score = optIndex + 1;
            const isSelected = answers[q.id] === score;
            const selectedClass = isSelected ? 'selected' : '';

            html += `
                    <div onclick="selectAnswer(${q.id}, ${score})"
                         class="option-card ${selectedClass} border border-gray-300 rounded-lg p-4 cursor-pointer flex flex-col h-full bg-white relative">
                        ${isSelected ? '<div class="absolute top-2 right-2 text-indigo-600"><i class="fa-solid fa-circle-check"></i></div>' : ''}
                        <span class="text-xs font-bold text-gray-400 mb-1">SKOR ${score}</span>
                        <p class="text-sm text-gray-700 flex-grow">${optText}</p>
                    </div>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    html += `</div>`;
    contentDiv.innerHTML = html;
    updateNavigation();
}

function selectAnswer(questionId, score) {
    answers[questionId] = score;
    sessionStorage.setItem('kampusBerdampakAnswers', JSON.stringify(answers));
    const container = document.getElementById(`q-container-${questionId}`);

    container.classList.add('border-indigo-100', 'bg-indigo-50/30');
    container.classList.remove('border-gray-200', 'border-red-300');

    const optionCards = container.querySelectorAll('.option-card');
    optionCards.forEach((card, index) => {
        const currentScore = index + 1;
        card.classList.remove('selected');
        const icon = card.querySelector('.fa-circle-check');
        if (icon) icon.parentElement.remove();

        if (currentScore === score) {
            card.classList.add('selected');
            card.innerHTML = `<div class="absolute top-2 right-2 text-indigo-600"><i class="fa-solid fa-circle-check"></i></div>` + card.innerHTML;
        }
    });

    checkDimensionCompletion();
}

function checkDimensionCompletion() {
    const currentQuestions = surveyData[currentStep - 1].questions;
    const unansweredQuestions = currentQuestions.filter(q => !answers[q.id]);

    currentQuestions.forEach(q => {
        const container = document.getElementById(`q-container-${q.id}`);
        if (!container) return;

        container.classList.toggle('border-red-300', !answers[q.id]);
        container.classList.toggle('border-indigo-100', Boolean(answers[q.id]));
        container.classList.toggle('bg-indigo-50/30', Boolean(answers[q.id]));
        container.classList.toggle('border-gray-200', Boolean(answers[q.id]));
    });

    return unansweredQuestions;
}

function validateCurrentDimension() {
    const unansweredQuestions = checkDimensionCompletion();
    if (unansweredQuestions.length === 0) return true;

    const questionNumbers = unansweredQuestions.map(q => q.id).join(', ');
    alert(`Mohon pilih jawaban untuk pertanyaan nomor ${questionNumbers} sebelum melanjutkan.`);
    document.getElementById(`q-container-${unansweredQuestions[0].id}`)?.scrollIntoView({
        behavior: 'smooth',
        block: 'center'
    });
    return false;
}

function updateNavigation() {
    const percentage = ((currentStep) / totalDimensions) * 100;
    document.getElementById('progress-bar').style.width = `${percentage}%`;
    document.getElementById('header-progress-text').innerText = `Langkah ${currentStep} dari ${totalDimensions}`;
    document.getElementById('step-indicator').innerText = `Dimensi ${currentStep} dari ${totalDimensions}`;

    const btnPrev = document.getElementById('btn-prev');
    const btnNext = document.getElementById('btn-next');
    const btnSubmit = document.getElementById('btn-submit');

    btnPrev.style.visibility = 'visible';
    btnPrev.innerHTML = currentStep === 1
        ? '<i class="fa-solid fa-chevron-left"></i> Kembali ke Identitas'
        : '<i class="fa-solid fa-chevron-left"></i> Kembali';

    if (currentStep === totalDimensions) {
        btnNext.classList.add('hidden');
        btnSubmit.classList.remove('hidden');
    } else {
        btnNext.classList.remove('hidden');
        btnSubmit.classList.add('hidden');
    }

    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function nextStep() {
    if (currentStep < totalDimensions && validateCurrentDimension()) {
        currentStep++;
        renderStep();
    }
}

function prevStep() {
    if (currentStep === 1) {
        showIdentityPage();
    } else if (currentStep > 1) {
        currentStep--;
        renderStep();
    }
}

function submitSurvey() {
    const totalQuestions = surveyData.reduce((acc, curr) => acc + curr.questions.length, 0);
    const answeredCount = Object.keys(answers).length;

    if (answeredCount < totalQuestions) {
        const firstIncompleteStep = surveyData.findIndex(dimData =>
            dimData.questions.some(q => !answers[q.id])
        ) + 1;

        if (currentStep !== firstIncompleteStep) {
            currentStep = firstIncompleteStep;
            renderStep();
        }

        validateCurrentDimension();
        return;
    }

    calculateAndShowResult();
}

function escapeHtml(value) {
    return String(value).replace(/[&<>'"]/g, character => ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
    })[character]);
}

// GANTI DENGAN URL DEPLOYMENT APPS SCRIPT ANDA
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzxHLQWPeBFo_Hw6tOjaPkbQb64MBzO9s1RCosp2TBMvTByhhsIKYn7iKQKOrds0zeMxA/exec";

function calculateAndShowResult() {
    document.getElementById('bottom-nav').classList.add('hidden');
    document.getElementById('progress-container').classList.add('hidden');
    document.getElementById('header-progress-text').innerText = "Hasil Evaluasi";

    let totalScore = 0;
    const dimensionScores = [0, 0, 0, 0, 0];
    const maxDimensionScores = surveyData.map(dim => dim.questions.length * 4);

    surveyData.forEach((dim, dimIndex) => {
        dim.questions.forEach(q => {
            const score = answers[q.id] || 0;
            totalScore += score;
            dimensionScores[dimIndex] += score;
        });
    });

    let predicate = "";
    let predicateColor = "";
    let predicateDesc = "";

    if (totalScore >= 147 && totalScore <= 180) {
        predicate = "Sangat Berdampak (High Impact)";
        predicateColor = "text-emerald-600 bg-emerald-100 border-emerald-200";
        predicateDesc = "Kemitraan terintegrasi penuh, hilirisasi tinggi, kelayakan benchmarking tingkat nasional/internasional.";
    } else if (totalScore >= 113 && totalScore <= 146) {
        predicate = "Berdampak (Impactful)";
        predicateColor = "text-blue-600 bg-blue-100 border-blue-200";
        predicateDesc = "Fokus kuat pada co-teaching & MBKM, butuh peningkatan strategis di area riset pendanaan mitra.";
    } else if (totalScore >= 79 && totalScore <= 112) {
        predicate = "Menuju Berdampak (Developing)";
        predicateColor = "text-amber-600 bg-amber-100 border-amber-200";
        predicateDesc = "Program kemitraan masih sporadis, belum masuk level kurikulum strategis secara menyeluruh, butuh konsolidasi intensif.";
    } else {
        predicate = "Belum Berdampak (Initiation)";
        predicateColor = "text-rose-600 bg-rose-100 border-rose-200";
        predicateDesc = "Kerja sama pasif, minim aktivitas tridarma riil. Sangat diperlukan perombakan tata kelola kemitraan dan inisiasi aktif.";
    }

    // Kirim data ke Google Spreadsheet
    sendDataToSpreadsheet({
        name: userIdentity.name,
        studyProgram: userIdentity.studyProgram,
        institution: userIdentity.institution,
        totalScore: totalScore,
        predicate: predicate,
        dim1Score: dimensionScores[0],
        dim2Score: dimensionScores[1],
        dim3Score: dimensionScores[2],
        dim4Score: dimensionScores[3],
        dim5Score: dimensionScores[4],
        answers: answers
    });

    const contentDiv = document.getElementById('app-content');
    contentDiv.classList.remove('fade-in');
    void contentDiv.offsetWidth;
    contentDiv.classList.add('fade-in');

    contentDiv.innerHTML = `
        <div id="sync-status" class="mb-4 text-center text-xs font-semibold py-2 px-4 rounded-lg bg-yellow-50 text-yellow-700 border border-yellow-200">
            <i class="fa-solid fa-spinner fa-spin mr-1"></i> Menyimpan hasil ke database...
        </div>
        <div class="text-center pb-8 border-b border-gray-100">
            <h2 class="text-3xl font-bold text-gray-800 mb-2">Hasil Evaluasi Kemitraan Prodi</h2>
            <p class="text-gray-500">Rekapitulasi dari 45 Indikator Pengukuran</p>
            <div class="mt-5 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left max-w-3xl mx-auto">
                <div class="rounded-lg bg-gray-50 border border-gray-200 px-4 py-3">
                    <div class="text-xs text-gray-500">Nama</div>
                    <div class="font-semibold text-gray-800">${escapeHtml(userIdentity.name)}</div>
                </div>
                <div class="rounded-lg bg-gray-50 border border-gray-200 px-4 py-3">
                    <div class="text-xs text-gray-500">Program Studi</div>
                    <div class="font-semibold text-gray-800">${escapeHtml(userIdentity.studyProgram)}</div>
                </div>
                <div class="rounded-lg bg-gray-50 border border-gray-200 px-4 py-3">
                    <div class="text-xs text-gray-500">Instansi PT</div>
                    <div class="font-semibold text-gray-800">${escapeHtml(userIdentity.institution)}</div>
                </div>
            </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
            <div class="flex flex-col items-center justify-center bg-gray-50 rounded-2xl p-8 border border-gray-200">
                <div class="text-sm font-bold text-gray-500 uppercase tracking-wider mb-2">Total Skor Anda</div>
                <div class="text-7xl font-black text-gray-800 mb-6">${totalScore}<span class="text-3xl text-gray-400 font-medium">/180</span></div>

                <div class="w-full border-t border-gray-200 pt-6">
                    <div class="text-sm font-medium text-gray-500 mb-3 text-center">Predikat Program Studi:</div>
                    <div class="text-center px-4 py-3 rounded-xl border-2 font-bold text-lg ${predicateColor}">
                        ${predicate}
                    </div>
                    <p class="text-sm text-gray-600 text-center mt-4 px-2 leading-relaxed">
                        ${predicateDesc}
                    </p>
                </div>
            </div>

            <div class="bg-white rounded-2xl p-4 border border-gray-200 flex flex-col items-center justify-center">
                <h3 class="font-bold text-gray-700 mb-2">Peta Kekuatan Dimensi</h3>
                <div class="w-full max-w-[300px] aspect-square relative">
                    <canvas id="resultChart"></canvas>
                </div>
                <p class="text-xs text-gray-400 mt-4 text-center">*Nilai disajikan dalam persentase (%) capaian maksimal per dimensi.</p>
            </div>
        </div>

        <div class="mt-10 flex justify-center gap-4">
            <button onclick="location.reload()" class="border-2 border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-semibold py-2 px-6 rounded-lg transition-colors">
                <i class="fa-solid fa-rotate-right mr-2"></i> Hitung Ulang
            </button>
            <button onclick="window.print()" class="bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-2 px-6 rounded-lg shadow-md transition-colors">
                <i class="fa-solid fa-print mr-2"></i> Cetak Laporan
            </button>
        </div>
    `;

    drawRadarChart(dimensionScores, maxDimensionScores);
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

function sendDataToSpreadsheet(payload) {
    if (!SCRIPT_URL || SCRIPT_URL.includes("AKfycbx...")) {
        console.warn("URL Google Apps Script belum dikonfigurasi.");
        const badge = document.getElementById('sync-status');
        if (badge) {
            badge.className = "mb-4 text-center text-xs font-semibold py-2 px-4 rounded-lg bg-gray-100 text-gray-600 border border-gray-200";
            badge.innerHTML = `<i class="fa-solid fa-circle-info mr-1"></i> Data lokal tersimpan (URL spreadsheet belum diisi).`;
        }
        return;
    }

    fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors', // Penting: menghindari blokade CORS Google Apps Script di browser
        headers: {
            'Content-Type': 'text/plain'
        },
        body: JSON.stringify(payload)
    }).then(() => {
        const badge = document.getElementById('sync-status');
        if (badge) {
            badge.className = "mb-4 text-center text-xs font-semibold py-2 px-4 rounded-lg bg-emerald-50 text-emerald-700 border border-emerald-200";
            badge.innerHTML = `<i class="fa-solid fa-check mr-1"></i> Respon berhasil disimpan ke Google Sheets!`;
        }
    }).catch(err => {
        console.error("Gagal kirim ke Google Sheets:", err);
        const badge = document.getElementById('sync-status');
        if (badge) {
            badge.className = "mb-4 text-center text-xs font-semibold py-2 px-4 rounded-lg bg-rose-50 text-rose-700 border border-rose-200";
            badge.innerHTML = `<i class="fa-solid fa-triangle-exclamation mr-1"></i> Gagal menyimpan ke Google Sheets. Cek koneksi Anda.`;
        }
    });
}

function drawRadarChart(scores, maxScores) {
    const percentages = scores.map((score, idx) => ((score / maxScores[idx]) * 100).toFixed(1));
    const ctx = document.getElementById('resultChart').getContext('2d');

    if (radarChart) radarChart.destroy();

    radarChart = new Chart(ctx, {
        type: 'radar',
        data: {
            labels: [
                ['Dim 1:', 'Kualifikasi & Relevansi'],
                ['Dim 2:', 'Pembelajaran & MBKM'],
                ['Dim 3:', 'Riset & PkM'],
                ['Dim 4:', 'Dampak (Impact)'],
                ['Dim 5:', 'Tata Kelola']
            ],
            datasets: [{
                label: 'Capaian Dimensi (%)',
                data: percentages,
                backgroundColor: 'rgba(99, 102, 241, 0.2)',
                borderColor: 'rgba(99, 102, 241, 1)',
                pointBackgroundColor: 'rgba(99, 102, 241, 1)',
                pointBorderColor: '#fff',
                pointHoverBackgroundColor: '#fff',
                pointHoverBorderColor: 'rgba(99, 102, 241, 1)',
                borderWidth: 2,
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                r: {
                    angleLines: { color: 'rgba(0, 0, 0, 0.1)' },
                    grid: { color: 'rgba(0, 0, 0, 0.1)' },
                    pointLabels: {
                        font: { family: "'Inter', sans-serif", size: 10, weight: '600' },
                        color: '#475569'
                    },
                    ticks: {
                        min: 0,
                        max: 100,
                        stepSize: 25,
                        display: false
                    }
                }
            },
            plugins: {
                legend: { display: false },
                tooltip: {
                    backgroundColor: 'rgba(15, 23, 42, 0.9)',
                    titleFont: { family: "'Inter', sans-serif", size: 13 },
                    bodyFont: { family: "'Inter', sans-serif", size: 14, weight: 'bold' },
                    callbacks: {
                        label: function(context) {
                            return `  Skor Anda: ${context.raw}%`;
                        }
                    }
                }
            }
        }
    });
}
