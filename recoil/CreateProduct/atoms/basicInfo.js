import { atom } from "recoil";
import { AtomKeys } from "../../atomKeys";

export const defaultBasicInfoState = {
  name: null,
  description: null,
  thumbnail: null,
  cover_image: null,
};

export const basicInfoState = atom({
  key: AtomKeys.CreateProduct_BasicInfo,
  default: defaultBasicInfoState,
});
