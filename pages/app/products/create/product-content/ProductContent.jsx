import React, { useState } from "react";
import Link from "next/link";
import EditProductStepView from "@/components/Products/EditProductStepView";
import { useProductContent } from "@/libs/Hooks/useProductContent";

export default function ProductContentStep({ ...props }) {
  const {
    onClickPrevious,
    onClickNext,
    stepErrors,
    stepIndex,
    setStepErrors,
    onClickConfirmButton,
    product,
  } = props;

  const { methods, setValues } = useProductContent({
    stepIndex,
    stepErrors,
    setStepErrors,
    product,
  });

  const {
    watch,
    register,
    formState: { errors },
  } = methods;

  console.log(typeof watch("file"));

  return (
    <React.Fragment>
      <EditProductStepView
        {...props}
        onClickPrevious={() => {
          onClickPrevious && onClickPrevious();
          setValues();
        }}
        onClickNext={() => {
          onClickNext && onClickNext();
          setValues();
        }}
        onClickMenuItem={setValues}
        onClickConfirmButton={() => {
          onClickConfirmButton();
          setValues();
        }}
      >
        <form className="mt-8" id="form" onSubmit={(e) => e.preventDefault()}>
          <div className="flex flex-col">
            <p className="leading-4 font-medium text-secondary_ink_darkest mb-3">
              Files
            </p>
            <div className="border border-dashed border-secondary_sky_base p-4 rounded-lg">
              <input
                type="file"
                name="add_files"
                id="add_files"
                className="hidden"
                {...register("file", { required: true })}
              />
              <label htmlFor="add_files" className="w-1/2 mx-auto text-center">
                <h3 className="text-secondary text-base font-medium">
                  {methods.getValues().file ??
                  (watch("file") !== undefined && watch("file")?.length > 0)
                    ? typeof watch("file") === "string"
                      ? watch("file")
                      : watch("file")[0].name
                    : "Add Files"}
                </h3>
                <p className="mt-4 secondary_brand_light">
                  Upload your product files here
                </p>
                <span className="flex w-[max-content] mx-auto py-2 px-4 mt-6 rounded-4xl bg-primary_brand_lightest text-primary">
                  <p className="mr-2 text-primary font-medium">+</p>
                  Upload Files
                </span>
              </label>
            </div>
            {errors.file?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product file is required
              </p>
            )}
          </div>

          <div className="flex flex-col mt-5">
            <label
              htmlFor="redirecting_url"
              className="leading-4 font-medium text-secondary_ink_darkest mb-3"
            >
              Redirect URL (optional){" "}
            </label>
            <div className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none flex items-center justify-between">
              <input
                type="url"
                name="product_url"
                id="product_url"
                placeholder="Redirect URL after purchase"
                className=" outline-none w-[90%]"
                {...register("url", { required: false })}
                autoComplete="off"
              />
              <Link href="/products">
                <button className="border border-solid border-grey_20 px-4 rounded text-grey_20 py-2">
                  Test
                </button>
              </Link>
            </div>
          </div>
        </form>
      </EditProductStepView>
    </React.Fragment>
  );
}
