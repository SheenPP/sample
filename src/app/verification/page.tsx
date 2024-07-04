  "use client";
  import React, { useState } from 'react';
  import DockIcon from '@mui/icons-material/Dock';
  import MailOutlineIcon from '@mui/icons-material/MailOutline';

  const Verification = () => {
    const [mobileInputVisible, setMobileInputVisible] = useState(false);
    const [emailInputVisible, setEmailInputVisible] = useState(false);

    const handleMobileClick = () => {
      setMobileInputVisible(true);
      setEmailInputVisible(false);
    };

    const handleEmailClick = () => {
      setMobileInputVisible(false);
      setEmailInputVisible(true);
    };

    return (
      <div className="flex flex-col items-center justify-center h-screen">
        <h1 className="text-4xl font-cursive font-bold">Welcome</h1>
        <p className="mt-4 font-mono">Please choose verification method</p>
        <div className="flex-col gap-4 mt-8 space-y-6 font-mono">

          {/* Mobile Number */}
          <div className="relative w-full flex items-center">
            <button 
              onClick={handleMobileClick} 
              className={`flex items-center justify-center w-full px-4 py-2 text-lg rounded-full shadow-md shadow-black transition duration-300 ease-in-out ${
                mobileInputVisible ? 'opacity-0 pointer-events-none' : 'bg-gray-100 text-black hover:bg-white hover:text-custom-red'
              }`}
              style={{ transition: 'opacity 0.3s ease-in-out' }}
            >
              <DockIcon sx={{ fontSize: 20 }} className="mr-2" />
              Mobile Number
            </button>
            <div className={`absolute inset-0 flex items-center px-4 py-2 text-lg rounded-full shadow-md shadow-black transition-all duration-300 ease-in-out ${
                mobileInputVisible ? 'opacity-100 bg-custom-red text-white' : 'opacity-0 pointer-events-none'
              }`}
              style={{ width: '100%', transition: 'opacity 0.3s ease-in-out' }}
            >
              <DockIcon sx={{ fontSize: 20 }} className="mr-2" />
              <input 
                type="text" 
                placeholder="Enter Mobile Number" 
                className="w-full px-2 py-1 ml-2 bg-white text-black border-none focus:outline-none rounded-full"
              />
            </div>
            {mobileInputVisible && (
              <button className="ml-4 px-4 py-2 w-56 shadow-black shadow-sm bg-white text-black rounded-full hover:bg-custom-red hover:text-white transition duration-300">
                Send OTP
              </button>
            )}
          </div>

          {/* Email */}
          <div className="relative w-full flex items-center">
            <button 
              onClick={handleEmailClick} 
              className={`flex items-center justify-center w-full px-4 py-2 text-lg rounded-full shadow-md shadow-black transition duration-300 ease-in-out ${
                emailInputVisible ? 'opacity-0 pointer-events-none' : 'bg-gray-100 text-black hover:bg-white hover:text-custom-red'
              }`}
              style={{ transition: 'opacity 0.3s ease-in-out' }}
            >
              <MailOutlineIcon sx={{ fontSize: 20 }} className="mr-2" />
              Email
            </button>
            <div className={`absolute inset-0 flex items-center px-4 py-2 text-lg rounded-full shadow-md shadow-black transition-all duration-300 ease-in-out ${
                emailInputVisible ? 'opacity-100 bg-custom-red text-white' : 'opacity-0 pointer-events-none'
              }`}
              style={{ width: '100%', transition: 'opacity 0.3s ease-in-out' }}
            >
              <MailOutlineIcon sx={{ fontSize: 20 }} className="mr-2" />
              <input 
                type="text" 
                placeholder="Enter Email" 
                className="w-full px-2 py-1 ml-2 bg-white text-black border-none focus:outline-none rounded-full"
              />
            </div>
            {emailInputVisible && (
              <button className="ml-4 px-4 py-2 w-56 shadow-black shadow-sm bg-white text-black rounded-full hover:bg-custom-red hover:text-white transition duration-300">
                Send OTP
              </button>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default Verification;
