// menangkap pilihan player
var ulang2 = true;
while( ulang2 ){ 
alert('Tebak angka dari 1 - 10\nKamu punya 3 kesempatan');
var ulang = 3;
while( ulang > 0 ) {
	var angkaTebakan = Number(prompt('Masukkan angka tebakan'));
	// generate angka 1 - 10
	var comp = Math.floor(Math.random() * 11);
	var hasil = '';
	if( angkaTebakan === comp ) {
		  hasil = 'anda berhasil,  angka yang dicari ' + comp;
		  alert(hasil);
	} else if( angkaTebakan > comp ) { 
		  var ulang1 = ulang - 1;
		  // hasil = 'terlalu TINGGI!, ayo main masih ada ' +ulang1;
		  hasil = (ulang1 === 0) ? 'Kesempatan anda habis\nangka yang dicari adalah '+comp : 'terlalu TINGGI!, ayo main masih ada ' + ulang1 +' Kesempatan';       
		  alert(hasil);
	} else if( angkaTebakan < comp ) {
		   var ulang1 = ulang - 1;
		   // hasil = 'terlalu  RENDAH!,  ayo main masih ada ' +ulang1;
		   hasil = (ulang1 === 0) ? 'Kesempatan anda habis\nangka yang dicari adalah '+comp : 'terlalu RENDAH!, ayo main masih ada ' + ulang1+' Kesempatan';  
		   alert(hasil);
	} else {
		    var ulang2 = ulang - 1;
		   hasil = 'yang anda masukan harus angka bukan huruf\n ayp main masih ada ' + ulang2 +' Kesempatan';
		   alert(hasil);
	}
ulang--;	
}

ulang2 = confirm('ulang main ?');
}
alert('Terima kasih telah bermain!');