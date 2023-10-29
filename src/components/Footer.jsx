import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gray-700 text-white py-8 mt-8">
    <div className="container mx-auto flex flex-wrap justify-between items-center">
      <div className="w-full md:w-1/2 text-center md:text-left">
        <p>&copy; 2023 Your Company. All rights reserved.</p>
      </div>
      <div className="w-full md:w-1/2 mt-4 md:mt-0">
        <ul className="flex justify-center md:justify-end">
         
          <li className="mx-3">
            <a href="#" className="text-gray-300 hover:text-white">Contact</a>
          </li>
        </ul>
      </div>
    </div>
  </footer>
  )
}

export default Footer