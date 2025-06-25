import DestinationsSection from "./DestinationsSection";


const UserCard = () => {

  return (
    <div>
    <nav class="fixed w-full top-0 z-50 bg-white/70 backdrop-blur-md shadow-sm px-6 py-4 flex items-center justify-between">
    <div class="text-2xl font-bold text-blue-900">  
      Travel<span class="text-yellow-500">X</span>
    </div>

    <ul class="hidden md:flex space-x-6 font-medium text-gray-700">
      <li><a href="#" class="hover:text-yellow-500">Home</a></li>
      <li><a href="#" class="hover:text-yellow-500">Tours</a></li>
      <li><a href="#" class="hover:text-yellow-500">About</a></li>
      <li><a href="#" class="hover:text-yellow-500">Blog</a></li>
      <li><a href="#" class="hover:text-yellow-500">Contact</a></li>
    </ul>

    <div class="hidden md:flex items-center space-x-4">
      <input
        type="text"
        placeholder="Search"
        class="px-3 py-1 rounded-md text-sm border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-400"
      />
      <p class="text-sm text-blue-900">
        Call us: <span class="text-yellow-500 font-semibold">1-800-987-9898</span>
      </p>
    </div>

    <div class="md:hidden">
      <button class="text-blue-900 focus:outline-none">
        <svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>
    </div>
  </nav>

  <section className="relative h-screen bg-cover bg-center" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e')" }}>
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">Explore the World with Travel<span className="text-yellow-400">X</span></h1>
        <p className="text-lg md:text-xl max-w-2xl mb-6">
          Discover breathtaking destinations and unforgettable experiences tailored just for you.
        </p>
        <button className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300">
          Start Your Journey
        </button>
      </div>
    </section>

    <DestinationsSection />

    <section className="py-16 px-6 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Get in <span className="text-yellow-500">Touch</span>
      </h2>

      <form className="max-w-3xl mx-auto bg-gray-50 p-8 rounded-2xl shadow-md grid grid-cols-1 gap-6">
        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
          />
        </div>
        <input
          type="text"
          placeholder="Subject"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
        />
        <textarea
          rows="5"
          placeholder="Your Message"
          className="p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400 resize-none"
        ></textarea>
        <button
          type="submit"
          className="bg-yellow-500 hover:bg-yellow-600 text-blue-900 font-semibold py-3 rounded-md transition duration-300"
        >
          Send Message
        </button>
      </form>
    </section>

    <footer className="bg-blue-900 text-white py-8 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <h3 className="text-xl font-bold mb-2">Travel<span className="text-yellow-400">X</span></h3>
          <p className="text-sm text-gray-300">Explore the world with us. Discover top destinations and make unforgettable memories.</p>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Quick Links</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:text-yellow-400">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400">Tours</a></li>
            <li><a href="#" className="hover:text-yellow-400">Blog</a></li>
            <li><a href="#" className="hover:text-yellow-400">Contact</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-semibold mb-2">Contact Us</h4>
          <p className="text-sm text-gray-300">Email: support@travelx.com</p>
          <p className="text-sm text-gray-300">Phone: +91 98765 43210</p>
          <p className="text-sm text-gray-300">Location: Bangalore, India</p>
        </div>
      </div>
      <div className="text-center mt-8 text-sm text-gray-400">
        © {new Date().getFullYear()} TravelX. All rights reserved.
      </div>
    </footer>
    
    </div>
  )
}

export default UserCard;