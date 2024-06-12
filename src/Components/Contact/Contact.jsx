import React from 'react'
import assets from '../../assets/assets'

const Contact = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-24 ' id='Contact'>
              <hr className='border border-BgBorder w-[80%] mb-5 ' />

        <div className='flex justify-center items-center gap-3'>
        <img className='w-[40px]' src= {assets.contacticn}alt="" />
        <h1 className=' font-bold text-3xl text-TextColor'>Contact</h1> 
        </div>
        <div className='flex flex-col items-center justify-center  gap-2 mt-10'>
            <input className='  h-[40px] w-[500px] border border-zinc-600 p-3 rounded-[50px] outline-indigo-800 sm:w-[350px]' type="text" placeholder='Enter your name' />
            <input className='  h-[40px] w-[500px] border border-zinc-600 p-3 rounded-[50px] outline-indigo-800 sm:w-[350px]' type="email" placeholder='Enter your Email'/>
            <input className='  h-[40px] w-[500px] border border-zinc-600 p-3 rounded-[50px] outline-indigo-800 sm:w-[350px]' type="text" placeholder='Subject for mail' />
           <textarea className='h-[100px] w-[500px] border border-zinc-600 p-3 rounded-[10px] sm:w-[350px]' name="" id="" placeholder='Drop a message'></textarea>
           <button className="relative flex h-[40px] w-[500px]  rounded-[50px] items-center justify-center overflow-hidden bg-violet-800 text-white shadow-2xl transition-all before:absolute before:h-0 before:w-0 before:rounded-full before:bg-pink-600 before:duration-500 before:ease-out hover:shadow-pink-600 hover:before:h-56 hover:before:w-[500px] sm:w-[350px]">
      <span className="relative z-10">Send</span>
    </button>        </div>

    </div>
  )
}

export default Contact