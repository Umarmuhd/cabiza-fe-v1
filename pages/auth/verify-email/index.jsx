import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import toast from "react-hot-toast";
import { API_URL, appKey } from "config/index";
import axios from "axios";

const SpinIcon = () => (
  <svg
    class="animate-spin -ml-1 h-8 w-8 md:h-10 md:w-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      class="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#006156"
      stroke-width="4"
    ></circle>
    <path
      class="opacity-75"
      fill="#006156"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

export default function VerifyEmail() {
  const [loading, setLoading] = useState(false);

  const router = useRouter();
  const { email, token } = router.query;

  useEffect(() => {
    const verify = async () => {
      try {
        setLoading(true);
        const response = await axios.post(
          `${API_URL}/account/confirm-email`,
          {
            email,
            token,
          },
          { headers: { appKey } }
        );

        if (response.status === 200 && response.data.status) {
          setLoading(false);
          toast.success("Email verified successfully");
          return router.push("/auth/login");
        } else {
          toast.error("Email verification failed");
          router.push("/auth/login");
        }

        setLoading(false);
      } catch (error) {
        setLoading(false);
        console.log(error);
        toast.error("Email verification failed");
        router.push("/auth/login");
      }
    };
    verify();
  }, []);

  return (
    <div className="bg-light min-h-screen grid place-content-center">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-lg md:text-xl font-semibold text-grey_40">
          {loading ? <SpinIcon /> : "Verifying email. Please wait ..."}
        </h1>
      </div>
    </div>
  );
}
