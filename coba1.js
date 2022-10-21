// // function deaclaration
// function jumlahDuaBilangan(a, b) {
//   //keyword function, nama dan parameter
//   var total; // function body
//   total = a + b;

//   return total; // nilai kembalian
// }

// // function expression
// // var jumlahDuaBilangan = function (a, b) {
// //   var total;
// //   total = a + b;

// //   return total;
// // }

// // alert(jumlahDuaBilangan(1, 3));
// // alert(jumlahDuaBilangan(20, 30));
// // alert(jumlahDuaBilangan(1, 1));

// function kubus(a, b) {
//   return a * a * a + b * b * b;
// }
// alert(kubus(8, 3));

// // function tambah(a, b) {
// //   var total = a + b;
// //   return total;
// // }

// var a = parseInt(prompt("masukan nilai 1 : "));
// var b = parseInt(prompt("masukan nilai 2 :"));
// var hasil = tambah(a * 2, b * 2);
// console.log(hasil);

// function kali(a, b) {
//   return a * b;
// }

// var hasil = kali(tambah(1, 2), tambah(3, 4));
// console.log(hasil);

// function tambah() {
//   var hasil = 0;
//   for (var i = 0; i < arguments.length; i++) {
//     hasil += arguments[i];
//   }
//   return hasil;
// }
// var coba = tambah(1, 1, 1, 1, 10);
// console.log(coba);

// var a = 1; // global scope/ window scope
// function tes() {
//   var a = 2;
//   console.log(window.a);
// }

// tes();
// console.log(a);

// // rekursif
// function cetakAngka(n) {
//   if (n == 0) {
//     return;
//   }
//   console.log(n);
//   cetakAngka(n - 1);
// }
// // looping
// for (var i = 10; i >= 1; i--) {
//   console.log(i);
// }
// cetakAngka(10);

// function faktorial(n) {
//   if (n == 0) return 1;
//   return n * faktorial(n - 1);
// }
// // function declaration

// // function expression
// var tampilPesan = function (nama) {
//                   alerst("halo" + nama);}

//manipulasi array
// var arr = ["Elisabeth", "Tiara", "Dewanti"];
// console.log(arr.join(" - "));

// var arr = ["Elisabeth", "Tiara", "Dewanti"];
// // splice(indexAwal. mauDiHapusBerapa, elemenBaru1, elemenBaru2...)
// arr.splice(1, 2, "Sekar", "Lala");
// console.log(arr.join(" - "));

var arr = ["Elisabeth", "Tiara", "Dewanti", "Ara", "Lala"];
var arr2 = arr.slice(1, 3);
console.log(arr2.join(" - "));
console.log(arr.join(" - "));
