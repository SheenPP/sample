"use client";

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';


export default function Home() {
  const router = useRouter();


  return (
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      <div className="text-center text-black my-5 px-4">
        <h1 className="text-2xl sm:text-3xl my-2 font-bold font-cursive">Want to Find your</h1>
        <h1 className="text-2xl sm:text-3xl my-2 font-bold font-cursive text-pink-600">Filipina Dream Girl?</h1>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg w-full max-w-3xl shadow-md overflow-hidden mx-auto my-5 p-5">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-5 my-5 z-50">
          <div className="bg-pink-500 p-4 rounded-lg">
            <Image src="/mnt/data/Screenshot 2024-06-21 153727.png" alt="Couple" width={250} height={250} className="rounded-lg" />
          </div>
          <p className="text-gray-800 text-sm sm:text-base leading-6 sm:leading-7 mx-auto my-0 max-w-lg font-normal font-sans">
            Entdecken Sie Ihre Filipina-Traumfrau auf unserer maßgeschneiderten Dating-Plattform für deutsche Männer. Wir priorisieren Ihre Bedürfnisse und bieten eine sichere und unterstützende Umgebung für bedeutungsvolle Verbindungen. Schließen Sie sich uns an, um echte Beziehungen über Grenzen hinweg zu fördern.
          </p>
        </div>
        <div className="flex items-center my-5">
          <h2 className="text-3xl font-bold text-black font-sans mr-4 text-left">Meet your ideal partner today!</h2>

          <button className="bg-pink-500 text-white font-bold py-2 px-4 rounded-full" type="button" onClick={() => router.push('/registration')}>
      Create Account
    </button>
        </div>
      </div>
    </div>
  );
}
