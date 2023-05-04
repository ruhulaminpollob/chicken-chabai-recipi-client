import React from 'react';

const AdSection = () => {
    return (
        <div className=' sticky top-0 text-center'>
            <h1 className='text-right'>ads</h1>
            <img src="./banner/ad1.jpg" alt="" />
            <button className=' font-bold p-2 rounded bg-red-500 text-white  my-3'>Order Now</button>
            <img src="./banner/ad2.jpg" alt="" />
            <button className=' font-bold p-2 rounded bg-red-500 text-white  my-3'>Order Now</button>
            <img src="./banner/ad3.jpg" alt="" />
            <button className=' font-bold p-2 rounded bg-red-500 text-white  my-3'>Order Now</button>
        </div>
    );
};

export default AdSection;