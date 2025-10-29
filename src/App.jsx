import React from "react";
import top from "./assets/images/top.png";
import bottom from "./assets/images/1.png";
import Banner from "./components/Banner";
import WeHaveBeen from "./components/WeHaveBeen";
import WhatWeDo from "./components/WhatWeDo";
import DifferentSection from "./components/DiffrentSection";
import Footer from "./components/Footer";

import jart from "./assets/images/drJart.png";
import shelglam from "./assets/images/sheglam.png";
import pca from "./assets/images/pca.png";
import pvr from "./assets/images/pvr.png";
import tir from "./assets/images/tir.png";
import tira from "./assets/images/tira.png";
import Header from "./components/Header";
const App = () => {
  return (
    <div className="font-primary">
      <Header />
      <main>
        <Banner />
        <section className="min-h-[140vh] bg-[#141414] text-[#FFFCEC] flex flex-col items-center justify-center gap-12 relative pb-40 px-8 md:px-0">
          <h2 className="text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center leading-12 md:leading-16 lg:leading-24 xl:leading-28 md:max-w-10/12 mx-auto">
            We believe brands shouldn’t have to fight
            algorithms to be seen. So we trade impressions
            for impact real people, real spaces, real
            reactions
          </h2>
          <p className="absolute bottom-100 md:bottom-75 text-lg md:text-2xl lg:text-4xl font-text font-medium max-w-4xl text-center leading-normal px-8 md:px-0">
            Catch Us Outside brings marketing back to the
            messy, memorable offline world.
          </p>
          <div className="absolute top-10 right-0 w-50 lg:w-60">
            <img
              src={top}
              alt="artwork"
              loading="lazy"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-40 left-0 w-50 md:w-60 z-10">
            <img
              src={bottom}
              alt="artwork"
              loading="lazy"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 bg-[#C0DD2B] flex items-center justify-evenly gap-6 md:gap-10 md:py-6 px-8 md:px-14 ">
            <div className="max-md:hidden w-full h-full">
              <img
                src={jart}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
            <div className="w-full h-full">
              <img
                src={shelglam}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
            <div className="w-full h-full">
              <img
                src={tir}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
            <div className="max-md:hidden w-full h-full">
              <img
                src={pca}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
            <div className="w-full h-full">
              <img
                src={tira}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
            <div className="max-md:hidden w-full h-full">
              <img
                src={pvr}
                alt="Dr Jart"
                loading="lazy"
                width={100}
                height={100}
                className="max-w-full w-full h-40 object-contain"
              />
            </div>
          </div>
        </section>
        <WeHaveBeen />

        <WhatWeDo />
        <DifferentSection />
      </main>
      <Footer />
    </div>
  );
};

export default App;
