import React from "react";
import { AppBar, Toolbar, Typography, Stack, Button } from "@mui/material";
import { Link } from "react-router-dom";
import logoImg from "../img/logo.png";

const Navbar = () => {
  return (
    <AppBar position="sticky" sx={{ backgroundColor: "white" }}>
      <Toolbar>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          width="100%"
        >
          <Typography component="div">
            <img src={logoImg} style={{ width: "50%", paddingTop: "5px" }} />
          </Typography>
          <Stack direction="row" spacing={2}>
            <Link to="/home">
              <Button color="inherit" sx={{ color: "#121212" }}>
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button color="inherit" sx={{ color: "#121212" }}>
                About
              </Button>
            </Link>
            <Link to="/products">
              <Button color="inherit" sx={{ color: "#121212" }}>
                Products
              </Button>
            </Link>
            <Link to="/contact">
              <Button color="inherit" sx={{ color: "#121212" }}>
                Contact
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
