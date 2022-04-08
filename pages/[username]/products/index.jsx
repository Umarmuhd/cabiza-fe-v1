import React, { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Link from "next/link";
import axios from "axios";
import { API_URL } from "@/config/index";

import { user_profile } from "@/atoms/user_profile";

import Username from "@/layouts/Username";
import Image from "next/image";

const ProductItem = ({ product }) => {
  console.log(product);
  return (
    <div className="shadow">
      <img src="/images/book-small.png" alt="..." />
      <div className="p-5 rounded-b">
        <p className="text-lg text-secondary_sky_dark mb-2">Books</p>
        <Link href={"/discover/" + product.product_id}>
          <a className="text-xl text-secondary font-medium cursor-pointer block">
            {product.name}
          </a>
        </Link>
        <div className="flex items-center mt-4">
          <Image
            src="/images/author.png"
            alt="..."
            className="h-10 w-10"
            width={40}
            height={40}
          />
          <p className="text-lg font-medium ml-2 underline text-grey_60">
            {product.user.fullName}
          </p>
        </div>
        <div className="mt-8 flex items-center justify-between">
          <div className="flex items-center">
            <img src="/images/icons/star.svg" alt="..." className="w-6 h-6" />
            <span className="ml-2 text-lg font-semibold text-grey_40">5.0</span>
            <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
              <span className="text-sm font-medium text-grey_60">34567</span>
            </div>
          </div>
          <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
            ${product.price}+
          </span>
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
  }, [user]);

  return (
    <main className="mx-auto max-w-[90%] md:w-4/5 py-10 md:my-20">
      <div className="mb-12">
        <h1 className="md:w-3/4 text-2xl font-semibold text-grey_20">
          Resources to help creators and digital entrepreneurs learn and earn
          more. Follow us to receive helpful content every week, delivered
          directly to your inbox. Cabiza’s official account.
        </h1>
      </div>
      <div
        className="grid-cols-3
                space-y-2
                lg:space-y-0 lg:grid lg:gap-6"
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
    </main>
  );
}

Products.layout = Username;
