import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import logo from "../../public/assets/images/appbar/logo.png";

export default function Logo({}) {
  const { t } = useTranslation("appbar");
  return <Image src={logo} height={60} width={90} alt={t("logo")} />;
}
