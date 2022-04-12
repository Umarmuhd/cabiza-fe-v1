import React, { useRef, useState } from "react";
import DashboardNav from "@/components/Navbars/DashboardNav";
import Dashboard from "@/layouts/Dashboard";
import { classNames } from "@/libs/helper";
import { Tab, RadioGroup, Switch } from "@headlessui/react";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/config/index";

export default function Create() {
  const productNameRef = useRef();
  const productPriceRef = useRef();
  const [selected, setSelected] = useState(0);
  const [enabled, setEnabled] = React.useState(false);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const name = productNameRef.current.value;
    const price = productPriceRef.current.value;

    if (selected === null || name === "" || price === "") {
      return;
    }

    try {
      setLoading(true);
      const payload = {
        product_type: selected,
        name,
        price,
        contains_physical: enabled,
      };
      const { data } = await axios.post(`${API_URL}/products/new`, payload);

      setLoading(false);

      router.push("/dashboard/products/create/" + data.data.product._id);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Tab.Group>
        <DashboardNav title="Products" />
        <div
          className="bg-secondary_sky_lightest py-6 md:px-0 px-4"
          style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)" }}
        >
          <div className="flex justify-between items-center md:w-43/50 mx-auto">
            <Tab.List as={"div"} className="flex items-center">
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-primary"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Product
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-primary"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Checkout
              </Tab>
              <Tab
                as={"button"}
                className={({ selected }) =>
                  classNames(
                    "text-lg mr-10",
                    selected
                      ? " font-bold text-primary"
                      : " font-medium text-cabiza_grey"
                  )
                }
              >
                Share
              </Tab>
            </Tab.List>

            <div className="flex items-center justify-between">
              <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center">
                <span className="">Save changes</span>
              </a>

              <button
                className="leading-4 text-base font-medium text-white py-2 px-3 rounded-4xl border border-primary bg-primary flex items-center"
                type="submit"
                form="post-form"
              >
                <span className="mr-2">Save</span>
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <mask id="path-1-inside-1_2204_2450" fill="white">
                    <path d="M12.3598 10.0691C12.2702 10.1587 12.1476 10.2153 12.0062 10.2153C11.7328 10.2153 11.5065 9.98898 11.5065 9.71557L11.5065 4.49241L6.28336 4.49241C6.00995 4.49241 5.78367 4.26613 5.78367 3.99272C5.78367 3.7193 6.00995 3.49303 6.28336 3.49303L12.0062 3.49303C12.2796 3.49303 12.5059 3.7193 12.5059 3.99272L12.5059 9.71557C12.5059 9.85699 12.4493 9.97955 12.3598 10.0691Z" />
                  </mask>
                  <path
                    d="M12.3598 10.0691C12.2702 10.1587 12.1476 10.2153 12.0062 10.2153C11.7328 10.2153 11.5065 9.98898 11.5065 9.71557L11.5065 4.49241L6.28336 4.49241C6.00995 4.49241 5.78367 4.26613 5.78367 3.99272C5.78367 3.7193 6.00995 3.49303 6.28336 3.49303L12.0062 3.49303C12.2796 3.49303 12.5059 3.7193 12.5059 3.99272L12.5059 9.71557C12.5059 9.85699 12.4493 9.97955 12.3598 10.0691Z"
                    fill="white"
                  />
                  <path
                    d="M11.5065 9.71557L10.5065 9.71557L11.5065 9.71557ZM11.5065 4.49241L12.5065 4.49241V3.4924L11.5065 3.49241V4.49241ZM6.28336 4.49241L6.28336 5.49241L6.28336 5.49241L6.28336 4.49241ZM6.28336 3.49303L6.28336 4.49303L6.28336 4.49303L6.28336 3.49303ZM12.0062 3.49303L12.0062 2.49303L12.0062 3.49303ZM12.5059 3.99272L13.5059 3.99272L12.5059 3.99272ZM12.5059 9.71557L11.5059 9.71557L11.5059 9.71557L12.5059 9.71557ZM11.6527 9.36201C11.7405 9.27417 11.8684 9.21526 12.0062 9.21526L12.0062 11.2153C12.4268 11.2153 12.7999 11.0432 13.0669 10.7762L11.6527 9.36201ZM12.0062 9.21526C12.2851 9.21526 12.5065 9.4367 12.5065 9.71557L10.5065 9.71557C10.5065 10.5413 11.1805 11.2153 12.0062 11.2153L12.0062 9.21526ZM12.5065 9.71557L12.5065 4.49241L10.5065 4.49241L10.5065 9.71557L12.5065 9.71557ZM11.5065 3.49241L6.28336 3.49241L6.28336 5.49241L11.5065 5.49241L11.5065 3.49241ZM6.28336 3.49241C6.56223 3.49241 6.78367 3.71385 6.78367 3.99272L4.78367 3.99272C4.78367 4.81842 5.45766 5.49241 6.28336 5.49241L6.28336 3.49241ZM6.78367 3.99272C6.78367 4.27159 6.56223 4.49303 6.28336 4.49303L6.28336 2.49303C5.45766 2.49303 4.78367 3.16702 4.78367 3.99272L6.78367 3.99272ZM6.28336 4.49303L12.0062 4.49303L12.0062 2.49303L6.28336 2.49303L6.28336 4.49303ZM12.0062 4.49303C11.7273 4.49303 11.5059 4.27159 11.5059 3.99272H13.5059C13.5059 3.16702 12.8319 2.49303 12.0062 2.49303L12.0062 4.49303ZM11.5059 3.99272L11.5059 9.71557L13.5059 9.71557L13.5059 3.99272H11.5059ZM11.5059 9.71557C11.5059 9.57779 11.5648 9.44986 11.6527 9.36201L13.0669 10.7762C13.3339 10.5092 13.5059 10.1362 13.5059 9.71557L11.5059 9.71557Z"
                    fill="white"
                    mask="url(#path-1-inside-1_2204_2450)"
                  />
                  <path
                    d="M12.2796 4.42641L4.34582 12.3601C4.15254 12.5534 3.83199 12.5534 3.63871 12.3601C3.44543 12.1669 3.44543 11.8463 3.63871 11.653L11.5724 3.7193C11.7657 3.52602 12.0863 3.52602 12.2796 3.7193C12.4728 3.91258 12.4728 4.23313 12.2796 4.42641Z"
                    fill="white"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <form
          className="md:w-43/50 mx-auto text-left sm:py-12 sm:px-7 p-4 my-8 bg-white shadow rounded-3xl"
          onSubmit={handleSubmit}
        >
          <div className="flex justify-between items-center">
            <h1 className="text-4xl font-semibold text-secondary_ink_dark"></h1>
            <span className="text-lg font-medium text-primary_brand_light">
              Step: 1 of 5
            </span>
          </div>
          <div className="md:w-4/5 mx-auto">
            <div className="text-center mt-6">
              <h1 className="text-4xl font-semibold text-secondary_ink_dark">
                Publish your first product
              </h1>
              <p className="mt-4 text-secondary_ink_lighter text-lg">
                It takes only 5 steps to create something great and go live.
              </p>

              <div className="my-8 flex items-center justify-center">
                <RadioGroup
                  value={selected}
                  onChange={setSelected}
                  as={"div"}
                  className="flex items-center"
                >
                  <RadioGroup.Option
                    value={0}
                    className={({ active, checked }) =>
                      `${
                        checked
                          ? "border-primary bg-white"
                          : "border-white bg-secondary_sky_lightest"
                      }
                    relative rounded-lg shadow-md p-2 cursor-pointer flex focus:outline-none border mr-6`
                    }
                  >
                    {({ active, checked }) => (
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg
                            width="32"
                            height="32"
                            viewBox="0 0 32 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              width="32"
                              height="32"
                              rx="8"
                              fill="#5B44E9"
                            />
                            <path
                              d="M15.97 6C10.45 6 5.96997 10.48 5.96997 16C5.96997 21.52 10.45 26 15.97 26C21.49 26 25.97 21.52 25.97 16C25.97 10.48 21.5 6 15.97 6ZM19.72 16.35L16 20.58L15.56 21.08C14.95 21.77 14.45 21.59 14.45 20.66V16.7H12.75C11.98 16.7 11.77 16.23 12.28 15.65L16 11.42L16.44 10.92C17.05 10.23 17.55 10.41 17.55 11.34V15.3H19.25C20.02 15.3 20.23 15.77 19.72 16.35Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <p className="">
                          <span className="font-medium text-secondary mr-1">
                            Instant
                          </span>
                          {active && (
                            <span className="text-sm text-secondary_sky_dark">
                              : start selling now
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    value={1}
                    className={({ active, checked }) =>
                      `${
                        checked
                          ? "border-[#23C16B] bg-white"
                          : "border-white bg-secondary_sky_lightest"
                      }
                    relative rounded-lg shadow-md p-2 cursor-pointer flex focus:outline-none border mr-6`
                    }
                  >
                    {({ active, checked }) => (
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="1"
                              y="0.5"
                              width="31"
                              height="31"
                              rx="7.5"
                              fill="#7DDE86"
                            />
                            <path
                              d="M16.5 6C10.99 6 6.5 10.49 6.5 16C6.5 21.51 10.99 26 16.5 26C22.01 26 26.5 21.51 26.5 16C26.5 10.49 22.01 6 16.5 6ZM20.85 19.57C20.71 19.81 20.46 19.94 20.2 19.94C20.07 19.94 19.94 19.91 19.82 19.83L16.72 17.98C15.95 17.52 15.38 16.51 15.38 15.62V11.52C15.38 11.11 15.72 10.77 16.13 10.77C16.54 10.77 16.88 11.11 16.88 11.52V15.62C16.88 15.98 17.18 16.51 17.49 16.69L20.59 18.54C20.95 18.75 21.07 19.21 20.85 19.57Z"
                              fill="#198155"
                            />
                            <rect
                              x="1"
                              y="0.5"
                              width="31"
                              height="31"
                              rx="7.5"
                              stroke="#F2F4F5"
                            />
                          </svg>
                        </div>
                        <p className="">
                          <span className="font-medium text-secondary mr-1">
                            Pre-order
                          </span>
                          {active && (
                            <span className="text-sm text-secondary_sky_dark">
                              : sell before release date
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </RadioGroup.Option>
                  <RadioGroup.Option
                    value={2}
                    className={({ active, checked }) =>
                      `${
                        checked
                          ? "border-[#FFB323] bg-white"
                          : "border-white bg-secondary_sky_lightest"
                      }
                    relative rounded-lg shadow-md p-2 cursor-pointer flex focus:outline-none border`
                    }
                  >
                    {({ active, checked }) => (
                      <div className="flex items-center">
                        <div className="mr-2">
                          <svg
                            width="33"
                            height="32"
                            viewBox="0 0 33 32"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <rect
                              x="0.5"
                              width="32"
                              height="32"
                              rx="8"
                              fill="#FFD188"
                            />
                            <path
                              d="M16.5 6C10.98 6 6.5 10.48 6.5 16C6.5 21.52 10.98 26 16.5 26C22.02 26 26.5 21.52 26.5 16C26.5 10.48 22.02 6 16.5 6ZM11.1 15.23C11.27 14.04 11.8 12.97 12.63 12.13C14.63 10.14 17.78 10.03 19.92 11.77V10.82C19.92 10.41 20.26 10.07 20.67 10.07C21.08 10.07 21.42 10.41 21.42 10.82V13.49C21.42 13.9 21.08 14.24 20.67 14.24H18C17.59 14.24 17.25 13.9 17.25 13.49C17.25 13.08 17.59 12.74 18 12.74H18.75C17.2 11.66 15.06 11.81 13.68 13.19C13.08 13.79 12.7 14.57 12.57 15.44C12.52 15.81 12.2 16.08 11.83 16.08C11.79 16.08 11.76 16.08 11.72 16.07C11.33 16.02 11.04 15.64 11.1 15.23ZM20.37 19.87C19.3 20.94 17.9 21.47 16.5 21.47C15.28 21.47 14.07 21.04 13.07 20.23V21.17C13.07 21.58 12.73 21.92 12.32 21.92C11.91 21.92 11.57 21.58 11.57 21.17V18.5C11.57 18.09 11.91 17.75 12.32 17.75H14.99C15.4 17.75 15.74 18.09 15.74 18.5C15.74 18.91 15.4 19.25 14.99 19.25H14.24C15.79 20.33 17.93 20.18 19.31 18.8C19.91 18.2 20.29 17.42 20.42 16.55C20.48 16.14 20.85 15.85 21.27 15.91C21.68 15.97 21.96 16.35 21.91 16.76C21.73 17.97 21.2 19.04 20.37 19.87Z"
                              fill="#A05E03"
                            />
                          </svg>
                        </div>
                        <p className="">
                          <span className="font-medium text-secondary mr-1">
                            Membership
                          </span>
                          {active && (
                            <span className="text-sm text-secondary_sky_dark">
                              : charge on recurring basis
                            </span>
                          )}
                        </p>
                      </div>
                    )}
                  </RadioGroup.Option>
                </RadioGroup>
              </div>
            </div>

            <div className="text-left">
              <div className="flex flex-col">
                <label
                  htmlFor="product_name"
                  className="leading-4 font-medium text-secondary_ink_darkest mb-3"
                >
                  Product Name
                </label>
                <input
                  type="text"
                  id="product_name"
                  name="product_name"
                  placeholder="Enter your product name"
                  className="border border-solid border-sky_light p-4 rounded-lg mt-2 outline-none"
                  ref={productNameRef}
                  autoComplete="off"
                />
              </div>

              <div className="relative mt-6">
                <label
                  htmlFor="price"
                  className="leading-4 font-medium text-secondary_ink_darkest"
                >
                  Price
                </label>
                <div className="mt-3 flex rounded-lg">
                  <span className="inline-flex items-center rounded-l-lg border border-r-0 border-sky_light bg-secondary_sky_lighter text-secondary_ink_dark text-lg px-2 py-4">
                    ${" "}
                    <svg
                      width="13"
                      height="24"
                      viewBox="0 0 13 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="ml-4"
                    >
                      <path
                        d="M6.5 0L11.6962 9H1.30385L6.5 0Z"
                        fill="#CDCFD0"
                      />
                      <path
                        d="M6.5 24L11.6962 15H1.30385L6.5 24Z"
                        fill="#CDCFD0"
                      />
                    </svg>
                  </span>
                  <input
                    type="number"
                    name="company-website"
                    id="company-website"
                    className="flex-1 block w-full rounded-none rounded-r-lg border-sky_light border outline-none pl-4"
                    placeholder=""
                    ref={productPriceRef}
                  />
                </div>
              </div>

              <div className="flex items-center mt-6">
                <Switch
                  checked={enabled}
                  onChange={setEnabled}
                  className={
                    (enabled
                      ? "bg-primary_brand_base"
                      : "bg-secondary_sky_light") +
                    " relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75"
                  }
                >
                  <span className="sr-only">Use setting</span>
                  <span
                    aria-hidden="true"
                    className={`${enabled ? "translate-x-4" : "translate-x-0"}
pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                  />
                </Switch>
                <span className="ml-2 block text-base text-grey_20">
                  {"This product contains physical goods?"}
                </span>
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
            </div>

            <p className="mt-6 text-secondary_ink_lighter">
              Visit <span className="text-primary">Help Center</span> for
              enquiries, if you have any question.
            </p>
          </div>
        </form>
      </Tab.Group>
    </div>
  );
}

Create.layout = Dashboard;
