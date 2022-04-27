import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import { useRouter } from "next/router";
import axios from "axios";
import { API_URL } from "@/config/index";

import { user_profile } from "@/atoms/user_profile";

import Username from "@/layouts/Username";
import Image from "next/image";
import styles from "../../discover/index.module.css";

const RightIcon = () => (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.9998 0.666748C6.63984 0.666748 0.666504 6.64008 0.666504 14.0001C0.666504 21.3601 6.63984 27.3334 13.9998 27.3334C21.3598 27.3334 27.3332 21.3601 27.3332 14.0001C27.3332 6.64008 21.3598 0.666748 13.9998 0.666748ZM19.3732 14.7067L15.3732 18.7067C15.1732 18.9067 14.9198 19.0001 14.6665 19.0001C14.4132 19.0001 14.1598 18.9067 13.9598 18.7067C13.5732 18.3201 13.5732 17.6801 13.9598 17.2934L16.2532 15.0001H9.33317C8.7865 15.0001 8.33317 14.5467 8.33317 14.0001C8.33317 13.4534 8.7865 13.0001 9.33317 13.0001H16.2532L13.9598 10.7067C13.5732 10.3201 13.5732 9.68008 13.9598 9.29342C14.3465 8.90675 14.9865 8.90675 15.3732 9.29342L19.3732 13.2934C19.7598 13.6801 19.7598 14.3201 19.3732 14.7067Z" fill="#5B44E9" />
  </svg>
);

const LeftIcon = () => (
  <svg width="27" height="28" viewBox="0 0 27 28" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M13.4998 0.666626C6.13984 0.666626 0.166504 6.63996 0.166504 14C0.166504 21.36 6.13984 27.3333 13.4998 27.3333C20.8598 27.3333 26.8332 21.36 26.8332 14C26.8332 6.63996 20.8598 0.666626 13.4998 0.666626ZM18.1665 15H11.2465L13.5398 17.2933C13.9265 17.68 13.9265 18.32 13.5398 18.7066C13.3398 18.9066 13.0865 19 12.8332 19C12.5798 19 12.3265 18.9066 12.1265 18.7066L8.1265 14.7066C7.73984 14.32 7.73984 13.68 8.1265 13.2933L12.1265 9.29329C12.5132 8.90663 13.1532 8.90663 13.5398 9.29329C13.9265 9.67996 13.9265 10.32 13.5398 10.7066L11.2465 13H18.1665C18.7132 13 19.1665 13.4533 19.1665 14C19.1665 14.5466 18.7132 15 18.1665 15Z" fill="#BFB6F6" />
  </svg>
);

const ProductItem = ({ product }) => {
  const { asPath } = useRouter()
  console.log()
  return (
      <div className={styles.cards}>
        <div className={`flex ${styles["product-cards"]} pb-4 px-2 overflow-hidden`}>
          <div
            className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
          >
            <Image
              src={product.image}
              alt="..."
              className="object-cover rounded-xl"
              width="400rem"
              height="340rem"
            />
            <div className="p-5 rounded-b">
              <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                {product.category}
              </p>
              <h4 className="text-2xl text-secondary font-medium mb-3">
                {product.title}
              </h4>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2"></span>
                <Image
                  src={product.authorImage}
                  alt="..."
                  className="h-9 w-9 rounded-full"
                  width="35rem"
                  height="35rem"
                />

                <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                  {product.author}
                </a>
              </div>
              <div className="mt-3 flex items-center justify-between mt-4">
                <div className="flex items-center">
                  <Image
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                    width="15rem"
                    height="15rem"
                  />
                  <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                    {product.ratings}
                    <span className="font-normal ml-1">{product.ratingsII}</span>
                  </span>
                </div>
                <span
                  className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                >
                  {product.price}
                </span>
              </div>
              <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
                <p className="text-xs text-secondary">
                  40% Affiliate Commission
                </p>
                <a
                  href=""
                  className="bg-primary text-white font-medium text-sm rounded px-3 py-2 sm:ml-10"
                >
                  Become Affiliate
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default function Products() {
  const { user } = useRecoilValue(user_profile);

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
        ratingsII: "(25)"
      },  
      {
        title: "Emotional Intelligence",
        category: "Books",
        author: "Sara Mitchell",
        authorImage: "/images/author.png",
        price: "$5000+",
        image: "/images/book-small.png",
        ratings: "5.0",
        ratingsII: "(25)"
      },  
      {
        title: "Emotional Intelligence",
        category: "Books",
        author: "Sara Mitchell",
        authorImage: "/images/author.png",
        price: "$5000+",
        image: "/images/book-small.png",
        ratings: "5.0",
        ratingsII: "(25)"
      },     
    ])
  }, [user]);

  const { asPath } = useRouter();
  const newPath = asPath.replace('/products', '');

  return (
    <main className="bg-white">
      <div className="mx-auto md:w-43/50 py-10 md:my-20">
        <div className="mb-8">
          <h1 className="text-3xl font-semibold text-secondary_ink_darkest">
            Resources to help creators and digital entrepreneurs learn and earn more. Follow us to receive helpful content every week, delivered directly to your inbox. Cabiza’s official account.
          </h1>
        </div>

        <div className="flex items-center flex-start">
          <button className="text-white bg-primary flex h-[max-content] items-center rounded-full px-6 py-2">
            Products
          </button>
          <Link href={`${newPath}/posts`} passHref>
            <button className="bg-primary_brand_lightest text-primary flex h-[max-content] ml-6 items-center rounded-full px-6 py-2">
              Posts
            </button>
          </Link>
        </div>

        <div
          className="mt-20 flex gap-5"
        >
          {products.length > 0 && !loading ? (
            <>
              {products.map((product, index) => (
                <React.Fragment key={index}>
                  <ProductItem product={product} />
                </React.Fragment>
              ))}
            </>
          ) : (
            <p className="text-grey_60">No product found</p>
          )}
        </div>

        <div
          className='flex w-[max-content] border border-grey_80 p-2 rounded mt-7'
          style={{ 'border-radius': '20px' }}
        >
          <LeftIcon />
          <p className='mx-3 text-secondary text-md '>Page 1 of 8</p>
          <RightIcon />
        </div>
      </div>
    </main>
  );
}

Products.layout = Username;
