import { HeartIcon } from '@heroicons/react/24/solid';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Chef = ({ single }) => {
    
    const navigate=useNavigate()
    const { _id, name, image, experience, recipes, ratings, likes } = single
    console.log(single);
    return (
        <div className="card card-compact w-72 my-5 bg-base-100 shadow-xl">
            <figure><img src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>Experience : {experience} Years</p>
                <p>Total Recipes: {recipes}</p>
                <p > <span><HeartIcon className='h-6 w-6 inline text-red-500' /> </span> {likes}</p>
                <div className="card-actions justify-end">
                    <button onClick={()=>{navigate(`/recipe/${_id}`)}} className="btn btn-outline btn-success">View Recipe</button>
                </div>
            </div>
        </div>
    );
};

export default Chef;