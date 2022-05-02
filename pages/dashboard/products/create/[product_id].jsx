import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
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
      setPublished(response.data.data.product.published);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div>
      <Tab.Group>
        <FullNav title="Products">
          <div className="md:px-0">
            <div className="flex justify-between items-center md:w-43/50 mx-auto mt-[.5rem]">
              <Tab.List as={"div"} className="flex items-center">
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
                      "text-md mr-10 pb-2 font-medium",
                      selected
                        ? " font-bold text-primary border-b border-b-primary"
                        : " text-secondary"
                    )
                  }
                >
                  Share
                </Tab>
              </Tab.List>

              <div className="flex items-center justify-between mt-[-.5rem]">
                <button
                  className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center"
                  onClick={handleSubmitting}
                >
                  <span className="">Save changes</span>
                </button>

                <button
                  className="leading-4 text-base font-medium bg-transparent py-2 px-3 rounded-4xl border text-primary bg-primary flex items-center"
                  type="submit"
                  form="post-form"
                  disabled={loading}
                  onClick={handlePublish}
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
              </div>
            </div>
          </div>
        </FullNav>

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
      </Tab.Group>
    </div>
  );
}

UpdateProduct.layout = Dashboard;
