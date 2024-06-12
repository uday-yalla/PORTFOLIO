import React from 'react'
import assets from '../../assets/assets'
const About = () => {
  return (
    <div className=' h-screen mt-24 flex flex-col items-center justify-center sm:h-full' id='About'>
       <hr className='border border-BgBorder w-[80%] mb-5 ' />
        <div className='flex justify-center items-center gap-3'>
        <img className='w-[40px]' src= {assets.usericn}alt="" />
        <h1 className=' font-bold text-3xl text-TextColor'>About Me</h1> 
        </div>  
        <div className='flex items-center justify-center gap-40  mt-14 '>
         <img className='h-[400px] w-[400px] sm:hidden' src={assets.aboutpic} alt="" />
         <div className='w-[30%] gap-5  rounded p-5 shadow-[0_10px_20px_rgba(74,_20,_140,_0.9)] sm:w-[80%]'>
          <h2 className='font-bold  text-3xl ml-[12%] text-TextColor'>Uday Kiran Yalla</h2>
          <h3 className='font-medium text-2xl ml-[13%] text-TextColor'>frontend-Developer</h3>
          <hr  className='border border-violet-900 mt-2 text-TextColor'/>
          <p className='ml-4 text-[17px] text-TextColor'>I’m a passionate ReactJS developer experienced in building dynamic and responsive web applications. I thrive on turning
            ideas into reality through clean, maintainable code and innovative problem-solving. With a strong foundation in front-end
            development, I specialize in crafting intuitive user interfaces and seamless user experiences.</p>
         </div>
        </div>
    </div>
  )
}

export default About