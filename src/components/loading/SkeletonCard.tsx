import { Skeleton, Stack } from "@mui/material";
import { Box } from "@mui/material";
import React from "react";

const SkeletonCard = () => {
  return (
    <Box
      sx={{
        p: 5,
        height: "40vh",
        minWidth: "40%",
        display: "flex",
        alignItems: "flex-start",
        gap: "2em",
        borderBottom: "4px dotted #d9d9d9",
      }}
    >
      <Box
        sx={{
          width: "50%",
          height: "100%",
          borderRadius: "8px",
        }}
      >
        <Skeleton variant="rectangular" height={"100%"} width="100%" />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "start",
        }}
      >
        <Skeleton
          sx={{ mb: 2 }}
          variant="rectangular"
          height={40}
          width={220}
        />
        <Stack direction={"row"} spacing={1}>
          <Skeleton variant="rectangular" height={30} width={100} />
          <Skeleton variant="rectangular" height={30} width={100} />
        </Stack>
      </Box>
    </Box>
  );
};

export default SkeletonCard;
