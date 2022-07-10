import React, { useState, useContext, useEffect } from "react";
import axios from "@/libs/axiosInstance";
import { toast } from "react-hot-toast";
import { API_URL } from "@/config/index";
import AuthContext from "@/context/AuthContext";
import Link from "next/link";
import Router from "next/router";
import Image from "next/image";
import moment from "moment";
import { Switch } from "@headlessui/react";
import PaginationComponent from "../PaginationComponent";
import Alert from "../Alert";
import EmptyPosts from "./EmptyPosts";
import Loading from "../Loading";
import FileIcon from "../Svgs/FileIcon";

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
      toast.custom(<Alert color="#24C78C" text={response.data.message} />);
      setEnabled(response.data.data.post.published);
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
      setLoading(false);
    }
  };

  return (
    <div className="">
      <div
        className={
          "p-6 rounded-2xl border border-secondary_sky_dark " +
          (expanded && "rounded-b-none border-b-0")
        }
        onClick={() => setExpanded(!expanded)}
      >
        <div className="flex flex-col md:flex-row justify-between">
          <div className="flex flex-col md:flex-row">
            <img
              src="/images/placeholder-image.svg"
              alt="placeholder"
              className="h-20 md:w-20 object-cover w-full"
            />
            <div className="md:ml-6 md:mt-0 mt-4">
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
          <div className="md:mt-0 mt-3 grid grid-cols-2 row-gap-8 md:grid-cols-4 border border-secondary_sky_dark bg-secondary_sky_lightest">
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
        <div className="py-4 px-6 rounded-2xl rounded-t-none border border-t border-secondary_sky_dark bg-secondary_sky_lightest flex flex-col-reverse md:flex-row justify-between items-center">
          <div className="flex flex-col-reverse md:flex-row md:items-center w-full">
            <button
              className={
                "md:mr-6 py-2 px-4 rounded-4xl flex items-center md:justify-start justify-center bg-primary_brand_lightest mt-4 md:mt-0 " +
                (!post?.attachment && "opacity-40 cursor-not-allowed")
              }
              disabled={!post?.attachment}
              onClick={() => window.open(post?.attachment, "_blank")}
            >
              <FileIcon />
              <span className="font-medium leading-4 text-primary ml-2">
                Download Attachments
              </span>
            </button>
            <div className="flex md:justify-start justify-between">
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

              <button className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary md:hidden">
                Duplicate
              </button>
            </div>
          </div>
          <ul className="flex items-center mb-4 md:mb-0 w-full md:w-auto md:justify-start justify-between">
            <li className="md:pl-3">
              <Link href={"/posts/" + post._id}>
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                  Edit
                </a>
              </Link>
            </li>
            <li className="md:pl-3">
              <Link href={`/${user?.username}/posts/${post._id}`}>
                <a className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                  View
                </a>
              </Link>
            </li>
            <li className="hidden md:flex md:pl-3">
              <button className="leading-4 text-base font-medium text-primary py-2 px-3 rounded-4xl border border-primary">
                Duplicate
              </button>
            </li>
            <li className="md:pl-3">
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
  const [searchedPosts, setSearchedPosts] = useState([]);
  const { query } = Router;

  useEffect(() => {
    posts.length > 0
      ? setSearchedPosts(posts.filter((post) => post.title.includes(query.s)))
      : null;
  }, [query.s, posts]);

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
    <main className="h-full sm:w-full relative w-[90%] mx-auto">
      <div className="md:w-43/50 mx-auto md:my-10">
        <div className="py-0 sm:p-8 md:py-8 bg-white rounded-2xl shadow-lg">
          {loading ? (
            <Loading />
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
                <EmptyPosts />
              )}
            </React.Fragment>
          )}

          {posts.length > 8 ? <PaginationComponent classNames="mt-5" /> : null}
        </div>
      </div>
    </main>
  );
}
