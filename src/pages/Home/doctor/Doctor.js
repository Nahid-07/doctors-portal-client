import React from "react";
import doctor from '../../../assets/images/doctor.png'
import docBG from '../../../assets/images/appointment.png'

const Doctor = () => {
  return (
    <div style={{background: `url(${docBG})`, height: '500px'}} className="relative mt-14 flex justify-evenly">
      <div className="absolute -top-[130px]">
        <img src={doctor} alt="" className="h-[630px]"/>
      </div>
      <div className="text-white">
        <h1>
        Appointment
        </h1>
        <h2>Make an appointment Today</h2>
        <p>It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
      </div>
    </div>
  );
};

export default Doctor;
