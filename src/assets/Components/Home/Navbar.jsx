import { NavLink } from "react-router-dom";
import '@fortawesome/fontawesome-free/css/all.min.css';
import i0 from '../images/i0.jpg'

import { useState } from 'react';

function Navbar() {
  // State to manage the visibility of the navbar on mobile
  const [isOpen, setIsOpen] = useState(false);

  // Toggle the navbar on mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };


const im = [i0]

  return (
<div>
  <div className="flex flex-col md:flex-row justify-around p-3 md:p-6 bg-white">
   <NavLink to="/" className="mx-1 md:mx-3 text-green-900">
    <div>
      {im.map((src, index) => (
        <div key={index}>
          <img src={src} className='h-[30px] w-[150px] md:h-[50px] md:w-[200px]' />
        </div>
      ))}
    </div>
   </NavLink>

  <div className="md:hidden">
      <button onClick={toggleMenu} className="text-blue-950 focus:outline-none">
            <i className="fa fa-bars text-2xl"></i>
      </button>
  </div>

  <div className="flex flex-col md:flex-row mx-1 md:mx-3 hover:after:bg-yellow-500">
    <NavLink to="/" className="mx-1 md:mx-3 text-blue-950">Home</NavLink>
    <NavLink to="/about" className="mx-1 md:mx-3 text-blue-950">About</NavLink>
    <NavLink to="/pricing" className="mx-1 md:mx-3 text-blue-950">Pricing</NavLink>

    <div className="bg-white flex">
      <div className="dropdown relative group">
       
      
        <button className="dropbtn p-0.5 bg-inherit hover:bg-yellow-300 text-blue-950 flex items-center">
          Services <i className="fa fa-caret-down ml-2"></i>
        </button>
   
        <div className="dropdown-content absolute left-0 mt-1 hidden bg-gray-100 min-w-[160px] shadow-lg z-10 group-hover:block">
          <NavLink to="/laundry" className="block text-black px-4 py-3 hover:bg-gray-300">Laundry Service</NavLink>
          <NavLink to="/dry" className="block text-black px-4 py-3 hover:bg-gray-300">Dry Cleaning</NavLink>
          <NavLink to="/iron" className="block text-black px-4 py-3 hover:bg-gray-300">Ironing</NavLink>
        </div>
      </div>
    </div>
    <NavLink to="/term" className="mx-1 md:mx-3 text-blue-950">Terms and Conditions</NavLink>
  </div>
  </div>
    

</div>
      
 
  )
}

export default Navbar;
