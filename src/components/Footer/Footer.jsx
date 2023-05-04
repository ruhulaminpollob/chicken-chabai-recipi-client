import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className='bg-gray-900 mt-10 p-5 md:p-20 text-white'>
            <div className=' md:flex justify-around gap-5'>
                <div className='flex flex-col max-w-sm gap-5 mt-5'>
                <Link to="/"> <h1 className='text-2xl font-bold'>Carry<span className='text-violet-400'>Jobs</span></h1></Link>
                    <p>There are many variations of passages of Lorem Ipsum , but the majority have suffered alteration in some form.</p>
                    <div>
                        <img src="./icons/social.png" alt="" />
                    </div>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <h1 className='text-xl font-bold'>Company</h1>
                    <p>About Us</p>
                    <p>Work</p>
                    <p>Latest News</p>
                    <p>Careers</p>

                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <h1 className='text-xl font-bold'>Product</h1>
                    <p>Prototype</p>
                    <p>Plans & Pricing</p>
                    <p>Customers</p>
                    <p>Integrations</p>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <h1 className='text-xl font-bold'>Support</h1>
                    <p>Help Desk</p>
                    <p>Sales</p>
                    <p>Become a Partner</p>
                    <p>Developers</p>
                </div>
                <div className='flex flex-col gap-5 mt-5'>
                    <h1 className='text-xl font-bold'>Contact</h1>
                    <p>524 Broadway, NYC</p>
                    <p>+1777-978-5570</p>
                </div>
            </div>
            <hr className=' border-b my-4 border-gray-400' />
            <div className='md:flex justify-between text-center'>
                <p>@2023 CareerHub. All Rights Reserved</p>
                <p>Powered by CareerHub</p>
            </div>
        </footer>
    );
};

export default Footer;