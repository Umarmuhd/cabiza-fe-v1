import { atom } from "recoil";
import { AtomKeys } from "../../atomKeys";

export const defaultProductInfoState = {
  call_to_action: null,
  summary: null,
  additional_details: null,
};

export const productInfoState = atom({
  key: AtomKeys.CreateProduct_ProductInfo,
  default: defaultProductInfoState,
});
