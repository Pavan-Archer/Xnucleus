import React from "react";
import { Box, Typography, Container } from "@mui/material";
import { FaFacebook, FaTwitter, FaLinkedin } from "react-icons/fa";
import "./Fstyle.css";

const Footer = () => (
  <Box
    component="footer"
    sx={{
      py: 3,
      my: 2,
      bgcolor: "#121212",
      color: "white",
      display: "flex",
      justifyContent: "space-between",
    }}
  >
    <Container maxWidth="sm">
      <Typography variant="body2" color="white">
        © {new Date().getFullYear()} XNucleus. All Rights Reserved.
      </Typography>
    </Container>
    <Container maxWidth="sm">
      <div className="social-media-container">
        <a
          href="https://www.facebook.com/xfilespro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaFacebook size={30} style={{ color: "#1877F2" }} />
        </a>
        <a
          href="https://x.com/xfiles_pro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaTwitter size={30} style={{ color: "#1DA1F2" }} />
        </a>
        <a
          href="https://www.linkedin.com/company/xfilespro"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={30} style={{ color: "#0077B5" }} />
        </a>
      </div>
    </Container>
  </Box>
);

export default Footer;
