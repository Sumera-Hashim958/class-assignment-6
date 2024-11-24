import React from 'react';
import Image from 'next/image';

const courses = () => {
  return (
    <div className="h-auto">
      <h1 className="text-center mb-4 font-bold text-[56px] leading-[67.2px]">Courses</h1>
      <p className="font-normal text-[18px] leading-[27px] text-center py-4">
        Your Ultimate Guide to learning
      </p>
      <div className="flex justify-center">
        <div className="w-[336px] h-[40px] flex justify-center items-center gap-8 py-2">
          <p className="underline">Popular</p>
          <p>Recommended</p>
          <p>Best Price</p>
        </div>
      </div>

      {/* First Row */}
      <div className="flex justify-center gap-4 mt-8">
        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/laptop.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Designing</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">UI/UX Design 201</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse Varius enim in eros.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$400</p>
            </div>
          </div>
        </div>

        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/code-course.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Programming</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">Introduction to Python</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse Varius enim in eros.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$300</p>
            </div>
          </div>
        </div>

        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/Image3-c.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Business</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">Data Analysis for Business</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse Varius enim in eros.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$500</p>
            </div>
          </div>
        </div>
      </div>

      {/* Second Row */}
      <div className="flex justify-center gap-4 mt-8">
        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/Image4-c.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Art</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">Art Specialization</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Suspendisse Varius enim in eros.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$450</p>
            </div>
          </div>
        </div>

        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/Image5-c.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Law</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">Rule of Law</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
              Learn how to build interactive web apps using React.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$350</p>
            </div>
          </div>
        </div>

        <div className="w-[416px] h-[534px] bg-smokey">
          <Image src="/Image6-c.svg" alt="course-image" width={416} height={300} />
          <div className="flex justify-between mt-4 px-4 font-semibold text-[14px] leading-[21px]">
            <p>Tech</p>
            <Image src="/Star.svg" alt="rating" width={48} height={24} />
          </div>
          <div className="px-4">
            <h5 className="font-bold text-[24px] leading-[33.6px] mt-2">Data Science Essentials</h5>
            <p className="font-normal text-[16px] leading-[24px] mt-2">
              Master the fundamentals of data analysis and visualization.
            </p>
            <div className="flex gap-8 items-center mt-6">
              <button className="text-sblack font-normal text-[16px] w-[117px] h-[40px] rounded-md border-[1px] border-black">
                Enroll Now
              </button>
              <p className="font-medium text-[16px] leading-[24px]">$500</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default courses;
