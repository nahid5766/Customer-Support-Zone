import React from 'react';
import img2 from '../../assets/vector1.png';

const Navbar = () => {
    return (
        <div className='bg-gray-100'>
            {/* Navbar here */}
            <div className='bg-white'>
                <nav className='max-w-7xl mx-auto flex justify-between items-center h-13'>
                    <div>
                        <h2 className='text-black font-bold'>CS--Ticket System</h2>
                    </div>
                    <div className='flex items-center gap-8'>
                        <a href="#" className='text-black'>Home</a>
                        <a href="#" className='text-black'>FAQ </a>
                        <a href="#" className='text-black'>Changelog</a>
                        <a href="#" className='text-black'>Download</a>
                        <a href="#" className='text-black'>Contact</a>

                        <button className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] px-6 py-2 rounded-sm text-white'>+ New Ticket</button>
                    </div>
                </nav>
            </div>

            {/* banner section */}
            <div className="max-w-7xl mx-auto pt-16 grid grid-cols-1 md:grid-cols-2 gap-6 w-full p-4 pb-16">

                {/*  In-Progress Card  */}
                <div class="relative overflow-hidden rounded-xl bg-linear-to-tr from-[#632EE3] via-[#8B40E2] to-[#9F62F2] p-8 text-white shadow-lg flex flex-col items-center justify-center min-h-50">

                    {/*  Left Background Vector Overlay  */}
                    <img
                        src={img2}
                        alt=""
                        className="absolute top-0 left-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay"
                    />
                    {/*  Right Background Vector Overlay (Flipped)  */}
                    <img
                        src={img2}
                        alt=""
                        className="absolute top-0 right-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay -scale-x-100"
                    />

                    {/*  Card Content  */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-xl font-medium tracking-wide text-white/90">In-Progress</span>
                        <span className="text-6xl font-semibold tracking-tight">0</span>
                    </div>
                </div>

                {/*  Resolved Card  */}
                <div className="relative overflow-hidden rounded-xl bg-linear-to-tr from-[#54CF68] via-[#21B573] to-[#00827A] p-8 text-white shadow-lg flex flex-col items-center justify-center min-h-50">
                    {/*  Left Background Vector Overlay  */}
                    <img
                        src={img2}
                        alt=""
                        className="absolute top-0 left-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay"
                    />
                    {/*  Right Background Vector Overlay (Flipped)  */}
                    <img
                        src={img2}
                        alt=""
                        className="absolute top-0 right-0 h-full w-auto object-cover opacity-100 pointer-events-none mix-blend-overlay -scale-x-100"
                    />

                    {/*  Card Content  */}
                    <div className="relative z-10 flex flex-col items-center gap-2">
                        <span className="text-xl font-medium tracking-wide text-white/90">Resolved</span>
                        <span class="text-6xl font-semibold tracking-tight">0</span>
                    </div>
                </div>
            </div>

        </div>


    );
};

export default Navbar;