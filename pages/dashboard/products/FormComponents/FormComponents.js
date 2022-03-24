import React, { useState, useRef } from "react";
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
// import { IoReturnDownBack } from 'react-icons/io';
import Toggle from "../../../../components/Toggle/Toggle";

const FirstComponent = () => {
  return (
    <>
      <h1 className="text-4xl font-semibold text-grey_20">
        Create your product
      </h1>

      <div className="bg-white border border-solid border-grey_80 p-6 rounded-xl mt-8 hidden">
        <div className="flex flex-col">
          <label htmlFor="product_name" className="text-xl">
            Name{" "}
          </label>
          <input
            type="text"
            name="product_name"
            id="product_name"
            placeholder="Product Name"
            className="border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none"
          />
        </div>

        <div className="flex flex-col mt-5">
          <label htmlFor="product_name" className="text-xl">
            Description{" "}
          </label>
          <div className="border border-solid border-grey_85 py-3 rounded-xl mt-2">
            <div className="flex text-lg items-end border-bottom border-b-2 border-grey_80 lg:px-4 md:px-1 py-2 pb-5">
              <div className="flex items-end">
                <button className="lg:mr-4">
                  <VscBold />
                </button>

                <button className="lg:mr-4">
                  <BsTypeItalic />
                </button>

                <button className="lg:mr-4">
                  <RiUnderline />
                </button>

                <button className="lg:mr-4">
                  <BiStrikethrough />
                </button>

                <button className="lg:mr-4">
                  <BsCode />
                </button>

                <button className="lg:mr-4">
                  <CgFormatUppercase />
                </button>

                <button className="lg:mr-4">
                  <GrList />
                </button>

                <button className="lg:mr-4">
                  <RiListOrdered />
                </button>

                <button className="lg:mr-4">
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

              <div className="flex ml-12 md:hidden">
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
              name="product_name"
              id="product_name"
              placeholder="Product Description"
              className="px-4 py-3 pd-12 h-[5rem] w-[100%] outline-none"
            />
          </div>

          <div className="flex flex-col mt-5">
            <label htmlFor="product_name" className="text-xl">
              URL{" "}
            </label>
            <input
              type="url"
              name="product_url"
              id="product_url"
              placeholder="ukpejacob.cabiza.com/p/aireu2"
              className="border border-solid border-grey_85 p-3 rounded-xl mt-2 outline-none"
            />
          </div>

          <div className="flex flex-col mt-5">
            <p className="text-xl">Product Thumbnail </p>
            <input
              type="file"
              name="product_file"
              id="product_file"
              className="hidden"
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
            />
            <p className="mt-3 text-grey_40 w-[70%]">
              Image or Video, Requirements: 1280x720px and 72 DPI(dots per inch)
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

const SecondComponent = () => {
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
};

const ThirdComponent = () => {
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
};

const FourthComponent = () => {
  const [productPricingSettings, setProductPricingSettings] = useState(false);

  const handleTogglePricingSettings = () => {
    setProductPricingSettings((prev) => !prev);
  };

  console.log(productPricingSettings);
  return (
    <>
      <h1 className="text-4xl font-semibold text-grey_20">Product Pricing</h1>

      <div className="bg-white mt-3">
        <div className="flex flex-col mt-5">
          <div className="flex flex-col mt-5">
            <label htmlFor="product_name" className="text-xl">
              Amount{" "}
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
        </div>
      </div>
    </>
  );
};

const FinalComponent = () => {
  const [version, setVersion] = useState(false);
  const [affliate, setAffliate] = useState(false);
  const [addPercentage, setAddPercentage] = useState(false);
  const [addVersion, setAddVersion] = useState(false);
  const [newVersion, setNewVersion] = useState();
  const [variablePercentage, setVariablePercentage] = useState();

  const inputtedVersion = useRef();
  const addInputPercentage = useRef();

  const handleVersionSetting = () => {
    setVersion((prev) => !prev);
    setAddVersion(false);
  };

  const handleAddVersion = () => {
    setAddVersion((prev) => !prev);
  };

  const handleEditPercentage = () => {
    setVariablePercentage(0);
    setAddPercentage((prev) => !prev);
  };

  const handleSavePercentage = () => {
    setVariablePercentage(addInputPercentage.current.value);
    setAddPercentage((prev) => !prev);
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
  return (
    <>
      <h1 className="text-4xl font-semibold text-grey_20">Product Settings</h1>

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
                {!variablePercentage && (
                  <input
                    type="text"
                    name="Tags"
                    id="Tags"
                    placeholder="Add variable percentage"
                    className="outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3"
                    ref={addInputPercentage}
                  />
                )}
                {addInputPercentage && variablePercentage ? (
                  <div className="flex w-[100%] border border-solid border-grey_80 rounded-xl">
                    <p className="outline-none bg-transparent w-[90%] mr-auto rounded-xl p-3">
                      {variablePercentage}
                    </p>
                    <button
                      className="h-[100%] py-2 rounded-xl my-auto px-4 bg-cabiza_blue text-white mr-3"
                      onClick={handleEditPercentage}
                    >
                      Edit
                    </button>
                  </div>
                ) : null}
              </div>
              {!addPercentage || variablePercentage === 0 ? (
                <input
                  type="button"
                  value="Add percentage"
                  // onClick={handleNext}
                  className="w-[100%] mt-4 bg-cabiza_blue text-white p-4 cursor-pointer"
                  onClick={handleSavePercentage}
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
        {version && !addVersion ? (
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
    </>
  );
};

export {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent,
  FinalComponent,
};
