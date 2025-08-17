import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
    <div>
      <div className='flex felx-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm '>
        <div>
            <img src={assets.subarna_logo} alt="" className='mb-5 w-32' />
            <p className='w-full md:w-2/3 text-gray-600'>
                subaran 
            </p>
        </div>
        <div className=''>
                <p className='text-xl font-medium mb-5'>COMPANY</p>
                <ul className='flex flex-col gap-1 text-gray-600'>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy policy</li>
                </ul>
        </div>
        <div>
            <p className='tex-xl font-medium mb-5'> GET IN TOUCH</p>
            <ul className='flex flex-col gap-1 text-gray-600'>
                <li>+91-****-***-***</li>
                <li>contact@gmail.com</li>
            </ul>
        </div>
      </div>

      <div>
        <hr />
        <p className='py-5 text-sm text-center'>CopyRight 2025@ Subarna.com allRights Recived </p>
      </div>
    </div>
  )
}

export default Footer
