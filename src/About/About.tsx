import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyledWrapper } from "../styled/StyledWrapper";

export const About = () => {
  const { t } = useTranslation("");
  return (
    <StyledWrapper id="about">
      <Container maxWidth="lg">
        <Typography
          component="h2"
          variant="h2"
          fontWeight={800}
          gutterBottom
          textAlign="center"
        >
          {t("about.title")}
        </Typography>
        <Container maxWidth="md">
          <Typography component="h5" variant="h5" gutterBottom color="grey.700">
            {t("about.subtitle2")}
            {t("about.subtitle1")}
          </Typography>
          <Typography component="h5" variant="h5" color="grey.700">
            {t("about.subtitle3")}
          </Typography>
        </Container>
      </Container>
    </StyledWrapper>
  );
};
