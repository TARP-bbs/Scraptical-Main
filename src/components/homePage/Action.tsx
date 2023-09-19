import { Button, Typography } from "@mui/material";
import { Box } from "@mui/material";
import Link from "next/link";
import React from "react";

const Action = () => {
  return (
    <Box sx={{ width: "50%" }}>
      <Box
        sx={{
          background: "rgba(183, 183, 164,0.2)",
          width: "50%",
          height: "200px",
          mx: "auto",
          borderRadius: "10px",
          p: 2,
        }}
      >
        <Link href="/search">
          <Button
            sx={{ fontWeight: "2rem", color: "#fff" }}
            color="secondary"
            size="medium"
            variant="contained"
            fullWidth
          >
            Start Searching
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Action;
