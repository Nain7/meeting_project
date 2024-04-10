import React from "react";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center my-20">
      <div className="text-center max-w-3xl">
        <h2 className="font-bold text-[60px] text-slate-700">
          # Easy scheduling ahead
        </h2>
        <h2 className="text-xl mt-5 text-slate-500">
          Calendly is your scheduling automation platform for eliminating the
          back-and-forth emails to find the perfect time.{" "}
        </h2>
        <div className="flex gap-4 text-slate-900 flex-col mt-5">
          <h3 className="text-sm">Sign Up free with Google and Microsoft</h3>
        </div>
        <div className="flex justify-center gap-8 mt-5">
          <button className=" p-7  flex gap-4 border border-black bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-black hover:text-white">
            <img src="/search.png" alt="google" width={20} height={20} />
            Sign up with Google
          </button>
          <button className=" p-7 flex gap-4 border border-black bg-white text-black font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline hover:bg-black hover:text-white">
            <img src="/microsoft.png" width={20} height={20} alt="microsoft" />
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
}

export default Hero;
