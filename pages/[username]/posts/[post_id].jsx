import React, { useState, useEffect, useContext, useRef } from "react";
import Link from "next/link";
import axios from "axios";
import { useRouter } from "next/router";
import { API_URL } from "@/config/index";
import Image from "next/image";
import AuthContext from "@/context/AuthContext";
import Username from "@/layouts/Username";
import { RWebShare } from "react-web-share";
import toast from "react-hot-toast";

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

const DownloadIcon = () => (
  <svg
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9 12.2506V9.25C9 8.56386 8.43614 8 7.75 8C7.06386 8 6.5 8.56386 6.5 9.25V12.2332C6.01226 11.8754 5.3164 11.9165 4.87645 12.3564C4.39118 12.8417 4.39118 13.6383 4.87645 14.1236L6.8417 16.0888C6.87235 16.1271 6.90372 16.1549 6.92687 16.173C7.01348 16.254 7.13478 16.3452 7.27943 16.4024C7.4272 16.4662 7.5822 16.5 7.75 16.5C7.91461 16.5 8.06689 16.4675 8.21212 16.406C8.37864 16.3457 8.52436 16.2427 8.63355 16.1336L10.6336 14.1336C11.1188 13.6483 11.1188 12.8517 10.6336 12.3664C10.1906 11.9235 9.48819 11.8849 9 12.2506ZM6.97637 16.2072C6.97691 16.2075 6.97597 16.207 6.97413 16.2058L6.97505 16.2064L6.97594 16.2069L6.97621 16.2071L6.97637 16.2072ZM15.61 8.69H18.5C18.7739 8.69 19 8.91614 19 9.19V14.43C19 16.0923 18.4239 17.3476 17.5277 18.1893C16.6266 19.0356 15.3629 19.5 13.93 19.5H6.07C4.63711 19.5 3.37343 19.0356 2.4723 18.1893C1.57612 17.3476 1 16.0923 1 14.43V5.57C1 3.90766 1.57612 2.65241 2.4723 1.81071C3.37343 0.964364 4.63711 0.5 6.07 0.5H10.31C10.5839 0.5 10.81 0.726142 10.81 1V3.89C10.81 6.53614 12.9639 8.69 15.61 8.69Z"
      fill="#5B44E9"
      stroke="#5B44E9"
    />
  </svg>
);

const CommentsItem = ({ comment }) => {
  return (
    <div className="flex items-start mt-5">
      <div className="border-2 border-primary rounded-full flex items-center p-[.2rem] w-[max-content]">
        <Image
          src={comment.user?.profile_picture ?? "/images/avatar.png"}
          width={32}
          height={32}
          className="rounded-full"
          alt="User"
        />
      </div>
      <div className="ml-5 mt-[-.4rem]">
        <div className="bg-secondary_sky_light rounded-full px-8 py-2">
          <h5 className="font-semibold text-secondary_ink_darkest">
            {comment?.user?.full_name}
          </h5>
          <p className="text-secondary_ink_darkest mt-1">{comment.body}</p>
        </div>
        <div className="ml-7 mt-2">
          <div className="text-primary flex gap-5">
            <p className="text-secondary_ink_lighter">
              {new Date(comment.createdAt).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
            <button>Like</button>
            <button>Reply</button>
          </div>
          {comment?.subComment?.length > 0
            ? comment.subComment.map((subComment) => {
                return (
                  <div key={subComment.id} className="flex items-center mt-4">
                    <div className="border-2 border-primary rounded-full flex items-center p-[.2rem] w-[max-content]">
                      <Image
                        src={"/images/avatar.png"}
                        width={32}
                        height={32}
                        className="rounded-full"
                        alt="User"
                      />
                    </div>
                    <div className="ml-5 mt-[-.4rem]">
                      <div className="bg-secondary_sky_light w-[max-content] rounded-full px-8 py-2 flex items-center gap-2">
                        <p className="font-semibold text-secondary_ink_darkest">
                          {subComment.name}
                        </p>
                        <p className="text-[14px] text-secondary_ink_dark">
                          {subComment.replyTo}
                        </p>

                        <p className="text-secondary_ink_lighter ml-2">
                          {subComment.comment}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </div>
    </div>
  );
};

export default function SinglePost() {
  const { user } = useContext(AuthContext);

  const [loading, setLoading] = useState(false);
  const [post, setPost] = useState(null);
  const [comments, setComments] = useState([]);

  const router = useRouter();
  const { post_id } = router.query;

  const commentRef = useRef();

  const fetchComments = async () => {
    try {
      const url = `${API_URL}/posts/comments/${post_id}`;
      const { data } = await axios.get(url);
      setComments(data.data.comments);
    } catch (error) {
      console.log(error.message);
    }
  };

  const fetchPost = async () => {
    try {
      setLoading(true);
      const response = await axios.get(`${API_URL}/posts/post/${post_id}`);

      setPost(response.data.data.post);
      setLoading(false);

      fetchComments();
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPost();
  }, [post_id]);

  const handleAddComment = async (e) => {
    e.preventDefault();
    const comment = commentRef.current.value;
    try {
      const url = `${API_URL}/posts/create/comment/${post_id}`;
      const { data } = await axios.post(url, { body: comment });
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
          <span className="ml-2.5 font-medium text-lg text-white">
            Comment added success !
          </span>
        </div>
      );
      commentRef.current.value = "";
      fetchComments();
    } catch (error) {
      console.error(error.message);
    }
  };

  return (
    <React.Fragment>
      {post && (
        <React.Fragment>
          <header className="mx-auto md:w-43/50 py-10 md:mt-20 bg-white rounded-xl px-10 shadow-lg">
            <div className="border-b border-secondary_sky_base p-3 pb-7">
              <h1 className="text-secondary_ink_darkest text-3xl">
                {post.title}
              </h1>
              <span className="text-secondary_sky_base text-sm">
                {new Date(post.createdAt).toLocaleDateString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </span>
              <p className="text-secondary_brand_light mt-3">
                {post.description}
              </p>
              <button className="bg-primary flex h-[max-content] items-center rounded-full text-white px-6 py-2 mt-6">
                {post.call_to_action}
              </button>
            </div>

            <div className="mt-7 flex items-center justify-between">
              <button className="flex bg-primary_brand_lightest p-3 rounded-full text-primary px-6">
                <DownloadIcon />
                <span className="ml-3">Download Attachments</span>
              </button>
              <RWebShare
                data={{
                  text: `Web Share - ${post.title}`,
                  url: `https://username.cabiza.net/posts/${post.post_id}`,
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
          </header>

          {post?.engagements.includes("0") ? (
            <main className="mx-auto md:w-43/50 py-10 md:mt-7 bg-white rounded-xl px-10 shadow-lg">
              <p className="text-xl">{comments.length} Comments</p>

              <form
                className="mt-7 flex justify-between items-center"
                onSubmit={handleAddComment}
              >
                <div className="border-2 border-primary rounded-full flex items-center p-[.2rem] w-[max-content]">
                  <Image
                    src={user?.profile_picture ?? "/images/avatar.png"}
                    width={32}
                    height={32}
                    className="rounded-full"
                    alt="User"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="flex items-center border border-sky_light rounded-full overflow-hidden relative">
                    <input
                      name="comment"
                      id="comment"
                      className="h-12 w-[65rem] text-secondary_ink_lighter bg-white px-4 outline-none appearance-none pl-7"
                      placeholder="Write a comment"
                      ref={commentRef}
                      autoComplete="off"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center text-gray-700 h-[100%] px-3 bg-secondary_sky_light pr-4 cursor-pointer">
                      <svg
                        width="12"
                        height="24"
                        viewBox="0 0 12 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M6 0L11.1962 9H0.803848L6 0Z" fill="#CDCFD0" />
                        <path
                          d="M6 24L11.1962 15H0.803848L6 24Z"
                          fill="#CDCFD0"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <button
                  className="bg-primary flex h-[max-content] items-center rounded-full text-white px-6 py-2"
                  type="submit"
                >
                  Post
                </button>
              </form>

              <div className="mt-2 flex flex-col w-[90%] mx-auto">
                {comments.length > 0 && !loading ? (
                  <>
                    {comments.map((comment, index) => (
                      <React.Fragment key={index}>
                        <CommentsItem comment={comment} />
                      </React.Fragment>
                    ))}
                  </>
                ) : (
                  <p className="text-grey_60">No comment found</p>
                )}
              </div>

              <div className="flex items-center justify-between"></div>
            </main>
          ) : null}
        </React.Fragment>
      )}
    </React.Fragment>
  );
}

SinglePost.layout = Username;
