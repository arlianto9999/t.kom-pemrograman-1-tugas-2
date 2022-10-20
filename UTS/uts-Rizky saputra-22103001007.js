let mahasiswa = [];
let ketertarikan = Number;
mahasiswa = ['suka matematika', 'suka bermain game'];
ketertarikan  = 0;
console.log(mahasiswa);
console.log(ketertarikan);

let kriteria1 = "suka matematika";
let kriteria2 = "suka bermain game";

function kriteria() {
    console.log(`${kriteria1} ketertarikan di tambah 1`)
    console.log(`${kriteria2} ketertarikan di tambah 1`)
}

kriteria()

mahasiswa.forEach((value)=> {
        if(value === 'suka matematika'){
            ketertarikan++
        }
       else if(value === 'suka bermain game'){
            ketertarikan++
        }
    })
    
    console.log(ketertarikan);
    if(ketertarikan >= 2){
        console.log("teknik komputer");
    }
    else{
        console.log("pilih prodi lain");
    }
