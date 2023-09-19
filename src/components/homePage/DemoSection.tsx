import { Avatar, Button, Chip, Typography } from "@mui/material";
import { Box, Stack } from "@mui/material";
import React from "react";
import CallMadeIcon from "@mui/icons-material/CallMade";
import DemoCard from "./DemoCard";
import DemoCardSecond from "./DemoCardSecond";

const DemoSection = () => {
  return (
    <Box sx={{ mt: 2, width: "40%" }}>
      <Stack direction={"row"} alignItems="baseline">
        <Typography sx={{ color: "#495057" }} variant="body1">
          showing results from
        </Typography>
        <Button
          endIcon={<CallMadeIcon />}
          size="large"
          sx={{ fontSize: "1.5rem" }}
          variant="text"
        >
          Amazon.in
        </Button>
      </Stack>
      <Box>
        <Typography sx={{ mt: 1, mb: 1 }} fontWeight={"bold"} variant="h4">
          Apple Iphone 12
        </Typography>
        <Stack direction={"row"} spacing={4} alignItems="center">
          <Stack direction={"row"} columnGap={1} alignItems="center">
            <Typography sx={{ color: "#495057" }} variant="body2">
              Showing{" "}
            </Typography>
            <Typography fontWeight={"bold"} variant="body2">
              16 Results
            </Typography>
          </Stack>
          <Avatar sx={{ background: "#fff", width: "25px", height: "25px" }}>
            <CallMadeIcon
              sx={{ color: "#000", fontSize: "15px" }}
              fontSize="small"
            />
          </Avatar>
        </Stack>
        <Stack sx={{ mt: 2 }} direction={"row"} spacing={2} alignItems="center">
          <DemoCard />
          <DemoCardSecond />
        </Stack>
      </Box>
    </Box>
  );
};

export default DemoSection;
