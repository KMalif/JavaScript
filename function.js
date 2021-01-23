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

function deretGanjilGenap (angka){
    for (i = 1; i <= angka; i++){
       
        if (i % 2 ==0){
            console.log(i + " adalah Genap");
        }else{
            console.log(i + " adalah ganjil");
        }
    }
}

deretGanjilGenap(10);