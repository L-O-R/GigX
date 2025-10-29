import React from "react";
import top from "./assets/images/top.png";
import bottom from "./assets/images/1.png";
import Banner from "./components/Banner";
import WeHaveBeen from "./components/WeHaveBeen";
import WhatWeDo from "./components/WhatWeDo";
import DifferentSection from "./components/DiffrentSection";
import Footer from "./components/Footer";
const App = () => {
  return (
    <div className="font-primary">
      <header></header>
      <main>
        <Banner />
        <section className="min-h-screen bg-[#141414] text-[#FFFCEC] flex flex-col items-center justify-center gap-12 relative ">
          <h2 className="text-8xl text-center leading-28 max-w-10/12 mx-auto">
            We believe brands shouldn’t have to fight
            algorithms to be seen. So we trade impressions
            for impact real people, real spaces, real
            reactions
          </h2>
          <p className="absolute bottom-6  text-4xl font-text font-medium max-w-4xl text-center leading-normal">
            Catch Us Outside brings marketing back to the
            messy, memorable offline world.
          </p>
          <div className="absolute top-0 right-0 w-60">
            <img
              src={top}
              alt="artwork"
              loading="lazy"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute bottom-0 left-0 w-60">
            <img
              src={bottom}
              alt="artwork"
              loading="lazy"
              width={100}
              height={100}
              className="w-full h-full object-cover"
            />
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
