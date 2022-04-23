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
        <DashboardNav title='Products' />
        <div
          className='bg-secondary_sky_lightest py-6 md:px-0 px-4'
          style={{ boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.04)' }}
        >
          <div className='flex justify-between items-center md:w-43/50 mx-auto'>
            <Tab.List as={'div'} className='flex items-center'>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10',
                    selected
                      ? ' font-bold text-primary'
                      : ' font-medium text-cabiza_grey'
                  )
                }
              >
                Product
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10',
                    selected
                      ? ' font-bold text-primary'
                      : ' font-medium text-cabiza_grey'
                  )
                }
              >
                Checkout
              </Tab>
              <Tab
                as={'button'}
                className={({ selected }) =>
                  classNames(
                    'text-lg mr-10',
                    selected
                      ? ' font-bold text-primary'
                      : ' font-medium text-cabiza_grey'
                  )
                }
              >
                Share
              </Tab>
            </Tab.List>

            <div className='flex items-center justify-between'>
              <a className='leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center'>
                <span className=''>Save changes</span>
              </a>

              <button
                className='leading-4 text-base font-medium bg-transparent py-2 px-3 rounded-4xl border text-primary bg-primary flex items-center'
                type='submit'
                form='post-form'
                disabled={loading}
              >
                <span className='mr-2'>Publish</span>
                <svg
                  width='14'
                  height='7'
                  viewBox='0 0 14 7'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M12.28 0.966553L7.9333 5.31322C7.41997 5.82655 6.57997 5.82655 6.06664 5.31322L1.71997 0.966553'
                    stroke='#5B44E9'
                    strokeWidth='1.5'
                    strokeMiterlimit='10'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className='md:w-43/50 mx-auto text-left sm:py-12 sm:px-7 p-4 my-8 bg-white shadow rounded-3xl'>
          <div className='step-component'>
            {!loading && product && <ActiveComponent />}
          </div>
        </div>
      </Tab.Group>
    </div>
  );
}

UpdateProduct.layout = Dashboard;
