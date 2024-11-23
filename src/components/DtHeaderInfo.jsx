import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const DtHeaderInfo = () => {
  const showAsk = () => {
    Swal.fire({
      title: "فرم مشاوره",
      customClass : "hi fifi",
      text : "برای دریافت مشاوه ترجیحا شماره که در شبکه های اجتماعی فعال هستید را وارد کنید ، در اسرع وقت با شما تماس خواهیم گرفت",
      html: `
      <p>برای دریافت مشاوه ترجیحا شماره که در شبکه های اجتماعی فعال هستید را وارد کنید ، در اسرع وقت با شما تماس خواهیم گرفت</p>
            <form action="" >
        <input type="text" placeholder="شماره تماس خود را وارد کنید" required min={11} max={11} />
        <input type="text" placeholder="ایمیل خود را وارد کنید" required />
        <button>درخواست</button>
      </form>
      `,
      showConfirmButton: false
    });
  };
  return (
    <>
      <section id="DeskTopHeader" className='p-10 relative w-5/6 mx-auto xl:flex justify-center hidden items-center my-20'>
      <button className="absolute w-[60px] h-[60px] top-[100%] flex animate-bounce !duration-1000 justify-center items-center rounded-full ring-4 ring-purple-300">
        <span className="	fas fa-angle-double-down text-lg ml-[2px]  mt-[3px] font-bold"></span>
      </button>
        <div className='w-4/6 relative flex-col flex justify-center'>
          <svg className="absolute !-z-10 w-full h-[180%] -right-[100px]" viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'>
            <path
              fill='#f5eaff'
              d='M32.1,-55.4C46.4,-47.4,65.9,-48.4,76.2,-40.7C86.4,-32.9,87.2,-16.5,84,-1.8C80.9,12.8,73.7,25.6,65.8,37.3C57.9,49,49.2,59.6,38.1,67.3C27,75.1,13.5,80.1,2.3,76.1C-8.9,72.1,-17.7,59.1,-26.4,49.9C-35.1,40.7,-43.5,35.4,-53.8,27.7C-64.1,20,-76.3,10,-81.9,-3.3C-87.6,-16.5,-86.8,-33.1,-78,-43.4C-69.2,-53.6,-52.4,-57.6,-38,-65.6C-23.7,-73.6,-11.9,-85.6,-1.5,-83C8.9,-80.5,17.8,-63.4,32.1,-55.4Z'
              transform='translate(100 100)'
            />
          </svg>
          <p className='my-5 text-lg'>
            طراحی انواع وبسایت های شرکتی ، خبری و فروشگاهی
          </p>
          <p className='my-10 font-extrabold text-5xl'>
            با نوینان کسب کار خود را آنلاین کنید
          </p>
          <p className='my-6 font-bold text-gray-700'>
            برور ترین تکنولوژی های طراحی و برنامه نویسی وبسایت
          </p>
          <div className='flex w-full px-10 my-10'>
            <Link to={"/Services-Tariff"} className=' rounded-full bg-purple-500 ring-4 ring-purple-200 text-white px-8 py-3 font-bold mx-3'>
              تعرفه خدمات
            </Link>
            <button onClick={() => showAsk()} className='rounded-full bg-green-500 ring-4 ring-green-200 text-white px-8 py-3 font-bold mx-3'>
              مشاوره رایگان
            </button>
          </div>
          <div
            className='[&_>span]:before:absolute [&_>span]:relative  [&_>span]:px-4
                 [&_>span]:before:w-[8px] [&_>span]:before:h-[8px] [&_>span]:before:right-0  [&_>span]:before:top-[36%] [&_>span]:before:rounded-full
              [&_>span]:before:bg-purple-200 [&_>span]:before:border-2 [&_>span]:before:border-purple-500'
          >
            <span>یکسال هاست رایگان</span>
            <span>یکسال دامنه رایگان</span>
            <span>ویدیو برای آموزش پنل ادمین</span>
            <span>شش ماه پشتیبانی رایگان</span>
          </div>
        </div>
        <div className='w-1/3'>
          <img
            className='w-full h-full'
            src='https://webito.ir/wp-content/uploads/2023/05/banner-min-1.png'
            alt=''
          />
        </div>
      </section>
    </>
  );
};

export default DtHeaderInfo;
