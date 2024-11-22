import React from 'react'
import Image from 'next/image'

const courses = () => {
  return (
    <div className="h-[1742px]">
         <div className="ml-64">
            <Image src={"/course1.svg"} alt="next-image" width={768} height={118}/>
        </div>
        <div className="ml-[470px] mt-8">
        <Image src={"/Categories.svg"} alt="next-image" width={336} height={40}/>
      </div>
      <div className="mt-8">
        <Image src={"/Row.svg"} alt="next-image" width={1312} height={534}/>
      </div>
      <div className="mt-8">
        <Image src={"/Row -2.svg"} alt="next-image" width={1312} height={534}/>
      </div>
      <button className="text-sblack py-2 px-4 font-normal text-[16px] w-[160px] h-[49px] rounded-md border-[1px] border-sblack p-4 ml-[550px] mt-16">View All Courses</button>
    </div>
  )
}

export default courses
