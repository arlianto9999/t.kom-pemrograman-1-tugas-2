var mahaSiswa = [true,false];
var ketertarikan = 0;

mahaSiswa.forEach((value)=>{
    if(value === true){
        ketertarikan++
    }
})

console.log(ketertarikan);
if(ketertarikan >=2){
    console.log("Teknik Komputer");
}
else{
    console.log("Pilih Prodi Lain");
}