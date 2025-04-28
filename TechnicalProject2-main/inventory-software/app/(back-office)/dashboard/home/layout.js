import Home from '@/app/page';
import HomeNavbar from '@/components/HomeNavbar';
import React from 'react';
export default function Layout({children}) {
    return (
        <div className=''>
            <HomeNavbar/>
            {children}
        </div>
    )
}