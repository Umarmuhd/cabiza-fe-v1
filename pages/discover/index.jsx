import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useAllProducts } from "@/hooks/useProducts";
import { dehydrate, QueryClient } from "react-query";
import { getAllProducts } from "../../api_calls/index";
import ProductSearch, { ProductItem } from "@/components/Discover/ProductSearch";
import PublicLayout from "@/layouts/PublicLayout";

// since product items are being repeated, making it dynamic is better
const items = [
  {
    "category": "Books",
    "title": "Emotional Intelligence",
    "username": "Sara Mitchell",
    "price": "$5000+"
  }
];

// function to increase the number of objects in an array
const makeRepeated = (arr, repeats) =>
  [].concat(...Array.from({ length: repeats }, () => arr));  

export default function Discover({ intro_products }) {
  const { data: products, isLoading } = useAllProducts();  

  return (
    <PublicLayout>
      <ProductSearch />
      <div
        id="explore_cat"
        className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20"
      >
        <div className="mx-auto w-[100%] px-3 max-w-[1500px] overflow-hidden">
          <h2 className="text-lg text-lighter font-medium mb-6">
            Explore Cabiza
          </h2>
          <p className="font-bold text-dark_ text-3xl mb-12 xs:w-[70%]">
            Perfect your career with tested and proven resources from experts
            and examples from others.
          </p>

          <div className={`${styles.cards} mb-7`}>
            <div className={`flex gap-2 ${styles["product-cards"]} pb-4 px-2`}>
              {intro_products.map(each => <div
                className="rounded-lg hover:bg-primary group cursor-pointer border border-primary_brand_lightest py-5 px-4 w-[15rem]"
                style={{
                  "&:hover": {
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                    "border-radius": "8px",
                  },
                }}
                key={each.title}
              >                
                <div className="mb-4 mx-auto"
                  style={{
                    border: "1px solid #E3E5E6",
                    boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.04)",
                  }}>
                  <Image src={`/${each.image}`} alt={each.title} width={210} height={130} objectFit="cover" loading="lazy"/>
                </div>
                <div className="text-center">
                  <h3 className="font-bold text-2xl mb-2 text-secondary group-hover:text-white">
                    {each.title}
                  </h3>
                  <p className="mb-4 text-sm font-medium text-secondary_sky_dark group-hover:text-lighter">
                    {each.categories}
                  </p>
                  <p className="font-medium text-md  group-hover:bg-white w-[max-content] p-2 px-3 rounded-xl bg-primary_brand_lightest text-primary mx-auto">
                    Explore products
                  </p>
                </div>
              </div>
              )}              
            </div>
          </div>

          <div className="mb-12">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Education
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                {!isLoading && products && (
                  <React.Fragment>
                    {products.products.map((product) => (
                      <React.Fragment key={product.product_id}>
                        <ProductItem product={product} />
                      </React.Fragment>
                    ))}
                  </React.Fragment>
                )}
              </div>
            </div>
          </div>

          <div className="mb-12 mt-12">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Crafts & DIY
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>

            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                {makeRepeated(items, 8).map(item => {
                  return <div
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`} key={item.title}
                >                  
                  <Image src="/images/book-small.png" alt="." width={385} height={300} objectFit="cover" loading="lazy"/>
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      {item.category}
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      {item.title}
                    </h4>
                    <div className="flex items-center">                      
                      <Image src="/images/author.png" alt="..." width={37} height={37} objectFit="cover" loading="lazy"/>                      
                      <span className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Image src="/images/icons/star.svg" alt="." width={26} height={26} objectFit="cover" loading="lazy"/>                        
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
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
                })}                              
              </div>
            </div>
          </div>

          <div className="mb-0">
            <header className="flex justify-between items-center mb-6">
              <h3 className="text-lg xs:text-4xl text-secondary font-semibold">
                Best selling in Design & Tech
              </h3>
              <a href="" className="text-primary_brand_light">
                View All
              </a>
            </header>
            <div className={styles.cards}>
              <div className={`flex ${styles["product-cards"]}`}>
                <div className={styles.cards}>
                  <div className={`flex ${styles["product-cards"]} pb-4 px-2`}>
                    {makeRepeated(items, 8).map(item => {
                  return <div
                  className={`shadow sm:w-sm:[max-content] overflow-hidden mr-5 h-[max-content] rounded-xl ${styles.card}`} key={item.title}
                >                  
                  <Image src="/images/book-small.png" alt="." width={385} height={300} objectFit="cover" loading="lazy"/>
                  <div className="p-5 rounded-b">
                    <p className="text-lg text-secondary_sky_dark font-normal mb-1">
                      {item.category}
                    </p>
                    <h4 className="text-2xl text-secondary font-medium mb-3">
                      {item.title}
                    </h4>
                    <div className="flex items-center">                      
                      <Image src="/images/author.png" alt="..." width={37} height={37} objectFit="cover" loading="lazy"/>                      
                      <span className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                        Sara Mitchell
                      </span>
                    </div>
                    <div className="flex items-center justify-between mt-4">
                      <div className="flex items-center">
                        <Image src="/images/icons/star.svg" alt="." width={26} height={26} objectFit="cover" loading="lazy"/>                        
                        <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
                          5.0
                          <span className="font-normal ml-1">(25)</span>
                        </span>
                      </div>
                      <span
                        className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
                      >
                        $5000+
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
                })}                                                  
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PublicLayout>
  );
}

export const getServerSideProps = async (context) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery("products", getAllProducts);
  
  const intro_products = [
    {
      title: "Education",
      image: "images/Education.png",
      categories: "Books, stories and guides"
    },
    {
      title: "Crafts & DIY",
      image: "images/crafts.png",
      categories: "Books, stories and guides"
    },
    {
      title: "Design & Tech",
      image: "images/design.png",
      categories: "Books, stories and guides"
    },
    {
      title: "Film and Videos",
      image: "images/film.png",
      categories: "Books, stories and guides"
    },
    {
      title: "Books and Writings",
      image: "images/Books.png",
      categories: "Books, stories and guides"
    },
    {
      title: "Games and Softwares",
      image: "images/Games.png",
      categories: "Books, stories and guides"
    }
  ]

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      intro_products
    },
  };
};
