// apel
const jumlahApel = document.querySelector(".jumlah_apel");
const jumlaAnggur = document.querySelector(".jumlah_anggur");
const hasil = document.querySelector("#total");

const proses = document.querySelector('input[type="button"]');
proses.addEventListener("click", function () { //addEventListener dijalankan d=sesuai perintah seperti "click"
  anggur = jumlaAnggur.value * 20000;
  apel = jumlahApel.value * 23000;
  hasil.value = apel + anggur; //untuk menampilkan nilai di total
});
