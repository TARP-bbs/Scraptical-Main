import { Button, Chip, Skeleton, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";

const DemoCardSecond = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: "#fff",
        width: "50%",
        height: "250px",
        position: "relative",
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      }}
    >
      <Box
        sx={{
          width: "90%",
          height: "50%",
          position: "relative",
          mx: "auto",
          mt: 1,
        }}
      >
        <Skeleton
          variant="rectangular"
          animation={false}
          sx={{
            mb: 1,
            position: "absolute",
            borderRadius: "10px",
            mx: "auto",
            width: "100%",
            height: "100%",
          }}
        />
      </Box>
      <Box sx={{ width: "90%", mx: "auto", mt: 1 }}>
        <Skeleton
          variant="rectangular"
          width={180}
          height={20}
          animation={false}
          sx={{ mb: 1, borderRadius: "4px" }}
        />
        <Skeleton
          variant="rectangular"
          width={100}
          height={15}
          animation={false}
          sx={{ mb: 2, borderRadius: "4px" }}
        />

        <Stack
          sx={{ mt: 1 }}
          direction={"row"}
          spacing={1}
          alignItems="flex-start"
        >
          <Chip color="error" sx={{ borderRadius: "4px" }} label="Negative" />
          <Typography sx={{ color: "#495057" }} variant="body2">
            / Average User Reviews
          </Typography>
        </Stack>
      </Box>
      <Deck width="120%" scale="0.8" />
      <Deck width="110%" scale="0.9" />
    </Box>
  );
};

const Deck = ({ width, scale }: { width: string; scale: string }) => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: "#fff",
        width: width,
        height: "100%",
        position: "absolute",
        right: "100",
        top: "0",
        zIndex: -1,
        transform: `scale(${scale})`,
        boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
      }}
    ></Box>
  );
};

export default DemoCardSecond;
