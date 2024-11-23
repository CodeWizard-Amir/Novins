import React, { useEffect } from 'react'
import LOGO from '../assets/img/InShot_۲۰۲۴۰۸۰۱_۱۳۴۴۱۵۲۲۶.jpg'
import { Link } from 'react-router-dom'
export const DtHomePage = () => {
    useEffect(()=>{
        document.addEventListener("scroll" , ()=>{
          const navbar = document.getElementById("navBar")
          if(window.scrollY >= 160)
            {
                navbar.classList.add("navBaranimation")
            }
            else
            {
                navbar.classList.remove("navBaranimation")

                navbar.classList.remove("!fixed")
                navbar.classList.remove("-mt-[95px]")
                navbar.classList.remove("z-50")
                navbar.classList.remove("bg-white")
            }
        })
      },[])
  return (
    <header id='' className='bg-white w-full hidden xl:block'>
        <div className="flex justify-between p-3 border-b border-gray-200">
        <div className="flex items-center w-1/2">
        <div className="w-[110px] h-[70px] bg-whijte">
            <img className='w-full h-full' src={LOGO} alt="" />
        </div>
            <div className="mr-44 p-2">
                <form className='bg-white rounded-full items-center w-[500px] flex justify-between shadow-sm border border-gray-200' action="">
                    <input className='bg-transparent p-3 px-6 outline-none rounded-full w-10/12' type="text" placeholder='جستجو' />
                    <button className='flex justify-center items-center text-lg font-bold w-2/12'><span className='fa m-auto fa-search'></span></button>
                </form>
            </div>
        </div>

            <div className="flex ml-44 justify-center items-center">
                <div className="mx-2">
                    <span className='fab text-2xl text-sky-500 fa-telegram'></span>
                </div>
                <span className='font-bold'>|</span>
                <div className="mx-2">
                    <span className='fab text-2xl text-orange-500 fa-instagram font-bold'></span>
                </div>
                <span className='font-bold'>|</span>
                <div className="mx-2">
                    <span className='fab text-2xl text-green-500 fa-whatsapp'></span>
                </div>
                <span className='font-bold'>|</span>
                <div className="mx-2">
                    <span className='mx-2'>09104816785</span>
                    <span className='fa text-xl text-indigo-500 fa-phone'></span>
                </div>

            </div>
        </div>
        <nav id='navBar' className='p-6 shadow-md w-full pr-96'>
            <ul className='[&_>li]:font-bold flex space-x-12 space-x-reverse'>
                <li><Link to={"/"} className='hover:text-purple-500 duration-700'>صفحه اصلی</Link></li>
                <li><Link className='hover:text-purple-500 duration-700'>نمونه کارها</Link></li>
                <li><Link to={'/Contact-us'} className='hover:text-purple-500 duration-700'>تماس با ما</Link></li>
                <li><Link to={'/about-us'} className='hover:text-purple-500 duration-700'>درباره ما</Link></li>
                <li><Link to={'/Common-Qsn'} className='hover:text-purple-500 duration-700'>سوالات رایج</Link></li>
                <li><Link to={'/Blog'} className='hover:text-purple-500 duration-700'>بلاگ</Link></li>
                <li><Link to={"/Collaboration"} className='hover:text-purple-500 duration-700'>همکاری با ما</Link></li>
            </ul>
        </nav>
    </header>
  )
}
