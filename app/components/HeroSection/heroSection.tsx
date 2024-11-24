import React from 'react'
import Image from 'next/image'

const heroSection = () => {
  return (
    <div className="flex">
    <div className="w-1/2 pt-56 px-20">
        <Image src={"/Column.svg"} alt="next-image" width={640} height={340}/>
    </div>
    <div className="w-1/2 flex">
    <Image src={"/ddsgnr-girl.svg"} alt="next-image" width={640} height={900}/>
    </div>
    </div>
  )
}

export default heroSection
