// Simulasi data mata kuliah
const matkulData = [
    { kode: "MK101", nama: "Matematika Dasar", sks: 3 },
    { kode: "MK102", nama: "Pemrograman Web", sks: 4 },
    { kode: "MK103", nama: "Basis Data", sks: 3 },
    // Tambahkan data mata kuliah lainnya
  ];
  
  // Load data mata kuliah ke dalam tabel
  function loadMatkulData() {
    const tableBody = document.querySelector("#matkul-table tbody");
    matkulData.forEach(matkul => {
      const row = tableBody.insertRow();
      const kodeCell = row.insertCell();
      const namaCell = row.insertCell();
      const sksCell = row.insertCell();
      const pilihCell = row.insertCell();
  
      kodeCell.textContent = matkul.kode;
      namaCell.textContent = matkul.nama;
      sksCell.textContent = matkul.sks;
  
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";
      checkbox.name = "matkul";
      checkbox.value = matkul.kode;
      pilihCell.appendChild(checkbox);
    });
  }
  
  // Fungsi untuk menyimpan data KRS (akan diimplementasikan di sini)
  function simpanKRS() {
    // Ambil data dari form
    const nim = document.getElementById("nim").value;
    const nama = document.getElementById("nama").value;
    const semester = document.getElementById("semester").value;
    const matkulTerpilih = [];
  
    // Ambil data mata kuliah yang dipilih
    const checkboxes = document.querySelectorAll("#matkul-table input[type='checkbox']:checked");
    checkboxes.forEach(checkbox => {
      matkulTerpilih.push(checkbox.value);
    });
  
    // Simpan data KRS (misalnya, ke database atau local storage)
    // ...
  
    // Tampilkan pesan konfirmasi
    alert("KRS berhasil disimpan!");
  }
  
  // Panggil fungsi loadMatkulData saat halaman dimuat
  window.onload = loadMatkulData;
  
  // Tambahkan event listener untuk tombol "Simpan KRS"
  const submitButton = document.getElementById("submit-button");
  submitButton.addEventListener("click", simpanKRS);