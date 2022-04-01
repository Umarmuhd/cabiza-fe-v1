import React, { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Image from "next/image";
import moment from "moment";

import { Switch } from "@headlessui/react";

const PostItem = ({ post, deletePost }) => {
  const [expanded, setExpanded] = useState(false);
  const [enabled, setEnabled] = React.useState(post.published);
  const [loading, setLoading] = useState(false);

  const handlePublish = async () => {
    try {
      setLoading(true);
      const response = await axios.put(
        `${API_URL}/posts/publishing/${post._id}`
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
    <li className="p-6 rounded-2xl border border-secondary_sky_dark mb-4">
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
      <div className="w-43/50 mx-auto md:my-10">
        <div
          className="p-8 bg-white rounded-2xl"
          style={{ boxShadow: "0px 20px 40px rgba(0, 0, 0, 0.06)" }}
        >
          <h1 className="text-secondary_ink_dark font-medium text-xl mb-6">
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
                      <PostItem post={post} deletePost={deletePost} />
                    </React.Fragment>
                  ))}
                </ul>
              ) : (
                <div className="w-4/5 mx-auto md:py-20">
                  <div className="text-center">
                    <Image
                      src="/images/empty.svg"
                      alt="..."
                      className="mx-auto mb-8"
                      width={245}
                      height={240}
                    />

                    <h1 className="text-dark_ text-4xl leading-9 font-semibold mb-2">
                      Empty post
                    </h1>
                    <p className="text-dark_">
                      Click on New Post to create your first post!
                    </p>
                  </div>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </main>
  );
}
