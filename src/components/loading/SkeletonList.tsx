import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import SkeletonCard from "../loading/SkeletonCard";
const SkeletonList = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        my: 3,
        justifyContent: "space-evenly",
      }}
    >
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
      <SkeletonCard />
    </Box>
  );
};

export default SkeletonList;
