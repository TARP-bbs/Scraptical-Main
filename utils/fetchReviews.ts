import * as cheerio from "cheerio";
import axios from "axios";
import { TResultItem } from "../world/customTypes";
import { nanoid } from "nanoid";

const fetchReviews = async (uriToAllReviews: string) => {
  try {
    const reviewsResponse = await axios.get(uriToAllReviews);

    const docHTML = reviewsResponse.data;

    const $ = cheerio.load(docHTML);

    const reviewWrapper = "div.review";

    const reviews = [] as TResultItem[];

    $(reviewWrapper).each((_id, match) => {
      const shelf = $(match);

      const reviewTitle = shelf
        .find(
          "a.a-size-base.a-link-normal.review-title.a-color-base.review-title-content.a-text-bold"
        )
        .find("span")
        .last()
        .text()
        .trim()
        .replace(/\n/g, "")
        .replace(/\s+/g, " ");

      const review = shelf
        .find("span.review-text-content")
        .text()
        .trim()
        .replace(/\n/g, "")
        .replace(/\s+/g, " ");

      const name = shelf.find("span.a-profile-name").text();

      const reviewDate = shelf.find("span.review-date").text();

      const verifiedPurchase =
        shelf.find("span.a-declarative[data-action='cr-popup']").length > 0;

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
  } catch (e) {
    console.error("An error occurred:", e);
    return [];
  }
};

export default fetchReviews;
