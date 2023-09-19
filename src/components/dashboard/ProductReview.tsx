import {
  Avatar,
  Button,
  Divider,
  Grid,
  Typography,
  Box,
  Stack,
} from "@mui/material";
import React, { useState } from "react";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import LearningBlock from "./LearningBlock";
import LearningBlockContainer from "./LearningBlockContainer";
import Keywords from "./Keywords";
import TabsContainer from "./TabsContainer";
import HighlightAltOutlinedIcon from "@mui/icons-material/HighlightAltOutlined";
import { TResultItem } from "../../../world/customTypes";
import { useRecoilValue } from "recoil";
import { sentimentalData } from "../../../world/atoms";

const ProductReview = ({
  data,
  index,
}: {
  data: TResultItem;
  index: number;
}) => {
  const completeData = useRecoilValue(sentimentalData);

  const [open, setOpen] = useState(false);
  return (
    <Box
      sx={{
        borderRadius: 0,
        border: "1px solid #adb5bd",
        p: 2,
        pb: 0,
        mb: 2,
        transition: "all 1s ease-in-out",
      }}
    >
      <Box sx={{ mb: 2 }}>
        <Stack
          sx={{ mb: 1 }}
          justifyContent="space-between"
          alignItems="center"
          direction="row"
        >
          <Stack direction="row" alignItems="flex-start" columnGap={1}>
            <Avatar
              sx={{
                width: 20,
                height: 20,
                background: "#495057",
              }}
              alt="harsh"
            />
            <Typography sx={{ color: "#495057" }} variant="body1">
              {data.name}
            </Typography>
          </Stack>
          {open ? (
            <Button
              endIcon={<KeyboardArrowUpIcon />}
              onClick={() => {
                setOpen((open) => !open);
              }}
            >
              close
            </Button>
          ) : (
            <Button
              endIcon={<KeyboardArrowDownIcon />}
              onClick={() => {
                setOpen((open) => !open);
              }}
            >
              expand
            </Button>
          )}
        </Stack>
        <Typography gutterBottom variant="h6">
          {data.reviewTitle}
        </Typography>
      </Box>
      {open && (
        <>
          <LearningBlockContainer data={completeData.fetchAnalysis[index]} />
          <TabsContainer data={completeData.fetchAnalysis[index]} />
        </>
      )}
    </Box>
  );
};

export default ProductReview;
