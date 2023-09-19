import { Avatar, Divider, Stack, Typography, Box } from "@mui/material";

import React from "react";
import { useRecoilValue } from "recoil";
import { sentimentalData } from "../../../world/atoms";
import GridAspects from "./GridAspects";
import SupportAgentIcon from "@mui/icons-material/SupportAgent";
import { TFetch } from "../../../world/customTypes";

const POSITIVE_SENT = "This Product Will Make You Want to High-Five Strangers!";
const NEGATIVE_SENT =
  "This Product is So Bad, You'll Want to Write an Angry Letter to the Manufacturer!";
const NEUTRAL_SENT =
  "Is This Product Good, Bad, or Just Meh? Reviews Will Leave You Feeling Indifferent!";

const Overview = () => {
  const result = useRecoilValue(sentimentalData);

  function calculateImpactWeighted(reviews: any) {
    let positiveCount = 0;
    let negativeCount = 0;
    let neutralCount = 0;

    for (let i = 0; i < reviews.length; i++) {
      let posVal = reviews[i].polarity.positive;
      let negVal = reviews[i].polarity.negative;
      let neuVal = reviews[i].polarity.neutral;

      if (posVal > negVal && posVal > neuVal) {
        positiveCount += posVal;
      } else if (negVal > posVal && negVal > neuVal) {
        negativeCount += negVal;
      } else {
        neutralCount += neuVal;
      }
    }

    let totalSum = positiveCount + negativeCount + neutralCount;

    if (totalSum === 0) {
      return { posFrac: 0, negFrac: 0, neuFrac: 0 };
    }

    let posFrac = positiveCount / totalSum;
    let negFrac = negativeCount / totalSum;
    let neuFrac = neutralCount / totalSum;

    return {
      posFrac: posFrac.toFixed(3),
      negFrac: negFrac.toFixed(3),
      neuFrac: neuFrac.toFixed(3),
    };
  }

  const review = () => {
    const { posFrac, negFrac, neuFrac } = calculateImpactWeighted(
      result.fetchAnalysis
    );

    if (posFrac > negFrac && posFrac > neuFrac) return POSITIVE_SENT;
    if (negFrac > posFrac && negFrac > neuFrac) return NEGATIVE_SENT;
    else return NEUTRAL_SENT;
  };
  return (
    <Box
      sx={{
        width: "100%",
        background: "rgba(255,255,255,0.6)",
        height: "95%",
        overflowY: "auto",
        pt: 4,
        pb: 2,
        px: 6,
      }}
    >
      <Stack
        direction={"row"}
        alignItems="center"
        justifyContent={"space-between"}
        sx={{ mb: 4 }}
      >
        <Stack>
          <Typography fontWeight={"bold"} variant="h6">
            Product Sentimental Analysis
          </Typography>
          <Typography sx={{ color: "#495057" }} variant="body2">
            few top reviews on amazon.in
          </Typography>
        </Stack>
        <Avatar sx={{ background: "#000" }}>
          <SupportAgentIcon />
        </Avatar>
      </Stack>
      <Box sx={{ mb: 2 }}>
        <Typography fontWeight={900} variant="h5">
          {review()}
        </Typography>
      </Box>
      <Divider />
      <Box sx={{ mt: 2 }}>
        <GridAspects />
      </Box>
    </Box>
  );
};

export default Overview;
