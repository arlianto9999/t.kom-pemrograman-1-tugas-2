var mahasiswa = ["suka matematika", "suka bermain game"];
var ketertarikan = 0;

var kriteria1 = "suka matematika"
var kriteria2 = "suka bermain game"
console.log(`${kriteria1} ketertarikan di tambah 1 dan ${kriteria2} ketertarikan di tambah 1`);

mahasiswa.forEach(function (kriteria) {
    if (kriteria >= "suka bermain game") {
        ketertarikan++;
    }
    else if (kriteria >= "suka matematika") {
        ketertarikan++;
    }
})

console.log(ketertarikan);
if(ketertarikan >= 2) {
    console.log ("Teknik Komputer")
} else {
    console.log("Pilih Prodi Lain")
}