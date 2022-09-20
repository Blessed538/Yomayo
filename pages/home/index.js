import React from 'react'
import home from '../../images/home.svg'
import companyLogo from '../../images/logo.svg'
import Image from 'next/image'

const index = () => {
  return (
    <div>
          <div className='flex flex-row w-full container max-w-full h-3/4'>
        <div className='basis-1/2 bg-background w-full max-w-md  mt-3 my-0 mx-auto space-y-top'>
         <div className='flex justify-between items-center'>
            <div className='text-link font-yomayo text-2xl'>BayomAssociate</div>
            <div className='items-center flex'>
                <div className='text-link font-yomayo mr-3 text-base'>Home</div>
                <div className='text-link font-yomayo text-base'>Works</div>
            </div>
           
         </div>
         <div className='flex flex-col justify-center'>
            <div className='text-7xl text-link font-yomayo'>Architects that design the future</div>
            <p className='text-sub-text text-lg font-light not-italic mt-2 font-yomayo mb-3'> 
               As an award wining architectural firm ,we have designed many beautiful buildings across Africa
            </p>
            <div className='text-center mt-4 max-w-[50%] bg-btn-bg p-4 text-white'>
                Contact Us
                </div>
         </div>
        </div>
        <div className='basis-1/2 bg-fixed h-full w-full bg-repeat-no'>
        <Image src={home} width={100} height={100} layout="responsive" />
        </div>
    </div>
    <div className='w-full flex justify-between bg-gray items-center h-2/5 space-x-6 px-3 mt-1 p-4'>
         <Image  className=' pr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' pr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' pr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' pr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
         <Image  className=' mr-2 h-2/4' src={companyLogo} width={90} height={100} /> 
    </div>
    </div>
  
  )
}

export default index