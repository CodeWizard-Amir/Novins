import React from "react";
import CountUp from "react-countup";

const TheExperiences = () => {
  return (
    <div className='w-full flex flex-col justify-center my-10 items-center'>
      <h2 className='text-xl 2xl:my-8 font-bold'>تجربیات ما</h2>
      <div className='flex flex-col  lg:w-3/4 md:flex-row justify-center items-center my-4 w-full'>
        <div className='w-3/4 md:w-1/4 md:mx-4 flex flex-col my-2 shadow-sm bg-purple-800 bg-opacity-20 relative h-44 rounded-lg overflow-hidden border-2 border-gray-200 justify-center items-center p-5'>
          <span className='fa fa-users text-[170px] text-purple-950 opacity-[0.07] rounded-br-full my-5 absolute -left-[1%] -top-4'></span>
          <span className=' text-4xl font-bold text-purple-900  rounded-br-full my-5 absolute right-3 top-1'>
            <CountUp enableScrollSpy={true} end={200} />+
          </span>
          <h2 className='text-xl absolute right-5 text-purple-900 top-20 font-bold !mt-10'>
            مشتری راضی
          </h2>
        </div>
        <div className='w-3/4 md:w-1/4 md:mx-4 flex flex-col my-2 shadow-sm bg-yellow-800 bg-opacity-20 relative h-44 rounded-lg overflow-hidden border-2 border-gray-200 justify-center items-center p-5'>
          <span className='fa fa-coffee text-[170px] text-yellow-950 opacity-[0.07] rounded-br-full my-5 absolute -left-[1%] -top-4'></span>
          <span className=' text-4xl font-bold text-yellow-600  rounded-br-full my-5 absolute right-3 top-1'>
            <CountUp enableScrollSpy={true} end={632} />+
          </span>
          <h2 className='text-xl absolute right-5 text-yellow-900 top-20 font-bold !mt-10'>
            فنجان قهوه
          </h2>
        </div>
        <div className='w-3/4 md:w-1/4 md:mx-4 flex flex-col my-2 shadow-sm bg-teal-800 bg-opacity-20 relative h-44 rounded-lg overflow-hidden border-2 border-gray-200 justify-center items-center p-5'>
          <span className='fa fa-check text-[170px] text-teal-950 opacity-[0.07] rounded-br-full my-5 absolute -left-[1%] -top-4'></span>
          <span className=' text-4xl font-bold text-teal-900  rounded-br-full my-5 absolute right-3 top-1'>
            <CountUp enableScrollSpy={true} end={494} />+
          </span>
          <h2 className='text-xl absolute right-5 text-teal-900 top-20 font-bold !mt-10'>
            مشتری راضی
          </h2>
        </div>
      </div>
    </div>
  );
};

export default TheExperiences;
