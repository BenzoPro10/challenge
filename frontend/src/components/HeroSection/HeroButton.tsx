import React from "react";
import { useTheme } from "@mui/material";
import Button from "@mui/material/Button";

const HeroButton: React.FC = () => {
  const theme = useTheme();

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
    >
      MY READING LIST
    </Button>
  );
};

export default HeroButton;
