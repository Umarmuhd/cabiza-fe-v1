import React from "react";
import { useForm } from "react-hook-form";
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

export default function CreateProduct() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  console.log(errors);

  console;
  return (
    <form>
      <h1 className="text-4xl font-semibold text-grey_20">
        Create your product
      </h1>

      <div className="bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8">
        <div className="flex flex-col">
          <label htmlFor="product_name" className="text-xl">
            Name
          </label>
          <input
            type="text"
            id="product_name"
            name="product_name"
            placeholder="Product Name"
            className="border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none"
            {...register("name", { required: true })}
          />
        </div>

        <div className="flex flex-col mt-5">
          <div className="relative">
            <label htmlFor="product_name" className="text-xl">
              Description{" "}
            </label>
            <div className="border border-solid border-grey_85 py-3 rounded-xl mt-2">
              <div className="flex text-lg items-end border-bottom border-b-2 border-grey_80 px-4 py-2 pb-5">
                <div className="flex items-end">
                  <button className="mr-4">
                    <VscBold />
                  </button>

                  <button className="mr-4">
                    <BsTypeItalic />
                  </button>

                  <button className="mr-4">
                    <RiUnderline />
                  </button>

                  <button className="mr-4">
                    <BiStrikethrough />
                  </button>

                  <button className="mr-4">
                    <BsCode />
                  </button>

                  <button className="mr-4">
                    <CgFormatUppercase />
                  </button>

                  <button className="mr-4">
                    <GrList />
                  </button>

                  <button className="mr-4">
                    <RiListOrdered />
                  </button>

                  <button className="mr-4">
                    <AiOutlineAlignCenter />
                  </button>

                  <button className="mr-4">
                    <RiDoubleQuotesL />
                  </button>

                  <button className="mr-4">
                    <BiLinkAlt />
                  </button>

                  <button>
                    <BiImage />
                  </button>
                </div>

                <div className="flex ml-12">
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
              />
            </div>
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="product_url" className="text-xl">
              URL
            </label>
            <input
              type="url"
              name="product_url"
              id="product_url"
              placeholder="ukpejacob.cabiza.com/p/aireu2"
              className="border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none"
              {...register("url", { required: true })}
            />
          </div>

          <div className="flex flex-col mt-5">
            <p className="text-xl">Product Thumbnail </p>
            <input
              type="file"
              name="product_file"
              id="product_file"
              className="hidden"
              {...register("file", { required: true })}
            />
            <label htmlFor="product_file" className="text-xl">
              <img
                className="h-[10rem] w-[10rem] mt-2"
                src="/images/thumbnail.png"
                alt="..."
              />
            </label>

            <p className="mt-3 text-grey_40 w-[70%]">
              This image will appear in cabiza library, discover and profile
              pages. Requirement: square, atleast 600px by 600px, JPG, SVG, PNG,
              GIF format.
            </p>
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="product_cover" className="text-xl">
              Product Cover{" "}
            </label>
            <input
              type="file"
              name="product_cover"
              id="product_cover"
              className="mt-2 border border-solid border-grey_85 p-3"
              {...register("cover_image", { required: true })}
            />
            <p className="mt-3 text-grey_40 w-[70%]">
              Image or Video, Requirements: 1280x720px and 72 DPI(dots per inch)
            </p>
          </div>
        </div>
      </div>
    </form>
  );
}
