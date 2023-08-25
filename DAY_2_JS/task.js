let favoriteBook = 'Komik Boruto';
const myBook = 'Novel NKCTHI';

console.log('----------------------------------------');

favoriteBook = 'popular magazine';
console.log(favoriteBook);
console.log('----------------------------------------');

console.log(favoriteBook == myBook);
console.log('----------------------------------------');

let priceFavoriteBook = 75000;
let priceMyBook = 110000;
let averagePrice = (priceFavoriteBook + priceMyBook) / 2; // jumlah harga dibagi jumlah total

console.log(priceFavoriteBook > priceMyBook ? favoriteBook : myBook);
console.log('----------------------------------------');

console.log(averagePrice);
console.log('----------------------------------------');

console.log(averagePrice > 500000 ? 'Expensive' : averagePrice <= 500000 ? 'Cheap' : 'Expensive');
console.log('----------------------------------------');


