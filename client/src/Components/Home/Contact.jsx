import React from 'react'
import contactImage from "../../assets/contact.jpg"
import Navbar from './Navbar'
const Contact = () => {
  return (
    <>
    
    <div className='bg-blue-300 flex  justify-center items-center h-[100vh] overflow-y-scroll '>
        <div className='bg-white m-10'>
          <figure className='text-center'>
            <img src={contactImage} alt="contact-image" width={350} />
            </figure>
            <div className='border-2 border-green-600 w-96 m-2 p-2 '>
              <p>We're thrilled you're interested in Career Cart!</p>
              <h1 className='font-bold text-2xl '>Let's Chat!</h1>
             <div className="flex ">
             <a href="mailto:codelover12128@gmail.com" className='w-full text-center bg-blue-600 text-white p-2 m-3' ><button >Mail us</button></a>
              <a href="tel:+9183734874" className='w-full text-center bg-green-600 p-3 m-3'><button>Contact us</button></a>
             </div>

             <h1 className='font-bold text-2xl '>Meet the team :</h1>
             <p>Want to learn more about the people behind Career Cart? Click on the profiles below to see our bios and connect with us individually:</p>
             <ul className='list-disc p-3'> 
              <li>[Team member 1 name] (link to their profile within Career Cart)</li>
              <li>[Team member 2 name] (link to their profile within Career Cart)</li>
              <li>[Add more team profiles as needed]</li>
             </ul>
            </div>
        </div>
    </div>
    </>
  )
}

export default Contact