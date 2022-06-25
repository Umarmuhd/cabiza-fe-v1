import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "@/libs/axiosInstance";
import { API_URL } from "@/config/index";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "@/libs/helper";

import FullNav from "@/components/Navbars/DashboardNav/FullNav";
import { Tab } from "@headlessui/react";
import BasicProductStep from "./create-product-basics/CreateProductBasics";
import ProductInfoStep from "./product-info/ProductInfoStep";
import ProductContentStep from "./product-content/ProductContent";
import ProductPricingStep from "./product-pricing/ProductPricing";
import ProductSettingsStep from "./product-settings/ProductSettings";

import { useCreateProductRecoilStates } from "../../../../recoil";
import toast from "react-hot-toast";
import { useLeavePageConfirm } from "@/libs/Hooks/useLeavePageConfirm";
import {
  defaultBasicInfoState,
  defaultProductContentState,
  defaultProductInfoState,
  defaultProductPricingState,
  defaultProductSettingsState,
} from "recoil/CreateProduct/atoms";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const stepConfigs = [
  {
    title: "Create your product",
    render: (props) => {
      return <BasicProductStep {...props} />;
    },
  },
  {
    title: "Product Information",
    render: (props) => {
      return <ProductInfoStep {...props} />;
    },
  },
  {
    title: "Product Content",
    render: (props) => {
      return <ProductContentStep {...props} />;
    },
  },
  {
    title: "Product Pricing",
    render: (props) => {
      return <ProductPricingStep {...props} />;
    },
  },
  {
    title: "Product Settings",
    render: (props) => {
      return <ProductSettingsStep {...props} />;
    },
  },
];

export default function UpdateProduct() {
  const {
    basicInfo,
    setBasicInfo,
    productInfo,
    setProductInfo,
    productContent,
    setProductContent,
    productPricing,
    setProductPricing,
    productSettings,
    setProductSettings,
  } = useCreateProductRecoilStates();

  const [stepIndex, setStepIndex] = useState(0);
  const [stepErrors, setStepErrors] = useState(
    Array.from({ length: stepConfigs.length - 1 }, () => true)
  );

  const router = useRouter();

  const clearRecoilCreateProduct = () => {
    setBasicInfo(defaultBasicInfoState);
    setProductInfo(defaultProductInfoState);
    setProductContent(defaultProductContentState);
    setProductPricing(defaultProductPricingState);
    setProductSettings(defaultProductSettingsState);
  };

  useLeavePageConfirm({ isConfirm: true, closeFn: clearRecoilCreateProduct });

  const backward = () => {
    setStepIndex(stepIndex - 1);
  };

  const forward = () => {
    setStepIndex(stepIndex + 1);
  };

  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const [published, setPublished] = useState(false);

  const productId = router.query.product_id;

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const uri = `${API_URL}/products/product/${productId}`;
        const { data } = await axios.get(uri);
        setProduct(data.data.product);
        setPublished(data.data.product.published);

        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const [showDropdown, setShowDropdown] = useState(false);
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  //calendar
  const [showCalendar, setShowCalendar] = useState(false);
  const [time, setTime] = useState("PM");
  const [exactTime, setExactTime] = useState(12);

  const handleChangeTimePeriod = () => {
    if (time !== "PM") {
      setTime("PM");
    } else {
      setTime("AM");
    }
  };

  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  // const handleExactTimeChange = () => {
  //   setExactTime(times)
  // }

  const [value, onChange] = useState(new Date());

  const handleConvertDate = (month, day, year) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  const [newConvertedDate, setNewConvertedDate] = useState(
    handleConvertDate(value.getMonth(), value.getDate(), value.getFullYear())
  );

  useEffect(() => {
    setNewConvertedDate(
      handleConvertDate(value.getMonth(), value.getDate(), value.getFullYear())
    );
  }, [value]);

  const scheduledTime = time === "PM" ? exactTime + 12 : exactTime;

  const handleSubmitting = async () => {
    const { name, description, thumbnail, cover_image } = basicInfo;
    const { call_to_action, summary } = productInfo;
    const { file, url } = productContent;
    const { price, user_priced, min_price, max_price } = productPricing;
    try {
      setLoading(true);

      console.log(basicInfo);
      console.log(productInfo);
      console.log(productContent);
      console.log(productPricing);

      const form_data = new FormData();

      name && form_data.append("name", name);

      summary && form_data.append("summary", summary);

      thumbnail?.length === 1 && form_data.append("thumbnail", thumbnail[0]);

      cover_image?.length === 1 &&
        form_data.append("cover_image", cover_image[0]);

      description && form_data.append("description", description);

      call_to_action && form_data.append("call_to_action", call_to_action);

      //Content
      file?.length === 1 && form_data.append("file", file[0]);
      url?.length > 0 && form_data.append("url", url);

      //Pricing
      price && form_data.append("price", price);
      user_priced && form_data.append("user_priced", user_priced);
      min_price && form_data.append("min_price", min_price);
      max_price && form_data.append("max_price", max_price);

      const uri = `${API_URL}/products/product/${product.product_id}`;

      const { data } = await axios.post(uri, form_data);

      console.log(data);

      router.push(`/products`);

      toast.custom(
        <div className="rounded-lg py-4 px-8 bg-[#24C78C] flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="white"
            />
          </svg>
          <span className="ml-2.5 font-medium text-lg text-white">
            Product saved success !
          </span>
        </div>
      );

      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error(error.message);
      setLoading(false);
    }
  };

  const onClickConfirmButton = () => {
    handleSubmitting();
  };

  const handlePublish = async () => {
    try {
      setLoading(true);
      const url = `${API_URL}/products/publishing/${product._id}`;
      const response = await axios.put(url);
      setLoading(false);
      toast.success(response.data.message);
      console.log(response.data);
      setPublished(response.data.data.product.published);
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data.message);
      setLoading(false);
    }
  };

  const handleSchedule = async () => {
    // try {
    //   setLoading(true);
    //   const date = new Date(value.getFullYear(), value.getMonth(), value.getDate(), Number(scheduledTime), value.getMinutes(), value.getSeconds(), value.getMilliseconds())
    //   console.log(form_data.get('scheduledTime'))
    //   const url = `${API_URL}/products/schedule-new/product/${product._id}`;
    //   const response = await axios.patch(url, form_data);
    //   setLoading(false);
    //   toast.success(response.data.message);
    //   console.log(response.data)
    //   setPublished(response.data.data.product.published);
    // } catch (error) {
    //   console.log(error);
    //   toast.error(error.response?.data.message);
    //   setLoading(false);
    // }

    const { name, description, thumbnail, cover_image } = basicInfo;
    const { call_to_action, summary } = productInfo;
    const { file, url } = productContent;
    const { price, user_priced, min_price, max_price } = productPricing;
    try {
      setLoading(true);

      console.log(basicInfo);
      console.log(productInfo);
      console.log(productContent);
      console.log(productPricing);

      const date = new Date(
        value.getFullYear(),
        value.getMonth(),
        value.getDate(),
        Number(scheduledTime),
        value.getMinutes(),
        value.getSeconds(),
        value.getMilliseconds()
      );

      const form_data = new FormData();

      name && form_data.append("name", name);

      date && form_data.append("scheduledTime", date);

      summary && form_data.append("summary", summary);

      thumbnail?.length === 1 && form_data.append("thumbnail", thumbnail[0]);

      cover_image?.length === 1 &&
        form_data.append("cover_image", cover_image[0]);

      description && form_data.append("description", description);

      call_to_action && form_data.append("call_to_action", call_to_action);

      //Content
      file?.length === 1 && form_data.append("file", file[0]);
      url?.length > 0 && form_data.append("url", url);

      //Pricing
      price && form_data.append("price", price);
      user_priced && form_data.append("user_priced", user_priced);
      min_price && form_data.append("min_price", min_price);
      max_price && form_data.append("max_price", max_price);

      const uri = `${API_URL}/products/schedule-new/product/${product.product_id}`;

      const { data } = await axios.patch(uri, form_data);

      console.log(data);

      toast.custom(
        <div className="rounded-lg py-4 px-8 bg-[#24C78C] flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="white"
            />
          </svg>
          <span className="ml-2.5 font-medium text-lg text-white">
            Product saved success !
          </span>
        </div>
      );

      setLoading(false);
    } catch (error) {
      console.log(error);
      console.error(error.message);
      setLoading(false);
    }
  };

  return (
    <div className="bg-secondary_sky_lighter lg:w-[85%] w-[100%] ml-auto">
      <Tab.Group>
        <FullNav title="Products">
          <div className="md:px-0">
            <div className="flex md:flex-row flex-col justify-between items-center md:w-43/50 mx-auto mt-[.5rem]">
              <Tab.List
                as={"div"}
                className="flex items-center md:w-auto w-full md:justify-start justify-between"
              >
                <Tab
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Product
                </Tab>
                <Tab
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Checkout
                </Tab>
                <Tab
                  as={"button"}
                  className={({ selected }) =>
                    classNames(
                      "text-md md:mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Share
                </Tab>
              </Tab.List>

              <div className="flex items-center justify-between mt-4 md:mt-[-.5rem] md:w-auto w-full relative">
                <button
                  className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center"
                  onClick={handleSubmitting}
                >
                  <span className="">Save changes</span>
                </button>

                <button
                  className="leading-4 text-base font-medium bg-transparent py-2 px-3 rounded-4xl border text-primary bg-primary flex items-center"
                  // type="submit"
                  form="post-form"
                  onClick={() => {
                    setShowDropdown(!showDropdown);
                    // published ? handlePublish() : null
                  }}
                >
                  <span className="mr-2">
                    {published ? "UnPublish" : "Publish"}
                  </span>
                  <svg
                    width="14"
                    height="7"
                    viewBox="0 0 14 7"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M12.28 0.966553L7.9333 5.31322C7.41997 5.82655 6.57997 5.82655 6.06664 5.31322L1.71997 0.966553"
                      stroke="#5B44E9"
                      strokeWidth="1.5"
                      strokeMiterlimit="10"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>

                {showDropdown && !published ? (
                  <div
                    className="absolute left-[-5rem] top-[4rem] rounded-xl bg-white px-1 py-5 z-[5] w-[25rem] flex flex-col"
                    style={{
                      border: "1px solid #E3E5E6",
                      boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                    }}
                  >
                    <div className="border-b border-b-[#979C9E] flex flex-col items-center pb-7">
                      <button
                        className="leading-4 text-base font-medium text-white py-2 px-12 rounded-4xl border border-primary bg-primary"
                        type="submit"
                        form="post-form"
                        disabled={loading}
                        onClick={handlePublish}
                      >
                        Publish now
                      </button>
                    </div>
                    <p className="mt-[-.9rem] w-[max-content] px-4 mx-auto z-[3] bg-white">
                      {" "}
                      or{" "}
                    </p>

                    <div className="mt-3 w-[max-content] mx-auto border border-sky_light pl-4 h-[3rem] rounded-xl flex items-center overflow-hidden relative">
                      <span
                        className="text-secondary_ink_dark pr-8 cursor-pointer"
                        onClick={() => setShowCalendar(!showCalendar)}
                      >
                        {" "}
                        {newConvertedDate}{" "}
                      </span>
                      <span className="bg-secondary_sky_lighter h-[100%] flex items-center px-3 border-x border-x-sky_light text-secondary_ink_dark">
                        {" "}
                        @{" "}
                      </span>
                      <span
                        className="px-3 cursor-pointer h-[100%] flex items-center"
                        onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                      >
                        {" "}
                        {exactTime}{" "}
                      </span>
                      <span
                        className="bg-secondary_sky_lighter h-[100%] flex items-center px-3 border-x border-x-sky_light text-secondary_ink_dark cursor-pointer"
                        onClick={() => handleChangeTimePeriod()}
                      >
                        {" "}
                        {time}{" "}
                      </span>
                    </div>

                    {showTimeDropdown && times ? (
                      <div
                        className="absolute right-[6.5rem] bg-white top-[9.5rem] shadow cursor-pointer z-[101]"
                        onClick={() => setShowTimeDropdown(false)}
                      >
                        {times.map((each) => {
                          return (
                            <p
                              className="border-b px-3 py-1 z-[101]"
                              key={each}
                              onClick={() => setExactTime(each)}
                            >
                              {each}
                            </p>
                          );
                        })}
                      </div>
                    ) : null}

                    {showCalendar || showTimeDropdown ? (
                      <div
                        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[99]"
                        onClick={() => {
                          setShowCalendar(false);
                          setShowTimeDropdown(false);
                        }}
                      ></div>
                    ) : null}

                    <div
                      className={`absolute right-0 top-[100%] left-[1.5rem] z-[101] ${
                        !showCalendar ? "hidden" : ""
                      }`}
                    >
                      <Calendar
                        onChange={onChange}
                        value={value}
                        onClickDay={() => setShowCalendar(false)}
                      />
                    </div>

                    <button
                      className="leading-4 text-base font-medium text-white py-2 px-12 rounded-4xl border border-primary bg-primary mt-4 w-[max-content] mx-auto"
                      type="button"
                      form="post-form"
                      onClick={handleSchedule}
                      disabled={loading}
                    >
                      Schedule
                    </button>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </FullNav>

        <div className="px-4 md:px-0">
          <div className="md:w-43/50 mx-auto text-left sm:py-12 sm:px-7 p-4 my-8 bg-white shadow rounded-3xl">
            <div className="step-component">
              {product &&
                stepConfigs[stepIndex].render({
                  stepIndex,
                  setStepIndex,
                  stepTitles: stepConfigs.map((config) => config.title),
                  stepErrors,
                  setStepErrors,
                  onClickPrevious: backward,
                  onClickNext: forward,
                  onClickConfirmButton,
                  product,
                })}
            </div>
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

UpdateProduct.layout = Dashboard;
