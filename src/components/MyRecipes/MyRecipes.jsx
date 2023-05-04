
import React from 'react';
import Rating from 'react-rating';
import { FaBookmark, FaRegBookmark, FaRegStar, FaStar } from "react-icons/fa";
import { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MyRecipes = ({ singleRecipe, ratings }) => {
    const { id, name, ingredients, description } = singleRecipe;


    const [fav, setFav] = useState(false)

    const handelBookmark = () => {
        setFav(!fav)
        if (!fav) {

            toast(`${name}  Marked As Your Favorite Recipe`)
        }
    }

    return (
        <div className='shadow-2xl p-5 rounded bg-slate-200'>
            <ToastContainer />
            <h1 className='text-2xl font-bold my-5 text-center'>{name}</h1>

            <div className='grid grid-cols-1 md:grid-cols-2'>
                <div>
                    <h1 className='text-xl font-bold my-5'>Ingredients</h1>
                    {
                        ingredients.map(ingred => <li key={ingred}>{ingred}</li>)
                    }
                </div>

                <div>
                    <h1 className='text-xl font-bold my-5'>Cooking Method</h1>
                    <p>{description}</p>
                </div>


            </div>
            <div className='flex justify-between'>
                <div className='flex gap-2 items-center mt-2'>
                    <p>{ratings}</p>
                    <Rating
                        placeholderRating={ratings}
                        readonly
                        emptySymbol={<FaRegStar className='text-yellow-400'></FaRegStar>}
                        placeholderSymbol={<FaStar className='text-yellow-400'></FaStar>}
                        fullSymbol={<FaStar className='text-yellow-400'></FaStar>}></Rating>
                </div>
                <div>
                    <button onClick={handelBookmark} className="flex items-center gap-2 font-bold" > <span>Mark As Favorite </span>{fav ? <FaBookmark /> : <FaRegBookmark />}</button>
                </div>
            </div>

           
        </div>
    );
};

export default MyRecipes;