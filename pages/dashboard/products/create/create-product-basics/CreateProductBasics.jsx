import React, { useEffect, useState } from "react";
import { GrList } from "react-icons/gr";
import { BiStrikethrough, BiLinkAlt, BiImage } from "react-icons/bi";
import { BsCode, BsTypeItalic } from "react-icons/bs";
import { CgFormatUppercase } from "react-icons/cg";
import {
  RiListOrdered,
  RiDoubleQuotesL,
  RiArrowGoBackLine,
  RiUnderline,
} from "react-icons/ri";
import { AiOutlineAlignCenter } from "react-icons/ai";
import { VscBold } from "react-icons/vsc";
import Image from "next/image";
import EditProductStepView from "@/components/Products/EditProductStepView";
import { useProductBasics } from "../../../../../libs/Hooks/useProductBasics";

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
    register,
    formState: { errors },
  } = methods;

  // const getBase64StringFromDataURL = (dataURL) =>
  //   dataURL.replace("data:", "").replace(/^.+,/, "");

  // useEffect(async () => {
  //   if (typeof document !== "undefined") {
  //     const image = document.getElementById("thumbnail");

  //     // Get the remote image as a Blob with the fetch API
  //     fetch(image.src, {
  //       mode: "no-cors", // no-cors, *cors, same-origin
  //     })
  //       .then((res) => res.blob())
  //       .then((blob) => {
  //         // Read the Blob as DataURL using the FileReader API
  //         const reader = new FileReader();
  //         reader.onloadend = () => {
  //           console.log(reader.result);
  //           // Logs data:image/jpeg;base64,wL2dvYWwgbW9yZ...

  //           // Convert to Base64 string
  //           const base64 = getBase64StringFromDataURL(reader.result);
  //           console.log(base64);
  //           // Logs wL2dvYWwgbW9yZ...
  //         };
  //         reader.readAsDataURL(blob);

  //         console.log(reader);
  //       });
  //   }
  // }, [document]);

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
              defaultValue={product?.name}
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
            <div className="border border-solid border-sky_light py-4 rounded-lg mt-2 outline-none">
              <div className="flex text-lg items-end border-bottom border-b-2 border-grey_80 sm:px-4 lg:px-2 py-2 pb-5">
                <div className="flex items-end">
                  <button className="sm:mr-4 mr-2">
                    <VscBold />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <BsTypeItalic />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <RiUnderline />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <BiStrikethrough />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <BsCode />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <CgFormatUppercase />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <GrList />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <RiListOrdered />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <AiOutlineAlignCenter />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <RiDoubleQuotesL />
                  </button>

                  <button className="sm:mr-4 mr-2">
                    <BiLinkAlt />
                  </button>

                  <button>
                    <BiImage />
                  </button>
                </div>

                <div className="lg:flex ml-12 hidden">
                  <button className="mr-2">
                    <RiArrowGoBackLine />
                  </button>

                  <button>
                    <RiArrowGoBackLine
                      style={{
                        transform: "scaleX(-1)",
                      }}
                    />
                  </button>
                </div>
              </div>
              <input
                type="text"
                name="product_desc"
                id="product_desc"
                placeholder="Product Description"
                className="px-4 py-3 pd-12 h-[5rem] w-[100%] outline-none"
                {...register("description", { required: true })}
                defaultValue={product?.description}
              />
              {errors.description?.type === "required" && (
                <p className="text-left text-red-600 text-xs mt-1">
                  Product description is required
                </p>
              )}
            </div>
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
              {...register("thumbnail", {})}
            />
            <label htmlFor="product_file" className="">
              {/* <Image
              className="mt-2"
              src={
                createProduct?.thumbnail ??
                (watch("thumbnail") !== undefined
                  ? window?.URL?.createObjectURL(watch("thumbnail")[0])
                  : "/images/thumbnail.png")
              }
              alt="..."
              width={160}
              height={160}
            /> */}
            </label>

            <p className="mt-3 text-secondary_brand_light w-[70%]">
              This image will appear in cabiza library, discover and profile
              pages. Requirement: square, atleast 600px by 600px, JPG, SVG, PNG,
              GIF format.
            </p>
          </div>

          <div className="flex flex-col mt-6">
            <img
              src={product?.cover_image}
              alt="..."
              className="hidden"
              id="thumbnail"
            />
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