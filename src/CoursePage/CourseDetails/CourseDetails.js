import React, { useRef } from 'react';
import html2canvas from 'html2canvas';
import { jsPDF } from 'jspdf';
import { Link, useLoaderData } from 'react-router-dom';
import { FaDownload } from "react-icons/fa";

const CourseDetails = () => {

    // download pdf 
    const CourseDetails = useLoaderData();
    const { image, title, details, rating, amount,category_id } = CourseDetails

    const printRef = useRef();

    const handleDownloadPdf = async () => {
        const element = printRef.current;
        const canvas = await html2canvas(element);
        const data = canvas.toDataURL('image/png');

        const pdf = new jsPDF();
        const imgProperties = pdf.getImageProperties(data);
        const pdfWidth = pdf.internal.pageSize.getWidth();
        const pdfHeight =
            (imgProperties.height * pdfWidth) / imgProperties.width;

        pdf.addImage(data, 'PNG', 0, 0, pdfWidth, pdfHeight);
        pdf.save('print.pdf');
    };


    return (
        <div ref={printRef} className='m-5 flex justify-center '>
            <div className='sm:w-1/3 border'>
                <div className='flex justify-between items-center mb-3 shadow-lg p-5'>
                    <h2 className='text-2xl font-semibold'>{title}</h2>
                    <button type='button' onClick={handleDownloadPdf} >
                        <FaDownload  className=' w-10 text-indigo-500'></FaDownload>
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