import React from "react";
import { TextField, InputAdornment, useTheme } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

interface HeroSearchProps {
  onSearch: (query: string) => void;
}

const HeroSearch: React.FC<HeroSearchProps> = ({ onSearch }) => {
  const theme = useTheme();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onSearch(event.target.value);
  };

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
      onChange={handleInputChange}
      sx={{
        maxWidth: "600px",
        backgroundColor: "white",
        borderRadius: "4px",
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
