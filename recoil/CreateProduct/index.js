import { useRecoilState } from "recoil";
import {
  basicInfoState,
  productContentState,
  productPricingState,
} from "./atoms";
import { productInfoState } from "./atoms";

export const useCreateProductRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState);
  const [productInfo, setProductInfo] = useRecoilState(productInfoState);
  const [productContent, setProductContent] =
    useRecoilState(productContentState);
  const [productPricing, setProductPricing] =
    useRecoilState(productPricingState);

  return {
    basicInfo,
    productInfo,
    productContent,
    productPricing,

    setBasicInfo,
    setProductInfo,
    setProductContent,
    setProductPricing,
  };
};
