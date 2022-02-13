import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";

import { Switch } from "@headlessui/react";

const PostItem = (post) => {
  const [enabled, setEnabled] = React.useState(post.post.published);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}/posts/publishing/${post.post._id}`
      );

      setLoading(false);
      toast.success(response.data.message);
      setEnabled(response.data.data.post.published);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <li className="p-6 rounded-2xl border border-grey mb-4">
      <div className="mb-10">
        <h2 className="text-4xl leading-9 text-grey_20 font-semibold mb-1">
          {post.post.title}
        </h2>
        <p className="text-xs text-grey_80">ABOUT 2 HOURS AGO</p>
      </div>

      <div className="">
        <div className="flex justify-between">
          <div className="text-grey_40">
            {post.post.description.slice(0, 200)}
          </div>
          <ul className="flex justify-between items-center w-2/6">
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-[#666666]">
                Edit
              </button>
            </li>
            <li className="mr-2">
              <Link
                href={`/dashboard/view-user/${post.post.user}/posts/${post.post._id}`}
              >
                <a className="p-2 rounded-lg border border-[#666666]">View</a>
              </Link>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-[#666666]">
                Duplicate
              </button>
            </li>
            <li className="mr-2">
              <button className="p-2 rounded-lg border border-cabiza_red bg-cabiza_red text-white">
                Delete
              </button>
            </li>
          </ul>
        </div>

        <div className="border-b border-grey_80 my-6"></div>

        <div className="flex justify-between">
          <button className="p-2 rounded-lg border border-[#666666]">
            Download Attachments
          </button>

          <div className="flex items-center">
            <div className="mr-6 text-center">
              <span className="block text-grey_40">0%</span>
              <span className="block text-grey_40">Opens</span>
            </div>
            <div className="text-center">
              <span className="block text-grey_40">0%</span>
              <span className="block text-grey_40">Clicks</span>
            </div>
          </div>

          <div className="flex items-center">
            <Switch
              checked={enabled}
              onChange={handlePublish}
              disabled={loading}
              className={`${enabled ? "bg-cabiza_blue" : "bg-grey_80"}
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
      </div>
    </li>
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

  return (
    <main className="h-full w-full relative">
      {(
        <div className="w-4/5 mx-auto md:py-10">
          <h1 className="text-grey_40 font-semibold mb-4">
            All Published Posts
          </h1>

          {loading && (
            <h1 className="text-grey_40 font-semibold text-center">
              loading...
            </h1>
          )}

          {!loading && (
            <>
              {posts.length > 0 ? (
                <ul>
                  {posts?.map((post, index) => (
                    <React.Fragment key={index}>
                      <PostItem post={post} />
                    </React.Fragment>
                  ))}
                </ul>
              ) : (
                <h1 className="text-grey_40 font-semibold text-center">
                  No posts found
                </h1>
              )}
            </>
          )}

          <ul></ul>
        </div>
      ) || (
        <div className="w-4/5 mx-auto md:py-20">
          <div className="text-center">
            <img src="/images/empty.svg" alt="..." className="mx-auto mb-8" />

            <h1 className="text-dark_ text-4xl leading-9 font-semibold mb-2">
              Empty post
            </h1>
            <p className="text-dark_">
              Click on New Post to create your first post!
            </p>
          </div>
        </div>
      )}
    </main>
  );
}
