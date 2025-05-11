import React from 'react';
import BookCard from './BookCard';

const Recommendations = ({ books, onSelectBook }) => {
  if (!books || books.length === 0) return null;
  
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-bold mb-4">O'xshash kitoblar</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {books.map((book) => (
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
