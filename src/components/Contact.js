import React from "react";
import { Grid, Typography, TextField, Button, Box } from "@mui/material";

function ContactUs() {
  return (
    <Grid container spacing={3} sx={{ padding: "50px 50px" }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom>
          Contact Us
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ my: 3 }}>
          <TextField
            fullWidth
            label="Name"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Email"
            type="email"
            variant="outlined"
            margin="normal"
          />
          <TextField
            fullWidth
            label="Message"
            multiline
            rows={4}
            variant="outlined"
            margin="normal"
          />
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
            Submit
          </Button>
        </Box>
      </Grid>
      <Grid item xs={12} md={6}>
        <Box sx={{ my: 3 }}>
          <p>
            <b>Phone :</b> +141 5671 6259
          </p>
          <p>
            <b>Email :</b> sales@xfilespro.com
          </p>
          <p>
            <b>Address :</b> AVIV, 723/2, 113, Nallurahalli Main Rd, Siddapura,
            Whitefield, Bengaluru, Karnataka 560066
          </p>
        </Box>
      </Grid>
    </Grid>
  );
}

export default ContactUs;
