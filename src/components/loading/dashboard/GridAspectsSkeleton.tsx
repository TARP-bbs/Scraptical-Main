import { Box, Grid, Skeleton } from "@mui/material";
import React from "react";

const GridAspectsSkeleton = () => {
  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <Skeleton variant="rectangular" height={180} sx={{ width: "100%" }} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="rectangular" height={180} sx={{ width: "100%" }} />
      </Grid>
      <Grid item xs={6}>
        <Skeleton variant="rectangular" height={180} sx={{ width: "100%" }} />
      </Grid>
    </Grid>
  );
};

export default GridAspectsSkeleton;
