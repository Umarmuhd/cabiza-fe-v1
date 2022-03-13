import React, { useState } from "react";

export default function ProductInfo() {
  const [addDetails, setAddDetails] = useState([]);
  const [CTA, setCTA] = useState(false);

  const handleAddDetails = () => {
    setAddDetails((prev) => {
      if (prev.length === 0) {
        return [...prev, 0];
      }
      if (prev.length < 5) {
        return [...prev, `${prev[prev.length - 1]}++`];
      } else if (prev.length >= 5) {
        return prev;
      }
    });
  };

  const handleCustomizeCTA = () => {
    setCTA(true);
  };
  return (
    <>
      <h1 className="text-4xl font-semibold text-grey_20">
        Product Information
      </h1>

      <div className="bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8">
        <div className="flex flex-col">
          <label htmlFor="product_name" className="text-xl">
            Call-to-Action{" "}
          </label>
          <div className="flex mt-2">
            <button className="bg-cabiza_blue text-white p-2 px-4 rounded mr-5 rounded-xl">
              I want this
            </button>

            <button className="border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded mr-5 rounded-xl">
              Buy this
            </button>

            <button className="border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded mr-5 rounded-xl">
              Pay
            </button>

            <button
              className="border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-2 px-4 rounded flex items-center justify-between rounded-xl"
              onClick={handleCustomizeCTA}
            >
              Customize <p className="ml-3">+</p>
            </button>
          </div>
          {CTA ? (
            <input
              type="text"
              name="Selling for..."
              id="summary"
              placeholder="Selling for..."
              className="border border-solid border-grey_85 p-3 rounded-xl mt-4 outline-none"
            />
          ) : null}
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="summary" className="text-xl">
            Summary{" "}
          </label>
          <input
            type="text"
            name="summary"
            id="summary"
            placeholder="You’ll get..."
            className="border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none"
          />
        </div>

        <div className="flex flex-col mt-5 rounded-xl   border border-solid border-grey_80 p-4">
          <p className="text-xl">Additional Details</p>

          {addDetails.length > 0 ? (
            addDetails.map((index) => {
              return (
                <div key={index}>
                  <div className="flex justify-between items-center mb-3">
                    <input
                      type="text"
                      placeholder="Attribute"
                      className="flex w-[45%] border border-solid border-grey_80 p-3 mt-3 rounded-xl outline-none"
                    />

                    <input
                      type="text"
                      placeholder="Value"
                      className="flex w-[45%] border border-solid border-grey_80 p-3 mt-3 rounded-xl outline-none"
                    />
                  </div>
                </div>
              );
            })
          ) : (
            <div className="border border-dashed border-2 border-cabiza_blue mt-5 p-7">
              <div className="w-[50%] mx-auto text-center">
                <h3 className="text-grey_40 text-2xl font-semibold">
                  Add Details
                </h3>
                <p className="mt-2 text-grey_60">
                  Make your product more convincing to your customers.
                </p>
                <button
                  className="flex w-[max-content] mx-auto border border-solid border-black p-3 mt-3 rounded-xl"
                  onClick={() => handleAddDetails()}
                >
                  Add Details <p className="ml-2 text-grey_40">+</p>
                </button>
              </div>
            </div>
          )}

          {addDetails.length > 0 && (
            <button
              className="flex w-[max-content] border border-solid border-black p-3 mt-3 rounded-xl"
              onClick={handleAddDetails}
            >
              Add Details <p className="ml-2 text-grey_40">+</p>
            </button>
          )}
        </div>
      </div>
    </>
  );
}
