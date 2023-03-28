import { atom } from "recoil";
import { productType } from "../utils/fetchProducts";
export type { productType } from "../utils/fetchProducts";

export const productName = atom({
  key: "productName",
  default: "",
});

export const productShelves = atom({
  key: "productShelves",
  default: [] as productType[],
});

export const ProductLoading = atom({
  key: "loading",
  default: false,
});

export const routerLink = atom({
  key: "routerLink",
  default: "",
});

export const ProductError = atom({
  key: "error",
  default: false,
});

export const sentimentalData = atom({
  key: "sentimentalData",
  default: {} as any,
});
