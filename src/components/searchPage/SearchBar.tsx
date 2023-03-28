import { Box, Typography } from "@mui/material";
import React from "react";
import SearchField from "./SearchField";

const SearchBar = () => {
  return (
    <Box
      sx={{
        borderRadius: "10px",
        background: "rgba(183, 183, 164,0.2)",
        p: 5,
      }}
    >
      <Typography
        textAlign={"center"}
        gutterBottom
        fontWeight={"700"}
        variant="h5"
      >
        Search Products
      </Typography>

      <Typography
        textAlign={"center"}
        gutterBottom
        fontWeight={"400"}
        variant="h6"
        sx={{ color: "#495057" }}
      >
        We will try to find the best products for you from Amazon.in
      </Typography>
      <Box>
        <SearchField />
      </Box>
    </Box>
  );
};

export default SearchBar;
