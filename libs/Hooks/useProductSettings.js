import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProductRecoilStates } from "../../recoil";

const schema = yup.object().shape({
  become_affiliate: yup.boolean(),
});

export const useProductSettings = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product,
}) => {
  const { productSettings, setProductSettings } =
    useCreateProductRecoilStates();

  const methods = useForm({
    mode: "onBlur",
    defaultValues: productSettings,
    resolver: yupResolver(schema),
  });

  const setValues = () => {
    const values = methods.getValues();

    setProductSettings(values);
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
