import React, { useState } from 'react';
import { HiMenu, HiX } from 'react-icons/hi'; // Hamburger and Close Icon
import img2 from '../../assets/vector1.png';

const Navbar = ({ taskSatusList = [], resolvedList = [] }) => {
    // mobile hamber open/close useState
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className='bg-gray-100'>
            {/* Navbar Header */}
            <div className='bg-white relative z-50 shadow-sm'>
                <nav className='max-w-7xl mx-auto flex justify-between items-center h-16 px-4 md:px-6'>
                    {/* Brand Logo */}
                    <div>
                        <h2 className='text-black font-bold text-lg md:text-xl'>CS--Ticket System</h2>
                    </div>

                    {/* Desktop Menu */}
                    <div className='hidden md:flex items-center gap-8'>
                        <a href="#" className='text-black hover:text-[#632EE3] transition font-medium'>Home</a>
                        <a href="#" className='text-black hover:text-[#632EE3] transition font-medium'>FAQ</a>
                        <a href="#" className='text-black hover:text-[#632EE3] transition font-medium'>Changelog</a>
                        <a href="#" className='text-black hover:text-[#632EE3] transition font-medium'>Download</a>
                        <a href="#" className='text-black hover:text-[#632EE3] transition font-medium'>Contact</a>

                        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2 rounded-sm text-white font-medium hover:opacity-90 transition'>
                            + New Ticket
                        </button>
                    </div>

                    {/* Mobile Hamburger Button - (md:hidden) */}
                    <div className='md:hidden flex items-center'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className='text-black text-2xl focus:outline-none p-1'
                        >
                            {isOpen ? <HiX /> : <HiMenu />}
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Menu */}
                {isOpen && (
                    <div className='md:hidden bg-white border-t border-gray-100 px-4 pt-2 pb-6 space-y-3 flex flex-col shadow-lg items-center'>
                        <a href="#" className='text-black py-1.5 hover:text-[#632EE3] font-medium'>Home</a>
                        <a href="#" className='text-black py-1.5 hover:text-[#632EE3] font-medium'>FAQ</a>
                        <a href="#" className='text-black py-1.5 hover:text-[#632EE3] font-medium'>Changelog</a>
                        <a href="#" className='text-black py-1.5 hover:text-[#632EE3] font-medium'>Download</a>
                        <a href="#" className='text-black py-1.5 hover:text-[#632EE3] font-medium'>Contact</a>

                        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2.5 rounded-sm text-white font-medium w-full mt-2'>
                            + New Ticket
                        </button>
                    </div>
                )}
            </div>

            {/* Banner Section */}
            <div className="max-w-7xl mx-auto pt-6 md:pt-10 grid grid-cols-1 md:grid-cols-2 gap-6 w-full px-4 pb-10">

                {/* In-Progress Card */}
                <div className="relative overflow-hidden rounded-xl bg-linear-to-tr from-[#632EE3] via-[#8B40E2] to-[#9F62F2] p-6 md:p-8 text-white shadow-lg flex flex-col items-center justify-center min-h-40 md:min-h-48">
                    <img src={img2} alt="" className="absolute top-0 left-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay" />
                    <img src={img2} alt="" className="absolute top-0 right-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay -scale-x-100" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-lg md:text-xl font-medium tracking-wide text-white/90">In-Progress</span>
                        <span className="text-4xl md:text-6xl font-semibold tracking-tight">{taskSatusList.length}</span>
                    </div>
                </div>

                {/* Resolved Card */}
                <div className="relative overflow-hidden rounded-xl bg-linear-to-tr from-[#54CF68] via-[#21B573] to-[#00827A] p-6 md:p-8 text-white shadow-lg flex flex-col items-center justify-center min-h-40 md:min-h-48">
                    <img src={img2} alt="" className="absolute top-0 left-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay" />
                    <img src={img2} alt="" className="absolute top-0 right-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay -scale-x-100" />

                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-lg md:text-xl font-medium tracking-wide text-white/90">Resolved</span>
                        <span className="text-4xl md:text-6xl font-semibold tracking-tight">{resolvedList.length}</span>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Navbar;