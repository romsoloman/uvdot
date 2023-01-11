import { Container, Grid } from "@mui/material";
import { useTranslation } from "next-i18next";
import React from "react";
import { StatCard } from "../interfaces/stats.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import { StatItem } from "./StatItem";

export const Stats = () => {
  const { t } = useTranslation();
  const stats: StatCard[] = [
    {
      number: 200,
      title: t("stats.stat1"),
    },
    {
      number: 21,
      title: t("stats.stat2"),
    },
    {
      number: 403,
      title: t("stats.stat3"),
    },
    {
      number: 53,
      title: t("stats.stat4"),
    },
  ];
  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {stats.map((stat, idx) => {
            return (
              <Grid key={idx} item md={3}>
                <StatItem {...stat} />
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
