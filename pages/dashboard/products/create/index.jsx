import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import Link from "next/link";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";

import Dashboard from "@/layouts/Dashboard";
import { classNames } from "@/libs/helper";

import CreateProduct from "./create-product";
import ProductInfo from "./product-info";
import ProductContent from "./product-content";
import ProductPricing from "./product-pricing";
import ProductSettings from "./product-settings";

let progressInterval = null;

export default function Create() {
  const [loading, setLoading] = useState(false);
  const [enabled, setEnabled] = React.useState(false);
  const [category, setCategory] = useState(null);

  const [steps, setSteps] = useState([
    {
      key: "firstStep",
      id: 1,
      label: "My First Step",
      isDone: true,
      component: <CreateProduct />,
    },
    {
      key: "secondStep",
      id: 2,
      label: "My Second Step",
      isDone: false,
      component: <ProductInfo />,
    },
    {
      key: "thirdStep",
      id: 3,
      label: "My Third Step",
      isDone: false,
      component: <ProductContent />,
    },
    {
      key: "fourthStep",
      id: 4,
      label: "My Fourth Step",
      isDone: false,
      component: <ProductPricing />,
    },
    {
      key: "finalStep",
      id: 5,
      label: "My Final Step",
      isDone: false,
      component: <ProductSettings />,
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

Create.layout = Dashboard;
