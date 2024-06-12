import  React from 'react'
import assets from '../../assets/assets'
const Navbar = ({toggleTheme}) => {
    const Links =[
        {name:'Home',path:'/'},
        {name:'About Me',path:'#About'},
        {name:'Skills',path:'#Skills'},
        {name:'Projects',path:'#Projects'},
        {name:'Education',path:'#Education'},   
        {name:'Contact',path:'#Contact'},     
    ]
 
  return (
    <div>
    <nav className='flex items-center justify-around p-5 shadow-lg font-Outfit bg-BgColor sm:justify-center gap-64 px-0 py-3 '>
        <h1 className=' text-violet-700  text-4xl font-bold sm:text-2xl '>UDAY.</h1>
        <ul className='flex items-center justify-between gap-7 cursor-pointer sm:hidden'>
         {Links.map((item,index)=>(         
                <li key={index} className='text-TextColor hover:border-violet-700 hover:border-b-4 hover:text-violet-800'><a href={item.path}>{item.name}</a></li>
         ))}
        </ul>
        <img  className=' w-[30px] cursor-pointer ' src={assets.Themeicn} alt=""  onClick={toggleTheme}/>
    </nav>
    </div>
  )
}

export default Navbar