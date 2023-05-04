
import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../provider/AuthProvider';
import { UserCircleIcon, ArrowRightOnRectangleIcon } from '@heroicons/react/24/outline'

const Navigation = () => {
    const { user, logOut, loading,setLoading } = useContext(AuthContext)


   
    // console.log(user);



    return (
        <div className="navbar bg-red-500 md:px-20 shadow">
            <div className="flex-1">
                <h1 className="   normal-case font-bold text-yellow-200 text-xl">Chicken Chabai Recipe</h1>
            </div>
            <div className="flex-none gap-2">
                <div className='text-gray-700'>
                    <ul className=' flex gap-2 font-bold'>
                        <Link to="/" >Home</Link>
                        <Link to="/blogs" >Blog</Link>
                        <>
                            {

                                user ? <>

                                    <>
                                        {

                                            user?.photoURL ? <div className="w-8 h-8 rounded-full  ml-2 md:ml-5 border-2 border-yellow-300" ><img className=' overflow-hidden bg-cover rounded-full' src={user.photoURL} title={user?.displayName} alt="" /></div> : <UserCircleIcon className="h-8 w-8 ml-2 md:ml-5 text-yellow-200" />
                                        }


                                    </>
                                    <Link onClick={() => { logOut() }} to="/login" >Log Out <ArrowRightOnRectangleIcon className='h-6 w-6 text-white inline'></ArrowRightOnRectangleIcon> </Link>

                                </> : <Link to="/login" >Login</Link>

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