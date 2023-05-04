
import React, { useState } from 'react';
import { useContext } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'
import "./Navigation.css"

const Navigation = () => {
    const { user, logOut, loading, setLoading ,auth } = useContext(AuthContext)


    const [open, setOpen] = useState(false)

    // console.log(user);



    return (
        <div className=" md:navbar  bg-red-500 py-5 md:py-10 md:px-20 shadow">
            <div className="flex-1">
                <h1 className="  text-center normal-case font-bold text-yellow-200 my-5 text-xl md:text-4xl">Chicken Chabai Recipe</h1>
            </div>
            <div className="flex-none gap-2">
                <div className='text-gray-700'>
                    <ul className=' flex gap-2 font-bold items-center justify-center'>
                        <NavLink className={`block  lg:inline-block   ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to='/'>Home</NavLink>
                        <NavLink className={`block  lg:inline-block   ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to="/blogs">Blogs</NavLink>
                        
                        <>
                            {

                                user ? <>

                                    <>
                                        {

                                            user?.displayName ? <div className="w-8 h-8 rounded-full  ml-2 md:ml-5 border-2 border-yellow-300" ><img className=' overflow-hidden bg-cover rounded-full' src={user.photoURL} title={user?.displayName ? user?.displayName : 'No Name'} alt="" /></div> : <UserCircleIcon title={user?.displayName ? user?.displayName : 'No Name'} className="h-8 w-8 ml-2 md:ml-5 text-yellow-200" />
                                        }


                                    </>
                                    <NavLink onClick={() => { logOut() }} className={`block  lg:inline-block  ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to="/login">LogOut<ArrowRightOnRectangleIcon className='h-6 w-6 text-white inline'></ArrowRightOnRectangleIcon></NavLink>

                                </> : <NavLink className={`block lg:inline-block  ${({ isActive }) => (isActive ? 'active' : 'inactive')}`} to="/login">Login</NavLink>

                            }
                        </>
                    </ul>

                </div>
                {/* <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="/images/stock/photo-1534528741775-53994a69daeb.jpg" />
                        </div>
                    </label>

                </div> */}
            </div>
        </div>
    );
};

export default Navigation;