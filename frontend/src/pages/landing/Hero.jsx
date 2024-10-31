import React from "react";
import Footer from "../../components/Footer";

function Hero() {
  return (
    <div className="relative h-screen bg-[url('/images/hero-bg.jpg')] bg-center bg-cover ">
      {/* Apply blur effect */}
      <div class="absolute inset-0 bg-black/50 backdrop-blur-xs"></div>

      <div className="relative z-10 flex flex-col py-40 space-y-5 items-center">
        <h1>
          <span class="text-8xl tracking-wide font-PTSansNarrow font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            Nexify
          </span>
        </h1>

        <div className="text-white text-center text-xl font-light font-Questrial w-3/5">
          Nexify is a community-driven platform designed to empower individuals
          to share their experiences and knowledge in their areas of interest.
          Connect with others through interest-based communities where you can
          seek guidance and support each other's growth.
        </div>

        <div>
          <div className="font-Questrial text-white text-5xl font-bold items-start">
            Join Today.{" "}
          </div>
          <div className="border-2 px-10 py-1 rounded-3xl text-white font-Questrial text-center my-5 backdrop-blur-2xl transition-all hover:scale-105">
            Sign in
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
}

export default Hero;
