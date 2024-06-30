/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect, useRef, useState } from "react";
import {
  Box,
  useMediaQuery,
  useTheme,
  Paper,
  List,
  ListItem,
  ListItemText,
  ListItemAvatar,
  Avatar,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButton from "./HeroButton";
import HeroSearch from "./HeroSearch";
import BookList from "../Book/BookList";
import { useBookContext } from "../../Context/BookContext";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSticky, setIsSticky] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const { books, addToReadingList } = useBookContext();
  const descriptionRef = useRef<HTMLDivElement>(null);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "warning"
  >("success");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      { threshold: 1 }
    );

    const currentRef = descriptionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const handleAddToReadingList = (book: any) => {
    addToReadingList(book);
    setSnackbarMessage(`${book.title} added to reading list`);
    setSnackbarSeverity("success");
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: isMobile ? "2rem 1rem" : "4rem 2rem",
        backgroundColor: theme.palette.background.default,
      }}
    >
      <HeroImage isMobile={isMobile} />
      <HeroTitle isMobile={isMobile} />
      <Box ref={descriptionRef}>
        <HeroDescription />
      </Box>
      <Box
        sx={{
          position: isSticky ? "fixed" : "relative",
          top: isSticky ? 0 : "auto",
          width: "100%",
          zIndex: isSticky ? 1 : "auto",
          backgroundColor: theme.palette.background.default,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "1rem",
          gap: "1rem",
        }}
      >
        <HeroSearch onSearch={handleSearch} />
        <HeroButton />
        {searchQuery && (
          <Paper
            sx={{
              position: "absolute",
              top: "72px",
              width: isMobile ? "90%" : "100%",
              maxWidth: "600px",
              zIndex: 2,
              maxHeight: "400px",
              overflowY: "auto",
              backgroundColor: theme.palette.background.default,
            }}
          >
            <List>
              {filteredBooks.map((book) => (
                <ListItem key={book.title}>
                  <ListItemAvatar>
                    <Avatar src={book.coverPhotoURL} />
                  </ListItemAvatar>
                  <ListItemText
                    primary={book.title}
                    secondary={`Author: ${book.author}`}
                  />
                  <Button
                    variant="contained"
                    onClick={() => handleAddToReadingList(book)}
                    style={{
                      backgroundColor: theme.palette.primary.main,
                      color: "white",
                      fontWeight: "bold",
                      borderRadius: "20px",
                    }}
                  >
                    Add
                  </Button>
                </ListItem>
              ))}
            </List>
          </Paper>
        )}
      </Box>
      <Box sx={{ marginTop: isSticky ? "6rem" : 0 }}>
        <BookList />
      </Box>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={3000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleSnackbarClose}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default HeroSection;
