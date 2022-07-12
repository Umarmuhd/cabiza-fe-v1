import Image from "next/image";
import Link from "next/link";
import React from "react";

const EmptyPosts = () => {
  return (
    <div className="w-4/5 mx-auto md:py-12">
      <div className="text-center">
        <h1 className="text-secondary_ink_dark text-4xl leading-9 font-semibold mb-2">
          Empty post
        </h1>
        <div className="mb-10 mt-4">
          <p className="text-secondary_ink_lighter text-lg">
            Create a post and start sharing.
          </p>
          <p className="text-secondary_ink_lighter">
            Click on
            <Link href="/posts/create">
              <a className="text-primary"> New post</a>
            </Link>{" "}
            to create your first post!
          </p>
        </div>
        <Image
          src="/images/empty.svg"
          alt="..."
          className="mx-auto"
          width={245}
          height={240}
        />
        <Link href="/posts/create">
          <a className="text-primary block bg-primary_brand_lightest w-[max-content] mx-auto mt-7 px-8 py-2 rounded-full text-lg">
            Create post
          </a>
        </Link>{" "}
      </div>
    </div>
  );
};

export default EmptyPosts;
