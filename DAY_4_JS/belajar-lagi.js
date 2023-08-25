console.log('----------------------------------------');
const coverBook = 'Purchasing';
console.log(coverBook);
console.log('----------------------------------------');

const dataBook = {
  title: 'Buku Purchasing Akuntansi',
  harga: 150000,
  disc: 10,
  tax: 25,
  author: 'Guntur',
  kondisi_buku: true,
};

// task day 3
function bookPurchasing(book,stock,amount) {
  const judul = book.title;
  const harga = book.harga;
  const disc = book.disc;
  const after_disc = book.harga - (book.harga * disc) / 100;
  const pajak = book.tax;
  const after_tax = after_disc + (after_disc * pajak) / 100;
  const cond_book = book.kondisi_buku;

  // update task day 4
  const stok_buku = stock;
  const jual_buku = amount;
  const total_jual = jual_buku * after_tax;

  // task day 3
  console.log('Judul: ' + judul);
  console.log('Harga: ' + harga);
  console.log('Disc: ' + disc + '%');
  console.log('Harga after disc: ' + after_disc);
  console.log('Tax: ' + pajak + '%');
  console.log('Harga after tax: ' + after_tax);
  console.log('Kondisi Buku: Bagus is ' + cond_book);

  // update task day 4
  console.log('----------------------------------------');
  console.log('Penjualan ' + book.title + ': ' + jual_buku);
  console.log('Stok buku purchasing: ' + stok_buku);
  console.log('----------------------------------------');

  let outStock= '';
  for (let loopStok = 0; loopStok <= stock; loopStok++) {
  
    if (loopStok == amount) {
      break;
    } else {
      outStock = "Out of Stock Cannot Buy This Book!";
    }
    console.log(loopStok);
  }

  console.log(outStock);
  console.log('----------------------------------------');

  console.log('Hasil total penjualan ' + book.title + ':');
  console.log(total_jual);
}

bookPurchasing(dataBook,2,2);
console.log('----------------------------------------');
