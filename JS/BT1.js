function tinhtienluong(){
    var luong1Ngay = document.getElementById("luong1ngay").value;
    var soNgayLam = document.getElementById("songaylam").value;
    console.log(luong1Ngay,soNgayLam);
    var tienLuong = Number(luong1Ngay) * Number(soNgayLam);
    console.log(tienLuong);
    document.getElementById("txtResult").innerHTML = tienLuong;
}

