// let mahasiswa = [false, true];
// let ketertarikan = 0;

// mahasiswa.forEach (function (value){
//     if (value === false) 
//     {
//         ketertarikan++;
//     }
//     mahasiswa.forEach (function (value){
//         if (value === true) {
//             ketertarikan++;
// }
// console.log(ketertarikan);

// if(ketertarikan >= 2) {
//     console.log("Teknik Komputer")
// } 
// else {
//     console.log("Pilih Prodi Lain")
// }


let mahasiswa = [0, 1];
let ketertarikan = 0;

mahasiswa.forEach (function (nilai) {
    if (nilai === 1) {
        ketertarikan++;
    }
})
mahasiswa.forEach (function (nilai) {
    if (nilai === 0) {
        ketertarikan++;
    }
})

console.log(ketertarikan);
if(ketertarikan >= 2) {
    console.log("Teknik Komputer")
} else {
    console.log("Pilih Prodi Lain")
}