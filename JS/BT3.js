function doitien() {
    var soDola = document.getElementById("dola").value;
    var GT1Dola = 23500;
    console.log(soDola,GT1Dola);
    var soTienQuiDoi = soDola * GT1Dola;
    console.log(soTienQuiDoi);

    document.getElementById("txtResult3").innerHTML = soTienQuiDoi;
    
}