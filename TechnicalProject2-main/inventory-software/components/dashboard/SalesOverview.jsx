import { Check, CheckCircle, CheckCircle2 } from 'lucide-react'
import React from 'react'

export default function SalesOverview() {
    return (
        <div className='bg-blue-100 border-b border-slate-300 p-8 grid-cols-12'>
{/*Sales activity*/}
<div className="col-span-8">
    <h2 className='mb-6 text-2xl'>Sales Activity</h2>                                                                                                                                                                                                                                                                                                                                           
    <div className="grid grid-col-4">                                                                                                                                                                                                                                                                                                                                           
        {/* Cards */}
        <div className="shadow rounded-lg border-slate-200 hover:border-blue-40
         bg-white p-8 cursor-pointer flex items-center flex-col gap-3 transition-all duration-300">
        <h4 className='font-semibold text-4x1'>10</h4>
        <small className='text-slate-500'>QTY</small>
        <div className="flex items-center space-x-2 text-slate-500">
            <CheckCircle2 className='w-4 h-4'/>
            <span className='uppercase'>To be Packed</span>
        </div>
        </div>
    </div>
</div>
    <div className="col-span-4">
    <h2 className='mb-6 text-2xl'>Inventory Summary</h2>  
    <div className="">
        <div className="shadow rounded-lg border-slate-200 hover:border-blue-40 bg-white p-8 cursor-pointer flex items-center gap-3 justify-between transition-all duration-300">
        <div className="flex items-center space-x-2">
            <h2 className='text-slate-500 uppercase'>Quantity in hand</h2>
            <h4 className='font-semibold text-4x1'>10</h4>
        </div>
        </div>                                                                                                                                                                                                                                                                                                                          
    </div>
</div>
</div>
    )
}