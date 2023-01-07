import React from "react";
import Appbar from "../Appbar/Appbar";
import { Footer } from "../Footer/Footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Appbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}
