import React from 'react';
import image from './../assets/image-qr-code.png';

const Card = () => {
  return (
    <div className="bg-white p-5 rounded-2xl w-80">
      <img src={image} className="rounded-xl" />
      <div className="text-center pt-6 space-y-3">
        <p className="font-bold text-2xl text-[#1f3251]">
          Improve your front-end skills by building projects
        </p>
        <p className="text-[#7b879d] text-base px-1">
          Scan the Qr code to visit Frontend Mentor and take your coding skills
          to the next level
        </p>
      </div>
    </div>
  );
};

export default Card;
