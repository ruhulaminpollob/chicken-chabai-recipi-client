
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';

const Navigation = () => {

    return (
        <div className="navbar bg-red-600">
            <div className="flex-1">
                <h1 className="   normal-case font-bold text-yellow-200 text-xl">Chicken Chabai Recipe</h1>
            </div>
            <div className="flex-none gap-2">
                <div>
                    <ul className=' flex gap-2 font-bold'>
                        <Link to="/home" >Home</Link>
                        <Link to="/blogs" >Blog</Link>
                        <Link to="/login" >Login</Link>
                    </ul>

                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>
                    
                </div>
            </div>
        </div>
    );
};

export default Navigation;