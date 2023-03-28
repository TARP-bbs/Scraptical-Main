import {
  Chip,
  Stack,
  Step,
  StepLabel,
  Stepper,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const Keywords = ({ keywords }: { keywords: string[] }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          background: "rgba(255,255,255,0.6)",
          borderRadius: "4px",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          p: 3,
          overflowY: "auto",
        }}
      >
        <Typography gutterBottom sx={{ opacity: "0.5" }} variant="body2">
          Ranked with Degree
        </Typography>
        <Stack
          sx={{ mb: 2 }}
          direction="row"
          columnGap={1}
          rowGap={1}
          flexWrap="wrap"
        >
          {keywords?.map((el: string) => {
            return <Chip key={el} sx={{ borderRadius: "8px" }} label={el} />;
          })}
        </Stack>
      </Box>
    </Box>
  );
};

export default Keywords;
