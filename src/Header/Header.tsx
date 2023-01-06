import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import background from "../../public/assets/images/Header/background-2.jpg";

const Section = styled("section")(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "grayscale(0.7)",
  backgroundColor: theme.palette.primary.main,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(27),
    paddingBottom: theme.spacing(27),
  },
}));

export default function Header() {
  const { t } = useTranslation("common");
  const content = {
    "header-p1": "Lorem ipsum dolor",
    "header-p2": "sit amet, consectetur adipiscing elit.",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.",
    "primary-action": "Action",
    "secondary-action": "Action",
    pattern: background.src,
  };

  return (
    <Section style={{ backgroundImage: `url("${content["pattern"]}")` }}>
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h2" component="h2" gutterBottom={true}>
            <Typography color="secondary" variant="h2" component="span">
              {content["header-p1"]}
            </Typography>
            <Typography variant="h2" component="span">
              {content["header-p2"]}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography
              variant="subtitle1"
              color="common.white"
              paragraph={true}
            >
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Button variant="contained" color="primary">
              <Typography
                variant="button"
                fontWeight="bold"
                color="common.white"
              >
                {content["primary-action"]}
              </Typography>
            </Button>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
