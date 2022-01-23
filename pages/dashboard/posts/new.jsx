import React from "react";
import { RadioGroup } from "@headlessui/react";
import { Tab } from "@headlessui/react";

import Dashboard from "../../../layouts/Dashboard";

const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
      fill="white"
    />
    <path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill="white"
    />
  </svg>
);
const CaretDownIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.00001 11.2C7.53335 11.2 7.06668 11.02 6.71335 10.6667L2.36668 6.32005C2.17335 6.12672 2.17335 5.80672 2.36668 5.61338C2.56001 5.42005 2.88001 5.42005 3.07335 5.61338L7.42001 9.96005C7.74001 10.28 8.26001 10.28 8.58001 9.96005L12.9267 5.61338C13.12 5.42005 13.44 5.42005 13.6333 5.61338C13.8267 5.80672 13.8267 6.12672 13.6333 6.32005L9.28668 10.6667C8.93335 11.02 8.46668 11.2 8.00001 11.2Z"
      fill="white"
    />
  </svg>
);

export default function NewPost() {
  const [selected, setSelected] = React.useState(false);
  return (
    <>
      <div className="bg-grey_95 border-b border-grey_60 py-6 md:px-0 px-4">
        <div className="flex justify-between items-center md:w-4/5 mx-auto">
          <div className="flex">
            <button className="py-2 px-3 rounded-lg border border-[#666666]">
              Preview
            </button>
          </div>

          <div className="flex items-center justify-between">
            <button className="py-2 px-3 mr-6">Cancel</button>
            <button className="py-2 px-3 rounded-lg border border-[#666666] mr-6">
              Save
            </button>
            <button className="py-2 px-3 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg">
              <span className="mr-2.5">Publish </span> <CaretDownIcon />
            </button>
          </div>
        </div>
      </div>

      <main className="w-full h-full relative">
        <div className="w-4/5 mx-auto md:py-10 flex justify-between">
          <div className="w-[34%] rounded-2xl border border-grey_80 py-8 px-6">
            <div className="mb-8">
              <h2 className="text-grey_40 font-semibold mb-2">AUDIENCE</h2>

              <RadioGroup as={"ul"} value={selected} onChange={setSelected}>
                <RadioGroup.Option
                  as={"li"}
                  value="everyone"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Everyone
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  as={"li"}
                  value="followers"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Followers only
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  as={"li"}
                  value="customers"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Customers only
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  as={"li"}
                  value="affiliates"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Affiliates only
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>
            <div className="mb-8">
              <h2 className="text-grey_40 font-semibold mb-2">CHANNEL</h2>

              <RadioGroup as={"ul"} value={selected} onChange={setSelected}>
                <RadioGroup.Option
                  as={"li"}
                  value="send-email"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Send Email
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  as={"li"}
                  value="to-profile"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <div className="inline w-4/5">
                          <span className="text-grey_60 font-medium block mb-2">
                            Post to profile
                          </span>
                          <p className="text-grey_60 text-xs w-4/5">
                            This post will be visible to anyone who visits your
                            profile.
                          </p>
                        </div>

                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center ml-2">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>
            <div className="mb-0">
              <h2 className="text-grey_40 font-semibold mb-2">ENGAGEMENTS</h2>

              <RadioGroup as={"ul"} value={selected} onChange={setSelected}>
                <RadioGroup.Option
                  as={"li"}
                  value="comments"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Allow comments
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
                <RadioGroup.Option
                  as={"li"}
                  value="likes"
                  className={({ active, checked }) =>
                    `mb-2 ${checked} ${active}`
                  }
                >
                  {({ checked, active }) => (
                    <>
                      <div className="flex justify-between items-center">
                        <span className="text-grey_60 font-medium">
                          Allow Likes
                        </span>
                        <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                          {checked && (
                            <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </RadioGroup.Option>
              </RadioGroup>
            </div>
          </div>
          <div className="w-[62%]">
            <div className="rounded-2xl border border-grey_80 p-6">
              <div className="mb-6 relative">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="title"
                >
                  Title
                </label>
                <input
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="title"
                  placeholder="Post Title"
                />
              </div>

              <div className="mb-6 relative">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="description"
                >
                  Description
                </label>
                <textarea
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="description"
                  placeholder="Post Description"
                  rows={4}
                ></textarea>
              </div>
            </div>

            <div className="mt-6"></div>

            <button className="rounded-lg py-4 w-full border border-grey_80 bg-grey_95 text-lg text-grey_60">
              Add call-to-action-button
            </button>

            <div className="rounded-2xl border border-grey_80 p-6 mt-6">
              <div className="mb-6 relative">
                <label
                  className="block text-grey_40 text-lg font-semibold mb-3"
                  htmlFor="file"
                >
                  Add Files
                </label>
                {/* <input
                  type="text"
                  className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  id="title"
                  placeholder="Post Title"
                /> */}
                <button className="w-full rounded-lg py-4 border border-dotted border-grey_80 flex items-center justify-center">
                  <span className="text-xs mr-2 text-grey_40 leading-[14px]">
                    Add file
                  </span>
                  <svg
                    width="25"
                    height="24"
                    viewBox="0 0 25 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
                      fill="#666666"
                    />
                    <path
                      d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
                      fill="#666666"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

NewPost.layout = Dashboard;
