import React from 'react'
import { projectData } from '../../assets/Projects'
import assets from '../../assets/assets'

const Projects = () => {
  return (
    <div className='  mt-20 flex flex-col items-center justify-center'id='Projects'>
     <hr className='border border-BgBorder w-[80%] mb-5 ' />
      <div className='flex justify-center items-center gap-3'>
        <img className='w-[40px]' src= {assets.projectsicn}alt="" />
        <h1 className=' font-bold text-3xl text-TextColor'>Projects</h1> 
        </div>     
        <div className='grid grid-cols-4 gap-5  mt-16 sm:grid-cols-1'>
         {projectData.map((item,index)=>{
          return(
            <div key={index} className="relative group bg-white duration-500 cursor-pointer group overflow-hidden  text-gray-50 h-60 w-72 rounded-2xl hover:duration-700  shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] ">
            <div className="w-72 h-60 p-3">
              <img className='  h-44 w-72 rounded-[20px]' src={item.image} alt="" />
          </div>
             <div className="absolute bg-gray-50 bg-BgColor -bottom-24 w-72 p-3 flex flex-col items-center gap-[10px]  group-hover:-bottom-0 group-hover:duration-600 duration-500">
             <span className="text-violet-900 font-bold text-[15px]">{item.name}</span>
             <span className="text-gray-800  text-sm">{item.description}</span>
               <div className='flex items-center justify-center  gap-5'>
              <a href=""><img className='h-[25px] w-[25px] ' src={assets.githubicn} alt="" /></a> 
              <a href=""> <img className='h-[23px] w-[23px]' src={assets.linkicn} alt="" /></a> 
                </div>
  
           </div>
  

       </div>
          )
         })}
        
          
          </div> 
    </div>
  )
}

export default Projects