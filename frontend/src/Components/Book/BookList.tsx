import React, { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { Grid, Typography, Box, Button } from "@mui/material";
import { generateBookKey, useBookContext } from "../../Context/BookContext";
import { BOOKS_QUERY } from "../../GraphQl/query";
import BookCard from "./BookCard";

const PAGE_SIZE = 10;

const BookList: React.FC = () => {
  const { books, setBooks } = useBookContext();
  const [page, setPage] = useState(1);
  const { loading, error, data } = useQuery(BOOKS_QUERY);

  useEffect(() => {
    if (data && data.books) {
      setBooks(data.books);
    }
  }, [data, setBooks]);

  const handleLoadMore = () => {
    setPage((prevPage) => prevPage + 1);
  };

  if (loading && books.length === 0) return <Typography>Loading...</Typography>;
  if (error) return <Typography>Error: {error.message}</Typography>;

  const displayedBooks = books.slice(0, page * PAGE_SIZE);

  return (
    <Box
      sx={{
        flexGrow: 1,
        mt: 4,
        width: { xs: "100%", lg: "70%" },
        mx: { xs: 0, lg: "auto" },
      }}
    >
      <Grid container spacing={{ xs: 2, lg: 3 }}>
        {displayedBooks.map((book) => (
          <Grid item xs={6} sm={4} md={3} lg={3} key={generateBookKey(book)}>
            <BookCard {...book} />
          </Grid>
        ))}
      </Grid>
      {displayedBooks.length < books.length && (
        <Box sx={{ display: "flex", justifyContent: "center", mt: 4 }}>
          <Button
            variant="contained"
            style={{
              borderRadius: 25,
              color: "white",
              fontWeight: "bold",
            }}
            onClick={handleLoadMore}
          >
            Load More
          </Button>
        </Box>
      )}
    </Box>
  );
};

export default BookList;
