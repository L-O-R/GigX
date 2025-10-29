import React from "react";
import sample4 from "../assets/sample-4.mp4";
const WeHaveBeen = () => {
  return (
    <section className="relative bg-[#0D1CC3] text-white min-h-screen py-16 px-16">
      <header className="mb-6 text-center">
        <h2 className="text-[5rem] leading-tight tracking-[0.1rem]">
          WE'VE HAVE BEEN HERE
        </h2>
      </header>
      <div className="flex  gap-14 justify-evenly">
        <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B]">
          <video
            src={sample4}
            autoPlay
            loop
            muted
            width={150}
            height={300}
            className="w-90 aspect-8/12 object-cover border-2 border-black"></video>
          <h4 className="text-primary text-[2rem] ">
            Dr Jart+ walking Models
          </h4>
          <h5 className="text-primary text-[2rem]">
            38.6 Mn Views
          </h5>
        </div>
        <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B]">
          <video
            src={sample4}
            autoPlay
            loop
            muted
            width={150}
            height={300}
            className="w-90 aspect-8/12 object-cover border-2 border-black"></video>
          <h4 className="text-primary text-[2rem] ">
            Dr Jart+ walking Models
          </h4>
          <h5 className="text-primary text-[2rem]">
            38.6 Mn Views
          </h5>
        </div>
        <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B]">
          <video
            src={sample4}
            autoPlay
            loop
            muted
            width={150}
            height={300}
            className="w-90 aspect-8/12 object-cover border-2 border-black"></video>
          <h4 className="text-primary text-[2rem] ">
            Dr Jart+ walking Models
          </h4>
          <h5 className="text-primary text-[2rem]">
            38.6 Mn Views
          </h5>
        </div>
        <div className="inline-flex flex-col items-start gap-4 px-6 py-4 bg-white text-black shadow-[10px_10px_0px_#C0DD2B]">
          <video
            src={sample4}
            autoPlay
            loop
            muted
            width={150}
            height={300}
            className="w-90 aspect-8/12 object-cover border-2 border-black"></video>
          <h4 className="text-primary text-[2rem] ">
            Dr Jart+ walking Models
          </h4>
          <h5 className="text-primary text-[2rem]">
            38.6 Mn Views
          </h5>
        </div>
      </div>
    </section>
  );
};

export default WeHaveBeen;
