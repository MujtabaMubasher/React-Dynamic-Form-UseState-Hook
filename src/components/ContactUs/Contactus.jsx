import React from 'react'
import { FaRegMessage } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";


function Contactus() {
    return (
        <>
            <div className='pl-48 mt-8  min w-3/4'>
                <h1 className='text-4xl font-bold '>Contact Us</h1>
                <p className='mt-3 text-xs'>LET’S CONNECT: WE’RE HERE TO HELP, AND WE’D LOVE TO HEAR FROM YOU! WHETHER YOU HAVE A QUESTION, COMMENT, OR JUST WANT TO CHAT , YOU CAN REACH OUT TO US THROUGH THE CONTACT FORM OF THIS PAGE, OR BY PHONE, EMAIL, OR SOCIAL MEDIA. </p>
            </div>

            <div className='flex flex-wrap'>
                <div style={{width: "30%", padding: "30px"}} className='ml-48 mt-20'>
                    <div >
                        <div className='flex'>
                            <span className='flex gap-1 bg-black w-48 px-2 py-3 border border-black rounded-lg justify-center'>
                                <FaRegMessage className='text-white' />
                                <p className='text-xs text-white'>VIA SUPPORT CHAT</p>
                            </span>
                            <span className='flex gap-1 bg-black w-48 p-2 items-center justify-center px-2 py-3 border border-black rounded-lg ml-10'>
                                <FaPhoneAlt className='text-white' />
                                <p className='text-xs text-white'>VIA CALL</p>
                            </span>
                        </div>
                        <span className='flex gap-1 mt-2 p-2 items-center justify-center px-2 py-3 border border-black rounded-lg'> 
                            <FaPhoneAlt />
                            <p className='text-xs'>VIA EMAIL FORM</p>
                        </span>
                    </div>

                    <div>
                        <form action="" className="flex flex-col gap-4 p-4 rounded-md ">
                            <label htmlFor="name" className="font-medium text-gray-700">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="Enter your name"
                                required
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label htmlFor="email" className="font-medium text-gray-700">E-mail</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="Enter your email"
                                required
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                            />

                            <label htmlFor="message" className="font-medium text-gray-700">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                placeholder="Enter your message"
                                required
                                className="p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
                                rows="4"
                            ></textarea>

                            <button
                                type="submit"
                                className="flex justify-center  p-2 w-40 bg-black text-white rounded transition-all ml-auto"
                            >
                                Submit
                            </button>
                        </form>

                    </div>
                </div>
                <div className='ml-20'>
                    <img src="/Hero.png" alt="" style={{width: "650px"}} />
                </div>

            </div>
        </>
    )
}

export default Contactus