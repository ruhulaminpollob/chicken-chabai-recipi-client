import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Banner from '../Banner/Banner';
import Chef from '../Chef/Chef';

const Home = () => {
    const [chef, setChef] = useState([])



    useEffect(() => {
        fetch("http://localhost:5000/chef")
            .then(res => res.json())
            .then(data => setChef(data))

    }, [])
    console.log(chef);


    return (
        <div>
            <Banner />


            <div className='grid grid-cols-5'>
                {/* main */}
                <div className=' col-span-5 justify-center md:col-span-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    {
                        chef.map(single => <Chef  key={single._id} single={single}></Chef>)
                    }
                </div>
                {/* aside */}
                <div className='col-span-5 md:col-span-1 bg-gray-600 rounded'>
                        <h1>here you goooooooooooooooooooooooooooo</h1>
                </div>
            </div>
        </div>
    );
};

export default Home;