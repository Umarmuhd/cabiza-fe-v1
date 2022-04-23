import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProductRecoilStates } from "../../../../../recoil";

const schema = yup.object().shape({
  call_to_action: yup.string().required("Product call to action is required"),
  summary: yup.string().required("Product summary is required"),
  //   additional_details: yup.string().required("Product additional details is required"),
});

export const useProductInfo = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product,
}) => {
  const { productInfo, setProductInfo } = useCreateProductRecoilStates();

  const { call_to_action, summary } = product;

  const methods = useForm({
    mode: "onBlur",
    defaultValues:
      productInfo.call_to_action && productInfo.summary
        ? productInfo
        : { call_to_action, summary },
    resolver: yupResolver(schema),
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductInfo(values);
  };

  React.useEffect(() => {
    setStepErrors(
      stepErrors.map((error, index) => {
        return index === stepIndex ? !methods.formState.isValid : error;
      })
    );
  }, [methods.formState.isValid]);

  return {
    methods,
    setValues,
  };
};
