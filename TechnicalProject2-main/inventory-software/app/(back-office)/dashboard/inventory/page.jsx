"use client";

import FixedHeader from '@/components/dashboard/FixedHeader';
import OptionCard from '@/components/dashboard/OptionCard';
import { Boxes, BoxesIcon, CircleDollarSign, LucideCircleDollarSign, Shirt } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

export default function Inventory() {
    const optionCards = [
        {
            title: "Items",
            description: "Items",
            link: "/dashboard/inventory/items/new",
            linkTitle: "New Item",
            enabled: true,
            icon: Shirt,
        },
        {
            title: "Brands",
            description: "List of Brands",
            link: "/dashboard/inventory/brands/new",
            linkTitle: "New Brand",
            enabled: true,
            icon: CircleDollarSign,
        },
          {
            title: "Units",
            description: "Units",
            link: "/dashboard/inventory/units/new",
            linkTitle: "New Unit",
            enabled: true,
            icon: CircleDollarSign,
        },

    ];

    return (
        <div>
            <FixedHeader newLink="/dashboard/inventory/items/new"/>
            <div className="grid grid-cols-1 lg:grid-cols-2 py-8 px-16 gap-6">
                <div className="shadow-md bg-white flex flex-col items-center justify-center gap-4 p-6 rounded">
                    <h2>Item Groups</h2>
                    <div>
                        <Shirt strokeWidth={0.5} className="w-12 h-12" />
                    </div>
                    <p className="line-clamp-1">Item Groups Variant</p>
                    <Link href="/item-groups" className="py-2 px-3 bg-blue-600 text-white rounded-md hover:bg-slate-200">
                        View Item Groups
                    </Link>
                </div>

                {optionCards.map((card, i) => (
                    <OptionCard optionData={card} key={i} />
                ))}
            </div>
        </div>
    );
}