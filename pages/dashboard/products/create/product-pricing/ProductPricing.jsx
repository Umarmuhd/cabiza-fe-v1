import React, { useState } from "react";
import Toggle from "@/components/Toggle/Toggle";
import { useProductPricing } from "@/libs/Hooks/useProductPricing";
import EditProductStepView from "@/components/Products/EditProductStepView";

export default function ProductPricingStep({ ...props }) {
  const {
    onClickPrevious,
    onClickNext,
    stepErrors,
    stepIndex,
    setStepErrors,
    onClickConfirmButton,
    product,
  } = props;

  const { methods, setValues } = useProductPricing({
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

  const [productPricingSettings, setProductPricingSettings] = useState(
    product?.user_priced ?? false
  );

  const handleTogglePricingSettings = () => {
    setProductPricingSettings((prev) => !prev);
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
                {...register("price", { required: true })}
                defaultValue={product?.price}
              />
            </div>

            <div>
              <div className="flex justify-between items-center mt-5">
                <div>
                  <h3 className="text-xl text-grey_20">Settings</h3>
                  <p className="text-grey_40">
                    Let customers pay what they want?
                  </p>
                </div>
                <Toggle
                  label="TogglePayment"
                  click={handleTogglePricingSettings}
                />
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
        </form>
      </EditProductStepView>
    </React.Fragment>
  );
}
