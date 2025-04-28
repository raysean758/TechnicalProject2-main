import { Bell, Grip, History, Plus, PlusIcon, Search, Settings, Users } from 'lucide-react'
import React from 'react'
import SearchInput from './SearchInput'
import Image from 'next/image'

export default function Header() {
    return (
        <div className='bg-gray-100 h-12 flex items-center justify-between px-8 border-b border-gray-200 '>
            <div className="flex gap-3">
        {/* Recent Activities*/}
        <button>
            <History className="w-6 h-6"/>
        </button>
        {/* search*/}
        <SearchInput/>
         </div>
         <div className="flex">
            {/*Plus Icon*/}
          <div className="pr-2 border-r border-gray-300">
          <button className="p-1 bg-blue-600 rounded-lg hover:bg-slate-200">
            <PlusIcon className="text-slate-50 w-4 h-4"></PlusIcon>
           </button>
          </div>
          <div className="flex border-r border-gray-300 space-x-2">    
          <button className="p-1 rounded-lg hover:bg-slate-200">
            <Users className="text-slate-900 w-4 h-4"></Users>
           </button>
           <button className="p-1 rounded-lg hover:bg-slate-200">
            <Bell className="text-slate-900 w-4 h-4"></Bell>
           </button>
           <button className="p-1 rounded-lg hover:bg-slate-200">
            <Settings className="text-slate-900 w-4 h-4"></Settings>
           </button>
           <Grip className="w-6 h-6 text-slate-900"></Grip>
          </div>
         </div>
        </div>
    )
}