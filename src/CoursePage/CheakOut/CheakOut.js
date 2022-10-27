import React from 'react';
import { useLoaderData } from 'react-router-dom';




const CheakOut = () => {
    const cheakOutData = useLoaderData();
    const { title } = cheakOutData;
    return (
        <div>
            <div>
                {/* cover side  */}
                <div className="hero sm:h-[600px]" style={{ backgroundImage: `url("https://easebuzz.in/blog/wp-content/uploads/2021/12/blog-cover-0.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-2xl sm:text-6xl font-bold">Welcome For Purchess The Course</h1>
                        </div>
                    </div>
                </div>
            </div>

                {/* shipping btn side  */}
            <div className='flex justify-center items-center m-5'>
                <input type="checkbox" checked className="checkbox" />
                <p className='text-success ml-2'>Parchess</p>
                <progress className="progress progress-success w-10" value="100" max="100"></progress>
                <input type="checkbox" checked className="checkbox" />
                <p className='text-success ml-2'>Payment</p>
                <progress className="progress progress-success w-10" value="100" max="100"></progress>
                <input type="checkbox" checked className="checkbox" />
                <p className='text-success ml-2'>Confirmation</p>
                <progress className="progress progress-success w-10" value="100" max="100"></progress>
            </div>
            {/* shipping form side  */}
            <div className='mt-5 flex justify-center'>
                <div className='border border-indigo-300 mb-4 shadow-2xl rounded-xl '>
                    <div className=' p-6' >
                        <h1 className='text-4xl font-semibold text-success mb-3'>Enrolled: {title}</h1>
                        <div className='flex'>
                            <div className='mr-3'>
                                <input type="text" placeholder="First Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <input type="text" placeholder="Last Name" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div>
                            <p> Address</p>
                            <div className='mt-3'>
                                <input type="text" placeholder="City" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div className='mt-3'>
                                <input type="text" placeholder="District & Home Address" className="input input-bordered w-full max-w-xs" />
                            </div>
                        </div>
                        <div className='mb-3 mt-3'>
                            <button className='btn btn-outline btn-success'><small>Proceed to purchess</small></button>
                        </div>
                        <div>
                            <h3 className='text-success text-2xl'>Thanks for purchess the Course</h3>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default CheakOut;