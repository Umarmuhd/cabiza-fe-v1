import { useState } from 'react';
import Link from 'next/link';
import styles from '../styles/Home.module.css';

import MainNavigation from '../components/Navbars/MainNav';
import MainFooter from '../components/Footer/MainFooter';
import { HeroSection } from '@/components/HeroSection';
import { Feature } from '@/components/FeatureSection';
import { CategoriesSection } from '@/components/CategoriesSection';

const SendIcon = ({ className }) => (
  <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${className ? className : ""}`}>
    <path d="M18.96 29.5125C17.3867 29.5125 15.16 28.4058 13.4 23.1125L12.44 20.2325L9.56001 19.2725C4.28001 17.5125 3.17334 15.2858 3.17334 13.7125C3.17334 12.1525 4.28001 9.91246 9.56001 8.13912L20.88 4.36579C23.7067 3.41912 26.0667 3.69912 27.52 5.13912C28.9733 6.57912 29.2533 8.95246 28.3067 11.7791L24.5333 23.0991C22.76 28.4058 20.5333 29.5125 18.96 29.5125ZM10.1867 10.0458C6.48001 11.2858 5.16001 12.7525 5.16001 13.7125C5.16001 14.6725 6.48001 16.1391 10.1867 17.3658L13.5467 18.4858C13.84 18.5791 14.08 18.8191 14.1733 19.1125L15.2933 22.4725C16.52 26.1791 18 27.4991 18.96 27.4991C19.92 27.4991 21.3867 26.1791 22.6267 22.4725L26.4 11.1525C27.08 9.09912 26.96 7.41912 26.0933 6.55246C25.2267 5.68579 23.5467 5.57912 21.5067 6.25912L10.1867 10.0458Z" fill="white"/>
    <path d="M13.4801 19.8724C13.2267 19.8724 12.9734 19.7791 12.7734 19.5791C12.3867 19.1924 12.3867 18.5524 12.7734 18.1658L17.5467 13.3791C17.9334 12.9924 18.5734 12.9924 18.9601 13.3791C19.3467 13.7658 19.3467 14.4058 18.9601 14.7924L14.1867 19.5791C14.0001 19.7791 13.7334 19.8724 13.4801 19.8724Z" fill="white"/>
  </svg>
);

const ArrowRight = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.36401 5.67944H10.6973M10.6973 5.67944L6.03067 1.0127M10.6973 5.67944L6.03067 10.346"
      stroke="#5B44E9"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Home() {
  const [position, setPosition] = useState(0);
  function moveReviewForward() {
    if (position === 0) {
      let newPosition = 0;
      newPosition += 33;
      setPosition(newPosition);
    } else if (position >= 132) {
      setPosition(0);
    } else {
      setPosition((prev) => prev + 33);
    }
  }
  function moveReviewBackward() {
    if (position > 0) {
      setPosition((prev) => prev - 33);
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
      <main>
        <Feature />
        <CategoriesSection />
        <div className={styles.main}>
          <section className="bg-secondary_sky_lighter px-4 py-7 md:px-24 lg:px-8 lg:py-7 mt-16">
            <div
              id="membership"
              className={`${styles.membership} mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl`}
            >
              <h2 className="font-semibold text-secondary text-4xl mb-10 text-center md:text-left mt-16">
                Membership plans
              </h2>

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
                    <a href="" className={styles['btn-secondary']}>
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
                      Everyone is entitled to have access to only 1 free course
                      on this subscription per annum.
                    </p>
                    <a href="" className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>

                  <div className={styles.col}>
                    <h4>MAKERS ZONE</h4>
                    <h3>Shaper</h3>
                    <p className={styles.price}>£500/Annum</p>
                    <a href="">Sign Up</a>
                    <p>
                      Everyone is entitled to have access to 5 free
                      courses/items on this subscription per annum.
                    </p>
                    <a href="" className={styles['btn-secondary']}>
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
                    <a href="" className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-white">
            <div
              className={`${styles.testimony} px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}
            >
              <div className="flex flex-col lg:flex-row mt-10 md:gap-16">
                <div>
                  <img src="/images/testimony.png" alt="" />
                </div>

                <div className="lg:w-[50%]">
                  <h3 className="font-semibold text-secondary text-4xl text-center md:text-left mb-10">
                    Testimonies
                  </h3>
                  <div>
                    <div className={styles.reviews}>
                      <div
                        className={styles['reviews-container']}
                        style={{
                          transform: `translateX(-${position}rem)`,

                          '@media (max-width: 768px)': {
                            display: 'none',
                          },
                        }}
                      >
                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src="/images/review-profile-pic.png" alt="" />
                            <div className={styles['header-content']}>
                              <h5>Emmanuel Jacob</h5>
                              <p>Ui/Ux Design Expert</p>
                              <p>Jacnet Tech.</p>
                            </div>
                          </div>
                          <div className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          <a href="">
                            Read More <ArrowRight />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src="/images/review-profile-pic.png" alt="" />
                            <div className={styles['header-content']}>
                              <h5>Emmanuel Jacob</h5>
                              <p>Ui/Ux Design Expert</p>
                              <p>Jacnet Tech.</p>
                            </div>
                          </div>
                          <div className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          <a href="">
                            Read More{' '}
                            <img src="/images/icons/arrow-right.svg" alt="" />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src="/images/review-profile-pic.png" alt="" />
                            <div className={styles['header-content']}>
                              <h5>Emmanuel Jacob</h5>
                              <p>Ui/Ux Design Expert</p>
                              <p>Jacnet Tech.</p>
                            </div>
                          </div>
                          <div className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          <a href="">
                            Read More{' '}
                            <img src="/images/icons/arrow-right.svg" alt="" />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src="/images/review-profile-pic.png" alt="" />
                            <div className={styles['header-content']}>
                              <h5>Emmanuel Jacob</h5>
                              <p>Ui/Ux Design Expert</p>
                              <p>Jacnet Tech.</p>
                            </div>
                          </div>
                          <div className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          <a href="">
                            Read More{' '}
                            <img src="/images/icons/arrow-right.svg" alt="" />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src="/images/review-profile-pic.png" alt="" />
                            <div className={styles['header-content']}>
                              <h5>Emmanuel Jacob</h5>
                              <p>Ui/Ux Design Expert</p>
                              <p>Jacnet Tech.</p>
                            </div>
                          </div>
                          <div className={styles.description}>
                            Lorem Ipsum is simply dummy text of the printing and
                            typesetting industry. Lorem Ipsum has been the
                            industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and
                            scrambled it to make a type specimen book.
                          </div>

                          <a href="">
                            Read More{' '}
                            <img src="/images/icons/arrow-right.svg" alt="" />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={styles.controls}>
                      <div className={styles.flex}>
                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 37 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={moveReviewBackward}
                        >
                          <circle
                            cx="18.0307"
                            cy="18.6792"
                            r="17"
                            stroke="#EFEDFD"
                            strokeWidth="2"
                          />
                          <path
                            d="M20.6557 25.609L14.9507 19.904C14.277 19.2303 14.277 18.1278 14.9507 17.454L20.6557 11.749"
                            stroke="#EFEDFD"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>

                        <svg
                          width="27"
                          height="27"
                          viewBox="0 0 37 37"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          onClick={moveReviewForward}
                        >
                          <circle
                            cx="18.0307"
                            cy="18.6792"
                            r="17"
                            stroke="#5B44E9"
                            strokeWidth="2"
                          />
                          <path
                            d="M15.3269 25.609L21.0319 19.904C21.7057 19.2303 21.7057 18.1278 21.0319 17.454L15.3269 11.749"
                            stroke="#5B44E9"
                            strokeWidth="1.5"
                            strokeMiterlimit="10"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </div>

                      <div className={styles.flex}>
                        <div
                          className={`${styles['review-location-step']} ${
                            position === 0 ? styles.active : 'null'
                          }`}
                        ></div>
                        <div
                          className={`${styles['review-location-step']} ${
                            position === 33 ? styles.active : 'null'
                          } `}
                        ></div>
                        <div
                          className={`${styles['review-location-step']} ${
                            position === 66 ? styles.active : 'null'
                          }`}
                        ></div>
                        <div
                          className={`${styles['review-location-step']} ${
                            position === 99 ? styles.active : 'null'
                          }`}
                        ></div>
                        <div
                          className={`${styles['review-location-step']} ${
                            position === 132 ? styles.active : 'null'
                          }`}
                        ></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className={`${styles.subscribe} mt-16`}>
            <h3 className="text-secondary"> Subscribe to our newsletter</h3>
            <p>
              Get helpful tips and content to grow as a creator and digital
              entrepreneur.
            </p>

            <div className={`${styles['input-container']} overflow-hidden`}>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Email Address..."
                className="ml-3 h-[100%] border-[transparent] bg-[transparent]"
              />
              <button className="mr-3">
                <SendIcon className="w-[1.5rem] h-[1.5rem]"/>
              </button>
            </div>
          </section>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
