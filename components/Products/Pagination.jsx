import React from "react";

const Pagination = ({
  previousTitle,
  nextTitle,
  onClickPrevious,
  onClickNext,
  lastButton,
  onClickConfirmButton,
  stepErrors,
}) => {
  return (
    <div>
      {nextTitle ? (
        <button
          type="submit"
          className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
          onClick={onClickNext}
        >
          <React.Fragment>
            <span className="mr-4">Next</span>
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
      ) : (
        <button
          type="submit"
          className="w-full mt-8 bg-primary text-white p-4 cursor-pointer rounded-4xl font-medium flex items-center justify-center"
          onClick={onClickConfirmButton}
          // disabled={stepErrors.find((error) => error)}
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
      )}
    </div>
  );
};

export default Pagination;
