// pages/index.tsx

import * as React from "react";
import type { NextPage } from "next";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Header from "../src/Header/Header";

const Home: NextPage = () => {
  return (
    <React.Fragment>
      <Header />
    </React.Fragment>
  );
};

export default Home;
