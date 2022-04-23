import { useRecoilState } from "recoil";
import { basicInfoState, productContentState } from "./atoms";
import { productInfoState } from "./atoms";

export const useCreateProductRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState);
  const [productInfo, setProductInfo] = useRecoilState(productInfoState);
  const [productContent, setProductContent] =
    useRecoilState(productContentState);

  return {
    basicInfo,
    productInfo,
    productContent,

    setBasicInfo,
    setProductInfo,
    setProductContent,
  };
};
