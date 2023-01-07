import {
  Box,
  Button,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { PAGES } from "../Appbar/Appbar";
import Logo from "../Logo/Logo";

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
          <Box display="flex" alignItems="center" sx={{ maxWidth: 150 }}>
            <Logo />
            <Typography variant="h5" sx={{ ml: 2 }}>
              {t("title")}
            </Typography>
          </Box>
        </Grid>
        <Grid container justifyContent="flex-end" item md={6}>
          {PAGES.map((page) => (
            <Button
              key={page}
              sx={{
                ml: 3,
                color: (theme) => theme.palette.common.black,
                display: "block",
              }}
            >
              <Typography variant="subtitle1">{page}</Typography>
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
        <Grid item md={6}>
          {/* TODO: add social media links */}
        </Grid>
      </Grid>
    </Box>
  );
};
