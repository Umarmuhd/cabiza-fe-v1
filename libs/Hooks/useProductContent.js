import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProductRecoilStates } from "../../recoil";

const schema = yup.object().shape({
  url: yup.string().required("Product url is required"),
  file: yup
    .mixed()
    .test("required", "You need to provide a file", (value) => {
      return value && value.length;
    })
    .test("fileSize", "The file is too large", (value, context) => {
      return value && value[0] && value[0].size <= 2000000;
    })
    .test("type", "We only support jpeg/png", function (value) {
      return (
        value &&
        value[0] &&
        (value[0].type === "image/jpeg" || value[0].type === "image/png")
      );
    }),
});

export const useProductContent = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product,
}) => {
  const { productContent, setProductContent } = useCreateProductRecoilStates();

  const { file, url } = product;

  const methods = useForm({
    mode: "onBlur",
    defaultValues:
      !productContent.file && !productContent.url
        ? { file: file ?? null, url }
        : productContent,
    resolver: yupResolver(schema),
  });

  const setValues = () => {
    const values = methods.getValues();

    setProductContent(values);
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
