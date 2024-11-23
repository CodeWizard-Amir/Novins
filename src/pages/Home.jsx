import React, { useEffect } from "react";
import MobileNavbar from "../components/MobileNavbar";
import HomePageHeader from "../components/HomePageHeader";
import Slider from "../components/Slider";
import Faq from "../components/Faq";
import Footer from "../components/Footer";
import TheExperiences from "../components/TheExperiences";
import { DtHomePage } from "../components/DtHomePage";
import DtHeaderInfo from "../components/DtHeaderInfo";
import KeyUp from "../components/KeyUp";
import ArticlesHomePage from "../components/ArticlesHomePage";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { ContactValidator } from "../validators/ContactUsValidator";
const Home = () => {

  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <main className=''>
        <HomePageHeader />
        <DtHomePage />

        {/* <Slider /> */}
        <DtHeaderInfo />
        <TheExperiences />
        <div className='w-full items-center my-10 justify-center flex flex-col'>
          <h2 className='text-xl 2xl:my-8 font-bold'>
            {" "}
            چرا نوینان را انتخاب کنیم؟{" "}
          </h2>
          <div className='flex flex-col w-full justify-center items-center p-5 [&_>div]:md:w-[45%] 2xl:w-5/6 [&_>div]:xl:w-[28%] [&_>div]:md:m-3 md:flex-row md:flex-wrap'>
            <div className='flex flex-col w-full my-3 shadow-sm border relative border-gray-200 h-52'>
              <span className=' fa fa-microchip text-5xl w-36 h-32 flex justify-end p-6  text-white border-4 rounded-br-full absolute left-[0] border-sky-300 bg-sky-500  rounded-md'></span>
              <h3 className='font-bold m-4 my-10 text-xl'>بروزترین تکنولوژی</h3>
              <p className='mx-5 my-5'>
                طراحی شما با بروزترین تکنولوژی های موجود در بازار کار
              </p>
            </div>
            <div className='flex flex-col w-full my-3 shadow-sm border relative border-gray-200 h-52'>
              <span className='fas fa-user-check text-5xl w-36 h-32 flex justify-end p-6  text-white border-4 rounded-br-full absolute left-[0] border-sky-300 bg-sky-500  rounded-md'></span>
              <h3 className='font-bold m-4 my-10 text-xl'>پشتیبانی فنی</h3>
              <p className='mx-5 my-5'>
                طراحی شما با بروزترین تکنولوژی های موجود در بازار کار
              </p>
            </div>
            <div className='flex flex-col w-full   my-3 shadow-sm border relative border-gray-200 h-52'>
              <span className='fas fa-shield-alt text-5xl w-36 h-32 flex justify-end p-6  text-white border-4 rounded-br-full absolute left-[0] border-sky-300 bg-sky-500  rounded-md'></span>
              <h3 className='font-bold m-4 my-10 text-xl'>امنیت بالا</h3>
              <p className='mx-5 my-5'>
                طراحی شما با بروزترین تکنولوژی های موجود در بازار کار
              </p>
            </div>
          </div>
        </div>
        <div className='w-full flex flex-col justify-center items-center'>
          <h2 className='text-xl font-bold'>انواع وبسایت ها</h2>
          <div className='w-full flex flex-col p-5 [&_>div]:md:w-2/3 [&_>div]:lg:w-[48%] [&_>div]:2xl:h-[530px] [&_>div]:xl:w-[32%] [&_>div]:2xl:w-[21%] xl:justify-center [&_>div]:lg:m-2 lg:flex-wrap lg:flex-row items-center'>
            <div className='w-full h-[500px]  bg-purple-50 my-5 flex flex-col p-8 items-center rounded-[30px]'>
              <span className='	fas fa-cart-plus text-purple-700 text-5xl'></span>
              <h2 className='my-5 font-bold text-xl'>سایت فروشگاهی</h2>
              <p className='mx-2 leading-9 mt-5 text-lg text-justify'>
                داشتن یه وبسایت فروشگاهی کمکتون می‌کنه تا بدون هیچ واسطه و خیلی
                سریع کالاهات رو بفروشی. یک وبسایت با طراحی چشم نواز که تجربه
                کاربر رو هم در نظر گرفته، می‌تونه یه شروع خیلی قوی برای کسب و
                کار نوپای شما باشه! اینجا ما انواع فروشگاه بسته به نوع محصولاتت
                رو ارائه می‌دیم. با سایت مپ‌های تست شده و کاری.
              </p>
            </div>
            <div className='w-full h-[500px] my-5 2xl:!mt-32 bg-emerald-50  flex flex-col p-8 items-center rounded-[30px]'>
              <span className='fas fa-building text-emerald-600 text-5xl'></span>
              <h2 className='my-5 font-bold text-xl'>سایت شرکتی</h2>
              <p className='mx-2 leading-9 mt-5 text-lg text-justify'>
                داشتن یه وبسایت فروشگاهی کمکتون می‌کنه تا بدون هیچ واسطه و خیلی
                سریع کالاهات رو بفروشی. یک وبسایت با طراحی چشم نواز که تجربه
                کاربر رو هم در نظر گرفته، می‌تونه یه شروع خیلی قوی برای کسب و
                کار نوپای شما باشه! اینجا ما انواع فروشگاه بسته به نوع محصولاتت
                رو ارائه می‌دیم. با سایت مپ‌های تست شده و کاری.
              </p>
            </div>
            <div className='w-full h-[500px] bg-yellow-50  my-5 flex flex-col p-8 items-center rounded-[30px]'>
              <span className='	fas fa-g text-yellow-500 text-5xl'></span>
              <h2 className='my-5 font-bold text-xl'>
                برندیگ و توسعه کسب کار{" "}
              </h2>
              <p className='mx-2 leading-9 mt-5 text-lg text-justify'>
                داشتن یه وبسایت فروشگاهی کمکتون می‌کنه تا بدون هیچ واسطه و خیلی
                سریع کالاهات رو بفروشی. یک وبسایت با طراحی چشم نواز که تجربه
                کاربر رو هم در نظر گرفته، می‌تونه یه شروع خیلی قوی برای کسب و
                کار نوپای شما باشه! اینجا ما انواع فروشگاه بسته به نوع محصولاتت
                رو ارائه می‌دیم. با سایت مپ‌های تست شده و کاری.
              </p>
            </div>
            <div className='w-full h-[500px] bg-indigo-50 2xl:!mt-32 flex flex-col p-8 items-center rounded-[30px]'>
              <span className='	fas fa-poll text-indigo-700 text-5xl'></span>
              <h2 className='my-5 font-bold text-xl'> دیجیتال مارکتینگ </h2>
              <p className='mx-2 leading-9 mt-5 text-lg text-justify'>
                داشتن یه وبسایت فروشگاهی کمکتون می‌کنه تا بدون هیچ واسطه و خیلی
                سریع کالاهات رو بفروشی. یک وبسایت با طراحی چشم نواز که تجربه
                کاربر رو هم در نظر گرفته، می‌تونه یه شروع خیلی قوی برای کسب و
                کار نوپای شما باشه! اینجا ما انواع فروشگاه بسته به نوع محصولاتت
                رو ارائه می‌دیم. با سایت مپ‌های تست شده و کاری.
              </p>
            </div>
          </div>
        </div>
        <Faq />
        <ArticlesHomePage />
      </main>
      <Footer />
    </>
  );
};
export default Home;
