import React from "react";
import banner from "../../assets/images/chair.png";
import bg from "../../assets/images/bg.png";

const Banner = () => {
  return (
    <div
      className="hero md:py-10  max-w-7xl mx-auto"
      style={{
        background: `url(${bg})`,
        backgroundPosition: "center",
      }}
    >
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="lg:w-1/2 flex justify-center">
          <img src={banner} className="rounded-lg w-full" alt="" />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold">Your New Smile Starts Here</h1>
          <p className="py-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the
          </p>
          <button className="btn bg-[#293462]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
