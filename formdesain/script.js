const MataKuliahData = {
    "SI101": {mataKuliah : "Dasar Pemograman", kelas : "A", sks : 3},
    "SI102": {mataKuliah : "Aplikasi Perkantoran", kelas : "B", sks : 2},
    "SI103": {mataKuliah : "Gudang Data", kelas : "C", sks : 2},
    "SI104": {mataKuliah : "Pengembangan Aplikasi Web II", kelas : "A", sks : 3},
    "SI105": {mataKuliah : "Sistem Basis Data", kelas : "C", sks : 4},
    "SI106": {mataKuliah : "Matematika Dasar", kelas : "A", sks : 4},
    "SI107": {mataKuliah : "Penelitian Sistem Informasi", kelas : "D", sks : 4},
    "SI108": {mataKuliah : "Pemograman Berbasis Objek 1", kelas : "B", sks : 3},
};

document.getElementById('kodeMataKuliah').addEventListener('input', function(){
    const kodeMataKuliah = this.value;
    const result = MataKuliahData[kodeMataKuliah];

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

document.getElementById('krsForm'),addEventListener('submit', function(e){
    e.preventDefault();

    const kodeMataKuliah = document.getElementById('kodeMataKuliah').value;
    const mataKuliah = document.getElementById('mataKuliah').value;
    const kelas = document.getElementById('kelas').value;
    const sks = document.getElementById('sks').value;

    if (kodeMataKuliah && mataKuliah && kelas && sks) {
        const tableBody = document.getElementById('krsTableBody');
        const newRow = tableBody.insertRow();

        newRow.insertCell(0).innerText = kodeMataKuliah;
        newRow.insertCell(1).innerText = mataKuliah;
        newRow.insertCell(2).innerText = kelas;
        newRow.insertCell(3).innerText = sks;

        // Simpan data ke localStorage
        const krsData = JSON.parse(localStorage.getItem('krsData')) || [];
        krsData.push({ kodeMataKuliah, mataKuliah, kelas, sks });
        localStorage.setItem('krsData', JSON.stringify(krsData));

        // Reset form fields
        document.getElementById('krsForm').reset();
        document.getElementById('mataKuliah').value = '';
        document.getElementById('kelas').value = '';
        document.getElementById('sks').value = '';
    }
});