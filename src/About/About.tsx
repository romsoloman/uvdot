import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { useTranslation } from "react-i18next";
import { StyledWrapper } from "../styled/StyledWrapper";

export const About = () => {
  const { t } = useTranslation("");
  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2" gutterBottom textAlign="center">
          {t("about.title")}
        </Typography>
        <Container maxWidth="md">
          <Typography component="h4" variant="h4" gutterBottom>
            {t("about.subtitle2")}
            {t("about.subtitle1")}
          </Typography>
          <Typography component="h4" variant="h4">
            {t("about.subtitle3")}
          </Typography>
        </Container>
      </Container>
    </StyledWrapper>
  );
};
