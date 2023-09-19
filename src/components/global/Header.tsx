import { Box, Button, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import React from "react";

const Header = () => {
  return (
    <Box sx={{ mb: 5 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={"bold"}>
            Scraptical.
          </Typography>
        </Box>
        <Box>
          <Button
            sx={{ borderRadius: "20px", px: 4 }}
            variant="text"
            startIcon={<GitHubIcon />}
            size="medium"
            onClick={() => {
              window.open(
                "https://github.com/TARP-bbs/Scraptical-Main",
                "_blank"
              );
            }}
          >
            Github
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Header;
