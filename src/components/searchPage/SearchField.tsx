import { Button, Chip, Input } from "@mui/material";
import { Box, Stack } from "@mui/material";
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import {
  ProductError,
  ProductLoading,
  productName,
  productShelves,
} from "../../../world/atoms";

const SearchField = () => {
  const [product, setProduct] = useRecoilState(productName);
  const [loader, setLoader] = useRecoilState(ProductLoading);
  const [error, setError] = useRecoilState(ProductError);
  const [productResults, setProductResults] = useRecoilState(productShelves);

  const handler = async () => {
    setLoader(true);
    setError(false);

    try {
      const response = await fetch(
        window.location.origin + "/api/getProducts" + `?product=${product}`
      );

      const jsonResponse = await response.json();

      console.log(jsonResponse);

      setLoader(false);
      setProductResults(jsonResponse);
    } catch (e) {
      setLoader(false);
      setError(true);
    }
  };
  return (
    <form>
      <Box sx={{ display: "flex", justifyContent: "center", my: 2 }}>
        <Stack
          direction={"row"}
          spacing={2}
          alignItems="center"
          justifyContent={"space-around"}
        >
          <Stack
            sx={{
              background: "rgba(255, 255, 255,0.4)",
              borderRadius: "10px",
              px: 2,
              py: 1,
            }}
            direction={"row"}
            spacing={1}
            alignItems="center"
          >
            <Input
              sx={{ width: "250px" }}
              placeholder="Search Web"
              disableUnderline
              value={product}
              onChange={(e) => setProduct(e.target.value)}
            />
            <Chip
              onClick={() => {
                window.open("https://amazon.in", "_blank");
              }}
              sx={{ borderRadius: "5px" }}
              label="Amazon.in"
            />
          </Stack>
          <Button
            type="submit"
            variant="contained"
            size="large"
            sx={{ borderRadius: "10px", px: 5 }}
            onClick={(e) => {
              e.preventDefault();
              handler();
            }}
          >
            Search
          </Button>
        </Stack>
      </Box>
    </form>
  );
};

export default SearchField;
