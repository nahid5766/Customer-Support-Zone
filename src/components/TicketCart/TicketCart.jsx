import React, { use } from 'react';
import Cart from '../Cart/Cart';

const TicketCart = ({ customersPromise, taskSatusList, setTaskSatusList }) => {
    const customersData = use(customersPromise);

    return (
        <div>

            <div className="min-h-screen p-3 md:p-6 font-sans text-gray-800 bg-gray-100">

                {/*  Main Grid Layout: Left Content (2 Columns/Span) + Right Sidebar (1 Column)  */}
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

                    {/*  LEFT SECTION: Customer Tickets (Spans 2 columns on large screens)  */}
                    <div className="lg:col-span-3 space-y-4">
                        <h2 className="text-2xl font-bold text-[#34485A] tracking-tight">
                            Customer Tickets
                        </h2>

                        {/*  Ticket Cards Grid (2 Columns)  */}
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                            {/*  Card 1  */}
                            {
                                customersData.map(customer => <Cart customer={customer} taskSatusList={taskSatusList} setTaskSatusList={setTaskSatusList}></Cart>)
                            }

                        </div>
                    </div>

                    {/*  RIGHT SECTION: Task Status Sidebar  */}
                    <div className="space-y-8 pl-0 lg:pl-2">

                        {/*  Task Status Block  */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#34485A] tracking-tight">
                                Task Status
                            </h3>
                            <p className="text-sm text-slate-500">
                                Select a ticket to add to Task Status
                            </p>
                        </div>

                        {/*  Resolved Task Block  */}
                        <div className="space-y-2">
                            <h3 className="text-xl font-bold text-[#34485A] tracking-tight">
                                Resolved Task
                            </h3>
                            <p className="text-sm text-slate-500">
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