import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import AllReviews from "./AllReviews";
import GridProductDetails from "./GridProductDetails";
import Overview from "./Overview";

const GridContainer = () => {
  return (
    <Grid spacing={5} container>
      <Grid xs={2} item>
        <GridProductDetails />
      </Grid>
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
