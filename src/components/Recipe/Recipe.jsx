import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyRecipes from '../MyRecipes/MyRecipes';

const Recipe = () => {

    const recipeId = useLoaderData({})
    const [singleChef, setSingle] = useState(recipeId)
    const [myRecipes, setMyRecipes] = useState({})
    const { _id, image, name, known_for, experience, recipes, likes ,ratings} = singleChef;

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${_id}`)
            .then(res => res.json())
            .then(data => setMyRecipes(data))
    }, [recipeId])

    const myAllRecipe = myRecipes.myRecipes;
    console.log(myAllRecipe);



    return (
        <div className='mt-10'>
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
                <div className='grid grid-cols-1 lg:grid-cols-2 md:mx-10 my-10 gap-10'>

                   
                    {
                       myRecipes.myRecipes && myAllRecipe.map(singleRecipe =>  <MyRecipes key={singleRecipe.id} ratings={ratings}  singleRecipe={singleRecipe} />)
                    }



                </div>
            </div>
        </div>
    );
};

export default Recipe;