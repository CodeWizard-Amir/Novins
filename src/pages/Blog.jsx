import { useDeferredValue, useEffect, useState } from "react";
import MobileNavbar from "../components/MobileNavbar";
import KeyUp from "../components/KeyUp";
import HomePageHeader from "../components/HomePageHeader";
import { DtHomePage } from "../components/DtHomePage";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import Img from "../assets/img/headerBG.jpg";
import DATA from '../../Server/Article.json'
const Blog = () => {
  const [Article, setArticle] = useState([])
  useEffect(() => {
    setArticle(DATA.articles)
  }, [])
  const [searchedBlog, setSearchedBlog] = useState(null);
  const [currentPage, setCurrentPage] = useState(0);
  let dataOfPagination = Article?.slice(currentPage, currentPage + 6);
  const blogs = useDeferredValue(dataOfPagination);
  const num = Array.from(
    { length: Math.ceil(Article?.length / 6) },
    (_, index) => index + 1
  );
  const setCurrentPageIn = (index) => {
    setCurrentPage(index * 6);
  };

  const SearchBlog = (searchValue) => {
    const filteredBlog = Article.filter((atc) => {
      return atc.content.includes(searchValue) || atc.title.includes(searchValue)
    })
    console.log(searchValue)
    if(searchValue == "")
    {
      setSearchedBlog(null)
    }
    if(filteredBlog && searchValue != "")
    {
    setSearchedBlog(filteredBlog)
    }
    else if(searchValue != "")
    {
    setSearchedBlog("Nothing")
    }
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
                onChange={(e) => SearchBlog(e.target.value)}
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
            {
               searchedBlog != "Nothing" ?
                (
                  searchedBlog?.map((blog, index) => (
                    <Link
                      key={index}
                      to={"/Article/13"}
                      className='w-full flex flex-col justify-between h-[450px] rounded-lg border border-gray-200 shadow-sm my-3'
                    >
                      <img
                        className='w-full rounded-t-lg h-[54%]'
                        src={Img}
                        alt=''
                      />
                      <h2 className='border-b border-gray-100 px-3 mx-3 text-sm font-bold py-5'>
                        {blog.title}
                      </h2>
                      <p className='px-5 text-sm text-justify my-5 leading-6'>
                        {
                          blog.content.substring(0, 110)
                        }
                      </p>
                      <div className='flex justify-between h-32 border-t border-gray-200 items-center px-8'>
                        <div className='flex'>
                          <span className='fa fa-eye text-xs text-gray-300'></span>
                          <b className='font-bold text-xs mx-2 text-gray-500'>
                            {
                              blog.views
                            }
                          </b>
                        </div>
                        <div className='flex'>
                          <span className='fa fa-user text-xs text-purple-300'></span>
                          <b className='font-bold text-sm mx-2 text-purple-800'>
                            {
                              blog.author
                            }
                          </b>
                        </div>
                      </div>
                    </Link>
                  ))
                )
                :
                (
                  <p>همچین چیزی یافت نشد !</p>
                )
            }
            {
              !searchedBlog && searchedBlog != "Nothing" && blogs ?
                (
                  blogs?.map((blog, index) => (
                    <Link
                      key={index}
                      to={`/Article/${blog.id}/${blog.title.replaceAll(' ','-')}`}
                      className='w-full flex flex-col justify-between h-[450px] rounded-lg border border-gray-200 shadow-sm my-3'
                    >
                      <img
                        className='w-full rounded-t-lg h-[54%]'
                        src={Img}
                        alt=''
                      />
                      <h2 className='border-b border-gray-100 px-3 mx-3 text-sm font-bold py-5'>
                        {blog.title}
                      </h2>
                      <p className='px-5 text-sm text-justify my-5 leading-6'>
                        {
                          blog.content.substring(0, 110)
                        }
                      </p>
                      <div className='flex justify-between h-32 border-t border-gray-200 items-center px-8'>
                        <div className='flex'>
                          <span className='fa fa-eye text-xs text-gray-300'></span>
                          <b className='font-bold text-xs mx-2 text-gray-500'>
                            {
                              blog.views
                            }
                          </b>
                        </div>
                        <div className='flex'>
                          <span className='fa fa-user text-xs text-purple-300'></span>
                          <b className='font-bold text-sm mx-2 text-purple-800'>
                            {
                              blog.author
                            }
                          </b>
                        </div>
                      </div>
                    </Link>
                  ))
                )
                :
null
            }
          </div>
          <div
            className='flex justify-between w-fit mx-auto 
          [&_>a]:font-bold [&_>a]:w-9 [&_>a]:h-9 [&_>a]:flex [&_>a]:justify-center [&_>a]:items-center
          [&_>a]:border-2 [&_>a]:border-purple-500 [&_>a]:rounded-lg
          hover:[&_>a]:bg-purple-500 hover:[&_>a]:text-white [&_>a]:mx-2 [&_>a]:text-purple-500 
          [&_>a]:pt-1
          '
          >
            {num.map((u, index) => (
              <Link
                key={index}
                className={
                  index == currentPage / 6 ? "bg-purple-500 !text-white" : ""
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
