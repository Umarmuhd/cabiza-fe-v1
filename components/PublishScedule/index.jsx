import { Popover, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/solid";
import { Fragment, useEffect, useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import toast from "react-hot-toast";

const PublishSchedule = ({ handlePublishNow, loading, disabled }) => {
  const [showTimeDropdown, setShowTimeDropdown] = useState(false);

  //calendar
  const [showCalendar, setShowCalendar] = useState(false);
  const [time, setTime] = useState("PM");
  const [exactTime, setExactTime] = useState(12);

  const handleChangeTimePeriod = () => {
    if (time !== "PM") {
      setTime("PM");
    } else {
      setTime("AM");
    }
  };

  const times = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  const [value, onChange] = useState(new Date());

  const handleConvertDate = (month, day, year) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    return `${months[month]} ${day}, ${year}`;
  };

  const [newConvertedDate, setNewConvertedDate] = useState(
    handleConvertDate(value.getMonth(), value.getDate(), value.getFullYear())
  );

  useEffect(() => {
    setNewConvertedDate(
      handleConvertDate(value.getMonth(), value.getDate(), value.getFullYear())
    );
  }, [value]);

  return (
    <div className="w-full max-w-sm">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
            ${open ? "" : "text-opacity-90"}
            group inline-flex items-center rounded-4xl bg-primary px-3 py-2 text-base font-medium text-white hover:text-opacity-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 leading-4`}
            >
              <span>Publish</span>
              <ChevronDownIcon
                className={`${open ? "" : "text-opacity-70"}
              ml-2 h-5 w-5 text-white transition duration-150 ease-in-out group-hover:text-opacity-80`}
                aria-hidden="true"
              />
            </Popover.Button>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-1/2 md:right-0 md:w-[25rem] z-10 mt-3 w-screen max-w-sm -translate-x-1/2 transform px-4 sm:px-0 lg:max-w-3xl">
                <div className="overflow-hidden rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
                  <div className="bg-white p-7">
                    <div className="flex justify-center w-full text-center">
                      <button
                        className={
                          "leading-4 text-base font-medium text-white py-2 md:px-12 px-6 rounded-4xl border border-primary bg-primary " +
                          (disabled && "bg-primary/40 cursor-not-allowed")
                        }
                        disabled={loading}
                        onClick={handlePublishNow}
                      >
                        Publish now
                      </button>
                    </div>
                    <div className="border-t border-[#979C9E] my-4 py-2">
                      <p className="w-[max-content] px-4 mx-auto z-[3] bg-white">
                        or
                      </p>
                    </div>
                    <div className="w-[max-content] mx-auto border border-sky_light pl-4 h-[3rem] rounded-xl flex items-center overflow-hidden relative">
                      <span
                        className="text-secondary_ink_dark pr-8 cursor-pointer"
                        onClick={() => setShowCalendar(!showCalendar)}
                      >
                        {" "}
                        {newConvertedDate}{" "}
                      </span>
                      <span className="bg-secondary_sky_lighter h-[100%] flex items-center px-3 border-x border-x-sky_light text-secondary_ink_dark">
                        {" "}
                        @{" "}
                      </span>
                      <span
                        className="px-3 cursor-pointer"
                        onClick={() => setShowTimeDropdown(!showTimeDropdown)}
                      >
                        {" "}
                        {exactTime}{" "}
                      </span>
                      <span
                        className="bg-secondary_sky_lighter h-[100%] flex items-center px-3 border-x border-x-sky_light text-secondary_ink_dark cursor-pointer"
                        onClick={() => handleChangeTimePeriod()}
                      >
                        {" "}
                        {time}{" "}
                      </span>
                    </div>
                    {showTimeDropdown && times ? (
                      <div
                        className="absolute right-[6.5rem] bg-white top-[9.5rem] shadow cursor-pointer z-[101]"
                        onClick={() => setShowTimeDropdown(false)}
                      >
                        {times.map((each) => {
                          return (
                            <p
                              className="border-b px-3 py-1"
                              key={each}
                              onClick={() => setExactTime(each)}
                            >
                              {each}
                            </p>
                          );
                        })}
                      </div>
                    ) : null}

                    {showCalendar || showTimeDropdown ? (
                      <div
                        className="fixed top-0 left-0 w-[100vw] h-[100vh] z-[99]"
                        onClick={() => {
                          setShowCalendar(false);
                          setShowTimeDropdown(false);
                        }}
                      ></div>
                    ) : null}

                    <div
                      className={`absolute right-0 top-[100%] left-[1.5rem] z-[101] ${
                        !showCalendar ? "hidden" : ""
                      }`}
                    >
                      <Calendar
                        onChange={onChange}
                        value={value}
                        onClickDay={() => setShowCalendar(false)}
                      />
                    </div>

                    <div className="flex justify-center mt-4">
                      <button
                        className="leading-4 text-base font-medium text-white py-2 px-12 rounded-4xl border border-primary bg-primary/40 cursor-not-allowed  w-[max-content] mx-auto"
                        type="button"
                        form="post-form"
                        disabled={loading}
                        onClick={(e) => {
                          toast.custom("Coming soon...");
                        }}
                      >
                        Schedule
                      </button>
                    </div>
                  </div>
                </div>
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default PublishSchedule;
