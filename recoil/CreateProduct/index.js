import { useRecoilState } from "recoil";
import { basicInfoState } from "./atoms";

export const useCreateProductRecoilStates = () => {
  const [basicInfo, setBasicInfo] = useRecoilState(basicInfoState);

  return {
    basicInfo,
    // carrer,
    // contactInfo,
    // selfIntroduction,

    setBasicInfo,
    // setCarrer,
    // setContactInfo,
    // setSelfIntroduction
  };
};
