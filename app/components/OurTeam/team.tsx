import React from 'react';
import Image from 'next/image';

const Team = () => {
  return (
    <div className="h-[895px] bg-smokey">
      {/* Section Title */}
      <div className="flex justify-center p-16">
        <Image src="/Section Title.svg" alt="Section Title" width={768} height={118} />
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-3 gap-8 px-16">
        {/* Team Member 1 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="James Nduku" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">James Nduku</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">Marketing Director</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="Jane Doe" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">Joseph Munyambu</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">Nursing Assistant</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="Alex Smith" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">Joseph Ngumbau</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">Medical Assistant</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>
      </div>
      {/* Team Members */}
      <div className="grid grid-cols-3 gap-8 px-16 mt-28">
        {/* Team Member 1 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="James Nduku" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">Eric Kipkemboi</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">Web Designer</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>

        {/* Team Member 2 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="Jane Doe" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">Stephen Kerubo</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">President of sales</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>

        {/* Team Member 3 */}
        <div className="box w-[394.67px] h-[209px] p-4 flex flex-col items-center justify-between">
          <div className="flex justify-center items-center">
            <Image src="/mkt-dir.svg" alt="Alex Smith" width={80} height={80} />
          </div>
          <p className="font-semibold text-[20px] leading-[30px] text-center">John Leboo</p>
          <p className="font-normal text-[18px] leading-[27px] text-center">Dog Trainer</p>
          <div className="mt-4 flex justify-center">
            <Image src="/Social Icons.svg" alt="Social Icons" width={100} height={24} />
          </div>
        </div>
      </div>

    </div>
  );
};

export default Team;
