import { Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "../Input/Input";
import { ContactForm } from "../interfaces/contact.interface";
import { StyledWrapper } from "../styled/StyledWrapper";

export const Contact = () => {
  const { t } = useTranslation();
  const methods = useForm<ContactForm>();
  const onSubmit = methods.handleSubmit((data) => console.log(data));
  return (
    <StyledWrapper
      sx={{ bgcolor: (theme) => theme.palette.background.default }}
    >
      <Typography variant="h2" textAlign="center">
        {t("contact.title")}
      </Typography>
      <Container maxWidth="lg">
        <Grid container mt={10}>
          <Grid item md={7}>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={4}>
                    <Input name="name" />
                  </Grid>
                  <Grid item xs={4}>
                    <Input name="phone" />
                  </Grid>
                  <Grid item xs={8}>
                    <Input name="email" />
                  </Grid>
                  <Grid item xs={8}>
                    <Input name="message" multiline rows={5} />
                  </Grid>
                </Grid>
              </form>
            </FormProvider>
          </Grid>
          <Grid item md={5}>
            {/* MAP - with office location */}
          </Grid>
        </Grid>
      </Container>
    </StyledWrapper>
  );
};
