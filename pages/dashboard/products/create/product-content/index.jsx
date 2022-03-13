import React from "react";

export default function ProductContent() {
  return (
    <>
      <h1 className="text-4xl font-semibold text-grey_20">Product Content</h1>

      <div className="bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8">
        <div className="flex flex-col mt-5">
          <p className="text-xl">Files</p>
          <div className="border border-dashed border-2 border-cabiza_blue mt-5 p-7">
            <input
              type="file"
              name="add_files"
              id="add_files"
              className="hidden"
            />
            <label htmlFor="add_files" className="w-[50%] mx-auto text-center">
              <h3 className="text-grey_40 text-2xl font-semibold">Add Files</h3>
              <p className="mt-2 text-grey_60">
                Upload your product files here
              </p>
              <span className="flex w-[max-content] mx-auto border border-solid border-black p-3 mt-3 rounded-xl cursor-pointer">
                Upload Files <p className="ml-2 text-grey_40">+</p>
              </span>
            </label>
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="product_name" className="text-xl">
              Redirect URL (optional){" "}
            </label>
            <div className="flex items-center border border-solid border-grey_85 p-3 rounded-xl mt-2 justify-between">
              <input
                type="url"
                name="product_url"
                id="product_url"
                placeholder="Redirect URL after purchase"
                className=" outline-none w-[90%]"
              />
              <button className="border border-solid border-grey_20 px-4 rounded text-grey_20 py-2">
                Test
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
