import React, { use } from 'react';
import Cart from '../Cart/Cart';

const TicketCart = ({
    customersPromise,
    taskSatusList,
    setTaskSatusList,
    resolvedList,
    setResolvedList
}) => {
    const customersData = use(customersPromise);
 
    const handleComplete = (task) => {
        // Task Status remove
        setTaskSatusList((prev) => prev.filter((item) => item.id !== task.id));
        // Resolved add
        setResolvedList((prev) => [...prev, task]);
    };

    return (
        <div className="min-h-screen p-3 md:p-6 font-sans text-gray-800 bg-gray-100">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-5 max-w-7xl mx-auto">

                {/* LEFT SECTION: Customer Tickets */}
                <div className="lg:col-span-3 space-y-4">
                    <h2 className="text-2xl font-bold text-[#34485A] tracking-tight">
                        Customer Tickets
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        {customersData.map((customer) => (
                            <Cart
                                key={customer.id}
                                customer={customer}
                                taskSatusList={taskSatusList}
                                setTaskSatusList={setTaskSatusList}
                            />
                        ))}
                    </div>
                </div>

                {/* RIGHT SECTION: Task Status Sidebar */}
                <div className="space-y-8 pl-0 lg:pl-2">

                    {/* Task Status Block */}
                    <div className="space-y-3 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-[#34485A] tracking-tight">
                            Task Status
                        </h3>

                        {taskSatusList.length === 0 ? (
                            <p className="text-sm text-slate-500">
                                Select a ticket to add to Task Status
                            </p>
                        ) : (
                            <div className="space-y-3">
                                {taskSatusList.map((task) => (
                                    <div key={task.id} className="p-3 bg-slate-50 rounded-lg border border-slate-200 space-y-2">
                                        <h4 className="text-sm font-semibold text-slate-800">{task.title}</h4>
                                        <button
                                            onClick={() => handleComplete(task)}
                                            className="w-full bg-[#02A53B] hover:bg-emerald-500 text-white text-xs font-semibold py-2 rounded-md transition"
                                        >
                                            Complete
                                        </button>
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Resolved Task Block */}
                    <div className="space-y-2 bg-white p-4 rounded-xl shadow-sm border border-slate-100">
                        <h3 className="text-xl font-bold text-[#34485A] tracking-tight">
                            Resolved Task
                        </h3>
                        {resolvedList?.length === 0 ? (
                            <p className="text-sm text-slate-500">No resolved tasks yet.</p>
                        ) : (
                            <div className="space-y-2">
                                {resolvedList?.map((res) => (
                                    <div key={res.id} className="p-2 bg-emerald-50 text-black text-xs font-medium rounded border border-emerald-200">
                                        {res.title}
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>

            </div>
        </div>
    );
};

export default TicketCart;