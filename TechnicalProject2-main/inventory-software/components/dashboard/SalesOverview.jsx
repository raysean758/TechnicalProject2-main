import Sales from '@/app/(back-office)/dashboard/sales/page';
import { CheckCircle2 } from 'lucide-react';
import React from 'react';
import SalesActivityCard from './SalesActivityCard';

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
    ];

    const inventorySummary = [
        {
            title: "Quantity in stock",
            number: 10,
        },
        {
            title: "Quantity received",
            number: 0,
        },
    ];

    return (
        <div className='bg-blue-50 border-b border-slate-300 grid grid-cols-12 gap-4'>
            {/* Sales activity */}
            <div className="col-span-8 border-r border-slate-300 p-8">
                <h2 className='mb-6 text-2xl'>Sales Activity</h2>
                <div className="pr-8 grid grid-cols-4 gap-4">
                    {salesActivity.map((item, i) => (
                        <SalesActivityCard item={item} key={i} />
                    ))}
                </div>
            </div>

            {/* Inventory Summary */}
            <div className="col-span-4 p-8">
                <h2 className='mb-6 text-2xl'>Inventory Summary</h2>
                <div className="space-y-4">
                    {inventorySummary.map((item, i) => (
                        <div key={i} className="bg-white p-4 rounded shadow text-sm">
                            <p className="text-gray-500">{item.title}</p>
                            <p className="text-xl font-bold">{item.number}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}