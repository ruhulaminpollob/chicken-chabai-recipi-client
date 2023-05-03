

import { Result } from 'postcss';
import React from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const SignUp = () => {
    const [error, setError] = useState('')
    const { user, loading, createUser, logOut, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(true)


    const handleSignUp = event => {
        event.preventDefault()
        setError('')
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;

        if (password !== confirm) {
            setError('Password does not match')
        }
        console.log(email, password);

        createUser(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                console.log(loggedUser);
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })

    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }
    const handleGitHubSignIn = () => {
        githubSignIn()
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                console.log(loggedUser);
                navigate('/')
            })
            .catch(error => {
                console.log(error.message)
                setError(error.message)
            })
    }


    return (
        <div>

            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col ">
                    <div className="text-center">
                        <h1 className="text-5xl font-bold">Please Register</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignUp} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" name='email' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type={show ? "password" : "text"} placeholder="password" name='password' required className="input input-bordered" />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Confirm Password</span>
                                </label>
                                <input type={show ? "password" : "text"} placeholder="confirm password" name='confirm' required className="input input-bordered" />

                            </div>

                            {
                                show ? <small onClick={() => { setShow(false) }}>Show password</small> : <small onClick={() => { setShow(true) }}>Hide password</small>
                            }
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Register</button>
                            </div>
                            <div className=''>
                                <p>Already have an account?<Link to="/login" className='text-yellow-600'> Login</Link> </p>
                            </div>
                            <div className='mt-6'>
                                <hr className='border-b-2' />
                                <p className=' p-2 relative -top-6 bg-white w-fit mx-auto'>or</p>
                            </div>
                            <div className='text-center'>
                                <button onClick={handleGoogleSignIn} className='border-2 w-full p-1 rounded font-bold'>Continue With Google</button>
                            </div>
                            <div className='text-center'>
                                <button onClick={handleGitHubSignIn} className='border-2 w-full p-1 rounded font-bold'>Continue With Git Hub</button>
                            </div>
                            <p className='text-red-400'>{error}</p>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};



export default SignUp;