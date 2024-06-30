import React from "react";
import Typography from "@mui/material/Typography";

const Logo: React.FC = () => (
  <Typography
    variant="h6"
    component="div"
    sx={{
      flexGrow: 1,
      color: "#5ACCCC",
      fontWeight: "bold",
      letterSpacing: "0.1em",
      textShadow: "1px 1px 1px #335C6E",
    }}
  >
    Ello
  </Typography>
);

export default Logo;
