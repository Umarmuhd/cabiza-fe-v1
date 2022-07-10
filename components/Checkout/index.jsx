import React, { useState, useEffect } from "react";
import PFooter from "@/components/Footer/PFooter";
import styles from "./styles/index.module.css";
import { useForm } from "react-hook-form";
import { checkout } from "@/atoms/checkout";
import { useRecoilValue } from "recoil";
import { API_URL } from "@/config/index";
import axios from "axios";
import DropIn from "braintree-web-drop-in-react";
import { useRouter } from "next/router";

const GiftIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.9697 22.75H7.96973C4.54973 22.75 3.21973 21.42 3.21973 18V10C3.21973 9.59 3.55973 9.25 3.96973 9.25H19.9697C20.3797 9.25 20.7197 9.59 20.7197 10V18C20.7197 21.42 19.3897 22.75 15.9697 22.75ZM4.71973 10.75V18C4.71973 20.58 5.38973 21.25 7.96973 21.25H15.9697C18.5497 21.25 19.2197 20.58 19.2197 18V10.75H4.71973Z"
      fill="#CCCCCC"
    />
    <path
      d="M19.5 10.75H4.5C2.75 10.75 1.75 9.75 1.75 8V7C1.75 5.25 2.75 4.25 4.5 4.25H19.5C21.2 4.25 22.25 5.3 22.25 7V8C22.25 9.7 21.2 10.75 19.5 10.75ZM4.5 5.75C3.59 5.75 3.25 6.09 3.25 7V8C3.25 8.91 3.59 9.25 4.5 9.25H19.5C20.38 9.25 20.75 8.88 20.75 8V7C20.75 6.12 20.38 5.75 19.5 5.75H4.5Z"
      fill="#CCCCCC"
    />
    <path
      d="M11.6401 5.75H6.12009C5.91009 5.75 5.71009 5.66001 5.57009 5.51C4.96009 4.84 4.98009 3.81 5.62009 3.17L7.04009 1.75C7.70009 1.09 8.79009 1.09 9.45009 1.75L12.1701 4.47C12.3801 4.68 12.4501 5.01 12.3301 5.29C12.2201 5.57 11.9501 5.75 11.6401 5.75ZM6.67009 4.25001H9.84009L8.39009 2.81C8.31009 2.73 8.18009 2.73 8.10009 2.81L6.68009 4.23001C6.68009 4.24001 6.67009 4.24001 6.67009 4.25001Z"
      fill="#CCCCCC"
    />
    <path
      d="M17.8701 5.75H12.3501C12.0501 5.75 11.7701 5.57 11.6601 5.29C11.5401 5.01 11.6101 4.69 11.8201 4.47L14.5401 1.75C15.2001 1.09 16.2901 1.09 16.9501 1.75L18.3701 3.17C19.0101 3.81 19.0401 4.84 18.4201 5.51C18.2801 5.66001 18.0801 5.75 17.8701 5.75ZM14.1701 4.25001H17.3401C17.3301 4.24001 17.3301 4.24001 17.3201 4.23001L15.9001 2.81C15.8201 2.73 15.6901 2.73 15.6101 2.81L14.1701 4.25001Z"
      fill="#CCCCCC"
    />
    <path
      d="M9.94043 16.9C9.66043 16.9 9.37043 16.83 9.11043 16.69C8.54043 16.38 8.19043 15.79 8.19043 15.15V10C8.19043 9.59 8.53043 9.25 8.94043 9.25H14.9804C15.3904 9.25 15.7304 9.59 15.7304 10V15.13C15.7304 15.78 15.3804 16.37 14.8104 16.67C14.2404 16.98 13.5504 16.94 13.0104 16.58L12.1204 15.98C12.0404 15.92 11.9304 15.92 11.8404 15.98L10.9004 16.6C10.6104 16.8 10.2704 16.9 9.94043 16.9ZM9.69043 10.75V15.14C9.69043 15.27 9.77043 15.33 9.82043 15.36C9.87043 15.39 9.97043 15.42 10.0804 15.35L11.0204 14.73C11.6104 14.34 12.3704 14.34 12.9504 14.73L13.8404 15.33C13.9504 15.4 14.0504 15.37 14.1004 15.34C14.1504 15.31 14.2304 15.25 14.2304 15.12V10.74H9.69043V10.75Z"
      fill="#CCCCCC"
    />
  </svg>
);
const EnvelopeIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M17 21.25H7C3.35 21.25 1.25 19.15 1.25 15.5V8.5C1.25 4.85 3.35 2.75 7 2.75H17C20.65 2.75 22.75 4.85 22.75 8.5V15.5C22.75 19.15 20.65 21.25 17 21.25ZM7 4.25C4.14 4.25 2.75 5.64 2.75 8.5V15.5C2.75 18.36 4.14 19.75 7 19.75H17C19.86 19.75 21.25 18.36 21.25 15.5V8.5C21.25 5.64 19.86 4.25 17 4.25H7Z"
      fill="#CCCCCC"
    />
    <path
      d="M11.9998 12.87C11.1598 12.87 10.3098 12.61 9.65978 12.08L6.52978 9.57997C6.20978 9.31997 6.14978 8.84997 6.40978 8.52997C6.66978 8.20997 7.13978 8.14997 7.45978 8.40997L10.5898 10.91C11.3498 11.52 12.6398 11.52 13.3998 10.91L16.5298 8.40997C16.8498 8.14997 17.3298 8.19997 17.5798 8.52997C17.8398 8.84997 17.7898 9.32997 17.4598 9.57997L14.3298 12.08C13.6898 12.61 12.8398 12.87 11.9998 12.87Z"
      fill="#CCCCCC"
    />
  </svg>
);
const CloseIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9998 0.666748C6.65317 0.666748 0.666504 6.65341 0.666504 14.0001C0.666504 21.3467 6.65317 27.3334 13.9998 27.3334C21.3465 27.3334 27.3332 21.3467 27.3332 14.0001C27.3332 6.65341 21.3465 0.666748 13.9998 0.666748ZM18.4798 17.0667C18.8665 17.4534 18.8665 18.0934 18.4798 18.4801C18.2798 18.6801 18.0265 18.7734 17.7732 18.7734C17.5198 18.7734 17.2665 18.6801 17.0665 18.4801L13.9998 15.4134L10.9332 18.4801C10.7332 18.6801 10.4798 18.7734 10.2265 18.7734C9.97317 18.7734 9.71984 18.6801 9.51984 18.4801C9.13317 18.0934 9.13317 17.4534 9.51984 17.0667L12.5865 14.0001L9.51984 10.9334C9.13317 10.5467 9.13317 9.90675 9.51984 9.52008C9.9065 9.13342 10.5465 9.13342 10.9332 9.52008L13.9998 12.5867L17.0665 9.52008C17.4532 9.13342 18.0932 9.13342 18.4798 9.52008C18.8665 9.90675 18.8665 10.5467 18.4798 10.9334L15.4132 14.0001L18.4798 17.0667Z"
      fill="#303437"
    />
  </svg>
);

const Checkout = ({ toggleCheckout }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [loading, setLoading] = useState(false);
  const [paymentProcessed, setPaymentProcessed] = useState(false);
  const [data, setData] = useState({
    success: false,
    clientToken: null,
    error: "",
    instance: null,
    address: "",
  });

  const product = useRecoilValue(checkout);

  const router = useRouter();

  useEffect(() => {
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

    if (product.data) {
      getBrainTreeToken();
    }
  }, [product]);

  const processPayment = (productId, paymentData) => {
    return axios
      .post(`${API_URL}/products/braintree/payment/${productId}`, paymentData)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.log(err));
  };

  const createOrder = (product_id, orderData) => {
    return axios
      .post(`${API_URL}/orders/create/${product_id}`, orderData)
      .then((response) => {
        return response.data;
      })
      .catch((err) => console.error(err.message));
  };

  const handleCheckout = async (values) => {
    let nonce;
    let getNonce = data.instance
      .requestPaymentMethod()
      .then((data) => {
        console.log(data);
        nonce = data.nonce;

        const paymentData = {
          paymentMethodNonce: nonce,
          amount: product.data.product.price,
        };

        processPayment(product.data.product.product_id, paymentData)
          .then((response) => {
            const { name, email, discount_code } = values;

            const orderData = {
              product_id: product.data.product.product_id,
              affiliate: product.data.affiliate,
              amount: response.transaction.amount,
              payment_info: {
                payment_method: "braintree",
                payment_id: response.transaction.id,
              },
              user: { name, email, discount_code },
            };

            createOrder(product.data.product.product_id, orderData)
              .then((response) => {
                console.log(response);
                setData({ loading: false, success: true });
                const order_id = response.data.order.order_id;
                router.replace(`/checkout/complete/${order_id}`);
              })
              .catch((error) => {
                console.error(error.message);
                setData({ loading: false });
              });
          })
          .catch((error) => {
            console.log(error);
            setData({ loading: false });
          });
      })
      .catch((error) => {
        console.error(error.message);
        setData({ ...data, error: error.message });
      });
  };

  const showDropIn = () => (
    <div onBlur={() => setData({ ...data, error: "" })}>
      {data.clientToken !== null && product ? (
        <div>
          <DropIn
            options={{
              authorization: data.clientToken,
              paypal: {
                flow: "vault",
              },
            }}
            onInstance={(instance) => (data.instance = instance)}
          />
          {!paymentProcessed && (
            <button
              className="mb-8 md:mb-0 bg-primary rounded-lg text-white w-full p-4 text-center mt-6"
              type="submit"
            >
              Pay now
            </button>
          )}
        </div>
      ) : null}
    </div>
  );

  return (
    <div className="bg-grey_85">
      <div style={{ height: "20vh", background: "#090425" }}></div>
      <div className={styles.form}>
        <div
          className="bg-grey_85 p-3 rounded-full w-10 h-10 absolute top-10 left-8 hidden md:flex items-center justify-center"
          onClick={toggleCheckout}
        >
          <CloseIcon />
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
            onSubmit={handleSubmit(handleCheckout)}
          >
            <div className="border border-grey_20 rounded-lg p-4 relative">
              <div className="relative">
                <div className="border-[1.5px] border-grey_85 rounded-lg h-10 flex justify-between items-center px-4">
                  <input
                    type="text"
                    name="fullName"
                    id="fullName"
                    placeholder="Your full name"
                    {...register("name", { required: true })}
                    className="outline-0 w-11/12 placeholder-shown:text-sm"
                  />
                </div>
                {errors.name?.type === "required" && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Full name is required
                  </p>
                )}
              </div>
              <div className="relative mt-4">
                <div className="border-[1.5px] border-grey_85 rounded-lg h-10 flex justify-between items-center px-4">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Your email address"
                    {...register("email", { required: true })}
                    className="outline-0 w-11/12 mr-2.5 placeholder-shown:text-sm"
                  />
                  <EnvelopeIcon />
                </div>
                {errors.email?.type === "required" && (
                  <p className="text-left text-red-600 text-xs mt-1">
                    Email address is required
                  </p>
                )}
              </div>
              <div className="relative mt-4">
                <div className="border-[1.5px] border-grey_85 rounded-lg h-10 flex justify-between items-center px-4">
                  <input
                    type="text"
                    name="discountCount"
                    id="discountCount"
                    placeholder="Discount code (optional)"
                    {...register("discount_code", { required: false })}
                    className="outline-0 w-11/12 mr-2.5 placeholder-shown:text-sm"
                  />
                  <GiftIcon />
                </div>
              </div>
            </div>
            <div className="block mt-5">{showDropIn()}</div>
          </form>
        </section>
      </div>
      <PFooter />
    </div>
  );
};

export default Checkout;
