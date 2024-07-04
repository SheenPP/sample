"use client";

import { useState } from 'react';
import { useRouter } from 'next/navigation';

type ButtonType = 'FILIPINA' | 'GERMAN'; // Define the type for button

export default function Registration() {
  const [clickedButton, setClickedButton] = useState<ButtonType | null>(null); // Set initial state type
  const router = useRouter();

  const handleButtonClick = (button: ButtonType) => { // Explicitly type the button parameter
    setClickedButton(button);
    router.push('verification');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl mb-5 font-cursive">Are YOU a?</h1>
      <div className="flex space-x-20">
        <button
          className={`px-5 py-2 font-bold rounded-full font-mono text-2xl transition duration-300 ease-in-out shadow-md shadow-black ${
            clickedButton === 'FILIPINA' ? 'bg-custom-red text-white' : 'hover:bg-white hover:text-red-500'
          }`}
          onClick={() => handleButtonClick('FILIPINA')}
        >
          FILIPINA
        </button>
        <button
          className={`px-5 py-2 font-bold rounded-full font-mono text-2xl transition duration-300 ease-in-out shadow-md shadow-black ${
            clickedButton === 'GERMAN' ? 'bg-custom-red text-white' : 'hover:bg-white hover:text-red-500'
          }`}
          onClick={() => handleButtonClick('GERMAN')}
        >
          GERMAN
        </button>
      </div>
    </div>
  );
}
