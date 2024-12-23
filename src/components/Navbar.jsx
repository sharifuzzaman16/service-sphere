import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../assets/logo.png'
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';

const Navbar = () => {

    const { user, logOutUser } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogout = () => {
        logOutUser()
            .then(() => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "User Logged Out!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/login')
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to Logout!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }

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
                        className="menu menu-sm dropdown-content bg-[#2F3E46] rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                        <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/'}>Home</Link></li>
                        <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/services'}>Services</Link></li>
                    </ul>
                </div>
                <div className='flex items-center gap-2'>
                    <img className='w-11' src={logo} alt="" />
                    <a className="text-xl font-bold flex text-white">ServiceSphere</a>
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/'}>Home</Link></li>
                    <li><Link className='text-white font-medium hover:text-[#64B5F6]' to={'/services'}>Services</Link></li>
                </ul>
            </div>
            <div className="navbar-end">

                {
                    user ? <div className="dropdown dropdown-end">
                        <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img
                                    alt={user.displayName}
                                    src={user.photoURL} />
                            </div>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-[#2F3E46] rounded-lg z-[1] mt-3 w-52 p-2 shadow">
                            <li>
                                <a className="justify-between">
                                    Profile
                                    <span className="badge">New</span>
                                </a>
                            </li>
                            <li><a>Settings</a></li>
                            <li><a onClick={handleLogout}>Logout</a></li>
                        </ul>
                    </div> : <div className='flex gap-4 items-center'>
                        <Link to={'/login'} className="bg-[#007BFF] text-white px-4 py-2 rounded cursor-pointer">Login</Link>
                        <Link to={'/register'} className="bg-gray-300 text-[#007BFF] px-4 py-2 rounded cursor-pointer">Register</Link>
                    </div>
                }



            </div>


        </div >
    );
};

export default Navbar;