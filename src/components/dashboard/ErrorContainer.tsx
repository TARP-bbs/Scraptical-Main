import { Alert, AlertTitle, Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useRouter } from "next/router";
import React from "react";

const ErrorContainer = () => {
  const router = useRouter();
  return (
    <Box width={"100vw"} sx={{ height: "100vh" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1em",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <Alert severity="error" variant="filled">
          <AlertTitle>Error has Occured</AlertTitle>
          <Typography variant="body2">
            Please go back to Search page.
          </Typography>
        </Alert>
        <Button
          onClick={() => {
            router.push("/search");
          }}
          variant="contained"
        >
          Search Page
        </Button>
      </Box>
    </Box>
  );
};

export default ErrorContainer;
