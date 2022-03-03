import React from "react";

export default function MainFooter() {
  return (
    <footer className="bg-grey_20 text-white pt-3">
      <div className="container mx-auto mt-8 px-8 flex">
        <div className="w-full flex flex-col lg:flex-row md:flex-column py-6">
          {/* md:w-2/5 */}
          <div className="flex-1 mb-6 mr-auto">
            <img src="/images/cabiza-logo.png" alt="..." />
            <p className="md:w-2/4 font-medium text-xl mt-5">
              2120 Broadway, Suite 112 Los Angeles, CA 12345
            </p>
          </div>

          {/* md:w-3/5 */}
          <div className="flex flex-col md:flex-row w-[20rem]">
            <div className="flex-1 mr-5">
              <p className="uppercase font-extrabold text-cabiza_blue md:mb-6">
                Others
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Career
                  </a>
                </li>
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Team
                  </a>
                </li>

                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Terms of Services
                  </a>
                </li>

                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Privacy / Polices
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="flex-1">
              <p className="uppercase font-extrabold text-grey_98 md:mb-6">
                Legal
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div> */}
            <div className="flex-1">
              <p className="uppercase font-extrabold text-cabiza_blue md:mb-6">
                Social
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Instagram
                  </a>
                </li>
                <li className="mt-2 mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>

                 <li className="mt-2 mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>

                <li className="mt-2 mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Youtube
                  </a>
                </li>
                <li className="mt-2 mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Pinterest
                  </a>
                </li>
              </ul>
            </div>
            {/* <div className="flex-1">
              <p className="uppercase font-extrabold text-grey_98 md:mb-6">
                Company
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-grey_98 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div> */}
          </div>
        </div>
      </div>
    </footer>
  );
}
