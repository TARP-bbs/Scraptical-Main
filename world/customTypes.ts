export type TResult = Array<TResultItem>;

export type TResultItem = {
  id: string;
  name: string;
  reviewTitle: string;
  review: string;
  date: string;
  verifiedPurchase: boolean;
};

export type TFetch = Array<{
  review: string;
  polarity: any;
  entities: any;
  polarity_sentence: Array<any>;
  keywords: string[];
}>;

export type SentimentalAnalysisType = {
  result: TResult;
  error: boolean;
  fetchAnalysis: TFetch;
};

export type ErrorSentimentType = {
  error: boolean;
  message: string;
};
