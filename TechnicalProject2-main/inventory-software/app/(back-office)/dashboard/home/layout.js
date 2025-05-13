import Home from "./page";
import HomeNavbar from "@/components/HomeNavbar";
import React from "react";

export default function Layout({ children }) {
  return (
    <>
      <HomeNavbar />
      <main>
        <Home />
        {children}
      </main>
    </>
  );
}
