import React from "react";

const AppointmentCArd = ({ appointment ,setTreatment}) => {
  const { name, slots } = appointment;
  return (
    <div className="card border-solid border-2 border-[#293462]">
      <div className="card-body items-center text-center">
        <h2 className="card-title">{name}</h2>
        <p>{slots.length > 0 ? slots[0] : "Try another day"}</p>
        <p>
          {slots.length} {slots.length > 1 ? "spaces" : "space"} available
        </p>
        <div className="card-actions">
          <label onClick={()=>setTreatment(appointment) } htmlFor="my-modal-3" className="btn bg-[#293462]">
            BOOK APPOINTMENT
          </label>
        </div>
      </div>
    </div>
  );
};

export default AppointmentCArd;
