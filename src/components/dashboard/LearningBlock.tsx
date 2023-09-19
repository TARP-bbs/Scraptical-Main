import { Avatar, Typography, Box, Stack } from "@mui/material";
import React from "react";

const LearningBlock = ({
  title,
  value,
  children,
  background,
}: {
  title: string;
  value: string;
  children: React.ReactNode;
  background: string;
}) => {
  return (
    <Box>
      <Stack sx={{}} direction="row" alignItems={"stretch"} spacing={2}>
        <Avatar
          sx={{ background: background, borderRadius: "4px" }}
          variant="square"
        >
          {children}
        </Avatar>
        <Stack>
          <Typography variant="body1">{title}</Typography>
          <Typography sx={{ color: "#6c757d" }} variant="body2">
            {value}
          </Typography>
        </Stack>
      </Stack>
    </Box>
  );
};

export default LearningBlock;
