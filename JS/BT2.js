function giatriTB() {
    var soThuc1 = document.getElementById("sothuc1").value;
    var soThuc2 = document.getElementById("sothuc2").value;
    var soThuc3 = document.getElementById("sothuc3").value;
    var soThuc4 = document.getElementById("sothuc4").value;
    var soThuc5 = document.getElementById("sothuc5").value;
console.log(soThuc1,soThuc2,soThuc3,soThuc4,soThuc5);
var TB = (Number(soThuc1) + Number(soThuc2) + Number(soThuc3) + Number(soThuc4) + Number(soThuc5)) / 5;
console.log(TB);
document.getElementById("txtResult2").innerHTML = TB;
}