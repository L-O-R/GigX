import React from "react";
import banner1 from "../assets/images/banner1.png";
import popup from "../assets/images/PopUps.png";
import OutOfBox from "../assets/images/OutOfBox.png";
import StreetArt from "../assets/images/StreetArt.png";
const WhatWeDo = () => {
  return (
    <section className="min-h-screen bg-[#0D1CC3] text-white px-16 py-16">
      <header className="text-center mb-6">
        <h4 className="bg-black text-4xl text-primary text-[#FDFAF7] w-max mx-auto px-3 py-3">
          What we do
        </h4>
        <h2 className="text-primary text-[5rem] leading-tight pb-4 tracking-[0.1rem]">
          Our Playground
        </h2>
      </header>

      <div className="flex gap-8 justify-evenly max-lg:flex-wrap">
        {/* background: #FCFCFA; /* nnew shadow */}
        {/* box-shadow: 0 */}
        {/* 8px 24px -3px #14263C, 0 8px 24px -3px #14263C; */}
        <div className="bg-[#fcfcfa] box_shadow px-3 py-4 inline-flex flex-col items-start gap-6 max-w-[340px]">
          <div className="w-full aspect-4/5">
            <img
              src={banner1}
              alt="Mascot"
              width={300}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-primary text-[2rem] text-black">
              Mascot installs
            </h3>
            <p className="font-text text-base text-black font-normal tracking-tight">
              Bold concepts that stop people in their
              tracks. Think giant interactive sculptures or
              unexpected mini games.
            </p>
          </div>
        </div>
        <div className="bg-[#fcfcfa] box_shadow px-3 py-4 inline-flex flex-col items-start gap-6 max-w-[340px]">
          <div className="w-full aspect-4/5">
            <img
              src={banner1}
              alt="Mascot"
              width={300}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-primary text-[2rem] text-black">
              Mascot installs
            </h3>
            <p className="font-text text-base text-black font-normal tracking-tight">
              Bold concepts that stop people in their
              tracks. Think giant interactive sculptures or
              unexpected mini games.
            </p>
          </div>
        </div>
        <div className="bg-[#fcfcfa] box_shadow px-3 py-4 inline-flex flex-col items-start gap-6 max-w-[340px]">
          <div className="w-full aspect-4/5">
            <img
              src={banner1}
              alt="Mascot"
              width={300}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-primary text-[2rem] text-black">
              Mascot installs
            </h3>
            <p className="font-text text-base text-black font-normal tracking-tight">
              Bold concepts that stop people in their
              tracks. Think giant interactive sculptures or
              unexpected mini games.
            </p>
          </div>
        </div>
        <div className="bg-[#fcfcfa] box_shadow px-3 py-4 inline-flex flex-col items-start gap-6 max-w-[340px]">
          <div className="w-full aspect-4/5">
            <img
              src={banner1}
              alt="Mascot"
              width={300}
              height={400}
              loading="lazy"
              className="w-full h-full object-cover"
            />
          </div>
          <div>
            <h3 className="text-primary text-[2rem] text-black">
              Mascot installs
            </h3>
            <p className="font-text text-base text-black font-normal tracking-tight">
              Bold concepts that stop people in their
              tracks. Think giant interactive sculptures or
              unexpected mini games.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
