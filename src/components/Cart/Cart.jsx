import React from 'react';

const Cart = ({ customer, clickCart, setClickCart }) => {
    const isOpen = customer.status === 'Open';

    handleClicks = () => {
        setClickCart(customer)

    }

    return (
        <div onClick={() => handleClicks()} className="bg-white rounded-lg p-5 shadow-sm border border-slate-100 flex flex-col justify-between gap-4">
            <div className="flex items-start justify-between gap-2">
                <h3 className="font-semibold text-slate-900 text-base leading-snug">{customer.title}
                </h3>

                <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold ${isOpen ? 'bg-[#C6F6D5] text-[#15803D]' : 'bg-[#F8F3B9] text-[#9C7700]'}`}>

                    <span className={`w-2 h-2 rounded-full ${isOpen ? 'bg-[#00A859]' : 'bg-[#FEBB0C]'}`}></span>

                    {customer.status}
                </span>
            </div>
            <p className="text-sm text-slate-500 leading-relaxed line-clamp-2">
                {customer.description}
            </p>
            <div className="flex items-center justify-between text-xs pt-1">
                <div className="flex items-center gap-2">
                    <span className="text-slate-400 font-medium">#{customer.id}</span>
                    <span className="font-bold text-red-500 tracking-wider">{customer.priority}</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500">
                    <span>{customer.customer}</span>
                    <div className="flex items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" classNameName="size-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5" />
                        </svg>

                        <span>{customer.createdAt}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cart;