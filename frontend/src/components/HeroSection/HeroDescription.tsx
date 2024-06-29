import React from "react";
import { useTheme } from "@mui/material";
import Typography from "@mui/material/Typography";

const HeroDescription: React.FC = () => {
  const theme = useTheme();

  return (
    <Typography
      variant="body1"
      sx={{
        maxWidth: "600px",
        marginBottom: "2rem",
        color: theme.palette.text.primary,
        textAlign: "justify",
        hyphens: "auto",
        wordBreak: "break-word",
      }}
    >
      Over 700 decodable books that match your child's reading ability. Help
      prevent the summer slump, without frustration
    </Typography>
  );
};

export default HeroDescription;
