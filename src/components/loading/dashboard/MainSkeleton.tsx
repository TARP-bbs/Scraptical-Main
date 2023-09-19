import { Grid, Box } from "@mui/material";
import React from "react";
import OverViewSkeleton from "./OverViewSkeleton";

const MainSkeleton = () => {
  return (
    <Grid gap={5} sx={{ px: 8 }} container>
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
            <OverViewSkeleton />
          </Box>
        </Grid>
        <Grid xs={5} item></Grid>
      </Grid>
    </Grid>
  );
};

export default MainSkeleton;
