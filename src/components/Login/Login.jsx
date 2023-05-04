import React, { useContext, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Login = () => {
    const [error, setError] = useState('')
    const { user, loading, signIn, googleSignIn, githubSignIn } = useContext(AuthContext)
    const [show, setShow] = useState(true)
    const navigate = useNavigate()

    const handleSignIn = event => {
        setError('')
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                form.reset()
                // console.log(loggedUser);
                navigate('/')
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
                        <h1 className="text-5xl font-bold">Login now!</h1>

                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                        <form onSubmit={handleSignIn} className="card-body">
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
                                {
                                    show ? <small onClick={() => { setShow(false) }}>Show password</small> : <small onClick={() => { setShow(true) }}>Hide password</small>
                                }
                                <label className="label">
                                    <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>

                            <div className="form-control mt-6">
                                <button className="btn btn-primary">Login</button>
                            </div>
                            <div>
                                <p>New to Ema-john? <Link to="/signup" className='text-yellow-600'>Create New Account</Link> </p>
                            </div>
                            <div className='mt-6'>
                                <hr className='border-b-2' />
                                <p className=' p-2 relative -top-6 bg-white w-fit mx-auto'>or</p>
                            </div>
                        </form>
                        <div className='text-center'>
                            <button onClick={handleGoogleSignIn} className='border-2 w-full p-1 rounded font-bold'>Continue With Google</button>
                        </div>
                        <div className='text-center'>
                            <button onClick={handleGitHubSignIn} className='border-2 w-full p-1 rounded font-bold'>Continue With Git Hub</button>
                        </div>
                        <p className='text-red-400'>{error}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;