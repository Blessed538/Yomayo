import React from 'react'
import Image from 'next/image'
import architecture from '../../images/architecture.svg'


const About = () => {
  return (
    <div className='container mx-auto p-6 bg-bg-about'>
        <div className='flex items-center justify-between'>
           <div >
            <Image src={architecture} width={100} height={100}/>
           </div>
           <div></div>
        </div>
    </div>
  )
}

export default About