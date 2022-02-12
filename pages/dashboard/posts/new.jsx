import React, { useState, useContext } from "react";
import { RadioGroup } from "@headlessui/react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/router";
import axios from "axios";
import { toast } from "react-hot-toast";
import Link from "next/link";

import Dashboard from "@/layouts/Dashboard";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";

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

export default function NewPost() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [audience, setAudience] = React.useState(false);
  const [channel, setChannel] = React.useState(false);
  const [engagement, setEngagement] = React.useState(false);

  const router = useRouter();

  const handlePublish = async (values) => {
    setLoading(true);

    const { title, description, call_to_action, attachment } = values;

    if (!audience || !channel || !engagement) {
      toast.error("please complete all required fields");
      setLoading(false);
      return;
    }

    try {
      const response = await axios.post(`${API_URL}/posts/new`, {
        title,
        description,
        call_to_action,
      });

      setLoading(false);
      toast.success(response.data.message);

      if (response.status === 201) {
        return router.push("/dashboard/posts");
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="bg-grey_95 border-b border-grey_60 py-6 md:px-0 px-4">
        <div className="flex justify-between items-center md:w-4/5 mx-auto">
          <div className="flex">
            <button className="py-2 px-3 rounded-lg border border-[#666666]">
              Preview
            </button>
          </div>

          <div className="flex items-center justify-between">
            <Link href="/dashboard/posts">
              <a className="py-2 px-3 mr-6">Cancel</a>
            </Link>
            <button className="py-2 px-3 rounded-lg border border-[#666666] mr-6">
              Save
            </button>
            <button
              className="py-2 px-3 bg-cabiza_blue flex items-center text-lg font-semibold text-white rounded-lg"
              type="submit"
              form="post-form"
              disabled={loading}
            >
              {loading ? (
                <span>...</span>
              ) : (
                <>
                  <span className="mr-2.5">Publish </span> <PlusIcon />
                </>
              )}
            </button>
          </div>
        </div>
      </div>

      <main className="w-full h-full relative">
        <form id="post-form" onSubmit={handleSubmit(handlePublish)}>
          <div className="w-4/5 mx-auto md:py-10 flex justify-between">
            <div className="w-[34%] rounded-2xl border border-grey_80 py-8 px-6">
              <div className="mb-8">
                <h2 className="text-grey_40 font-semibold mb-2">AUDIENCE</h2>

                <RadioGroup as={"ul"} value={audience} onChange={setAudience}>
                  <RadioGroup.Option
                    as={"li"}
                    value="everyone"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-grey_60 font-medium">
                            Everyone
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
                    value="followers"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
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
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
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
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
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
              <div className="mb-8">
                <h2 className="text-grey_40 font-semibold mb-2">CHANNEL</h2>

                <RadioGroup as={"ul"} value={channel} onChange={setChannel}>
                  <RadioGroup.Option
                    as={"li"}
                    value="send-email"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-grey_60 font-medium">
                            Send Email
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
                    value="to-profile"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <div className="inline w-4/5">
                            <span className="text-grey_60 font-medium block mb-2">
                              Post to profile
                            </span>
                            <p className="text-grey_60 text-xs w-4/5">
                              This post will be visible to anyone who visits
                              your profile.
                            </p>
                          </div>

                          <div className="w-6 h-6 border border-cabiza_blue rounded-full flex justify-center items-center ml-2">
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
              <div className="mb-0">
                <h2 className="text-grey_40 font-semibold mb-2">ENGAGEMENTS</h2>

                <RadioGroup
                  as={"ul"}
                  value={engagement}
                  onChange={setEngagement}
                >
                  <RadioGroup.Option
                    as={"li"}
                    value="comments"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-grey_60 font-medium">
                            Allow comments
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
                    value="likes"
                    className={({ active, checked }) =>
                      `mb-2 ${checked} ${active}`
                    }
                  >
                    {({ checked, active }) => (
                      <>
                        <div className="flex justify-between items-center">
                          <span className="text-grey_60 font-medium">
                            Allow Likes
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
            </div>
            <div className="w-[62%]">
              <div className="rounded-2xl border border-grey_80 p-6">
                <div className="mb-6 relative">
                  <label
                    className="block text-grey_40 text-lg font-semibold mb-3"
                    htmlFor="title"
                  >
                    Title
                  </label>
                  <input
                    type="text"
                    className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="title"
                    placeholder="Post Title"
                    {...register("title", { required: true })}
                  />
                </div>
                <div className="mb-6 relative">
                  <label
                    className="block text-grey_40 text-lg font-semibold mb-3"
                    htmlFor="description"
                  >
                    Description
                  </label>
                  <textarea
                    type="text"
                    className="border border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="description"
                    placeholder="Post Description"
                    rows={4}
                    {...register("description", { required: true })}
                  ></textarea>
                </div>
              </div>

              <div className="mt-6"></div>

              <input
                className="rounded-lg py-4 w-full border border-grey_80 bg-grey_95 text-lg text-grey_60 text-center outline-none"
                placeholder="Add call-to-action-button"
                autoComplete="off"
                {...register("call_to_action", { required: true })}
              />

              <div className="rounded-2xl border border-grey_80 p-6 mt-6">
                <div className="mb-6 relative">
                  <label
                    className="block text-grey_40 text-lg font-semibold mb-3"
                    htmlFor="file"
                  >
                    Add Files
                  </label>
                  <label
                    className="w-full rounded-lg py-4 border border-dotted border-grey_80 flex items-center justify-center"
                    htmlFor="file-upload"
                  >
                    <span className="text-xs mr-2 text-grey_40 leading-[14px]">
                      Add file
                    </span>
                    <svg
                      width="25"
                      height="24"
                      viewBox="0 0 25 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M18.5 12.75H6.5C6.09 12.75 5.75 12.41 5.75 12C5.75 11.59 6.09 11.25 6.5 11.25H18.5C18.91 11.25 19.25 11.59 19.25 12C19.25 12.41 18.91 12.75 18.5 12.75Z"
                        fill="#666666"
                      />
                      <path
                        d="M12.5 18.75C12.09 18.75 11.75 18.41 11.75 18V6C11.75 5.59 12.09 5.25 12.5 5.25C12.91 5.25 13.25 5.59 13.25 6V18C13.25 18.41 12.91 18.75 12.5 18.75Z"
                        fill="#666666"
                      />
                    </svg>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="hidden"
                      {...register("attachment", { required: true })}
                    />
                  </label>
                </div>
              </div>
            </div>
          </div>
        </form>
      </main>
    </>
  );
}

NewPost.layout = Dashboard;
