// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import fetchReviewPageLink from "../../../utils/fetchReviewPageLink";
import fetchReviews from "../../../utils/fetchReviews";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  const { uri } = req.body;
  try {
    const productPageURi = await fetchReviewPageLink(uri as string);
    const result = await fetchReviews(productPageURi);

    if (result === "an error occured") {
      throw new Error();
    }

    const reviews = result.map((el) => {
      return el.review;
    });

    const fetchResponse = await fetch("http://127.0.0.1:8000/results", {
      method: "POST",
      body: JSON.stringify({
        reviews: reviews,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const analysis = await fetchResponse.json();

    return res.status(200).json({
      result,
      error: false,
      fetchAnalysis: analysis,
    });
  } catch (e: any) {
    return res.status(404).json({ error: true, message: e.message });
  }
}
