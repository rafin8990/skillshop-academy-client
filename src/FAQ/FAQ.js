import React from 'react';

const FAQ = () => {
    return (
        <div>

            {/* cover side  */}
            <div className="hero sm:h-[600px]" style={{ backgroundImage: `url("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSr9pquAfh_VNEGzY0rw3OhkPQEe9LiQ4log&usqp=CAU")` }}>
                <div className="hero-overlay bg-opacity-60"></div>
                <div>
                    <div className="hero-content text-center text-neutral-content">
                        <div className="">
                            <h1 className="mb-5 text-5xl font-bold">What Can we help you find ? </h1>
                        </div>
                    </div>
                    <div>
                        <input type="text" placeholder="Search Here" className="input input-bordered input-accent w-full " />
                    </div>
                </div>
            </div>
            <div>

            </div>
            {/* question side  */}

            <div>
                
            </div>
        </div>
    );
};

export default FAQ;