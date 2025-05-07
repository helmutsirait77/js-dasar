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
var penumpang = ['dani', undefined, 'sandi'];
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