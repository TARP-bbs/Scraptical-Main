import { Chip, Stack, Typography, Box } from "@mui/material";
import React from "react";

const Entities = ({ entities }: { entities: any }) => {
  return (
    <Box sx={{ mb: 3 }}>
      <Box
        sx={{
          width: "100%",
          height: "250px",
          borderRadius: "4px",
          p: 2,
          overflowY: "auto",
          border: "1px solid #adb5bd",
        }}
      >
        <Typography gutterBottom variant="body2">
          Named Entities that are featured in the review
        </Typography>
        {Object.entries(entities)?.map((el: any) => {
          return (
            <Stack
              key={el[0]}
              sx={{
                background: "rgba(255,255,255,0.7)",
                px: 2,
                py: 1,
                borderRadius: "8px",
                mb: 1,
              }}
              direction="row"
              alignItems={"center"}
              justifyContent="space-between"
            >
              <Typography variant="body2">{el[0]}</Typography>
              <Chip
                size="small"
                label={el[1].toLowerCase()}
                sx={{
                  borderRadius: "8px",
                  background: "#e0aaff",
                  color: "#3c096c",
                  fontWeight: "bold",
                }}
              />
            </Stack>
          );
        })}
      </Box>
    </Box>
  );
};

export default Entities;
