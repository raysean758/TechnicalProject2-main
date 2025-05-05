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
              <CollapsibleLink href="#" title="Items"/>
              <CollapsibleLink href="#" title="Item Groups"/>
              <CollapsibleLink href="#" title="Inventory Adjustments"/>
              </CollapsibleContent>
            </Collapsible>

    )
}