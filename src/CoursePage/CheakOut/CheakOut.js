import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CheakOut = () => {
    const courseData=useLoaderData()
    console.log(courseData);
    return (
        <div>
            
        </div>
    );
};

export default CheakOut;