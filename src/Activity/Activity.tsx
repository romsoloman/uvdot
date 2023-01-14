import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import i18n from "../../i18";
import { ActivityCard } from "../interfaces/activty.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import { ActivityItem } from "./ActivityItem";

const activities: ActivityCard[] = [
  {
    icon: "/assets/icons/activiy/1.svg",
    title: i18n.t("activity.caption1"),
    subtitle: i18n.t("activity.subtitle1"),
  },
  {
    icon: "/assets/icons/activiy/5.svg",
    title: i18n.t("activity.caption2"),
    subtitle: i18n.t("activity.subtitle2"),
  },
  {
    icon: "/assets/icons/activiy/6.svg",
    title: i18n.t("activity.caption3"),
    subtitle: i18n.t("activity.subtitle3"),
  },
  {
    icon: "/assets/icons/activiy/3.svg",
    title: i18n.t("activity.caption4"),
    subtitle: i18n.t("activity.subtitle4"),
  },
  {
    icon: "/assets/icons/activiy/2.svg",
    title: i18n.t("activity.caption5"),
    subtitle: i18n.t("activity.subtitle5"),
  },
  {
    icon: "/assets/icons/activiy/4.svg",
    title: i18n.t("activity.caption6"),
    subtitle: i18n.t("activity.subtitle6"),
  },
];

export const Activity = () => {
  const { t } = useTranslation();
  const content = {
    title: t("activity.title"),
    headtitle: t("activity.headtitle"),
    subtitle: t("activity.subtitle"),
    "primary-action": "Action",
  };
  return (
    <StyledWrapper sx={{ bgcolor: theme.palette.background.paper }}>
      <Box textAlign="center" color="common.white">
        <Typography
          variant="h5"
          fontWeight={700}
          gutterBottom={true}
          color="secondary.main"
        >
          {content["headtitle"]}
        </Typography>
        <Typography
          color="common.black"
          variant="h2"
          fontWeight={700}
          gutterBottom={true}
        >
          {content["title"]}
        </Typography>
        <Container maxWidth="xs">
          <Typography
            variant="h6"
            sx={{ color: theme.palette.grey[700] }}
            paragraph={true}
          >
            {content["subtitle"]}
          </Typography>
        </Container>
        <Container maxWidth="lg">
          <Grid container mt={10} spacing={2}>
            {activities.map((activity) => {
              return (
                <Grid item md={4} key={activity.title}>
                  <ActivityItem {...activity} />
                </Grid>
              );
            })}
          </Grid>
        </Container>
      </Box>
    </StyledWrapper>
  );
};
