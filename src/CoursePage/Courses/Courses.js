import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import CourseCard from '../CourseCard/CourseCard';

const Courses = () => {
    const courses = useLoaderData()
    return (
        <div>
            <div className='sm:flex mt-5 mb-5'>
                {/* left side navigation side  */}
                <div className='sm:w-1/6  '>
                    <div className='sm:ml-6'>
                        {
                            courses.map(course=> <h3
                                className=' text-indigo-500 border border-indigo-300 mt-5  p-3 rounded-md mb-4 text-xl shadow-md'
                                key={course._id}
                            
                            
                            ><Link to={`/courses/${course._id}`}>{course.title}</Link></h3>)
                        }
                    </div>
                </div>
                    <div className='sm:w-5/6 sm:ml-5 sm:mr-5' >
                        {/* course card side  */}

                        <div className='grid sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-5'>
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
    );
};

export default Courses;


