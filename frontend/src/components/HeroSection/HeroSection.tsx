import React from "react";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import HeroImage from "./HeroImage";
import HeroTitle from "./HeroTitle";
import HeroDescription from "./HeroDescription";
import HeroButton from "./HeroButton";
import HeroSearch from "./HeroSearch";

const HeroSection: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

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
      <HeroDescription />
      <HeroButton />
      <HeroSearch />
    </Box>
  );
};

export default HeroSection;
