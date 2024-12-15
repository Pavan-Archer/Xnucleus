import * as React from "react";
import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import DriveFileMoveRoundedIcon from "@mui/icons-material/DriveFileMoveRounded";
import FolderDeleteRoundedIcon from "@mui/icons-material/FolderDeleteRounded";
import SourceRoundedIcon from "@mui/icons-material/SourceRounded";
import RestorePageRoundedIcon from "@mui/icons-material/RestorePageRounded";
import SimpleContainer from "./Section";

const ProductHighlights = () => {
  const products = [
    {
      title: "Data Migration",
      description: "Seamlessly transfer data between systems.",
      icon: <DriveFileMoveRoundedIcon />,
    },
    {
      title: "Data Purging",
      description: "Safely and securely remove unwanted data.",
      icon: <FolderDeleteRoundedIcon />,
    },
    {
      title: "Data Visualization",
      description: "Transform data into insightful and interactive charts.",
      icon: <SourceRoundedIcon />,
    },
    {
      title: "Data Recovery",
      description: "Recover lost or deleted data efficiently.",
      icon: <RestorePageRoundedIcon />,
    },
  ];

  const StyledCard = styled(Card)(({ theme }) => ({
    display: "flex",
    flexDirection: "column",
    height: "100%",
    borderRadius: "8px",
    boxShadow: "4px 2px 4px rgba(0, 0, 0, 0.1)",
    transition: "transform 0.2s ease-in-out",
    "&:hover": {
      transform: "scale(1.05)",
    },
  }));

  return (
    <Box>
      <SimpleContainer />

      <Grid
        container
        spacing={5}
        style={{ paddingTop: "20px", marginBottom: "35px" }}
        justifyContent="center"
      >
        <Grid item xs={12}>
          <Typography
            variant="h4"
            component="h1"
            align="center"
            sx={{ fontWeight: "bold", color: "#121212" }}
          >
            Our Products
          </Typography>
        </Grid>
        <Grid container spacing={3} style={{ padding: "50px" }}>
          {products.map((product) => (
            <Grid item xs={12} sm={6} md={3} key={product.title}>
              <StyledCard>
                <CardContent>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Box
                      sx={{
                        color: "green",
                        width: "50px",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      {product.icon}
                    </Box>
                    <Typography variant="h6" component="h2" ml={2}>
                      {product.title}
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.secondary">
                    {product.description}
                  </Typography>
                </CardContent>
              </StyledCard>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  );
};

export default ProductHighlights;
