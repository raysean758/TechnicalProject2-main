import { CirclePlus } from "lucide-react";
import Link from "next/link";
import React from "react";

export default function CollapsibleLink({ href, title }) {
  return (
    <Link
      href={href}
      className="flex items-center justify-between pl-8 pr-4 hover:bg-slate-700 transition-all duration-300 py-2.5 rounded-md"
    >
      <span className="text-sm">{title}</span>
      <CirclePlus className="w-4 h-4" />
    </Link>
  );
}
