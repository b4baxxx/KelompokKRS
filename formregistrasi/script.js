function verifyRegistration() {
  var nama = document.getElementById('nama').value;
  var nim = document.getElementById('nim').value;
  var prodi = document.getElementById('prodi').value;
  var email = document.getElementById('email').value;
  
  // Proses verifikasi data

  // Jika data sesuai, redirect ke halaman pengisian KRS
  window.location.href = "pengisian.html";
}