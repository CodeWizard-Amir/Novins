import React from "react";
import MobileNavbar from "../components/MobileNavbar";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { ErrorMessage, Field, Form, Formik } from "formik";
import { ContactValidator } from "../validators/ContactUsValidator";

const ContactUs = () => {
  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <HomePageHeader />
      <DtHomePage />
      <main>
        <h2 className='lg:m-20 m-8 font-bold'>تماس با ما</h2>
        <p className='border-r-4 text-sm lg:w-3/4 lg:mx-auto lg:my-10 text-green-900 font-bold border-green-400 py-5 px-2 mx-2 my-4 bg-green-100 text-center'>
          برای تماس با ما از راه های ارتباطی زیر و یا فرم تماس با ما استفاده
          کنید
        </p>
        <div className='flex xl:w-5/6 xl:mx-auto flex-col xl:flex-row-reverse lg:my-20'>
          <div className='flex flex-col [&_>div]:h-fit [&_>div]:rounded-md p-2 w-full  xl:w-[28%] mx-auto md:flex-row xl:flex-col flex-wrap md:justify-around'>
            <div className='border border-gray-200 shadow-md p-4 mx-2 my-2'>
              <div className='flex justify-between my-4'>
                <strong className='flex items-center'>
                  <span className='fa fa-user mx-2 text-stone-300'></span>
                  امیرسجاد نوری
                </strong>
                <div className='flex space-x-3 space-x-reverse [&_>a]:text-2xl'>
                  <Link>
                    <span className='fab text-sky-500 fa-telegram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-orange-500 font-bold fa-instagram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-blue-500 fa-linkedin'></span>
                  </Link>
                  <Link>
                    <span className='fab text-green-500 fa-github'></span>
                  </Link>
                </div>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-envelope text-stone-300 mx-2'></span>
                  ایمیل
                </strong>
                <Link className='font-bold text-gray-600'>
                  amirwebsajjad@gmail.com
                </Link>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-phone text-stone-300 mx-2'></span>
                  شماره تماس
                </strong>
                <Link className='font-bold text-sky-500'>09104816785</Link>
              </div>
            </div>
            <div className='border border-gray-200 shadow-md p-4 mx-2 my-2'>
              <div className='flex justify-between my-4'>
                <strong className='flex items-center'>
                  <span className='fa fa-user mx-2 text-stone-300'></span>
                  امیرسجاد نوری
                </strong>
                <div className='flex space-x-3 space-x-reverse [&_>a]:text-2xl'>
                  <Link>
                    <span className='fab text-sky-500 fa-telegram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-orange-500 font-bold fa-instagram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-blue-500 fa-linkedin'></span>
                  </Link>
                  <Link>
                    <span className='fab text-green-500 fa-github'></span>
                  </Link>
                </div>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-envelope text-stone-300 mx-2'></span>
                  ایمیل
                </strong>
                <Link className='font-bold text-gray-600'>
                  amirwebsajjad@gmail.com
                </Link>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-phone text-stone-300 mx-2'></span>
                  شماره تماس
                </strong>
                <Link className='font-bold text-sky-500'>09104816785</Link>
              </div>
            </div>
            <div className='border border-gray-200 shadow-md p-4 mx-2 my-2'>
              <div className='flex justify-between my-4'>
                <strong className='flex items-center'>
                  <span className='fa fa-user mx-2 text-stone-300'></span>
                  امیرسجاد نوری
                </strong>
                <div className='flex space-x-3 space-x-reverse [&_>a]:text-2xl'>
                  <Link>
                    <span className='fab text-sky-500 fa-telegram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-orange-500 font-bold fa-instagram'></span>
                  </Link>
                  <Link>
                    <span className='fab text-blue-500 fa-linkedin'></span>
                  </Link>
                  <Link>
                    <span className='fab text-green-500 fa-github'></span>
                  </Link>
                </div>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-envelope text-stone-300 mx-2'></span>
                  ایمیل
                </strong>
                <Link className='font-bold text-gray-600'>
                  amirwebsajjad@gmail.com
                </Link>
              </div>
              <div className='flex justify-between my-4 '>
                <strong className='items-center flex'>
                  <span className='fa fa-phone text-stone-300 mx-2'></span>
                  شماره تماس
                </strong>
                <Link className='font-bold text-sky-500'>09104816785</Link>
              </div>
            </div>
          </div>
          <div className="mx-5 my-5 border xl:w-[60%] border-gray-200 p-5  rounded-lg shadow-md">
          <h2 className="m-5 font-bold">فرم تماس با ما</h2>
          <Formik
          initialValues={{
            name : "",
            phone : "",
            email : "",
            description : "",
          }}
          validationSchema={ContactValidator}
          onSubmit={()=>alert("kiji")}
          >
          <Form action="" className="flex flex-col
             [&_>input]:px-5 [&_>input]:py-3 [&_>input]:border [&_>input]:border-gray-200 [&_>input]:my-3
             [&_>input]:rounded-md [&_>input]:shadow-sm
             ">
                <Field name="name" type="text" placeholder="نام و نام خانوادگی" />
                <span className="px-3 text-sm text-red-500">
                  <ErrorMessage name="name" />
                </span>
                <Field name="phone" type="text" placeholder="شماره تماس" />
                <span className="px-3 text-sm text-red-500">
                  <ErrorMessage name="phone" />
                </span>
                <Field name="email" type="eamil" placeholder="ایمیل" />
                <span className="px-3 text-sm text-red-500">
                  <ErrorMessage name="email" />
                </span>
                <Field name="description" as="textarea" className="my-3 border h-44 border-gray-200 rounded-md px-5 py-3 shadow-sm" id="" placeholder="توضیحات"></Field>
                <span className="px-3 text-sm text-red-500">
                  <ErrorMessage name="description" />
                </span>
                <button type="submit" className="bg-green-500 w-fit px-5 py-3 rounded-md ring-4 ring-green-200 my-2 text-white font-bold">
                  فرستادن
                </button>
            </Form>
          </Formik>

          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default ContactUs;
