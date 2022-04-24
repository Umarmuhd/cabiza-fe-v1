import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useCreateProductRecoilStates } from "../../recoil";

const schema = yup.object().shape({
  name: yup.string().required("Product name is required"),
  description: yup.string().required("Product description is required"),
  thumbnail: yup
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
  cover_image: yup
    .mixed()
    // .test("required", "You need to provide a file", (value) => {
    //   return value && value.length;
    // })
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

export const useProductBasics = ({
  stepIndex,
  stepErrors,
  setStepErrors,
  product,
}) => {
  const { basicInfo, setBasicInfo } = useCreateProductRecoilStates();

  console.log(product);

  const { name, description, thumbnail, cover_image } = product;

  const methods = useForm({
    mode: "onBlur",
    defaultValues: basicInfo.name
      ? basicInfo
      : { name, description, thumbnail: thumbnail ?? null, cover_image },
    resolver: yupResolver(schema),
  });

  const setValues = () => {
    const values = methods.getValues();
    setBasicInfo(values);
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
