import { useState, useEffect } from 'react'
import styles from "../styles/Home.module.css";

import MainNavigation from "../components/Navbars/MainNav";
import MainFooter from "../components/Footer/MainFooter";

export default function Home() {
  const [position, setPosition] = useState(0)

  function moveReviewForward() {
    if (position === 0) {
      let newPosition = 0;
      newPosition += 100;
      setPosition(newPosition);
    } else if (position === 400) {
      setPosition(0);
    } else {
      setPosition(prev => prev + 100);
    }
  }

  useEffect(() => {
    console.log(position)
  }, [position]);

  function moveReviewBackward() {
    if (position > 0) {
      setPosition(prev => prev - 100)
    } else {
      setPosition(0)
    }
  }

  const [featurePosition, setFeaturePosition] = useState(0)

  function moveFeatureForward() {
    if (featurePosition === 0) {
      let newPosition = 0;
      newPosition += 95;
      setFeaturePosition(newPosition);
    } else if (featurePosition >= 760) {
      setFeaturePosition(0);
    } else {
      setFeaturePosition(prev => prev + 95);
    }
  }

  useEffect(() => {
    console.log(featurePosition)
  }, [featurePosition]);

  function moveFeatureBackward() {
    if (featurePosition > 0) {
      setFeaturePosition(prev => prev - 95)
    } else {
      setFeaturePosition(0)
    }
  }
  return (
    <div className="w-full h-full">
      <MainNavigation />
      <header className={`${styles.hero}`}>
        <div>
          <div className={styles.flex}>
            <div className={styles.content}>
              <p className="text-lg font-semibold mb-6 text-grey_80">
                Welcome to your company
              </p>

              <h1 className="font-bold text-5xl text-grey_40">
                The platform designed to help you{" "}
                <span className="text-yellow">own</span> and{" "}
                <span className="text-yellow">grow</span>{" "} your business.
              </h1>

              <p className="my-6 text-cabiza_grey">
                Earn a living while you learn within an international community
                of experts and peers. Get the support you need to grow your
                business from anywhere, to any size possible.
              </p>


              <div className="flex md:justify-start justify-center">
                <a className={`p-3 px-12 bg-cabiza_blue text-lg font-semibold text-white rounded ${styles.pointer}`}>
                  Get started
                </a>
              </div>
            </div>
            <div className={styles["hero-image"]}>
              <img src="/images/hero.png" alt="..." />
            </div>
          </div>
        </div>
      </header>
      <main className={styles.main}>
        <section id="features" className={`${styles["features-container"]} md:py-20 py-10 bg-grey_95`}>
          <div className={`${styles.features} px-11`}>
            <h2 className="font-semibold text-grey_20 text-4xl mb-8 text-center md:text-left">
              Our Features
            </h2>
            <div className={styles.cards} style={{
              transform: `translateX(-${featurePosition}vw)`
            }}>
              <div className={styles.card}>
                <img src="/images/setup-1.svg" alt="..." />
                <p>
                  Set up your business right away
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-2.svg" alt="..." />
                <p>
                  Earn big while you learn
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-3.svg" alt="..." />
                <p>
                  Work from home
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-4.svg" alt="..." />
                <p>
                  Train up to become even better
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-5.svg" alt="..." />
                <p>
                  Sell your works
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-6.svg" alt="..." />
                <p>
                  Escape the 9 to 5 hassles
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-7.svg" alt="..." />
                <p>
                  Collaborate with peers globally
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-8.svg" alt="..." />
                <p>
                  Grow your business to any size
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>

              <div className={styles.card}>
                <img src="/images/setup-9.svg" alt="..." />
                <p>
                  Get unlimited support
                </p>
                <a className="rounded bg-grey_98 text-secondary font-semibold">
                  LEARN MORE
                </a>
              </div>
            </div>


            <div className={`flex ${styles.controls}`}>
              <svg width="56" height="56" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={moveFeatureBackward}>
                <g filter="url(#filter0_d_731_28024)">
                  <circle cx="38" cy="30" r="17" stroke="#CCCCCC" strokeWidth="2" />
                  <path d="M40.625 36.9301L34.92 31.2251C34.2462 30.5513 34.2462 29.4488 34.92 28.7751L40.625 23.0701" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_731_28024" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_731_28024" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_731_28024" result="shape" />
                  </filter>
                </defs>
              </svg>

              <svg width="56" height="56" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={moveFeatureForward}>
                <g filter="url(#filter0_d_731_28025)">
                  <circle cx="38" cy="30" r="17" stroke="#CCCCCC" strokeWidth="2" />
                  <path d="M35.2963 36.9301L41.0013 31.2251C41.675 30.5513 41.675 29.4488 41.0013 28.7751L35.2963 23.0701" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_731_28025" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_731_28025" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_731_28025" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </section>

        <section id="categories" className={styles.categories}>
          <h3 className="mb-12">Business Categories</h3>

          <div className={styles.flex}>
            <div className={styles.col}>
              <h4 className={`${styles["categories-header"]} mb-7`}>Browse, explore and find an area of your business interest or business speciality.</h4>
              <a className="rounded bg-grey_98 text-secondary font-semibold">
                LEARN MORE
              </a>
            </div>
            <div className={`${styles.col} ${styles.flex}`}>
              <div className={styles.col}>
                <ul className="mr-10">
                  <li>Education</li>
                  <li>Crafts & DIY</li>
                  <li>Design & Tech</li>
                  <li>Film and Video</li>
                  <li>Books & Writing</li>
                  <li>Apps & Software</li>
                  <li>Animation & Games</li>
                  <li>Drawing & Painting</li>
                </ul>
              </div>

              <div className={styles.col}>
                <ul>
                  <li>Merchandising </li>
                  <li>Food & Cooking</li>
                  <li>Music & Sound Design</li>
                  <li>Podcasts & Audiobooks</li>
                  <li>Photography & Photo Editing</li>
                  <li>Marketing (Social Media, Affiliate, etc.)</li>
                  <li>eCommerce, Amazon FBA & Drop Shipping</li>
                  <li>More</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section id="membership" className={styles.membership}>
          <h2>Membership plans</h2>

          <div className="flex">
            <div className={`${styles.plans} mt-10 ${styles.flex}`}>
              <div className={styles.col}>
                <h4>FREE ZONE</h4>
                <h3>Starter</h3>
                <p className={styles.price}>£0</p>
                <a href="">Sign Up</a>
                <p>Limited access (intro module or 7 day trial) to the specific/main course on this subscription.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={`${styles.col} ${styles.popular}`}>
                <aside>Most popular</aside>
                <h4>BUYERS ZONE</h4>
                <h3>Owner</h3>
                <p className={styles.price}>£50/Annum</p>
                <a href="">Sign Up</a>
                <p className={styles.description}>
                  Everyone is entitled to have access to only 1 free course on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={styles.col}>
                <h4>MAKERS ZONE</h4>
                <h3>Shaper</h3>
                <p className={styles.price}>£500/Annum</p>
                <a href="">Sign Up</a>
                <p>Everyone is entitled to have access to 5 free courses/items on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>

              <div className={styles.col}>
                <h4>CORPORATE ZONE</h4>
                <h3>Innovator</h3>
                <p className={styles.price}>£5000/Annum</p>
                <a href="">Sign Up</a>
                <p>This member has access to 20 free courses/items on this subscription per annum.</p>
                <a href="" className={styles["btn-secondary"]}>Learn More</a>
              </div>
            </div>
          </div>
        </section>


        <section className={styles.testimony}>
          <h3>Testimonies</h3>
          <div className={styles.reviews}>
            <div className={styles["reviews-container"]} style={{
              transform: `translateX(-${position}vw)`
            }}>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
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
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>

                <a href="">Read More <img src="/images/icons/arrow-right.svg" alt="" /></a>
              </div>
            </div>
          </div>

          <div className={styles.controls}>
            <div className={styles.flex}>

              <svg width="56" height="56" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={moveReviewBackward}>
                <g filter="url(#filter0_d_731_28024)">
                  <circle cx="38" cy="30" r="17" stroke="#CCCCCC" strokeWidth="2" />
                  <path d="M40.625 36.9301L34.92 31.2251C34.2462 30.5513 34.2462 29.4488 34.92 28.7751L40.625 23.0701" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_731_28024" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_731_28024" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_731_28024" result="shape" />
                  </filter>
                </defs>
              </svg>

              <svg width="56" height="56" viewBox="0 0 76 76" fill="none" xmlns="http://www.w3.org/2000/svg" onClick={moveReviewForward}>
                <g filter="url(#filter0_d_731_28025)">
                  <circle cx="38" cy="30" r="17" stroke="#CCCCCC" strokeWidth="2" />
                  <path d="M35.2963 36.9301L41.0013 31.2251C41.675 30.5513 41.675 29.4488 41.0013 28.7751L35.2963 23.0701" stroke="#CCCCCC" strokeWidth="1.5" strokeMiterlimit="10" strokeLinecap="round" strokeLinejoin="round" />
                </g>
                <defs>
                  <filter id="filter0_d_731_28025" x="0" y="0" width="76" height="76" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
                    <feOffset dy="8" />
                    <feGaussianBlur stdDeviation="10" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.12 0" />
                    <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_731_28025" />
                    <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_731_28025" result="shape" />
                  </filter>
                </defs>
              </svg>
            </div>

            <div className={styles.flex}>
              <div className={`${styles["review-location-step"]} ${position === 0 ? styles.active : "null"}`}></div>
              <div className={`${styles["review-location-step"]} ${position === 100 ? styles.active : "null"} `}></div>
              <div className={`${styles["review-location-step"]} ${position === 200 ? styles.active : "null"}`}></div>
              <div className={`${styles["review-location-step"]} ${position === 300 ? styles.active : "null"}`}></div>
              <div className={`${styles["review-location-step"]} ${position === 400 ? styles.active : "null"}`}></div>
            </div>
          </div>
        </section>

        <section className={styles.subscribe}>
          <h3> Subscribe to our newsletter</h3>
          <p>Get helpful tips and content to grow as a creator and digital entrepreneur.</p>

          <div className={styles["input-container"]}>
            <input type="email" name="email" id="email" placeholder="Email Address..." />
            <button><img src="/images/icons/Send.svg" alt="..." /></button>
          </div>
        </section>
      </main>
      <MainFooter />
    </div>
  );
}
