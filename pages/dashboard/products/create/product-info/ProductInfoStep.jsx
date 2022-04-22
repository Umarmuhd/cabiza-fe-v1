import EditProductStepView from "@/components/Products/EditProductStepView";
import { API_URL } from "@/config/index";
import { RadioGroup } from "@headlessui/react";
import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import { useProductInfo } from "./useProductInfo";

export default function ProductInfoStep({ ...props }) {
  const {
    onClickPrevious,
    onClickNext,
    stepErrors,
    stepIndex,
    setStepErrors,
    onClickConfirmButton,
    product,
  } = props;

  const { methods, setValues } = useProductInfo({
    stepIndex,
    stepErrors,
    setStepErrors,
    product,
  });
  const {
    setValue,
    register,
    formState: { errors },
  } = methods;

  const [addDetails, setAddDetails] = useState([]);
  const [custom, setCustom] = useState(false);
  const [CTA, setCTA] = useState(false);

  const [selected, setSelected] = useState(
    product?.call_to_action ?? "I want this"
  );

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

  useEffect(() => {}, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
  };

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
                  setValue("call_to_action", e);
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
                id="call_to_action"
                placeholder="Selling for..."
                className="border border-solid border-sky_light p-4 rounded-lg mt-4 outline-none"
                value={selected}
                onChange={(e) => setSelected(e.target.value)}
                {...register("call_to_action", {})}
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
              {...register("summary", { required: true })}
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
        </form>
      </EditProductStepView>
    </React.Fragment>
  );
}
