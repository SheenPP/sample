import { FaFacebook, FaGoogle } from "react-icons/fa";

const SignUpModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 font-sans overflow-hidden">
      <div className="bg-black opacity-50 absolute inset-0" onClick={onClose}></div>
      <div className="bg-white rounded-lg shadow-lg relative z-10 max-w-md w-full overflow-hidden object-scale-down">
        <div className="bg-red-600 h-4 rounded-t-lg"></div>
        <div className="p-6">
          <div className="flex justify-center space-x-4 mb-4 mt-5">
            <button className="bg-white text-black border-2 font-bold border-gray-200 rounded-lg px-4 py-2 flex items-center">
              <FaFacebook className="mr-2 text-blue-600" /> Sign Up
            </button>
            <button className="bg-white text-black border-2 font-bold border-gray-200 rounded-lg px-4 py-2 flex items-center">
              <FaGoogle className="mr-2 text-red-600" /> Sign Up
            </button>
          </div>
          <hr className="my-4 border-gray-300" />
          <form className="overflow-hidden">
            <div className="text-center mb-2 text-black font-semibold">I’m a</div>
            <div className="flex justify-center space-x-4 mb-4">
              <button type="button" className="bg-white border-2 border-gray-300 text-black rounded-lg px-10 py-2">Woman</button>
              <button type="button" className="bg-white border-2 border-gray-300 text-black rounded-lg px-12 py-2">Man</button>
            </div>
            <div className="text-center mb-2 text-black font-semibold">Interested in</div>
            <div className="flex justify-center space-x-4 mb-4">
              <button type="button" className="bg-white border-2 border-gray-300 text-black rounded-lg px-6 py-2">Women</button>
              <button type="button" className="bg-white border-2 border-gray-300 text-black rounded-lg px-6 py-2">Men</button>
              <button type="button" className="bg-white border-2 border-gray-300 text-black rounded-lg px-6 py-2">Both</button>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="birthday">
                Birthday
              </label>
              <input type="text" id="birthday" placeholder="MM/DD/YYYY" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                Email Address
              </label>
              <input type="email" id="email" placeholder="name@gmail.com" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                Password
              </label>
              <input type="password" id="password" placeholder="Password" className="w-full p-2 border border-gray-300 rounded-lg" />
            </div>
            <button type="submit" className="w-full bg-red-600 text-white rounded-lg py-2">Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUpModal;
