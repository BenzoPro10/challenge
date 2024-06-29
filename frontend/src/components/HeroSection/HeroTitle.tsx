import React from "react";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

interface HeroTitleProps {
  isMobile: boolean;
}

const HeroTitle: React.FC<HeroTitleProps> = ({ isMobile }) => {
  const theme = useTheme();

  return (
    <Typography
      variant={isMobile ? "h4" : "h5"}
      component="h1"
      gutterBottom
      sx={{ color: theme.palette.secondary.main, fontWeight: "bold" }}
    >
      Confident, Independent Reading
    </Typography>
  );
};

export default HeroTitle;
