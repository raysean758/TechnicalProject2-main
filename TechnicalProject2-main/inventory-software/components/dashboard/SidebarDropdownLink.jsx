"use client";
import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import { ChartCandlestick, ChevronRight, LucideChartCandlestick } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";
export default function SidebarDropdownLink({title, items, icon}) {
    return (
        <Collapsible>
              <CollapsibleTrigger className="flex justify-between items-center w-full">
                <div className="flex"><LucideChartCandlestick className="w-4 h-4" />
                <span>{title}</span></div>
                <ChevronRight className="w-4 h-4"/>
              </CollapsibleTrigger>
              <CollapsibleContent>
              {items.map((item) => (
          <CollapsibleLink key={item.title} href={item.href} title={item.title} />
        ))}
              </CollapsibleContent>
            </Collapsible>

    )
}