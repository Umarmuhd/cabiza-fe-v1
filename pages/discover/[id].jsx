import React, { useState, useEffect } from "react";
import ReviewDropdown from "@/components/Dropdowns/ReviewDropdown";
import { useForm } from "react-hook-form";
import axios from "axios";
import MainFooter from "@/components/Footer/MainFooter";
import MainNavigation from "@/components/Navbars/MainNav";

import { toast } from "react-hot-toast";

import { useRouter } from "next/router";

import { API_URL } from "@/config/index";
import Checkout from "@/components/Checkout";

export default function DiscoverSingle() {
  const [loading, setLoading] = useState(false);
  const [product, setProduct] = useState(null);

  const router = useRouter();
  const product_id = router.query.id;

  const fetchProduct = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/products/product/${product_id}`
      );

      setProduct(response.data.data.product);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProduct(), [product_id]);

  const [showCheckout, setShowCheckout] = useState(false);
  const [ordering, setOrdering] = useState(false);

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleCheckout = (value) => {
    const price = value.price;

    if (price < product.price) {
      toast.error("value can't be less than actual price");
      reset({ price: "" });
      return;
    }

    setShowCheckout(true);
  };

  const [discount, setDiscount] = useState(null);
  const [order, setOrder] = useState(null);

  const createOrder = async (values) => {
    const { price, name, email, discount_code } = values;

    try {
      setOrdering(true);
      const res = await axios.post(
        `${API_URL}/orders/new/${product.product_id}`,
        {
          price,
          name,
          email,
          discount_code,
        }
      );

      console.log(res.data);
      setOrdering(false);
      setOrder(res.data.data.order);
    } catch (error) {
      console.log(error);
      setOrdering(false);
    }
  };

  // const verifyAccountId = async () => {};
  // useDebounce(() => verifyAccountId(), 1000, [values.accountId]);

  return (
    <div className="h-full w-full">
      <MainNavigation />
      {loading ? (
        <div className="min-h-screen grid place-content-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-lg md:text-xl font-semibold text-grey_40">
              ...
            </h1>
          </div>
        </div>
      ) : (
        <main>
          {!showCheckout ? (
            <section id="main" className="md:py-20 py-10">
              <div className="mx-auto w-[90%] max-w-[1300px]">
                {product && (
                  <>
                    <img src={product.image} alt="..." className="w-full" />
                    <div className="md:p-10 p-6 shadow border border-grey_80">
                      <div className="flex flex-col justify-between md:flex-row">
                        <div className="md:w-1/2 w-full">
                          <div className="mb-8">
                            <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-cabiza_blue rounded">
                              ${product.price}+
                            </span>
                          </div>
                          <p className="text-lg text-grey_80 font-medium mb-3">
                            Books
                          </p>
                          <h4 className="text-2xl text-dark_ font-bold mb-8">
                            {product.name}
                          </h4>
                          <div className="flex items-center">
                            <span className="text-lg text-grey_60 font-medium mr-2">
                              By:
                            </span>
                            <img
                              src={product.user.profile_picture}
                              alt="..."
                              className="h-10 w-10 rounded-full"
                            />
                            <p className="text-lg font-medium ml-2 underline text-grey_60">
                              {product.user.full_name}
                            </p>
                          </div>
                          <div className="mt-8">
                            <p className="text-lg font-medium text-grey_60">
                              {product.description}
                            </p>
                          </div>
                        </div>
                        <form
                          className="md:w-[32%] w-full"
                          onSubmit={handleSubmit(handleCheckout)}
                        >
                          <div className="mb-6">
                            <label
                              htmlFor="price"
                              className="block text-lg font-semibold text-grey_40"
                            >
                              Name a fair price:
                            </label>
                            <div className="mt-2 relative rounded-lg shadow-sm border border-grey_80 rounded-l-lg">
                              <div className="absolute inset-y-0 left-0 px-8 flex items-center pointer-events-none rounded-l-lg bg-grey_95 border-grey_80 border-l">
                                <span className="text-grey_40 text-lg font-medium rounded-l-lg">
                                  $
                                </span>
                              </div>
                              <input
                                type="text"
                                name="price"
                                className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 py-3 pr-12 text-lg border-gray-300 text-center rounded-lg"
                                placeholder={`$${product.price}+`}
                                {...register("price", { required: true })}
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
                            className="rounded-lg w-full text-lg font-medium text-white bg-cabiza_secondary py-3"
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
                  </>
                )}
              </div>
            </section>
          ) : (

            <Checkout createOrder={createOrder}/>
            // <section className="w-full h-full bg-grey_85">
            //   <div className="mx-auto w-11/12 sm:w-10/12 md:w-3/4 bg-white">
            //     <div className="md:max-w-lg mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
            //       <form
            //         className="w-full p-3 border-b border-gray-200"
            //         onSubmit={handleSubmit(createOrder)}
            //       >
            //         <div className="mb-0 md:mb-4">
            //           <div className="mb-4">
            //             <label
            //               className="block text-grey_40 text-lg font-semibold mb-3"
            //               htmlFor="name"
            //             >
            //               Full name
            //             </label>
            //             <div>
            //               <input
            //                 className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            //                 placeholder="Your full name"
            //                 type="text"
            //                 id="name"
            //                 {...register("name", { required: true })}
            //               />

            //               {errors.name?.type === "required" && (
            //                 <p className="text-left text-red-600 text-xs mt-1">
            //                   Full name is required
            //                 </p>
            //               )}
            //             </div>
            //           </div>
            //           <div className="mb-4">
            //             <label
            //               className="block text-grey_40 text-lg font-semibold mb-3"
            //               htmlFor="email"
            //             >
            //               Email Address
            //             </label>
            //             <div>
            //               <input
            //                 className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            //                 placeholder="Your email address"
            //                 type="email"
            //                 {...register("email", { required: true })}
            //               />
            //               {errors.email?.type === "required" && (
            //                 <p className="text-left text-red-600 text-xs mt-1">
            //                   Email address is required
            //                 </p>
            //               )}
            //             </div>
            //           </div>
            //           <div className="mb-4">
            //             <label
            //               className="block text-grey_40 text-lg font-semibold mb-3"
            //               htmlFor="discount_code"
            //             >
            //               Discount Code
            //             </label>
            //             <div>
            //               <input
            //                 className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
            //                 placeholder="Discount code (optional)"
            //                 type="text"
            //                 id="discount_code"
            //                 {...register("discount_code", { required: false })}
            //               />
            //             </div>
            //           </div>
            //         </div>

            //         {discount && (
            //           <div className="py-3 text-center text-grey_80 rounded-lg w-full border border-grey_80">
            //             You'll be charged US$9.
            //           </div>
            //         )}

            //         {!order && (
            //           <div className="mt-4">
            //             <button
            //               className="rounded-lg w-full text-lg font-medium text-white bg-cabiza_secondary py-3"
            //               type="submit"
            //               disabled={ordering || order}
            //             >
            //               {ordering ? "..." : "Continue"}
            //             </button>
            //           </div>
            //         )}
            //       </form>

            //       {order && (
            //         <div className="payment-methods w-full p-3">
            //           <button className="flex items-center my-3">
            //             <span>Pay with</span>
            //             <img
            //               src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
            //               width="80"
            //               className="ml-3"
            //             />
            //           </button>
            //           <hr />
            //           <button className="flex items-center my-3">
            //             <span>Pay with</span>
            //             <Link href={order.pay_link}>
            //               <img
            //                 src="/images/icons/flutterwave.svg"
            //                 width="80"
            //                 className="ml-3"
            //               />
            //             </Link>
            //           </button>
            //         </div>
            //       )}
            //     </div>
            //   </div>
            // </section>
          )}
        </main>
      )}
      <MainFooter />
    </div>
  );
}
