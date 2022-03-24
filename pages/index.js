import { useState } from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/Navbars/MainNav";
import MainFooter from "../components/Footer/MainFooter";
import { HeroSection } from "@/components/HeroSection";
import { Feature } from "@/components/FeatureSection";
import { CategoriesSection } from "@/components/CategoriesSection";

const SendIcon = () => (
  <svg
    width="26"
    height="27"
    viewBox="0 0 26 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M15.96 26.5125C14.3867 26.5125 12.16 25.4058 10.4 20.1125L9.44001 17.2325L6.56001 16.2725C1.28001 14.5125 0.17334 12.2858 0.17334 10.7125C0.17334 9.15246 1.28001 6.91246 6.56001 5.13912L17.88 1.36579C20.7067 0.419125 23.0667 0.699125 24.52 2.13912C25.9733 3.57912 26.2533 5.95246 25.3067 8.77912L21.5333 20.0991C19.76 25.4058 17.5333 26.5125 15.96 26.5125ZM7.18667 7.04579C3.48001 8.28579 2.16001 9.75246 2.16001 10.7125C2.16001 11.6725 3.48001 13.1391 7.18667 14.3658L10.5467 15.4858C10.84 15.5791 11.08 15.8191 11.1733 16.1125L12.2933 19.4725C13.52 23.1791 15 24.4991 15.96 24.4991C16.92 24.4991 18.3867 23.1791 19.6267 19.4725L23.4 8.15246C24.08 6.09912 23.96 4.41912 23.0933 3.55246C22.2267 2.68579 20.5467 2.57912 18.5067 3.25912L7.18667 7.04579Z"
      fill="white"
    />
  </svg>
);

export default function Home() {
  const [position, setPosition] = useState(0);
  function moveReviewForward() {
    if (position === 0) {
      let newPosition = 0;
      newPosition += 100;
      setPosition(newPosition);
    } else if (position === 400) {
      setPosition(0);
    } else {
      setPosition((prev) => prev + 100);
    }
  }
  function moveReviewBackward() {
    if (position > 0) {
      setPosition((prev) => prev - 100);
    } else {
      setPosition(0);
    }
  }

  const [featurePosition, setFeaturePosition] = useState(0);
  function moveFeatureForward() {
    if (featurePosition === 0) {
      let newPosition = 0;
      newPosition += 95;
      setFeaturePosition(newPosition);
    } else if (featurePosition >= 760) {
      setFeaturePosition(0);
    } else {
      setFeaturePosition((prev) => prev + 95);
    }
  }
  function moveFeatureBackward() {
    if (featurePosition > 0) {
      setFeaturePosition((prev) => prev - 95);
    } else {
      setFeaturePosition(0);
    }
  }

  return (
    <div className="w-full h-full">
      <MainNavigation />
      <HeroSection />
      <main className={styles.main}>
        <Feature />

        <CategoriesSection />

        <section id="membership" className={styles.membership}>
          <h2>Membership plans</h2>

          <div className="flex">
            <div className={`${styles.plans} mt-10 ${styles.flex}`}>
              <div className={styles.col}>
                <h4>FREE ZONE</h4>
                <h3>Starter</h3>
                <p className={styles.price}>£0</p>
                <a href="">Sign Up</a>
                <p>
                  Limited access (intro module or 7 day trial) to the
                  specific/main course on this subscription.
                </p>
                <a href="" className={styles["btn-secondary"]}>
                  Learn More
                </a>
              </div>

              <div className={`${styles.col} ${styles.popular}`}>
                <aside>Most popular</aside>
                <h4>BUYERS ZONE</h4>
                <h3>Owner</h3>
                <p className={styles.price}>£50/Annum</p>
                <a href="">Sign Up</a>
                <p className={styles.description}>
                  Everyone is entitled to have access to only 1 free course on
                  this subscription per annum.
                </p>
                <a href="" className={styles["btn-secondary"]}>
                  Learn More
                </a>
              </div>

              <div className={styles.col}>
                <h4>MAKERS ZONE</h4>
                <h3>Shaper</h3>
                <p className={styles.price}>£500/Annum</p>
                <a href="">Sign Up</a>
                <p>
                  Everyone is entitled to have access to 5 free courses/items on
                  this subscription per annum.
                </p>
                <a href="" className={styles["btn-secondary"]}>
                  Learn More
                </a>
              </div>

              <div className={styles.col}>
                <h4>CORPORATE ZONE</h4>
                <h3>Innovator</h3>
                <p className={styles.price}>£5000/Annum</p>
                <a href="">Sign Up</a>
                <p>
                  This member has access to 20 free courses/items on this
                  subscription per annum.
                </p>
                <a href="" className={styles["btn-secondary"]}>
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className={styles.testimony}>
          <h3>Testimonies</h3>
          <div className={styles.reviews}>
            <div
              className={styles["reviews-container"]}
              style={{
                transform: `translateX(-${position}vw)`,
              }}
            >
              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>

              <div className={styles.review}>
                <div className={styles["review-header"]}>
                  <img src="/images/review-profile-pic.png" alt="" />
                  <div className={styles["header-content"]}>
                    <h5>Emmanuel Jacob</h5>
                    <p>Ui/Ux Design Expert</p>
                    <p>Jacnet Tech.</p>
                  </div>
                </div>
                <div className={styles.description}>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book.
                </div>

                <a href="">
                  Read More <img src="/images/icons/arrow-right.svg" alt="" />
                </a>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.flex}>
              <svg
                width="56"
                height="56"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={moveReviewBackward}
              >
                <g filter="url(#filter0_d_731_28024)">
                  <circle
                    cx="38"
                    cy="30"
                    r="17"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                  />
                  <path
                    d="M40.625 36.9301L34.92 31.2251C34.2462 30.5513 34.2462 29.4488 34.92 28.7751L40.625 23.0701"
                    stroke="#CCCCCC"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_28024"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_28024"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_28024"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>

              <svg
                width="56"
                height="56"
                viewBox="0 0 76 76"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                onClick={moveReviewForward}
              >
                <g filter="url(#filter0_d_731_28025)">
                  <circle
                    cx="38"
                    cy="30"
                    r="17"
                    stroke="#CCCCCC"
                    strokeWidth="2"
                  />
                  <path
                    d="M35.2963 36.9301L41.0013 31.2251C41.675 30.5513 41.675 29.4488 41.0013 28.7751L35.2963 23.0701"
                    stroke="#CCCCCC"
                    strokeWidth="1.5"
                    strokeMiterlimit="10"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_731_28025"
                    x="0"
                    y="0"
                    width="76"
                    height="76"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_731_28025"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_731_28025"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className={styles.flex}>
              <div
                className={`${styles["review-location-step"]} ${
                  position === 0 ? styles.active : "null"
                }`}
              ></div>
              <div
                className={`${styles["review-location-step"]} ${
                  position === 100 ? styles.active : "null"
                } `}
              ></div>
              <div
                className={`${styles["review-location-step"]} ${
                  position === 200 ? styles.active : "null"
                }`}
              ></div>
              <div
                className={`${styles["review-location-step"]} ${
                  position === 300 ? styles.active : "null"
                }`}
              ></div>
              <div
                className={`${styles["review-location-step"]} ${
                  position === 400 ? styles.active : "null"
                }`}
              ></div>
            </div>
          </div>
        </section>

        <section className={styles.subscribe}>
          <h3 className="text-secondary"> Subscribe to our newsletter</h3>
          <p>
            Get helpful tips and content to grow as a creator and digital
            entrepreneur.
          </p>

          <div className={styles["input-container"]}>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email Address..."
            />
            <button>
              <SendIcon />
            </button>
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
