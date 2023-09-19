import axios from "axios";
import * as cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchProductSkeleton } from "../../../utils/fetchProducts";
import { createProductUri } from "../../../utils/productUri";
import fetchReviewPageLink from "../../../utils/fetchReviewPageLink";
import fetchReviews from "../../../utils/fetchReviews";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const uri = await fetchReviews(
    "https://www.amazon.in/Apple-iPhone-14-128GB-Blue/product-reviews/B0BDK62PDX/ref=cm_cr_dp_d_show_all_btm?ie=UTF8&reviewerType=all_reviews"
  );

  try {
    return response.status(200).json(uri);
  } catch (e: any) {
    console.error(e);
    return;
  }
};

export default handler;
