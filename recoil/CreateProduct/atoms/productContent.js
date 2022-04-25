import { atom } from "recoil";
import { AtomKeys } from "../../atomKeys";

export const defaultProductContentState = {
  url: null,
  file: null,
};

export const productContentState = atom({
  key: AtomKeys.CreateProduct_ProductContent,
  default: defaultProductContentState,
  dangerouslyAllowMutability: true,
});
