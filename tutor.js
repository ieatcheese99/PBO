// function sapa (nama) {
//   console.log("Halo " + nama + "!"); 
// }

// sapa("Budi");
// sapa("agus");


// function tambah(a, b) {
//   return a + b;
// }

// let hasil = tambah(31, 51);
// console.log("Hasil penjumlahan: " + hasil); 


// let car = {
//   name: "Toyota",
//   warna: "Hitam",
//   tipe: "Sedan",  
//   model: 500,

//   start: function() {
//     console.log("Mobil mulai dinyalakan.");
//   },
//   drive: function() {
//     console.log("Mobil sedang dikemudikan.");
//   },
//   brake: function() {
//     console.log("Mobil mengerem.");
//   },
//   stop: function() {
//     console.log("Mobil berhenti.");
//   }
// };
// console.log("Nama mobil: " + car.name);
// car.start();

// class Sepeda {
//   constructor(merk, jumlahGigi, warna) {
//     this.merk = merk;
//     this.jumlahGigi = jumlahGigi;
//     this.warna = warna;
//   }

//   start() {
//     console.log("Sepeda " + this.merk + " mulai dikayuh.");
//   }

//   drive() {
//     console.log("Sepeda " + this.merk + " sedang dikendarai.");
//   }

//   brake() {
//     console.log("Sepeda " + this.merk + " mengerem.");
//   }

//   stop() {
//     console.log("Sepeda " + this.merk + " berhenti.");
//   }
// }

// // Membuat beberapa sepeda
// let sepedaA = new Sepeda("Wimcycle", 7, "Biru");
// let sepedaB = new Sepeda("Pacific", 10, "Hijau");

// // Penggunaan
// sepedaA.start();
// sepedaB.brake();

let sepeda = {
  merk: "wimcycle",
  jumlah_gigi: 7,
  warna_sepeda: "hitam",  


  start: function() {
    console.log("sepeda di goes.");
  },
  brake: function() {
    console.log("sepeda mengerem.");
  },
  stop: function() {
    console.log("sepeda berhenti.");
  }
};
console.log("Nama mobil: " + sepeda.merk);
sepeda.start();
