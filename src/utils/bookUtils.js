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

// Janrlar ro'yxatini olish
export const getGenres = (books) => {
  const genres = books.map(book => book.genre);
  return [...new Set(genres)]; // Takrorlanmaydigan qiymatlarni olish
};
