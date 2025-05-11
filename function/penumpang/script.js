// Tambah penumpang 
// var penumpang = [];
// var penumpang = ['dani', undefined, 'sandi'];
// var penumpang = ['dani', 'andi', 'sandi'];

// var tambahPenumpang = function (namaPenumpang, penumpang) {
       // test case 1 
       // penumpang.push(namaPenumpang);
       // return penumpang;

       // test case 2
       // for( var i = 0; i < penumpang.length; i++ ) {
       //         if( penumpang[i] == undefined ) {
       //                 penumpang[i] = namaPenumpang
       //         }
       // }

       // // test case 3
       //  for( var i = 0; i < penumpang.length; i++ ) {
       //         if( penumpang[i] == namaPenumpang ) {
       //               console.log(namaPenumpang +' sudah ada di dalam angkot');
       //         }
       // }
       // return penumpang;

// }   


// var penumpang = [];
// var penumpang = ['dani', undefined, 'sandi'];
// var penumpang = ['dani', undefined, 'sandi'];
var penumpang = [];

// console.log(penumpang.length);
var tambahPenumpang = function (namaPenumpang, penumpang) {
        // jika angkot kosong
        if( penumpang == 0  ) {
           // tambah penumpang di awal array
             penumpang.unshift(namaPenumpang) 
           // kembalikan isi array & keluar dari function 
             return penumpang;
          } // else
             else { 
          // telusuri seluruh kursi dari awal 
                for(var i = 0; i < penumpang.length; i++) { 
           // jika ada kursi kosong 
                   if( penumpang[i] == undefined ) {     
              // tambah penumpang di kursi tersebut
                  penumpang[i] = namaPenumpang; 
              // kembalikan isi array & keluar dari function
                  return penumpang;
              } // jika sudah ada nama yang sama 
                else if( penumpang[i] === namaPenumpang ) {
             // tampilkan pesan kesalahanya 
                 console.log(namaPenumpang +' sudah ada di dalam angkot');
             // kembalikan isi array & keluar dari function 
                 return penumpang;

                 // jika kursi terisi penuh  
              }else if(penumpang.length - 1 == i ) {
                      penumpang.push(namaPenumpang);
                      return penumpang;
              }
           }           
       }        
}

// hapus penumpang 
// 2 parameter 
  // - nama Penumpang
  // - array Penumpang 
// Rules 
  /*
      - jika angkot kosong, tampilkan pesan angkot kosong 
     - jika penumpang yang namanya sesuai, hapus nama penumpang pada array 
       dengan memberi nilai undefined 
     - jika tidak ada penumpang yang namanya sesuai, tampilkan pesan kesalahannya 
  */  

  var hapusPenumpang = function(namaPenumpang, penumpang) {
           if(penumpang.length == 0) {
               console.log('Angkot Masih Kosong');
               return penumpang;
           } else {
                 for(var i = 0; i < penumpang.length; i++) {
                      if(penumpang[i] == namaPenumpang) {
                           penumpang[i] = undefined;
                           return penumpang;
                      } else if( penumpang[i] !== namaPenumpang) {
                           console.log(namaPenumpang+' sudah ada di dalam angkot');
                           return penumpang;
                      }
                 }
           }
  } 


  /*
     - jika angkot kosong 
       - tampilkan pesan bahwa angkot kosong, dan 
         tidak mungkin ada penumpang yang turun 
       - kembalikan isi array & keluar dari function 
     - else 
        - telusuri kursi dari awal 
           - jika nama penumpang sesuai 
            - hapus penumpang dengan mengubah namanya menjadi undefined 
            - kembalikan isi array & keluar dari function 
          - jika tidak ada nama yang sesuai 
             - tampilkan pesan kesalahanya 
             - kembalikan isi array & keluar dari function        
  */ 