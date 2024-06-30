import React from "react";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const HeroButton: React.FC = () => {
  const theme = useTheme();
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/readingList");
  };

  return (
    <Button
      variant="contained"
      size="large"
      sx={{
        backgroundColor: theme.palette.primary.main,
        "&:hover": {
          backgroundColor: theme.palette.primary.dark,
        },
        marginBottom: "2rem",
        borderRadius: "50px",
        color: theme.palette.common.white,
        fontWeight: "bold",
      }}
      onClick={handleClick}
    >
      MY READING LIST
    </Button>
  );
};

export default HeroButton;
