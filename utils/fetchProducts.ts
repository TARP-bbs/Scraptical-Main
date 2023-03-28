import axios from "axios";
import * as cheerio from "cheerio";
import { nanoid } from "nanoid";

const productClass =
  "div.s-card-container.s-overflow-hidden.aok-relative.puis-include-content-margin.puis.s-latency-cf-section.s-card-border";

const productTitle = "span.a-color-base.a-text-normal";

const productImage = "div.a-section.aok-relative";

const priceContainerClass = "div.a-row.a-size-base.a-color-base";

const productPageURi =
  "a.a-link-normal.s-underline-text.s-underline-link-text.s-link-style.a-text-normal";

const ratingClass = ".a-section.a-spacing-none.a-spacing-top-micro";

export type productType = {
  id: string;
  title: string;
  image: string;
  uri: string;
  wholePrice: string;
  fractionalPrice: string;
  symbolPrice: string;
  rating: string;
};

export const fetchProductSkeleton = async (uri: string) => {
  try {
    const response = await axios.get(uri);

    const html = response.data;

    const $ = cheerio.load(html);
    const shelves = [] as productType[];

    $(productClass).each((_idx, element) => {
      const shelf = $(element);

      const title = shelf.find(productTitle).text();

      const image = shelf.find(productImage).find("img").attr("src") as string;

      const uri = shelf.find(productPageURi).attr("href") as string;

      const wholePrice = shelf
        .find(priceContainerClass)
        .find(".a-price-whole")
        .text();

      const fractionalPrice = shelf
        .find(priceContainerClass)
        .find(".a-price-fraction")
        .text();

      const symbolPrice = shelf
        .find(priceContainerClass)
        .find(".a-price-symbol")
        .text();

      const rating = shelf
        .find(ratingClass)
        .find(".a-row.a-size-small")
        .find("span.a-size-base")
        .text()
        .replace("(", " (");

      shelves.push({
        id: nanoid(),
        title,
        image,
        uri,
        wholePrice,
        fractionalPrice,
        symbolPrice,
        rating,
      });
    });

    return shelves;
  } catch (e: any) {
    return new Error(e);
  }
};
