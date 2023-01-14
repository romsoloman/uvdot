import { Box, Container, Grid, Typography } from "@mui/material";
import i18next from "i18next";
import Image from "next/image";
import React from "react";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import check from "../../public/assets/icons/general/check.svg";
import { useTranslation } from "react-i18next";

export const General = () => {
  const { t } = useTranslation();
  return (
    <StyledWrapper sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid container item xs={12} md={4}>
            <Grid item xs={12}>
              <Typography variant="h5" fontWeight={700} color="secondary.main">
                {t("general.headtitle")}
              </Typography>
            </Grid>
            <Typography fontWeight={600} variant="h2" gutterBottom>
              {t("general.title")}
            </Typography>
            <Typography variant="h6" sx={{ color: theme.palette.grey[700] }}>
              {t("general.subtitle")}
            </Typography>
          </Grid>
          <Grid container item xs={12} md={6}>
            <Grid item>
              <Typography fontWeight={600} sx={{ mt: { xs: 4, md: 0 } }}>
                {t("general.explanation.title")}{" "}
              </Typography>
            </Grid>
            <Grid container spacing={2} sx={{ mt: { xs: 1, md: 4 } }}>
              {Array.from(Array(8), (e, i) => {
                return (
                  <Grid key={i} item xs={12} md={6} display="flex">
                    <Image src={check} alt="check" width={15} height={15} />
                    <Typography
                      variant="body2"
                      sx={{ ml: 2, color: theme.palette.grey[700] }}
                    >
                      {t(`general.explanation.caption${i + 1}`)}
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
