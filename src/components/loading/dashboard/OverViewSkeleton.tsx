import { Divider, Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GridAspectsSkeleton from "./GridAspectsSkeleton";

const OverViewSkeleton = () => {
  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(255,255,255,0.6)",
        height: "95%",
        overflowY: "auto",
        pt: 4,
        pb: 2,
        px: 6,
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{ mb: 4 }}
      >
        <Stack spacing={1}>
          <Skeleton variant="rectangular" width={200} height={30} />
          <Skeleton variant="rectangular" width={100} height={15} />
        </Stack>
        <Skeleton variant="circular" width={40} height={40} />
      </Stack>
      <Box sx={{ mb: 2 }}>
        <Skeleton variant="rectangular" width={300} height={60} />
      </Box>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <GridAspectsSkeleton />
      </Box>
    </Box>
  );
};

export default OverViewSkeleton;
