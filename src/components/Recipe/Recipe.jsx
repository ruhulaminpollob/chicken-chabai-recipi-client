import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';

const Recipe = () => {

    const recipeId = useLoaderData({})
    const [singleChef, setSingle] = useState(recipeId)


    const { image, name, known_for, experience, recipes, likes } = singleChef
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{known_for}</p>
                    <div className='flex flex-wrap justify-around'>
                        <p>Experience : {experience} Years</p>
                        <p>Total Recipes: {recipes}</p>
                        <p > <span><HeartIcon className='h-6 w-6 inline text-red-500' /> </span> {likes}</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 mx-auto'>
                {/* recipe section */}
                <h1 className='text-center text-4xl font-bold my-5'>Some Featured Recipe of {name}</h1>
                <hr className='w-10/12 mx-auto border-amber-400 border-2 opacity-50' />
                <div className='grid grid-cols-3 mx-10 gap-10'>
                    <div className='bg-blue-400 rounded'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum id fuga, eius voluptates sunt, iusto in molestiae, amet aliquid corrupti deleniti? Officia, iste optio reiciendis ducimus culpa libero veritatis alias in accusantium nesciunt, magni quo. Cumque commodi maiores nobis, quibusdam quo, itaque voluptates consequatur repudiandae atque expedita dignissimos dolore aliquam?</div>
                    <div className='bg-blue-400 rounded'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum id fuga, eius voluptates sunt, iusto in molestiae, amet aliquid corrupti deleniti? Officia, iste optio reiciendis ducimus culpa libero veritatis alias in accusantium nesciunt, magni quo. Cumque commodi maiores nobis, quibusdam quo, itaque voluptates consequatur repudiandae atque expedita dignissimos dolore aliquam?</div>
                    <div className='bg-blue-400 rounded'> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum id fuga, eius voluptates sunt, iusto in molestiae, amet aliquid corrupti deleniti? Officia, iste optio reiciendis ducimus culpa libero veritatis alias in accusantium nesciunt, magni quo. Cumque commodi maiores nobis, quibusdam quo, itaque voluptates consequatur repudiandae atque expedita dignissimos dolore aliquam?</div>
                </div>
            </div>
        </div>
    );
};

export default Recipe;