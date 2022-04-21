import { API_URL } from "@/config/index";
import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";

export default function ProductInfo({
  product,
  handleNext,
  productInfo,
  setProductInfo,
}) {
  const [addDetails, setAddDetails] = useState([]);
  const [custom, setCustom] = useState(false);
  const [CTA, setCTA] = useState(false);

  const [selected, setSelected] = useState(
    product?.call_to_action ?? "I want this"
  );

  const summaryRef = useRef();

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
    setSelected("Custom");
  };

  useEffect(() => {
    let val =
      selected !== "Buy this" &&
      selected !== "Pay" &&
      selected !== "I want this";

    setCustom(val);
  }, [selected]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const summary = summaryRef.current.value;

    if (summary === "" || selected === "") {
      toast.error("please complete all required fields");
      return;
    }

    setProductInfo({ summary, call_to_action: selected });
    handleNext();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-secondary_ink_dark">
          Product Information
        </h1>
        <span
          className="text-lg font-medium text-primary_brand_light"
          onClick={handleNext}
        >
          Step: 3 of 6
        </span>
      </div>

      <div className="flex flex-col">
        <label
          htmlFor="product_cta"
          className="leading-4 font-medium text-secondary_ink_darkest mb-3"
        >
          Call-to-Action{" "}
        </label>
        <div className="flex mt-2">
          <RadioGroup
            value={selected}
            onChange={(e) => {
              setCTA(false);
              setSelected(e);
            }}
            as={"div"}
            className="flex items-center"
          >
            <RadioGroup.Option
              value="I want this"
              className={({ active, checked }) =>
                `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`
              }
            >
              {({ active, checked }) => (
                <span
                  className={`text-primary ${
                    checked ? "font-medium" : "font-normal"
                  }`}
                >
                  I want this
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="Buy this"
              className={({ active, checked }) =>
                `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`
              }
            >
              {({ active, checked }) => (
                <span
                  className={`text-primary ${
                    checked ? "font-medium" : "font-normal"
                  }`}
                >
                  Buy this
                </span>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              value="Pay"
              className={({ active, checked }) =>
                `${checked ? "border-primary" : "border-white"}
                bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl border`
              }
            >
              {({ active, checked }) => (
                <span
                  className={`text-primary ${
                    checked ? "font-medium" : "font-normal"
                  }`}
                >
                  Pay
                </span>
              )}
            </RadioGroup.Option>
          </RadioGroup>

          <button
            className={
              "bg-primary_brand_lightest text-primary p-2 px-4 mr-5 rounded-3xl flex items-center justify-between border" +
              (custom ? "border-primary" : "border-white")
            }
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
            className="border border-solid border-sky_light p-4 rounded-lg mt-4 outline-none"
            value={selected}
            onChange={(e) => setSelected(e.target.value)}
          />
        ) : null}
      </div>

      <div className="flex flex-col mt-6">
        <label
          htmlFor="summary"
          className="leading-4 font-medium text-secondary_ink_darkest mb-3"
        >
          Summary
        </label>
        <input
          type="text"
          name="summary"
          id="summary"
          placeholder="You’ll get..."
          className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
          ref={summaryRef}
          defaultValue={productInfo?.summary}
        />
      </div>

      <div className="flex flex-col mt-6">
        <p className="leading-4 font-medium text-secondary_ink_darkest mb-3">
          Additional Details (optional)
        </p>

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
          <div className="border-dashed border border-secondary_sky_base mt-5 p-7 bg-secondary_sky_lightest">
            <div className="w-[50%] mx-auto text-center">
              <h3 className="text-secondary text-base font-medium">
                Add Details
              </h3>
              <p className="mt-4 text-secondary_brand_light">
                Make your product more convincing to your customers.
              </p>
              <button
                className="flex w-[max-content] mx-auto py-2 px-4 mt-6 rounded-4xl bg-primary_brand_lightest text-primary"
                onClick={() => handleAddDetails()}
              >
                <p className="mr-2 text-primary font-medium">+</p>
                Add Details
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

      <button
        type="submit"
        className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
      >
        <React.Fragment>
          <span className="mr-4">Next</span>
          <svg
            width="25"
            height="24"
            viewBox="0 0 25 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999"
              stroke="white"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </React.Fragment>
      </button>
    </form>
  );
}
