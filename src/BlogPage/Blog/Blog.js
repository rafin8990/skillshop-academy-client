import React from 'react';
import pic from '../../sideImage.png'

const Blog = () => {
    return (
        <div className=' bg-indigo-300'>
            <div className='sm:flex border border-orange-500 shadow-xl rounded-xl'>
                <div className=' m-8'>
                    <h1 className='text-4xl sm:text-6xl font-bold text-orange-500'>Do You Want To Learn About FireBase & Node Js?</h1>
                    <h3 className='text-3xl text-amber-200'>Let's know something about Firebase. </h3>
                </div>
                <div>
                    <img src={pic} alt="" />
                </div>
            </div>

            <div className='mt-10 p-4 grid sm:grid-cols-2 md:grid-cols-3'>
                <div className=' border border-orange-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                    <div className='border border-orange-500 p-2'>
                        <h1 className='text-white text-4xl'>What is Cors?</h1>
                    </div>
                    <p className='text-white text-xl p-2'>Answer: </p>
                    <p className='text-white p-2'>
                        CORS stands for Cross-Origin Resource Sharing. It allows us to relax the security applied to an API. This is done by bypassing the Access-Control-Allow-Origin headers, which specify which origins can access the API.In other words, CORS is a browser security feature that restricts cross-origin HTTP requests with other servers and specifies which domains access your resources.An API is a set procedure for two programs to communicate. This means that API resources are consumed by other clients and servers.The client and server have a different origin from each other, i.e., accessing resources from a different server. In this case, trying to make a request to a resource on the other server will fail.
                    </p>
                </div>
                <div className=' border border-orange-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                    <div className='border border-orange-500 p-2'>
                        <h1 className='text-white text-4xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                    </div>
                    <p className='text-white text-xl p-2'>Answer: </p>
                    <p className='text-white p-2'>
                        Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.That is why I am using firebase.
                        I can use firebase for google signin , github sign in.For knowing about firebase now i can addd a authentication system in a website . I can learn about different ty of data .
                    </p>
                </div>
                <div className=' border border-orange-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                    <div className='border border-orange-500 p-2'>
                        <h1 className='text-white text-4xl'> How does the private route work?</h1>
                    </div>
                    <p className='text-white text-xl p-2'>Answer: </p>
                    <p className='text-white p-2'>
                        Private Routes vary based on the Apps, For example, Dashboard, User Profile, App Settings, Home etc. In simple words, These routes can be accessed only after login.The constraints for Public and Private routes are that Public routes should not be accessed after login and Private routes should not be accessible before login.The private route component is similar to the public route, the only change is that redirect URL and authenticate condition.If the user is not authenticated he will be redirected to the login page and the user can only access the authenticated routes If he is authenticated (Logged in).Authorization goes beyond authentication though. For example, a user can also have roles and permissions which give a user access to specific areas of the application.
                    </p>
                </div>
                <div className=' border border-orange-500 rounded-lg ml-3 mr-3 mt-3 shadow-sm'>
                    <div className='border border-orange-500 p-2 shadow-sm rounded-sm'>
                        <h1 className='text-white text-4xl'> What is Node? How does Node work?</h1>
                    </div>
                    <p className='text-white text-xl p-2'>Answer: </p>
                    <p className='text-white p-2'>
                        Node.js is a JavaScript runtime environment that achieves low latency and high throughput by taking a “non-blocking” approach to serving requests. In other words, Node.js wastes no time or resources on waiting for I/O requests to return.In the traditional approach to creating web servers, for each incoming request or connection the server spawns a new thread of execution or even forks a new process to handle the request and send a response. Conceptually, this makes perfect sense, but in practice it incurs a great deal of overhead.
                        <br />
                        Node.js is an open-source backend javascript runtime environment. It is a used as backend service where javascript works on the server-side of the application. This way javascript is used on both frontend and backend. Node.js runs on chrome v8 engine which converts javascript code into machine code, it is highly scalable, lightweight, fast, and data-intensive.Node.js accepts the request from the clients and sends the response, while working with the request node.js handles them with a single thread. To operate I/O operations or requests node.js use the concept of threads. Thread is a sequence of instructions that the server needs to perform. It runs parallel on the server to provide the information to multiple clients. Node.js is an event loop single-threaded language. It can handle concurrent requests with a single thread without blocking it for one request.
                    </p>
                </div>
            </div>

        </div>
    );
};

export default Blog;