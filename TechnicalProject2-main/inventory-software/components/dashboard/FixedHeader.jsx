import { LayoutGrid, List, PlusIcon } from 'lucide-react';
import Link from 'next/link';
import React from 'react' ;

export default function FixeHeader({newLink}) {
    return (
        <div className='flex justify-between items-center bg-white py-5 px-4'>
            <button className='text-2xl'>All Items</button>
            <div className="flex">
                {/*New */}
                <Link href={newLink} className="p-1 bg-blue-600 px-3 rounded-md hover:bg-slate-200 flex items-center space-x-2 text-white ">
            <PlusIcon className="w-4 h-4 "></PlusIcon>
            <span>New</span>
           </Link>
                {/*layout */}
                <div className="flex gap-4 rounded-md overflow-hidden">
                    <button className='bg-gray-300 p-2 border-r border-gray-400 '>
                        <List className='w-4 h-4'/>
                    </button>
                    <button>
                        <LayoutGrid className='w-4 h-4'></LayoutGrid>                    </button>
                </div>
             </div>
        </div>
    );
}