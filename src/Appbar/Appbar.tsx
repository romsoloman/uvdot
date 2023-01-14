import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import i18n from "../../i18";
import { useTranslation } from "react-i18next";
import Logo from "../Logo/Logo";
import useScrollTrigger from "@mui/material/useScrollTrigger";
import theme from "../styled/theme";
import { Link, animateScroll as scroll } from "react-scroll";

// TODO: put in constants
export const PAGES = [
  { label: i18n.t("about", { ns: "appbar" }), to: "about" },
  // i18n.t("stories", { ns: "appbar" }),
  { label: i18n.t("contact", { ns: "appbar" }), to: "contact" },
];

const Appbar = () => {
  const { t } = useTranslation("appbar");

  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="fixed"
      // color="transparent"
      sx={{
        boxShadow: "none",
        backgroundColor: theme.palette.common.white,
        zIndex: 9999,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box
            sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            component="a"
            href="/"
          >
            <Logo />
          </Box>
          <Box
            component="a"
            href="/"
            sx={{
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <Logo />
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: { xs: "flex", md: "none" },
              justifyContent: "flex-end",
              color: "common.black",
            }}
          >
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {PAGES.map((page) => (
                <MenuItem key={page.to} onClick={handleCloseNavMenu}>
                  <Link
                    activeClass="active"
                    to={page.to}
                    spy={true}
                    smooth={true}
                    offset={-100}
                    duration={700}
                    delay={200}
                  >
                    <Typography textAlign="center">{page.label}</Typography>
                  </Link>
                </MenuItem>
              ))}
            </Menu>
          </Box>

          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {PAGES.map((page) => (
              <Link
                key={page.to}
                activeClass="active"
                to={page.to}
                spy={true}
                smooth={true}
                offset={-100}
                duration={700}
                delay={200}
                style={{
                  margin: "8px",
                  color: "black",
                  display: "block",
                  cursor: "pointer",
                }}
              >
                <Typography textAlign="center" variant="subtitle1">
                  {page.label}
                </Typography>
              </Link>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default Appbar;
