import React from 'react';
import Pagination from './Pagination';

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
              'px-2 rounded ' +
              (isFirstStep
                ? ' bg-primary_brand_lighter text-primary'
                : 'bg-primary text-white')
            }
            disabled={isFirstStep}
            onClick={onClickPrevious}
          >
            <svg width="6" height="12" viewBox="0 0 6 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5.50002 11.78C5.37335 11.78 5.24669 11.7333 5.14669 11.6333L0.800019 7.28666C0.0933529 6.58 0.0933529 5.42 0.800019 4.71333L5.14669 0.366664C5.34002 0.173331 5.66002 0.173331 5.85335 0.366664C6.04669 0.559998 6.04669 0.879998 5.85335 1.07333L1.50669 5.42C1.18669 5.74 1.18669 6.26 1.50669 6.58L5.85335 10.9267C6.04669 11.12 6.04669 11.44 5.85335 11.6333C5.75335 11.7267 5.62669 11.78 5.50002 11.78Z" fill="#5B44E9" />
            </svg>

          </button>
          <span className="mx-2 text-primary_brand_lighter">|</span>
          <button
            className={
              'px-2 rounded ' +
              (isLastStep
                ? ' bg-primary_brand_lighter text-primary'
                : ' bg-primary text-white')
            }
            disabled={isLastStep}
            onClick={onClickNext}
          >
            <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1.44023 11.78C1.31356 11.78 1.18689 11.7333 1.08689 11.6333C0.893561 11.44 0.893561 11.12 1.08689 10.9267L5.43356 6.58C5.75356 6.26 5.75356 5.74 5.43356 5.42L1.08689 1.07333C0.893561 0.879998 0.893561 0.559998 1.08689 0.366664C1.28023 0.173331 1.60023 0.173331 1.79356 0.366664L6.14023 4.71333C6.48023 5.05333 6.67356 5.51333 6.67356 6C6.67356 6.48666 6.48689 6.94666 6.14023 7.28666L1.79356 11.6333C1.69356 11.7267 1.56689 11.78 1.44023 11.78Z" fill="white" />
            </svg>

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
