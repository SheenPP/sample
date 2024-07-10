import React from 'react';
import { TbUserCheck } from "react-icons/tb";

const Success = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white p-4">
      <h1 className="text-3xl font-cursive font-bold mb-4">Account Registration Successful</h1>
      <div className="flex flex-col items-center text-center">
      <TbUserCheck className="w-36 h-36 text-custom-red mb-4" style={{ strokeWidth: '.5' }} />
        <p className="text-lg font-mono">Your account is pending for approval.</p>
        <p className="text-lg font-mono">You will receive an email upon approval.</p>
        <p className="text-lg font-mono">Thank you!</p>
        <p className="mt-4 font-mono text-xs text-gray-500">(You may now close this page)</p>
      </div>
    </div>
  );
}

export default Success;
