import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {

    // card details load 
    const CourseDetails = useLoaderData();
    const { image, title, details, rating, amount,_id,category_id} = CourseDetails

    // pdf download 
    const onButtonClick = () => {
        // using Java Script method to get PDF file
        fetch(`http://localhost:3000/courses/${_id}`).then(response => {
            response.blob().then(blob => {
                // Creating new object of PDF file
                const fileURL = window.URL.createObjectURL(blob);
                // Setting various property values
                let alink = document.createElement('a');
                alink.href = fileURL;
                alink.download = `http://localhost:3000/courses/${_id}`;
                alink.click();
            })
        })
    }



    return (
        <div className='m-5 flex justify-center '>
            <div className='sm:w-1/3 border'>
                <div className='flex justify-between items-center mb-3 shadow-lg p-5'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <button onClick={onButtonClick}>
                        <FaDownload className=' w-10 text-indigo-500'></FaDownload>
                    </button>


                </div>
                <div className='flex justify-center p-5'>
                    <img className=' shadow-sm' src={image} alt="" />
                </div>
                <div className='p-5'>
                    <div className='flex justify-between'>
                        <h3 className='text-xl font-bold'>Course Overview : {rating.badge}</h3>
                        <h5 className='text-xl font-bold'>Course Ratings : {rating.number}</h5>
                    </div>

                    <p className='mt-2'>{details}</p>
                </div>
                <div className='p-5 flex justify-between items-center'>
                    <h1 className='text-xl font-semibold text-green-500'>Course Fee : {amount}</h1>
                    <Link to={`/categories/${category_id}`}><button className="btn btn-outline btn-secondary">Get Premium Accecss</button></Link>
                    
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;