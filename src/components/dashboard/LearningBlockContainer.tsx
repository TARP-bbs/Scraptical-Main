import { Box, Divider, Grid, Typography } from "@mui/material";
import React from "react";
import Description from "./Description";
import LearningBlock from "./LearningBlock";
import ThumbUpAltIcon from "@mui/icons-material/ThumbUpAlt";
import ThumbDownAltIcon from "@mui/icons-material/ThumbDownAlt";
import ThumbsUpDownIcon from "@mui/icons-material/ThumbsUpDown";
import TimelineIcon from "@mui/icons-material/Timeline";
import { TFetch } from "../../../world/customTypes";

const LearningBlockContainer = ({ data }: { data: any }) => {
  return (
    <Box sx={{ mb: 2 }}>
      <Typography variant="h6">Our Learnings</Typography>
      <Typography sx={{ color: "#495057" }} variant="body2">
        Here&apos;s what has our Intelligent System learned
      </Typography>
      <Divider sx={{ mt: 1 }} />
      <Description review={data.review} />
      <Box sx={{ my: 3 }}>
        <Grid
          alignItems={"center"}
          justifyContent="space-between"
          rowSpacing={4}
          container
        >
          <Grid xs={6} item>
            <LearningBlock
              background="#a3b18a"
              title="Positive"
              value={data?.polarity?.positive}
            >
              <ThumbUpAltIcon sx={{ color: "#386641" }} />
            </LearningBlock>
          </Grid>
          <Grid xs={6} item>
            <LearningBlock
              background="#ff758f"
              title="Negative"
              value={data?.polarity?.negative}
            >
              <ThumbDownAltIcon sx={{ color: "#bf0603" }} />
            </LearningBlock>
          </Grid>
          <Grid xs={6} item>
            <LearningBlock
              background="#90e0ef"
              title="Neutral"
              value={data?.polarity?.neutral}
            >
              <ThumbsUpDownIcon sx={{ color: "#00509d" }} />
            </LearningBlock>
          </Grid>
          <Grid xs={6} item>
            <LearningBlock
              background="#fff2b2"
              title="Compound"
              value={data?.polarity?.compound}
            >
              <TimelineIcon sx={{ color: "#cca000" }} />
            </LearningBlock>
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default LearningBlockContainer;
