import React from 'react';

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
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
  );
};

export default Header;