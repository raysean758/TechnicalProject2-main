import { 
    Blocks, 
    ChartCandlestick, 
    ChartNoAxesCombined, 
    CircleChevronRight, 
    CirclePlus, 
    FileText, 
    House, 
    Library, 
    ShoppingCart 
  } from 'lucide-react';
  import Link from 'next/link';
  import React from 'react';
 
import CollapsibleLink from './CollapsibleLink';
import SidebarDropdownLink from './SidebarDropdownLink';
  
  export default function Sidebar() {
    const inventoryLinks = [
      { title: "Items", href: "/dashboard/inventory" },
      { title: "Categories", href: "/dashboard/inventory/categories/new/" },
      { title: "Brands", href: "/dashboard/inventory" },
      { title: "Units", href: "/dashboard/inventor" },
      { title: "Inventory Adjustments", href: "/dashboard/inventory" },
    ];
    const salesLinks = [
      { title: "Sales Orders", href: "#" },
      { title: "Invoices", href: "#" },
      { title: "Sales Receipts", href: "#" },
      { title: "Credit Notes", href: "#" },
    ];
  
    return (
      <div className="w-60 min-h-screen bg-slate-800 text-slate-50 fixed">
        {/* Top */}
        <div className="flex flex-col">
          {/* Logo */}
          <Link href="#" className="bg-slate-950 flex space-x-2 items-center py-3 px-2">
            <Library />
            <span className="text-xl font-semibold">Inventory</span>
          </Link>
  
          {/* Links */}
          <nav className="flex flex-col gap-3 px-3 py-6">
            <Link href="#" className="flex items-center space-x-2 bg-blue-600 text-slate-50 p-2 rounded-md">
              <House className="w-4 h-4" />
              <span>Home</span>
            </Link>
  <SidebarDropdownLink title="Inventory" items={inventoryLinks}/>
  <SidebarDropdownLink title="Sales" items={salesLinks} />

            <button className="p-2 flex items-center space-x-2">
              <ShoppingCart className="w-4 h-4" />
              <span>Purchases</span>
            </button>
  
            <Link href="#" className="p-2 flex items-center space-x-2">
              <Blocks className="w-4 h-4" />
              <span>Integrations</span>
            </Link>
  
            <Link href="#" className="p-2 flex items-center space-x-2">
              <ChartNoAxesCombined className="w-4 h-4" />
              <span>Reports</span>
            </Link>
  
            <Link href="#" className="p-2 flex items-center space-x-2">
              <FileText className="w-4 h-4" />
              <span>Documents</span>
            </Link>
          </nav>
        </div>
  
        {/* Bottom */}
        <div className="flex flex-col">
          <button className="bg-slate-950 flex space-x-2 items-center justify-center py-3 px-2">
            <CircleChevronRight />
          </button>
        </div>
      </div>
    );
  }