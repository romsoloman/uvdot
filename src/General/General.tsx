import { Box, Container, Grid, Typography } from "@mui/material";
import i18next from "i18next";
import Image from "next/image";
import React from "react";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";
import check from "../../public/assets/icons/general/check.svg";

export const General = () => {
  return (
    <StyledWrapper sx={{ backgroundColor: theme.palette.background.default }}>
      <Container maxWidth="lg">
        <Grid container justifyContent="space-between">
          <Grid container item md={4} maxHeight={100}>
            <Typography fontWeight={600} variant="h2" gutterBottom>
              Lorem ipsum dolor
            </Typography>
            <Typography>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta,
              aperiam repellat neque, consequatur perferendis labore
            </Typography>
          </Grid>
          <Grid container item md={5}>
            <Grid item>
              <Typography>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
              </Typography>
            </Grid>
            <Grid container spacing={2} mt={4}>
              {Array.from(Array(8), (e, i) => {
                return (
                  <Grid key={i} item md={6} display="flex">
                    <Image src={check} alt="check" width={15} height={15} />
                    <Typography variant="body2" sx={{ ml: 2 }}>
                      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    </Typography>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
