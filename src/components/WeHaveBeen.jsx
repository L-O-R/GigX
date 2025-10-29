import React from "react";
import sample4 from "../assets/sample-4.mp4";

const WeHaveBeen = () => {
  return (
    <section className="relative bg-[#0D1CC3] text-white min-h-screen py-16 lg:px-16">
      <header className="mb-6 text-center">
        <h2 className="text-4xl md:text-6xl lg:text-[5rem] leading-tight tracking-[0.1rem]">
          WE'VE HAVE BEEN HERE
        </h2>
      </header>
      <div className="w-full overflow-hidden mt-16 lg:mt-0">
        <div className="flex lg:flex-nowrap max-lg:flex-nowrap gap-12 lg:gap-14 lg:justify-evenly max-lg:overflow-x-auto max-lg:scroll-smooth max-lg:snap-x max-lg:snap-mandatory max-lg:scrollbar-hide max-lg:[&::-webkit-scrollbar]:hidden first:pl-10 last:pr-6">
          <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B] max-lg:flex-shrink-0 max-lg:w-[280px] max-lg:snap-center">
            <video
              src={sample4}
              autoPlay
              loop
              muted
              width={150}
              height={300}
              className="w-full aspect-[3/4.8] object-cover border-2 border-black"
            />
            <h4 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              Dr Jart+ walking Models
            </h4>
            <h5 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              38.6 Mn Views
            </h5>
          </div>
          <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B] max-lg:flex-shrink-0 max-lg:w-[280px] max-lg:snap-center">
            <video
              src={sample4}
              autoPlay
              loop
              muted
              width={150}
              height={300}
              className="w-full aspect-[3/4.8] object-cover border-2 border-black"
            />
            <h4 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              Dr Jart+ walking Models
            </h4>
            <h5 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              38.6 Mn Views
            </h5>
          </div>
          <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B] max-lg:flex-shrink-0 max-lg:w-[280px] max-lg:snap-center">
            <video
              src={sample4}
              autoPlay
              loop
              muted
              width={150}
              height={300}
              className="w-full aspect-[3/4.8] object-cover border-2 border-black"
            />
            <h4 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              Dr Jart+ walking Models
            </h4>
            <h5 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              38.6 Mn Views
            </h5>
          </div>
          <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B] max-lg:flex-shrink-0 max-lg:w-[280px] max-lg:snap-center">
            <video
              src={sample4}
              autoPlay
              loop
              muted
              width={150}
              height={300}
              className="w-full aspect-[3/4.8] object-cover border-2 border-black"
            />
            <h4 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              Dr Jart+ walking Models
            </h4>
            <h5 className="text-primary text-xl md:text-2xl xl:text-[2rem]">
              38.6 Mn Views
            </h5>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeHaveBeen;
