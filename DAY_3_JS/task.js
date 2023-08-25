console.log('----------------------------------------');
const coverBook = 'Purchasing';
console.log(coverBook);
console.log('----------------------------------------');

const dataBook = {
  title: 'Buku Purchasing',
  harga: 150000,
  disc: 10,
  tax: 25,
  author: 'Guntur',
  kondisi_buku: true
};

function bookPurchasing(book) {
  const judul = book.title;
  const harga = book.harga;
  const disc = book.disc;
  const after_disc = book.harga - (book.harga * disc) / 100;
  const pajak = book.tax;
  const after_tax = after_disc + (after_disc * pajak) / 100;
  const cond_book = book.kondisi_buku;

  console.log('Judul: ' + judul);
  console.log('Harga: ' + harga);
  console.log('Disc: ' + disc + '%');
  console.log('Harga after disc: ' + after_disc);
  console.log('Tax: ' + pajak + '%');
  console.log('Harga after tax: ' + after_tax);
  console.log('Kondisi Buku: Bagus is ' + cond_book);
}

bookPurchasing(dataBook);
console.log('----------------------------------------');
