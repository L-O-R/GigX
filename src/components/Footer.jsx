import React from "react";

const Footer = () => {
  return (
    <footer>
      <section className="max-w-[90%] mx-auto bg-[#0D1CC3] text-white flex flex-col md:flex-row justify-between items-start gap-10 py-24 pr-24 pl-10 ">
        <header>
          <h2 className="text-7xl font-primary text-[#fffaf5]">
            Let’s Take It Outside
          </h2>
        </header>
        <div className="flex flex-col gap-4 items-start text-left">
          <p className="text-base md:text-2xl leading-normal font-text font-normal max-w-xl">
            Ready to bring your brand to life? Let's build
            your next street story
          </p>
          <button className="px-4 py-3 bg-[#C0DD2B] rounded-4xl flex items-center justify-center text-lg text-black font-text">
            Activate Now!
          </button>
        </div>
      </section>
      <section className="bg-black"></section>
    </footer>
  );
};

export default Footer;
