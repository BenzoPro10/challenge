import React from "react";
import { Typography, Box, IconButton, Grid, useTheme } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import { useNavigate } from "react-router-dom";
import { generateBookKey, useBookContext } from "../../Context/BookContext";
import BookCard from "./BookCard";

const ReadingList: React.FC = () => {
  const navigate = useNavigate();
  const { readingList } = useBookContext();
  const theme = useTheme();

  return (
    <Box
      sx={{
        p: 2,
        width: { xs: "100%", lg: "70%" },
        mx: { xs: 0, lg: "auto" },
        backgroundColor: theme.palette.background.default,
      }}
    >
      <IconButton onClick={() => navigate("/")} sx={{ mb: 2 }}>
        <ArrowBackIcon />
      </IconButton>
      <Typography variant="h4" gutterBottom>
        My Reading List
      </Typography>
      {readingList.length === 0 ? (
        <Typography variant="h6" sx={{ mt: 4, textAlign: "center" }}>
          Your Reading List is Empty
        </Typography>
      ) : (
        <Grid container spacing={{ xs: 2, lg: 3 }}>
          {readingList.map((book) => (
            <Grid item xs={6} sm={6} md={4} lg={3} key={generateBookKey(book)}>
              <BookCard {...book} isInReadingList />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
};

export default ReadingList;
