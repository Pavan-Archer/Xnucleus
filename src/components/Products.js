import React from "react";
import { Grid, Typography, Card, CardContent, CardMedia } from "@mui/material";
import product1 from "../img/product1.png";
import product2 from "../img/product2.jpg";
import product3 from "../img/product2.jpg";
import product4 from "../img/product2.jpg";

function Products() {
  const products = [
    {
      id: 1,
      imageUrl: product1,
      name: "Data Migration",
      description: "Seamlessly transfer data between systems.",
    },
    {
      id: 2,
      name: "Data Purging",
      description: "Safely and securely remove unwanted data.",
      imageUrl: product2,
    },
    {
      id: 3,
      name: "Data Visualization",
      description: "Transform data into insightful and interactive charts.",
      imageUrl: product3,
    },
    {
      id: 4,
      name: "Data Recovery",
      description: "Recover lost or deleted data efficiently.",
      imageUrl: product4,
    },
  ];

  return (
    <Grid container spacing={3} sx={{ padding: "50px 50px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Our Products
        </Typography>
      </Grid>
      <Grid container spacing={3}>
        {products.map((product) => (
          <Grid item xs={12} sm={6} md={4} key={product.id}>
            <Card>
              <CardMedia
                component="img"
                height="140"
                image={product.imageUrl}
                alt={product.name}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="h2">
                  {product.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {product.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}

export default Products;
