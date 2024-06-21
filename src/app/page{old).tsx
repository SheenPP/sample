import React from 'react';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="font-cursive text-gray-800 text-center m-0 p-0">
      <div className="text-center text-black my-5 px-4">
        <h1 className="text-2xl sm:text-3xl my-2 font-semibold">Want to Find your</h1>
        <h1 className="text-2xl sm:text-3xl my-2 font-semibold text-pink-600">Filipina Dream Girl ?</h1>
        <p className="text-sm sm:text-base leading-6 sm:leading-7 mx-auto my-0 max-w-lg font-normal font-sans">
          Entdecken Sie Ihre Filipina-Traumfrau auf unserer maßgeschneiderten Dating-Plattform für deutsche Männer. Wir legen großen Wert auf Ihre Bedürfnisse und bieten eine sichere sowie unterstützende Umgebung für bedeutungsvolle Verbindungen. Schließen Sie sich uns an, um echte Beziehungen über Grenzen hinweg zu fördern.
        </p>
      </div>
      <div className="bg-white border border-gray-300 rounded-lg w-full max-w-3xl shadow-md overflow-hidden mx-auto my-5 p-5">
        <div className="flex flex-col sm:flex-row justify-center gap-5 my-5 z-50">
          <div className="bg-white border border-gray-300 rounded-lg w-full sm:w-64 shadow-md overflow-hidden text-left rotate-[-10deg] origin-center m-6 p-2 z-40 relative">
            <Image src="/jane.jpg" alt="Jane Doe" width={200} height={200} className="w-full h-auto rounded-t-lg" />
            <div className="p-4 font-sans">
              <h2 className="text-lg mb-2">Jane Doe, 30</h2>
              <p className="text-sm text-gray-600 leading-relaxed">Jane Doe ist eine liebevolle und fürsorgliche Person...</p>
            </div>
          </div>
          <div className="bg-white border border-gray-300 rounded-lg w-full sm:w-64 shadow-md overflow-hidden text-left rotate-[10deg] origin-center m-6 p-2 z-40 relative">
            <Image src="/john.jpg" alt="John Doe" width={200} height={200} className="w-full h-auto rounded-t-lg" />
            <div className="p-4 font-sans">
              <h2 className="text-lg mb-2">John Doe, 35</h2>
              <p className="text-sm text-gray-600 leading-relaxed">John Doe ist ein aufgeschlossener und freundlicher Mensch...</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
