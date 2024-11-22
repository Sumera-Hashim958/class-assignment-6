import React from 'react';
import Image from 'next/image';

const Customer = () => {
  return (
    <div className="h-[830.89px] bg-white">
      {/* Section Title */}
      <div className="p-20">
        <Image src="/Section Title-2.svg" alt="Section Title" width={560} height={190} />
      </div>

      {/* Testimonial Boxes in a Single Row */}
      <div className="flex justify-center gap-8 px-16">
        {/* Testimonial 1 */}
        <div className="h-[321.89px] w-[362.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>

        {/* Testimonial 2 */}
        <div className="h-[321.89px] w-[362.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>

        {/* Testimonial 3 */}
        <div className="h-[321.89px] w-[362.67px] border-[1px] border-black flex flex-col justify-between p-4">
          <div>
            <Image src="/Stars.svg" alt="Stars" width={116} height={18.89} />
          </div>
          <p className="text-sm text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio, placeat! Recusandae inventore ducimus ullam, provident dolorum, corporis dolorem tempore nesciunt nemo distinctio eligendi vel dicta placeat modi architecto voluptate voluptatum.
          </p>
          <div className="flex justify-center">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Customer;
