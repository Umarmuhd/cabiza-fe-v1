import React, { useState, useEffect, useContext } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";

const CaretUpIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6 0.000244141L11.1962 9.00024H0.803848L6 0.000244141Z"
      fill="#D9D9D9"
    />
  </svg>
);
const CaretDownIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M6 12.0002L11.1962 3.00024H0.803848L6 12.0002Z" fill="#D9D9D9" />
  </svg>
);

export default function Post() {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);

  const router = useRouter();
  const { post_id } = router.query;

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/posts/post/${post_id}`);

      setPost(response.data.data.post);
      setLoading(false);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [post_id]);

  return (
    <div className="min-h-screen w-full">
      <div className="bg-grey_95 py-6">
        <div className="md:max-w-[88%] max-w-[90%] mx-auto flex justify-between">
          <Link href={`/${post?.user.username}/posts`}>
            <a className="flex items-center cursor-pointer">
              <Image
                src={post ? post.user.profile_picture : "/images/avatar.png"}
                alt="..."
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
              <span className="text-lg font-medium text-grey_20 ml-2">
                {post ? post.user.full_name : "..."}
              </span>
            </a>
          </Link>

          <button className="rounded-4xl py-2 px-4 font-medium text-lg text-white bg-primary">
            + Follow
          </button>
        </div>
      </div>
      <main className="mx-auto md:w-4/5 max-w-[90%] md:my-20 my-10">
        {!loading && post && (
          <React.Fragment>
            <div className="">
              <h1 className="text-4xl leading-9 text-grey_20 font-semibold mb-6">
                {post.title}
              </h1>

              <p className="text-2xl text-grey_60">{post.createdAt}</p>
              {/* <p className="text-2xl text-grey_60">Dec 11, 2021</p> */}

              <p className="text-grey_40 mt-6">{post.description}</p>

              <div className="mt-6">
                <button className="px-4 py-2 rounded-lg bg-cabiza_blue text-white font-medium">
                  {post.call_to_action}
                </button>
              </div>
            </div>
            <hr className="my-4 md:min-w-full" />
            <button className="text-grey_40 px-4 py-2 rounded-lg border border-grey_40">
              Download Attachment
            </button>
          </React.Fragment>
        )}
      </main>
      <div className="bg-grey_95 w-full py-12">
        <div className="mx-auto md:w-4/5 max-w-[90%]">
          <h2 className="text-2xl font-semibold text-grey_20 mb-6">
            0 Comments
          </h2>
          <div className="flex flex-col items-start md:items-center justify-between md:flex-row">
            <div className="w-8 h-8 mr-4 md:mb-0 mb-4">
              <Image
                src={user?.profile_picture ?? "/images/avatar.png"}
                alt="..."
                className="h-8 w-8 rounded-full"
                width={32}
                height={32}
              />
            </div>

            <div className="flex justify-between items-center w-full md:w-[88%]">
              <div className="flex rounded-lg shadow-sm w-[85%]">
                <input
                  type="text"
                  className="border border-r-0 border-grey_80 px-4 py-3 placeholder-grey_80 text-grey_40 bg-white shadow-sm focus:outline-none focus:ring w-full rounded-l-lg"
                  style={{ transition: "all 0.15s ease 0s" }}
                  placeholder="Write a comment"
                />
                <span className="inline-flex items-center px-3 rounded-r-lg border border-l-0 border-gray-300 bg-gray-50 text-gray-500 text-sm flex-col justify-center">
                  <button>
                    <CaretUpIcon />
                  </button>
                  <button>
                    <CaretDownIcon />
                  </button>
                </span>
              </div>

              <button className="rounded-lg py-3 px-4 font-medium text-sm text-white bg-cabiza_blue ml-5 md:ml-0">
                Post
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
