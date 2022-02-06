import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import { API_URL, appKey } from "@/config/index";

const ProductItem = (product) => (
  <div className="shadow">
    <img src="/images/book-small.png" alt="..." />
    <div className="p-5 rounded-b">
      <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
      <Link href="/discover/123">
        <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
          {product.product.name}
        </h4>
      </Link>
      <div className="flex items-center">
        <span className="text-lg text-grey_60 font-medium mr-2">By:</span>
        <img src="/images/author.png" alt="..." className="h-10 w-10" />
        <p className="text-lg font-medium ml-2 underline text-grey_60">
          {product.product.user.fullName}
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
          ${product.product.price}+
        </span>
      </div>
    </div>
  </div>
);

export default function Products() {
  const router = useRouter();

  const { userId } = router.query;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);
      const response = await axios.get(
        `${API_URL}/ProductType/all-productuser/${userId}`,
        {
          headers: { appKey },
        }
      );

      if (response.status === 200) {
        setProducts(response.data);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => fetchProducts(), []);

  return (
    <div className="min-h-screen w-full bg-grey_98">
      <div className="bg-grey_95 py-6">
        <div className="md:max-w-[88%] max-w-[90%] mx-auto flex justify-between">
          <div className="flex items-center">
            <img src="/images/avatar.png" alt="..." className="h-8 w-8" />
            <span className="hidden md:block text-lg font-medium text-grey_20 ml-2">
              John Doe
            </span>
          </div>

          <div className="flex items-center">
            <Link href={`/dashboard/view-user/${userId}/products`}>
              <a className="text-lg font-medium text-cabiza_grey mr-4">
                Products
              </a>
            </Link>
            <Link href={`/dashboard/view-user/${userId}/posts`}>
              <a className="text-lg font-medium text-cabiza_blue">Posts</a>
            </Link>
          </div>

          <button className="rounded-lg p-2 font-semibold text-lg text-white bg-cabiza_blue">
            Follow
          </button>
        </div>
      </div>
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
