import * as React from "react";
import type { NextPage } from "next";
import Header from "../src/Header/Header";
import { Activity } from "../src/Activity/Activity";
import { Contact } from "../src/Contact/Contact";
import { Stats } from "../src/Stats/Stats";
import { General } from "../src/General/General";
import { About } from "../src/About/About";
import { DynamicSeo } from "../src/Seo/DynamicSeo";
import { useTranslation } from "react-i18next";

const Home: NextPage = () => {
  const { t } = useTranslation();
  return (
    <React.Fragment>
      <DynamicSeo
        title={t("seo.title")}
        description={t("seo.description")}
        thumbnailUrl="../public/assets/images/appbar/logo.png"
        name={t("seo.name")}
      />
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
