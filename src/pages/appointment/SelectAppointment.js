import React, { useState } from "react";
import { format } from "date-fns";
import AppointmentCArd from "./AppointmentCArd";
import BookingModal from "./BookingModal";
import { useQuery } from "@tanstack/react-query";

const SelectAppointment = ({ selected }) => {
  // const [appointments, setAppointments] = useState([]);
  const [treatment, setTreatment] = useState(null);

  const {data: appointments=[]} = useQuery({
    queryKey: ['appointments'],
    queryFn: async()=>{
      const res = await fetch("http://localhost:8000/appointment")
      const data = await res.json()
      return data;
    }
  })
  // useEffect(() => {
  //   fetch("http://localhost:8000/appointment")
  //     .then((res) => res.json())
  //     .then((data) => setAppointments(data));
  // }, []);
  return (
    <div className="my-20">
      <p className="text-lg font-bold mb-8 text-[#293462] text-center">
        Available Appointments on {format(selected, "PP")}
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-3">
        {appointments.map((appointment) => (
          <AppointmentCArd
            key={appointment._id}
            appointment={appointment}
            setTreatment={setTreatment}
          ></AppointmentCArd>
        ))}
      </div>
      {treatment && (
        <BookingModal
          treatment={treatment}
          setTreatment={setTreatment}
          selected={selected}
        ></BookingModal>
      )}
    </div>
  );
};

export default SelectAppointment;
