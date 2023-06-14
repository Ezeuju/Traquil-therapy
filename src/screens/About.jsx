import React from 'react'
import Navbar from '../components/Navbar';
import AppNavbar from '../components/AppNavbar';
import Footer from '../components/Footer';

const About = () => {
  return (
    <div>
      <Navbar />
      <AppNavbar />

      <h1 className='text-center py-2 text-[#694b94]'>Welcome to tranquil therapy</h1>
      <p className='w-4/5 m-auto'>Tranquil therapy was birthed out of hope and compassion for people who struggle with different kinds of mental challenge
      Personally, I have spoken with a lot of young people, and have discovered that a lot of them struggle with depression, anxiety, and low self-esteem
      Tranquil therapy also offers counselling services to people who feel confused or are in doubts about certain situations in life.
      It is also worthy to note that this project was built as a portfolio project for alx software engineering program. The program held for a period of 12months(August 2022-August 2023).
      Here are some related links to the project source:
     </p>
     <div className='py-4'>
     <ul className='w-4/5 m-auto'>
        <a href='https://github.com/Ezeuju/therapy'><li>Github</li></a>
        <li>You can also view the social media handles of each team member that contibuted to the devlopment of the project</li>
        <a href='https://www.linkedin.com/in/obianuju-ezechukwu-632006260/'><li>LinkedIn@Christy</li></a>
        <a href='https://www.linkedin.com/in/nneeh-daniel-020b77248'><li>LinkedIn@daniel</li></a>
        <a href='https://twitter.com/ObianujuEzechu1'><li>Twitter@Christy</li></a>
        <a href='https://twitter.com/chrisdanielwise?t=Qmr9--nG0ktBIq5uYBP0aQ&s=09'><li>Twitter@daniel</li></a>
     </ul>
     </div>
     <Footer />
    </div>
  )
}

export default About
