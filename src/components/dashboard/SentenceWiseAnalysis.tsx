import { Chip, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const SentenceWiseAnalysis = ({
  polaritySentence,
}: {
  polaritySentence: any;
}) => {
  return (
    <Box
      sx={{
        mb: 3,
        height: "250px",
        overflowY: "auto",
      }}
    >
      {polaritySentence?.map((el: any, id: number) => {
        if (el.positive === 0 && el.negative === 0 && el.neutral === 0) {
          return null;
        }
        return (
          <Box key={id}>
            <Box
              sx={{
                background: "rgba(255,255,255,0.7)",
                px: 2,
                py: 2,
                borderRadius: "8px",
                mb: 1,
              }}
            >
              <Typography
                gutterBottom
                variant="body1"
                sx={{ fontSize: "0.75rem" }}
              >
                {el.span}
              </Typography>
              <Box
                sx={{ mt: 2, display: "flex", gap: "10px", flexWrap: "wrap" }}
              >
                <Chip
                  size="small"
                  sx={{ borderRadius: "8px" }}
                  variant="outlined"
                  color="success"
                  label={`positive: ${el.positive}`}
                />
                <Chip
                  size="small"
                  sx={{ borderRadius: "8px" }}
                  variant="outlined"
                  color="error"
                  label={`negative: ${el.negative}`}
                />
                <Chip
                  size="small"
                  sx={{ borderRadius: "8px" }}
                  variant="outlined"
                  color="info"
                  label={`neutral: ${el.neutral}`}
                />
                <Chip
                  size="small"
                  sx={{ borderRadius: "8px" }}
                  variant="outlined"
                  color="warning"
                  label={`compound: ${el.compound}`}
                />
              </Box>
            </Box>
          </Box>
        );
      })}
    </Box>
  );
};

export default SentenceWiseAnalysis;
