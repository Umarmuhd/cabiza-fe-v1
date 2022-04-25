import React from "react";
import Image from "next/image";
import EditProductStepView from "@/components/Products/EditProductStepView";
import { useProductBasics } from "@/libs/Hooks/useProductBasics";
import TextFormat from "@/components/TextFormat";

const BasicProductStep = ({ ...props }) => {
  const {
    onClickPrevious,
    onClickNext,
    stepErrors,
    stepIndex,
    setStepErrors,
    onClickConfirmButton,
    product,
  } = props;

  const { methods, setValues } = useProductBasics({
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

  console.log(methods.getValues());

  console.log(errors);

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
        <form className="mt-8" id="form">
          <div className="flex flex-col">
            <label
              htmlFor="product_name"
              className="leading-4 font-medium text-secondary_ink_darkest mb-3"
            >
              Product Name
            </label>
            <input
              type="text"
              id="product_name"
              name="product_name"
              placeholder="Enter your product name"
              className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
              {...register("name", { required: true })}
              autoComplete="off"
            />
            {errors.name?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product name is required
              </p>
            )}
          </div>

          <div className="flex flex-col mt-6 relative">
            <label
              htmlFor="product_description"
              className="leading-4 font-medium text-secondary_ink_darkest mb-3"
            >
              Description
            </label>
            <TextFormat />
            <input
              type="text"
              name="product_desc"
              id="product_desc"
              placeholder="Product Description"
              className="px-4 py-3 pd-12 h-[5rem] w-[100%] outline-none border border-solid border-sky_light rounded-b-lg"
              {...register("description", { required: true })}
              autoComplete="off"
            />
            {errors.description?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product description is required
              </p>
            )}
          </div>

          <div className="flex flex-col mt-6">
            <label
              htmlFor="product_url"
              className="leading-4 font-medium text-secondary_ink_darkest mb-3"
            >
              URL
            </label>
            <input
              type="url"
              name="product_url"
              id="product_url"
              placeholder="ukpejacob.cabiza.com/p/aireu2"
              className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
              disabled={true}
              defaultValue={`${product?.user.username}.cabiza.com/products/${product?.product_id}`}
            />
          </div>

          <div className="flex flex-col mt-6">
            <p className="leading-4 font-medium text-secondary_ink_darkest mb-3">
              Product Thumbnail
            </p>

            <input
              type="file"
              name="product_file"
              id="product_file"
              className="hidden"
              {...register("thumbnail", { required: true })}
            />
            <label htmlFor="product_file" className="">
              <Image
                className="mt-2"
                src={
                  methods.getValues().thumbnail ??
                  (watch("thumbnail") !== undefined &&
                    watch("thumbnail")?.length > 0)
                    ? typeof watch("thumbnail") === "string"
                      ? watch("thumbnail")
                      : window?.URL?.createObjectURL(watch("thumbnail")[0])
                    : "/images/thumbnail.png"
                }
                alt="..."
                width={160}
                height={160}
              />
            </label>

            <p className="mt-3 text-secondary_brand_light w-[70%]">
              This image will appear in cabiza library, discover and profile
              pages. Requirement: square, atleast 600px by 600px, JPG, SVG, PNG,
              GIF format.
            </p>

            {errors.description?.type === "required" && (
              <p className="text-left text-red-600 text-xs mt-1">
                Product thumbnail is required
              </p>
            )}
          </div>

          <div className="flex flex-col mt-6">
            <label
              htmlFor="product_cover"
              className="leading-4 font-medium text-secondary_ink_darkest mb-3"
            >
              Product Cover
            </label>
            <input
              type="file"
              name="product_cover"
              id="product_cover"
              className="mt-2 border border-solid border-sky_light p-4 rounded-lg"
              {...register("cover_image", {})}
              placeholder={product?.cover_image ?? "Add a cover image"}
            />
            <p className="mt-3 text-secondary_sky_dark w-[70%]">
              Image or Video, Requirements: 1280x720px and 72 DPI(dots per inch)
            </p>
          </div>
        </form>
      </EditProductStepView>
    </React.Fragment>
  );
};

export default BasicProductStep;
