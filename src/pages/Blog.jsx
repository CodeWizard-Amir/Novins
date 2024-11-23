import React, { useDeferredValue, useEffect, useState } from "react";
import MobileNavbar from "../components/MobileNavbar";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Img from "../assets/img/headerBG.jpg";

const Blog = () => {
  const a = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
    22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 1, 2, 3, 4, 5, 6, 7, 8, 9,
    10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28,
    29, 30, 31, 32, 33, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 44,
  ];
  const [searchedBlog, setSearchedBlog] = useState("");
  const [currentPage, setCurrentPage] = useState(0);
  let dataOfPagination = a.slice(currentPage, currentPage + 6);
  const blogs = useDeferredValue(dataOfPagination);
  const num = Array.from(
    { length: Math.ceil(a.length / 6) },
    (_, index) => index + 1
  );
  const setCurrentPageIn = (index) => {
    setCurrentPage(index * 6);
  };

  const SearchBlog = (e) => {
    e.preventDefault();
    const BlogPart = Array.from(document.querySelectorAll("#BlogPart a"));
    let trgval = e.target.value
    const filteredBlogs = BlogPart.filter((blog) => {
      return blog.textContent.includes();
    });
    console.log(filteredBlogs)
    filteredBlogs.length > 0 ? setSearchedBlog("nice") :  setSearchedBlog("nothing");
    console.log(searchedBlog)
  };
  return (
    <>
      <MobileNavbar />
      <KeyUp />
      <HomePageHeader />
      <DtHomePage />
      <main className='lg:p-20 p-3'>
        <h1 className='font-bold text-xl'>
          مقالات نوینان
          <span className='mx-2 text-xs text-gray-500 font-normal'>
            (155مقاله)
          </span>
        </h1>
        <div className='my-5'>
          <div className='rounded-md md:flex-row lg:w-3/4 lg:mx-auto md:justify-between border border-gray-200 p-3 shadow-md flex flex-col md:space-y-0 space-y-3 justify-between'>
            <div className='flex w-full md:w-[49%] border rounded-sm border-gray-200 h-fit px-5 py-1 '>
              <input
                onChange={(e) => SearchBlog(e)}
                className='w-[95%] p-2 outline-none'
                type='text'
                name=''
                placeholder='عنوان مورد نظر ...'
              />
              <span className='fa w-[5%] fa-search font-bold text-xl text-center flex justify-center items-center'></span>
            </div>
            <select
              className='flex w-full md:w-[49%] border rounded-sm border-gray-200 px-5 py-3 '
              name=''
              id=''
            >
              <option value=''>مرتب سازی بر اساس تاریخ انتشار</option>
              <option value=''>مرتب سازی بر اساس تاریخ انتشار</option>
              <option value=''>مرتب سازی بر اساس تاریخ انتشار</option>
            </select>
          </div>
          <div
            id='BlogPart'
            className='flex my-5 w-full xl:w-3/4 lg:border-none lg:shadow-none mx-auto p-4 [&_>a]:md:w-[48%] [&_>a]:lg:w-[32%] md:flex-row md:flex-wrap md:justify-between flex-col border border-gray-200 shadow-md rounded-md'
          >
            {searchedBlog ? (
              searchedBlog == "nothing" ? (
                <h2>چیزی یافت نشد</h2>
              ) : (
                <h1>خیلی چیزها هم یافت شد</h1>
              )
            ) : (
              blogs.map((u) => (
                <Link
                  to={"/Article/13"}
                  className='w-full flex flex-col justify-between h-[450px] rounded-lg border border-gray-200 shadow-sm my-3'
                >
                  <img
                    className='w-full rounded-t-lg h-[54%]'
                    src={Img}
                    alt=''
                  />
                  <h2 className='border-b border-gray-100 px-3 mx-3 text-sm font-bold py-5'>
                    چرا یادگیری لاراول الزامی است؟
                    <span className='mx-2 text-red-500'>{u}</span>
                  </h2>
                  <p className='px-5 text-sm text-justify my-5 leading-6'>
                    لاراول قویترین فریمم PHP و یکی از 3 فریمم ورک برتر طراحی سا
                    زیاد به محبوب ترین فرییم وورک جهان ملقب شده است{" ... "}
                  </p>
                  <div className='flex justify-between h-32 border-t border-gray-200 items-center px-8'>
                    <div className='flex'>
                      <span className='fa fa-eye text-xs text-gray-300'></span>
                      <b className='font-bold text-xs mx-2 text-gray-500'>
                        13658
                      </b>
                    </div>
                    <div className='flex'>
                      <span className='fa fa-user text-xs text-purple-300'></span>
                      <b className='font-bold text-sm mx-2 text-purple-800'>
                        امیرسجاد نوری
                      </b>
                    </div>
                  </div>
                </Link>
              ))
            )}
          </div>
          <div
            className='flex justify-between w-1/3 mx-auto 
          [&_>a]:font-bold [&_>a]:w-9 [&_>a]:h-9 [&_>a]:flex [&_>a]:justify-center [&_>a]:items-center
          [&_>a]:border-2 [&_>a]:border-purple-500 [&_>a]:rounded-lg
          hover:[&_>a]:bg-purple-500 hover:[&_>a]:text-white
          '
          >
            {num.map((u, index) => (
              <Link
                className={
                  index == currentPage / 6 ? "bg-purple-500 text-white" : ""
                }
                onClick={() => setCurrentPageIn(index)}
              >
                {index + 1}
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Blog;
