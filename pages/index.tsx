import * as React from "react";
import type { NextPage } from "next";
import Header from "../src/Header/Header";
import { Activity } from "../src/Activity/Activity";
import { Contact } from "../src/Contact/Contact";
import { Stats } from "../src/Stats/Stats";
import { General } from "../src/General/General";
import { About } from "../src/About/About";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Activity />
      <Stats />
      <General />
      <About />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
