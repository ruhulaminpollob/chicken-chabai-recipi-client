import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <main className='text-center'>
            <h1 className='text-4xl md:text-8xl font-serif font-semibold my-10 md:mt-20'>We lost this page</h1>
            <p className='font-serif px-3'>
                We search high and low but couldn't find what you're looking <br /> for. Let's find a better place for you to go.
            </p>
            <Link to="/"><button className='mt-5 bg-gray-800 text-white py-1 px-3  rounded font-semibold text-yellow-300' >Chicken Cabai Recipe Home</button></Link>

            <div className='mx-auto w-fit'>
                <img src="./banner/not-found.png" alt="not found page image" />
            </div>
        </main>
    );
};

export default NotFound;