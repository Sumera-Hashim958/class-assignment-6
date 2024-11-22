import React from 'react'
import Image from 'next/image'

const contact = () => {
  return (
    <div className="h-[684px] p-20" >
      <div className="flex">
        <div className="font-semibold text-sblack text-[16px] leading-[27px]">
        <h5>Subscribe to our newsletter</h5>
        <p className="font-normal text-sblack text-[16px] leading-6">Lorem ipsum dollar sit amet, consectetur adipiscing elit.</p>
        </div>
        <div className="box2 flex gap-5 ml-96">
      <button className="text-dgrey py-1 px-2 font-normal text-[16px] w-[265px] h-[48px] rounded-md border-[1px] border-black">Enter your Email</button>
      <button className="text-sblackfont-normal text-[16px] w-[95px] h-[44px] rounded-md border-[1px] border-black ">Subscribe</button>
      </div>
      </div>
      <div>
      <p className="ml-[757px] font-normal text-[12px] leadding-[18px]">By subscribing you agree to with our <span className="font-normal underline">Privacy Policy</span></p>
      <div className="mt-16">
        <Image src={"/Links1.svg"} alt="next-image" width={1120} height={225}/>
        </div>
        <div className="mt-16">
        <Image src={"/lastline.svg"} alt="next-image" width={1120} height={225}/>
        </div>
        </div>
    </div>
    
  )
}

export default contact
