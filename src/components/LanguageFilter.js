import React from 'react';

const LanguageFilter = ({ filterLanguage, setFilterLanguage }) => {
  return (
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
  );
};

export default LanguageFilter;