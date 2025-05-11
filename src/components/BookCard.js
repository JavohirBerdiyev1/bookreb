// src/components/BookCard.js
import React from 'react';

const BookCard = ({ book, onClick }) => {
  return (
    <div
      className="bg-white p-4 rounded-lg shadow-md cursor-pointer transform transition hover:scale-105"
      onClick={() => onClick(book)}
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
  );
};

export default BookCard;
