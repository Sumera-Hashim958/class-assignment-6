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
      <div className="grid grid-cols-4 gap-x-6 gap-y-4 mt-20">
      <div className="mb-10">
            <Image src="/james.svg" alt="James" width={254} height={56} />
          </div>
      <div>
      <div className="space-y-2">
      <div className="flex space-x-4">Courses</div>
      <div className="flex space-x-4">Business</div>
      <div className="flex space-x-4">Development</div>
      <div className="flex space-x-4">Technology</div>
      <div className="flex space-x-4">Design</div>
      <div className="flex space-x-4">Programming</div>
      </div>
      </div>
      <div>
      <div className="space-y-2">
      <div className="flex space-x-4">Resources</div>
      <div className="flex space-x-4">Career</div>
      <div className="flex space-x-4">Resume</div>
      <div className="flex space-x-4">Learning</div>
      <div className="flex space-x-4">Interview Preparation</div>
      <div className="flex space-x-4">Jobs</div>
      </div>
      </div>
      <div>
      <div className="space-y-2">
      <div className="flex space-x-4">About Us</div>
      <div className="flex space-x-4">Contact</div>
      <div className="flex space-x-4">Help/Support</div>
      <div className="flex space-x-4">FAQ</div>
      <div className="flex space-x-4">Terms and Conditions</div>
      <div className="flex space-x-4">Partners</div>
      </div>
      </div>
        </div>
        </div>
        <div className="box flex justify-between items-center border-t-2 border-dotted border-sblack mt-16 py-4">
  {/* Footer Content on the Left */}
  <div className="flex gap-8 text-center">
    <p>2023 ddsgnr All rights Reserved.</p>
    <p className="underline">Privacy Policy</p>
    <p className="underline">Terms of Services</p>
    <p className="underline">Cookies Setting</p>
  </div>

  {/* Social Icons on the Right */}
  <div className="flex items-center ">
    <Image src="/Social Icons.svg" alt="Social Icons" width={132} height={24} />
  </div>
</div>

    </div>
    
  )
}

export default contact
