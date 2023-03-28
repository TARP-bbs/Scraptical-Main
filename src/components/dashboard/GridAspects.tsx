import { Button, Chip, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { useRecoilValue } from "recoil";
import { sentimentalData } from "../../../world/atoms";

const GridAspects = () => {
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

  const { posFrac, negFrac, neuFrac } = calculateImpactWeighted(
    result.fetchAnalysis
  );

  return (
    <Grid spacing={2} container>
      <Grid item xs={12}>
        <Box
          sx={{
            p: 4,
            width: "100%",
            height: "180px",
            background:
              "linear-gradient(90deg, hsla(31, 51%, 92%, 1) 0%, hsla(330, 53%, 77%, 1) 100%)",
            position: "relative",
          }}
        >
          <Chip size="medium" sx={{ fontWeight: "bold" }} label="Positivity" />
          <Typography sx={{ mt: 3 }} fontWeight={900} variant="h2">
            {posFrac}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 3,
            width: "100%",
            height: "180px",
            background:
              "linear-gradient(180deg, hsla(31, 51%, 92%, 1) 0%, hsla(330, 53%, 77%, 1) 100%);",
            position: "relative",
            overflowX: "auto",
          }}
        >
          <Chip size="medium" sx={{ fontWeight: "bold" }} label="Negativity" />
          <Typography fontWeight={900} variant="h3" sx={{ mt: 3 }}>
            {negFrac}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={6}>
        <Box
          sx={{
            p: 3,
            width: "100%",
            height: "180px",
            background:
              "linear-gradient(180deg, hsla(31, 51%, 92%, 1) 0%, hsla(330, 53%, 77%, 1) 100%);",
            position: "relative",
          }}
        >
          <Chip size="medium" sx={{ fontWeight: "bold" }} label="Neutrality" />
          <Typography fontWeight={900} variant="h3" sx={{ mt: 3 }}>
            {neuFrac}
          </Typography>
        </Box>
      </Grid>
    </Grid>
  );
};
export default GridAspects;
