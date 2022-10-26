import React from 'react';
import login from '../../login.webp'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext/AuthProvider';
import { useState } from 'react';

const Login = () => {
    const navigate=useNavigate();

    const {googleSignIn, gitHubSignIn, signInWithEmail}=useContext(AuthContext);
    const [error, setError]=useState('');
    const location=useLocation();

    const from=location.state?.from?.pathname || '/'; 

    const handleSignIn=(event)=>{
        event.preventDefault();
        const form=event.target;
        const email=form.email.value;
        const password=form.password.value;
        console.log(email, password)
        signInWithEmail(email, password)
        .then(result=>{
            const user= result.user;
            console.log(user)
            navigate(from ,{replace:true});
            setError('');
            form.reset();
            
        })
        .catch(error=>{
            const errorMassage=error.message;
                setError(errorMassage);
                console.error(error);
        })
    }
    const handleGoogleSignIn=()=>{
        googleSignIn()
        .then(result=>{
            const user=result.user;
            console.log(user);
        })
        .catch(error=>{
            const errorMassage=error.message;
                setError(errorMassage)
            console.error(error);
        })
    }
    const handleGithubSignIn=()=>{
        gitHubSignIn()
        .then(result=>{
            const user=result.user;
            setError('')
            console.log(user);
        })
        .catch(error=>{
            const errorMassage=error.message;
                setError(errorMassage)
            console.error(error);
    })
}

    return (
        <div className='sm:flex items-center'>
            <div className=' sm:w-1/2'>
                <div className="hero min-h-screen bg-base-200">
                    <div className="hero-content flex-col lg:flex-row-reverse">
                        <div className="text-center">
                            <h1 className="text-5xl font-bold">Login now!</h1>
                        </div>
                        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                            <form onSubmit={handleSignIn} className="card-body">
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Email</span>
                                    </label>
                                    <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                                </div>
                                <div className="form-control">
                                    <label className="label">
                                        <span className="label-text">Password</span>
                                    </label>
                                    <input type="password" name='password' placeholder="password" className="input input-bordered" required/>
                                    <p className=' text-red-600'><small>{error}</small></p>
                                   <p className='flex'>
                                   New to this site? 
                                    <Link to='/register' className=' text-primary'><p>Please Sign Up first</p></Link>
                                   </p>
                                </div>
                                <div className="form-control mt-6">
                                    <button className="btn bg-indigo-600 hover:bg-indigo-800 ">Sign In</button>
                                    <button onClick={handleGoogleSignIn} className='btn bg-inherit text-indigo-600 mt-2 hover:text-white'>Sign In With Google</button>
                                    <button onClick={handleGithubSignIn} className='btn bg-inherit text-indigo-600 mt-2 hover:text-white'>Sign In With GitHub</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className=' sm:w-1/2 flex justify-center items-center min-h-screen bg-base-200 '>
                <div className='shadow-lg'>
                    <img src={login} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Login;