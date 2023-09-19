import { Grid, Box } from "@mui/material";
import React from "react";
import OverViewSkeleton from "./OverViewSkeleton";

const MainSkeleton = () => {
  return (
    <Grid spacing={5} container>
      <Grid xs={2} item></Grid>
      <Grid xs={5} item>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh",
          }}
        >
          <OverViewSkeleton />
        </Box>
      </Grid>
      <Grid xs={5} item>
        <Box></Box>
      </Grid>
    </Grid>
  );
};

export default MainSkeleton;
