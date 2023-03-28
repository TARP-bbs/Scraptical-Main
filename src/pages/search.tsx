import Layout from "@/layout/Layout";
import { Alert, Box, Typography } from "@mui/material";
import { NextPage } from "next";
import SearchBar from "@/components/searchPage/SearchBar";
import React from "react";
import ProductCard from "@/components/searchPage/ProductCard";
import CardList from "@/components/searchPage/CardList";
import SkeletonList from "@/components/loading/SkeletonList";
import { useRecoilValue } from "recoil";
import {
  ProductError,
  ProductLoading,
  productShelves,
} from "../../world/atoms";

const Search: NextPage = () => {
  const loading = useRecoilValue(ProductLoading);
  const products = useRecoilValue(productShelves);
  const error = useRecoilValue(ProductError);

  return (
    <Layout>
      <SearchBar />
      {loading ? (
        <SkeletonList />
      ) : error ? (
        <Typography variant="h5" sx={{ textAlign: "center" }}>
          No Results Found
        </Typography>
      ) : products && products.length > 0 ? (
        <CardList />
      ) : (
        <Alert
          sx={{ mx: "auto", my: 3, width: "fit-content" }}
          severity="warning"
          variant="outlined"
        >
          No products found. Please give another product keyword(s)
        </Alert>
      )}
    </Layout>
  );
};

export default Search;
