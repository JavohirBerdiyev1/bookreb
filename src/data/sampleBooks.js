// src/data/sampleBooks.js
export const sampleBooks = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    cover: "https://play-lh.googleusercontent.com/_GQD8w1f_N0245EV9IzRvxf1gCMr-cRYGNQNhJJriUyJcAga8yFEw8nABrc4Q_alHA",
    language: "uzbek",
    genre: "classic",
    pdfUrl: "/pdfs/utgan_kunlar_ziyouz_com.pdf",
    description:
      "O'zbek adabiyotining eng mashhur asarlaridan biri, tarixiy roman.",
  },
  {
    id: 2,
    title: "Mehrobdan chayon",
    author: "Abdulla Qodiriy",
    cover: "https://hilolnashr.uz/image/cache/catalog/badiiy_adabiyot/mehrobdan-chayon-web-500x750.jpg",
    language: "uzbek",
    pdfUrl: "https://zakm.uz/media/books/Abdulla_Qodiriy._Mehrobdan_chayon.pdf",
    genre: "classic",
    description: "Tarixiy roman, o'zbek adabiyotining durdonasi.",
  },
  {
    id: 3,
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    cover: "https://cdn.britannica.com/21/182021-050-666DB6B1/book-cover-To-Kill-a-Mockingbird-many-1961.jpg",
    language: "english",
    pdfUrl: "https://www.raio.org/TKMFullText.pdf",
    genre: "classic",
    description:
      "A novel about racial injustice and moral growth in the American South.",
  },
  {
    id: 4,
    title: "1984",
    author: "George Orwell",
    cover: "https://olcha.uz/image/700x700/products/2020-04-06/zhorzh-oruell-1984-13120-0.jpeg",
    language: "english",
    genre: "dystopian",
    pdfUrl: "https://lib.jdpu.uz/storage/uploads/files/1984%20%D0%96%D0%BE%D1%80%D0%B6%20%D0%9E%D1%80%D1%83%D1%8D%D0%BB%D0%BB.pdf",
    description:
      "A dystopian novel about totalitarianism and mass surveillance.",
  },
  {
    id: 5,
    title: "Kecha va kunduz",
    author: "Cho'lpon",
    cover: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ_x0e2RXsitrLAYNSvPJi89kfTirSVW26ONg&s",
    language: "uzbek",
    pdfUrl: "http://rasul.template.uz/sites/default/files/cholpon-kecha-va-kunduz.pdf",
    genre: "classic",
    description: "O'zbek adabiyotining muhim asarlaridan biri.",
  },
  {
    id: 6,
    title: "Pride and Prejudice",
    author: "Jane Austen",
    cover: "https://cdn.kobo.com/book-images/08ba5a67-f48d-420e-be8e-6de7a73b7d85/1200/1200/False/pride-prejudice-13.jpg",
    language: "english",
    pdfUrl: "https://giove.isti.cnr.it/demo/eread/Libri/joy/Pride.pdf",
    genre: "romance",
    description: "A romantic novel about the importance of marrying for love.",
  },
  {
    id: 7,
    title: "Sariq devni minib",
    author: "Xudoyberdi To'xtaboyev",
    cover: "https://kitobxon.com/img_knigi/1546.jpg",
    pdfUrl: "https://namdu.uz/media/Books/pdf/2024/07/28/NamDU-ARM-11915-Sariq_devni_minib.pdf",
    language: "uzbek",
    genre: "children",
    description: "Bolalar uchun sarguzasht asar.",
  },
  {
    id: 8,
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    cover: "https://www.usatoday.com/gcdn/media/USATODAY/USATODAY/2013/05/07/gatsby-mti-jacket-1_1.jpg",
    language: "english",
    pdfUrl: "https://www.planetebook.com/free-ebooks/the-great-gatsby.pdf",
    genre: "classic",
    description:
      "A novel about the American Dream and class during the Roaring Twenties.",
  },
];

// src/utils/bookUtils.js
export const getRecommendations = (book, allBooks) => {
  if (!book) return [];

  // Bir xil janr va til bo'yicha tavsiyalar
  return allBooks.filter(
    (b) =>
      b.id !== book.id &&
      (b.genre === book.genre ||
        b.author === book.author ||
        b.language === book.language)
  );
};