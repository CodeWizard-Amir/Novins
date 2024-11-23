import React, { useEffect } from "react";
const Faq = () => {
  const ac = (e) => {
    const arrow = e.target.lastChild
    console.log(arrow)
    const targetAc = e.target.nextElementSibling;
    const targetHeight = targetAc.firstChild.offsetHeight;
    if (Array.from(targetAc.classList).includes("h-0")) {
      targetAc.style.height = `${targetHeight}px`;
      targetAc.classList.remove("h-0");
      arrow.classList.add("-rotate-90")
    } else {
      targetAc.style.height = '0px'
      targetAc.classList.add("h-0");
      arrow.classList.remove("-rotate-90")

    }
  };
  return (
    <>
      <div className='w-full lg:px-36 p-5 flex flex-col items-center '>
        <h2 className='text-xl font-bold 2xl:my-6'>سوالات متداول</h2>
        <div className='w-full  2xl:w-1/2 mx-auto my-2'>
          <h2 onClick={(e) => ac(e)} className='w-full font-bold act p-5 flex items-center justify-between  bg-gray-100 shadow-sm rounded-md border border-gray-300'>
          چگونه سفارش پروژه دهیم ؟
            <span className='fas fa-angle-double-left duration-500 float-left'></span>
          </h2>
          <div className='Accordion  h-0 overflow-hidden duration-500'>
            <p className='mx-2 w-full AcText text-justify m-2 rounded-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              similique laborum exercitationem magnam ea, minima dicta, est
              natus aliquid aperiam dolore hic? Earum adipisci maiores delectus
              vitae facilis nostrum aliquam?
            </p>
          </div>
        </div>
        <div className='w-full  2xl:w-1/2 mx-auto my-2'>
          <h2 onClick={(e) => ac(e)} className='w-full font-bold act p-5 flex items-center justify-between  bg-gray-100 shadow-sm rounded-md border border-gray-300'>
          چگونه سفارش پروژه دهیم ؟
            <span className='fas fa-angle-double-left duration-500 float-left'></span>
          </h2>
          <div className='Accordion  h-0 overflow-hidden duration-500'>
            <p className='mx-2 w-full AcText text-justify m-2 rounded-md'>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nihil,
              similique laborum exercitationem magnam ea, minima dicta, est
              natus aliquid aperiam dolore hic? Earum adipisci maiores delectus
              vitae facilis nostrum aliquam?
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Faq;
