"use client";
import { Building } from "lucide-react";
import Link from "next/link";
import React, { use } from "react";

import { usePathname } from "next/navigation";
export default function HomeNavbar() {
  const pathname = usePathname();
  console.log(pathname);
  const navLinks = [
    {
      title: "Dashboard",
      href: "/dashboard/home/overview",
    },
    {
      title: "Getting Started",
      href: "/dashboard/home/getting-started",
    },
    {
      title: "Announcements",
      href: "/dashboard/home/announcements",
    },
  ];
  return (
    <div className="h-32 bg-blue-600 p-5 bg-slate-50 border-b border-slate-300">
      <div className="flex space-x-3">
        <div className="flex w-12 h-12 rounded-lg bg-white items-center justify-center">
          <Building></Building>
        </div>
        <div className="flex flex-col">
          <p className="text-slate-700 font-semibold">PHYSDEV - IMS</p>
          <span className="text-sm">Welcome</span>
        </div>
      </div>
      <nav className="sticky mt-6 flex space-x-4">
        {navLinks.map((item, i) => {
          return (
            <Link
              key={i}
              href={item.href}
              className={
                '${pathname===item.href ? "py-1 border-b-2 border-blue-600" : "py-1"}'
              }
            >
              {item.title}
            </Link>
          );
        })}
      </nav>
    </div>
  );
}
