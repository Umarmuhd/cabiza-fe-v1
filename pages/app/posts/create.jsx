import React, { useState, useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import FullNav from "@/components/Navbars/DashboardNav/FullNav";

import Dashboard from "@/layouts/Dashboard";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import FormGroup from "@/components/Forms/FormGroup";
import Alert from "@/components/Alert";
import CheckSwitch from "@/components/checkSwitch";
import TextFormat from "@/components/TextFormat";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const CheckIcon = ({ classes }) => (
  <svg
    width="12"
    height="9"
    viewBox="0 0 12 9"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`${classes}`}
  >
    <path
      d="M11 1.25L4.125 8.125L1 5"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PlusIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 8H12"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M8 12V4"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function CreatePost() {
  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: { audience: 0 },
  };

  const { register, handleSubmit, watch, formState } = useForm(formOptions);
  const { errors } = formState;

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handlePublish = async (values) => {
    setLoading(true);

    const { title, description, call_to_action, attachment, audience } = values;

    const form_data = new FormData();

    form_data.append("title", title);
    form_data.append("description", description);
    form_data.append("call_to_action", call_to_action);
    form_data.append("attachment", attachment[0]);
    form_data.append("audience", audience);
    form_data.append("send_email", values.send_email);
    form_data.append("post_to_profile", values.post_to_profile);
    form_data.append("allow_comments", values.allow_comments);
    form_data.append("allow_likes", values.allow_likes);

    try {
      const response = await axios.post(`${API_URL}/posts/new`, form_data);

      setLoading(false);
      toast.custom(
        <Alert color="#24C78C" text={`${response.data.message} !`} />
      );

      router.push("/posts");
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  const [showDropdown, setShowDropdown] = useState(false);
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
  // const handleExactTimeChange = () => {

  //   setExactTime()
  // }

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
    <div className="lg:w-[85%] w-[100%] ml-auto">
      <FullNav title="Posts">
        <div className="bg-secondary_sky_lightest py-2 md:px-0 px-4">
          <div className="flex justify-between items-center md:w-43/50 mx-auto">
            <div className="flex">
              <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M13.7449 6.36857L13.7448 6.36839C12.2745 4.05784 10.1649 2.78662 8 2.78662C6.91371 2.78662 5.8504 3.10332 4.86923 3.70546C3.88753 4.31459 2.99282 5.21107 2.25505 6.36857H13.7449ZM13.7449 6.36857C14.0161 6.79423 14.1667 7.3838 14.1667 7.99912C14.1667 8.61458 14.016 9.2018 13.7457 9.62345L13.745 9.62455C13.0072 10.7821 12.1125 11.6786 11.1308 12.2878C10.1496 12.8899 9.08628 13.2066 8 13.2066C5.83453 13.2066 3.72534 11.9415 2.25549 9.62537L2.25505 9.62468M13.7449 6.36857L2.25505 9.62468M2.25505 9.62468C1.98379 9.1988 1.83333 8.61081 1.83333 7.99662M2.25505 9.62468L1.83333 7.99662M1.83333 7.99662C1.83333 7.3825 1.98376 6.79455 2.25497 6.36869L1.83333 7.99662ZM4.80666 7.99995C4.80666 9.76196 6.22971 11.1933 8 11.1933C9.77028 11.1933 11.1933 9.76196 11.1933 7.99995C11.1933 6.23795 9.77028 4.80662 8 4.80662C6.22971 4.80662 4.80666 6.23795 4.80666 7.99995Z"
                    fill="#5B44E9"
                    stroke="#5B44E9"
                  />
                  <path
                    d="M8.00001 6.09326C6.95334 6.09326 6.10001 6.94659 6.10001 7.99993C6.10001 9.04659 6.95334 9.89993 8.00001 9.89993C9.04667 9.89993 9.90667 9.04659 9.90667 7.99993C9.90667 6.95326 9.04667 6.09326 8.00001 6.09326Z"
                    fill="#5B44E9"
                  />
                </svg>

                <span className="ml-2">Preview</span>
              </a>
            </div>

            <div className="flex items-center justify-between relative">
              <Link href="/posts">
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center mr-6">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M1.83331 7.99992C1.83331 4.60273 4.60279 1.83325 7.99998 1.83325C11.3972 1.83325 14.1666 4.60273 14.1666 7.99992C14.1666 11.3971 11.3972 14.1666 7.99998 14.1666C4.60279 14.1666 1.83331 11.3971 1.83331 7.99992ZM10.5935 10.5935C10.9821 10.2049 10.9821 9.56829 10.5935 9.1797L9.41375 7.99992L10.5935 6.82014C10.9821 6.43154 10.9821 5.79496 10.5935 5.40637C10.2049 5.01777 9.56835 5.01777 9.17976 5.40637L7.99998 6.58615L6.8202 5.40637C6.4316 5.01777 5.79502 5.01777 5.40643 5.40637C5.01783 5.79496 5.01783 6.43154 5.40643 6.82014L6.58621 7.99992L5.40643 9.1797C5.01783 9.56829 5.01783 10.2049 5.40643 10.5935C5.60514 10.7922 5.8612 10.8866 6.11331 10.8866C6.36543 10.8866 6.62149 10.7922 6.8202 10.5935L7.99998 9.41369L9.17976 10.5935C9.37847 10.7922 9.63453 10.8866 9.88665 10.8866C10.1388 10.8866 10.3948 10.7922 10.5935 10.5935Z"
                      fill="#5B44E9"
                      stroke="#5B44E9"
                    />
                  </svg>
                  <span className="ml-2">Cancel</span>
                </a>
              </Link>

              <a
                className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center cursor-pointer"
                onClick={() => setShowDropdown(!showDropdown)}
              >
                <span className="mr-2">Publish</span>
                <svg
                  width="14"
                  height="7"
                  viewBox="0 0 14 7"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.28 0.966553L7.9333 5.31322C7.41997 5.82655 6.57997 5.82655 6.06664 5.31322L1.71997 0.966553"
                    stroke="#5B44E9"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>

              {showDropdown ? (
                <div
                  className="absolute left-[.3rem] top-[4rem] rounded-xl bg-white px-3 py-5 z-[5] w-[25rem] flex flex-col"
                  style={{
                    border: "1px solid #E3E5E6",
                    boxShadow: "0px 8px 15px rgba(0, 0, 0, 0.15)",
                  }}
                >
                  <div className="border-b border-b-[#979C9E] flex flex-col items-center pb-7">
                    <button
                      className="leading-4 text-base font-medium text-white py-2 px-12 rounded-4xl border border-primary bg-primary"
                      type="submit"
                      form="post-form"
                      disabled={loading}
                    >
                      Publish now
                    </button>
                  </div>
                  <p className="mt-[-.9rem] w-[max-content] px-4 mx-auto z-[3] bg-white">
                    {" "}
                    or{" "}
                  </p>

                  <div className="mt-3 w-[max-content] mx-auto border border-sky_light pl-4 h-[3rem] rounded-xl flex items-center overflow-hidden relative">
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

                  <button
                    className="leading-4 text-base font-medium text-white py-2 px-12 rounded-4xl border border-primary bg-primary mt-4 w-[max-content] mx-auto"
                    type="button"
                    form="post-form"
                    disabled={loading}
                  >
                    Schedule
                  </button>
                </div>
              ) : null}

              <button
                className="leading-4 text-base font-medium text-white py-2 px-3 rounded-4xl border border-primary bg-primary"
                type="submit"
                form="post-form"
                disabled={loading}
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </FullNav>

      <main className="w-full h-full relative bg-secondary_sky_lighter">
        <form id="post-form" onSubmit={handleSubmit(handlePublish)}>
          <div className="w-43/50 mx-auto md:py-10 flex justify-between">
            <div className="w-[34%]">
              <h1 className="font-semibold mb-6 text-secondary_ink_dark text-4xl">
                New post
              </h1>
              <div
                className="bg-white rounded-2xl py-8 h-[37.5rem]"
                style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
              >
                <button className="bg-secondary_sky_lighter text-primary rounded-xl flex w-[100%] p-3 mb-5 w-[87%] mx-auto">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-4 ml-2"
                  >
                    <path
                      d="M21.3 7.08018H15.72C15.6061 7.08018 15.52 6.99403 15.52 6.88018C15.52 6.76632 15.6061 6.68018 15.72 6.68018H21.3C21.4139 6.68018 21.5 6.76632 21.5 6.88018C21.5 6.99403 21.4139 7.08018 21.3 7.08018Z"
                      fill="#8E7FF0"
                      stroke="#8E7FF0"
                    />
                    <path
                      d="M6.42 7.58018H2.7C2.31 7.58018 2 7.27018 2 6.88018C2 6.49018 2.31 6.18018 2.7 6.18018H6.42C6.81 6.18018 7.12 6.49018 7.12 6.88018C7.12 7.27018 6.8 7.58018 6.42 7.58018Z"
                      fill="#8E7FF0"
                    />
                    <path
                      d="M10.14 10.8302C12.3215 10.8302 14.09 9.0617 14.09 6.88018C14.09 4.69865 12.3215 2.93018 10.14 2.93018C7.95848 2.93018 6.19 4.69865 6.19 6.88018C6.19 9.0617 7.95848 10.8302 10.14 10.8302Z"
                      fill="#8E7FF0"
                    />
                    <path
                      d="M21.3 17.8102H17.58C17.19 17.8102 16.88 17.5002 16.88 17.1102C16.88 16.7202 17.19 16.4102 17.58 16.4102H21.3C21.69 16.4102 22 16.7202 22 17.1102C22 17.5002 21.69 17.8102 21.3 17.8102Z"
                      fill="#8E7FF0"
                    />
                    <path
                      d="M8.28 17.8102H2.7C2.31 17.8102 2 17.5002 2 17.1102C2 16.7202 2.31 16.4102 2.7 16.4102H8.28C8.67 16.4102 8.98 16.7202 8.98 17.1102C8.98 17.5002 8.66 17.8102 8.28 17.8102Z"
                      fill="#8E7FF0"
                    />
                    <path
                      d="M13.86 21.0699C16.0415 21.0699 17.81 19.3014 17.81 17.1199C17.81 14.9384 16.0415 13.1699 13.86 13.1699C11.6785 13.1699 9.91 14.9384 9.91 17.1199C9.91 19.3014 11.6785 21.0699 13.86 21.0699Z"
                      fill="#8E7FF0"
                    />
                  </svg>
                  Post settings
                </button>
                <div className="mb-8 border-t border-t-secondary_sky_base pt-5 w-[87%] mx-auto">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Audience
                  </h2>
                  <div className="flex items-center justify-between mb-2">
                    <CheckSwitch
                      label="Everyone"
                      id="everyone"
                      name="push-notifications"
                      {...register("audience", { required: true })}
                      styles="rounded bg-white w-[100%] text-left flex justify-between items-center cursor-pointer block text-secondary !mb-0"
                      checked
                    />
                  </div>
                </div>
                <div className="mb-8 w-[87%] mx-auto">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Channel
                  </h2>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between relative">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="send-email"
                      >
                        Send Email
                      </label>
                      <input
                        type="checkbox"
                        id="send-email"
                        defaultChecked={false}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer"
                        {...register("send_email")}
                        name="channel"
                      />
                      <CheckIcon classes="absolute right-[.35rem] hidden peer-checked:block" />
                    </div>
                  </FormGroup>
                  <FormGroup className="my-2 mt-4">
                    <div className="w-full flex items-center justify-between relative">
                      <label
                        className="text-secondary leading-4 flex items-center"
                        htmlFor="post-to-profile"
                      >
                        Post to profile{" "}
                        <svg
                          width="16"
                          height="16"
                          viewBox="0 0 16 16"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          className="ml-2"
                        >
                          <path
                            d="M8.00001 14.6668C11.6667 14.6668 14.6667 11.6668 14.6667 8.00016C14.6667 4.3335 11.6667 1.3335 8.00001 1.3335C4.33334 1.3335 1.33334 4.3335 1.33334 8.00016C1.33334 11.6668 4.33334 14.6668 8.00001 14.6668Z"
                            stroke="#979C9E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M8 5.3335V8.66683"
                            stroke="#979C9E"
                            strokeWidth="1.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                          <path
                            d="M7.99634 10.6665H8.00233"
                            stroke="#979C9E"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </label>
                      <input
                        type="checkbox"
                        id="post-to-profile"
                        defaultChecked={true}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer"
                        {...register("post_to_profile")}
                        name="channel"
                      />
                      <CheckIcon classes="absolute right-[.35rem] hidden peer-checked:block" />
                    </div>
                  </FormGroup>
                </div>
                <div className="mb-0 w-[87%] mx-auto">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Engagements
                  </h2>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between relative">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="allow-comments"
                      >
                        Allow Comments
                      </label>
                      <input
                        type="checkbox"
                        name="allow-comments"
                        defaultChecked={true}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer"
                        {...register("allow_comments")}
                      />
                      <CheckIcon classes="absolute right-[.35rem] hidden peer-checked:block" />
                    </div>
                  </FormGroup>
                  <FormGroup className="my-2 mt-4">
                    <div className="w-full flex items-center justify-between relative">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="allow-likes"
                      >
                        Allow Likes
                      </label>
                      <input
                        type="checkbox"
                        name="allow-likes"
                        defaultChecked={false}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary peer"
                        {...register("allow_likes")}
                      />
                      <CheckIcon classes="absolute right-[.35rem] hidden peer-checked:block" />
                    </div>
                  </FormGroup>
                </div>
              </div>
            </div>

            <div className="w-[62%]">
              <div
                className="rounded-3xl p-8 bg-white"
                style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
              >
                <div className="mb-6 relative">
                  <label
                    className="block text-secondary_ink_darkest font-medium mb-4 leading-4"
                    htmlFor="title"
                  >
                    Post Title
                  </label>
                  <input
                    type="text"
                    className="border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="title"
                    placeholder="Enter your post title"
                    {...register("title", { required: true })}
                  />
                  {errors.title?.type === "required" && (
                    <p className="text-left text-red-600 text-xs mt-1">
                      Post title is required
                    </p>
                  )}
                </div>
                <div className="mb-6 relative">
                  <label
                    className="block text-secondary_ink_darkest font-medium mb-4 leading-4"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <TextFormat />
                  <textarea
                    type="text"
                    className="border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-b-lg resize-none"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="description"
                    placeholder="Post Description"
                    rows={4}
                    {...register("description", { required: true })}
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <p className="text-left text-red-600 text-xs mt-1">
                      Post description is required
                    </p>
                  )}
                </div>

                <div className="mb-6 relative">
                  <input
                    className="rounded-lg py-3 w-full border border-secondary_sky_light bg-secondary_sky_lightest text-lg text-secondary_ink_darkest placeholder-secondary_ink_darkest cursor-text text-center outline-none"
                    placeholder="Add call-to-action-button"
                    autoComplete="off"
                    {...register("call_to_action", { required: true })}
                  />
                  {errors.call_to_action?.type === "required" && (
                    <p className="text-left text-red-600 text-xs mt-1">
                      Post call to action is required
                    </p>
                  )}
                </div>

                <div className="relative">
                  <span
                    className="block text-secondary_ink_darkest font-medium mb-4 leading-4"
                    htmlFor="Files"
                  >
                    Files
                  </span>
                  <div className="w-full relative border-dashed rounded-lg border-2 border-darkGrey flex justify-center items-center bg-secondary_sky_lightest flex-col py-6">
                    <p className="font-medium text-secondary mb-2">
                      {watch("attachment") !== undefined &&
                      watch("attachment").length > 0
                        ? watch("attachment")[0].type
                        : "Add Files"}
                    </p>

                    <span className="block text-secondary_brand_light font-normal mt-2 mx-4 mb-2">
                      {watch("attachment") !== undefined &&
                      watch("attachment").length > 0
                        ? watch("attachment")[0].name
                        : "Upload your post files here"}
                    </span>

                    <label
                      htmlFor="upload-file"
                      className="text-secondary_brand_light font-normal mt-2 mx-4 flex items-center bg-primary_brand_lightest rounded-full p-2 px-3 cursor-pointer"
                    >
                      {watch("attachment") !== undefined &&
                      watch("attachment").length > 0 ? (
                        watch("attachment")[0].name
                      ) : (
                        <>
                          <PlusIcon />
                          <span className="text-primary ml-3">
                            Upload files
                          </span>
                        </>
                      )}
                    </label>

                    {/* <div className='absolute'>
                      <div className='flex flex-col items-center text-center'>
                        <p className='font-medium text-secondary mb-4 cursor-pointer'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].type
                            : 'Add Files'}
                        </p>
                        <span className='block text-secondary_brand_light font-normal mt-2 mx-4'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].name
                            : 'Upload your post files here'}
                        </span>

                        <button className='block text-secondary_brand_light font-normal mt-2 mx-4'>
                          {watch('attachment') !== undefined &&
                          watch('attachment').length > 0
                            ? watch('attachment')[0].name
                            : 'Upload your post files here'}
                        </button>
                      </div>
                    </div> */}
                    <input
                      type="file"
                      className="h-full w-full opacity-0 hidden"
                      id="upload-file"
                      {...register("attachment", { required: false })}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}

CreatePost.layout = Dashboard;