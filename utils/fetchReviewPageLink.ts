import * as cheerio from "cheerio";
import axios from "axios";

const fetchReviewPageLink = async (uri: string): Promise<string> => {
  const link = "https://www.amazon.in/" + uri;

  try {
    const response = await axios.get(link);

    const html = response.data;

    const $ = cheerio.load(html);

    const reviewLinkWrapper = "div#reviews-medley-footer";

    const resultUri = $(reviewLinkWrapper)
      .find(".a-link-emphasis.a-text-bold")
      .attr("href");

    if (resultUri) {
      const uriToAllReviews = "https://www.amazon.in" + resultUri;
      return uriToAllReviews;
    } else {
      throw new Error("Review link not found on the page");
    }
  } catch (e) {
    throw new Error("An error occurred: " + (e as Error).message);
  }
};

export default fetchReviewPageLink;
