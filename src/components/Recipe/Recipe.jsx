import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import MyRecipes from '../MyRecipes/MyRecipes';

const Recipe = () => {

    const recipeId = useLoaderData({})
    const [singleChef, setSingle] = useState(recipeId)
    const [myRecipes, setMyRecipes] = useState({})
    const { _id, image, name, known_for, nationality, experience, recipes, likes ,ratings} = singleChef;

    useEffect(() => {
        fetch(`http://localhost:5000/recipes/${_id}`)
            .then(res => res.json())
            .then(data => setMyRecipes(data))
    }, [recipeId])

    const myAllRecipe = myRecipes.myRecipes;
    // console.log(myAllRecipe);



    return (
        <div className='mt-10'>
            
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={image} alt="Album" /></figure>
                <div className="card-body md:w-1/2">
                    <h2 className="card-title text-4xl font-bold">{name}</h2>
                    <p>{nationality}</p>
                    <p>I am passionate about creating delicious and flavorful chicken dishes. My love for cooking started at a young age, and I have since honed my skills by experimenting with different spices, techniques, and recipes. I believe that cooking is not just about following a recipe, but about using your senses and creativity to create something unique and memorable. I take pride in using fresh and locally sourced ingredients, and I am always on the lookout for new and exciting ways to prepare chicken. Whether it's a simple roast chicken or a complex curry, I strive to create dishes that are both delicious and satisfying.</p>
                    <div className='flex flex-wrap justify-around'>
                        <p>Experience : {experience} Years</p>
                        <p>Total Recipes: {recipes}</p>
                        <p > <span><HeartIcon className='h-6 w-6 inline text-red-500' /> </span> {likes}</p>
                    </div>
                </div>
            </div>
            <div className='mt-10 mx-auto'>
                {/* recipe section */}
                <h1 className='text-center text-xl md:text-4xl font-bold my-5'>Some Featured Recipe of {name}</h1>
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