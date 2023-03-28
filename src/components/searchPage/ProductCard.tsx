import { Avatar, Button, Chip, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import Image from "next/image";
import React from "react";
import { productType } from "../../../utils/fetchProducts";
import LaunchIcon from "@mui/icons-material/Launch";
import MoodBadOutlinedIcon from "@mui/icons-material/MoodBadOutlined";
import { useRouter } from "next/router";
import { useRecoilState, useSetRecoilState } from "recoil";
import { routerLink } from "../../../world/atoms";

const ProductCard = ({ product }: { product: productType }) => {
  const router = useRouter();
  const setUri = useSetRecoilState(routerLink);
  return (
    <Box
      sx={{
        width: "50%",
        height: "50vh",
        p: 5,
        borderBottom: "4px dotted #d9d9d9",
        "&:hover": {
          background: "rgba(183, 183, 164,0.2)",
        },
        display: "flex",
        alignItems: "stretch",
        gap: "2em",
        overflow: "hidden",
        cursor: "pointer",
        transition: "all .25s linear",
        overflowY: "auto",
      }}
    >
      <Box
        sx={{
          minWidth: "200px",
          maxHeight: "250px",
          borderRadius: "8px",
          background: "rgba(253, 255, 252, 1)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
        }}
      >
        <Image
          src={product.image}
          alt={product.title}
          width={125}
          height={125}
          style={{
            objectFit: "contain",
          }}
        />
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
          justifyContent: "start",
        }}
      >
        <Typography gutterBottom variant="body1">
          {product.title}
        </Typography>
        <Stack direction={"row"} spacing={1} alignItems="baseline">
          <Typography sx={{ color: "#495057" }} gutterBottom variant="h6">
            Price:
          </Typography>
          <Typography fontWeight={"bold"} gutterBottom variant="h5">
            {product.symbolPrice} {product.wholePrice}
            <sup>{product.fractionalPrice}</sup>
          </Typography>
        </Stack>

        <Stack direction={"row"} spacing={1} alignItems="baseline">
          <Chip label={product.rating} />
          <Typography sx={{ color: "#495057" }} gutterBottom variant="body1">
            / User Reviews
          </Typography>
        </Stack>

        <Stack
          sx={{ mt: 2 }}
          direction={"column"}
          spacing={1}
          alignItems="flex-start"
        >
          <Button
            onClick={() => {
              window.open("https://amazon.in" + product.uri, "_blank");
            }}
            endIcon={<LaunchIcon />}
            variant="outlined"
          >
            Product Page
          </Button>
          <Button
            onClick={() => {
              setUri(product.uri);
              router.push(`${product.uri}`);
            }}
            endIcon={<MoodBadOutlinedIcon />}
            variant="contained"
          >
            User Ratings and Mood
          </Button>
        </Stack>
      </Box>
    </Box>
  );
};

export default ProductCard;
