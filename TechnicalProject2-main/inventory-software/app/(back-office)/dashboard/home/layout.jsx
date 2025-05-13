import Home from "./page";
import React from "react";

function HomeNavbar() {
}
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
