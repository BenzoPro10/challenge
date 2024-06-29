import React from "react";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const HeroSearch: React.FC = () => {
  const theme = useTheme();

  return (
    <TextField
      fullWidth
      variant="outlined"
      placeholder="Search for books, topics, or reading levels"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="primary" />
          </InputAdornment>
        ),
      }}
      sx={{
        maxWidth: "600px",
        "& .MuiOutlinedInput-root": {
          "& fieldset": {
            borderColor: theme.palette.primary.main,
          },
          "&:hover fieldset": {
            borderColor: theme.palette.primary.dark,
          },
          "&.Mui-focused fieldset": {
            borderColor: theme.palette.primary.dark,
          },
        },
      }}
    />
  );
};

export default HeroSearch;
