import Link from "next/link";

export const HeroSection = () => {
  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="grid gap-5 row-gap-8 lg:grid-cols-2">
        <div className="flex flex-col justify-center">
          <div className="max-w-xl mb-6 sm:text-left text-center">
            <div>
              <p className="text-lg font-semibold mb-6 text-primary_brand_light">
                Welcome to your company
              </p>
            </div>
            <h1 className="font-bold text-3xl sm:text-5xl text-secondary">
              The platform designed to help you{" "}
              <span className="text-primary">own</span> and{" "}
              <span className="text-primary">grow</span> your business.
            </h1>

            <p className="my-6 text-cabiza_grey">
              Earn a living while you learn within an international community of
              experts and peers. Get the support you need to grow your business
              from anywhere, to any size possible.
            </p>
          </div>
          <div className="flex md:justify-start justify-center">
            <Link href="/auth/signup">
              <a
                className={`p-3 px-12 bg-primary text-lg font-semibold text-white rounded-[48px]`}
              >
                Get started
              </a>
            </Link>
          </div>
        </div>
        <div className="relative">
          <img src="/images/hero.svg" alt="..." />
        </div>
      </div>
    </div>
  );
};
