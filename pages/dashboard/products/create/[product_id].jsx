import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { API_URL } from "@/config/index";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "@/libs/helper";

import CreateProduct from "./create-product";
import ProductInfo from "./product-info";
import ProductContent from "./product-content";
import ProductPricing from "./product-pricing";
import ProductSettings from "./product-settings";
import DashboardNav from "@/components/Navbars/DashboardNav";
import { Tab } from "@headlessui/react";

let progressInterval = null;

export default function UpdateProduct() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const [createProduct, setCreateProduct] = useState(null);
  const [productContent, setProductContent] = useState(null);
  const [productInfo, setProductInfo] = useState(null);
  const [productPrice, setProductPrice] = useState(null);
  const [productSettings, setProductSettings] = useState(null);

  const router = useRouter();

  const productId = router.query.product_id;

  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      id: 1,
      label: "My First Step",
      isDone: true,
      component: CreateProduct,
    },
    {
      key: "secondStep",
      id: 2,
      label: "My Second Step",
      isDone: false,
      component: ProductInfo,
    },
    {
      key: "thirdStep",
      id: 3,
      label: "My Third Step",
      isDone: false,
      component: ProductContent,
    },
    {
      key: "fourthStep",
      id: 4,
      label: "My Fourth Step",
      isDone: false,
      component: ProductPricing,
    },
    {
      key: "finalStep",
      id: 5,
      label: "My Final Step",
      isDone: false,
      component: ProductSettings,
    },
  ]);

  const [progress, setProgress] = useState(0);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  useEffect(() => {
    progressInterval = setProgress((activeStep.id / steps.length) * 100);
  }, [activeStep, steps]);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        setLoading(true);
        const uri = `${API_URL}/products/product/${productId}`;
        const { data } = await axios.get(uri);
        setProduct(data.data.product);

        const {
          name,
          description,
          url,
          thumbnail,
          cover_image,
          call_to_action,
          summary,
          file,
          price,
        } = data.data.product;

        setCreateProduct({ name, description, thumbnail, cover_image });
        setProductInfo({ call_to_action, summary });
        setProductContent({ file, url });
        setProductPrice({ price });
        setProductSettings({});
        setLoading(false);
      } catch (error) {
        console.error(error.message);
        setLoading(false);
      }
    };

    fetchProduct();
  }, [productId]);

  const ActiveComponent = () =>
    activeStep.component({
      product,
      handleNext,
      createProduct,
      setCreateProduct,
      productContent,
      setProductContent,
      productInfo,
      setProductInfo,
      productPrice,
      setProductPrice,
      productSettings,
      setProductSettings,
    });

  const handleSubmitting = async () => {
    try {
      const { name, description, thumbnail, cover_image } = createProduct;

      setLoading(true);

      //   const form_data = new FormData();

      //   form_data.append("name", name);
      //   form_data.append("thumbnail", product?.thumbnail ?? thumbnail[0]);
      //   form_data.append("cover_image", product?.cover_image ?? cover_image[0]);
      //   form_data.append("description", description);

      //   const url = `${API_URL}/products/product/${product.product_id}`;

      //   const { data } = await axios.post(url, form_data);

      setLoading(false);
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };

  console.log(product);

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
                disabled={loading}
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

        <div className="md:w-43/50 mx-auto text-left sm:py-12 sm:px-7 p-4 my-8 bg-white shadow rounded-3xl">
          <div className="step-component">
            {!loading && product && <ActiveComponent />}
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

UpdateProduct.layout = Dashboard;
