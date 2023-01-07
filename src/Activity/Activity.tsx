import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { ActivityCard } from "../interfaces/activty.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import { ActivityItem } from "./ActivityItem";

const activities: ActivityCard[] = [
  {
    icon: "",
    title: "",
    subtitle: "",
  },
  {
    icon: "",
    title: "",
    subtitle: "",
  },
  {
    icon: "",
    title: "",
    subtitle: "",
  },
  {
    icon: "",
    title: "",
    subtitle: "",
  },
  {
    icon: "",
    title: "",
    subtitle: "",
  },
  {
    icon: "",
    title: "",
    subtitle: "",
  },
];

export const Activity = () => {
  const content = {
    title: "Lorem ipsum dolor",
    subtitle:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pamet finibus.",
    "primary-action": "Action",
  };
  return (
    <StyledWrapper
      sx={{ backgroundColor: (theme) => theme.palette.background.default }}
    >
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
