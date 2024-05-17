import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';



const Navbar = () => {
  return (
    <nav className='border-indigo-500 test'>
		<div className='mx-auto max-w-6xl flex justify-between items-center'>
		
			<img src={logo} alt="Logo" />
			<div className='space-x-5'>
				<Link to="/" className='font-GoogleSansRegular'>Home</Link>
				<Link to="/destination" className='font-GoogleSansRegular'>Destinations</Link>
				{/* <Link to="/transportation" className='font-GoogleSansRegular'>Transportation</Link> */}
				{/* <Link to="/social" className='font-GoogleSansRegular'>Social Media</Link> */}
			</div>
		</div>
    </nav>
  )
}
export default Navbar

  



