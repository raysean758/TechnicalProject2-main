import { CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function SalesOverview() {
    const salesActivity = [
        {
            title: "To be Packed",
            number: 10,
            unit: "QTY",
            href: "#",
            color: "text-red-500",
        },
        {
            title: "To be Delivered",
            number: 0,
            unit: "QTY",
            href: "#",
            color: "text-blue-500",
        },
        {
            title: "To be Invoiced",
            number: 10,
            unit: "QTY",
            href: "#",
            color: "text-green-500",
        }
    ]

    return (
        <div className='bg-blue-100 border-b border-slate-300 p-8 grid grid-cols-12 gap-4'>
            {/* Sales activity */}
            <div className="col-span-8">
                <h2 className='mb-6 text-2xl'>Sales Activity</h2>
                <div className="grid grid-cols-3 gap-4">
                    {salesActivity.map((item, i) => (
                        <div key={i} className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white px-3 py-4 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
                            <h4 className='font-semibold text-3xl'>{item.number}</h4>
                            <small className='text-slate-500'>{item.unit}</small>
                            <div className="flex items-center space-x-2 text-slate-500">
                                <CheckCircle2 className='w-4 h-4' />
                                <span className='uppercase'>{item.title}</span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Inventory Summary */}
            <div className="col-span-4">
                <h2 className='mb-6 text-2xl'>Inventory Summary</h2>
                <div className="">
                    <div className="shadow rounded-lg border border-slate-200 hover:border-blue-400 bg-white py-2 px-4 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300">
                        <h2 className='text-slate-500 uppercase text-sm'>Quantity in hand</h2>
                        <h4 className='font-semibold text-2xl'>10</h4>
                    </div>
                </div>
            </div>
        </div>
    )
}