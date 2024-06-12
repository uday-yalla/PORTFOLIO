import React from 'react'
import { educationData } from '../../assets/Education'
import assets from '../../assets/assets'

const Education = () => {
  return (
    <div className='flex flex-col items-center justify-center  mt-24' id='Education'>
                      <hr className='border border-BgBorder w-[80%] mb-5 ' />
        <div className='flex justify-center items-center gap-3'>
        <img className='w-[40px]' src= {assets.educationicn}alt="" />
        <h1 className=' font-bold text-3xl text-TextColor'>Education</h1> 
        </div>
        <div className='flex flex-col gap-5 mt-12'>
            {educationData.map((item,index)=>{
                return(
                    <div key={index} className='flex items-start justify-start bg-white p-3  gap-7 shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] transform transition duration-300 hover:scale-125'>
                        <img className='h-[100px] w-[200px]' src={item.image} alt="" />
                        <div>
                            <h2 className='text-2xl  font-bold text-violet-800'>{item.name}</h2>
                            <p className='  text-xl text-red-600'>{item.schoolOrCollege}</p>
                            <div className='flex gap-3 text-blue-900'>
                            <p>{item.fromTo}</p>|
                            <p>{item.statusOrPrecentage}</p>
                            </div>
                          
                        </div>

                    </div>
                )
            })}
        </div>
    </div>
  )
}

export default Education