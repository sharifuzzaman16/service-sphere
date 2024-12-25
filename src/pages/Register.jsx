import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const Register = () => {

    const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleRegister = (e) => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const photo = form.photo.value;
        const password = form.password.value;


        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

        if (!passwordRegex.test(password)) {
            Swal.fire({
                position: "center",
                icon: "error",
                title: "Invalid Password!",
                text: "Password must have at least one uppercase letter, one lowercase letter, and be at least 6 characters long.",
                showConfirmButton: true,
            });
            return;
        }

        createUser(email, password)
            .then((result) => {
                updateUserProfile(name, photo)
                    .then(() => {
                        Swal.fire({
                            position: "center",
                            icon: "success",
                            title: "Registration successful!",
                            showConfirmButton: false,
                            timer: 1500,
                        });
                        form.reset();
                        navigate('/');
                    })
                    .catch((err) => {
                        Swal.fire({
                            position: "center",
                            icon: "error",
                            title: "Failed to update userdata!",
                            text: err.message,
                            showConfirmButton: true,
                        });
                    });
            })
            .catch((err) => {
                console.error("Registration error:", err.message);
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Registration failed!",
                    text: err.message,
                    showConfirmButton: true,
                });
            });
    };


    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Registration successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                navigate('/');
            })
            .catch((err) => {
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to Register!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }


    return (
        <div className="flex items-center justify-center min-h-screen">
            <Helmet>
                <title>Register - ServiceSphere</title>
            </Helmet>
            <div className="w-full max-w-sm bg-[#2F3E46] my-16 p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl text-white font-semibold text-center mb-6">Register</h2>

                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-100">Name</label>
                        <input
                            name='name'
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                            placeholder='Enter your name...'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-100">Email</label>
                        <input
                            name='email'
                            type="email"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                            placeholder='Enter your email...'
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-100">Photo URL</label>
                        <input
                            name='photo'
                            type="url"
                            className="w-full px-4 py-2 border border-gray-300 rounded-md bg-transparent"
                            placeholder='Photo URL'
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-100">Password</label>
                        <input
                            name='password'
                            type="password"
                            className="w-full bg-transparent px-4 py-2 border border-gray-300 rounded-md"
                            placeholder='Password'
                            required
                        />
                    </div>

                    <button
                        className="w-full bg-blue-600 text-white py-2 rounded-lg mb-4"
                    >
                        Register
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-600 text-white py-2 rounded-lg mb-4 flex items-center justify-center gap-2"
                >
                    <FcGoogle className='text-2xl'></FcGoogle> Register with Google
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-300">
                        Already have an account?{' '}
                        <Link to={'/login'} className="text-blue-600 hover:underline">Login</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Register;