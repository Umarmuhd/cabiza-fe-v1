import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProductRecoilStates } from "../../recoil";

const schema = yup.object().shape({
  price: yup.number().required("Product price is required"),
  min_price: yup.number(),
  max_price: yup.number(),
});

export const useProductPricing = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product,
}) => {
  const { productPricing, setProductPricing } = useCreateProductRecoilStates();

  const { price, user_priced } = product;

  const methods = useForm({
    mode: "onBlur",
    defaultValues: productPricing.price
      ? productPricing
      : { price, user_priced },
    resolver: yupResolver(schema),
  });

  const setValues = () => {
    const values = methods.getValues();
    setProductPricing(values);
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
