import React, { useState } from "react";
import MainPage from "./MainPage";

function Modal({ onClose }) {
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-black bg-opacity-50">
      <div className="bg-white rounded-lg p-4 w-full max-w-2xl mx-3 md:max-w-3xl lg:max-w-4xl overflow-auto">
        <MainPage onClose={onClose} />
      </div>
    </div>
  );
}
function Header() {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <div>
      <div className="flex items-center justify-between p-5 shadow-sm">
        <img
          src="/logo.svg"
          width={50}
          height={50}
          alt="Logo"
          className="w-[50px] md:w-[50px]"
        />

        <ul className="hidden md:flex gap-14 font-medium text-lg">
          <li>Product</li>
          <li>Pricing</li>
          <li>Contact Us</li>
          <li>About Us</li>
        </ul>
        <div className="flex gap-5">
          <button>Log in</button>
          <button
            onClick={toggleModal}
            className="border border-black bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-black hover:text-white"
          >
            Get demo
          </button>
          <button className="bg-gray-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
            Sign in
          </button>
        </div>
      </div>
      {showModal && (
        <Modal
          className="grid grid-cols-1 md:grid-cols-3"
          onClose={toggleModal}
        />
      )}
    </div>
  );
}

export default Header;
