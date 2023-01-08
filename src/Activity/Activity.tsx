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
    icon: "",
    title: i18n.t("activity.caption1"),
    subtitle: i18n.t("activity.subtitle1"),
  },
  {
    icon: "",
    title: i18n.t("activity.caption2"),
    subtitle: i18n.t("activity.subtitle2"),
  },
  {
    icon: "",
    title: i18n.t("activity.caption3"),
    subtitle: i18n.t("activity.subtitle3"),
  },
  {
    icon: "",
    title: i18n.t("activity.caption4"),
    subtitle: i18n.t("activity.subtitle4"),
  },
  {
    icon: "",
    title: i18n.t("activity.caption5"),
    subtitle: i18n.t("activity.subtitle5"),
  },
  {
    icon: "",
    title: i18n.t("activity.caption6"),
    subtitle: i18n.t("activity.subtitle6"),
  },
];

export const Activity = () => {
  const { t } = useTranslation();
  const content = {
    title: t("activity.title"),
    subtitle: "",
    "primary-action": "Action",
  };
  return (
    <StyledWrapper sx={{ bgcolor: theme.palette.background.default }}>
      <Box textAlign="center" color="common.white">
        <Typography
          color="common.black"
          variant="h2"
          fontWeight={700}
          gutterBottom={true}
        >
          {content["title"]}
        </Typography>
        <Container maxWidth="sm">
          <Typography variant="h4" color="common.black" paragraph={true}>
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
