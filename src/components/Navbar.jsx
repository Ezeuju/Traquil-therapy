import React from 'react';
import logos from '../assets/logos.png';
import sim from '../assets/sim.png';
import {Link} from 'react-router-dom';
import tranquilmindss from '../assets/tranquilmindss.jpg'


const navbar = () => {
  return (
    <div>
   <nav class="bg-white   w-full  top-0 left-0">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-4">
  <a href="/" class="flex items-center">
      <img src={tranquilmindss} class="h-10 mr-3" alt="Tranquil Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tranquil</span>
  </a>
  
  <div class="flex md:order-2 py-4">
      <Link to='/GetStarted'><button type="button" class="text-white bg-[#694b94] hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0  dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button></Link>
      <button data-collapse-toggle="navbar-sticky" type="button" class="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
      </button>
  </div>
  <div class="items-center justify-between hamburger w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
    <ul class="flex flex-col p-4 md:p-0 mt-4  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white">
      <li>
        <a href="/About" class="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-[#694b94] md:p-0" aria-current="page">About Us</a>
      </li>
      <li>
        <a href="/Faq" class="block py-2 pl-3 pr-4 text-gray-900 bg-blue-700 rounded md:bg-transparent md:text-[#694b94] md:p-0" aria-current="page">Faq</a>
      </li>
      <li>
        <a href="/Reviews" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Reviews</a>
      </li>
      <li>
        <a href="/ContactUs" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
      </li>
      <li>
        <a href="/LogIn" class="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-[#694b94] md:p-0   dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">LogIn</a>
      </li>
     
    </ul>
  </div>
  </div>
</nav>
{/* <nav className="flex justify-around space-x-4 w-full items-center h-20  ">
<div className="w-1/5 ">
    <img src={logos} alt="" className='w-1/5  h-12 object-contain'/>
</div>
  <div className='Ulinks w-3/5 flex justify-around  '>
    <a href="/Faq" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Home</a>
    <a href="/team" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">About Us</a>
    <a href="/projects" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Our Services</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Contact Us</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500">Login</a>
    <a href="/reports" class="font-bold px-10 py-3  rounded-full bg-[#2d4b75] hover:text-slate-900 hover:bg-slate-100 text-[#fff] ml-10">Get Started</a>
  </div>
</nav> */}
    </div>
  )
}

export default navbar


