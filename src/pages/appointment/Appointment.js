import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import chair from "../../assets/images/chair.png";
import 'react-day-picker/dist/style.css';
import SelectAppointment from "./SelectAppointment";

const Appointment = () => {
    const [selected,setSelected] = useState(new Date())
  return (
    <div className="max-w-7xl mx-auto lg:mt-20">
        <div className="hero">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <img src={chair} className="rounded-l lg:w-1/2" alt="" />
        <div className="lg:w-1/2">
          <DayPicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
          />
        </div>
      </div>
    </div>
      <SelectAppointment selected={selected}></SelectAppointment>
    </div>
  );
};

export default Appointment;
