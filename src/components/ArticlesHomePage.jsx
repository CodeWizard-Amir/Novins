import React from "react";
import Img from "../assets/img/headerBG.jpg";
import { Link } from "react-router-dom";
const ArticlesHomePage = () => {
  const a = [1,2,3,4,5]
  return (
    <>
      <section className='w-full flex flex-col items-center justify-center '>
        <h2 className='font-bold my-4 text-xl'>مقالات ما</h2>
        <div className='flex w-full p-4 md:[&_>a]:w-[48%] 
        lg:[&_>a]:w-[32%] xl:w-3/4 mx-auto
         md:flex-row flex-wrap md:justify-evenly flex-col'>
         {
          a.map(()=>(
            <Link to={"/Article/13"} className='w-full flex flex-col justify-between h-[450px] rounded-lg border border-gray-200 shadow-sm my-3'>
            <img className='w-full rounded-t-lg h-[54%]' src={Img} alt='' />
            <h2 className='border-b border-gray-100 px-3 mx-3 text-sm font-bold py-5'>
              چرا یادگیری لاراول الزامی است؟
            </h2>
            <p className='px-5 text-sm text-justify my-5 leading-6'>
              لاراول قویترین فریمم PHP و یکی از 3 فریمم ورک برتر طراحی سا زیاد به محبوب ترین فرییم
              وورک جهان ملقب شده است{" ... "}
            </p>
            <div className="flex justify-between h-32 border-t border-gray-200 items-center px-8">
              <div className="flex">
                <span className="fa fa-eye text-xs text-gray-300"></span>
                <b className="font-bold text-xs mx-2 text-gray-500">13658</b>
              </div>
              <div className="flex">
                <span className="fa fa-user text-xs text-purple-300"></span>
                <b className="font-bold text-sm mx-2 text-purple-800">امیرسجاد نوری</b>
              </div>
            </div>
          </Link>
          ))
         }
        </div>
      </section>
    </>
  );
};

export default ArticlesHomePage;
