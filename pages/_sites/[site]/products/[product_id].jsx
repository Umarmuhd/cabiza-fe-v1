import Alert from "@/components/Alert";
import ReviewDropdown from "@/components/Dropdowns/ReviewDropdown";
import { API_URL } from "@/config/index";
import Username from "@/layouts/Username";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import { checkout } from "@/atoms/checkout";
import Checkout from "@/components/Checkout";

export async function getServerSideProps(context) {
  const product_id = context.params.product_id;

  const fetchProduct = async () => {
    try {
      const url = `${API_URL}/products/product/${product_id}`;
      const response = await axios.get(url);
      return { success: true, data: response.data };
    } catch (error) {
      console.log(error);
      return { success: false, error: error };
    }
  };

  const result = await fetchProduct();

  if (!result.success) {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      productDetails: result.data,
    },
  };
}

const SingleUserProduct = ({ productDetails }) => {
  const { product } = productDetails.data;

  const setCheckout = useSetRecoilState(checkout);

  console.log(product);

  const [checkoutView, setCheckoutView] = useState(false);
  const toggleCheckoutView = () => setCheckoutView(!checkoutView);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

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

  return (
    <Username>
      {checkoutView ? (
        <Checkout toggleCheckout={toggleCheckoutView} footer={false} />
      ) : (
        <main>
          <section
            id="main"
            className="md:py-20 py-10 bg-secondary_sky_lighter"
          >
            <div className="mx-auto w-[90%] max-w-[1300px] bg-white rounded-b-2xl shadow-lg">
              <div className="">
                <div className="w-[100%] h-[32rem]">
                  <img
                    src={productDetails.thumbnail ?? "/images/book.png"}
                    alt="..."
                    className="w-full h-full"
                  />
                </div>
                <div className="md:p-10 p-6 shadow rounded-b-2xl">
                  <div className="flex flex-col justify-between md:flex-row">
                    <div className="md:w-1/2 w-full">
                      <div className="mb-8">
                        <span className="text-sm font-medium py-3 px-5 text-grey_98 bg-primary_brand_darkest rounded price">
                          ${product.price}+
                        </span>
                        <style jsx>{`
                          .price {
                            position: relative;
                          }

                          .price::after {
                            content: "";
                            position: absolute;
                            width: 20%;
                            height: 100%;
                            top: 0;
                            right: -1%;
                            background-color: #fff;
                            clip-path: polygon(0 50%, 100% 100%, 100% 0);
                          }
                        `}</style>
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
                          <a href="#" className="font-medium text-grey_60">
                            50 MB
                          </a>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
      )}
    </Username>
  );
};

export default SingleUserProduct;
