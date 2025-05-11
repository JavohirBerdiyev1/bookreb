import React, { useState, useEffect } from 'react';
import { sampleBooks } from './data/sampleBooks';
import { getRecommendations } from './utils/bookUtils';
import Header from './components/Header';
import LanguageFilter from './components/LanguageFilter';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import Recommendations from './components/Recommendations';
import Footer from './components/Footer';

const App = () => {
  const [books] = useState(sampleBooks);
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
      <Header searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      
      <main className="container mx-auto p-4">
        <LanguageFilter 
          filterLanguage={filterLanguage} 
          setFilterLanguage={setFilterLanguage} 
        />

        {selectedBook ? (
          <>
            <BookDetail 
              book={selectedBook} 
              onBack={() => setSelectedBook(null)} 
            />
            <Recommendations 
              books={recommendations} 
              onSelectBook={setSelectedBook} 
            />
          </>
        ) : (
          <BookList 
            books={filteredBooks} 
            onSelectBook={setSelectedBook} 
          />
        )}
      </main>

      <Footer />
    </div>
  );
};

export default App;