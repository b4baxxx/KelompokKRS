const mataKuliah = {
    "SI101": { matakuliah : "Pemrograman Dasar", kelas : "A", sks : 3},
    "SI102": { matakuliah : "Algoritma", kelas : "B", sks : 4},
    "SI103": { matakuliah : "Matematika Diskrit", kelas : "A", sks : 4},
    "SI104": { matakuliah : "Aplikasi Perkantoran", kelas : "C", sks : 2},
    "SI105": { matakuliah : "Pengembangan Aplikasi Web II", kelas : "B", sks : 3},
    "SI106": { matakuliah : "Gudang Data", kelas : "C", sks : 2},
};

document.getElementById('kodeMataKuliah').addEventListener('input', function(){
    const kodeMataKuliah = this.value;
    const result = mataKuliah[kodeMataKuliah];
        if (result) {
            document.getElementById('mataKuliah').value = result.mataKuliah;
            document.getElementById('kelas').value = result.kelas;
            document.getElementById('sks').value = result.sks;
        } else {
            document.getElementById('mataKuliah').value = '';
            document.getElementById('kelas').value = '';
            document.getElementById('sks').value = '';
        }
});