export const createProductUri = (userQuery: string) => {
  const uri =
    "https://www.amazon.in/s?k=samsung+s20&crid=2FCSNHJXSJPUA&sprefix=samsung+s20%2Caps%2C249&ref=nb_sb_noss_1";

  const prefixURI = "https://www.amazon.in/s?k=";
  const suffixURI = "&crid=2FCSNHJXSJPUA";

  const target = userQuery.replace(" ", "+");

  return prefixURI + target + suffixURI;
};
