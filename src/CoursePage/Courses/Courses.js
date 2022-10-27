import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';


const Courses = () => {
    const courses = useLoaderData()
    return (
        <div className=' bg-indigo-200'>
            <div>
                {/* card cover image  */}
                <div className="hero sm:h-[600px]" style={{ backgroundImage: `url("https://easebuzz.in/blog/wp-content/uploads/2021/12/blog-032-Buildbuzz-1024x683.jpg")` }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-2xl sm:text-6xl font-bold">Here Is Our All Courses</h1>
                        </div>
                    </div>
                </div>
            </div>

            <div className=' container '>
                <div className='sm:flex mt-5 mb-5'>
                    {/* left side navigation side  */}
                    <div className=''>
                        <div className='sm:ml-6'>
                            {
                                courses.map(course => <h3
                                    className=' text-black border-indigo-300 bg-white hover:text-white hover:bg-indigo-500 border mt-5  p-3 rounded-md mb-4 text-xl shadow-md'
                                    key={course._id}


                                ><Link to={`/courses/${course._id}`}>{course.title}</Link></h3>)
                            }
                        </div>
                    </div>
                    <div className='sm:ml-5 sm:mr-5' >

                        {/* course card side  */}

                        <div className='flex justify-center'>
                            <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:ml-20'>
                                {
                                    courses.map(course => <CourseCard
                                        key={course._id}
                                        course={course}
                                    ></CourseCard>)
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Courses;


