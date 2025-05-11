import React from 'react';

const BookDetail = ({ book, onBack }) => {
  return (
    <div className="mb-8">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-2xl font-bold">Tanlangan kitob</h2>
        <button
          className="px-4 py-2 bg-gray-200 rounded hover:bg-gray-300 transition"
          onClick={onBack}
        >
          Orqaga
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-md flex flex-col md:flex-row gap-6">
        <img
          src={book.cover}
          alt={book.title}
          className="w-48 h-64 object-cover rounded shadow-md"
        />
        <div>
          <h3 className="text-2xl font-bold mb-2">
            {book.title}
          </h3>
          <p className="text-lg mb-2">{book.author}</p>
          <p className="mb-4">{book.description}</p>
          <div className="flex gap-2 mb-4">
            <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm">
              {book.genre}
            </span>
            <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm">
              {book.language === "uzbek"
                ? "O'zbekcha"
                : "Inglizcha"}
            </span>
          </div>
          
          {book.pdfUrl && (
            <a
              href={book.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              PDFni o'qish
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default BookDetail;