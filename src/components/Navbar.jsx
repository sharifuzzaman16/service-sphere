import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-[#2F3E46] h-[70px] px-[20px]">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/'}>Home</Link></li>
                        <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/services'}>Services</Link></li>
                    </ul>
                </div>
                <a className="text-xl font-bold text-white">ServiceSphere</a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/'}>Home</Link></li>
                    <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/services'}>Services</Link></li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className='flex gap-4 items-center'>
                <a className="bg-[#007BFF] text-white px-4 py-2 rounded cursor-pointer">Login</a>
                <a className="bg-gray-200 border-[#007BFF] border-2 text-[#007BFF] px-4 py-2 rounded cursor-pointer">Register</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;