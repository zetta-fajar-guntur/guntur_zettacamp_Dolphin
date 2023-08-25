const userName = 'Fajar Guntur';
let passWord = 123456;
let enteredEmail = 'balabala@gmail.com';
let yourAge = 24;

console.log('UserName  : ' + userName);
console.log('Password  : ' + passWord);
console.log('Email     : ' + enteredEmail);
console.log('Age       : ' + yourAge + 2);
console.log('Age       : ' + yourAge + 2);
console.log('Age       : ' + (yourAge + 2));

let theBook1 = 'Komik Boruto';
let theBook2 = 'Popular Magazine';
let result = theBook1 < theBook2;

console.log(result);

let theBook3 = 'Zootopia';
let theBook4 = 'Popular Magazine';
let result2 = theBook3 < theBook4;

console.log(result2);

let namaPanjang = ['aldi', 'asyrof', 'guntur', 'rezza', 'johan'];

for (let i = 0; i < 5; i++) {
  // console.log(i)
  console.log(namaPanjang[i]);
}

let myBuku = {
  theWriter: 'aldy',
  theSinger: 'rezza',
  thePengarang: 'asyrof',
  theProduksi: 'johan',
  theDesain: 'guntur',
};

console.log(myBuku.theSinger);

// try object

const zettaEsport = {
  tim: 'ZettaEsport',
  roamer: 'aldy',
  goldlane: 'rezza',
  jungler: 'asyrof',
  midlane: 'guntur',
  explane: 'aldy',
};

zettaEsport.roamer = 'johan';
zettaEsport.camat = 'dikha';

console.log(zettaEsport);
console.log(zettaEsport.explane);

// mathematic operation
// Addition (+)

console.log(2 + 2);
// Expected output: 4

// Subtraction (-)

console.log(5 - 2);
// Expected output: 3

// Multiplication  (*)

console.log(5 * 2);
// Expected output: 10

// Division (/)

console.log(12 / 2);
// Expected output: 6

// Division (/)

console.log(12 / 2);
// Expected output: 6

// Division (/)

console.log(5 % 2);
// Expected output: 1

console.log(4 % 2);
// Expected output: 0

// Exponentiation (**)

console.log(2 ** 4);
// Expected output: 16
