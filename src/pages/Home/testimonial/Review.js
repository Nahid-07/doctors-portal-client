import React from "react";
import '../../Home/providedServices/service.css'

const Review = ({ review }) => {
  const { name, img, review: comment, location } = review;
  return (
    <div className="card box-shadow">
      <div className="card-body">
        <p>{comment}</p>
        <div className="card-actions justify-start items-center mt-4">
          <img
            src={img}
            alt=""
            className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 mr-3"
          />
          <div>
            <h3 className="text-[#293462] font-bold text-lg">{name}</h3>
            <p>{location}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
