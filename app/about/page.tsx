'use client'

import Image from 'next/image'

import React, { useEffect, useRef } from 'react';

export default function Page() {

  const videoEl = useRef<HTMLVideoElement | null>(null);

  const attemptPlay = () => {
    videoEl.current &&
      videoEl.current.play().catch((error: any) => {
        console.error("Error attempting to play", error);
      });
  };

  useEffect(() => {
    attemptPlay();
  }, []);

  return (

    <>
      <section className="flex items-center xl:h-screen font-poppins">

        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">

          <div className="flex flex-wrap ">

            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">

              <div className="relative">

                <video
                  className="w-full h-full object-cover inset-0 rounded-tl-[30px] rounded-br-[30px] "
                  playsInline
                  autoPlay
                  loop
                  muted
                  src="/Timeline.mp4"
                  ref={videoEl}
                />

                <a href="https://www.youtube.com/watch?v=u7P26YFUie4" className="absolute z-30 text-red-500 transform -translate-y-1/2 cursor-pointer top-[47%] left-[44%] hover:text-blue-500">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"

                    className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">

                    <path

                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">

                    </path>

                  </svg>

                </a>


              </div>

            </div>




            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 md:mt-48 ">

              <div className="relative">

                <h1 className="pl-2 text-3xl font-bold border-l-8 border-red-500 md:text-5xl dark:text-white">

                  Welcome to our site

                </h1>

              </div>

              <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">

              Welcome to Gentlemen’s Garage, your premier destination for everything vintage and classic in the world of cars and bikes. At Gentlemen’s Garage, we are driven by a deep passion for timeless vehicles that capture the essence of a bygone era. Our mission is to bring together enthusiasts who share a love for classic motoring and provide them with exceptional services that cater to their every need.
              <br /><br />
              We focus on sharing vehicles that are rarely seen on the road in an immersive experience.

              </p>

            </div>

          </div>

        </div>

      </section>











      {/* <section className="flex items-center xl:h-screen font-poppins">

        <div className="justify-center flex-1 max-w-6xl py-4 mx-auto lg:py-6 md:px-6">

          <div className="flex flex-wrap ">

            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 md:mt-48 ">

              <div className="relative">

                <h1 className="absolute -top-20   left-0 text-[20px] lg:text-[100px] text-gray-900 font-bold  dark:text-gray-200 opacity-5 md:block hidden">

                  About Us

                </h1>

                <h1 className="pl-2 text-3xl font-bold border-l-8 border-red-500 md:text-5xl dark:text-white">

                  Welcome to our site

                </h1>

              </div>

              <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">

                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam Lorem ipsum dolor sit amet,

                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut

                labore et dolore magna aliqua. Ut enim ad minim veniamLorem ipsum dolor sit amet, consectetur

                adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad

                minim veniamLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor

              </p>

              <a href="#"

                className="px-4 py-3 text-gray-50 transition-all transform bg-red-500 rounded-[80px] hover:bg-red-400 dark:hover:text-gray-100 dark:text-gray-100 ">

                Learn more

              </a>

            </div>



            <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">

              <div className="relative">

                <Image src="/daytonapic.png" width={1000} height={1000} alt="" className="scale-75 md:scale-100 relative z-30 items-center object-cover md:w-[90%] h-[90%] rounded-tr-[80px] rounded-bl-[80px] rounded bg-slate-300" />






                <div className="absolute z-30 text-red-500 transform -translate-y-1/2 cursor-pointer top-[47%] left-[44%] hover:text-blue-500">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"

                    className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">

                    <path

                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">

                    </path>

                  </svg>

                </div>


              </div>

            </div>

          </div>

        </div>

      </section> */}
    </>
  );
}
