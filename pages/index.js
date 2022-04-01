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

const ArrowRight = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M1.36401 5.67944H10.6973M10.6973 5.67944L6.03067 1.0127M10.6973 5.67944L6.03067 10.346" stroke="#5B44E9" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
)

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
    <div className='w-full h-full'>
      <MainNavigation />
      <HeroSection />
      <main>
        <Feature />
        <CategoriesSection />
        <div className={`${styles.main}`}>
          <section className='bg-secondary_sky_lighter px-4 py-7 md:px-24 lg:px-8 lg:py-7 mt-16'>
            <div
              id='membership'
              className={`${styles.membership} mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl`}
            >
              <h2 className='font-semibold text-secondary text-4xl mb-10 text-center md:text-left mt-16'>
                Membership plans
              </h2>

              <div className='flex'>
                <div className={`${styles.plans} mt-10 ${styles.flex}`}>
                  <div className={styles.col}>
                    <h4>FREE ZONE</h4>
                    <h3>Starter</h3>
                    <p className={styles.price}>£0</p>
                    <a href=''>Sign Up</a>
                    <p>
                      Limited access (intro module or 7 day trial) to the
                      specific/main course on this subscription.
                    </p>
                    <a href='' className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>

                  <div className={`${styles.col} ${styles.popular}`}>
                    <aside>Most popular</aside>
                    <h4>BUYERS ZONE</h4>
                    <h3>Owner</h3>
                    <p className={styles.price}>£50/Annum</p>
                    <a href=''>Sign Up</a>
                    <p className={styles.description}>
                      Everyone is entitled to have access to only 1 free course
                      on this subscription per annum.
                    </p>
                    <a href='' className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>

                  <div className={styles.col}>
                    <h4>MAKERS ZONE</h4>
                    <h3>Shaper</h3>
                    <p className={styles.price}>£500/Annum</p>
                    <a href=''>Sign Up</a>
                    <p>
                      Everyone is entitled to have access to 5 free
                      courses/items on this subscription per annum.
                    </p>
                    <a href='' className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>

                  <div className={styles.col}>
                    <h4>CORPORATE ZONE</h4>
                    <h3>Innovator</h3>
                    <p className={styles.price}>£5000/Annum</p>
                    <a href=''>Sign Up</a>
                    <p>
                      This member has access to 20 free courses/items on this
                      subscription per annum.
                    </p>
                    <a href='' className={styles['btn-secondary']}>
                      Learn More
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className='bg-white'>
            <div
              className={`${styles.testimony} px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20`}
            >
              <div className='flex flex-col lg:flex-row mt-10 md:gap-16'>
                <div>
                  <img src='/images/testimony.png' alt='' />
                </div>

                <div className='lg:w-[50%]'>
                  <h3 className='font-semibold text-secondary text-4xl text-center md:text-left mb-10'>
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
                            <img src='/images/review-profile-pic.png' alt='' />
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

                          <a href=''>
                            Read More <ArrowRight />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src='/images/review-profile-pic.png' alt='' />
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

                          <a href=''>
                            Read More{' '}
                            <img src='/images/icons/arrow-right.svg' alt='' />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src='/images/review-profile-pic.png' alt='' />
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

                          <a href=''>
                            Read More{' '}
                            <img src='/images/icons/arrow-right.svg' alt='' />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src='/images/review-profile-pic.png' alt='' />
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

                          <a href=''>
                            Read More{' '}
                            <img src='/images/icons/arrow-right.svg' alt='' />
                          </a>
                        </div>

                        <div className={styles.review}>
                          <div className={styles['review-header']}>
                            <img src='/images/review-profile-pic.png' alt='' />
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

                          <a href=''>
                            Read More{' '}
                            <img src='/images/icons/arrow-right.svg' alt='' />
                          </a>
                        </div>
                      </div>
                    </div>

                    <div className={styles.controls}>
                      <div className={styles.flex}>
                        <svg
                          width='27'
                          height='27'
                          viewBox='0 0 37 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          onClick={moveReviewBackward}
                        >
                          <circle
                            cx='18.0307'
                            cy='18.6792'
                            r='17'
                            stroke='#EFEDFD'
                            stroke-width='2'
                          />
                          <path
                            d='M20.6557 25.609L14.9507 19.904C14.277 19.2303 14.277 18.1278 14.9507 17.454L20.6557 11.749'
                            stroke='#EFEDFD'
                            stroke-width='1.5'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                            stroke-linejoin='round'
                          />
                        </svg>

                        <svg
                          width='27'
                          height='27'
                          viewBox='0 0 37 37'
                          fill='none'
                          xmlns='http://www.w3.org/2000/svg'
                          onClick={moveReviewForward}
                        >
                          <circle
                            cx='18.0307'
                            cy='18.6792'
                            r='17'
                            stroke='#5B44E9'
                            stroke-width='2'
                          />
                          <path
                            d='M15.3269 25.609L21.0319 19.904C21.7057 19.2303 21.7057 18.1278 21.0319 17.454L15.3269 11.749'
                            stroke='#5B44E9'
                            stroke-width='1.5'
                            stroke-miterlimit='10'
                            stroke-linecap='round'
                            stroke-linejoin='round'
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
            <h3 className='text-secondary'> Subscribe to our newsletter</h3>
            <p>
              Get helpful tips and content to grow as a creator and digital
              entrepreneur.
            </p>

            <div className={styles['input-container']}>
              <input
                type='email'
                name='email'
                id='email'
                placeholder='Email Address...'
              />
              <button>
                <SendIcon />
              </button>
            </div>
          </section>
        </div>
      </main>
      <MainFooter />
    </div>
  );
}
