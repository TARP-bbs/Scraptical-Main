import axios from "axios";
import * as cheerio from "cheerio";
import { NextApiRequest, NextApiResponse } from "next";
import { fetchProductSkeleton } from "../../../utils/fetchProducts";
import { createProductUri } from "../../../utils/productUri";

const handler = async (request: NextApiRequest, response: NextApiResponse) => {
  const { product } = request.query;

  const uri = createProductUri(product as string);

  try {
    const result = await fetchProductSkeleton(uri);
    console.log(result);

    return response.status(200).json(result);
  } catch (e: any) {
    console.error(e);
    return;
  }
};

export default handler;
