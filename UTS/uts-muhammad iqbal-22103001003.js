

// //1. Variabel yang diperlukan (5 Poin Nilai)
var mahasiswa = [];
var ketertarikan = Number;
//2. Nilai awal (5 Poin Nilai)
mahasiswa = [ "matematika","bermain games"];
ketertarikan = 0;
console.log(mahasiswa);
console.log(ketertarikan);

// 3. Kriteria Peminatan (5 Poin Nilai)
var suka = "matematika";
var suka = "bermain game";
//4. Kondisi (70 Poin Nilai)
if (suka = "matematika"){
    console.log("ketertarikan ditambah 1");
};
if (suka = "bermain games"){
    console.log("ketertarikan ditambah 1");
};
mahasiswa.forEach((poin) =>{
    if(poin = "matematika"){
        ketertarikan ++
    }
    else if(poin = "bermain games"){
        ketertarikan ++
    }
});
console.log(ketertarikan);
//5. Hasil Akhir dan Pengetesan(15 Poin Nilai)
if (ketertarikan >= 2){
    console.log("teknik komputer")
}
else{
    console.log ("pilih prodi lain")
};

 /* jika dihapus salah satu dari elemen mahasiswa
 maka output nya pilih prodi lain*/
 // contohnya

//1. Variabel yang diperlukan (5 Poin Nilai)
var mahasiswa = [];
var ketertarikan = Number;
//2. Nilai awal (5 Poin Nilai)
mahasiswa = ["matematika"];
ketertarikan = 0;
console.log(mahasiswa);
console.log(ketertarikan);
// 3. Kriteria Peminatan (5 Poin Nilai)
var suka = "matematika";
var suka = "bermain game";
//4. Kondisi (70 Poin Nilai)
if (suka = "matematika"){
    console.log("ketertarikan ditambah 1");
};
if (suka = "bermain games"){
    console.log("ketertarikan ditambah 1");
};

mahasiswa.forEach((poin) =>{
    if(poin = "matematika"){
        ketertarikan ++
    }
    else if(poin = "bermain games"){
        ketertarikan ++
    }
});
console.log(ketertarikan);
//5. Hasil Akhir dan Pengetesan(15 Poin Nilai)
if (ketertarikan >= 2){
    console.log("teknik komputer")
}
else{
    console.log ("pilih prodi lain")
};