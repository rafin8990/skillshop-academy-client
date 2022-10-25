import React from 'react';
import { Link } from 'react-router-dom';
import registerpic from '../../login2.png'

const Register = () => {
    return (
        <div>
            <div className='sm:flex items-center'>
                <div className=' sm:w-1/2'>
                    <div className="hero min-h-screen bg-base-200">
                        <div className="hero-content flex-col lg:flex-row-reverse">
                            <div className="text-center">
                                <h1 className="text-5xl font-bold">Register Now!</h1>

                            </div>
                            <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                                <div className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Full Name</span>
                                        </label>
                                        <input type="text" placeholder="Enter Name" name='name' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">PhotoURL</span>
                                        </label>
                                        <input type="text" placeholder="Entr PhotoURL" name='photoUrl' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Email</span>
                                        </label>
                                        <input type="email" placeholder="enter email" name='email' className="input input-bordered" />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Password</span>
                                        </label>
                                        <input type="password" name='password' placeholder="enter password" className="input input-bordered" />
                                        <p className='flex'>
                                            Already have an account?
                                            <Link to='/login' className=' text-primary'><p>Please login</p></Link>
                                        </p>
                                    </div>
                                    <div className="form-control mt-6">
                                        <button className="btn bg-indigo-600 hover:bg-indigo-800 ">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=' sm:w-1/2 flex justify-center items-center min-h-screen bg-base-200 '>
                    <div className='shadow-lg'>
                        <img src={registerpic} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;