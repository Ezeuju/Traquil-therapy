import React from 'react'
// import AppNavbar from '../components/AppNavbar'
import CardList from '../components/CardList'
import faceOne from '../assets/faceOne.jpeg'
import faceTwo from '../assets/faceTwo.jpeg'
import faceThree from '../assets/faceThree.jpeg'
import faceFour from '../assets/faceFour.jpeg'
import faceFive from '../assets/faceFive.jpeg'
import faceSix from '../assets/faceSix.jpeg'
import faceSeven from '../assets/faceSeven.jpeg'
import faceEight from  '../assets/faceEight.jpeg'
import faceNine from '../assets/faceNine.png'
import Footer from '../components/Footer';
import AppNavbar from '../components/AppNavbar';
import Navbar from '../components/Navbar';

const Reviews = () => {
  const cardData = [
    {
      image:   <img src={faceOne} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Dr Angela Luis',
      description: 'Amazing. Helped me in so many ways.',
    },
    {
      image:   <img src={faceTwo} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Kimberly Taylor',
      description: 'I always looks forward to my sessions with Kimberly and each time I express how great it was and how well she understands me and is able to ask me the right questions. ',
    },
    {
      image:   <img src={faceThree} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Candyn Burnside',
      description: 'Always appreciate your guidance, kind words, and knowledge.',
    },
    {
      image:   <img src={faceFour} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Regina Holley',
      description: 'Wonderful',
    },
    {
      image:   <img src={faceFive} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Adam Smith',
      description: 'Mis Carrillo has help my son understand life more and shows him how to express himself. My son and I have great conversations. He has really turn over a new leaf. Thank you Adams.',
    },
    {
      image:   <img src={faceSix} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Chanel Mulbah',
      description: 'Very respectful and responsible',
    },
    {
      image:   <img src={faceSeven} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Anthony Russel',
      description: 'My son really likes working with him. He has even stated that he’s been able to solve problems in his life that he hasn’t even verbalized with Anthony just from the positive effects of the work they do together. ',
    },
    {
      image:   <img src={faceEight} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Abdias Gomez',
      description: 'Mr. Gomez is very kind and supportive and engaging.  He connected with my son quite easily.  I am very happy we were paired with him!',
    },
    {
      image:   <img src={faceNine} alt="" className='w-2/5 rounded-full border-solid border-4 border-sky-500 inset-0 m-auto mt-3'/>,
      title: 'Susan Bergen',
      description: 'Wonderful',
    },

    // Add more objects for additional cards
  ];
  return (
    <div>
      <Navbar />
      <AppNavbar />
      <div className='bg-violet-300 sm:h-90 flex flex-col items-center pt-10  w-full'>
        <h1 className='text-[#020101]'>Traquil reviews</h1>
        <p className='text-gray-950 pb-10 text-center w-4/5 m-auto'>These quotes represent a few of the many positive reviews that we have received for therapists who work with Teen Counseling. We don't pay anyone to provide their review and they are all made voluntarily. Some people's experience receiving therapy with Teen Counseling might be different. If you would like to review your therapist, please send your review to contact@teencounseling.com. These quotes represent a few of the many positive reviews that we have received for therapists who work with BetterHelp.</p>
      </div>
      <div className='bg-violet-300 w-full pb-10'>
        <CardList data={cardData} />
      </div>
      
      <Footer/>
      
    </div>
  )
}

export default Reviews
