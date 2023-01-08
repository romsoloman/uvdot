import React from "react";
import Head from "next/head";

interface DynamicSeoProps {
  title: string;
  description: string;
  name: string;
  thumbnailUrl: string;
}

export const DynamicSeo = ({
  title,
  description,
  name,
  thumbnailUrl,
}: DynamicSeoProps) => {
  return (
    <Head>
      <title>{title}</title>
      <meta property="og:locale" content="he_IL" key="og:locale" />
      <meta property="title" content={title} key="title" />
      <meta property="description" content={description} key="description" />
      <meta property="og:title" content={title} key="og:title" />
      <meta
        property="og:description"
        content={description}
        key="og:description"
      />
      <meta property="og:type" content="website" key="og:type" />
      <meta property="og:image" content={thumbnailUrl} key="og:image" />
      <meta
        property="og:image:secure_url"
        content={thumbnailUrl}
        key="og:image:secure_url"
      />
      <meta property="og:image:width" content="150" key="og:image:width" />
      <meta property="og:image:height" content="150" key="og:image:height" />
      <link rel="logo icon" href="/assets/icons/favicon/favicon.ico" />
      <link rel="logo icon" href="/assets/icons/favicon/favicon16.png" />
      <link rel="logo icon" href="/assets/icons/favicon/favicon32.png" />
      <link
        rel="logo icon"
        href="/assets/icons/favicon/android-chrome-big.png"
      />
      <link
        rel="logo icon"
        href="/assets/icons/favicon/android-chrome-small.png"
      />
      <link rel="logo icon" href="/assets/icons/favicon/apple-touch-icon.png" />
    </Head>
  );
};
