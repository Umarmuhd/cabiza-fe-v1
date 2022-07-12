import { PRODUCT_CATEGORIES } from "@/libs/constant";
import Image from "next/image";
import Link from "next/link";

const ProductItem = ({ product, userDetails }) => {
  return (
    <div className="pb-4 overflow-hidden shadow rounded-xl">
      <div className="w-full relative rounded-t-xl">
        <Image
          src={product?.thumbnail ?? "/images/book-small.png"}
          alt="..."
          width="100%"
          height="100%"
          layout="responsive"
          className="rounded-t-xl"
        />
      </div>
      <div className="p-5 rounded-b">
        <p className="text-lg text-secondary_sky_dark font-normal mb-1">
          {PRODUCT_CATEGORIES[product?.categories ?? "n"]}
        </p>
        <Link href={`/products/${product.product_id}`}>
          <a className="text-2xl text-secondary font-medium">{product.name}</a>
        </Link>
        <div className="flex items-center mt-3">
          <span className="text-lg text-grey_60 font-medium mr-2"></span>
          <Image
            src={userDetails?.profile_picture ?? "/images/avatar.png"}
            alt="..."
            className="h-9 w-9 rounded-full"
            width="35rem"
            height="35rem"
          />

          <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
            {userDetails.full_name}
          </a>
        </div>
        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center">
            {/* <Image
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                    width="15rem"
                    height="15rem"
                  /> */}
            <span className="ml-2 font-semibold text-secondary_ink_lighter text-md">
              {product.ratings}
              <span className="font-normal ml-1">{product.ratingsII}</span>
            </span>
          </div>
          <span className="text-sm font-normal py-2 px-5 pl-3 bg-primary rounded text-white price">
            {product.price}+
            <style jsx>{`
              .price {
                position: relative;
              }

              .price::after {
                content: "";
                position: absolute;
                width: 20%;
                height: 100%;
                top: 0;
                right: -1%;
                background-color: #fff;
                clip-path: polygon(0 50%, 100% 100%, 100% 0);
              }
            `}</style>
          </span>
        </div>
        <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
          <p className="text-xs text-secondary leading-3">
            40% Affiliate Comm.
          </p>
          <a
            href=""
            className="bg-primary text-white font-medium text-sm leading-4 rounded px-2 py-2 sm:ml-10"
          >
            Become Affiliate
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
