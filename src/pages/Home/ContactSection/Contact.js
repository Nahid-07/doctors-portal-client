import React from "react";
import appointment from "../../../assets/images/appointment.png";

const Contact = () => {
  return (
    <div style={{ background: `url(${appointment})` }} className="my-20 rounded p-10">
      <div className="flex flex-col lg:w-1/4 mx-auto" >
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full"
        />
        <input
          type="text"
          placeholder="Type here"
          className="input input-bordered w-full my-4"
        />
        <textarea
          className="textarea textarea-bordered h-40"
          placeholder="Message"
        ></textarea>
        <button className="btn bg-[#293462] mt-4">Submit</button>
      </div>
    </div>
  );
};

export default Contact;
