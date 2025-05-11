import { useState, useEffect } from "react";

// Sample book data - bu API dan olinadigan ma'lumotlar o'rniga
const sampleBooks = [
  {
    id: 1,
    title: "O'tkan kunlar",
    author: "Abdulla Qodiriy",
    cover: "https://play-lh.googleusercontent.com/_GQD8w1f_N0245EV9IzRvxf1gCMr-cRYGNQNhJJriUyJcAga8yFEw8nABrc4Q_alHA",
    language: "uzbek",
    genre: "classic",
    pdfUrl: "/pdfs/utgan_kunlar_ziyouz_com.pdf",
    //
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

// Kitob tavsiyalari algoritmasi - oddiy versiya
const getRecommendations = (book, allBooks) => {
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

export default function BookRecommendationApp() {
  const [books, setBooks] = useState(sampleBooks);
  const [selectedBook, setSelectedBook] = useState(null);
  const [recommendations, setRecommendations] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filterLanguage, setFilterLanguage] = useState("all");

  // Kitob tanlanganda tavsiyalarni yangilash
  useEffect(() => {
    if (selectedBook) {
      const recs = getRecommendations(selectedBook, books);
      setRecommendations(recs);
    } else {
      setRecommendations([]);
    }
  }, [selectedBook, books]);

  // Filtrlash funksiyasi
  const filteredBooks = books.filter((book) => {
    const matchesSearch =
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLanguage =
      filterLanguage === "all" || book.language === filterLanguage;

    return matchesSearch && matchesLanguage;
  });

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <h1 className="text-2xl font-bold mb-4 md:mb-0">Kitob Tavsiyalari</h1>
          <div className="w-full md:w-1/2">
            <input
              type="text"
              placeholder="Kitob yoki muallif qidirish..."
              className="w-full p-2 rounded text-gray-800"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="container mx-auto p-4">
        <div className="mb-6 flex flex-wrap items-center gap-4">
          <h2 className="text-xl font-semibold">Tilni tanlang:</h2>
          <div className="flex gap-2">
            <button
              className={`px-4 py-2 rounded ${
                filterLanguage === "all"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilterLanguage("all")}
            >
              Barcha
            </button>
            <button
              className={`px-4 py-2 rounded ${
                filterLanguage === "uzbek"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilterLanguage("uzbek")}
            >
              O'zbekcha
            </button>
            <button
              className={`px-4 py-2 rounded ${
                filterLanguage === "english"
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200"
              }`}
              onClick={() => setFilterLanguage("english")}
            >
              Inglizcha
            </button>
          </div>
        </div>

        {selectedBook ? (
          <div className="mb-8">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-2xl font-bold">Tanlangan kitob</h2>
              <button
                className="px-4 py-2 bg-gray-200 rounded"
                onClick={() => setSelectedBook(null)}
              >
                Orqaga
              </button>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
              <img
                src={selectedBook.cover}
                alt={selectedBook.title}
                className="w-48 h-64 object-cover rounded"
              />
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  {selectedBook.title}
                </h3>
                <p className="text-lg mb-2">{selectedBook.author}</p>
                <p className="mb-4">{selectedBook.description}</p>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
                    {selectedBook.genre}
                  </span>
                  <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                    {selectedBook.language === "uzbek"
                      ? "O'zbekcha"
                      : "Inglizcha"}
                  </span>
                </div>
                
              </div>
              
            </div>
            {selectedBook.pdfUrl && (
              <a
                href={selectedBook.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
              >
                PDFni o‘qish
              </a>
            )}
           

            {recommendations.length > 0 && (
              <div className="mt-8">
                <h2 className="text-2xl font-bold mb-4">O'xshash kitoblar</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                  {recommendations.map((book) => (
                    <div
                      key={book.id}
                      className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform transition hover:scale-105"
                      onClick={() => setSelectedBook(book)}
                    >
                      <img
                        src={book.cover}
                        alt={book.title}
                        className="w-full h-48 object-cover rounded mb-4"
                      />
                      <h3 className="font-bold mb-1">{book.title}</h3>
                      <p className="text-sm text-gray-600 mb-2">
                        {book.author}
                      </p>
                      <div className="flex gap-2">
                        <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                          {book.genre}
                        </span>
                        <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                          {book.language === "uzbek"
                            ? "O'zbekcha"
                            : "Inglizcha"}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div>
            <h2 className="text-2xl font-bold mb-4">Kitoblar ro'yxati</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {filteredBooks.map((book) => (
                <div
                  key={book.id}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform transition hover:scale-105"
                  onClick={() => setSelectedBook(book)}
                >
                  <img
                    src={book.cover}
                    alt={book.title}
                    className="w-full h-48 object-cover rounded mb-4"
                  />
                  <h3 className="font-bold mb-1">{book.title}</h3>
                  <p className="text-sm text-gray-600 mb-2">{book.author}</p>
                  <div className="flex gap-2">
                    <span className="px-2 py-1 bg-blue-100 text-blue-800 rounded-full text-xs">
                      {book.genre}
                    </span>
                    <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                      {book.language === "uzbek" ? "O'zbekcha" : "Inglizcha"}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-gray-800 text-white p-4 mt-8">
        <div className="container mx-auto text-center">
          <p>Kitob Tavsiyalari Sayti &copy; 2025</p>
        </div>
      </footer>
    </div>
  );
}
