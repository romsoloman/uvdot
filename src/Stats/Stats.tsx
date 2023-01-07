import { Container, Grid } from "@mui/material";
import React from "react";
import { StatCard } from "../interfaces/stats.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import { StatItem } from "./StatItem";

const stats: StatCard[] = [
  {
    number: 200,
    title: "lorem daslkd",
  },
  {
    number: 21,
    title: "lorem daslkd",
  },
  {
    number: 403,
    title: "lorem daslkd",
  },
  {
    number: 53,
    title: "lorem daslkd",
  },
];

export const Stats = () => {
  return (
    <StyledWrapper sx={{ backgroundColor: theme.palette.background.default }}>
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
