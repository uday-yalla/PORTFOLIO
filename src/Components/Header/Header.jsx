import React from 'react'
import assets from '../../assets/assets'


const Header = () => {
  return (
    
    <div className='h-full flex align-middle items-center justify-center  mt-20   gap-12 font-Outfit bg-BgColor sm:flex-col'>
        <div className='flex  flex-col  justify-between gap-2'>
            <h2 className=' text-5xl text-TextColor sm:text-2xl'>Hey There..!</h2>
            <h2 className='text-5xl text-TextColor  sm:text-2xl' >I'm Frontend<span className='font-bold text-violet-700 text-5xl  sm:text-2xl'>Developer</span>|</h2>
           <div className='flex items-start justify-start gap-2 mt-5'>
           <button className="text-red bg-BgColor hover:before:bg-redborder-red-500 relative h-[40px] w-40 overflow-hidden border border-red-500  px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full"><span className="relative z-10">Hire Me</span></button>
           <button className="text-red bg-BgColor hover:before:bg-redborder-red-500 relative h-[40px] w-40 overflow-hidden border border-red-500  px-3 text-red-500 shadow-2xl transition-all before:absolute before:bottom-0 before:left-0 before:top-0 before:z-0 before:h-full before:w-0 before:bg-red-500 before:transition-all before:duration-500 hover:text-white hover:shadow-red-500 hover:before:left-0 hover:before:w-full "><span className="relative z-10">Download CV</span></button>
           </div>
        </div>
        <div>
            <img className=' h-[360px] w-[240px] ' src={assets.Heroimage} alt="" />
        </div>
    </div>
  )
}

export default Header