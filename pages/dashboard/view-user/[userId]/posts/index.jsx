import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { API_URL, appKey } from "@/config/index";

const PostItem = (post) => (
  <div className="py-8 border-b border-grey_80 mb-4 bg-white ">
    <div className="mx-auto md:w-4/5 w-full max-w-[90%]">
      <h1 className="text-4xl leading-9 font-semibold text-grey_20 mb-6">
        {post.post.title}
      </h1>
      <p className="text-grey_60 mb-6">Dec 11, 2021</p>
      <div className="mb-6">
        <p className="text-grey_60 md:w-8/12">{post.post.message}</p>
      </div>
      <div className="">
        <button className="px-4 py-2 rounded-lg bg-cabiza_blue text-white font-medium">
          Read More
        </button>
      </div>
    </div>
  </div>
);

export default function UserPosts() {
  const router = useRouter();

  const { userId } = router.query;

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchPosts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/Post/all-post/${userId}`, {
        headers: { appKey },
      });

      if (response.status === 200) {
        setPosts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchPosts(), []);

  console.log(posts);
  return (
    <div className="min-h-screen w-full">
      <div className="bg-grey_95 py-6">
        <div className="md:max-w-[88%] max-w-[90%] mx-auto flex justify-between">
          <div className="flex items-center">
            <img src="/images/avatar.png" alt="..." className="h-8 w-8" />
            <span className="hidden md:block text-lg font-medium text-grey_20 ml-2">
              John Doe
            </span>
          </div>

          <div className="flex items-center">
            <Link href={`/dashboard/view-user/${userId}/products`}>
              <a className="text-lg font-medium text-cabiza_grey mr-4">
                Products
              </a>
            </Link>
            <Link href={`/dashboard/view-user/${userId}/posts`}>
              <a className="text-lg font-medium text-cabiza_blue">Posts</a>
            </Link>
          </div>

          <button className="rounded-lg p-2 font-semibold text-lg text-white bg-cabiza_blue">
            Follow
          </button>
        </div>
      </div>
      <main className="md:my-10 bg-grey_98">
        {posts.length > 0 && !loading ? (
          <>
            {posts.map((post, index) => (
              <React.Fragment key={index}>
                <PostItem post={post} />
              </React.Fragment>
            ))}
          </>
        ) : (
          <p className="text-grey_60">No post found</p>
        )}
      </main>
      <div className="w-full flex justify-center md:py-9 py-6">
        <div className="flex items-end">
          <p className="text-lg font-bold uppercase text-grey_60 mr-2">
            POWERED BY
          </p>
          <img src="/images/cabiza-logo.png" alt="..." className="h-10 w-40" />
        </div>
      </div>
    </div>
  );
}
