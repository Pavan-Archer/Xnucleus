import * as React from "react";
import { Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import bgImage from "../img/banner.jpg";
import { Link } from "react-router-dom";

const SimpleContainer = () => {
  return (
    <Container
      maxWidth={false}
      sx={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        height: "53vh",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
        }}
      >
        <Typography
          variant="h4"
          component="div"
          gutterBottom
          sx={{
            textAlign: "center",
            fontWeight: 700,
            fontSize: "55px",
            color: "#FFF",
            marginBottom: "0px",
          }}
        >
          Data Management
        </Typography>
        <Typography
          variant="body1"
          sx={{ marginBottom: "10px", fontSize: "18px", color: "white" }}
        >
          Revolutionizing how you manage your data.
        </Typography>
        <Link to="/about">
          <Button
            variant="contained"
            color="secondary"
            sx={{
              backgroundColor: "green",
              color: "white",
              borderRadius: "20px",
              "&:hover": {
                backgroundColor: "#006400",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.2)",
                color: "white",
              },
            }}
          >
            Learn More
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default SimpleContainer;
