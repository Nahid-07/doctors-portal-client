import React from "react";
import { format } from "date-fns";
import { useContext } from "react";
import { authProvider } from "../../Context/FirebaseContext";
import { json } from "react-router-dom";
import { toast } from "react-hot-toast";

const BookingModal = ({ treatment, selected, setTreatment }) => {
  const { name, slots } = treatment;
  const { user, updateProfilerName } = useContext(authProvider);
  console.log(user);
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const customerName = form.name.value;
    const phone = form.phone.value;
    const email = form.email.value;
    const slot = form.slot.value;
    const date = form.date.value;
    const bookingDetails = {
      customerName,
      phone,
      email,
      name,
      slot,
      date,
    };
    updateProfilerName(name).then(() => {});

    fetch("http://localhost:8000/bookings", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(bookingDetails),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.acknowledged) {
          setTreatment("");
          toast.success("Your appointment booked");
        }
      });
  };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle bg-[#293462] absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold mb-[10px]">{name}</h3>
          <form onSubmit={handleSubmit} className="grid gap-5">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
              value={format(selected, "PP")}
              name="date"
              disabled
            />
            <select className="select select-bordered w-full" name="slot">
              {slots.map((slot, index) => (
                <option key={index} value={slot}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              type="text"
              placeholder="Full name"
              className="input input-bordered w-full"
              name="name"
              defaultValue={user?.displayName}
              required
            />
            <input
              type="text"
              placeholder="Phone number"
              className="input input-bordered w-full"
              name="phone"
              required
            />
            <input
              type="text"
              placeholder="Email"
              className="input input-bordered w-full"
              name="email"
              defaultValue={user?.email}
              readOnly
              required
            />
            <p></p>
            <button type="submit" className="btn bg-[#293462] w-full">
              BOOK APPOINTMENT
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
