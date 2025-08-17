import React from 'react'

const NewsletterBox = () => {
    const onSubmitHandeler = (event)=>{
            event.preventDefault();
    }
  return (
    <div className='text-center'>
      <p className='text-2xl font-medium text-gray-800'>Subscribe Now & get 20% offer</p>
      <p className='text-gray-400 mt-3'>
        Subarna is simply dummy text of the printing ans typesetting industry
      </p>
      <form onSubmit={onSubmitHandeler} className='w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3'>
        <input type="eamil" className='w-full sm:flex-1 outline-none' placeholder='Enter your email' required/>
        <button type='submit'  className='bg-black text-white text-xs px-10 py-4 '>Subscribe</button>
      </form>
    </div>
  )
}

export default NewsletterBox
