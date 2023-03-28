import * as cheerio from "cheerio";
import axios from "axios";

const fetchReviewPageLink = async (uri: string): Promise<string> => {
  const link = "https://www.amazon.in" + uri;

  try {
    const response = await axios.get(link);

    const html = response.data;

    const $ = cheerio.load(html);

    const reviewLinkWrapper = "div#reviews-medley-footer";

    const resultUri = $(reviewLinkWrapper)
      .find(".a-link-emphasis.a-text-bold")
      .attr("href");

    const uriToAllReviews = "https://amazon.in" + resultUri;

    return uriToAllReviews;
  } catch (e: any) {
    throw new Error("error occured");
  }
};

export default fetchReviewPageLink;
