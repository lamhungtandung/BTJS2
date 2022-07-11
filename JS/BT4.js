function DTCV() {
    var chieuDai = document.getElementById("chieudai").value;
    var chieuRong = document.getElementById("chieurong").value;
    console.log(chieuDai,chieuRong);

    var dienTich = chieuDai * chieuRong;
    var chuVi = (Number(chieuDai) + Number(chieuRong)) * 2;
    console.log(dienTich,chuVi);
    
    document.getElementById("txtResult4").innerHTML = dienTich;
    document.getElementById("txtResult5").innerHTML = chuVi;
}