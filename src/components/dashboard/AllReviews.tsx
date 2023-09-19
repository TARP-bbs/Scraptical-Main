import { Typography, Box } from "@mui/material";
import React from "react";
import { useRecoilValue } from "recoil";
import { sentimentalData } from "../../../world/atoms";
import { TResult, TResultItem } from "../../../world/customTypes";
import ProductReview from "./ProductReview";

const AllReviews = () => {
  const result = useRecoilValue(sentimentalData);

  return (
    <Box sx={{ p: 4, height: "100vh", overflowY: "auto" }}>
      <Box>
        <Typography fontWeight={700} variant="h6">
          Product Reviews
        </Typography>
        <Box sx={{ mt: 2 }}>
          {result.result?.map((el: TResultItem, idx: number) => {
            return <ProductReview index={idx} data={el} key={el.id} />;
          })}
        </Box>
      </Box>
    </Box>
  );
};

export default AllReviews;
