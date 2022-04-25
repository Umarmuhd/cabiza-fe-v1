import { useRecoilState } from "recoil";
import {
  basicInfoState,
  productContentState,
  productPricingState,
} from "./atoms";
import { productInfoState, productSettingsState } from "./atoms";

export const useCreateProductRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState);
  const [productInfo, setProductInfo] = useRecoilState(productInfoState);
  const [productContent, setProductContent] =
    useRecoilState(productContentState);
  const [productPricing, setProductPricing] =
    useRecoilState(productPricingState);
  const [productSettings, setProductSettings] =
    useRecoilState(productSettingsState);

  return {
    basicInfo,
    productInfo,
    productContent,
    productPricing,
    productSettings,

    setBasicInfo,
    setProductInfo,
    setProductContent,
    setProductPricing,
    setProductSettings,
  };
};
