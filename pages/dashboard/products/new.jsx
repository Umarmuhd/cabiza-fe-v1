import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { Switch, RadioGroup } from "@headlessui/react";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import BuildFollowing from "../../../components/MiniCards/BuildFollowing";

import Dashboard from "../../../layouts/Dashboard";
import { classNames } from "../../../libs/helper";
import {
  FirstComponent,
  SecondComponent,
  ThirdComponent,
  FourthComponent,
  FinalComponent,
} from "./FormComponents/FormComponents";

let progressInterval = null;

const ArrowRight = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M14.4301 18.82C14.2401 18.82 14.0501 18.75 13.9001 18.6C13.6101 18.31 13.6101 17.83 13.9001 17.54L19.4401 12L13.9001 6.46C13.6101 6.17 13.6101 5.69 13.9001 5.4C14.1901 5.11 14.6701 5.11 14.9601 5.4L21.0301 11.47C21.3201 11.76 21.3201 12.24 21.0301 12.53L14.9601 18.6C14.8101 18.75 14.6201 18.82 14.4301 18.82Z"
      fill="white"
    />
    <path
      d="M20.33 12.75H3.5C3.09 12.75 2.75 12.41 2.75 12C2.75 11.59 3.09 11.25 3.5 11.25H20.33C20.74 11.25 21.08 11.59 21.08 12C21.08 12.41 20.74 12.75 20.33 12.75Z"
      fill="white"
    />
  </svg>
);
const PlusIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M18 12.75H6C5.59 12.75 5.25 12.41 5.25 12C5.25 11.59 5.59 11.25 6 11.25H18C18.41 11.25 18.75 11.59 18.75 12C18.75 12.41 18.41 12.75 18 12.75Z"
      fill="white"
    />
    <path
      d="M12 18.75C11.59 18.75 11.25 18.41 11.25 18V6C11.25 5.59 11.59 5.25 12 5.25C12.41 5.25 12.75 5.59 12.75 6V18C12.75 18.41 12.41 18.75 12 18.75Z"
      fill="white"
    />
  </svg>
);

export default function NewProduct() {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = React.useState(false);
  const [category, setCategory] = useState(null);

  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      id: 1,
      label: "My First Step",
      isDone: true,
      component: <FirstComponent />,
    },
    {
      key: "secondStep",
      id: 2,
      label: "My Second Step",
      isDone: false,
      component: <SecondComponent />,
    },
    {
      key: "thirdStep",
      id: 3,
      label: "My Third Step",
      isDone: false,
      component: <ThirdComponent />,
    },
    {
      key: "fourthStep",
      id: 4,
      label: "My Fourth Step",
      isDone: false,
      component: <FourthComponent />,
    },
    {
      key: "finalStep",
      id: 5,
      label: "My Final Step",
      isDone: false,
      component: <FinalComponent />,
    },
  ]);

  const [progress, setProgress] = useState(0);

  const [activeStep, setActiveStep] = useState(steps[0]);

  const handleNext = () => {
    if (steps[steps.length - 1].key === activeStep.key) {
      alert("You have completed all steps.");
      return;
    }

    const index = steps.findIndex((x) => x.key === activeStep.key);
    setSteps((prevStep) =>
      prevStep.map((x) => {
        if (x.key === activeStep.key) x.isDone = true;
        return x;
      })
    );
    setActiveStep(steps[index + 1]);
  };

  useEffect(() => {
    progressInterval = setProgress((activeStep.id / steps.length) * 100);
    // progressInterval = setInterval(() => {
    // }, 100);
  }, [activeStep]);

  useEffect(() => {
    if (progress >= 100) {
      clearInterval(progressInterval);
    }
  }, [progress]);

  // const handleBack = () => {
  //   const index = steps.findIndex(x => x.key === activeStep.key);
  //   if (index === 0) return;

  //   setSteps(prevStep => prevStep.map(x => {
  //     if (x.key === activeStep.key) x.isDone = false;
  //     return x;
  //   }))
  //   setActiveStep(steps[index - 1]);
  //   };

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  const handleCreate = async (values) => {
    setLoading(true);

    const { name, price, currency, description } = values;

    if (category == null) {
      toast.error("please complete all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/products/new`, {
        name,
        price,
        currency,
        category,
        description,
      });

      setLoading(false);
      toast.success(response.data.message);

      if (response.status === 201) {
        return router.push("/dashboard/products");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="bg-grey_95 md:py-4 border-bottom border-b border-grey_80">
        <div className="w-4/5 mx-auto">
          <div className="flex justify-between items-center"></div>
          <div className="mt-8">
            <div className="flex items-center justify-between">
              <div>
                <Link href="/dashboard/products">
                  <a
                    className={classNames(
                      "py-4 px-8 rounded-lg font-semibold",
                      "text-cabiza_tertiary text-lg"
                    )}
                  >
                    Product
                  </a>
                </Link>

                <Link href="/dashboard/products">
                  <a
                    className={classNames(
                      "py-4 px-8 rounded-lg text-lg font-semibold",
                      "text-grey_40"
                    )}
                  >
                    Checkout
                  </a>
                </Link>

                <Link href="/dashboard/products">
                  <a
                    className={classNames(
                      "py-4 px-8 rounded-lg  text-lg font-semibold",
                      "text-grey_40 "
                    )}
                  >
                    Share
                  </a>
                </Link>
              </div>

              <div>
                <button
                  className={classNames(
                    "py-2 px-8 rounded-lg font-semibold",
                    "text-grey_20 bg-white border border-solid border-grey_20 text-lg mr-4"
                  )}
                >
                  Save changes
                </button>

                <button
                  className={classNames(
                    "py-2 px-8 rounded-lg  text-lg font-semibold",
                    "border border-solid bg-primary text-white"
                  )}
                >
                  Publish
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <form
        className="md:w-4/5 mx-auto text-left py-12 px-7"
        onSubmit={handleSubmit(handleCreate)}
      >
        <div className="w-full bg-sky_light h-2 rounded-xl mb-10">
          <div
            className="bg-cabiza_blue h-2 rounded-xl"
            role="progressbar"
            style={{
              width: `${progress}%`,
              transition: "all 0.3s ease-in-out 0s",
            }}
          ></div>
        </div>
        <div className="step-component">{activeStep.component}</div>

        <input
          type="button"
          value={
            steps[steps.length - 1].key !== activeStep.key ? "Next" : "Publish"
          }
          onClick={handleNext}
          className="w-[100%] mt-4 bg-tertiary text-white p-4 cursor-pointer"
        />
      </form>
    </div>
  );
}

NewProduct.layout = Dashboard;
