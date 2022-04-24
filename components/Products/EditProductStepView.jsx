import React from "react";
import Pagination from "./Pagination";

export default function EditProductStepView({
  stepIndex,
  setStepIndex,
  stepTitles,
  stepErrors,
  onClickPrevious,
  onClickNext,
  onClickMenuItem,
  onClickConfirmButton,
  children,
}) {
  const isFirstStep = stepIndex === 0;
  const isLastStep = stepIndex === stepTitles.length - 1;

  const ConfirmButton = () => (
    <button
      type="submit"
      className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
      onClick={onClickConfirmButton}
      disabled={stepErrors.find((error) => error)}
    >
      <React.Fragment>
        <span className="mr-4">Submit</span>
        <svg
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5.5 12H19.5M19.5 12L12.5 4.99988M19.5 12L12.5 18.9999"
            stroke="white"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </React.Fragment>
    </button>
  );

  return (
    <div>
      <div className="flex justify-between items-center">
        <div className="flex items-center bg-secondary_sky_lighter rounded-lg p-1">
          <button
            className={
              "px-2 rounded " +
              (isFirstStep
                ? " bg-primary_brand_lighter text-primary"
                : "bg-primary text-white")
            }
            disabled={isFirstStep}
            onClick={onClickPrevious}
          >
            {"<"}
          </button>
          <span className="mx-2 text-primary_brand_lighter">|</span>
          <button
            className={
              "px-2 rounded " +
              (isLastStep
                ? " bg-primary_brand_lighter text-primary"
                : " bg-primary text-white")
            }
            disabled={isLastStep}
            onClick={onClickNext}
          >
            {">"}
          </button>
        </div>
        <span className="text-lg font-medium text-primary_brand_light">
          Step: {stepIndex + 2} of 6
        </span>
      </div>
      <h1 className="text-4xl font-semibold text-secondary_ink_dark mt-8">
        {stepTitles[stepIndex]}
      </h1>
      {children}

      <Pagination
        previousTitle={!isFirstStep ? stepTitles[stepIndex - 1] : undefined}
        nextTitle={!isLastStep ? stepTitles[stepIndex + 1] : undefined}
        onClickPrevious={onClickPrevious}
        onClickNext={onClickNext}
        lastButton={<ConfirmButton />}
        onClickConfirmButton={onClickConfirmButton}
        stepErrors={stepErrors}
      />
    </div>
  );
}
