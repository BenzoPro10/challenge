import React from "react";
import { Box, List, ListItemButton, ListItemText } from "@mui/material";
import { styled } from "@mui/system";

interface DrawerContentProps {
  handleDrawerToggle: () => void;
}

const AnimatedListItemButton = styled(ListItemButton)(({ theme }) => ({
  transition: "background-color 0.2s ease-in-out",
  "&:hover": {
    backgroundColor: theme.palette.action.hover,
  },
}));

const DrawerContent: React.FC<DrawerContentProps> = ({
  handleDrawerToggle,
}) => (
  <Box
    onClick={handleDrawerToggle}
    sx={{
      textAlign: "center",
      padding: 2,
    }}
  >
    <List>
      <AnimatedListItemButton>
        <ListItemText primary="Discover Ello" />
      </AnimatedListItemButton>
      <AnimatedListItemButton>
        <ListItemText primary="Parent Resources" />
      </AnimatedListItemButton>
    </List>
  </Box>
);

export default DrawerContent;
