import React from 'react';

const Achievements = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center space-y-6">
      {/* Heading */}
      <h5 className="font-bold text-[48px] leading-[57.6px] text-center">
        Our Achievements
      </h5>

      {/* Paragraph Box */}
      <div className="w-[80%] max-w-[1152px] p-4">
        <p className="font-normal text-[18px] leading-[27px] text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime
          suscipit veniam magni error quas, itaque distinctio sunt. Nulla
          facilis magnam adipisci, officia eaque pariatur sunt repudiandae
          ullam. Totam, quod et.
        </p>
      </div>

      {/* Rating Boxes */}
      <div className="flex justify-center items-center space-x-6 w-full">
        {/* Box 1 */}
        <div className="flex flex-col w-[296px] h-24 p-4">
          <h3 className="font-bold text-[40px] leading-[27px] text-center">+200</h3>
          <p className="font-normal text-[18px] leading-[48px] text-center">Courses</p>
        </div>
        {/* Box 2 */}
        <div className="flex flex-col w-[296px] h-24 p-4">
          <h3 className="font-bold text-[40px] leading-[27px] text-center">50K</h3>
          <p className="font-normal text-[18px] leading-[48px] text-center">Members</p>
        </div>
        {/* Box 3 */}
        <div className="flex flex-col w-[296px] h-24 p-4">
          <h3 className="font-bold text-[40px] leading-[27px] text-center">370K</h3>
          <p className="font-normal text-[18px] leading-[48px] text-center">Students</p>
        </div>
        {/* Box 4 */}
        <div className="flex flex-col w-[296px] h-24 p-4">
          <h3 className="font-bold text-[40px] leading-[27px] text-center">+100</h3>
          <p className="font-normal text-[18px] leading-[48px] text-center">Recognition</p>
        </div>
      </div>
    </div>
  );
};

export default Achievements;
