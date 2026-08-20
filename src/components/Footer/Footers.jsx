import React from 'react';
import { FaXTwitter, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa6';

const Footers = () => {
    return (
        <div className='bg-black'>

            <div className='max-w-7xl mx-auto text-white flex flex-col md:flex-row justify-between items-start py-15 gap-10'>

                <div className='max-w-xs space-y-4'>
                    <h2 className='font-semibold text-lg'>CS — Ticket System</h2>
                    <p className='space-y-3 text-sm leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                </div>

                <div className='space-y-4'>
                    <h2 className='font-semibold text-lg'>Company</h2>
                    <div className='space-y-3 text-sm'>
                        <p>About Us</p>
                        <p>Our Mission</p>
                        <p>Contact Saled</p>
                    </div>

                </div>

                <div className='space-y-4'>
                    <h2 className='font-semibold text-lg'>Services</h2>
                    <div className='space-y-3 text-sm'>
                        <p>Products & Services</p>
                        <p>Customer Stories</p>
                        <p>Download Apps</p>
                    </div>
                </div>

                <div className='space-y-4'>
                    <h2 className='font-semibold text-lg'>Information</h2>
                    <div className='space-y-3 text-sm'>
                        <p>Privacy Policy</p>
                        <p>Terms & Conditions</p>
                        <p>Join Us</p>
                    </div>
                </div>

                <div className="space-y-4">
                    <h3 className="font-semibold text-lg">Social Links</h3>
                    <ul className="space-y-3 text-sm">
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition">
                                <FaXTwitter className="size-4" />
                                <span>@CS — Ticket System</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition">
                                <FaLinkedin className="size-4" />
                                <span>@CS — Ticket System</span>
                            </a>
                        </li>
                        <li>
                            <a href="#" className="flex items-center gap-2 hover:text-white transition">
                                <FaFacebook className="size-4" />
                                <span>@CS — Ticket System</span>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:support@cst.com" className="flex items-center gap-2 hover:text-white transition">
                                <FaEnvelope className="size-4" />
                                <span>support@cst.com</span>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            {/* strate line */}
            <hr className="max-w-7xl mx-auto border-t border-gray-400/40 w-full" />

            <div className='text-center text-white mt-5 mb-8 p-5'>
                <p>© 2025 CS — Ticket System. All rights reserved.</p>
            </div>
        </div>);
};

export default Footers;