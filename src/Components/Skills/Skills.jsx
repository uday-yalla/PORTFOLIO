import React, { useState } from 'react' 
import { Data, newData } from '../../assets/Skills'
import assets from '../../assets/assets';
const Skills = () => {
  const[showSkills,setShowSkills]=useState(true);
  return (
    <div className='mt-20 h-full  flex flex-col items-center justify-center gap-10'id='Skills'> 
      <hr className='border border-BgBorder w-[80%] mb-5 ' />
    <div className='flex justify-center items-center gap-3'>
        <img className='w-[40px]' src= {assets.skillsicn}alt="" />
        <h1 className=' font-bold text-3xl text-TextColor'>Skills</h1> 
        </div>    
      <div className='border border-zinc-700 rounded-3xl  '>
        <button onClick={()=>setShowSkills(true)} className={`border gap-5 border-zinc-700 px-4 py-2 ${showSkills=== true ? " bg-violet-600 text-white":"bg-white text-black" } rounded-3xl`}>Current</button>
        <button onClick={()=>setShowSkills(false)} className={`border gap-5 border-zinc-700 px-4 py-2 ${showSkills=== false ? " bg-violet-600 text-white":"bg-white text-black" } rounded-3xl`} > Learning </button>
      </div>
     {showSkills? <div className='grid  grid-cols-4 gap-5 sm:grid-cols-2'>
        {Data.map((item,name)=>{
          return (
            <div key={name} className='h-[100px] w-[150px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px]  text-TextColor p-2 flex flex-col items-center gap-3 rounded-[5px] hover:shadow-[0_20px_50px_rgba(8,_112,_184,_0.7)]'>
              <img className='w-[40px] h-[40px]:' src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>:
      <div className=' grid  grid-cols-4 gap-5  sm:grid-cols-2'>
        {newData.map((item,name)=>{
          return (
            <div key={name} className='h-[100px] w-[150px] shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] text-TextColor p-2 flex flex-col items-center gap-3 rounded-[5px] hover:shadow-[0_10px_20px_rgba(240,_46,_170,_0.7)]'>
              <img className='w-[40px] h-[40px]:' src={item.icon} alt="" />
              <p>{item.name}</p>
            </div>
          )
        })}
      </div>}
       </div>
   
  )
}

export default Skills