import {
  alpha,
  FormControl,
  InputBase,
  InputLabel,
  styled,
  TextField,
} from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../interfaces/contact.interface";

const StyledInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: theme.spacing(1),
    position: "relative",
    backgroundColor: theme.palette.mode === "light" ? "#fcfcfb" : "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: theme.typography.body1.fontSize,
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

export const Input = ({
  name,
  multiline,
  rows,
}: {
  name: keyof ContactForm;
  multiline?: boolean;
  rows?: number;
}) => {
  const { t } = useTranslation();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useFormContext<ContactForm>();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => (
        <FormControl variant="standard" fullWidth>
          <InputLabel shrink htmlFor="bootstrap-input">
            {t(`form.${name}`)}
          </InputLabel>
          <StyledInput
            multiline={multiline}
            rows={multiline ? rows : 0}
            fullWidth
            {...field}
          />
        </FormControl>
      )}
    />
  );
};
