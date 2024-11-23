import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";
import Footer from "../components/Footer";
import IMGSHop from '../assets/img/shop.png'
import IMGCOMPANY from '../assets/img/company.png'
import IMGNEWS from '../assets/img/news.png'
const ServiceTariff = () => {
  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <HomePageHeader  />
      <DtHomePage />
      <main className="p-5 [&_>p]:m-5">
        <div className="flex flex-col lg:[&_>div]:w-[32%] md:[&_>div]:w-[48%] md:flex-row [&_>div]:my-4 2xl:w-2/3 xl:w-5/6 xl:mx-auto  justify-between  flex-wrap">
          <div className="flex flex-col rounded-lg shadow-lg border justify-between w-full h-[450px] p-5">
            <div className="p-5 md:p-0 md:mb-10 flex items-center">
                <div className="w-20 mx-5 h-20 rounded-xl shadow-lg rotate-45">
                  <img src={IMGCOMPANY} className="w-full h-full -rotate-45" alt="" />
                </div>
                <h2 className="mx-10 md:mx-5 font-bold text-lg">وبسایت شرکتی</h2>
            </div>
            <div className="space-y-5">
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
                وبسایت های شرکتی برای معرفی کسب کار 
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
              زیباترین ظاهر و تجربه کاربری عالی </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                پنل ادمین نرم و روان همراه با فیلم آموزشی
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                سیوی مناسب برای موتور های جستجو
              </p>
              <p className="p-3 !my-20 font-bold text-green-600 bg-green-100 ring-2 ring-green-200 rounded-sm">هزینه تقریبی : از 10 میلیون تومان</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg border justify-between w-full h-[450px] p-5">
            <div className="p-5 md:p-0 md:mb-10 flex items-center">
                <div className="w-20 mx-5 h-20 rounded-xl shadow-lg rotate-45">
                  <img src={IMGSHop} className="w-full h-full -rotate-45" alt="" />
                </div>
                <h2 className="mx-10 md:mx-5 font-bold text-lg">وبسایت فروشگاهی</h2>
            </div>
            <div className="space-y-5">
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
                وبسایت های شرکتی برای معرفی کسب کار 
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
              زیباترین ظاهر و تجربه کاربری عالی </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                پنل ادمین نرم و روان همراه با فیلم آموزشی
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                سیوی مناسب برای موتور های جستجو
              </p>
              <p className="p-3 !my-20 font-bold text-purple-600 bg-purple-100 ring-2 ring-purple-200 rounded-sm">هزینه تقریبی : از 10 میلیون تومان</p>
            </div>
          </div>
          <div className="flex flex-col rounded-lg shadow-lg border justify-between w-full h-[450px] p-5">
            <div className="p-5 md:p-0 md:mb-10 flex items-center">
                <div className="w-20 mx-5 h-20 rounded-xl shadow-lg rotate-45">
                  <img src={IMGNEWS} className="w-full h-full -rotate-45" alt="" />
                </div>
                <h2 className="mx-10 md:mx-5 font-bold text-lg">وبسایت خبری</h2>
            </div>
            <div className="space-y-5">
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
                وبسایت های شرکتی برای معرفی کسب کار 
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>
              زیباترین ظاهر و تجربه کاربری عالی </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                پنل ادمین نرم و روان همراه با فیلم آموزشی
              </p>
              <p>
              <span className="fa fa-check mx-2 rounded-sm bg-green-400 text-white ring-2 ring-green-200 text-xs w-[15px] text-center h-[15px]"></span>

                سیوی مناسب برای موتور های جستجو
              </p>
              <p className="p-3 !my-20 font-bold text-sky-600 bg-sky-100 ring-2 ring-sky-200 rounded-sm">هزینه تقریبی : از 10 میلیون تومان</p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ServiceTariff;
