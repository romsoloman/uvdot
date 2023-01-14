import { Box, Button, Container, styled, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-scroll";
import theme from "../styled/theme";

const Section = styled("section")(({ theme }) => ({
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  filter: "grayscale(0.8)",
  backgroundColor: theme.palette.background.default,
  paddingTop: theme.spacing(12),
  paddingBottom: theme.spacing(12),
  [theme.breakpoints.up("md")]: {
    paddingTop: theme.spacing(37),
    paddingBottom: theme.spacing(37),
  },
}));

export default function Header() {
  const { t } = useTranslation();
  const content = {
    "header-p1": t("header.title"),
    "header-p2": t("header.subtitle"),
    description: t("header.description"),
    "primary-action": t("contact.title"),
  };

  return (
    <Section
      style={{
        backgroundImage: `url("/assets/images/header/background-1.jpg")`,
      }}
    >
      <Container maxWidth="md">
        <Box textAlign="center" color="common.white">
          <Typography variant="h1" component="h1" gutterBottom={true}>
            <Typography
              color="common.white"
              variant="h1"
              fontWeight={800}
              component="span"
            >
              {content["header-p1"]}
            </Typography>
          </Typography>
          <Container maxWidth="sm">
            <Typography variant="h4" color="common.white" paragraph={true}>
              {/* {content["description"]} */}
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
                  backgroundColor: theme.palette.common.white,
                  color: theme.palette.common.black,
                  "&:hover": {
                    backgroundColor: theme.palette.common.black,
                    color: theme.palette.common.white,
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
