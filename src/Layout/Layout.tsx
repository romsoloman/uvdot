import React from "react";
import Appbar from "../Appbar/Appbar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      {/* <Footer/> */}
    </>
  );
}
