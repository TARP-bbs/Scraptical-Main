import { Grid, Typography, Box } from "@mui/material";
import React from "react";
import AllReviews from "./AllReviews";
import GridProductDetails from "./GridProductDetails";
import Overview from "./Overview";

const GridContainer = () => {
  return (
    <Grid gap={5} sx={{ px: 8 }} container>
      <Grid xs={5} item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <Overview />
        </Box>
      </Grid>
      <Grid xs={5} item>
        <Box>
          <AllReviews />
        </Box>
      </Grid>
    </Grid>
  );
};

export default GridContainer;
