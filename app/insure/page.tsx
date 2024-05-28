import Image from 'next/image'

import React from 'react';

export default function Page() {
  return (

    <>
    <div>
      <div className='flex flex-row'>
        <div className="hidden lg:flex items-center justify-center flex-1 bg-white text-black">
          <div className="h-full overflow-hidden">
            <img
              src="/v4.png"
              alt="DucatiV4"
              className="w-full h-full object-none"
            />
          </div>
        </div>




        <div className="w-full bg-gray-100 lg:w-1/2 flex items-center justify-center py-24">
          <div className="max-w-md w-full p-6">
            <h1 className="text-3xl font-semibold mb-6 text-black text-center">Insure</h1>
            <h1 className="text-sm font-semibold mb-6 text-gray-500 text-center">Appreciate the things you love without all the risk, with xyz insurance, our trusted insurer. </h1>
            <div className="mt-4 flex flex-col lg:flex-row items-center justify-between">
            </div>
            <form action="#" method="POST" className="space-y-4">

              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input type="text" id="name" name="name" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone Number</label>
                <input type="phone" id="phone" name="phone" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" />
              </div>
              <div className="relative">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="resize-y border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300 block w-full min-h-[100px] max-h-[300px] p-2"
                ></textarea>
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none">

                </div>
              </div>

              <div>
                <button type="submit" className="w-full bg-black text-white p-2 rounded-md hover:bg-gray-800  focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">Sign Up</button>
              </div>
            </form>
            <div className="mt-4 text-sm text-gray-600 text-center">
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
