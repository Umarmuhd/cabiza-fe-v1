import React from 'react';
import Link from "next/link";
import { useForm } from 'react-hook-form'

const Checkout = ({createOrder}) => {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const onSubmit = data => console.log(data);
    return (
        <section className="w-full h-full bg-grey_85">
              <div className="mx-auto w-11/12 sm:w-10/12 md:w-3/4 bg-white">
                <div className="md:max-w-lg mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <form
                    className="w-full p-3 border-b border-gray-200"
                    onSubmit={handleSubmit(createOrder)}
                  >
                    <div className="mb-0 md:mb-4">
                      <div className="mb-4">
                        <label
                          className="block text-grey_40 text-lg font-semibold mb-3"
                          htmlFor="name"
                        >
                          Full name
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="Your full name"
                            type="text"
                            id="name"
                            {...register("name", { required: true })}
                          />

                          {errors.name?.type === "required" && (
                            <p className="text-left text-red-600 text-xs mt-1">
                              Full name is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-grey_40 text-lg font-semibold mb-3"
                          htmlFor="email"
                        >
                          Email Address
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="Your email address"
                            type="email"
                            {...register("email", { required: true })}
                          />
                          {errors.email?.type === "required" && (
                            <p className="text-left text-red-600 text-xs mt-1">
                              Email address is required
                            </p>
                          )}
                        </div>
                      </div>
                      <div className="mb-4">
                        <label
                          className="block text-grey_40 text-lg font-semibold mb-3"
                          htmlFor="discount_code"
                        >
                          Discount Code
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="Discount code (optional)"
                            type="text"
                            id="discount_code"
                            {...register("discount_code", { required: false })}
                          />
                        </div>
                      </div>
                    </div>

                    {discount && (
                      <div className="py-3 text-center text-grey_80 rounded-lg w-full border border-grey_80">
                        You'll be charged US$9.
                      </div>
                    )}

                    {!order && (
                      <div className="mt-4">
                        <button
                          className="rounded-lg w-full text-lg font-medium text-white bg-cabiza_secondary py-3"
                          type="submit"
                          disabled={ordering || order}
                        >
                          {ordering ? "..." : "Continue"}
                        </button>
                      </div>
                    )}
                  </form>

                  {order && (
                    <div className="payment-methods w-full p-3">
                      <button className="flex items-center my-3">
                        <span>Pay with</span>
                        <img
                          src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                          width="80"
                          className="ml-3"
                        />
                      </button>
                      <hr />
                      <button className="flex items-center my-3">
                        <span>Pay with</span>
                        <Link href={order.pay_link}>
                          <img
                            src="/images/icons/flutterwave.svg"
                            width="80"
                            className="ml-3"
                          />
                        </Link>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </section>
    );
}

export default Checkout;
