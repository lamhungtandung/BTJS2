function tong2kiso() {
    var soThuc = document.getElementById("sothuc").value
    console.log(soThuc);
    var soDonVi = 0;
    var soHangChuc = 0;
    var soDu = soThuc % 10;
    soDonVi = soDu % 10;
    soHangChuc = Math.floor(soThuc/10);
    Tong = soDonVi + soHangChuc
console.log(Tong);
document.getElementById("txtResult6").innerHTML = Tong;
}