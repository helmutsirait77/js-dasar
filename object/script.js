// membuat object 
// var mhs = {
// 	nama: 'Dani',
//     umur: 31,
//     ips: [3.00, 2.50, 3.20],
//     alamat: {
//     	 jalan: 'Jln, abc No. 123',
//     	 kota: 'Medan',
//     	 provinsi: 'Sumatera Utara'
//     }
// };

// Object Literal 
// var mhs1 = {
//     nama : 'Dani',
//     nrp : '3232323232',
//     email : 'dani@gmail.com',
//     jurusan : 'Teknik Informatika'
// };

// var mhs2 = {
//     nama : 'Doddy',
//     nrp : '4545455',
//     email : 'doddy@gmail.com',
//     jurusan : 'Sistem Informasi'
// };

// function buatObjectMahasiswa(nama, nrp, email, jurusan) {
//      var mhs = {};
//      mhs.nama = nama;
//      mhs.nrp = nrp;
//      mhs.email = email;
//      mhs.jurusan = jurusan;

//      return mhs; 
// }

// var mhs3 = buatObjectMahasiswa('Ria', '22323', 'ria@gmail.com', 'Teknologi Informasi');
// var mhs4 = buatObjectMahasiswa();

// // Constructor 
// // function yang khusus membuat object 
// function Mahasiswa(nama, nrp, email, jurusan) {
//      // var this = {};
//      this.nama = nama;
//      this.nrp = nrp;
//      this.email = email;
//      this.jurusan = jurusan;
//      // return this;
// }

// var mhs4 = new Mahasiswa('erik', '232302302', 'erik@gmail.com', 'Teknik Informatika');

// function declaration 
// this pada function declaration context mengembalikan object global 
// function halo() {
//      console.log(this);
//      console.log('halo');
// }
// this.halo();
// this mengembalikan object global 

// Object literal 
// var obj = {a: 10, nama : 'dani' };
// obj.halo = function() {
//     console.log(this);
//     console.log('halo')
// }

// obj.halo();
// this mengembalikan object yang bersangkutan 

// consturctor Function 
// function Halo() {
//       console.log(this);
//       console.log('halo');
// }

// var obj1 = new Halo();
// var obj2 = new Halo();
// this mengembaliaka object yang baru dibuat 


// this 
// this adalah keyword special yang secara otomatis didefiniskan pada setiap function 

// var a = 10; 
// console.log(window.a);

