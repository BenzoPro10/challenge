/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Box,
  Button,
  Snackbar,
  useTheme,
  Alert,
} from "@mui/material";
import { useBookContext } from "../../Context/BookContext";

interface BookCardProps {
  title: string;
  author: string;
  coverPhotoURL: string;
  readingLevel: string;
  isInReadingList?: boolean;
}

const BookCard: React.FC<BookCardProps> = ({
  title,
  author,
  coverPhotoURL,
  readingLevel,
  isInReadingList = false,
}) => {
  const { addToReadingList, removeFromReadingList } = useBookContext();
  const theme = useTheme();
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<
    "success" | "warning"
  >("success");

  const handleButtonClick = () => {
    const book: any = { title, author, coverPhotoURL, readingLevel };
    if (isInReadingList) {
      removeFromReadingList(book);
      setSnackbarMessage(`${book.title} removed from reading list`);
      setSnackbarSeverity("warning");
    } else {
      addToReadingList(book);
      setSnackbarMessage(`${book.title} added to reading list`);
      setSnackbarSeverity("success");
    }
    setSnackbarOpen(true);
  };

  const handleSnackbarClose = () => {
    setSnackbarOpen(false);
  };

  return (
    <Card
      sx={{
        maxWidth: { xs: 200, lg: 350 },
        m: 1,
        backgroundColor: theme.palette.background.default,
      }}
    >
      <CardMedia
        component="img"
        height="140"
        image={coverPhotoURL}
        alt={title}
        sx={{ objectFit: "cover" }}
      />
      <CardContent>
        <Typography
          gutterBottom
          style={{
            letterSpacing: "0.5px",
            fontWeight: "bold",
            fontSize: "13px",
            textTransform: "uppercase",
            color: theme.palette.text.primary,
            textAlign: "justify",
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body2"
          style={{
            whiteSpace: "nowrap",
            color: theme.palette.warning.dark,
            fontWeight: "bold",
            fontSize: "0.8rem",
            letterSpacing: "0.5px",
            textTransform: "uppercase",
            textAlign: "justify",
          }}
          noWrap
        >
          By: {author}
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
          <Typography
            variant="body2"
            color="text.dark"
            style={{
              letterSpacing: "0.5px",
              fontSize: "0.8rem",
              textTransform: "uppercase",
              textAlign: "justify",
              fontWeight: "bold",
            }}
          >
            Reading Level: {readingLevel}
          </Typography>
        </Box>
        <Button
          variant="contained"
          color={isInReadingList ? "warning" : "primary"}
          onClick={handleButtonClick}
          sx={{
            mt: 2,
            width: "100%",
            borderRadius: "20px",
            color: "white",
            fontWeight: "bold",
            fontSize: "10px",
            textTransform: "uppercase",
          }}
        >
          {isInReadingList ? "Remove from list" : "Add to list"}
        </Button>
      </CardContent>
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
    </Card>
  );
};

export default BookCard;
