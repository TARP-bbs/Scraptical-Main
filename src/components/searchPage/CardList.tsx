import { Divider } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRecoilValue } from "recoil";
import { productShelves } from "../../../world/atoms";
import SkeletonCard from "../loading/SkeletonCard";
import ProductCard from "./ProductCard";
const CardList = () => {
  const results = useRecoilValue(productShelves);
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        my: 3,
        justifyContent: "space-evenly",
      }}
    >
      {results.map((product) => {
        return <ProductCard key={product.id} product={product} />;
      })}
    </Box>
  );
};

export default CardList;
