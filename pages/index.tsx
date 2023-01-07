import * as React from "react";
import type { NextPage } from "next";
import Header from "../src/Header/Header";
import { Activity } from "../src/Activity/Activity";
import { Contact } from "../src/Contact/Contact";
import { Stats } from "../src/Stats/Stats";
import { General } from "../src/General/General";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Activity />
      <Stats />
      <General />
      <Contact />
    </React.Fragment>
  );
};

export default Home;
