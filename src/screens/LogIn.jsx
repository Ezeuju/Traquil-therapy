import React from 'react'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import {Link} from  'react-router-dom';
import AppNavbar from '../components/AppNavbar';

// import counselling from '../assets/counselling.jpg'

const LogIn = () => {
  return (
    <div>
      <Navbar />
      <AppNavbar />
      
<div className="bg-violet-300">
    <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
        <div class="flex flex-col justify-center">
            <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Tranquil therapy is the world's largest therapy platform</h1>
            <p className="mb-6 text-lg font-normal text-[#fff] lg:text-xl ">We are passionate and compassionate professionals, driven by the mission of helping more people live a better and happier life every day. We are growing fast and always looking for new talent. If you love people and like challenges - come and join us!</p>
            <Link to="/GetStarted" class="text-white dark:text-blue-500 hover:underline font-medium text-lg inline-flex items-center">Get Started
            {/* <div className="you w-full h-screen bg-no-repeat bg-cover flex items-center"
  style={{backgroundImage:`url(${counselling})`}}> </div> */}
            </Link>
        </div>
        <div>
            <div className="w-full lg:max-w-xl p-6 space-y-8 sm:p-8 bg-white rounded-lg shadow-xl dark:bg-gray-800">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                    Sign in to Flowbite
                </h2>
                <form className="mt-8 space-y-6" action="#">
                    <div>
                        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                        <input type="email" name="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none" placeholder="name@company.com" required/>
                    </div>
                    <div>
                        <label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your password</label>
                        <input type="password" name="password" id="password" placeholder="••••••••" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 outline-none " required/>
                    </div>
                    <div className="flex items-start">
                        <div class="flex items-center h-5">
                            <input id="remember" aria-describedby="remember" name="remember" type="checkbox" class="w-4 h-4 border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600" required/>
                        </div>
                        <div class="ml-3 text-sm">
                        <label for="remember" class="font-medium text-gray-500 dark:text-gray-400">Remember this device</label>
                        </div>
                        <a href="/" class="ml-auto text-sm font-medium text-blue-600 hover:underline dark:text-blue-500">Lost Password?</a>
                    </div>
                   <Link to='/Dashboard'><button type="submit" class="w-full px-5 py-2 text-base font-medium text-center mt-10 text-white bg-[#694b94] rounded-lg hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 sm:w-auto  dark:focus:ring-blue-800">Login to your account</button></Link>
                    <div class="text-sm font-medium text-gray-900 dark:text-white">
                        Not registered yet? <a href="/GetStarted"class="text-blue-600 hover:underline dark:text-blue-500">Create account</a>
                    </div>
                </form>
            </div>
        </div>
    </div>
</div>
  <Footer/>
    </div>
  )
}

export default LogIn
