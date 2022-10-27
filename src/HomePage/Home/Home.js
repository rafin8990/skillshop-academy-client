import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <div>
            <div className="hero min-h-screen" style={{ backgroundImage: `url("https://helios-i.mashable.com/imagery/articles/01gIa563Hg9IvYRYIP64WQd/hero-image.fill.size_1248x702.v1656434265.jpg")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="">
                        <h1 className="mb-5 text-3xl sm:text-6xl font-bold">This Is The Biggest Learning Website</h1>
                        <Link to='/courses'><button className="btn btn-primary">Get Started</button></Link>
                       <Link to='/courses'> <button className="btn btn-success ml-5">See Courses</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;