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

const RightIcon = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 28 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.9998 0.666748C6.63984 0.666748 0.666504 6.64008 0.666504 14.0001C0.666504 21.3601 6.63984 27.3334 13.9998 27.3334C21.3598 27.3334 27.3332 21.3601 27.3332 14.0001C27.3332 6.64008 21.3598 0.666748 13.9998 0.666748ZM19.3732 14.7067L15.3732 18.7067C15.1732 18.9067 14.9198 19.0001 14.6665 19.0001C14.4132 19.0001 14.1598 18.9067 13.9598 18.7067C13.5732 18.3201 13.5732 17.6801 13.9598 17.2934L16.2532 15.0001H9.33317C8.7865 15.0001 8.33317 14.5467 8.33317 14.0001C8.33317 13.4534 8.7865 13.0001 9.33317 13.0001H16.2532L13.9598 10.7067C13.5732 10.3201 13.5732 9.68008 13.9598 9.29342C14.3465 8.90675 14.9865 8.90675 15.3732 9.29342L19.3732 13.2934C19.7598 13.6801 19.7598 14.3201 19.3732 14.7067Z"
      fill="#5B44E9"
    />
  </svg>
);

const LeftIcon = () => (
  <svg
    width="27"
    height="28"
    viewBox="0 0 27 28"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M13.4998 0.666626C6.13984 0.666626 0.166504 6.63996 0.166504 14C0.166504 21.36 6.13984 27.3333 13.4998 27.3333C20.8598 27.3333 26.8332 21.36 26.8332 14C26.8332 6.63996 20.8598 0.666626 13.4998 0.666626ZM18.1665 15H11.2465L13.5398 17.2933C13.9265 17.68 13.9265 18.32 13.5398 18.7066C13.3398 18.9066 13.0865 19 12.8332 19C12.5798 19 12.3265 18.9066 12.1265 18.7066L8.1265 14.7066C7.73984 14.32 7.73984 13.68 8.1265 13.2933L12.1265 9.29329C12.5132 8.90663 13.1532 8.90663 13.5398 9.29329C13.9265 9.67996 13.9265 10.32 13.5398 10.7066L11.2465 13H18.1665C18.7132 13 19.1665 13.4533 19.1665 14C19.1665 14.5466 18.7132 15 18.1665 15Z"
      fill="#BFB6F6"
    />
  </svg>
);

const ProductItem = ({ post }) => {
  const { asPath } = useRouter();
  console.log();
  return (
    <Link href={`${asPath}/post`} passHref>
      <div className="border border-secondary_sky_base rounded-xl px-6 py-7 cursor-pointer">
        <div className="flex justify-between">
          <h2 className="text-2xl font-semibold">{post.title}</h2>
          <p className="flex items-center">
            <ShareIcon />
            <span className="ml-2 text-primary">Share</span>
          </p>
        </div>
        <span className="text-secondary_sky_base text-sm">
          {post.dateOfCreation}
        </span>
        <p className="text-secondary_brand_light mt-2">{post.description}</p>
        <button className="bg-primary flex h-[max-content] items-center rounded-full text-white px-6 py-2 mt-4">
          Post CTA
        </button>
      </div>
    </Link>
  );
};

export default function Products() {
  const { user } = useRecoilValue(user_profile);

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const response = await axios.get(
          `${API_URL}/products/user/${user._id}`
        );
        setProducts(response.data.data.products);
        setLoading(false);
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    };
    fetchProducts();
    setPosts([
      {
        title: "User Post Preview",
        dateOfCreation: "March 26, 2022",
        description: "I'm currently testing my account here...",
      },
      {
        title: "User Post Preview",
        dateOfCreation: "March 26, 2022",
        description: "I'm currently testing my account here...",
      },
      {
        title: "User Post Preview",
        dateOfCreation: "March 26, 2022",
        description: "I'm currently testing my account here...",
      },
    ]);
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

        <div className="mt-20 flex flex-col gap-5">
          {posts.length > 0 && !loading ? (
            <>
              {posts.map((post, index) => (
                <React.Fragment key={index}>
                  <ProductItem post={post} />
                </React.Fragment>
              ))}
            </>
          ) : (
            <p className="text-grey_60">No post found</p>
          )}
        </div>

        <div
          className="flex w-[max-content] border border-grey_80 p-2 rounded mt-7"
          style={{ "border-radius": "20px" }}
        >
          <LeftIcon />
          <p className="mx-3 text-secondary text-md ">Page 1 of 8</p>
          <RightIcon />
        </div>
      </div>
    </main>
  );
}

Products.layout = Username;
