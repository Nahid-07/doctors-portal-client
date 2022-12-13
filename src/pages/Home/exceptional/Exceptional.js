import React from "react";
import treatment from "../../../assets/images/treatment.png";

const Exceptional = () => {
  return (
    <div className="hero mt-20">
      <div className="hero-content flex-col lg:flex-row">
        <div className="lg:W-1/2 flex justify-center">
        <img
          src={treatment}
          className=" rounded-lg lg:w-3/4"
          alt=""
        />
        </div>
        <div className="lg:w-1/2">
          <h1 className="text-5xl font-bold text-[#293462]">
            Exceptional Dental <br /> Care, on Your Terms
          </h1>
          <p className="py-6">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsumis that it has a more-or-less normal
            distribution of letters,as opposed to using 'Content here, content
            here', making it look like readable English. Many desktop publishing
            packages and web page
          </p>
          <button className="btn bg-[#293462]">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Exceptional;
