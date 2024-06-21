import React from 'react';
import { FaFacebook, FaGoogle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

interface LogInModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LogInModal: React.FC<LogInModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-sans">
      <div className="absolute inset-0 bg-black opacity-50" onClick={onClose}></div>
      <div className="relative z-10 w-full max-w-sm bg-white rounded-lg shadow-lg">
        <div className="h-4 bg-red-600 rounded-t-lg"></div>
        <div className="p-4 md:p-6"> 
          <h2 className="mb-4 text-2xl font-bold text-black text-center">Log In</h2>
          <p className="mb-4 text-sm text-black text-center">
            By logging in, you agree to our <a href="#" className="text-blue-600">Privacy Policy</a> and <a href="#" className="text-blue-600">Terms of Service</a>. Your commitment ensures a safe and enriching experience for all users.
          </p>
          <div className="flex flex-col space-y-4">
            <button className="flex items-center justify-center px-4 py-2 font-bold text-black bg-white border-2 border-gray-200 rounded-lg">
              <FaGoogle className="mr-2 text-red-600" /> LOGIN WITH GOOGLE
            </button>
            <button className="flex items-center justify-center px-4 py-2 font-bold text-black bg-white border-2 border-gray-200 rounded-lg">
              <FaFacebook className="mr-2 text-blue-600" /> LOGIN WITH FACEBOOK
            </button>
            <button className="flex items-center justify-center px-4 py-2 font-bold text-black bg-white border-2 border-gray-200 rounded-lg">
              <MdEmail className="mr-2 text-red-600" /> LOGIN WITH EMAIL
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogInModal;
