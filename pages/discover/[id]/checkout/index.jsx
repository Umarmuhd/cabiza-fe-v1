import React, { useState, useEffect, useCallback } from "react";
import PFooter from "@/components/Footer/PFooter";
import styles from "./styles/index.module.css";
import { useForm } from "react-hook-form";
import BankCard from "@/components/Forms/BankCard";
import { checkout } from "@/atoms/checkout";
import { useRecoilValue } from "recoil";
import { API_URL } from "@/config/index";
import axios from "axios";
import dropin from "braintree-web-drop-in";

const PaymentPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: null,
    address: "",
  });
  const [show, setShow] = useState(true);

  const product = useRecoilValue(checkout);

  const handleContinue = async (values) => {
    console.log(values);
  };

  console.log(errors);

  const getBrainTreeToken = async () => {
    try {
      setLoading(true);
      const url = `braintree/gettoken/${product.data.product.user._id}`;
      const response = await axios.get(`${API_URL}/products/${url}`);
      setData({
        ...data,
        clientToken: response.data.data.clientToken,
        success: true,
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (product.data) {
      getBrainTreeToken();
    }
  }, [product.data]);

  useEffect(() => {
    if (show) {
      const initializeBraintree = () =>
        dropin.create(
          {
            authorization: "sandbox_s9gd7m2p_vp62s592633kc5p5",
            container: "#braintree-drop-in-div",
            paypal: {},
          },
          function (error, instance) {
            if (error) console.error(error);
            else setData({ ...data, instance });
          }
        );

      if (data.instance) {
        data.instance.teardown().then(() => {
          initializeBraintree();
        });
      } else {
        initializeBraintree();
      }
    }
  }, [show]);

  return (
    <div className="bg-grey_85">
      <div style={{ height: "20vh", background: "#090425" }}></div>
      <div className={styles.form}>
        <div className={styles["cancel-btn-container"]}>
          <div className={styles["cancel-btn"]}>x</div>
        </div>
        <section className="wrapper">
          <div className="text-center">
            <h2 className="font-semibold text-grey_60 mb-2">CHECKOUT</h2>
            <h4 className="font-bold text-2xl text-dark_ md:text-4xl mb-2 md:leading-9">
              {product.data?.product?.name}
            </h4>
            <p className="text-grey_40">
              Enter your info to complete your purchase
            </p>
          </div>

          <form
            className={`md:mt-8 mt-6 ${styles["input-box"]}`}
            onSubmit={handleSubmit(handleContinue)}
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

            {/* <div className="mt-5 flex justify-between items-center p-4 bg-primary_brand_lighter text-white rounded-t-lg">
              <h5 className="text-primary_brand_dark font-bold text-2xl flex items-center">
                <span className="mr-2">Cards</span>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M19 13.36H2C1.59 13.36 1.25 13.02 1.25 12.61C1.25 12.2 1.59 11.86 2 11.86H19C19.41 11.86 19.75 12.2 19.75 12.61C19.75 13.02 19.41 13.36 19 13.36Z"
                    fill="#331ADB"
                  />
                  <path
                    d="M15.22 21.75H5.78003C2.35003 21.75 1.25 20.66 1.25 17.27V10.28C1.25 7.58999 1.86002 5.99999 4.96002 5.81999C5.22002 5.80999 5.49003 5.79999 5.78003 5.79999H15.22C18.65 5.79999 19.75 6.88999 19.75 10.28V17.43C19.71 20.7 18.61 21.75 15.22 21.75ZM5.78003 7.29999C5.51003 7.29999 5.26003 7.30999 5.03003 7.31999C3.24003 7.42999 2.75 7.80999 2.75 10.28V17.27C2.75 19.83 3.17003 20.25 5.78003 20.25H15.22C17.8 20.25 18.22 19.85 18.25 17.42V10.28C18.25 7.71999 17.83 7.29999 15.22 7.29999H5.78003Z"
                    fill="#331ADB"
                  />
                  <path
                    d="M19 18.18C18.81 18.18 18.62 18.11 18.49 17.98C18.34 17.84 18.25 17.64 18.25 17.43V10.28C18.25 7.72 17.83 7.3 15.22 7.3H5.78003C5.51003 7.3 5.26003 7.31 5.03003 7.32C4.83003 7.33 4.62998 7.25 4.47998 7.11C4.32998 6.97 4.25 6.77 4.25 6.56C4.29 3.3 5.39003 2.25 8.78003 2.25H18.22C21.65 2.25 22.75 3.34 22.75 6.73V13.72C22.75 16.41 22.14 18 19.04 18.18C19.03 18.18 19.01 18.18 19 18.18ZM5.78003 5.8H15.22C18.65 5.8 19.75 6.89 19.75 10.28V16.6C20.91 16.39 21.25 15.79 21.25 13.72V6.73C21.25 4.17 20.83 3.75 18.22 3.75H8.78003C6.50003 3.75 5.91003 4.06 5.78003 5.8Z"
                    fill="#331ADB"
                  />
                  <path
                    d="M6.96027 18.56H5.24023C4.83023 18.56 4.49023 18.22 4.49023 17.81C4.49023 17.4 4.83023 17.06 5.24023 17.06H6.96027C7.37027 17.06 7.71027 17.4 7.71027 17.81C7.71027 18.22 7.38027 18.56 6.96027 18.56Z"
                    fill="#331ADB"
                  />
                  <path
                    d="M12.5494 18.56H9.10938C8.69938 18.56 8.35938 18.22 8.35938 17.81C8.35938 17.4 8.69938 17.06 9.10938 17.06H12.5494C12.9594 17.06 13.2994 17.4 13.2994 17.81C13.2994 18.22 12.9694 18.56 12.5494 18.56Z"
                    fill="#331ADB"
                  />
                </svg>
              </h5>
              <p className="text-secondary_ink_dark text-lg font-medium">
                or pay with
              </p>
              <div className="bg-white flex items-center justify-center">
                <button className={styles["payment-image"]}>
                  <img
                    src="/images/icons/flutterwave.svg"
                    alt="..."
                    className="inline"
                  />
                </button>
              </div>
            </div> */}
          </form>

          {/* <BankCard data={data} product={product} /> */}

          <div className={"block mt-5"}>
            <div className="" id={"braintree-drop-in-div"}></div>
            <button
              className="mb-8 md:mb-0 bg-primary rounded-lg text-white w-full p-4 text-center mt-6"
              disabled={!data.instance}
              onClick={() => {
                if (data.instance) {
                  data.instance.requestPaymentMethod((error, payload) => {
                    if (error) {
                      console.error(error);
                    } else {
                      const paymentMethodNonce = payload.nonce;
                      console.log("payment method nonce", payload.nonce);

                      // TODO: use the paymentMethodNonce to
                      //  call you server and complete the payment here

                      // ...

                      alert(
                        `Payment completed with nonce=${paymentMethodNonce}`
                      );

                      onPaymentCompleted();
                    }
                  });
                }
              }}
            >
              Pay
            </button>
          </div>
        </section>
      </div>
      <PFooter />
    </div>
  );
};

export default PaymentPage;
