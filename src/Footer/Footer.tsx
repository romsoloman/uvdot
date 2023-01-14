import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { PAGES } from "../Appbar/Appbar";
import Logo from "../Logo/Logo";
import telephone from "../../public/assets/icons/contact/telephone.svg";
import email from "../../public/assets/icons/contact/mail.svg";
import pin from "../../public/assets/icons/contact/pin.svg";
import { Link as ScrollLink } from "react-scroll";
import Link from "next/link";
import theme from "../styled/theme";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: (theme) => theme.spacing(4),
        paddingLeft: { xs: theme.spacing(2), md: theme.spacing(4) },
        paddingRight: { xs: theme.spacing(2), md: theme.spacing(4) },
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{ my: (theme) => theme.spacing(4) }}
      >
        <Grid item xs={6} md={6}>
          <Box display="flex" alignItems="center" sx={{ maxWidth: 300 }}>
            <Logo />
            <Typography variant="h5" sx={{ ml: 2, whiteSpace: "nowrap" }}>
              {t("title")}
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent={"flex-end"} item xs={6} md={6}>
          {PAGES.map((page) => (
            <Button
              key={page.to}
              sx={{
                ml: { xs: 0, md: 3 },
                color: (theme) => theme.palette.common.black,
                display: "block",
              }}
            >
              <ScrollLink
                activeClass="active"
                to={page.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
                delay={200}
              >
                <Typography textAlign="center" variant="subtitle1">
                  {page.label}
                </Typography>
              </ScrollLink>
            </Button>
          ))}
        </Grid>
      </Grid>
      <Divider />
      <Grid
        container
        justifyContent="space-between"
        sx={{ my: (theme) => theme.spacing(4) }}
      >
        <Grid item md={6}>
          <Typography>&#169; {t("footer.reservedRights")} </Typography>
        </Grid>
        <Grid container item xs={12} md={6} justifyContent="flex-end">
          <Box
            ml={{ xs: 0, md: 2 }}
            mt={{ xs: 2, md: 0 }}
            display="flex"
            alignItems="center"
            width={{ xs: "100%", md: "auto" }}
          >
            <Image src={telephone} alt="telephone" width={15} height={15} />
            <Link href="tel:0526841616">
              <Typography variant="body2" ml={1}>
                {t("contact.phone")}
              </Typography>
            </Link>
          </Box>
          <Box
            ml={{ xs: 0, md: 2 }}
            mt={{ xs: 2, md: 0 }}
            display="flex"
            alignItems="center"
            width={{ xs: "100%", md: "auto" }}
          >
            <Image src={email} alt="email" width={15} height={15} />
            <Typography variant="body2" ml={1}>
              {t("contact.email")}
            </Typography>
          </Box>
          <Box
            ml={{ xs: 0, md: 2 }}
            mt={{ xs: 2, md: 0 }}
            display="flex"
            alignItems="center"
            width={{ xs: "100%", md: "auto" }}
          >
            <Image src={pin} alt="pin" width={15} height={15} />
            <Typography variant="body2" ml={1}>
              {t("contact.address")}
            </Typography>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};
