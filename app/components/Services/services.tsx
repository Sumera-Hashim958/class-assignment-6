import React from "react";
import Image from "next/image";

const services = () => {
  return (
    <div className="h-auto">
      {/* Header */}
      <div className="px-16 py-16">
        <Image src={"/Content.svg"} alt="next-image" width={768} height={109} />
      </div>

      {/* Services Section */}
      <div className="h-auto px-6 py-6 space-y-6">
        {/* Row 1 */}
        <div className="flex justify-between">
          {/* Box 1 */}
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Design & Development</p>
              <p className="font-normal text-[18px] leading-[27px]">50+ Courses Available</p>
            </div>
          </div>

          {/* Box 2 */}
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Marketing</p>
              <p className="font-normal text-[18px] leading-[27px]">40+ Courses Available</p>
            </div>
          </div>

          {/* Box 3 */}
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Development</p>
              <p className="font-normal text-[18px] leading-[27px]">30+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Row 2 (Copied) */}
        <div className="flex justify-between">
          {/* Repeat Boxes */}
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Communication</p>
              <p className="font-normal text-[18px] leading-[27px]">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Digital Marketing</p>
              <p className="font-normal text-[18px] leading-[27px]">40+ Courses Available</p>
            </div>
          </div>
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Self Development</p>
              <p className="font-normal text-[18px] leading-[27px]">30+ Courses Available</p>
            </div>
          </div>
        </div>

        {/* Row 3 (Copied) */}
        <div className="flex justify-between">
          {/* Repeat Boxes */}
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Business</p>
              <p className="font-normal text-[18px] leading-[27px]">50+ Courses Available</p>
            </div>
          </div>
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Finance</p>
              <p className="font-normal text-[18px] leading-[27px]">40+ Courses Available</p>
            </div>
          </div>
          <div className="flex w-[410.67px] h-[132px] bg-smokey rounded-md">
            <div className="p-4">
              <Image src={"/Frame 292.svg"} alt="next-image" width={100} height={100} />
            </div>
            <div className="flex flex-col ml-2">
              <p className="font-semibold text-[20px] leading-[30px] mt-4">Consulting</p>
              <p className="font-normal text-[18px] leading-[27px]">30+ Courses Available</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center ">
      <button className="text-sblack py-1 px-2 font-normal text-[16px] w-[155px] h-[48px] rounded-md border-[1px] border-black p-4">View All Courses</button>
      </div>
    </div>
  );
};

export default services;
