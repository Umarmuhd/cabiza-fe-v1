import React, { useState, useRef } from "react";
import Toggle from "@/components/Toggle/Toggle";

const ProductSettingsStep = ({
  product,
  handleNext,
  productSettings,
  setProductSettings,
}) => {
  const [loading, setLoading] = useState(false);
  const [version, setVersion] = useState(false);
  const [affliate, setAffliate] = useState(false);
  const [addPercentage, setAddPercentage] = useState(false);
  const [addVersion, setAddVersion] = useState(false);
  const [newVersion, setNewVersion] = useState();

  const inputtedVersion = useRef();

  const handleVersionSetting = () => {
    setVersion((prev) => !prev);
    setAddVersion(false);
  };

  const handleAddVersion = () => {
    setAddVersion((prev) => !prev);
  };

  const handleRemoveVersion = () => {
    setAddVersion(false);
  };

  const handleAffliateSetting = () => {
    setAffliate((prev) => !prev);
  };

  const handleAddPercentage = () => {
    setAddPercentage((prev) => !prev);
  };

  const handleSubmittedVersion = () => {
    setNewVersion(inputtedVersion.current.value);
    setAddVersion(false);
    setVersion(false);
  };

  const handleRestoreAddVersion = () => {
    setNewVersion("");
    setAddVersion(true);
    setVersion(true);
  };

  const handleContinue = (event) => {
    event.preventDefault();

    const payload = {
      can_affiliate: affliate,
    };
  };

  return (
    <form onSubmit={handleContinue}>
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-4xl font-semibold text-secondary_ink_dark">
          Product Settings
        </h1>
        <span
          className="text-lg font-medium text-primary_brand_light"
          onClick={handleNext}
        >
          Step: 6 of 6
        </span>
      </div>

      <div className="bg-white mt-5 border border-solid border-grey_80 p-3 rounded-xl">
        <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
          <p className="text-grey_40">Limit product sales</p>
          <Toggle label="LimitSales" />
        </div>

        <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
          <p className="text-grey_40">Allow customers to choose a quantity</p>
          <Toggle label="Quantity" />
        </div>

        <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
          <p className="text-grey_40">
            Publicly show the number of sales on your product page
          </p>
          <Toggle label="showSales" />
        </div>

        <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
          <p className="text-grey_40">
            Generate a unique license key per sale{" "}
            <a
              href=""
              className="text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue"
            >
              Learn more
            </a>
          </p>
          <Toggle label="license" />
        </div>

        <div className="bg-grey_95 p-3 rounded px-5 mb-2">
          <div className="flex items-center justify-between">
            <p className="text-grey_40">
              Add custom affiliate percentage{" "}
              <a
                href=""
                className="text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue"
              >
                Learn more
              </a>
            </p>
            <Toggle label="affliate" click={handleAffliateSetting} />
          </div>
          {affliate ? (
            <div className="mt-5 border border-solid border-grey_80 p-3 rounded-xl w-[60%]">
              <div className="flex w-[100%] border border-solid border-grey_80 rounded-xl">
                <input
                  type="text"
                  name="Tags"
                  id="Tags"
                  placeholder={
                    !addPercentage ? "Add variable percentage" : "40%"
                  }
                  className="outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3"
                />
                {addPercentage ? (
                  <button
                    className="h-[100%] py-2 rounded-xl my-auto px-4 bg-cabiza_blue text-white mr-3"
                    onClick={handleAddPercentage}
                  >
                    Edit
                  </button>
                ) : null}
              </div>
              {!addPercentage ? (
                <input
                  type="button"
                  value="Add percentage"
                  // onClick={handleNext}
                  className="w-[100%] mt-4 bg-cabiza_blue text-white p-4 cursor-pointer"
                  onClick={handleAddPercentage}
                />
              ) : null}
            </div>
          ) : null}
        </div>

        <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
          <p className="text-grey_40">
            Mark product as e-publication for VAT purposes{" "}
            <a
              href=""
              className="text-cabiza_blue ml-2 border-bottom border-b border-cabiza_blue"
            >
              Learn more
            </a>
          </p>
          <Toggle label="VAT" />
        </div>
      </div>

      <div className="bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl">
        <h4 className="text-grey_20 text-xl mt-1 pl-5 font-semibold">
          Version
        </h4>
        <div className="p-3 rounded flex items-center justify-between px-5">
          <p className="text-grey_40">
            Is there any variation for this product?
          </p>
          <Toggle label="Version" click={handleVersionSetting} />
        </div>
        {version ? (
          <span
            className="flex w-[max-content] ml-4 border border-solid border-black p-3 mt-1 rounded-xl cursor-pointer"
            onClick={handleAddVersion}
          >
            Add Version
          </span>
        ) : null}

        {newVersion ? (
          <span className="flex w-[max-content] ml-4 border border-solid border-cabiza_blue bg-cabiza_secondary_tertiary text-cabiza_blue p-3 mt-1 rounded-xl cursor-pointer">
            {newVersion}{" "}
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="ml-3"
              onClick={handleRestoreAddVersion}
            >
              <path
                d="M9.16937 15.58C8.97937 15.58 8.78938 15.51 8.63938 15.36C8.34938 15.07 8.34938 14.59 8.63938 14.3L14.2994 8.64C14.5894 8.35 15.0694 8.35 15.3594 8.64C15.6494 8.93 15.6494 9.41 15.3594 9.7L9.69937 15.36C9.55937 15.51 9.35937 15.58 9.16937 15.58Z"
                fill="#24BAD4"
              />
              <path
                d="M14.8294 15.58C14.6394 15.58 14.4494 15.51 14.2994 15.36L8.63938 9.7C8.34938 9.41 8.34938 8.93 8.63938 8.64C8.92937 8.35 9.40937 8.35 9.69937 8.64L15.3594 14.3C15.6494 14.59 15.6494 15.07 15.3594 15.36C15.2094 15.51 15.0194 15.58 14.8294 15.58Z"
                fill="#24BAD4"
              />
              <path
                d="M15 22.75H9C3.57 22.75 1.25 20.43 1.25 15V9C1.25 3.57 3.57 1.25 9 1.25H15C20.43 1.25 22.75 3.57 22.75 9V15C22.75 20.43 20.43 22.75 15 22.75ZM9 2.75C4.39 2.75 2.75 4.39 2.75 9V15C2.75 19.61 4.39 21.25 9 21.25H15C19.61 21.25 21.25 19.61 21.25 15V9C21.25 4.39 19.61 2.75 15 2.75H9Z"
                fill="#24BAD4"
              />
            </svg>
          </span>
        ) : null}

        {addVersion ? (
          <div className="mt-5 border border-solid border-grey_80 p-3 rounded-xl w-[60%]">
            <div className="flex w-[100%] border border-solid border-grey_80 rounded-xl">
              <input
                type="text"
                name="Tags"
                id="Tags"
                placeholder="Add Version"
                className="outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3"
                ref={inputtedVersion}
              />
            </div>
            <input
              type="button"
              value="Add version"
              className="w-[100%] mt-4 bg-cabiza_blue text-white p-4 cursor-pointer"
              onClick={handleSubmittedVersion}
            />
          </div>
        ) : null}
      </div>

      <div className="bg-white mt-5 border border-solid border-grey_60 p-3 rounded-xl">
        <h4 className="text-grey_20 text-xl mt-1 pl-5 font-semibold">
          Discover
        </h4>

        <div className="p-3 rounded px-5 mb-2">
          <p className="text-grey_40 font-semibold text-lg">Tags</p>
          <div className="flex items-center justify-between mt-2 p-3 border border-solid border-grey_85 rounded-xl">
            <input
              type="text"
              name="Tags"
              id="Tags"
              placeholder="Begin typing to add tag..."
              className="w-[95%] outline-none"
            />
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M11.9995 16.8C11.2995 16.8 10.5995 16.53 10.0695 16L3.54953 9.48C3.25953 9.19 3.25953 8.71 3.54953 8.42C3.83953 8.13 4.31953 8.13 4.60953 8.42L11.1295 14.94C11.6095 15.42 12.3895 15.42 12.8695 14.94L19.3895 8.42C19.6795 8.13 20.1595 8.13 20.4495 8.42C20.7395 8.71 20.7395 9.19 20.4495 9.48L13.9295 16C13.3995 16.53 12.6995 16.8 11.9995 16.8Z"
                fill="#666666"
              />
            </svg>
          </div>
        </div>

        <div className="px-3">
          <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
            <p className="text-grey_40">Allow “Become Affiliate” button</p>
            <Toggle label="Become_Affiliate" />
          </div>

          <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
            <p className="text-grey_40">Show custom affiliate percentage</p>
            <Toggle label="custom_affiliate" />
          </div>

          <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
            <p className="text-grey_40">
              Display your product's 1-5 star rating to prospective customers
            </p>
            <Toggle label="rating" />
          </div>

          <div className="bg-grey_95 p-3 rounded flex items-center justify-between px-5 mb-2">
            <p className="text-grey_40">
              This product contains content meant only for adults, including the
              preview
            </p>
            <Toggle label="preview" />
          </div>
        </div>
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
            <span className="mr-4">Submit</span>
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
};

export default ProductSettingsStep;
