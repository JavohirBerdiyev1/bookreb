import React from 'react';
import BookCard from './BookCard';

const BookList = ({ books, onSelectBook }) => {
  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Kitoblar ro'yxati</h2>
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

export default BookList;