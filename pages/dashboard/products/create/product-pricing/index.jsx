import React, { useRef, useState } from "react";
import Toggle from "@/components/Toggle/Toggle";
import axios from "axios";

export default function ProductPricing({ product, handleNext }) {
  const [productPricingSettings, setProductPricingSettings] = useState(
    product?.user_priced ?? false
  );
  const [loading, setLoading] = useState(false);

  const handleTogglePricingSettings = () => {
    setProductPricingSettings((prev) => !prev);
  };

  const priceRef = useRef();
  const minPercentageRef = useRef();
  const maxPercentageRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      setLoading(true);
      const url = `${API_URL}/products/product/${product.product_id}/pricing`;

      const payload = {
        price: priceRef.current.value,
        user_priced: productPricingSettings,
        min_percent: minPercentageRef.current.value,
        max_percent: maxPercentageRef.current.value,
      };
      const { data } = await axios.post(url, payload);
      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-secondary_ink_dark">
          Product Pricing
        </h1>
        <span
          className="text-lg font-medium text-primary_brand_light"
          onClick={handleNext}
        >
          Step: 5 of 6
        </span>
      </div>

      <div className="bg-white flex flex-col mt-5">
        <label
          htmlFor="product_name"
          className="leading-4 font-medium text-secondary_ink_darkest mb-3"
        >
          Amount
        </label>
        <div className="flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85">
          <input
            className="px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none"
            value="$"
            readOnly
          />
          <input
            type="text"
            name="Amount"
            id="Amount"
            placeholder="0+"
            className=" outline-none w-[98%] p-3 rounded-xl z-10"
            ref={priceRef}
            defaultValue={product?.price}
          />
        </div>

        <div>
          <div className="flex justify-between items-center mt-5">
            <div>
              <h3 className="text-xl text-grey_20">Settings</h3>
              <p className="text-grey_40">Let customers pay what they want?</p>
            </div>
            <Toggle label="TogglePayment" click={handleTogglePricingSettings} />
          </div>
        </div>
        {productPricingSettings && (
          <div className="flex flex-col mt-5 rounded-xl   border border-solid border-grey_80 p-4">
            {productPricingSettings ? (
              <div className="flex justify-between items-center mb-3">
                <div className="flex flex-col items-between w-[45%]">
                  <div className="flex flex-col mt-5">
                    <label htmlFor="product_name" className="text-lg">
                      Minimum Amount{" "}
                    </label>
                    <div className="flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85">
                      <input
                        className="px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none"
                        value="$"
                        readOnly
                      />
                      <input
                        type="text"
                        name="Amount"
                        id="Amount"
                        placeholder="0+"
                        className=" outline-none w-[98%] p-3 rounded-xl z-10"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-col items-between w-[45%]">
                  <div className="flex flex-col mt-5">
                    <label htmlFor="product_name" className="text-lg">
                      Maximum Amount{" "}
                    </label>
                    <div className="flex items-center mt-2 justify-between rounded-xl border border-solid border-grey_85">
                      <input
                        className="px-4 rounded-xl text-grey_20 p-3 w-[4rem] border-r-0 rounded z-0 bg-grey_95 text-center outline-none"
                        value="$"
                        readOnly
                      />
                      <input
                        type="text"
                        name="Amount"
                        id="Amount"
                        placeholder="0+"
                        className=" outline-none w-[98%] p-3 rounded-xl z-10"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ) : null}
          </div>
        )}
      </div>

      <button
        type="submit"
        className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
        disabled={loading}
      >
        {loading ? (
          <span>...</span>
        ) : (
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
        )}
      </button>
    </form>
  );
}
