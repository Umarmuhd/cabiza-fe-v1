import React, { useState, useEffect, useCallback } from "react";
import ReviewDropdown from "@/components/Dropdowns/ReviewDropdown";
import { useForm } from "react-hook-form";
import axios from "axios";
import MainNavigation from "@/components/Navbars/MainNav";
import PFooter from "@/components/Footer/PFooter";

import { useSetRecoilState } from "recoil";

import { checkout } from "@/atoms/checkout";

import { toast } from "react-hot-toast";

import { useRouter } from "next/router";

import { API_URL } from "@/config/index";
import Loading from "@/components/Loading";
import Checkout from "@/components/Checkout";
import Alert from "@/components/Alert";

const SpinIcon = () => (
  <svg
    className="animate-spin -ml-1 h-8 w-8 md:h-10 md:w-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#5B44E9"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#5B44E9"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function DiscoverSingle() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const setCheckout = useSetRecoilState(checkout);

  const router = useRouter();
  const product_id = router.query.id;

  const fetchProduct = useCallback(async () => {
    try {
      setLoading(true);
      const url = `${API_URL}/products/product/${product_id}`;
      const response = await axios.get(url);
      setProduct(response.data.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [product_id]);

  useEffect(() => {
    fetchProduct();
  }, [product_id, fetchProduct]);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [checkoutView, setCheckoutView] = useState(false);

  const handleCheckout = (value) => {
    const price = value.price;

    const affiliate = router.query.affiliate;

    if (price < product.price) {
      toast.custom(<Alert text="Can't be less than price !" color="#F50000" />);
      reset({ price: "" });
      return;
    }
    setCheckout({ data: { product, price, affiliate } });
    setCheckoutView(true);
  };

  const toggleCheckoutView = () => setCheckoutView(!checkoutView);

  return (
    <div className="h-full w-full">
      {loading ? (
        <div className="min-h-screen grid place-content-center">
          <Loading />
        </div>
      ) : (
        <>
          {checkoutView ? (
            <Checkout toggleCheckout={toggleCheckoutView} />
          ) : (
            <React.Fragment>
              <main>
                <section
                  id="main"
                  className="md:py-20 py-10 bg-secondary_sky_lighter"
                >
                  <div
                    className="mx-auto w-[90%] max-w-[1300px] bg-white rounded-b-2xl"
                    style={{
                      filter: "drop-shadow(0px 20px 40px rgba(0, 0, 0, 0.06))",
                    }}
                  >
                    {product && (
                      <div>
                        <div className="w-[100%] h-[32rem]">
                          <img
                            src={product.thumbnail ?? "/images/book.png"}
                            alt="..."
                            className="w-full h-full"
                          />
                        </div>
                        <div className="md:p-10 p-6 shadow rounded-b-2xl">
                          <div className="flex flex-col justify-between md:flex-row">
                            <div className="md:w-1/2 w-full">
                              <div className="mb-8">
                                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-primary_brand_darkest rounded">
                                  ${product.price}+
                                </span>
                              </div>
                              <p className="text-lg text-secondary_sky_dark font-medium mb-3">
                                Books
                              </p>
                              <h4 className="text-2xl text-secondary font-bold mb-8">
                                {product.name}
                              </h4>
                              <div className="flex items-center">
                                <span className="text-lg text-secondary_sky_dark font-medium mr-2">
                                  By:
                                </span>
                                <img
                                  src={product.user.profile_picture}
                                  alt="..."
                                  className="h-10 w-10 rounded-full"
                                />
                                <p className="text-lg font-medium ml-2 underline text-secondary_sky_dark">
                                  {product.user.full_name}
                                </p>
                              </div>
                              <div className="mt-8">
                                <p className="text-secondary_sky_dark">
                                  {product.description}
                                </p>
                              </div>
                            </div>
                            <form
                              className="md:w-[32%] w-full bg-sky_light p-6 rounded-xl"
                              onSubmit={handleSubmit(handleCheckout)}
                            >
                              <div className="mb-6">
                                <label
                                  htmlFor="price"
                                  className="block text-lg font-medium text-secondary_ink_dark"
                                >
                                  Name a fair price:
                                </label>
                                <div className="mt-2 relative rounded-lg shadow-sm border border-primary_brand_lighter rounded-l-lg">
                                  <div className="absolute inset-y-0 left-0 px-8 flex items-center pointer-events-none rounded-l-lg bg-primary_brand_light border-primary_brand_lighter border-l">
                                    <span className="text-white text-lg font-medium rounded-l-lg">
                                      $
                                    </span>
                                  </div>
                                  <input
                                    type="text"
                                    name="price"
                                    className="focus:ring-primary_brand_lighter focus:border-primary_brand_lighter block w-full pl-7 py-3 pr-12 text-lg border-primary_brand_lighter text-center rounded-lg"
                                    placeholder={`$${product.price}+`}
                                    {...register("price", {
                                      required: true,
                                      disabled: !product?.user_priced ?? true,
                                    })}
                                    defaultValue={product.price}
                                    autoComplete="off"
                                  />
                                </div>
                                {errors.price?.type === "required" && (
                                  <p className="text-left text-red-600 text-xs mt-1">
                                    Product price is required
                                  </p>
                                )}
                              </div>
                              <button
                                className="rounded-lg w-full text-lg font-medium text-white bg-primary py-3"
                                type="submit"
                              >
                                I want this!
                              </button>
                              <div className="mt-6">
                                <ReviewDropdown />
                              </div>
                              <div className="mt-6 py-3 flex items-center justify-between rounded-lg border border-grey_80 px-5">
                                <div className="w-0 flex-1 flex items-center">
                                  <span className="flex-1 w-0 truncate text-lg text-grey_80 font-medium">
                                    Size
                                  </span>
                                </div>
                                <div className="ml-4 flex-shrink-0">
                                  <a
                                    href="#"
                                    className="font-medium text-grey_60"
                                  >
                                    50 MB
                                  </a>
                                </div>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </section>
              </main>
              <PFooter />
            </React.Fragment>
          )}
        </>
      )}
    </div>
  );
}
