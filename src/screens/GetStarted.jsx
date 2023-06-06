import React from 'react'
import tranquilmindss from '../assets/tranquilmindss.jpg'
import {Link} from 'react-router-dom'
import Footer from '../components/Footer'

const GetStarted = () => {
  return (
    <div>
      <nav className="flex justify-between m-auto w-11/12 items-center h-20 navflex ">
{/* <div className="w-1/5 "> */}
<Link to="/" class="flex items-center">
      <img src={tranquilmindss} class="h-10 mr-3" alt="Tranquil Logo"/>
      <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Tranquil</span>
  </Link>

    {/* <a href="/Faq" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Home</a>
    <a href="/team" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">About Us</a>
    <a href="/projects" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Our Services</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75]">Contact Us</a>
    <a href="/reports" class="font-bold px-3 py-3  rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500">Login</a> */}
    {/* <a href="/reports" class="font-bold px-10 py-3  rounded-full bg-[#2d4b75] hover:text-slate-900 hover:bg-slate-100 text-[#fff] ml-20">Get Started</a> */}
    <Link to="/LogIn" class="font-bold logbold px-3 py-3 w-1/5 text-center rounded-lg hover:bg-slate-100 hover:text-slate-900 text-[#2d4b75] border border-sky-500">Login</Link>
  
</nav>
<h1 className='w-full flex justify-center text-3xl boldtext'>Wait!, Just before you create an account</h1>
        <p className='w-3/4 m-auto mb-6'>Please fill out this short questionnaire to provide some background information about. This will help us match you with the most suitable therapist for you and help your therapist get to know you.</p>
            <Link to='https://forms.gle/WuFdSnJxnGaDJtZb9'> <button type="button" class="upbutton text-white flex justify-center  bg-[#694b94]  mr-2 mb-2 w-2/5 rounded-md py-2 px-3 m-auto">
              Complete the survey
              </button> </Link>
   <div className='mt-10 formheight'>          
<form className='w-3/5 m-auto border-solid border-2 border-[#694b94] rounded-md p-5 formsmall'>
  <h1>Create your account</h1>
  <div className="mb-6">
    <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
    <input type="email" id="email" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="name@flowbite.com" required/>
  </div>
  <div className="mb-6">
    <label for="phone-number" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone Number</label>
    <input type="phone-number" id="phone-number" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 outline-0 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" placeholder="phone number" required/>
  </div>
  <div className="mb-6">
    <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
    <input type="password" id="password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:outline-blue-500 block w-full p-2.5 outline-0  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  placeholder="password" required/>
  </div>
  <div className="mb-6">
    <label for="repeat-password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Repeat password</label>
    <input type="password" id="repeat-password" class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-0  dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"  placeholder="confirm password" required/>
  </div>
  <div className="flex items-start mb-6">
    <div class="flex items-center h-5">
      <input id="terms" type="checkbox" value="" class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300  dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"  required/>
    </div>
    <label for="terms" class="ml-2 text-sm font-medium text-[#694b94]">I agree with the <a href="/" class="text-[#694b94] hover:underline">terms and conditions</a></label>
  </div>
  <Link to='/LoginTwo'><button type="submit" class="text-white w-full bg-[#694b94] hover:bg-[#d7cbe9] focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center ">Register new account</button></Link>
</form>
</div>

<div className=''>
<Footer/>
</div>

         
            

          
        
    </div>
  )
}

export default GetStarted
