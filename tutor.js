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

// let sepeda = {
//   merk: "wimcycle",
//   jumlah_gigi: 7,
//   warna_sepeda: "hitam",  


//   start: function() {
//     console.log("sepeda di goes.");
//   },
//   brake: function() {
//     console.log("sepeda mengerem.");
//   },
//   stop: function() {
//     console.log("sepeda berhenti.");
//   }
// };
// console.log("Nama mobil: " + sepeda.merk);
// sepeda.start();

// function Car(name, model, color, weight) {
//   this.name = name;
//   this.model = model;
//   this.color = color;
//   this.weight = weight;

//   this.start = function() {
//     console.log(`${this.name} mulai.`);
//   };

//   this.drive = function() {
//     console.log(`${this.name} jalan.`);
//   };
// }

// let mobil1 = new Car("Toyota", "Camry", "Merah", "2000kg");
// let mobil2 = new Car("Mio", "Camry", "Merah", "2000kg");

// mobil1.start();  // Output: Toyota dinyalakan.
// mobil2.drive();  // Output: Toyota sedang berjalan


// class car{
//   constructor(name, model, color, weight) {
//     this.name = name;
//     this.model = model;
//     this.color = color;
//     this.weight = weight;
//   }

//   start() {
//     console.log(`${this.name} mulai.`);
//   }
//   drive() {
//     console.log(`${this.name} jalan.`);
//   }
// }

// let mobil1 = new car("Toyota", "Camry", "Merah", "2000kg");
// let mobil2 = new car("Mio", "Camry", "Merah", "2000kg");

// mobil1.start();  // Output: Toyota dinyalakan.
// mobil2.drive();  // Output: Toyota sedang berjalan

// class Sepeda {
//   constructor(merk, jumlah_gigi, warna_sepeda) {
//     this.merk = merk;
//     this.jumlah_gigi = jumlah_gigi;
//     this.warna_sepeda = warna_sepeda;
//   }

//   start() {
//     console.log(`Sepeda ${this.merk} digoes.`);
//   }

//   brake() {
//    console.log(`Sepeda ${this.merk} mengrem.`);
//   }

//   stop() {
//     console.log(`Sepeda ${this.merk} berjenti.`);
//   }
// }

// // Membuat objek dari class
// let sepeda = new Sepeda("Aguscycle", 7, "Hitam");
// let sepeda2 = new Sepeda("bycicle", 10, "Hijau");

// sepeda.start();   // Output: Sepeda Wimcycle digoes.
// sepeda2.brake();  // Output: Sepeda mengerem.

  class Mahasiswa {
  constructor(nama, NIM, jurusan, tahun_angkatan) {
    this.nama = nama;
    this.NIM = NIM;
    this.jurusan = jurusan;
    this.tahun_angkatan = tahun_angkatan;
  }

  introduce() {
    console.log(`Halo, nama saya ${this.nama}, mahasiswa jurusan ${this.jurusan}, angkatan ${this.tahun_angkatan}.`);
  }

  issenior() {
    return this.tahun_angkatan < 2025;
  }
}


let mahasiswa1 = new Mahasiswa("Agus", 201921013, "Sastra Jawa", 2024); 
let mahasiswa2 = new Mahasiswa("Agussss", 202921013, "Teknik Mancing", 2026);


mahasiswa1.introduce();
mahasiswa2.introduce();    
console.log(mahasiswa1.issenior()); 
console.log(mahasiswa2.issenior()); 