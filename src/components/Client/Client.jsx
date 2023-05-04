import React from 'react';

const Client = ({client}) => {

    const {name, address,}=client
    return (
        <div className='py-5  md:py10 hover:bg-violet-300  rounded bg-violet-200 '>
            <h1 className='text-2xl font-bold'>{name}</h1>
            <p>{address.city}</p>
        </div>
    );
};

export default Client;