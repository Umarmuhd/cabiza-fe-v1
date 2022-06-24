import FormGroup from "@/components/Forms/FormGroup";
import DashboardNav from "@/components/Navbars/DashboardNav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Dashboard from "@/layouts/Dashboard";
import axios from "axios";
import { API_URL } from "@/config/index";
import toast from "react-hot-toast";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const post_id = router.query.post_id;

  const validationSchema = Yup.object().shape({
    acceptTerms: Yup.bool().oneOf([true], "Accept Ts & Cs is required"),
  });

  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: { audience: 0, title: post?.title },
  };

  const { register, handleSubmit, watch, formState, setValue } =
    useForm(formOptions);
  const { errors } = formState;

  const handleUpdate = async (values) => {
    const { title, description, call_to_action, attachment, audience } = values;

    const form_data = new FormData();

    form_data.append("title", title);
    form_data.append("description", description);
    form_data.append("call_to_action", call_to_action);
    form_data.append("attachment", attachment[0] ?? post?.attachment);
    form_data.append("audience", audience);
    form_data.append("send_email", values.channel.send_email);
    form_data.append("post_to_profile", values.channel.post_to_profile);
    form_data.append("allow_comments", values.engagements.allow_comments);
    form_data.append("allow_likes", values.engagements.allow_likes);

    try {
      setLoading(true);
      await axios.patch(`${API_URL}/posts/post/${post.post_id}`, form_data);
      setLoading(false);
      toast.custom(
        <div className="rounded-lg py-4 px-8 bg-[#24C78C] flex items-center">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2ZM15.36 14.3C15.65 14.59 15.65 15.07 15.36 15.36C15.21 15.51 15.02 15.58 14.83 15.58C14.64 15.58 14.45 15.51 14.3 15.36L12 13.06L9.7 15.36C9.55 15.51 9.36 15.58 9.17 15.58C8.98 15.58 8.79 15.51 8.64 15.36C8.35 15.07 8.35 14.59 8.64 14.3L10.94 12L8.64 9.7C8.35 9.41 8.35 8.93 8.64 8.64C8.93 8.35 9.41 8.35 9.7 8.64L12 10.94L14.3 8.64C14.59 8.35 15.07 8.35 15.36 8.64C15.65 8.93 15.65 9.41 15.36 9.7L13.06 12L15.36 14.3Z"
              fill="white"
            />
          </svg>
          <span className="ml-2.5 font-medium text-lg text-white">
            Post update success !
          </span>
        </div>
      );

      router.push("/posts");
    } catch (error) {
      console.error(error.message);
      setLoading(false);
    }
  };  

  const fetchPost = useCallback(async () => {
    try {
      setLoading(true);

      const url = `${API_URL}/posts/post/${post_id}`;
      const { data } = await axios.get(url);
      setValue("title", data.data.post.title);
      setValue("description", data.data.post.description);
      setValue("call_to_action", data.data.post.call_to_action);
      setValue("audience", data.data.post.audience);
      setValue("channel", {
        send_email: data.data.post.channel.includes("0"),
        post_to_profile: data.data.post.channel.includes("1"),
      });
      setValue("engagements", {
        allow_comments: data.data.post.engagements.includes("0"),
        allow_likes: data.data.post.engagements.includes("1"),
      });
      setPost(data.data.post);

      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [post_id]);

  useEffect(() => fetchPost(), [fetchPost]);

  return (
    <div className="lg:w-[85%] w-[100%] ml-auto">
      <DashboardNav title="Posts" />
      <div
        className="bg-secondary_sky_lightest py-6 md:px-0 px-4"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)" }}
      >
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

          <div className="flex items-center justify-between">
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

            <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center">
              <span className="mr-2">
                {post?.published ? "Unpublish" : "Publish"}
              </span>
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

      <main className="w-full h-full relative bg-secondary_sky_lighter">
        <form id="post-form" onSubmit={handleSubmit(handleUpdate)}>
          <div className="w-43/50 mx-auto md:py-10 flex justify-between">
            <div className="w-[34%]">
              <h1 className="font-semibold mb-6 text-secondary_ink_dark text-4xl">
                New post
              </h1>
              <div
                className="bg-white rounded-2xl py-8 px-6"
                style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
              >
                <div className="mb-8">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Audience
                  </h2>

                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="everyone" className="block text-secondary">
                      Everyone
                    </label>
                    <input
                      id="everyone"
                      name="everyone"
                      {...register("audience", { required: true })}
                      type="radio"
                      className="focus:ring-primary w-6 h-6 text-primary border-secondary_sky_base"
                      value={0}
                      checked={post?.audience === 0 ? "checked" : null}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <label htmlFor="followers" className="block text-secondary">
                      Followers only
                    </label>
                    <input
                      id="followers"
                      {...register("audience", { required: true })}
                      type="radio"
                      className="focus:ring-indigo-500 w-6 h-6 text-indigo-600 border-secondary_sky_base"
                      value={1}
                      checked={post?.audience === 1 ? "checked" : null}
                    />
                  </div>
                  <div className="flex items-center justify-between mb-2">
                    <label
                      htmlFor="push-nothing"
                      className="block text-secondary"
                    >
                      Customers only
                    </label>
                    <input
                      id="customers"
                      {...register("audience", { required: true })}
                      type="radio"
                      className="focus:ring-primary w-6 h-6 text-primary border-secondary_sky_base"
                      value={2}
                      checked={post?.audience === 2 ? "checked" : null}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="affiliates"
                      className="block text-secondary"
                    >
                      Affiliates only
                    </label>
                    <input
                      id="affiliates"
                      {...register("audience", { required: true })}
                      type="radio"
                      className="focus:ring-primary w-6 h-6 text-primary border-secondary_sky_base"
                      value={3}
                      checked={post?.audience === 3 ? "checked" : null}
                    />
                  </div>
                </div>
                <div className="mb-8">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Channel
                  </h2>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="send-email"
                      >
                        Send Email
                      </label>
                      <input
                        type="checkbox"
                        name="send-email"
                        defaultChecked={watch("channel")?.send_email}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary"
                        {...register("channel.send_email")}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="post-to-profile"
                      >
                        Post to profile
                      </label>
                      <input
                        type="checkbox"
                        name="post-to-profile"
                        defaultChecked={
                          watch("channel")?.post_to_profile ?? true
                        }
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary"
                        {...register("channel.post_to_profile")}
                      />
                    </div>
                  </FormGroup>
                </div>
                <div className="mb-0">
                  <h2 className="text-secondary_ink_darkest font-medium mb-5 text-base">
                    Engagements
                  </h2>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="allow-comments"
                      >
                        Allow Comments
                      </label>
                      <input
                        type="checkbox"
                        name="allow-comments"
                        defaultChecked={
                          watch("engagements")?.allow_comments ?? true
                        }
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary"
                        {...register("engagements.allow_comments")}
                      />
                    </div>
                  </FormGroup>
                  <FormGroup className="my-2">
                    <div className="w-full flex items-center justify-between">
                      <label
                        className="text-secondary leading-4"
                        htmlFor="allow-likes"
                      >
                        Allow Likes
                      </label>
                      <input
                        type="checkbox"
                        name="allow-likes"
                        defaultChecked={watch("engagements")?.allow_likes}
                        className="appearance-none w-6 h-6 border border-gray-300 rounded-sm outline-none cursor-pointer checked:bg-primary"
                        {...register("engagements.allow_likes")}
                      />
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
                    Title
                  </label>
                  <input
                    type="text"
                    className="border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="title"
                    placeholder="Enter your post title"
                    {...register("title", { required: true })}
                    defaultValue={post?.title}
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
                  <textarea
                    type="text"
                    className="border border-secondary_sky_light px-4 py-3 placeholder-secondary_sky_dark text-secondary_ink_darkest bg-white  focus:outline-none focus:ring w-full rounded-lg"
                    style={{ transition: "all 0.15s ease 0s" }}
                    id="description"
                    placeholder="Post Description"
                    rows={4}
                    {...register("description", { required: true })}
                    defaultValue={post?.description}
                  ></textarea>
                  {errors.description?.type === "required" && (
                    <p className="text-left text-red-600 text-xs mt-1">
                      Post description is required
                    </p>
                  )}
                </div>

                <div className="mb-6 relative">
                  <input
                    className="rounded-lg py-4 w-full border border-secondary_sky_light bg-secondary_sky_lightest text-lg text-grey_60 text-center outline-none"
                    placeholder="Add call-to-action-button"
                    autoComplete="off"
                    {...register("call_to_action", { required: true })}
                    defaultValue={post?.call_to_action}
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
                  <div className="w-full relative border-dotted h-48 rounded-lg border-2 border-darkGrey flex justify-center items-center bg-secondary_sky_lightest">
                    <div className="absolute">
                      <div className="flex flex-col items-center text-center">
                        <p className="font-medium text-secondary mb-4">
                          {post?.attachment} <br />
                          {watch("attachment") !== undefined &&
                          watch("attachment").length > 0
                            ? watch("attachment")[0].type
                            : "Add Files"}
                        </p>
                        <span className="block text-secondary_brand_light font-normal mt-2 mx-4">
                          {watch("attachment") !== undefined &&
                          watch("attachment").length > 0
                            ? watch("attachment")[0].name
                            : "Upload your post files here"}
                        </span>
                      </div>
                    </div>
                    <input
                      type="file"
                      className="h-full w-full opacity-0"
                      {...register("attachment", { required: false })}
                      defaultValue={post?.attachment}
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

EditPost.layout = Dashboard;