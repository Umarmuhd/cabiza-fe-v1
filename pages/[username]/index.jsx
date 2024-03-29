import React, { useState, useEffect } from "react";
import { useRecoilValue } from "recoil";

import Username from "@/layouts/Username";
import { user_profile } from "@/atoms/user_profile";
import ProductItem from "@/components/Username/products";
import PostItem from "@/components/Username/posts";
import axios from "@/libs/axiosInstance";
import { API_URL } from "@/config/index";
import { useRouter } from "next/router";

export default function Products() {
  const { user } = useRecoilValue(user_profile);

  const router = useRouter();
  const { username } = router.query;

  console.log(user);

  // for getting products
  const [products, setProducts] = useState([]);
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
    setProducts([
      {
        title: "Emotional Intelligence",
        category: "Books",
        author: "Sara Mitchell",
        authorImage: "/images/author.png",
        price: "$5000+",
        image: "/images/book-small.png",
        ratings: "5.0",
        ratingsII: "(25)",
      },
      {
        title: "Emotional Intelligence",
        category: "Books",
        author: "Sara Mitchell",
        authorImage: "/images/author.png",
        price: "$5000+",
        image: "/images/book-small.png",
        ratings: "5.0",
        ratingsII: "(25)",
      },
      {
        title: "Emotional Intelligence",
        category: "Books",
        author: "Sara Mitchell",
        authorImage: "/images/author.png",
        price: "$5000+",
        image: "/images/book-small.png",
        ratings: "5.0",
        ratingsII: "(25)",
      },
    ]);
  }, [user]);

  // for getting posts
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
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
    fetchPosts();
  }, [user]);

  console.log(posts);

  const [toggle, setToggle] = useState(false);

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

        <div className="flex items-center flex-start mb-10">
          <button
            className={
              !toggle
                ? "text-white bg-primary flex h-[max-content] items-center rounded-full px-6 py-2"
                : "bg-primary_brand_lightest text-primary flex h-[max-content] items-center rounded-full px-6 py-2"
            }
            onClick={() => setToggle(false)}
          >
            Products
          </button>
          <button
            className={`${
              !toggle
                ? "bg-primary_brand_lightest text-primary flex h-[max-content] items-center rounded-full px-6 py-2"
                : "text-white bg-primary flex h-[max-content] items-center rounded-full px-6 py-2"
            }  ml-6`}
            onClick={() => setToggle(true)}
          >
            Posts
          </button>
        </div>

        <div className="grid gap-5 mt-8 md:grid-cols-2 lg:grid-cols-3">
          {!toggle &&
            (products.length > 0
              ? products.map((product, index) => (
                  <React.Fragment key={index}>
                    {/* <ProductItem product={product} /> */}
                  </React.Fragment>
                ))
              : !loading && <p className="text-grey_60">No product found</p>)}
        </div>

        <div className="">
          {toggle &&
            (posts.length > 0
              ? posts.map((post, index) => (
                  <React.Fragment key={index}>
                    <PostItem post={post} username={username} />
                  </React.Fragment>
                ))
              : !loading && <p className="text-grey_60">No post found</p>)}
        </div>
      </div>
    </main>
  );
}

Products.layout = Username;
