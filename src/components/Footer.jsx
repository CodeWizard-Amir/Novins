import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <>
        <footer className='mb-[70px] lg:mb-0'>
        <p className='p-20 bg-indigo-600'></p>
            <p className='w-full bg-purple-950 text-center text-white p-5'>تمامی حقوق متعلق به <span className='fa fa-copyright'></span> <Link>نوینان</Link> است</p>
        </footer>
    </>
  )
}

export default Footer