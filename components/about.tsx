import Image from 'next/image'
import Link from 'next/link';

import React from 'react';

export default function About() {
  return (

    <>
      <section className="flex items-center font-poppins pb-10">

        <div className="justify-center flex-1 max-w-6xl mx-auto lg:py-6 md:px-6">

          <div className="flex flex-wrap ">

            {/* <div className="w-full px-4 mb-10 lg:w-1/2 lg:mb-0 ">

              <div className="relative">

                <div className="absolute z-30 text-red-500 transform -translate-y-1/2 cursor-pointer top-[47%] left-[44%] hover:text-blue-500">

                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"

                    className="w-14 h-14 bi bi-play-circle-fill" viewBox="0 0 16 16">

                    <path

                      d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z">

                    </path>

                  </svg>

                </div>


              </div>

            </div> */}




            <div className="w-full px-4 mb-10 lg:mb-0 sm:mt-48 pt-4 ">

              <div className="relative">


                <h1 className="pl-2 text-3xl font-bold border-l-8 border-red-500 md:text-5xl dark:text-white">

                  Welcome to Gentlemen&apos;s Garage

                </h1>

              </div>

              <p className="mt-6 mb-10 text-base leading-7 text-gray-500 dark:text-gray-400">

              Your premier destination for everything vintage and classic in the world of cars and bikes. At Gentlemen’s Garage, we are driven by a deep passion for timeless vehicles that capture the essence of a bygone era. Our mission is to bring together enthusiasts who share a love for classic motoring and provide them with exceptional services that cater to their every need.
               </p>

              <a href="#"

                className="px-4 py-3 text-gray-50 transition-all transform bg-red-500 rounded-[80px] hover:bg-red-400 dark:hover:text-gray-100 dark:text-gray-100 ">

                Learn more

              </a>

            </div>

          </div>

        </div>

      </section>
      
      <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4 md:p-6">
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <Link href="https://www.youtube.com/watch?v=sths1evgFh8" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Watch video</span>
        </Link>
        <img
          src="/kneedown.png"
          alt="Video Thumbnail"
          width={400}
          height={225}
          className="object-cover w-full aspect-video"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold line-clamp-2">2024 Triumph Street Triple 765RS</h3>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Watch video</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Video Thumbnail"
          width={400}
          height={225}
          className="object-cover w-full aspect-video"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold line-clamp-2">Introducing the frontend cloud</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Vercel's vision for the future of web development
          </p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Watch video</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Video Thumbnail"
          width={400}
          height={225}
          className="object-cover w-full aspect-video"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold line-clamp-2">Using Vercel KV with Svelte</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">A deep dive into Vercel's key-value store</p>
        </div>
      </div>
      <div className="relative overflow-hidden rounded-lg group cursor-pointer">
        <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
          <span className="sr-only">Watch video</span>
        </Link>
        <img
          src="/placeholder.svg"
          alt="Video Thumbnail"
          width={400}
          height={225}
          className="object-cover w-full aspect-video"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
          <PlayIcon className="w-12 h-12 text-white" />
        </div>
        <div className="p-4 bg-background">
          <h3 className="text-lg font-semibold line-clamp-2">Loading UI with Next.js 13</h3>
          <p className="text-sm text-muted-foreground line-clamp-2">
            Optimizing your app's performance with Next.js 13
          </p>
        </div>
      </div>
    </div>
      </section>

    </>
  );
}


function PlayIcon(props: JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="6 3 20 12 6 21 6 3" />
    </svg>
  )
}