import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";
import Footer from "../components/Footer";

const CommonQsn = () => {
  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <HomePageHeader />
      <DtHomePage />
      <main className="xl:px-32">
        <h1 className='m-5 lg:mx-20 lg:my-10 font-bold text-xl'>سوالات رایج</h1>
        <div className='mx-2 lg:border-none lg:shadow-none border lg:px-32 lg:space-y-14 lg:mx-auto border-gray-200 p-5 shadow-md lg:mb-32 my-5rounded-md'>
          <div className='my-5'>
            <h2 className='font-bold my-2 pr-3
            relative before:w-[8px] before:h-[8px] before:border-2 before:border-sky-500
            before:absolute before:rounded-full before:right-0 before:top-[38%]
            '>
              چرا امروزه آنلاین کردن کسب کار از ضروریات است؟
            </h2>
            <p className="text-sm text-justify mx-5">
              برای بدست اوردن بازار های بزرگ و فروش بسیار زیاد میدونی چیزهه خیلی
              خوبه بیاید پول بدید ناموصا بهترین کارو مکیند جذابای من هرچی بیشتر
              پول بدید بیشتر دوستون خواهیم داشت جیگرهای من بهبهبهبه
            </p>
          </div>
          <div className='my-5'>
            <h2 className='font-bold my-2 pr-3
            relative before:w-[8px] before:h-[8px] before:border-2 before:border-sky-500
            before:absolute before:rounded-full before:right-0 before:top-[38%]
            '>
              چرا امروزه آنلاین کردن کسب کار از ضروریات است؟
            </h2>
            <p className="text-sm text-justify mx-5">
              برای بدست اوردن بازار های بزرگ و فروش بسیار زیاد میدونی چیزهه خیلی
              خوبه بیاید پول بدید ناموصا بهترین کارو مکیند جذابای من هرچی بیشتر
              پول بدید بیشتر دوستون خواهیم داشت جیگرهای من بهبهبهبه
            </p>
          </div>
          <div className='my-5'>
            <h2 className='font-bold my-2 pr-3
            relative before:w-[8px] before:h-[8px] before:border-2 before:border-sky-500
            before:absolute before:rounded-full before:right-0 before:top-[38%]
            '>
              چرا امروزه آنلاین کردن کسب کار از ضروریات است؟
            </h2>
            <p className="text-sm text-justify mx-5">
              برای بدست اوردن بازار های بزرگ و فروش بسیار زیاد میدونی چیزهه خیلی
              خوبه بیاید پول بدید ناموصا بهترین کارو مکیند جذابای من هرچی بیشتر
              پول بدید بیشتر دوستون خواهیم داشت جیگرهای من بهبهبهبه
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default CommonQsn;
