function verifyRegistration() {
  var verificationCode = document.getElementById('verification-code').value;
  
  // Proses verifikasi kode
  
  // Jika verifikasi berhasil, redirect ke halaman pengisian KRS
  window.location.href = "krs.html";
}