import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/config/index";
import { RWebShare } from "react-web-share";

import { user_profile } from "@/atoms/user_profile";

import Username from "@/layouts/Username";
import Image from "next/image";
import PaginationComponent from "@/components/PaginationComponent";

const ShareIcon = () => (
  <svg
    width="15"
    height="12"
    viewBox="0 0 15 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.3161 6.96609L10.3161 6.9661C10.3035 6.97799 10.2949 6.98023 10.2892 6.98111C10.2809 6.98237 10.2687 6.98157 10.2554 6.97588C10.2422 6.97023 10.2339 6.96235 10.2297 6.9564C10.2271 6.95266 10.2224 6.94499 10.2224 6.92573V5.25992V4.75655L9.71903 4.75993C8.86751 4.76564 8.11303 4.81995 7.47662 4.95685C6.84212 5.09333 6.2863 5.31992 5.86962 5.69919C5.06553 6.43109 4.95945 7.53907 5.3147 8.95494C4.64952 8.30559 4.11127 7.29402 4.11127 6.30892C4.11127 5.54459 4.26697 4.9694 4.52199 4.53011C4.77595 4.09264 5.14687 3.75804 5.6298 3.50256C6.61902 2.97924 8.04016 2.80641 9.72516 2.79706L10.2224 2.79431V2.29707V0.630057C10.2224 0.610677 10.2271 0.603029 10.2297 0.599366C10.2338 0.593479 10.2421 0.585625 10.2553 0.579972C10.2687 0.574288 10.2809 0.573471 10.2893 0.574749C10.2951 0.575641 10.3036 0.577911 10.3161 0.589671L10.3161 0.589694L13.6495 3.73755C13.6495 3.73756 13.6495 3.73756 13.6495 3.73756C13.6726 3.7594 13.6726 3.79646 13.6495 3.81829C13.6495 3.8183 13.6495 3.8183 13.6495 3.81831L10.3161 6.96609ZM10.2224 10.9446V10.4446V9.09206C10.384 9.09628 10.5455 9.08237 10.7039 9.05062V10.815C10.7039 11.1525 10.4303 11.4261 10.0928 11.4261H1.94461C1.60709 11.4261 1.3335 11.1525 1.3335 10.815V2.66682C1.3335 2.3293 1.60709 2.05571 1.94461 2.05571H3.96429C3.7666 2.19977 3.5777 2.35966 3.4 2.53719H2.31498H1.81498V3.03719V10.4446V10.9446H2.31498H9.72239H10.2224Z"
      fill="#5B44E9"
      stroke="#5B44E9"
    />
  </svg>
);

const PostItem = ({ post, username }) => {
  return (
    <div className="border border-secondary_sky_base rounded-xl px-6 py-7 cursor-pointer">
      <div className="flex justify-between">
        <Link href={`/${username}/posts/${post._id}`} passHref>
          <h2 className="text-2xl font-semibold">{post.title}</h2>
        </Link>
        <RWebShare
          data={{
            text: `Web Share - ${post.title}`,
            url: `https://${username}.cabiza.net/posts/${post.post_id}`,
            title: post.title,
          }}
          onClick={() => console.log("sharing...")}
        >
          <button className="flex items-center">
            <ShareIcon />
            <span className="ml-2 text-primary">Share</span>
          </button>
        </RWebShare>
      </div>
      <span className="text-secondary_sky_base text-sm">
        {new Date(post.createdAt).toLocaleDateString("en-US", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric",
        })}
      </span>
      <p className="text-secondary_brand_light mt-2">
        {post.description.slice(0, 150)}...
      </p>
      <Link href={`/${username}/posts/${post.post_id}`} passHref>
        <button className="bg-primary flex h-[max-content] items-center rounded-full text-white px-6 py-2 mt-4">
          {post.call_to_action}
        </button>
      </Link>
    </div>
  );
};

export default function UserPosts({ username = "umar" }) {
  const { user } = useRecoilValue(user_profile);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const url = `${API_URL}/posts/user?username=${username}`;
        const { data } = await axios.get(url);
        setPosts(data.data.posts);
        setLoading(false);
      } catch (error) {
        console.log(error.message);
        setLoading(false);
      }
    };
    fetchProducts();
  }, [user]);

  const { asPath } = useRouter();
  const newPath = asPath.replace("/posts", "");
  return (
    <main className="bg-white">
      <div className="mx-auto md:w-43/50 py-10 md:my-20">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-secondary_ink_darkest">
            Resources to help creators and digital entrepreneurs learn and earn
            more. Follow us to receive helpful content every week, delivered
            directly to your inbox. Cabiza’s official account.
          </h1>
        </div>

        <div className="flex items-center flex-start">
          <Link href={`${newPath}/products`}>
            <button className="bg-primary_brand_lightest text-primary flex h-[max-content] items-center rounded-full px-6 py-2">
              Products
            </button>
          </Link>
          <button className="bg-primary flex h-[max-content] ml-6 items-center rounded-full text-white px-6 py-2">
            Posts
          </button>
        </div>

        <div className="mt-20 flex flex-col gap-5 mb-7">
          {posts.length > 0 ? (
            <React.Fragment>
              {posts.map((post, index) => (
                <React.Fragment key={index}>
                  <PostItem post={post} username={username} />
                </React.Fragment>
              ))}
            </React.Fragment>
          ) : (
            !loading && <p className="text-grey_60">No post found</p>
          )}
        </div>

        <PaginationComponent />
      </div>
    </main>
  );
}

UserPosts.layout = Username;
