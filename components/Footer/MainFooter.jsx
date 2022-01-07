import React from "react";

export default function MainFooter() {
  return (
    <footer className="bg-tertiary text-white">
      <div className="container mx-auto mt-8 px-8">
        <div className="w-full flex flex-col md:flex-row py-6">
          <div className="flex-1 mb-6 w-2/5">
            <img src="/images/cabiza-logo.png" alt="..." />
            <p className="w-2/4 font-medium text-xl mt-5">
              2120 Broadway, Suite 112 Los Angeles, CA 12345
            </p>
          </div>

          <div className="flex flex-col md:flex-row md:w-3/5 w-full">
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Links
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    FAQ
                  </a>
                </li>
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Help
                  </a>
                </li>
                <li className="mt-2 block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Legal
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Terms
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Privacy
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Social
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Facebook
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Linkedin
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Twitter
                  </a>
                </li>
              </ul>
            </div>
            <div className="flex-1">
              <p className="uppercase font-extrabold text-gray-500 md:mb-6">
                Company
              </p>
              <ul className="list-reset mb-6">
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Official Blog
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    About Us
                  </a>
                </li>
                <li className="mt-2 inline-block mr-2 md:block md:mr-0">
                  <a
                    href="#"
                    className="font-light no-underline hover:underline text-gray-800 hover:text-orange-500"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
