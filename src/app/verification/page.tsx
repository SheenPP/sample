"use client";
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { FiMail, FiSmartphone } from 'react-icons/fi';
import DockIcon from '@mui/icons-material/Dock';

const Verification = () => {
  const [mobileInputVisible, setMobileInputVisible] = useState(false);
  const [emailInputVisible, setEmailInputVisible] = useState(false);
  const [otpVisible, setOtpVisible] = useState(false);
  const [verificationMethod, setVerificationMethod] = useState<string>('');
  const router = useRouter();

  const handleMobileClick = () => {
    setMobileInputVisible(true);
    setEmailInputVisible(false);
  };

  const handleEmailClick = () => {
    setMobileInputVisible(false);
    setEmailInputVisible(true);
  };

  const handleSendOtp = (method: string) => {
    setOtpVisible(true);
    setVerificationMethod(method);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!otpVisible ? (
        <>
          <h1 className="text-4xl font-bold font-cursive mb-8">Welcome</h1>
          <p className="mb-4 font-mono">Please choose verification method</p>
          <div className="flex flex-col gap-6">
            
            {/* Mobile Number */}
            <div className="flex flex-row items-center font-mono">
              <div className="relative w-full flex items-center mb-4 transition-all duration-500 ease-in-out">
                {!mobileInputVisible && (
                  <button 
                    onClick={handleMobileClick} 
                    className="flex items-center justify-center w-full px-4 py-2 text-lg rounded-full shadow-md bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out"
                  >
                    <DockIcon className="mr-2" />
                    Mobile Number
                  </button>
                )}
                {mobileInputVisible && (
                  <div className="flex items-center w-full px-4 py-2 text-lg rounded-full shadow-md bg-red-500 text-white transition-all duration-500 ease-in-out">
                    <DockIcon className="mr-2" />
                    <input 
                      type="text" 
                      placeholder="Enter Mobile Number" 
                      className="w-full px-2 py-1 ml-2 bg-white text-black border-none focus:outline-none rounded-full"
                      style={{ transition: 'opacity 0.5s ease-in-out', opacity: mobileInputVisible ? 1 : 0 }}
                    />
                  </div>
                )}
              </div>
              {mobileInputVisible && (
                <button 
                  onClick={() => handleSendOtp('mobile')}
                  className="px-4 py-2 w-32 shadow-sm bg-white text-black rounded-full hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Send OTP
                </button>
              )}
            </div>

            {/* Email */}
            <div className="flex flex-row items-center">
              <div className="relative w-full flex items-center mb-4 transition-all duration-500 ease-in-out">
                {!emailInputVisible && (
                  <button 
                    onClick={handleEmailClick} 
                    className="flex items-center justify-center w-full px-4 py-2 text-lg rounded-full shadow-md bg-white text-black hover:bg-red-500 hover:text-white transition-all duration-500 ease-in-out"
                  >
                    <FiMail className="mr-2" />
                    Email
                  </button>
                )}
                {emailInputVisible && (
                  <div className="flex items-center w-full px-4 py-2 text-lg rounded-full shadow-md bg-red-500 text-white transition-all duration-500 ease-in-out">
                    <FiMail className="mr-2" />
                    <input 
                      type="text" 
                      placeholder="Enter Email" 
                      className="w-full px-2 py-1 ml-2 bg-white text-black border-none focus:outline-none rounded-full"
                      style={{ transition: 'opacity 0.5s ease-in-out', opacity: emailInputVisible ? 1 : 0 }}
                    />
                  </div>
                )}
              </div>
              {emailInputVisible && (
                <button 
                  onClick={() => handleSendOtp('email')}
                  className="px-4 py-2 w-32 shadow-sm bg-white text-black rounded-full hover:bg-red-500 hover:text-white transition duration-300"
                >
                  Send OTP
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="w-80">
          <div className="flex justify-center mb-6">
            <div className="text-custom-red p-6">
              {verificationMethod === 'mobile' ? (
                <FiSmartphone className="w-32 h-32" />
              ) : (
                <FiMail className="w-32 h-32" />
              )}
            </div>
          </div>
          <h2 className="text-2xl font-bold font-cursive text-center mb-4">Verification</h2>
          <p className="text-center font-mono text-black mb-6">
            {verificationMethod === 'mobile' ? 'You will get OTP via SMS' : 'You will get OTP via Email'}
          </p>
          <div className="flex justify-center mb-4">
            <input
              type="text"
              className="border border-gray-300 rounded-lg px-4 py-2 w-full text-center"
              maxLength={4}
              placeholder="• • • •"
            />
          </div>
          <button className="w-full bg-custom-red text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300">
            Verify
          </button>
        </div>
      )}
    </div>
  );
};

export default Verification;
