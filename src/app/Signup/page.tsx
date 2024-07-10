"use client";
import React from 'react';
import { useRouter } from 'next/navigation';

const Signup = () => {

  const router = useRouter();

  const handleRegister = () => {

    router.push('/Success');
  };


  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="p-8 rounded-lg w-full max-w-md">
        <h1 className="text-4xl font-extrabold font-cursive text-center mb-6">Registration</h1>
        <form>
          <div className="relative mb-4 font-mono">
            <input
              type="text"
              placeholder=" "
              className="w-full p-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-custom-red placeholder-transparent peer"
            />
            <label className="absolute left-5 -top-3 text-black text-sm bg-white px-1 transition-all duration-200 ease-in-out">Full Name</label>
          </div>
          <div className="relative mb-4">
            <input
              type="number"
              placeholder=" "
              className="w-full p-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-custom-red placeholder-transparent peer"
            />
            <label className="absolute left-5 -top-3 text-black text-sm bg-white px-1 transition-all duration-200 ease-in-out">Age</label>
          </div>
          <div className="relative mb-4">
            <select
              className="w-full p-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-custom-red placeholder-transparent peer appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option>Single</option>
              <option>Married</option>
              <option>Other</option>
            </select>
            <label className="absolute left-5 -top-3 text-black text-sm bg-white px-1 transition-all duration-200 ease-in-out">Status</label>
          </div>
          <div className="relative mb-4">
            <select
              className="w-full p-3 border border-black rounded-full focus:outline-none focus:ring-2 focus:ring-custom-red placeholder-transparent peer appearance-none"
              defaultValue=""
            >
              <option value="" disabled hidden></option>
              <option>ID Card</option>
              <option>Passport</option>
              <option>Driver&#39;s License</option>
            </select>
            <label className="absolute left-5 -top-3 text-black text-sm bg-white px-1 transition-all duration-200 ease-in-out">Select ID</label>
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 mb-2">*Must upload 3-5 selfie photos for verification purposes</label>
            <div className="border-2 border-dashed border-gray-300 p-4 rounded-md text-center">
              <input type="file" accept="image/jpeg, image/png" className="hidden" id="fileUpload" multiple />
              <label htmlFor="fileUpload" className="cursor-pointer">
                <p>Drag and drop files here to upload</p>
                <p className="text-sm text-gray-500">Accepted file types: JPEG and PNG</p>
              </label>
            </div>
          </div>
          <div className="text-center">
            <button className="bg-custom-red text-white py-3 px-6 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
              Upload
            </button>
          </div>
        </form>
        <div className="text-center mt-6">
          <button onClick={handleRegister}
          className="bg-custom-red text-white py-3 px-6 rounded-md hover:bg-pink-600 focus:outline-none focus:ring-2 focus:ring-pink-500 focus:ring-offset-2">
            Register
          </button>
        </div>
      </div>
    </div>
  );
}

export default Signup;
