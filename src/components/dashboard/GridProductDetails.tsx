import { Button, Chip, Divider, Stack, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import LaunchIcon from "@mui/icons-material/Launch";
import { useRecoilValue } from "recoil";
import { productShelves, routerLink } from "../../../world/atoms";
import Image from "next/image";
import { useRouter } from "next/router";

const GridProductDetails = () => {
  const router = useRouter();
  const productURI = useRecoilValue(routerLink);
  const product = useRecoilValue(productShelves).find(
    (el) => el.uri === productURI
  );

  return product ? (
    <Box alignContent={"flex-start"} sx={{ p: 3 }}>
      <Typography variant="h6" fontWeight={"bold"}>
        Scraptical.
      </Typography>
      <Box
        sx={{
          width: "150px",
          height: "150px",
          borderRadius: "8px",
          background: "rgba(253, 255, 252, 1)",
          position: "relative",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          boxShadow: "rgba(0, 0, 0, 0.08) 0px 4px 12px",
          mt: 3,
          mb: 2,
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
      <Typography gutterBottom variant="body1" fontWeight={"bold"}>
        {product.title}
      </Typography>
      <Typography gutterBottom variant="h5" fontWeight={"bold"}>
        {product.symbolPrice} {product.wholePrice}
        {product.fractionalPrice !== "" && "." + product.fractionalPrice}
      </Typography>
      <Stack direction={"row"} spacing={2} alignItems="center" sx={{ my: 1 }}>
        <Typography variant="body1">ratings: </Typography>
        <Chip sx={{ borderRadius: "0" }} label={product.rating} />
      </Stack>
      <Stack sx={{ mt: 2 }} alignItems={"flex-start"} spacing={1}>
        <Button
          onClick={() => {
            window.open("https://amazon.in" + product.uri, "_blank");
          }}
          fullWidth
          endIcon={<LaunchIcon />}
          size="small"
          variant="contained"
        >
          Product Page
        </Button>
        <Button
          onClick={() => {
            router.push("/search");
          }}
          size="small"
          variant="contained"
          fullWidth
        >
          Search Page
        </Button>
      </Stack>
    </Box>
  ) : null;
};

export default GridProductDetails;
