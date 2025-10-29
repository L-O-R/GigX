import React from "react";
import banner1 from "../assets/images/banner1.png";
const Banner = () => {
  return (
    <section className="relative min-h-screen bg-[#0D1CC3] text-white flex flex-col items-center justify-center gap-6">
      <div className="mt-[15vh]">
        <h1 className="text-primary text-center text-4xl sm:text-6xl lg:text-[5.5rem] leading-12 sm:leading-tight mb-20 tracking-[0.03rem]">
          Turning everyday spaces <br /> into brand
          experiences
        </h1>
        <div className="hidden lg:flex max-w-[85%] mx-auto mb-8 pointer-none:">
          <div className="group transform -rotate-[8.566deg] translate-y-8 translate-x-16 w-[50%] aspect-[1/1.1] relative transition-all duration-300 ease-linear hover:-translate-y-1">
            <span className="inline-block absolute -top-14 left-2 text-lg font-text font-normal capitalize bg-yellow-200 rounded-xl text-black px-4 py-1 origin-bottom scale-0 group-hover:scale-100 transition-all ease-in duration-300">
              title
            </span>
            <img
              src={banner1}
              alt="tir"
              width={250}
              height={300}
              className="max-w-full w-full h-full rounded-4 border-2 border-yellow-100 rounded-2xl"
            />
          </div>
          <div className=" group transform -rotate-[4.566deg] translate-x-8 w-[50%] aspect-[1/1.1] relative transition-all duration-300 ease-linear hover:-translate-y-8">
            <span className="inline-block absolute -top-14 left-16 text-lg font-text font-normal capitalize bg-yellow-200 rounded-xl text-black px-4 py-1 origin-bottom scale-0 group-hover:scale-100 transition-all ease-in duration-300">
              title
            </span>
            <img
              src={banner1}
              alt="tir"
              width={250}
              height={300}
              className="max-w-full w-full h-full rounded-4 border-2 border-yellow-100 rounded-2xl transform"
            />
          </div>
          <div className=" group transform -rotate-[0.956deg] -translate-y-3 w-[50%] aspect-[1/1.1] relative transition-all duration-300 ease-linear hover:-translate-y-12">
            <span className="inline-block absolute -top-14 left-1/2 -translate-x-1/2 text-lg font-text font-normal capitalize bg-yellow-200 rounded-xl text-black px-4 py-1 origin-bottom scale-0 group-hover:scale-100 transition-all ease-in duration-300">
              title
            </span>
            <img
              src={banner1}
              alt="tir"
              width={250}
              height={300}
              className="max-w-full w-full h-auto rounded-4 border-2 border-yellow-100 rounded-2xl"
            />
          </div>
          <div className="group transform rotate-[4.566deg] -translate-x-8 w-[50%] aspect-[1/1.1] relative transition-all duration-300 ease-linear hover:-translate-y-8">
            <span className="inline-block absolute -top-14 right-20 text-lg font-text font-normal capitalize bg-yellow-200 rounded-xl text-black px-4 py-1 origin-bottom scale-0 group-hover:scale-100 transition-all ease-in duration-300">
              title
            </span>
            <img
              src={banner1}
              alt="tir"
              width={250}
              height={300}
              className="max-w-full w-full h-auto rounded-4 border-2 border-yellow-100 rounded-2xl"
            />
          </div>
          <div className="group transform rotate-[8.566deg] translate-y-8 -translate-x-16 w-[50%] aspect-[1/1.2] relative transition-all duration-300 ease-linear hover:-translate-y-2">
            <span className="inline-block absolute -top-14 right-2 text-lg font-text font-normal capitalize bg-yellow-200 rounded-xl text-black px-4 py-1 origin-bottom scale-0 group-hover:scale-100 transition-all ease-in duration-300">
              Title
            </span>
            <img
              src={banner1}
              alt="tir"
              width={250}
              height={300}
              className="max-w-full w-full h-auto rounded-4 border-2 border-yellow-100 rounded-2xl"
            />
          </div>
        </div>

        <div className="max-w-lg mx-auto text-center my-14 space-y-4 px-8 md:px-0">
          <p className=" text-lg md:text-xl font-text font-normal ">
            Catch Us Outside creates real experiences, not
            just digital impressions
          </p>
          <button className="cursor-pointer text-black rounded-4xl bg-[#C0DD2B] p-3 md:p-4 font-text text-base md:text-xl font-normal leading-[100%] -tracking-[0.025rem]">
            Activate Now!
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
