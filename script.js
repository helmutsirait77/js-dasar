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
var item = prompt('masukkan nama makanan / minuman : \n (cth: nasi, daging, susu, hamburger, softdrink)');

switch ( item ) {
	  case 'nasi':
     case 'daging' :
     case 'susu' : 
        alert('makanan / minuman SEHAT');
        break;
      case 'hamburger' :
      case 'softdrink' :
        alert('makanan / minuman TIDAK SEHAT');
        break;       		
	   default:
		 alert('anda memasukkan nama makanan / minuman yang salah'); 
		break;
}

