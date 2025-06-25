import React from 'react'

const NatureWebsite = () => {
  return (
   <div>
      <nav className='flex justify-between p-4 bg-gray-200 text-black'>
         <div className='font-bold text-3xl'>Travel<span className='text-orange-700'>X</span></div>
         <ul className='flex space-x-5 font-semibold text-lg'>
            <li>Home</li>
            <li>Tours</li>
            <li>About</li>
            <li>Blog</li>
            <li>Contact</li>
         </ul>
         <div className='px-2'>
            <input className='bg-white rounded-md p-1 mr-4 text-center' type="text" placeholder='Search' />
            <label className='text-md' htmlFor="">Call Us</label>
            <span className='text-orange-700 text-md pl-2'>1-806-607-4829</span>
         </div>
      </nav>

      <section className='relative h-screen bg-cover bg-center' style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
         <div className='flex flex-col items-center justify-center  h-full text-center'>
            <h1 className='text-4xl text-white font-extrabold'>Explore the World with Travel<span className='text-yellow-300 mb-4 font-extrabold'>X</span></h1>
            <p className='text-white text-lg mb-6'>A navbar (navigation bar) is a UI component usually placed at the top of the page to help users navigate between different sections or pages of a website.</p>
            <button className='hover:bg-yellow-600 rounded-full p bg-yellow-400 text-blue-900 px-6 py-3 p-2 shadow-lg transition duration-300'>Start Your Journey</button>
         </div>
      </section>

      <section className='py-16 px-6 bg-gray-50'>
         <h2 className='text-3xl font-bold text-blue-900 text-center mb-10'>Popular <span className='text-orange-600'>Destinations</span></h2>
         <div className='grid gap-8 sm:grid-cols-2 lg:grid-cols-4'>
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
               <img src="https://images.unsplash.com/photo-1506744038136-46273834b3fb" className='h-48 w-full object-cover' alt=""  />
               <p className='text-xl font-semibold text-blue-800'>Bali, Indonesia</p>
            </div>
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
               <img src="https://images.unsplash.com/photo-1502602898657-3e91760cbb34" className='h-48 w-full object-cover' alt="" />
               <p className='text-xl font-semibold text-blue-800'>Kerala, India</p>
            </div>
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
               <img src="https://images.unsplash.com/photo-1505245208761-ba872912fac0" className='h-48 w-full object-cover' alt="" />
               <p className='text-xl font-semibold text-blue-800'>Phuket, Thailand</p>
            </div>
            <div className='bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300'>
               <img src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?q=80&w=2074&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='h-48 w-full object-cover' alt="" />
               <p className='text-xl font-semibold text-blue-800'>Paris, France</p>
            </div>
         </div>
      </section>

      <section className='py-16 px-6 bg-white'>
         <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Get in <span className="text-yellow-500">Touch</span></h2>

         <form action="" className='max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md grid grid-cols-1 gap-6'>
            <div className='grid md:grid-cols-2 gap-4'>
               <input type="text" placeholder='Your Name' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400' />
               <input type="text" placeholder='Your Email' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400' />
            </div>
            <input type="text" placeholder='Subject' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400' />
            <textarea type="text" placeholder='Your Message' className='p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none'></textarea>
            <button className='bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 rounded-md transition duration-300'>Send Message</button>
         </form>
      </section>
    </div>

  )
}

export default NatureWebsite