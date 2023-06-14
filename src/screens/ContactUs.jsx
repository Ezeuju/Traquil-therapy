import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import AppNavbar from '../components/AppNavbar';

const ContactUs = () => {
  return (
    <div>
      <Navbar />
      <AppNavbar />
      <div className="w-3/4 m-auto">
        <h1 className="text-center">Contact us</h1>
        <p className=" w-full flex justify-center center">
          Use this form to reach out to our Customer Success Team regarding any
          questions, concerns, or feedback. You can also view our FAQ for quick
          answers to commonly asked questions.
        </p>
      </div>
      <div className="w-4/5 m-auto">
        <div className="">
          <p>Type of contact</p>
          <form action="/action_page.php" className="space-y-2 w-full">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle1"
                name="vehicle1"
                value="Bike"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle1" className="ml-2 text-gray-700">
                I am a registered client and I need support.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle2"
                name="vehicle2"
                value="Car"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle2" className="ml-2 text-gray-700">
                I am a current BetterHelp therapist and I need support.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle3" className="ml-2 text-gray-700">
                I am a therapist interested in joining or a current applicant.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle3" className="ml-2 text-gray-700">
                I have a billing related question.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle3" className="ml-2 text-gray-700">
                I have a press-related question.
              </label>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="vehicle3"
                name="vehicle3"
                value="Boat"
                className="rounded text-indigo-600 focus:ring-indigo-500 h-4 w-4"
              />
              <label htmlFor="vehicle3" className="ml-2 text-gray-700">
                I have a business-related inquiry.
              </label>
            </div>
            <br />
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                First Name
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-violet-300 formy h-10 pl-5 border-none focus:outline-none focus:ring focus:border-blue-500  text-gray-900 text-sm rounded-lg block w-2/5   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="John"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Last Name
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-violet-300 h-10 formy pl-5 border-none focus:outline-none focus:ring focus:border-blue-500  text-gray-900 text-sm rounded-lg block w-2/5   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Doe"
                required
              />
            </div>
            <div class="mb-6">
              <label
                for="default-input"
                class="block mb-2 text-sm font-medium text-gray-900 "
              >
                Email Address
              </label>
              <input
                type="text"
                id="default-input"
                class="bg-violet-300 h-10 pl-5 formy border-none focus:outline-none focus:ring focus:border-blue-500  text-gray-900 text-sm rounded-lg block w-2/5   dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="john.doe@gmail.com"
                required
              />
            </div>
            <label
              for="message"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Your message
            </label>
            <textarea
              id="message"
              rows="4"
              class="block p-2.5 mb-4 w-2/5 formy text-sm text-gray-900 bg-violet-300 rounded-lg border   focus:outline-none focus:ring focus:border-blue-500  "
              placeholder="Write your thoughts here..."
            ></textarea>
           <a href='./LoginTwo'><input
              type="submit"
              value="Submit"
              className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
            /></a>
          </form>
        </div>
        <div className="flex items-center justify-between w-2/6 mt-10 contact">
          <p className="">Contact Us @:</p>
          <span className="text-[#fff]">
            <a href="mailto:your-email@gmail.com text-[#fff]">
              your-email@gmail.com
            </a>
          </span>
        </div>
      </div>
      <div className="">
           <Footer/>
        </div>
      </div>
   
    
  );
};

export default ContactUs;
