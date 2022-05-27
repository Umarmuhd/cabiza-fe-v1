import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";
import { Switch } from "@headlessui/react";
import PaginationComponent from "../PaginationComponent";

const SpinIcon = () => (
  <svg
    className="animate-spin -ml-1 h-8 w-8 md:h-10 md:w-10 text-white"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
  >
    <circle
      className="opacity-25"
      cx="12"
      cy="12"
      r="10"
      stroke="#5F45F2"
      strokeWidth="4"
    ></circle>
    <path
      className="opacity-75"
      fill="#5F45F2"
      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
    ></path>
  </svg>
);

const PostItem = ({ post, deletePost, user }) => {
  const [expanded, setExpanded] = useState(false);
  const [enabled, setEnabled] = React.useState(post.published);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      const url = `${API_URL}/posts/publishing/${post._id}`;
      const response = await axios.put(url);

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
          <span className="ml-2.5 font-medium text-lg text-white capitalize">
            {response.data.message} !
          </span>
        </div>
      );
      setEnabled(response.data.data.post.published);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="mb-4">
      <div
        className={
          "p-6 rounded-2xl border border-secondary_sky_dark " +
          (expanded && "rounded-b-none border-b-0")
        }
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex justify-between">
          <div className="flex">
            <Image
              src="/images/placeholder-image.svg"
              alt="placeholder"
              width={80}
              height={80}
            />
            <div className="ml-6">
              <h2 className="text-lg font-medium text-secondary_ink_darkest mb-2">
                {post.title}
              </h2>
              <p className="text-secondary_brand_light mb-2">
                {post.description.slice(0, 45)} ...
              </p>
              <span className="block text-xs text-secondary_sky_base leading-3 uppercase">
                {moment(post.updatedAt).fromNow()}
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4 border border-secondary_sky_dark bg-secondary_sky_lightest">
            <div className="text-center md:border-r border-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary mb-6">Emailed</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="text-center md:border-r border-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary mb-6">Opened</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="text-center md:border-r border-secondary_sky_dark py-2.5 px-4">
              <p className="text-secondary mb-6">Clicks</p>
              <span className="block font-medium">0</span>
            </div>
            <div className="text-center py-2.5 px-4">
              <p className="text-secondary mb-6">Views</p>
              <span className="block font-medium">0</span>
            </div>
          </div>
        </div>
      </div>
      {expanded && (
        <div className="py-4 px-6 rounded-2xl rounded-t-none border border-t border-secondary_sky_dark bg-secondary_sky_lightest flex justify-between items-center">
          <div className="flex items-center">
            <button className="mr-6 py-2 px-4 rounded-4xl flex items-center bg-primary_brand_lightest">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7.49984 9.22478V7.49992C7.49984 6.95044 7.04931 6.49992 6.49984 6.49992C5.95036 6.49992 5.49984 6.95044 5.49984 7.49992V9.21581C5.1495 9.09585 4.74439 9.17493 4.46628 9.45303L4.81984 9.80659L4.46628 9.45303C4.07769 9.84163 4.07769 10.4782 4.46628 10.8668L5.7707 12.1712C5.79636 12.2019 5.82205 12.2253 5.84243 12.2418C5.90985 12.304 6.00529 12.3754 6.12241 12.4222C6.24033 12.4728 6.36532 12.4999 6.49984 12.4999C6.63116 12.4999 6.75341 12.474 6.86886 12.4258C7.00488 12.3757 7.12072 12.2928 7.20672 12.2068L8.54006 10.8735C8.92865 10.4849 8.92865 9.84829 8.54006 9.4597C8.26019 9.17983 7.85169 9.10152 7.49984 9.22478ZM5.89644 12.2798C5.89687 12.2801 5.89533 12.2791 5.89269 12.2775L5.89539 12.2792L5.89615 12.2796L5.89635 12.2798L5.89644 12.2798ZM5.81294 12.2135L5.81295 12.2135C5.81295 12.2135 5.81294 12.2135 5.81294 12.2135ZM11.7398 7.29325H13.6665C13.757 7.29325 13.8332 7.36939 13.8332 7.45992V10.9533C13.8332 12.0206 13.4645 12.8117 12.9042 13.338C12.3389 13.8689 11.5394 14.1666 10.6198 14.1666H5.37984C4.46028 14.1666 3.66077 13.8689 3.09547 13.338C2.53512 12.8117 2.1665 12.0206 2.1665 10.9533V5.04659C2.1665 3.97924 2.53512 3.18816 3.09547 2.66188C3.66077 2.13095 4.46028 1.83325 5.37984 1.83325H8.2065C8.29703 1.83325 8.37317 1.90939 8.37317 1.99992V3.92659C8.37317 5.78273 9.88369 7.29325 11.7398 7.29325Z"
                  fill="#5B44E9"
                  stroke="#5B44E9"
                />
                <path
                  d="M11.6252 5.37344L11.6252 5.37341H11.62C10.8762 5.37341 10.2866 4.77752 10.2866 4.09341V1.93392C10.9491 2.59723 11.8894 3.54619 12.7184 4.38273C13.08 4.74757 13.4203 5.09102 13.7072 5.38007C12.9964 5.38003 12.2059 5.37955 11.6252 5.37344Z"
                  fill="#5B44E9"
                  stroke="#5B44E9"
                />
              </svg>

              <span className="font-medium leading-4 text-primary">
                Download Attachments
              </span>
            </button>
            <div className="flex items-center">
              <Switch
                checked={enabled}
                onChange={handlePublish}
                disabled={loading}
                className={`${enabled ? "bg-primary" : "bg-grey_80"}
  relative inline-flex flex-shrink-0 h-[18px] w-[32px] border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
              >
                <span className="sr-only">Use setting</span>
                <span
                  aria-hidden="true"
                  className={`${enabled ? "translate-x-4" : "translate-x-0"}
  pointer-events-none inline-block h-[14px] w-[13px] rounded-full bg-white shadow-lg transform ring-0 transition ease-in-out duration-200`}
                />
              </Switch>
              <span className="ml-2 block text-grey_40 text-lg font-medium">
                {enabled ? "Published" : "Unpublished"}
              </span>
            </div>
          </div>
          <ul className="flex items-center">
            <li className="pl-3">
              <Link href={"/dashboard/posts/" + post._id}>
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                  Edit
                </a>
              </Link>
            </li>
            <li className="pl-3">
              <Link href={`/${user?.username}/posts/${post._id}`}>
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                  View
                </a>
              </Link>
            </li>
            <li className="pl-3">
              <button className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                Duplicate
              </button>
            </li>
            <li className="pl-3">
              <button
                className="leading-4 text-base font-medium bg-tertiary_red_base py-2 px-3 rounded-4xl border border-tertiary_red_base text-white"
                onClick={() => deletePost(post._id)}
              >
                Delete
              </button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/posts/user/${user?._id}`);

      setPosts(response.data.data.posts);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchPost(), []);

  const deletePost = async (post_id) => {
    try {
      setLoading(true);

      if (confirm("Are you sure you want to delete this post!?") == false) {
        setLoading(false);
        return;
      }

      const response = await axios.delete(`${API_URL}/posts/post/${post_id}`);

      fetchPost();
      toast.success(response.data.message);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <main className="h-full w-full relative">
      <div className="md:w-43/50 mx-auto md:my-10">
        <div
          className="p-8 bg-white rounded-2xl"
          style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
        >
          {loading ? (
            <React.Fragment>
              <div className="flex justify-center items-center text-center">
                <SpinIcon />
              </div>
            </React.Fragment>
          ) : (
            <React.Fragment>
              {posts.length > 0 ? (
                <div>
                  {posts.map((post) => (
                    <React.Fragment key={post._id}>
                      <PostItem
                        post={post}
                        deletePost={deletePost}
                        user={user}
                      />
                    </React.Fragment>
                  ))}
                </div>
              ) : (
                <div className="w-4/5 mx-auto md:py-12">
                  <div className="text-center">
                    <h1 className="text-secondary_ink_dark text-4xl leading-9 font-semibold mb-2">
                      Empty post
                    </h1>
                    <div className="mb-10 mt-4">
                      <p className="text-secondary_ink_lighter text-lg">
                        Create a post and start sharing.
                      </p>
                      <p className="text-secondary_ink_lighter">
                        Click on
                        <Link href="/dashboard/posts/create">
                          <a className="text-primary"> New post</a>
                        </Link>{" "}
                        to create your first post!
                      </p>
                    </div>
                    <Image
                      src="/images/empty.svg"
                      alt="..."
                      className="mx-auto"
                      width={245}
                      height={240}
                    />
                    <Link href="/dashboard/posts/create">
                      <a className="text-primary block bg-primary_brand_lightest w-[max-content] mx-auto mt-7 px-8 py-2 rounded-full text-lg">
                        Create post
                      </a>
                    </Link>{" "}
                  </div>
                </div>
              )}
            </React.Fragment>
          )}

          {posts.length > 8 ? <PaginationComponent classNames="mt-5"/> : null}
        </div>
      </div>
    </main>
  );
}
