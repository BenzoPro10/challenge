import React from "react";
import Box from "@mui/material/Box";

interface HeroImageProps {
  isMobile: boolean;
}

const HeroImage: React.FC<HeroImageProps> = ({ isMobile }) => (
  <Box
    component="img"
    src="/summer-icon.bcf576872ef448e77ffe5178a9438f64.svg"
    alt="Cute elephant on an island"
    sx={{
      width: isMobile ? "200px" : "300px",
      height: "auto",
      marginBottom: "2rem",
    }}
  />
);

export default HeroImage;
