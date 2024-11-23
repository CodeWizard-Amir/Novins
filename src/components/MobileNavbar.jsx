import React from 'react'
import { Link } from 'react-router-dom'

const MobileNavbar = () => {
  return (
    <div className="flex !z-[100] lg:hidden justify-between w-full items-center px-8 h-[8%] border-t bg-gray-50 fixed top-[92%]">
        <Link className='flex font-bold flex-col items-center justify-center'>
            <span className='fa fa-home text-xl'></span>
            <span className='text-sm'>صفحه اصلی</span>
        </Link>
        <Link className='flex font-bold flex-col items-center justify-center'>
            <span className='fa fa-coffee text-xl'></span>
            <span className='text-sm'>نمونه کارها</span>
        </Link>
        <Link className='flex font-bold flex-col items-center justify-center'>
            <span className='fa fa-users text-xl'></span>
            <span className='text-sm'>درباره ما</span>
        </Link>
        <Link className='flex font-bold flex-col items-center justify-center'>
            <span className='fa fa-phone text-xl'></span>
            <span className='text-sm'>تماس با ما</span>
        </Link>
    </div>
  )
}

export default MobileNavbar