// function deaclaration
function jumlahDuaBilangan(a, b) {
  //keyword function, nama dan parameter
  var total; // function body
  total = a + b;

  return total; // nilai kembalian
}

// function expression
// var jumlahDuaBilangan = function (a, b) {
//   var total;
//   total = a + b;

//   return total;
// }

// alert(jumlahDuaBilangan(1, 3));
// alert(jumlahDuaBilangan(20, 30));
// alert(jumlahDuaBilangan(1, 1));

function kubus(a, b) {
  return a * a * a + b * b * b;
}
alert(kubus(8, 3));

// function tambah(a, b) {
//   var total = a + b;
//   return total;
// }

var a = parseInt(prompt("masukan nilai 1 : "));
var b = parseInt(prompt("masukan nilai 2 :"));
var hasil = tambah(a * 2, b * 2);
console.log(hasil);

function kali(a, b) {
  return a * b;
}

var hasil = kali(tambah(1, 2), tambah(3, 4));
console.log(hasil);

function tambah() {
  var hasil = 0;
  for (var i = 0; i < arguments.length; i++) {
    hasil += arguments[i];
  }
  return hasil;
}
var coba = tambah(1, 1, 1, 1, 10);
console.log(coba);

var a = 1; // global scope/ window scope
function tes() {
  var a = 2;
  console.log(window.a);
}

tes();
console.log(a);
