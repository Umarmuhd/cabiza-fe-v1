import styles from "./products.module.css";

const ProductItem = ({ product }) => {
  return (
    <div className={styles.cards}>
      <div
        className={`flex ${styles["product-cards"]} pb-4 px-2 overflow-hidden`}
      >
        <div
          className={`shadow sm:w-sm:[max-content] mr-5 h-[max-content] rounded-xl ${styles.card}`}
        >
          {/* <Image
            src={product.image}
            alt="..."
            className="object-cover rounded-xl"
            width="400rem"
            height="340rem"
          /> */}
          <div className="p-5 rounded-b">
            <p className="text-lg text-secondary_sky_dark font-normal mb-1">
              {product.category}
            </p>
            <h4 className="text-2xl text-secondary font-medium mb-3">
              {product.name}
            </h4>
            <div className="flex items-center">
              <span className="text-lg text-grey_60 font-medium mr-2"></span>
              {/* <Image
                  src={product.authorImage}
                  alt="..."
                  className="h-9 w-9 rounded-full"
                  width="35rem"
                  height="35rem"
                /> */}

              <a className="font-medium ml-2 text-secondary_ink_lighter block border-b border-b-secondary_ink_lighter">
                {product.author}
              </a>
            </div>
            <div className="mt-3 flex items-center justify-between mt-4">
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
              <span
                className={`text-sm font-normal py-2 px-5 pl-3 bg-primary rounded ${styles.price} text-white`}
              >
                {product.price}
              </span>
            </div>
            <div className="rounded-xl border border-sky_light flex justify-between items-center mt-5 px-1 sm:px-3 py-1 pr-2 bg-secondary_sky_lightest">
              <p className="text-xs text-secondary">40% Affiliate Commission</p>
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

export default ProductItem