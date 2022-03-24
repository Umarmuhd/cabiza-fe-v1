import Link from "next/link";

export const Feature = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-secondary_sky_lighter">
      <h2 className="font-semibold text-secondary text-4xl mb-8 text-center md:text-left">
        Our Features
      </h2>
      <div className="grid gap-8 row-gap-5 sm:row-gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.84 14.4533L37.0533 6.48C34.4133 4.96 30.28 4.96 27.64 6.48L13.72 14.5067C8.20001 18.24 7.88 18.8 7.88 24.7467V39.2267C7.88 45.1733 8.20001 45.76 13.8267 49.5467L27.6133 57.52C28.9467 58.2933 30.6533 58.6667 32.3333 58.6667C34.0133 58.6667 35.72 58.2933 37.0267 57.52L50.9467 49.4933C56.4667 45.76 56.7867 45.2 56.7867 39.2533V24.7467C56.7867 18.8 56.4667 18.24 50.84 14.4533ZM32.3333 40.6667C27.56 40.6667 23.6667 36.7733 23.6667 32C23.6667 27.2267 27.56 23.3333 32.3333 23.3333C37.1067 23.3333 41 27.2267 41 32C41 36.7733 37.1067 40.6667 32.3333 40.6667Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Set up your business right away
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M50.1599 16.6667H53.7866C53.2799 15.9467 52.7466 15.28 52.1866 14.6133L50.1599 16.6667Z"
                fill="#5B44E9"
              />
              <path
                d="M49.3866 11.7867C48.7199 11.2267 48.0533 10.6933 47.3333 10.1867V13.8133L49.3866 11.7867Z"
                fill="#5B44E9"
              />
              <path
                d="M52.2133 14.6133L60.0799 6.74666C60.8533 5.97333 60.8533 4.69333 60.0799 3.92C59.3066 3.14666 58.0266 3.14666 57.2533 3.92L49.3866 11.7867C50.3999 12.6667 51.3333 13.6267 52.2133 14.6133Z"
                fill="#5B44E9"
              />
              <path
                d="M47.3333 8C47.3333 6.90667 46.4266 6 45.3333 6C44.2666 6 43.4133 6.85333 43.3599 7.89333C44.7466 8.56 46.0799 9.30667 47.3333 10.1867V8Z"
                fill="#5B44E9"
              />
              <path
                d="M58 18.6667C58 17.5733 57.0933 16.6667 56 16.6667H53.7866C54.6666 17.92 55.44 19.2533 56.08 20.64C57.1466 20.5867 58 19.7333 58 18.6667Z"
                fill="#5B44E9"
              />
              <path
                d="M33.9999 39.3333H34.7999C35.8399 39.3333 36.6666 38.4 36.6666 37.2533C36.6666 35.8133 36.2666 35.6 35.3599 35.28L33.9999 34.8V39.3333Z"
                fill="#5B44E9"
              />
              <path
                d="M56.1066 20.64C56.0799 20.64 56.0533 20.6667 55.9999 20.6667H45.3333C45.0666 20.6667 44.8266 20.6133 44.5599 20.5067C44.0799 20.2933 43.6799 19.92 43.4666 19.4133C43.3866 19.1733 43.3333 18.9333 43.3333 18.6667V8.00001C43.3333 7.97334 43.3599 7.94668 43.3599 7.89334C39.8933 6.26668 36.0533 5.33334 31.9999 5.33334C17.2799 5.33334 5.33325 17.28 5.33325 32C5.33325 46.72 17.2799 58.6667 31.9999 58.6667C46.7199 58.6667 58.6666 46.72 58.6666 32C58.6666 27.9467 57.7333 24.1067 56.1066 20.64ZM36.6666 31.52C38.3733 32.1067 40.6666 33.36 40.6666 37.28C40.6666 40.6133 38.0266 43.36 34.7999 43.36H33.9999V44.0267C33.9999 45.12 33.0933 46.0267 31.9999 46.0267C30.9066 46.0267 29.9999 45.12 29.9999 44.0267V43.36H29.7866C26.2399 43.36 23.3333 40.3733 23.3333 36.6933C23.3333 35.5733 24.2399 34.6667 25.3333 34.6667C26.4266 34.6667 27.3333 35.5733 27.3333 36.6667C27.3333 38.1333 28.4266 39.3333 29.7866 39.3333H29.9999V33.4133L27.3333 32.48C25.6266 31.8933 23.3333 30.64 23.3333 26.72C23.3333 23.3867 25.9733 20.64 29.1999 20.64H29.9999V20C29.9999 18.9067 30.9066 18 31.9999 18C33.0933 18 33.9999 18.9067 33.9999 20V20.6667H34.2133C37.7599 20.6667 40.6666 23.6533 40.6666 27.3333C40.6666 28.4267 39.7599 29.3333 38.6666 29.3333C37.5733 29.3333 36.6666 28.4267 36.6666 27.3333C36.6666 25.8667 35.5733 24.6667 34.2133 24.6667H33.9999V30.5867L36.6666 31.52Z"
                fill="#5B44E9"
              />
              <path
                d="M27.3333 26.7467C27.3333 28.1867 27.7333 28.4 28.6399 28.72L29.9999 29.2V24.6667H29.1999C28.1866 24.6667 27.3333 25.6 27.3333 26.7467Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Earn big while you learn
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M56.2933 22.8267L37.8133 8.05333C34.96 5.76 30.3466 5.76 27.52 8.02667L9.03997 22.8267C6.95997 24.48 5.62664 27.9733 6.07997 30.5867L9.62664 51.8133C10.2666 55.6 13.8933 58.6667 17.7333 58.6667H47.6C51.4133 58.6667 55.0666 55.5733 55.7066 51.8133L59.2533 30.5867C59.68 27.9733 58.3466 24.48 56.2933 22.8267ZM25.68 46.3467C24.1866 46.3467 23.0133 45.1467 23.0133 43.68C23.0133 42.2133 24.2133 41.0133 25.68 41.0133C27.1466 41.0133 28.3466 42.2133 28.3466 43.68C28.3466 45.1467 27.1466 46.3467 25.68 46.3467ZM33.7066 45.6533C33.68 45.6533 33.68 45.6533 33.6533 45.6533C32.56 45.6533 31.68 44.7733 31.6533 43.7067C31.5733 40.1067 29.2 37.7333 25.6 37.6533C24.5066 37.6267 23.6266 36.72 23.6533 35.6C23.68 34.5067 24.56 33.6533 25.6533 33.6533C25.68 33.6533 25.68 33.6533 25.7066 33.6533C31.44 33.7867 35.5466 37.8667 35.6533 43.6C35.68 44.72 34.8266 45.6533 33.7066 45.6533ZM41.68 45.6533C40.56 45.6533 39.68 44.7733 39.6533 43.68C39.6266 41.92 39.3333 40.24 38.8 38.6667C37.44 34.7733 34.5333 31.8933 30.64 30.5067C29.0666 29.9467 27.3866 29.6533 25.6266 29.6533C24.5333 29.6533 23.6266 28.7467 23.6533 27.6267C23.6533 26.5333 24.56 25.6533 25.6533 25.6533H25.68C27.8933 25.68 30 26.0533 31.9733 26.7467C37.0133 28.5333 40.7733 32.2933 42.56 37.3333C43.2533 39.3067 43.6266 41.44 43.6533 43.6267C43.68 44.7467 42.8 45.6533 41.68 45.6533Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Work from home
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M42.7333 21.52C41.5333 12.3733 33.72 5.33331 24.2533 5.33331C13.9333 5.33331 5.58667 13.68 5.58667 24C5.58667 33.4666 12.6267 41.28 21.7733 42.48C22.5733 42.6133 23.4 42.6666 24.2533 42.6666C24.7092 42.6666 25.1564 42.6493 25.5999 42.6147C26.0118 42.5825 26.1807 42.0874 25.8886 41.7952L25.5867 41.4933C24.8133 40.6933 24.8133 39.44 25.5867 38.6666C26.36 37.8666 27.64 37.8666 28.4133 38.6666L30.8761 41.1295C31.0163 41.2696 31.2261 41.3143 31.4095 41.2393C32.9045 40.6276 34.2852 39.8265 35.5515 38.852C35.7868 38.6709 35.8027 38.3248 35.5916 38.116L33.5867 36.1333C32.8133 35.36 32.7867 34.1066 33.5867 33.3066C34.36 32.5333 35.6133 32.5066 36.4133 33.28L38.4219 35.2662C38.6317 35.4737 38.9752 35.4556 39.1549 35.2216C40.1088 33.9798 40.9051 32.624 41.4958 31.1543C41.5692 30.9719 41.5239 30.7639 41.3848 30.6248L38.92 28.16C38.1467 27.36 38.1467 26.1066 38.92 25.3333C39.6933 24.5333 40.9733 24.5333 41.7467 25.3333L42.0486 25.6353C42.3407 25.9274 42.8359 25.7584 42.868 25.3465C42.9027 24.9031 42.92 24.4559 42.92 24C42.92 23.1466 42.8667 22.32 42.7333 21.52Z"
                fill="#5B44E9"
              />
              <path
                d="M58.92 40C58.92 50.32 50.5733 58.6667 40.2533 58.6667C32.0417 58.6667 25.0553 53.3655 22.5874 45.9594C22.4731 45.6167 22.7628 45.2781 23.1234 45.3011C23.4875 45.3244 23.8659 45.3334 24.2533 45.3334C25.1867 45.3334 26.0667 45.28 26.9733 45.1467L28.7284 44.9127C28.8828 44.8921 29.0379 44.9446 29.148 45.0547L30.84 46.7467C31.24 47.1467 31.7467 47.3334 32.2533 47.3334C32.7867 47.3334 33.2933 47.1467 33.6667 46.7467C34.4667 45.9734 34.4667 44.6934 33.6667 43.92L33.6489 43.9023C33.4006 43.654 33.4785 43.2328 33.7931 43.0766C35.0877 42.4337 36.4224 41.5741 37.554 40.6642C37.7558 40.5019 38.0478 40.5127 38.2319 40.6946L40.0667 42.5067C40.4667 42.88 40.9733 43.0934 41.48 43.0934C41.9867 43.0934 42.52 42.88 42.8933 42.48C43.6667 41.7067 43.6667 40.4267 42.8667 39.6534L41.0553 37.8646C40.8725 37.6841 40.8566 37.3949 41.0142 37.1921C41.8831 36.0734 42.7181 34.7964 43.3542 33.5513C43.5121 33.2422 43.9279 33.1679 44.1733 33.4134C44.5733 33.8134 45.08 34 45.5867 34C46.12 34 46.6267 33.8134 47 33.4134C47.8 32.64 47.8 31.36 47 30.5867L45.308 28.8947C45.1979 28.7846 45.1454 28.6295 45.166 28.4751L45.4 26.72C45.5333 25.8134 45.5867 24.9334 45.5867 24C45.5867 23.6129 45.5777 23.2348 45.5545 22.8708C45.5315 22.5101 45.8704 22.2204 46.2133 22.335C53.5952 24.8038 58.92 31.7895 58.92 40Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Train up to become even better
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M58.6666 22.6666C58.6666 31.36 52.2666 38.5333 43.9466 39.7866V39.6266C43.1199 29.28 34.7199 20.88 24.2933 20.0533H24.2133C25.4666 11.7333 32.6399 5.33331 41.3333 5.33331C50.9066 5.33331 58.6666 13.0933 58.6666 22.6666Z"
                fill="#5B44E9"
              />
              <path
                d="M39.9466 39.9467C39.2799 31.4933 32.5066 24.72 24.0533 24.0533C23.5999 24.0267 23.1199 24 22.6666 24C13.0933 24 5.33325 31.76 5.33325 41.3333C5.33325 50.9067 13.0933 58.6667 22.6666 58.6667C32.2399 58.6667 39.9999 50.9067 39.9999 41.3333C39.9999 40.88 39.9733 40.4 39.9466 39.9467ZM25.0133 43.68L22.6666 48L20.3199 43.68L15.9999 41.3333L20.3199 38.9867L22.6666 34.6667L25.0133 38.9867L29.3333 41.3333L25.0133 43.68Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Sell your works
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M41.5809 49.9172C41.9661 49.7228 42.4238 50.0551 42.3377 50.4779L41.9733 52.2667C40.6666 57.3333 37.7333 58.6667 34.1333 58.6667H31.2266C27.6266 58.6667 24.6666 57.3333 23.3866 52.24L23.0372 50.4595C22.9547 50.0393 23.4074 49.7112 23.7902 49.9031C26.5282 51.2756 29.5442 52 32.6666 52C35.8073 52 38.8419 51.2994 41.5809 49.9172Z"
                fill="#5B44E9"
              />
              <path
                d="M42.3555 13.5614C42.4443 13.9862 41.9832 14.3212 41.5967 14.1239C38.9217 12.7578 35.8889 12 32.6666 12C29.4633 12 26.4499 12.7601 23.7769 14.1112C23.3922 14.3057 22.9357 13.9737 23.0217 13.5513L23.3866 11.76C24.6666 6.66665 27.6266 5.33331 31.2266 5.33331H34.1333C37.7333 5.33331 40.6666 6.66665 41.9733 11.7333L42.3555 13.5614Z"
                fill="#5B44E9"
              />
              <path
                d="M32.6666 14.6667C23.0933 14.6667 15.3333 22.4267 15.3333 32C15.3333 37.6 17.9733 42.56 22.0799 45.7334H22.1066C25.0399 48 28.6933 49.3334 32.6666 49.3334C36.6933 49.3334 40.3733 47.9734 43.3066 45.68H43.3333C47.3866 42.5067 49.9999 37.5467 49.9999 32C49.9999 22.4267 42.2399 14.6667 32.6666 14.6667ZM37.8133 38.3467C37.4133 38.7467 36.9066 38.9334 36.3999 38.9334C35.8933 38.9334 35.3866 38.7467 34.9866 38.3467L31.2533 34.6134C30.8799 34.24 30.6666 33.7334 30.6666 33.2V25.76C30.6666 24.6667 31.5733 23.76 32.6666 23.76C33.7599 23.76 34.6666 24.6667 34.6666 25.76V32.3734L37.8133 35.52C38.5866 36.2934 38.5866 37.5734 37.8133 38.3467Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Escape the 9 to 5 hassles
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.08 20.72C46.8934 20.6934 46.7067 20.6934 46.52 20.72C42.3867 20.5867 39.1067 17.2 39.1067 13.04C39.1067 8.80004 42.5467 5.33337 46.8134 5.33337C51.0534 5.33337 54.52 8.77337 54.52 13.04C54.4934 17.2 51.2134 20.5867 47.08 20.72Z"
                fill="#5B44E9"
              />
              <path
                d="M55.7734 39.2C52.7868 41.2 48.6001 41.9466 44.7334 41.44C45.7468 39.2533 46.2801 36.8266 46.3068 34.2666C46.3068 31.6 45.7201 29.0666 44.6001 26.8533C48.5468 26.32 52.7334 27.0666 55.7468 29.0666C59.9601 31.84 59.9601 36.4 55.7734 39.2Z"
                fill="#5B44E9"
              />
              <path
                d="M17.5067 20.72C17.6934 20.6934 17.8801 20.6934 18.0667 20.72C22.2 20.5867 25.4801 17.2 25.4801 13.04C25.4801 8.77337 22.04 5.33337 17.7734 5.33337C13.5334 5.33337 10.0934 8.77337 10.0934 13.04C10.0934 17.2 13.3734 20.5867 17.5067 20.72Z"
                fill="#5B44E9"
              />
              <path
                d="M17.8 34.2667C17.8 36.8533 18.36 39.3067 19.3733 41.52C15.6133 41.92 11.6933 41.12 8.81332 39.2267C4.59999 36.4267 4.59999 31.8667 8.81332 29.0667C11.6667 27.1467 15.6933 26.3733 19.48 26.8C18.3867 29.04 17.8 31.5733 17.8 34.2667Z"
                fill="#5B44E9"
              />
              <path
                d="M32.6534 42.32C32.4401 42.2933 32.2001 42.2933 31.9601 42.32C27.0534 42.16 23.1334 38.1333 23.1334 33.1733C23.1601 28.1067 27.2401 24 32.3334 24C37.4001 24 41.5068 28.1067 41.5068 33.1733C41.4801 38.1333 37.5868 42.16 32.6534 42.32Z"
                fill="#5B44E9"
              />
              <path
                d="M23.9867 47.84C19.96 50.5334 19.96 54.96 23.9867 57.6267C28.5733 60.6934 36.0933 60.6934 40.68 57.6267C44.7067 54.9334 44.7067 50.5067 40.68 47.84C36.12 44.7734 28.6 44.7734 23.9867 47.84Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Collaborate with peers globally
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="64"
              height="64"
              viewBox="0 0 64 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M43.1733 5.33337H20.8266C11.1199 5.33337 5.33325 11.12 5.33325 20.8267V43.1467C5.33325 52.88 11.1199 58.6667 20.8266 58.6667H43.1466C52.8533 58.6667 58.6399 52.88 58.6399 43.1734V20.8267C58.6666 11.12 52.8799 5.33337 43.1733 5.33337ZM20.3466 48.4C20.3466 49.4934 19.4399 50.4 18.3466 50.4C17.2533 50.4 16.3466 49.4934 16.3466 48.4V42.88C16.3466 41.7867 17.2533 40.88 18.3466 40.88C19.4399 40.88 20.3466 41.7867 20.3466 42.88V48.4ZM33.9999 48.4C33.9999 49.4934 33.0933 50.4 31.9999 50.4C30.9066 50.4 29.9999 49.4934 29.9999 48.4V37.3334C29.9999 36.24 30.9066 35.3334 31.9999 35.3334C33.0933 35.3334 33.9999 36.24 33.9999 37.3334V48.4ZM47.6533 48.4C47.6533 49.4934 46.7466 50.4 45.6533 50.4C44.5599 50.4 43.6533 49.4934 43.6533 48.4V31.8134C43.6533 30.72 44.5599 29.8134 45.6533 29.8134C46.7466 29.8134 47.6533 30.72 47.6533 31.8134V48.4ZM47.6533 23.3867C47.6533 24.48 46.7466 25.3867 45.6533 25.3867C44.5599 25.3867 43.6533 24.48 43.6533 23.3867V20.8C36.8533 27.7867 28.3466 32.72 18.8266 35.0934C18.6666 35.1467 18.5066 35.1467 18.3466 35.1467C17.4399 35.1467 16.6399 34.5334 16.3999 33.6267C16.1333 32.56 16.7733 31.4667 17.8666 31.2C26.8533 28.96 34.8533 24.24 41.1999 17.5734H37.8666C36.7733 17.5734 35.8666 16.6667 35.8666 15.5734C35.8666 14.48 36.7733 13.5734 37.8666 13.5734H45.6799C45.7866 13.5734 45.8666 13.6267 45.9733 13.6267C46.1066 13.6534 46.2399 13.6534 46.3733 13.7067C46.5066 13.76 46.6133 13.84 46.7466 13.92C46.8266 13.9734 46.9066 14 46.9866 14.0534C47.0133 14.08 47.0133 14.1067 47.0399 14.1067C47.1466 14.2134 47.2266 14.32 47.3066 14.4267C47.3866 14.5334 47.4666 14.6134 47.4933 14.72C47.5466 14.8267 47.5466 14.9334 47.5733 15.0667C47.5999 15.2 47.6533 15.3334 47.6533 15.4934C47.6533 15.52 47.6799 15.5467 47.6799 15.5734V23.3867H47.6533Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Grow your business to any size
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
        <div className="flex flex-col justify-between p-5 border rounded-3xl shadow text-center bg-white">
          <div className="flex items-center justify-center w-28 h-28 mx-auto mb-8 rounded-full bg-primary_brand_lightest sm:w-28 sm:h-28">
            <svg
              width="65"
              height="64"
              viewBox="0 0 65 64"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M47.2 46.1333C42.72 46.1333 38.5866 44.0266 35.8933 40.32C35.2533 39.44 35.44 38.1866 36.32 37.52C37.2 36.8533 38.4533 37.0666 39.12 37.9466C41.0666 40.5866 44 42.1066 47.2 42.1066C52.7733 42.1066 57.3333 37.5733 57.3333 31.9733C57.3333 26.3733 52.8 21.84 47.2 21.84C43.4133 21.84 39.84 23.8666 37.8933 27.0933L30.8266 38.8533C28.16 43.3066 23.28 46.0533 18.1066 46.0533C10.32 46.0533 3.9733 39.7066 3.9733 31.92C3.9733 24.1333 10.32 17.7866 18.1066 17.7866C22.5866 17.7866 26.72 19.8933 29.4133 23.6C30.0533 24.48 29.8666 25.7333 28.9866 26.4C28.08 27.0666 26.8533 26.8533 26.1866 25.9733C24.2666 23.3866 21.3333 21.8666 18.1333 21.8666C12.56 21.8666 7.99996 26.4 7.99996 32C7.99996 37.6 12.5333 42.1333 18.1333 42.1333C21.92 42.1333 25.4933 40.1066 27.44 36.88L34.5066 25.12C37.1733 20.6666 42.0533 17.92 47.2266 17.92C55.0133 17.92 61.36 24.2666 61.36 32.0533C61.36 39.84 54.9866 46.1333 47.2 46.1333Z"
                fill="#5B44E9"
              />
              <path
                d="M18 37.3333C20.9455 37.3333 23.3333 34.9455 23.3333 32C23.3333 29.0544 20.9455 26.6666 18 26.6666C15.0544 26.6666 12.6666 29.0544 12.6666 32C12.6666 34.9455 15.0544 37.3333 18 37.3333Z"
                fill="#5B44E9"
              />
              <path
                d="M47.3333 37.3333C50.2788 37.3333 52.6666 34.9455 52.6666 32C52.6666 29.0544 50.2788 26.6666 47.3333 26.6666C44.3878 26.6666 42 29.0544 42 32C42 34.9455 44.3878 37.3333 47.3333 37.3333Z"
                fill="#5B44E9"
              />
            </svg>
          </div>
          <h6 className="mb-8 font-semibold leading-7 text-secondary text-2xl">
            Get unlimited support
          </h6>
          <div className="flex justify-center">
            <a className="text-primary w-auto px-4 py-2 rounded-[48px] border border-primary text-base font-medium leading-4">
              LEARN MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
