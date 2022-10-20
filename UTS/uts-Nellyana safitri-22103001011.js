const mahasiswa = [true,true];
let ketertarikan = 0;

mahasiswa.forEach((value)=>{
    if(value === true){
        ketertarikan++
    }
})

console.log(ketertarikan);
if(ketertarikan >=2){
    console.log("Teknik Komputer") 
} else {
    console.log("Pilih prodi Lain")
}
