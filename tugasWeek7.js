
let bulan =()=>{
    var month = ['January', 'February', 'March', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'];

    for (i = 0; i<month.length;i++){
        if (i%2==0){
            console.log(month[i]);
        }
    }

}


let monthName = ()=>{
    var namaBulan = ['January', 'February', 'March', 'April', 'Mei', 'June', 'July', 'Agustus', 'September', 'October', 'November', 'Desember'];

  namaBulan.forEach(element => console.log(element));

}


bulan();
monthName();