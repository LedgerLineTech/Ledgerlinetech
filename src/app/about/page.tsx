import AboutLedgerline from "@/components/About/Aboutledger";
import Cpm from "@/components/About/Cpm";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import React from "react";

import { Metadata } from 'next';
export const metadata: Metadata = {
  title: "About"
}


const Banner: React.FC = () => {
  return (
    <>
      <Navbar />
  
      <div className="relative w-full md:h-[70vh] h-[45vh] bg-black text-white overflow-hidden">
        
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: "url('/about.png')",
          }}
        ></div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-start justify-start  px-6 md:pt-12 pt-4 md:ml-20 ">
          <h1 className="text-2xl md:text-3xl w-full font-bold">
            Fostering Business{" "}
            <span className="text-blue-400  md:text-4xl text-3xl"><br/> Growth</span> with <br/> <span className="md:block md:text-3xl font-bold text-xl" >
            LEDGER LINE TECHNOLOGIES </span>
          </h1>
          <p className="mt-1 text-xs md:text-lg text-gray-300 w-full">
          Ledgerline Technologies is a premier IT solutions provider based in Vadodara, 
          Gujarat. With expertise in blockchain technology and IT services, 
          we specialize in delivering innovative, secure, and scalable solutions.Our services empower businesses to leverage advanced technologies for sustainable growth and 
          competitive advantage.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className="relative flex justify-center w-full px-2 md:-mt-16 -mt-16">
        {/* Combined Box */}
        <div className="bg-white text-black text-center px-4 py-4 shadow-md w-full max-w-4xl flex flex-row md:flex-row justify-around border-4 border-gray-500">
          {/* Stat 1 */}
          <div className="flex flex-col items-center w-full md:w-1/3 mb-0 md:mb-0">
            <div className="flex items-center space-x-0 md:space-x-8">
          
              <img src="/plp.png" alt="Client Retention" className="w-8 h-8 md:w-10 md:h-10 hidden md:block" />
              <p className="text-2xl md:text-5xl font-bold">30+</p>
            </div>
            <p className="mt-1 text-sm md:text-base">PROJECTS COMPLETED</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-1 h-18 bg-slate-400 rounded"></div>

          {/* Stat 2 */}
          <div className="flex flex-col items-center w-full md:w-1/3 mb-4 md:mb-0">
            <div className="flex items-center space-x-4 md:space-x-10">
              {/* Hide image on mobile (default) and show on medium screens and above (md:block) */}
              <img src="/exp.png" alt="Years of Experience" className="w-8 h-8 md:w-10 md:h-10 hidden md:block" />
              <p className="text-2xl md:text-5xl font-bold">2+</p>
            </div>
            <p className="mt-1 text-sm md:text-base">YEAR OF EXPERIENCE</p>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-1 h-18 bg-slate-400 rounded"></div>

          {/* Stat 3 */}
          <div className="flex flex-col items-center w-full md:w-1/3">
            <div className="flex items-center space-x-2 md:space-x-8">
              {/* Hide image on mobile (default) and show on medium screens and above (md:block) */}
              <img src="/cp.png" alt="Client Retention" className="w-8 h-8 md:w-10 md:h-10 hidden md:block" />
              <p className="text-2xl md:text-5xl font-extrabold md:font-bold">90%</p>
            </div>
            <p className="mt-1 text-sm md:text-base">CLIENT RETENTAION</p>
          </div>
        </div>
      </div>
      
      
      <AboutLedgerline />
      
      <Cpm />
      
  
      <Footer />
    </>
  );
};

export default Banner;
