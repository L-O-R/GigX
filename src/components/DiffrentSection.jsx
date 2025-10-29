import catchUsOutside from "../assets/images/catchUsOutside.png";
import MaskingTape from "../assets/images/MaskingTape.png";

const DifferentSection = () => {
  return (
    <section className="bg-[#F7F8FA]">
      <div className=" px-4 py-16 md:py-24 lg:px-30">
        <div className="flex gap-10 justify-center items-center ">
          {/* Left: tilted photo with tape */}
          <div className="w-[50%] relative aspect-square -rotate-6 ">
            <img
              src={catchUsOutside}
              loading="lazy"
              width={400}
              height={400}
              alt="Street activation with mascots and cart"
              className="block h-auto w-[90%] rounded-6 object-cover rounded-[10px] bg-white p-3"
            />
            <div className="absolute -top-24 left-40">
              <img
                src={MaskingTape}
                alt="tape"
                loading="lazy"
                width={100}
                height={100}
                className="w-full h-auto object-contain"
              />
            </div>
          </div>

          {/* Right: Heading + copy */}
          <div className="w-[70%]">
            <h2 className="font-primary text-[#18113C] leading-30 tracking-[-0.02em] text-8xl ">
              What Makes Us
              <br />
              Different
            </h2>

            <div className="mt-10 space-y-1 text-[#18113C] text-2xl font-text font-medium leading-tight">
              <p className="">
                We think beyond digital we build human
                connections.
              </p>
              <p className="">
                We activate spaces where your audience
                actually hangs out.
              </p>
              <p className=" ">
                We blend content, culture, and community in
                every campaign.
              </p>
              <p className="">
                Real stories, real reactions, real ROI.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentSection;
