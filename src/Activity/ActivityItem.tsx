import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import { ActivityCard } from "../interfaces/activty.interface";

export const ActivityItem = ({ icon, title, subtitle }: ActivityCard) => {
  return (
    <Box
      sx={{
        height: 150,
        width: { xs: "100%", md: 320 },
        display: "flex",
      }}
    >
      <Image src={icon} alt="" width={50} height={50} />
      <Box ml={2}>
        <Typography
          variant="h5"
          color="common.black"
          fontWeight={"bold"}
          mb={1}
          textAlign="left"
        >
          {title}
        </Typography>
        <Typography variant="body2" color="grey.700" textAlign="left">
          {subtitle}
        </Typography>
      </Box>
    </Box>
  );
};
