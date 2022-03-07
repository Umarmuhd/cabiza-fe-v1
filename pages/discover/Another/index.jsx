import React from "react";
import PFooter from "@/components/Footer/PFooter";
import styles from "./styles/index.module.css";
import { useForm } from "react-hook-form";
import BankCard from "@/components/Forms/BankCard";

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePay = async (values) => {
    console.log(values);
  };

  console.log(errors);

  return (
    <div className="bg-grey_85">
      <div style={{ height: "20vh", background: "#24BAD4" }}></div>
      <div className={styles.form}>
        <div className={styles["cancel-btn-container"]}>
          <div className={styles["cancel-btn"]}>x</div>
        </div>
        <section className="wrapper">
          <div className="text-center">
            <h2 className="font-semibold text-grey_60 mb-2">CHECKOUT</h2>
            <h4 className="font-bold text-2xl text-dark_ md:text-4xl mb-2 md:leading-9">
              Freedom Pack Book
            </h4>
            <p className="text-grey_40">
              Enter your info to complete your purchase
            </p>
          </div>

          <form
            className={`md:mt-8 mt-6 ${styles["input-box"]}`}
            onSubmit={handleSubmit(handlePay)}
          >
            <div className={`border border-grey_20 ${styles["wrapper_form"]}`}>
              <div className={styles["input-container"]}>
                <input
                  type="text"
                  name="fullName"
                  id="fullName"
                  placeholder="Your full name"
                  {...register("name", { required: true })}
                />
              </div>

              <div className={styles["input-container"]}>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Your email address"
                  {...register("email", { required: true })}
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
                  {...register("discount_code", { required: false })}
                />
                <img
                  src="/images/icons/gift.svg"
                  alt="..."
                  style={{ display: "inline", marginLeft: "10px" }}
                />
              </div>
            </div>

            <div className="mt-5 flex justify-between items-center p-4 bg-grey_20 text-white rounded-t-lg">
              <h5>
                Cards
                <img
                  src="/images/icons/cards.svg"
                  alt="..."
                  style={{ display: "inline", marginLeft: "10px" }}
                />
              </h5>
              <p>or pay with</p>
              <div className="bg-white flex items-center justify-center">
                <button className={styles["payment-image"]}>
                  <img
                    src="/images/icons/flutterwave.svg"
                    alt="..."
                    className="inline"
                  />
                </button>
              </div>
            </div>
          </form>

          <BankCard />
        </section>
      </div>
      <PFooter />
    </div>
  );
};

export default PaymentPage;
