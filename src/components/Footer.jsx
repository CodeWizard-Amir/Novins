import { Link } from 'react-router-dom'
import { FaPhoneFlip } from "react-icons/fa6";
import { IoLocationSharp } from "react-icons/io5";

const Footer = () => {
  return (
    <>
      <footer className='mb-[70px] lg:mb-0'>
        <section className='flex flex-wrap bg-gradient-to-r from-emerald-400 px-32 to-cyan-400 justify-between lg:!p-10 !p-2  items-center'>
          <div className="lg:w-[100%] xl:w-[22%] my-4 xl:my-0 w-full h-64 p-5 shadow-md border rounded-md bg-white">
            <h2 className='text-indigo-600 text-xl font-bold my-5'>شرکت دانش بنیان نوینان</h2>
            <p className='text-[15px] mx-4 text-justify leading-6'>
              بزرگترین شرکت دانش بنیان نرم‌افزاری کشور در حوزه پیاده سازی و توسعه پلتفرم های مختلف (وب و اپلیکیشن) توسط حرفه‌ای ترین تیم برنامه‌نویسان و مشاوران مارکتینگ با رویکردی پیشرو و پرشتاب در عرصه فناوری و فضای دیجیتال
            </p>
          </div>
          <div className="lg:w-[49%] xl:w-[22%] my-4 xl:my-0 w-full h-64 p-5 shadow-md border rounded-md bg-white">
            <h2 className='text-indigo-600 text-[17px] font-bold my-3'>
              ارتباط با ما
            </h2>
            <ul className='flex space-y-3 font-bold flex-col'>
              <li className='flex'>
                <FaPhoneFlip className='mx-1 my-[1px]' />
                026-32541057</li>
              <li className='flex'>
                <FaPhoneFlip className='mx-1 my-[1px]' />
                026-36547841</li>
              <li className='flex'>
                <FaPhoneFlip className='mx-1 my-[1px]' />
                026-35214789</li>
            </ul>
            <p className='my-8 flex  items-center'>
              <IoLocationSharp />
              کرج  محمدشهر محله الهیه </p>
          </div>
          <div className="lg:w-[49%] xl:w-[22%] my-4 xl:my-0 w-full h-64 p-4 shadow-md border rounded-md bg-white">
            <h2 className='text-indigo-600 text-[17px] font-bold my-2'>
              برای دریافت مشاوره رایگان فرم زیر را پرکنید
            </h2>
            <div className="flex flex-col p-1">
              <input className='px-5 py-3 rounded-md border shadow-sm my-1' type="text" placeholder='نام خود را وارد کنید' />
              <input className='px-5 py-3 rounded-md border shadow-sm my-1' type="text" placeholder='ایمیل یا شماره تماس ' />
              <button className='border-2 border-indigo-600 w-fit rounded-md text-indigo-600 my-2 py-2 font-bold hover:bg-indigo-600 hover:text-white px-10'>فرستادن </button>
            </div>
          </div>
        </section>
        <p className='w-full bg-purple-950 text-center text-white p-5'>
          تمامی حقوق متعلق به <span className='fa fa-copyright'></span> <Link>نوینان</Link> است</p>
        <div className="w-full flex border-t-2  p-4  justify-center items-center">
          <button id="programer-bio" className="hover:text-orange-100 duration-500">طراح و برنامه نویس امیرسجاد نوری</button>
          <a target="_blank" className="mt-1 mx-2 text-xl text-orange-500 hover:text-orange-400" href="https://instagram.com/amirsajjad_nouri"><i className="fab fa-instagram"></i></a>
          <a target="_blank" className="mt-1  text-xl text-green-500 hover:text-green-400" href="https://github.com/CodeWizard-Amir"><i className="fab fa-github"></i></a>
        </div>
      </footer>
    </>
  )
}

export default Footer