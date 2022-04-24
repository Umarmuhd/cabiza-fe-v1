import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/config/index";

import { user_profile } from "@/atoms/user_profile";

import Username from "@/layouts/Username";

const PostItem = ({ post }) => {
  return (
    <div className="py-8 border-b border-grey_80 mb-4 bg-white ">
      <div className="mx-auto md:w-10/12 w-full max-w-[90%]">
        <h1 className="text-4xl leading-9 font-medium text-secondary_ink_darkest mb-6">
          {post.title}
        </h1>
        <p className="text-secondary_sky_base mb-4 text-xs leading-3">
          {new Date(post.createdAt).toLocaleDateString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </p>
        <div className="mb-6">
          <p className="text-secondary_brand_light md:w-8/12">
            {post.description.slice(0, 150)}.
          </p>
        </div>
        <Link href={`/${post.user.username}/posts/${post._id}`}>
          <a className="px-4 py-2 rounded-4xl bg-primary text-white font-medium leading-4 text-base">
            {post.call_to_action}
          </a>
        </Link>
      </div>
    </div>
  );
};

export default function UserPosts() {
  const { user } = useRecoilValue(user_profile);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(`${API_URL}/posts/user/${user._id}`);
        setPosts(response.data.data.posts);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchPosts();
  }, [user]);

  return (
    <main className="md:my-10 bg-grey_98">
      {posts.length > 0 && !loading ? (
        <React.Fragment>
          {posts.map((post, index) => (
            <React.Fragment key={index}>
              <PostItem post={post} />
            </React.Fragment>
          ))}
        </React.Fragment>
      ) : (
        <div className="md:max-w-[88%] max-w-[90%] mx-auto md:py-20">
          <div className="text-center">
            <img src="/images/empty.svg" alt="..." className="mx-auto mb-8" />

            <h1 className="text-dark_ text-4xl leading-9 font-semibold mb-2">
              Empty post
            </h1>
          </div>
        </div>
      )}
    </main>
  );
}

UserPosts.layout = Username;
