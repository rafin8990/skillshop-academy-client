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
                <div>
                    <div className='mt-10 p-4 grid sm:grid-cols-2 md:grid-cols-3'>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is a Programming Language?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            A programming language is a system of notation for writing computer programs.[1] Most programming languages are text-based formal languages, but they may also be graphical. They are a kind of computer language.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is Java Language?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            Java is a general-purpose, class-based, object-oriented programming language designed for having lesser implementation dependencies. It is a computing platform for application development. Java is fast, secure, and reliable, therefore. It is widely used for developing Java applications in laptops, data centers, game consoles, scientific supercomputers, cell phones, etc.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is  Javascript?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            JavaScript is a scripting or programming language that allows you to implement complex features on web pages — every time a web page does more than just sit there and display static information for you to look at — displaying timely content updates, interactive maps, animated 2D/3D graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript is probably involved. It is the third layer of the layer cake of standard web technologies, two of which (HTML and CSS) we have covered in much more detail in other parts of the Learning Area.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is  Linux?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            Just like Windows, iOS, and Mac OS, Linux is an operating system. In fact, one of the most popular platforms on the planet, Android, is powered by the Linux operating system. An operating system is software that manages all of the hardware resources associated with your desktop or laptop. To put it simply, the operating system manages the communication between your software and your hardware. Without the operating system (OS), the software wouldn’t function.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is Programming Python?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            Python is an interpreted, object-oriented, high-level programming language with dynamic semantics. Its high-level built in data structures, combined with dynamic typing and dynamic binding, make it very attractive for Rapid Application Development, as well as for use as a scripting or glue language to connect existing components together. Python's simple, easy to learn syntax emphasizes readability and therefore reduces the cost of program maintenance. Python supports modules and packages, which encourages program modularity and code reuse. The Python interpreter and the extensive standard library are available in source or binary form without charge for all major platforms, and can be freely distributed.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is C programming?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            C is a general-purpose programming language that is extremely popular, simple, and flexible to use. It is a structured programming language that is machine-independent and extensively used to write various applications, Operating Systems like Windows, and many other complex programs like Oracle database, Git, Python interpreter, and more.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is Angular Js?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            AngularJS is a structural framework for dynamic web apps. It lets you use HTML as your template language and lets you extend HTML's syntax to express your application's components clearly and succinctly. AngularJS's data binding and dependency injection eliminate much of the code you would otherwise have to write. And it all happens within the browser, making it an ideal partner with any server technology.
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is Firebase?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            Firebase is an app development platform that helps you build and grow apps and games users love. Backed by Google and trusted by millions of businesses around the world
                            </p>
                        </div>
                        <div className=' border border-gray-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                            <div className='border border-gray-500 p-2'>
                                <h1 className='text-amber-500 text-4xl'>What is Node Js?</h1>
                            </div>
                            <p className='text-amber-500 text-xl p-2'>Answer: </p>
                            <p className='text-amber-500 p-2'>
                            Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on a JavaScript Engine (i.e. V8 engine) and executes JavaScript code outside a web browser, which was designed to build scalable network applications. Node.js lets developers use JavaScript to write command line tools and for server-side scripting—running scripts server-side to produce dynamic web page content before the page is sent to the user's web browser. Consequently, Node.js represents a "JavaScript everywhere" paradigm,[6] unifying web-application development around a single programming language, rather than different languages for server-side and client-side scripts
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FAQ;