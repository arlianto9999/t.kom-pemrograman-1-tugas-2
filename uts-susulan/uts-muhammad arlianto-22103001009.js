var mahasiswa = ["Matematika","Suka Bermain Game"];
var ketertarikan = 0;
mahasiswa.find((value)=>{
    if(value === "Matematika","Suka Bermain Game") {
        ketertarikan++
    } 
})
console.log(ketertarikan);
    if (ketertarikan>=2) {
        console.log('teknik komputer')
    }else {
        console.log('pilih prodi lain')
    }