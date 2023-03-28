import * as cheerio from "cheerio";
import axios from "axios";
import fetchReviewPageLink from "./fetchReviewPageLink";
import { TResultItem } from "../world/customTypes";
import { nanoid } from "nanoid";

const fetchReviews = async (uriToAllReviews: string) => {
  try {
    const reviewsResponse = await axios.get(uriToAllReviews);

    const docHTML = reviewsResponse.data;

    const $ = cheerio.load(docHTML);

    const reviewWrapper = "div.a-section.review.aok-relative";

    const reviews = [] as TResultItem[];

    $(reviewWrapper).each((_id, match) => {
      const shelf = $(match);

      const reviewTitle = shelf
        .find(".a-size-base.review-title.a-text-bold")
        .text()
        .trim()
        .replaceAll("\n", "");

      const regexPattern = /\s+/g;

      const review = shelf
        .find("span.a-size-base.review-text.review-text-content")
        .find("span")
        .text()
        .trim()
        .replaceAll(regexPattern, " ");

      const name = shelf.find("span.a-profile-name").text();

      const reviewDate = shelf
        .find("span.a-size-base.a-color-secondary.review-date")
        .text();

      const verifiedPurchase =
        shelf.find(".a-size-mini.a-color-state.a-text-bold").text() !== "";

      console.log(verifiedPurchase);

      reviews.push({
        id: nanoid(),
        name,
        reviewTitle,
        review: review as string,
        date: reviewDate,
        verifiedPurchase,
      });
    });

    return reviews;
  } catch (e: any) {
    return "an error occured";
  }
};

export default fetchReviews;
