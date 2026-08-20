import React, { use } from 'react';
import Cart from '../Cart/Cart';

const TicketCart = ({ customersPromise, clickCart, setClickCart }) => {
    const customersData = use(customersPromise);

    return (
        <div>

            <div class="min-h-screen p-3 md:p-6 font-sans text-gray-800 bg-gray-100">

                {/*  Main Grid Layout: Left Content (2 Columns/Span) + Right Sidebar (1 Column)  */}
                <div class="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

                    {/*  LEFT SECTION: Customer Tickets (Spans 2 columns on large screens)  */}
                    <div class="lg:col-span-3 space-y-4">
                        <h2 class="text-2xl font-bold text-[#34485A] tracking-tight">
                            Customer Tickets
                        </h2>

                        {/*  Ticket Cards Grid (2 Columns)  */}
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/*  Card 1  */}
                            {
                                customersData.map(customer => <Cart customer={customer} clickCart={clickCart}setClickCart={setClickCart}></Cart>)
                            }

                        </div>
                    </div>

                    {/*  RIGHT SECTION: Task Status Sidebar  */}
                    <div class="space-y-8 pl-0 lg:pl-2">

                        {/*  Task Status Block  */}
                        <div class="space-y-2">
                            <h3 class="text-xl font-bold text-[#34485A] tracking-tight">
                                Task Status
                            </h3>
                            <p class="text-sm text-slate-500">
                                Select a ticket to add to Task Status
                            </p>
                        </div>

                        {/*  Resolved Task Block  */}
                        <div class="space-y-2">
                            <h3 class="text-xl font-bold text-[#34485A] tracking-tight">
                                Resolved Task
                            </h3>
                            <p class="text-sm text-slate-500">
                                No resolved tasks yet.
                            </p>
                        </div>

                    </div>

                </div>
            </div>

        </div>
    );
};

export default TicketCart;