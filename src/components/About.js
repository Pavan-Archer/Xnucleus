import React from "react";
import { Grid, Typography, Box } from "@mui/material";
import aboutImg from "../img/about-us.jpg";

function About() {
  return (
    <Grid container spacing={3} sx={{ padding: "50px 50px" }}>
      <Grid item xs={12} md={6}>
        <Typography variant="h4" gutterBottom>
          About Us
        </Typography>
        <Typography paragraph>
          XfilesPro is an advanced document management application for
          Salesforce that offers doc gen, eSign, document storage, and
          collaboration solutions.
        </Typography>
        <Typography paragraph>
          XfilesPro transforms your document workflow in Salesforce. Experience
          unmatched efficiency and control over your documents, from creation
          and lifecycle management to unlimited storage and seamless
          collaboration.
        </Typography>
        <Typography paragraph>
          XfilesPro offers Salesforce users a robust suite for seamless document
          and data management—from automated document generation to secure
          storage, collaborative tools, data archiving, and reliable backup.
          Streamline every phase of your business workflows with ease. Watch the
          video for a glimpse of our powerful solutions.
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          {" "}
          <Box sx={{ maxWidth: "100%" }}>
            <img src={aboutImg} style={{ width: "100%" }} />
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default About;
