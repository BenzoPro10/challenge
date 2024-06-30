import ReadingList from "./Components/Book/ReadingList";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import { Routes, Route } from "react-router-dom";
import { BookProvider } from "./Context/BookContext";

function App() {
  return (
    <>
      <BookProvider>
        <Header />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/readingList" element={<ReadingList />} />
        </Routes>
      </BookProvider>
    </>
  );
}

export default App;
