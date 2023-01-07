import { Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { FormProvider, useForm } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { Input } from "../Input/Input";
import { ContactForm } from "../interfaces/contact.interface";
import { StyledWrapper } from "../styled/StyledWrapper";
import theme from "../styled/theme";

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
          <Grid item md={5}>
            <FormProvider {...methods}>
              <form onSubmit={onSubmit}>
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Input name="name" />
                  </Grid>
                  <Grid item xs={6}>
                    <Input name="phone" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="email" />
                  </Grid>
                  <Grid item xs={12}>
                    <Input name="message" multiline rows={5} />
                  </Grid>
                  <Grid item xs={12}>
                    <Button
                      fullWidth
                      sx={{
                        backgroundColor: theme.palette.primary.main,
                        color: theme.palette.common.white,
                      }}
                    >
                      {t("buttons.submit")}
                    </Button>
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
