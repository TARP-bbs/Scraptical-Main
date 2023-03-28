import { Button, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";

const Description = ({ review }: { review: string }) => {
  const [isReadMore, setIsReadMore] = useState(true);
  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };
  return (
    <Box sx={{ my: 2 }}>
      <Typography gutterBottom variant="body2">
        Review
      </Typography>
      <Stack
        sx={{ background: "rgba(255,255,255,0.6)", borderRadius: "4px", p: 2 }}
        direction="row"
        flexWrap="wrap"
      >
        <Typography sx={{ fontSize: "0.75em" }} variant="body2">
          {isReadMore ? review.slice(0, 150) : review}
        </Typography>
        {review.length > 150 && (
          <Button size="small" sx={{}} onClick={toggleReadMore}>
            {isReadMore ? "...read more" : " show less"}
          </Button>
        )}
      </Stack>
    </Box>
  );
};

export default Description;
