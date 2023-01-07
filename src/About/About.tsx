import { Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
import { StyledWrapper } from "../styled/StyledWrapper";

export const About = () => {
  return (
    <StyledWrapper>
      <Container maxWidth="lg">
        <Typography component="h2" variant="h2" gutterBottom textAlign="center">
          lorem lorem
        </Typography>
        <Typography component="h5" variant="h5" textAlign="center">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae,
          temporibus iure, eius deserunt repellendus nesciunt unde similique aut
          pariatur asperiores dolorum aspernatur quam laudantium, expedita
          ducimus obcaecati magnam qui magni.{" "}
        </Typography>
      </Container>
    </StyledWrapper>
  );
};
