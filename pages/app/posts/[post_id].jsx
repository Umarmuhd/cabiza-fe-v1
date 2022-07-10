import FormGroup from "@/components/Forms/FormGroup";
import DashboardNav from "@/components/Navbars/DashboardNav";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useCallback, useContext, useEffect, useState } from "react";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Dashboard from "@/layouts/Dashboard";
import axios from "@/libs/axiosInstance";
import { API_URL } from "@/config/index";
import toast from "react-hot-toast";
import AuthContext from "@/context/AuthContext";
import Alert from "@/components/Alert";
import EyeIcon from "@/components/Svgs/EyeIcon";
import CloseIcon from "@/components/Svgs/CloseIcon";

export default function EditPost() {
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

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
      toast.custom(<Alert color="#24C78C" text="Post update success !" />);
      router.push("/posts");
    } catch (error) {
      console.error(error.message);
      toast.custom(<Alert color="#F50000" text="Can't update post" />);
      setLoading(false);
    }
  };

  const handlePublish = async () => {
    const text = `Post ${post?.published ? "Unpublished" : "Published"} !`;
    try {
      setLoading(true);
      await axios.put(`${API_URL}/posts/publishing/${post._id}`);
      setLoading(false);
      toast.custom(<Alert color="#24C78C" text={text} />);
      setPost({ ...post, published: !post.published });
    } catch (error) {
      console.error(error);
      toast.error("Post publish failed !");
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
    <div className="lg:w-[85%] w-[100%] ml-auto overflow-y-hidden">
      <DashboardNav title="Posts" />
      <div
        className="bg-secondary_sky_lightest py-6 md:px-0 px-4 w-[100%]"
        style={{ boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)" }}
      >
        <div className="flex flex-col md:flex-row items-start md:justify-between md:items-center md:w-43/50 mx-auto">
          <div className="hidden md:flex">
            <a
              className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center"
              target="_blank"
            >
              <EyeIcon />
              <span className="ml-2">Preview</span>
            </a>
          </div>

          <div className="flex items-center justify-between w-full md:w-auto">
            <Link href="/posts">
              <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary flex items-center mr-6">
                <CloseIcon />
                <span className="ml-2">Cancel</span>
              </a>
            </Link>

            <button
              className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary mr-6 flex items-center capitalize"
              onClick={handlePublish}
            >
              {post?.published ? "Unpublish" : "Publish"}
            </button>

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
          <div className="w-full md:w-43/50 px-4 md:px-0 mx-auto md:py-10 flex justify-between md:flex-row flex-col">
            <div className="w-full md:w-[34%] mb-6">
              <h1 className="font-semibold mb-6 text-secondary_ink_dark text-4xl">
                Update post
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

            <div className="w-full md:w-[62%]">
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
