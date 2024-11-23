import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";

import Img from "../assets/img/headerBG.jpg";
import { Link } from "react-router-dom";

const EachArticle = () => {
  const getText = ()=>
  {
    const Url = document.getElementById("theUrl")
    return Url.innerText
  }
  function copyTextToClipboard(text) {
    var textArea = document.createElement("textarea");
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.position = "fixed";
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.focus();
    textArea.select();
    try {
      var successful = document.execCommand('copy');
      var msg = successful ? 'successful' : 'unsuccessful';
      console.log('Copying text command was ' + msg);
    } catch (err) {
      console.error('Unable to copy', err);
    }
    document.body.removeChild(textArea);
  }
  

  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <HomePageHeader />
      <DtHomePage />
      <main className=' w-full 2xl:w-5/6 mx-auto xl:p-10 xl:my-24'>
        <div className='flex md:flex-row  lg:mx-5  md:justify-center flex-col xl:justify-between justify-between p-2 md:items-center w-full xl:my-5'>
          <h1 className='xl:text-xl my-3 md:mx-8  font-bold'>
            چرا یادگیری لاراول الزامی است؟
          </h1>
          <div className='flex border md:w-1/2  w-full xl:w-[435px] my-3 mx-auto xl:m-0  items-center justify-between border-gray-200 shadow-sm rounded-lg'>
            <p className='px-5 text-sm text-gray-700 flex justify-between w-5/6'>
              <span>لینک کوتاه</span>
              <span id="theUrl">https:://novins.com/Article/130000000</span>
            </p>
            <button
              onClick={() =>   copyTextToClipboard(getText())}
              className=' w-1/6 p-5 border-r bg-stone-50 rounded-l-lg border-gray-200 far fa-clone'
            ></button>
          </div>
        </div>
        <section className='w-full xl:flex-row xl:my-8 flex flex-col justify-between'>
          <div className='mx-2 xl:w-[65%] [&_>h2]:my-5 [&_>h2]:font-bold [&_>h2]:text-lg [&_>p]:text-justify [&_>p]:leading-8 [&_>p]:my-4  p-5 rounded-lg border border-gray-200 shadow-lg'>
            <div className='w-full h-[300px] lg:h-[500px]'>
              <img className='w-full h-full rounded-lg' src={Img} alt='' />
            </div>
            <h2 className=''>چرا یادگیری لاراول الزامی است ؟</h2>
            <p>
              لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما
              من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو
              الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش
            </p>
            <p>
              لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما
              من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو
              الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام
              چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو
              کیستی الو الو سلام سلام چطوری شما من که خوبم داداش داداش
            </p>
            <p>
              لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما
              من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو
              الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش
            </p>
            <p>
              لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما
              من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو
              الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام
              چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو
              کیستی الو الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول
              سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که
              خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو الو
              سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام
              چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو
              کیستی الو الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول
              سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که
              خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو الو
              سلام سلام چطوری شما من که خوبم داداش داداش
            </p>
            <p>
              لاراول سلام خوبی من امیرسجادم تو کیستی الو الو سلام سلام چطوری شما
              من که خوبم داداش داداش لاراول سلام خوبی من امیرسجادم تو کیستی الو
              الو سلام سلام چطوری شما من که خوبم داداش داداش لاراول سلام خوبی من
              امیرسجادم تو کیستی الو الو سلام سلام چطوری شما من که خوبم داداش
              داداش
            </p>
          </div>
          <div className='mx-2 md:flex xl:flex-col  xl:w-[29%]'>
            <div className='w-full h-fit md:m-5 xl:mt-0 my-5 rounded-lg border border-gray-200 shadow-md'>
              <h2 className='border-b bg-stone-50 rounded-t-lg border-gray-200 p-5'>
                درباره مقاله
              </h2>
              <ul className='mt-5 space-y-5 p-5'>
                <li className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <span className='fa fa-header text-sm mx-2'></span>
                    <h3>عنوان مقاله : </h3>
                  </div>
                  <strong className='text-sm'>
                    چرا یادگیری لاراول الزامی است؟
                  </strong>
                </li>
                <li className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <span className='fa fa-user text-sm mx-2'></span>
                    <h3> نویسنده مقاله : </h3>
                  </div>
                  <strong className='text-sm'>امیرسجاد نوری</strong>
                </li>
                <li className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <span className='fa fa-clock text-sm mx-2'></span>
                    <h3> تایم مطالعه : </h3>
                  </div>
                  <strong className='text-sm'>12 دقیقه</strong>
                </li>
                <li className='flex justify-between items-center'>
                  <div className='flex items-center'>
                    <span className='fa fa-calendar text-sm mx-2'></span>
                    <h3> تاریخ انتشار : </h3>
                  </div>
                  <strong className='text-sm'>23 - 8 - 1403</strong>
                </li>
              </ul>
            </div>
            <div className='w-full h-fit md:m-5 my-8 rounded-lg border border-gray-200 shadow-md'>
              <h2 className='border-b bg-stone-50 rounded-t-lg border-gray-200 p-5'>
                مقالات مرتبط
              </h2>
              <ul className='mt-5 p-5 py-6 [&_>li]:py-3'>
                <li className='flex items-center border-b border-r-gray-100 p-2 hover:[&_>a]:pr-1 hover:[&_>a]:text-purple-500'>
                  <span className='border-2 w-[8px] mx-2 h-[8px] border-purple-500 rounded-full'></span>
                  <Link className='duration-500'>
                    ده دلیل برای یادگیری جنگو
                  </Link>
                </li>
                <li className='flex items-center border-b border-gray-200 p-2 hover:[&_>a]:pr-1 hover:[&_>a]:text-purple-500'>
                  <span className='border-2 w-[8px] mx-2 h-[8px] border-purple-500 rounded-full'></span>
                  <Link className='duration-500'>
                    ده دلیل برای یادگیری جنگو
                  </Link>
                </li>
                <li className='flex items-center border-b border-r-gray-100 p-2 hover:[&_>a]:pr-1 hover:[&_>a]:text-purple-500'>
                  <span className='border-2 w-[8px] mx-2 h-[8px] border-purple-500 rounded-full'></span>
                  <Link className='duration-500'>
                    ده دلیل برای یادگیری جنگو
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default EachArticle;
