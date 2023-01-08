import { Box, Button, Divider, Grid, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";
import { PAGES } from "../Appbar/Appbar";
import Logo from "../Logo/Logo";
import telephone from "../../public/assets/icons/contact/telephone.svg";
import email from "../../public/assets/icons/contact/mail.svg";
import pin from "../../public/assets/icons/contact/pin.svg";
import { Link } from "react-scroll";

export const Footer = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        p: (theme) => theme.spacing(4),
        bgcolor: (theme) => theme.palette.background.paper,
      }}
    >
      <Grid
        container
        justifyContent="space-between"
        sx={{ my: (theme) => theme.spacing(4) }}
      >
        <Grid item md={6}>
          <Box display="flex" alignItems="center" sx={{ maxWidth: 300 }}>
            <Logo />
            <Typography variant="h5" sx={{ ml: 2 }}>
              {t("title")}
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="flex-end" item md={6}>
          {PAGES.map((page) => (
            <Button
              key={page.to}
              sx={{
                ml: 3,
                color: (theme) => theme.palette.common.black,
                display: "block",
              }}
            >
              <Link
                activeClass="active"
                to={page.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
              >
                <Typography textAlign="center" variant="subtitle1">
                  {page.label}
                </Typography>
              </Link>
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
        <Grid container item md={6} justifyContent="flex-end">
          <Box ml={2} display="flex" alignItems="center">
            <Image src={telephone} alt="telephone" width={15} height={15} />
            <Typography variant="body2" ml={1}>
              {t("contact.phone")}
            </Typography>
          </Box>
          <Box ml={2} display="flex" alignItems="center">
            <Image src={email} alt="email" width={15} height={15} />
            <Typography variant="body2" ml={1}>
              {t("contact.email")}
            </Typography>
          </Box>
          <Box ml={2} display="flex" alignItems="center">
            <Image src={pin} alt="pin" width={15} height={15} />
            <Typography variant="body2" ml={1}>
              {t("contact.address")}
            </Typography>
          </Box>
          {/* TODO: add social media links */}
        </Grid>
      </Grid>
    </Box>
  );
};
