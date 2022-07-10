import { RWebShare } from "react-web-share";
import Link from "next/link";
import ShareIcon from "../Svgs/ShareIcon";

const PostItem = ({ post, username }) => {
  return (
    <div className="border border-secondary_sky_base rounded-xl px-6 py-7 cursor-pointer w-full">
      <div className="flex justify-between">
        <Link href={`/posts/${post._id}`} passHref>
          <h2 className="text-2xl font-semibold">{post.title}</h2>
        </Link>
        <RWebShare
          data={{
            text: `Web Share - ${post.title}`,
            url: `https://${username}.cabiza.net/posts/${post._id}`,
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
      <Link href={`/posts/${post._id}`} passHref>
        <button className="bg-primary flex h-[max-content] items-center rounded-full text-white px-6 py-2 mt-4">
          {post.call_to_action}
        </button>
      </Link>
    </div>
  );
};

export default PostItem;
