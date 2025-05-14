// Membuat Object angkot

function Angkot(sopir, trayek, penumpang, kas) {
	 this.sopir = sopir;
	 this.trayek = trayek;
	 this.penumpang = penumpang;
	 this.kas = kas;
     this.penumpangNaik = function(namaPenumpang) {
     	  this.penumpang.push(namaPenumpang);
     	  return this.penumpang;
     }
     this.penumpangTurun = function(namaPenumpang, bayar) {
     	  if(this.penumpang.length === 0) {
     	  	 console.log("Angkot masih Kosong!");
     	  	 return false;
     	  } else {
     	  	   for( var i = 0; i < this.penumpang.length; i++ ) {
     	  	   	  if(this.penumpang[i] == namaPenumpang) {
     	  	   	  	 this.penumpang[i] = undefined;
     	  	   	  	 this.kas += bayar;
     	  	   	  	 return this.penumpang;
     	  	   	  }
     	  	   }
     	  }
     }
}

// intansiasi obeject 
var angkot1 = new Angkot('Dani', ['Medan', 'Amplas'], [], 0);
var angkot2 = new Angkot('Tom Cruise', ['Antapani', 'Ciroyom'], [], 0);