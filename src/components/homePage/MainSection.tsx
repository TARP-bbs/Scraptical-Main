import { Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import Action from "./Action";
import DemoSection from "./DemoSection";

const MainSection = () => {
  return (
    <Box>
      <Box sx={{}}>
        <Typography fontWeight={"bold"} variant="h4">
          Revamp Your Shopping Experience...
        </Typography>
        <Stack
          direction={"row"}
          alignItems={"flex-start"}
          justifyContent="space-between"
        >
          <DemoSection />
          <Action />
        </Stack>
      </Box>
    </Box>
  );
};

export default MainSection;
