import CategoriesIcon from "./CategoriesIcon"

const categories = [
  "Education", "Crafts & DIY", "Design & Tech", "Film and Video", "Books & Writing", "Apps & Software", "Animation & Games", "Drawing & Painting", "Merchandising", "Food & Cooking", "Music & Sound Design", "Podcasts & Audiobooks", "Photography & Photo Editing", "Marketing (Social Media, Affiliate, etc.)", "eCommerce, Amazon FBA & Drop Shipping", "More"
]

export const CategoriesSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 bg-footer mt-16">
      <div className="text-center text-white mb-10">
        <h3 className="mb-4 text-5xl font-bold">Business Categories</h3>
        <p className="text-lg font-semibold">
          Browse, explore and find an area of your business interest or business
          specialty.
        </p>
      </div>
      <div className="w-full max-w-full">
        <CategoriesIcon />
      </div>
      <div className="mt-10">
        <ul className="list-none grid md:gap-x-8 md:row-gap-5 md:grid-cols-2">
          {categories.map(cat => {
            return <li className="py-4 px-8 rounded-3xl bg-white hover:bg-primary_brand_lightest mb-3" key={categories.findIndex(each => each === cat ? cat : '')}>
            <span className="ml-2">{cat}</span>
          </li>
          })}
        </ul>
        <style jsx>{`
          li {
            position: relative;
          }
          li:before {
            content: "";
            left: 0.9rem;
            top: 1.3rem;
            position: absolute;
            width: 15px;
            height: 12px;
            background-image: url("/images/icons/bullet.svg");
            background-size: contain;
            margin-right: 0.5em;
          }
        `}</style>
      </div>
    </div>
  );
};
