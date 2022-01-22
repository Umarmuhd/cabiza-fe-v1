import React from "react";
import { RadioGroup } from "@headlessui/react";

const plans = [
  {
    name: "Startup",
    ram: "12GB",
    cpus: "6 CPUs",
    disk: "160 GB SSD disk",
  },
  {
    name: "Business",
    ram: "16GB",
    cpus: "8 CPUs",
    disk: "512 GB SSD disk",
  },
  {
    name: "Enterprise",
    ram: "32GB",
    cpus: "12 CPUs",
    disk: "1024 GB SSD disk",
  },
];

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

          <ul>
            <div className="w-full py-10">
              <div className="w-full max-w-md mx-auto">
                <RadioGroup value={selected} onChange={setSelected}>
                  <RadioGroup.Label className="sr-only">
                    Server size
                  </RadioGroup.Label>
                  <div className="space-y-2">
                    {plans.map((plan) => (
                      <RadioGroup.Option
                        key={plan.name}
                        value={plan}
                        className={({ active, checked }) =>
                          `${
                            active
                              ? "ring-2 ring-offset-2 ring-offset-sky-300 ring-white ring-opacity-60"
                              : ""
                          }
                  ${
                    checked ? "bg-sky-900 bg-opacity-75 text-white" : "bg-white"
                  }
                    relative rounded-lg shadow-md px-5 py-4 cursor-pointer flex focus:outline-none`
                        }
                      >
                        {({ active, checked }) => (
                          <>
                            <div className="flex items-center justify-between w-full">
                              <div className="flex items-center">
                                <div className="text-sm">
                                  <RadioGroup.Label
                                    as="p"
                                    className={`font-medium  ${
                                      checked ? "text-white" : "text-gray-900"
                                    }`}
                                  >
                                    {plan.name}
                                  </RadioGroup.Label>
                                  <RadioGroup.Description
                                    as="span"
                                    className={`inline ${
                                      checked ? "text-sky-100" : "text-gray-500"
                                    }`}
                                  >
                                    <span>
                                      {plan.ram}/{plan.cpus}
                                    </span>{" "}
                                    <span aria-hidden="true">&middot;</span>{" "}
                                    <span>{plan.disk}</span>
                                  </RadioGroup.Description>
                                </div>
                              </div>
                              {checked && (
                                <div className="flex-shrink-0 text-white">
                                  <CheckIcon className="w-6 h-6" />
                                </div>
                              )}
                            </div>
                          </>
                        )}
                      </RadioGroup.Option>
                    ))}
                  </div>
                </RadioGroup>
              </div>
            </div>
          </ul>
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
