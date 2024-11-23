import React from "react";
import { DtHomePage } from "../components/DtHomePage";
import HomePageHeader from "../components/HomePageHeader";
import MobileNavbar from "../components/MobileNavbar";
import Footer from "../components/Footer";
import { ErrorMessage, Field, Formik, Form } from "formik";
import { CollaborationValidator } from "../validators/CollaborationValidator";
const Collaboration = () => {
  return (
    <>
      <DtHomePage />
      <HomePageHeader />
      <MobileNavbar />
      <main>
        <h2 className=' mx-10 my-5 font-bold  border-b border-gray-200 py-4 px-5'>
          همکاری با ما
        </h2>
        <div className='flex w-full lg:flex-row flex-col-reverse  lg:w-5/6 mx-auto lg:p-5 justify-around'>
          <Formik
            initialValues={{
              name: "",
              phone: "",
              city: "",
              description: "",
              skills: "",
            }}
            validationSchema={CollaborationValidator}
            onSubmit={(val) => {}}
          >
            <Form
              action=''
              className=' border lg:m-0 m-2 lg:w-2/3 border-gray-200 shadow-md rounded-r-md p-5 flex flex-col'
            >
              <div className='flex my-2 flex-col space-y-3'>
                <div className='flex items-center'>
                  <span className='fa fa-user mx-2 text-gray-300 text-[13px]'></span>
                  <span className='text-sm'>نام و نام خانوادگی</span>
                </div>
                <Field
                  className='p-3 shadow-sm rounded-md border border-gray-200'
                  type='text'
                  name='name'
                />
                <span className='text-red-500 px-4  text-xs'>
                  <ErrorMessage name='name' /> 
                </span>
              </div>
              <div className='flex my-2 flex-col space-y-4'>
                <div className='flex items-center'>
                  <span className='fa fa-phone mx-2 text-gray-300 text-[13px]'></span>
                  <span className='text-sm'>شماره تماس</span>
                </div>
                <Field
                  className='p-3 shadow-sm rounded-md border border-gray-200'
                  type='number'
                  name='phone'
                />
                <span className='text-red-500 px-4  text-xs'>
                  <ErrorMessage name='phone' /> 
                </span>
              </div>
              <div className='flex my-2 flex-col space-y-4'>
                <div className='flex items-center'>
                  <span className='fa fa-map mx-2 text-gray-300 text-[13px]'></span>
                  <span className='text-sm'>محل سکونت</span>
                </div>
                <Field
                  className='p-3 shadow-sm rounded-md border border-gray-200'
                  type='text'
                  name='city'
                />
                <span className='text-red-500 px-4  text-xs'>
                  <ErrorMessage name='city' /> 
                </span>
              </div>
              <div className='flex my-2 flex-col space-y-4'>
                <div className='flex items-center'>
                  <span className='fa fa-check mx-2 text-gray-300 text-[13px]'></span>
                  <span className='text-sm'>مهارت</span>
                </div>
                <Field
                  className='p-3 shadow-sm rounded-md border border-gray-200'
                  type='text'
                  name='skills'
                />
                <span className='text-red-500 px-4  text-xs'>
                  <ErrorMessage name='skills' /> 
                </span>
              </div>
              <div className='flex my-2 flex-col space-y-4'>
                <div className='flex items-center'>
                  <span className='far fa-comment-alt mx-2 text-gray-300 text-[13px]'></span>
                  <span className='text-sm'>توضیحات</span>
                </div>
                <Field
                  as='textarea'
                  className='p-3 shadow-sm h-44 rounded-md border border-gray-200'
                  type='text'
                  name='description'
                />
                <span className='text-red-500 px-4  text-xs'>
                  <ErrorMessage name='description' /> 
                </span>
              </div>
              <button className='bg-purple-500 text-white font-bold px-8 py-3 rounded-md ring-4 ring-purple-200 w-fit my-3'>
                فرستادن
              </button>
            </Form>
          </Formik>

          <div className='border lg:m-0 border-r-transparent my-2 mx-2 lg:w-1/3 border-gray-200 shadow-md rounded-l-md'>
            <h2 className='border-b border-gray-200 p-5 font-bold bg-gray-50'>
              شرایط همکاری
            </h2>
            <div className='flex flex-col'>
              <p className='text-lg m-4'>
                ما در نوینان به نیروی کاری نیاز داریم که ..
              </p>
              <ul
                className='px-5 space-y-3 mb-14 [&_>li]:text-sm
            [&_>li]:before:absolute [&_>li]:relative [&_>li]:before:w-[5px] [&_>li]:before:h-[5px] [&_>li]:before:border [&_>li]:before:border-purple-500 [&_>li]:before:bg-purple-300
            [&_>li]:before:rotate-45 [&_>li]:before:right-0 [&_>li]:before:top-[40%] [&_>li]:px-3
            '
              >
                <li>دارای چند نمونه کار قابل ارایه و قوی</li>
                <li>حداقل 1 سال سابقه کار</li>
                <li>دارای روحیه کاری تیمی بالا</li>
                <li>خوش قول بودن و OnTime بودن</li>
                <li>تعهد در قبال وظایف بر عهده او</li>
              </ul>
              <p className='leading-8 my-2 mx-4'>
                شماره تماس و فایل رزومه خود را (حتما به صورت PDF) برای ما ارسال
                کنید بعد از برسی سوابق شما برای ادامه مراحل با شما تماس خواهیم
                گرفت
              </p>
              <p className='leading-8 my-2 mx-4'>
                بعد از برسی و در صورت قطعیت شما عضو رسمی تیم بزرگ نوینان خواهید
                بود
              </p>
              <p className='leading-8 my-2 mx-4'>
                لطفا صبور باشید ممکن از 3 تا 7 روز زمان ببرد
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Collaboration;
