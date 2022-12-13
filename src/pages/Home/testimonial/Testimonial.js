import React from "react";
import quote from "../../../assets/icons/quote.svg";
import people1 from '../../../assets/images/people1.png'
import people2 from '../../../assets/images/people2.png'
import people3 from '../../../assets/images/people3.png'
import Review from "./Review";

const Testimonial = () => {
    const reviews = [
        {
            _id: 1, 
            name: 'Winson Herry',
            img: people1,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 2, 
            name: 'Winson Herry',
            img: people2,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
        {
            _id: 3, 
            name: 'Winson Herry',
            img: people3,
            review: 'It is a long established fact that by the readable content of a lot layout. The point of using Lorem a more-or-less normal distribu to using Content here, content',
            location: 'California'
        },
    ]
  return (
    <div className="px-3 mt-20">
      <div className="flex justify-between items-center">
        <div>
          <h4 className="text-[#293462] text-lg font-bold">Testimonial</h4>
          <h2 className="text-4xl font-semibold">What Our Patients Says</h2>
        </div>
        <div>
          <img src={quote} alt="" className="lg:w-full text-[#293462]"/>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
        
        {
            reviews.map( review => <Review key={review._id} review={review}></Review>)
        }
      </div>
    </div>
  );
};

export default Testimonial;
