import React from "react";

export default function Complete() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-secondary_sky_lighter">
      <div className="w-full">
        <div
          className="w-full mx-auto md:w-3/5 bg-white p-6 rounded-2xl border border-secondary_sky_base my-20"
          style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
        >
          <div className="p-6 bg-secondary_sky_light rounded-lg flex items-center justify-between">
            <span className="text-lg font-medium text-secondary_ink_darkest">
              April 23, 2022
            </span>
            <span className="text-lg font-medium text-secondary_ink_darkest">
              $20
            </span>
          </div>
          <div className="py-8 border-y border-secondary_sky_base my-8">
            <div className="p-6 bg-secondary_sky_light rounded-lg">
              <p className="text-2xl font-medium text-secondary_ink_darkest mb-4">
                Components - Free UI Kit
              </p>
              <button
                type="button"
                className="w-full bg-primary text-white p-4 cursor-pointer rounded-lg font-medium flex items-center justify-center"
              >
                <React.Fragment>
                  <span className="">View content</span>
                </React.Fragment>
              </button>
            </div>
          </div>
          <div className="pb-8 mb-8 border-b border-secondary_sky_base">
            <div className="p-6 bg-secondary_sky_light rounded-lg">
              <p className="text-lg text-secondary_ink_darkest mb-4">
                Need an invoice for this?
              </p>
              <button
                type="button"
                className="w-full bg-primary text-white p-4 cursor-pointer rounded-lg font-medium flex items-center justify-center"
              >
                <React.Fragment>
                  <span className="">Generate</span>
                </React.Fragment>
              </button>
            </div>
          </div>
          <div className="text-center">
            <p className="text-lg text-secondary mb-8">
              You’ll get posts from this creator in future.
              <span className="ml-2 text-primary">Unsubscribe</span>
            </p>

            <p className="text-secondary_ink_darkest">
              2120 Broadway, Suite 112 Los Angeles, CA 12345
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
