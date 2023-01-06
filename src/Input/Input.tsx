import { InputBase, TextField } from "@mui/material";
import React from "react";
import { Controller, useFormContext } from "react-hook-form";
import { useTranslation } from "react-i18next";
import { ContactForm } from "../interfaces/contact.interface";

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
        <TextField
          label={t(`form.${name}`)}
          variant="standard"
          {...field}
          fullWidth
          multiline={multiline}
          rows={multiline ? rows : 0}
        />
      )}
    />
  );
};
