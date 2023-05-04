import React, { lazy, Suspense } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import AdSection from '../AdSection/AdSection';
import Banner from '../Banner/Banner';
// import Chef from '../Chef/Chef';
import Client from '../Client/Client';


import Spinner from '../Spinner/Spinner';

const Chef = lazy(() => import('../Chef/Chef'));

const Home = () => {
    const [chef, setChef] = useState([])
    const [clients, setClients] = useState([])

    useEffect(() => {
        fetch("https://chicken-chabai-server-ruhulaminpollob.vercel.app/chef")
            .then(res => res.json())
            .then(data => setChef(data))

    }, [])

    useEffect(() => {
        fetch("https://chicken-chabai-server-ruhulaminpollob.vercel.app/clients")
            .then(res => res.json())
            .then(data => setClients(data))
    }, [])

    return (
        <div>
            <Banner />


            <div className='grid grid-cols-5'>
                {/* main */}
                <div className=' col-span-5 justify-center md:col-span-4 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                    <Suspense fallback={<Spinner />}>
                    {
                        chef.map(single => <Chef key={single._id} single={single}></Chef>)
                    }
                    </Suspense>

                </div>


                {/* aside */}
                <div className='col-span-5 md:col-span-1 bg-gray-200 mt-5 p-2 rounded'>
                    <AdSection />
                </div>
            </div>
            <div className='my-5 md:mx-10 md:my-10 text-center'>
                <h1 className=' md:text-4xl text-yellow-500 font-bold mb-5'>Our Happy Subscribers</h1>
                <hr />

                <div className='grid md:grid-cols-3 gap-5 mt-10'>
                    {
                        clients.map(client => <Client key={client.id} client={client} />)
                    }
                </div>



            </div>
        </div>
    );
};

export default Home;