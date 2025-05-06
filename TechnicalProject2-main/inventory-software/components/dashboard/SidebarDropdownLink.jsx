"use client";
import React from "react";
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible";
import { ChartCandlestick, LucideChartCandlestick } from "lucide-react";
import CollapsibleLink from "./CollapsibleLink";
export default function SidebarDropdownLink({title, items, icon}) {
    return (
        <Collapsible>
              <CollapsibleTrigger className="p-2 flex items-center space-x-2">
                <LucideChartCandlestick className="w-4 h-4" />
                <span>{title}</span>
              </CollapsibleTrigger>
              <CollapsibleContent>
              {items.map((item) => (
          <CollapsibleLink key={item.title} href={item.href} title={item.title} />
        ))}
              </CollapsibleContent>
            </Collapsible>

    )
}