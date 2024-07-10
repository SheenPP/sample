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
  const [verificationSent, setVerificationSent] = useState<boolean>(false);
  const [otpInput, setOtpInput] = useState<string>(''); // State for OTP input
  const router = useRouter();

  const handleMobileClick = () => {
    setMobileInputVisible(true);
    setEmailInputVisible(false);
    setVerificationSent(false); // Reset verificationSent state
  };

  const handleEmailClick = () => {
    setMobileInputVisible(false);
    setEmailInputVisible(true);
    setVerificationSent(false); // Reset verificationSent state
  };

  const handleSendOtp = (method: string) => {
    if (method === 'email') {
      // Simulate sending verification email
      // Replace this with actual email sending logic
      setTimeout(() => {
        setVerificationSent(true);
        setVerificationMethod(method);
      }, 1000); // Simulating delay for sending email
    } else {
      // Simulate sending SMS OTP
      // Replace this with actual SMS sending logic
      setTimeout(() => {
        setOtpVisible(true);
        setVerificationSent(true);
        setVerificationMethod(method);
      }, 1000); // Simulating delay for sending SMS
    }
  };

  const handleVerify = () => {
    // Add logic to verify OTP here
    console.log('Verifying OTP:', otpInput);
    // Reset OTP input after verification
    setOtpInput('');
    // Navigate to /Signup after verification
    router.push('/Signup');
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      {!verificationSent ? (
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
                  Send
                </button>
              )}
            </div>
          </div>
        </>
      ) : (
        <div className="w-96">
          <div className="flex justify-center mb-6">
            <div className="text-custom-red p-6">
              {verificationMethod === 'mobile' ? (
                <FiSmartphone className="w-32 h-32" />
              ) : (
                <FiMail className="w-32 h-32" />
              )}
            </div>
          </div>
          <h2 className="text-6xl font-bold font-cursive text-center mb-4">
            {verificationMethod === 'mobile' ? 'Verification' : 'Check your email'}
          </h2>
          {verificationMethod === 'mobile' ? (
            <>
              <p className="text-center font-mono text-black mb-6">
                You will get OTP via SMS
              </p>
              <div className="flex justify-center mb-4">
                <input
                  type="text"
                  className="border border-gray-300 rounded-lg px-4 py-2 w-full text-center"
                  value={otpInput}
                  onChange={(e) => setOtpInput(e.target.value)}
                  maxLength={4}
                  placeholder="• • • •"
                />
              </div>
              <button
                onClick={handleVerify}
                className="w-full bg-custom-red text-white py-2 rounded-lg hover:bg-pink-600 transition duration-300"
              >
                Verify
              </button>
            </>
          ) : (
            <><p className="text-center font-mono text-black mb-6">
                  A verification has been sent to your email<br />
                  youremail@gmail.com
                </p>
              <p className="text-center text-sm font-mono text-black">(You may now close this page)</p>
              </>
          )}
          
        </div>
      )}
    </div>
  );
};

export default Verification;
