import React, { useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthProvider';
import Swal from 'sweetalert2';
import { FcGoogle } from 'react-icons/fc';
import { Helmet } from 'react-helmet-async';

const Login = () => {

    const { loginUser, signInWithGoogle } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        loginUser(email, password)
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
                form.reset();
            })
            .catch((err) => {
                console.log(err)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to Login!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
            .then((result) => {
                console.log(result.user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Login successful!",
                    showConfirmButton: false,
                    timer: 1500,
                });
            })
            .catch((err) => {
                console.log(err.massage)
                Swal.fire({
                    position: "center",
                    icon: "error",
                    title: "Failed to Login!",
                    text: err.message,
                    showConfirmButton: true,
                });
            })
    }

    return (
        <div className="flex items-center justify-center min-h-screen">
            <Helmet>
                <title>Login - ServiceSphere</title>
            </Helmet>
            <div className="w-full max-w-sm bg-[#2F3E46] p-6 my-16 rounded-lg shadow-lg">
                <h2 className="text-2xl text-white font-semibold text-center mb-6">Login</h2>

                <form onSubmit={handleLogIn}>
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
                        Login
                    </button>
                </form>

                <button
                    onClick={handleGoogleSignIn}
                    className="w-full bg-red-600 text-white py-2 rounded-lg mb-4 flex items-center justify-center gap-2"
                >
                    <FcGoogle className='text-2xl'></FcGoogle> Login with Google
                </button>

                <div className="text-center">
                    <p className="text-sm text-gray-300">
                        Don't have an account?{' '}
                        <Link to={'/register'} className="text-blue-600 hover:underline">Register</Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;