// var nama = prompt('masukkan nama');
// alert(nama);

// var test = confirm('Kamu Yakin??');
// if( test === true ) {
//    alert('User Menekan tombol ok');
// } else {
// 	 alert('User menekan tombol cancel');
// }

// alert('Selamat lagi');
// var lagi = true;

// while( lagi ) {
//      var nama = prompt('Masukkan Nama');
//      alert('halo '+ nama);

//      lagi = confirm('coba lagi?');
// }
// alert('Terima kasih');
// var ulang = true;
// while( ulang ) {
//       console.log('Hello World');
//       ulang = confirm('lagi?');
// }

// var nilaiAwal = 1;
// while( nilaiAwal <= 10 ) {
//       console.log('Hello World '+ nilaiAwal +'x');
//     nilaiAwal++;  
// }

// for
// for( var nilaiAwal = 1; nilaiAwal <= 10; nilaiAwal++ ) {
// 	 console.log('Hello World '+ nilaiAwal +' x');
// }

// var angka = prompt('Masukkan angka');
// if( angka % 2 == 0 ) {
// 	alert(angka + ' adalah bilangan genap' );
// } else if( angka % 2 == 1 ){
// 	alert(angka + ' adalah bilangan ganjil' );	 
// } else {
// 	 alert('yang anda masukkan bukan angka');
// }

// switch 
// var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

// switch ( item ) {
// 	  case 'nasi':
//      case 'daging' :
//      case 'susu' : 
//         alert('makanan / minuman SEHAT');
//         break;
//       case 'hamburger' :
//       case 'softdrink' :
//         alert('makanan / minuman TIDAK SEHAT');
//         break;       		
// 	   default:
// 		 alert('anda memasukkan nama makanan / minuman yang salah'); 
// 		break;
// }

// console.log('*****');

// **********
// **********
// **********
// **********
// **********
// **********
// **********
// var s = '';
// for( var i = 0; i < 7; i++ ) {
//      for( var j = 0; j < 10; j++ ) {
//          s += '*';  
//      }
//     s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// var s = '';
// for( var i = 0; i < 15; i++ ) {
//      for( var j = 0; j <= i; j++ ) {
//          s += '*';  
//      }
//     s += '\n';
// }
// console.log(s);

// *****
// ****
// ***
// **
// *
// var s = '';
// for( var i = 5; i > 0; i-- ) {
//      for( var j = 0; j < i; j++ ) {
//          s += '*';  
//      }
//     s += '\n';
// }
// console.log(s);

// *****
//  ****
//   ***
//    **
//     *
// var s = '';
// for( var i = 0; i < 5; i++ ) {
//      for( var j = 0; j <= i; j++ ) {
//          s += ' ';  
//      } 
//      for( var j = 5; j > i; j-- ) {
//          s += '*';  
//      }
//     s += '\n';
// }
// console.log(s);

// *
// **
// ***
// ****
// *****
// ****
// ***
// **
// *

// var s = '';
// for( var i = 0; i <= 12; i++ ) {
//    if(i === 6 || i < 6) {
//         for( var j = 0; j <= i; j++ ){
//                   s += '*';
//         }
//    } 
//    else {
//          for( var l = i - 2; l < 11; l++ ) {
//                s += '*';
//          }
//    }
//   s += '\n';
// }

// console.log(s);

// document.write("Yes! I am now a JavaSript coder"); // writes out my opini
// document.write("Hello\on \Word");

// function hitung() {
// 	  console.log(arguments);
// }

// hitung(1, 3, 4, 5);

// document.write('<a href=\"https://goggle.com\">www.goggle.com</a>');
// var chipscost = 2.59;
// var istrue = false;
// var nada = null;
// document.write('Jhon said, \" This project is fun \"');


// var mycar = "Corvette";
// document.write("I like driving my "+ mycar);
// var headingtext = '<span style=\" color:red \">I am so colorful today!</span>';

// var linktag = "<a href=\"https://goggle.com\">Link to a site</a>"
// document.writeln(linktag);

// var myintro = "Hello, welcome to my javascript page!"
// var begineffect = "<em>";
// var endeffect = "</em>";
// var beginpara = "<p>";
// var endpara = "</p>";

// document.write(headingtext);
// document.write("<br>");
// document.write(begineffect + myintro + endeffect );
// document.write("<p>Hello World</p>")


var myheading = "This is My Web Page";
var linktag = "<a href=\"https:// googgle.com\">Web Site link</a>";
var sometext = "This text can be affected by other statements"
var begineffect = "<strong>";
var endeffect = "</strong>";
var newsection = "<br />";

document.write(myheading);
document.write(newsection);
document.write(begineffect);
document.write(sometext);
document.write(endeffect);
document.write(newsection);
document.write(linktag);
document.write(newsection);
document.write(sometext);

