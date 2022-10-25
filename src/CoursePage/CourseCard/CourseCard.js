import React from 'react';
import { Link } from 'react-router-dom';

const CourseCard = ({ course }) => {
    const { title, image_url } = course;

    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl border border-indigo-300">
                <figure><img className=' h-80' src={image_url} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <p></p>
                    <div className="card-actions justify-end">
                        <Link><button className="btn btn-primary">View Details</button></Link>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default CourseCard;