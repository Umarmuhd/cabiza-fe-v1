import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { API_URL, appKey } from "@/config/index";

import Username from "@/layouts/Username";

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

  console.log(router);

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
        <div className="w-4/5 mx-auto md:py-20">
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
