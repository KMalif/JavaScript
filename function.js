function coba(){
    console.log("Function biasa");
}

coba();

let coba1 = function(){
    console.log("Function ekspresi");
}

coba1();

let ganjilGenap = (angka) =>{
    if (angka % 2 ==0){
        console.log("Angka genap");
    }else{
        console.log("Angka ganjil");
    }
}

ganjilGenap(10);