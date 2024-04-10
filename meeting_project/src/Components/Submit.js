import React from "react";

const Submit = ({ selectedDate, selectedTime, endTime, onClose }) => {
  return (
    <div className="text-center relative">
      <button
        onClick={onClose}
        className="absolute top-0 right-0 mt-2 mr-2 focus:outline-none"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-500 hover:text-gray-600 cursor-pointer"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
      <h1 className="font-bold text-xl mb-4">✅You are Scheduled</h1>
      <h4>A calendar invitation has been sent to your email address.</h4>
      <div className="border border-gray-200 p-4 mt-4">
        <h2 className="font-bold mb-2 text-left">Fibery Demo</h2>
      

        <p className="text-gray-600 mb-2 text-left">
          📅 {selectedTime ? selectedTime + " - " + endTime : "Select a time"},{" "}
          {selectedDate
            ? selectedDate.toLocaleDateString("en-US", {
                weekday: "long",
                month: "long",
                day: "numeric",
                year: "numeric",
              })
            : "Select a date"}
        </p>

        <p className="text-gray-600 mb-2 text-left">
          {" "}
          🌍UK, Ireland, Lisbon Time (16:54)
        </p>
        <h3 className="text-gray-600 mb-2 text-left">
          💻Web conferencing details to follow.
        </h3>
      </div>
      <br />

      <div className="text-center max-w-3xl">
        <h4 className="font-bold text-center">
          Schedule your own meetings with Fibery for free{" "}
        </h4>

        <h5 className="text-gray-600  text-center">
          Eliminate the back-and-forth emails for finding time.
        </h5>

        <div className="flex justify-center gap-5 mt-5">
          <button className="flex items-center gap-2 border border-black bg-white text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-200">
            <img src="/search.png" alt="google" width={20} height={20} />
            Sign up with Google
          </button>
          <button className="flex items-center gap-2 border border-black bg-white text-gray-600 font-bold py-1 px-3 rounded-full focus:outline-none focus:shadow-outline hover:bg-gray-200">
            <img src="/microsoft.png" alt="google" width={20} height={20} />
            Sign up with Microsoft
          </button>
        </div>
        <hr></hr>
        <h2 className="flex justify-center gap-8 mt-9 text-teal-500 hover:text-teal-600 cursor-pointer">
          Sign up Free with Email
        </h2>
      </div>
    </div>
  );
};

export default Submit;
