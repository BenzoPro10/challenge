import React, { createContext, useContext, useState, ReactNode } from "react";

interface Book {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
}

const generateBookKey = (book: Book) => {
  return `${book.title}-${book.author}-${book.readingLevel}`;
};

interface BookContextType {
  books: Book[];
  readingList: Book[];
  addToReadingList: (book: Book) => void;
  removeFromReadingList: (book: Book) => void;
  setBooks: React.Dispatch<React.SetStateAction<Book[]>>;
}

const BookContext = createContext<BookContextType | undefined>(undefined);

export const useBookContext = () => {
  const context = useContext(BookContext);
  if (!context) {
    throw new Error("useBookContext must be used within a BookProvider");
  }
  return context;
};

export const BookProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [books, setBooks] = useState<Book[]>([]);
  const [readingList, setReadingList] = useState<Book[]>([]);

  const addToReadingList = (book: Book) => {
    setReadingList((prevList) => [...prevList, book]);
  };

  const removeFromReadingList = (book: Book) => {
    setReadingList((prevList) =>
      prevList.filter((b) => generateBookKey(b) !== generateBookKey(book))
    );
  };

  return (
    <BookContext.Provider
      value={{
        books,
        readingList,
        addToReadingList,
        removeFromReadingList,
        setBooks,
      }}
    >
      {children}
    </BookContext.Provider>
  );
};

export { generateBookKey };
