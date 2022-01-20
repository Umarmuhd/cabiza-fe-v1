import React from "react";

const PostItem = () => (
  <div className="py-8 border-b border-grey_80 mb-4 bg-white ">
    <div className="mx-auto md:w-4/5 w-full max-w-[90%]">
      <h1 className="text-4xl leading-9 font-semibold text-grey_20 mb-6">
        User Post Preview
      </h1>
      <p className="text-grey_60 mb-6">Dec 11, 2021</p>
      <div className="mb-6">
        <p className="text-grey_60 md:w-8/12">
          I'm currently testing my account here as a newbie to see how it works.
        </p>
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

          <ul className="flex items-center">
            <li className="text-lg font-medium text-cabiza_grey mr-4">
              Products
            </li>
            <li className="text-lg font-medium text-cabiza_blue">Posts</li>
          </ul>

          <button className="rounded-lg p-2 font-semibold text-lg text-white bg-cabiza_blue">
            Follow
          </button>
        </div>
      </div>
      <main className="md:my-10 bg-grey_98">
        <PostItem />
        <PostItem />
        <PostItem />
        <PostItem />
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
