import { atom } from "recoil";
import { AtomKeys } from "../../atomKeys";

export const defaultProductSettingsState = {
  become_affiliate: null,
};

export const productSettingsState = atom({
  key: AtomKeys.CreateProduct_ProductSettings,
  default: defaultProductSettingsState,
});
