import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ActivityCard } from "../interfaces/activty.interface";
import exampleIcon from "../../public/assets/icons/activiy/example.svg";

export const ActivityItem = ({ icon, title, subtitle }: ActivityCard) => {
  return (
    <Box
      sx={{
        height: 150,
        width: 320,
        display: "flex",
      }}
    >
      <Image src={exampleIcon} alt="" width={50} height={50} />
      <Box ml={2}>
        <Typography
          variant="subtitle1"
          color="common.black"
          fontWeight={"bold"}
          mb={1}
          textAlign="left"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="common.black" textAlign="left">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
