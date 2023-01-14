import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import theme from "../styled/theme";

const Section = styled("section")(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(27),
    paddingBottom: theme.spacing(27),
  },
}));

export default function Header() {
  const { t } = useTranslation();
  const content = {
    "header-p1": "Lorem ipsum dolor",
    "header-p2": "sit amet, consectetur adipiscing elit.",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus.",
    "primary-action": t("contact.title"),
    pattern: "",
  };

  return (
    <Section
      style={{
        backgroundImage: `url("${content["pattern"]}")`,
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" color="common.black">
          <Typography variant="h1" component="h1" gutterBottom={true}>
            <Typography color="common.black" variant="h1" component="span">
              {content["header-p1"]}
            </Typography>
            <Typography variant="h1" component="span" color="common.black">
              {content["header-p2"]}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="h4" color="common.black" paragraph={true}>
              {content["description"]}
            </Typography>
          </Container>
          <Box mt={3}>
            <Link
              key={"contact"}
              activeClass="active"
              to={"contact"}
              spy={true}
              smooth={true}
              offset={-100}
              duration={700}
              delay={200}
            >
              <Button
                sx={{
                  width: 220,
                  backgroundColor: theme.palette.common.black,
                  color: theme.palette.common.white,
                  "&:hover": {
                    backgroundColor: theme.palette.common.white,
                    color: theme.palette.common.black,
                  },
                }}
                variant="contained"
              >
                <Typography variant="h5" fontWeight="bold" color="inherit">
                  {content["primary-action"]}
                </Typography>
              </Button>
            </Link>
          </Box>
        </Box>
      </Container>
    </Section>
  );
}
