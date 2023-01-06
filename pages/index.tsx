import * as React from "react";
import type { NextPage } from "next";
import Header from "../src/Header/Header";
import { Activity } from "../src/Activity/Activity";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
      <Activity />
    </React.Fragment>
  );
};

export default Home;
