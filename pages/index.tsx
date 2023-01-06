import * as React from "react";
import type { NextPage } from "next";
import Header from "../src/Header/Header";
import { Activity } from "../src/Activity/Activity";
import { Contact } from "../src/Contact/Contact";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Activity />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
