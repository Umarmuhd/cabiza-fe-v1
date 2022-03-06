import React from "react";
import PFooter from "@/components/Footer/PFooter";
import styles from "./styles/index.module.css";
import { useForm } from "react-hook-form";

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePay = async (values) => {
    console.log(values);
  };

  return (
    <div className="bg-grey_85">
      <div style={{ height: "20vh", background: "#24BAD4" }}></div>
      <div className={styles.form}>
        <div className={styles["cancel-btn-container"]}>
          <div className={styles["cancel-btn"]}>x</div>
        </div>
        <section className="wrapper">
          <h2>CHECKOUT</h2>
          <h4>Freedom Pack (ALL COURSES)</h4>
          <p>Enter your info to complete your purchase</p>

          <form
            id="info_form"
            className={`${styles["input-box"]} mt-8`}
            onSubmit={handleSubmit(handlePay)}
          >
            <div className={styles["input-container"]}>
              <input
                type="text"
                name="fullName"
                id="fullName"
                placeholder="Your full name"
              />
            </div>

            <div className={styles["input-container"]}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your email address"
              />
              <img
                src="/images/icons/envelope.svg"
                alt="..."
                style={{ display: "inline", marginLeft: "10px" }}
              />
            </div>

            <div className={styles["input-container"]}>
              <input
                type="text"
                name="discountCount"
                id="discountCount"
                placeholder="Discount code (optional)"
              />
              <img
                src="/images/icons/gift.svg"
                alt="..."
                style={{ display: "inline", marginLeft: "10px" }}
              />
            </div>
          </form>

          <div className={`${styles["input-box"]} mt-8 w-full`}>
            <div className={styles["card-container"]}>
              <h5>
                Cards
                <img
                  src="/images/icons/cards.svg"
                  alt="..."
                  style={{ display: "inline", marginLeft: "10px" }}
                />
              </h5>
              <p>or pay with</p>
              <button className={styles["payment-image"]} form="info_form">
                <img
                  src="/images/icons/flutterwave.svg"
                  alt="..."
                  className="inline"
                />
              </button>
            </div>

            <div className="w-full text-left">
              <form action="" className="pt-4" style={{ width: "100%" }}>
                <div className="mb-6 w-full relative">
                  <label
                    className="block text-grey_40 text-lg font-semibold mb-3"
                    htmlFor="card_number"
                  >
                    Card number
                  </label>
                  <input
                    type="text"
                    className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="card_number"
                    placeholder="0000 0000 0000 0000"
                    {...register("card_number", { required: true })}
                  />
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 w-full md:w-5/12 relative">
                    <label
                      className="block text-grey_40 text-lg font-semibold mb-3"
                      htmlFor="name"
                    >
                      Full name
                    </label>
                    <input
                      type="text"
                      className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                      style={{ transition: "all 0.15s ease 0s" }}
                      id="name"
                      placeholder="Full name"
                      {...register("name", { required: true })}
                    />
                  </div>
                  <div className="flex w-full md:w-7/12 items-center justify-between pl-2">
                    <div className="mb-6 w-7/12 relative">
                      <label
                        className="block text-grey_40 text-lg font-semibold mb-3"
                        htmlFor="date"
                      >
                        Expiry date
                      </label>
                      <input
                        type="text"
                        className="border border-grey_80 px-3 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                        style={{ transition: "all 0.15s ease 0s" }}
                        id="date"
                        placeholder="MM/YY"
                        {...register("date", { required: true })}
                      />
                    </div>
                    <div className="mb-6 w-2/5 relative">
                      <label
                        className="block text-grey_40 text-lg font-semibold mb-3"
                        htmlFor="cvv"
                      >
                        CVV
                      </label>
                      <input
                        type="text"
                        className="border border-grey_80 px-3 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                        style={{ transition: "all 0.15s ease 0s" }}
                        id="cvv"
                        placeholder="123"
                        {...register("cvv", { required: true })}
                      />
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>

          <div
            className={`${styles["input-box"]} mt-3`}
            style={{
              color: "#CCCCCC",
              padding: ".4rem",
            }}
          >
            You'll be charged US$900.
          </div>

          <button className={`${styles.btn} my-5`}>Pay</button>
        </section>
      </div>
      <PFooter />
    </div>
  );
};

export default PaymentPage;
