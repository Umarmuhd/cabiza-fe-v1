import { atom } from "recoil";
import { AtomKeys } from "../../atomKeys";

export const defaultProductPricingState = {
  price: null,
  user_priced: false,
  min_price: null,
  max_price: null,
};

export const productPricingState = atom({
  key: AtomKeys.CreateProduct_ProductPricing,
  default: defaultProductPricingState,
});
