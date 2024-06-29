import React, { useState } from "react";
import { AppBar, Toolbar, Drawer } from "@mui/material";
import { useTheme, useMediaQuery } from "@mui/material";
import Logo from "./Logo";
import Navigation from "./Navigation";
import DrawerContent from "./DrawerContent";
import MobileMenu from "./ MobileMenu";

const Header: React.FC = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      <AppBar position="static" color="transparent" elevation={0}>
        <Toolbar>
          <Logo />
          {isMobile ? (
            <MobileMenu handleDrawerToggle={handleDrawerToggle} />
          ) : (
            <Navigation />
          )}
        </Toolbar>
      </AppBar>
      <Drawer
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          "& .MuiDrawer-paper": {
            width: 240,
            backgroundColor: "#f0f0f0", // Light gray background
            transition: "all 0.3s ease-in-out", // Smooth transition for all properties
          },
        }}
        SlideProps={{
          timeout: 300, // Animation duration in milliseconds
          easing: "ease-in-out", // Animation timing function
        }}
      >
        <DrawerContent handleDrawerToggle={handleDrawerToggle} />
      </Drawer>
    </>
  );
};

export default Header;
