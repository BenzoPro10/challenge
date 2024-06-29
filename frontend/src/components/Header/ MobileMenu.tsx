import React from "react";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

interface MobileMenuProps {
  handleDrawerToggle: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ handleDrawerToggle }) => (
  <IconButton
    edge="start"
    color="inherit"
    aria-label="menu"
    onClick={handleDrawerToggle}
  >
    <MenuIcon />
  </IconButton>
);

export default MobileMenu;
