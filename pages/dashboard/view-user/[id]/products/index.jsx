import React from "react";
import Link from "next/link";

export default function index() {
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

          <ul className="flex items-center">
            <li className="text-lg font-medium text-cabiza_blue mr-4">
              Products
            </li>
            <li className="text-lg font-medium text-cabiza_grey">Posts</li>
          </ul>

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
                lg:space-y-0 lg:grid lg:gap-6 lg:grid-rows-2"
        >
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <Link href="/discover/123">
                <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
                  Emotional Intelligence
                </h4>
              </Link>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <Link href="/discover/123">
                <h4 className="text-2xl text-dark_ font-bold mb-8 cursor-pointer">
                  Emotional Intelligence
                </h4>
              </Link>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <h4 className="text-2xl text-dark_ font-bold mb-8">
                Emotional Intelligence
              </h4>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <h4 className="text-2xl text-dark_ font-bold mb-8">
                Emotional Intelligence
              </h4>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <h4 className="text-2xl text-dark_ font-bold mb-8">
                Emotional Intelligence
              </h4>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
          <div className="shadow">
            <img src="/images/book-small.png" alt="..." />
            <div className="p-5 rounded-b">
              <p className="text-lg text-grey_80 font-medium mb-3">Books</p>
              <h4 className="text-2xl text-dark_ font-bold mb-8">
                Emotional Intelligence
              </h4>
              <div className="flex items-center">
                <span className="text-lg text-grey_60 font-medium mr-2">
                  By:
                </span>
                <img src="/images/author.png" alt="..." className="h-10 w-10" />
                <p className="text-lg font-medium ml-2 underline text-grey_60">
                  Sara Mitchell
                </p>
              </div>
              <div className="mt-8 flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src="/images/icons/star.svg"
                    alt="..."
                    className="w-6 h-6"
                  />
                  <span className="ml-2 text-lg font-semibold text-grey_40">
                    5.0
                  </span>
                  <div className="px-1 rounded border border-grey_80 ml-3 bg-grey_95">
                    <span className="text-sm font-medium text-grey_60">
                      34567
                    </span>
                  </div>
                </div>
                <span className="text-sm font-medium py-3 px-2.5 text-grey_98 bg-secondary rounded">
                  $5000+
                </span>
              </div>
            </div>
          </div>
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
