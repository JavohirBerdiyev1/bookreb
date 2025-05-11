import React, { useState, useEffect } from 'react';
import BookCard from './BookCard';

const Recommendations = ({ books, onSelectBook, selectedGenre, setSelectedGenre }) => {
  const [filteredRecommendations, setFilteredRecommendations] = useState(books);
  
  // Janrlar ro'yxatini olish
  const genres = books 
    ? [...new Set(books.map(book => book.genre))]
    : [];
  
  // Janrga qarab filtrlash
  useEffect(() => {
    if (selectedGenre === 'all') {
      setFilteredRecommendations(books);
    } else {
      setFilteredRecommendations(
        books.filter(book => book.genre === selectedGenre)
      );
    }
  }, [selectedGenre, books]);

  if (!books || books.length === 0) return null;
  
  return (
    <div className="mt-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">O'xshash kitoblar</h2>
        <div className="flex flex-wrap gap-2">
          <button
            className={`px-3 py-1 rounded text-sm ${
              selectedGenre === 'all' 
                ? 'bg-blue-600 text-white' 
                : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setSelectedGenre('all')}
          >
            Barcha
          </button>
          {genres.map(genre => (
            <button
              key={genre}
              className={`px-3 py-1 rounded text-sm ${
                selectedGenre === genre 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-gray-200 text-gray-800'
              }`}
              onClick={() => setSelectedGenre(genre)}
            >
              {genre}
            </button>
          ))}
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {filteredRecommendations.map((book) => (
          <BookCard 
            key={book.id} 
            book={book} 
            onClick={onSelectBook} 
          />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;