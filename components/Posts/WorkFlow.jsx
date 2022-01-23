import React from "react";
import { RadioGroup } from "@headlessui/react";

function CheckIcon(props) {
  return (
    <svg viewBox="0 0 24 24" fill="none" {...props}>
      <circle cx={12} cy={12} r={12} fill="#fff" opacity="0.2" />
      <path
        d="M7 13l3 3 7-7"
        stroke="#fff"
        strokeWidth={1.5}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export default function WorkFlow() {
  const [selected, setSelected] = React.useState(false);
  return (
    <main className="w-full h-full relative">
      <div className="w-4/5 mx-auto md:py-10 flex justify-between">
        <div className="w-[34%] rounded-2xl border border-grey_80 py-8 px-6">
          <h2 className="text-grey_40 font-semibold mb-2">AUDIENCE</h2>

          <RadioGroup as={"ul"} value={selected} onChange={setSelected}>
            <RadioGroup.Option
              as={"li"}
              value="everyone"
              className={({ active, checked }) => `mb-2 ${checked} ${active}`}
            >
              {({ checked, active }) => (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">Everyone</span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              as={"li"}
              value="followers"
              className={({ active, checked }) => `mb-2 ${checked} ${active}`}
            >
              {({ checked, active }) => (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">
                      Followers only
                    </span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              as={"li"}
              value="customers"
              className={({ active, checked }) => `mb-2 ${checked} ${active}`}
            >
              {({ checked, active }) => (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">
                      Customers only
                    </span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
            <RadioGroup.Option
              as={"li"}
              value="affiliates"
              className={({ active, checked }) => `mb-2 ${checked} ${active}`}
            >
              {({ checked, active }) => (
                <>
                  <div className="flex justify-between items-center">
                    <span className="text-grey_60 font-medium">
                      Affiliates only
                    </span>
                    <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center">
                      {checked && (
                        <div className="w-3 h-3 rounded-full inline-block bg-cabiza_blue"></div>
                      )}
                    </div>
                  </div>
                </>
              )}
            </RadioGroup.Option>
          </RadioGroup>
        </div>
        <div className="w-[62%]">
          <div className="rounded-2xl border border-grey_80 p-6 mb-6 relative">
            <label
              className="block text-grey_40 text-lg font-semibold mb-3"
              htmlFor="name"
            >
              Name of workflow
            </label>
            <input
              type="text"
              className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
              style={{ transition: "all 0.15s ease 0s" }}
              id="name"
              placeholder="Name of work flow"
            />
          </div>
          <div className="rounded-2xl border border-grey_80 p-6">
            <p className="text-sm grey_40 text-center">
              You’ll be able to add automated emails after you’ve created this
              workflow.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
